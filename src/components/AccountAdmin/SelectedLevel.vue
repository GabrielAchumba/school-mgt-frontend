<template>
 <div class="row">

    <Form
    class="col-12 q-pa-sm"
    :formData="form"
    @onFileSelected="onFileSelected($event)"/>

    <div class="col-12 q-pa-sm text-center">

      <span class="text-h6">Account Name ({{category}}): {{ selectedCategoryBankDetails.categoryAccountName }} </span>
      <br>
      <span class="text-h6">Bank Name ({{category}}): {{ selectedCategoryBankDetails.categoryBankName }}</span>
      <br>
      <span class="text-h6">Account Number ({{category}}): {{ selectedCategoryBankDetails.categoryAccountNumber }}</span>
      <br>
      <br>
      
  </div>

   <div class="col-12 q-pa-sm text-center">

      <span class="text-h6">Account Name: {{ selectedQualifiedLevel.accountName }}</span>
      <br>
      <span class="text-h6">Bank Name: {{ selectedQualifiedLevel.bankName }}</span>
      <br>
      <span class="text-h6">Account Number: {{ selectedQualifiedLevel.accountNumber }}</span>
      <br>
      <br>
      
  </div>

    <div class="col-12 text-center q-pa-sm">
      <q-btn
      label="Cancel"
      style="width:95%"
      type="button"
      size="md"
      no-caps
      class="q-ma-sm bg-accent text-primary"
      @click="cancel"
      />
    </div>

    <div class="col-12 text-center q-pa-sm">
      <q-btn
        label="Submit Payment"
        style="width:95%"
        type="button"
        size="md"
        no-caps
        class="q-ma-sm bg-accent text-primary"
        @click="UploadAction"
      />
    </div>


  <q-dialog v-model="isUploadFileDialog">
    <MessageBox
    title="Upload Pay Slip"
    :message="`Do you want to upload pay slip?`"
    okayEvent="okayUploadFile"
    cancelEvent="cancelUploadFile"
    @okayUploadFile="okayUploadFile($event)"
    @cancelUploadFile="cancelUploadFile($event)"
    >
    </MessageBox>
  </q-dialog>

  <q-dialog v-model="isUploadFileSuccessDialog">
    <MessageBox
    title="Success"
    :message="`Pay slip saved successfully.`"
    okayEvent="okayUploadFileSucess"
    cancelEvent="cancelUploadFileSuccess"
    @okayUploadFileSucess="okayUploadFileSucess($event)"
    @cancelUploadFileSuccess="cancelUploadFileSuccess($event)"
    >
    </MessageBox>
  </q-dialog>

  <q-dialog v-model="isUploadFileFailureDialog">
    <MessageBox
    title="Failure"
    :message="`${message}.`"
    okayEvent="okayUploadFileFailure"
    cancelEvent="cancelUploadFileFailure"
    @okayUploadFileFailure="okayUploadFileFailure($event)"
    @cancelUploadFileFailure="cancelUploadFileFailure($event)"
    >
    </MessageBox>
  </q-dialog>

  <q-dialog v-model="isOffPlatformPaymentDialog">
    <MessageBox
    title="Complete Payment"
    :message="`Do you want to complete your payment cycle?`"
    okayEvent="okayOffPlatformPayment"
    cancelEvent="cancelOffPlatformPayment"
    @okayOffPlatformPayment="okayOffPlatformPayment($event)"
    @cancelOffPlatformPayment="cancelOffPlatformPayment($event)"
    >
    </MessageBox>
  </q-dialog>

  <q-dialog v-model="isOffPlatformPaymentSuccessDialog">
    <MessageBox
    title="Success"
    :message="`Payment cycle completed successfully.`"
    okayEvent="okayOffPlatformPaymentSucess"
    cancelEvent="cancelOffPlatformPaymentSuccess"
    @okayOffPlatformPaymentSucess="okayOffPlatformPaymentSucess($event)"
    @cancelOffPlatformPaymentSuccess="cancelOffPlatformPaymentSuccess($event)"
    >
    </MessageBox>
  </q-dialog>

  <q-dialog v-model="isOffPlatformPaymentFailureDialog">
    <MessageBox
    title="Failure"
    :message="`${messageOffPlatformPayment}.`"
    okayEvent="okayOffPlatformPaymentFailure"
    cancelEvent="cancelOffPlatformPaymentFailure"
    @okayOffPlatformPaymentFailure="okayOffPlatformPaymentFailure($event)"
    @cancelOffPlatformPaymentFailure="cancelOffPlatformPaymentFailure($event)"
    >
    </MessageBox>
  </q-dialog>

  </div>
</template>

<script>
  import MessageBox from "../dialogs/MessageBox.vue"
  import Form from "../Form/Form.vue"
  import * as gcphttp from "../../store/modules/gcp-services"
  import { CreateCashOutPayload } from "./utils"
  export default {
    components:{
      MessageBox,
      Form
    },
    props:{
        selectedQualifiedLevel: {
            type: Object,
            default: {},
        },
        selectedCategoryBankDetails: {
            type: Object,
            default: {},
        },
        IdentityModel: {
            type: Object,
            default: {},
        },
        CashOut: {
            type: Object,
            default: {},
        },
        levelIndex: {
            type: Number,
            default: 0,
        },
        category:{
            type: String,
            default: "",
        },
        UploadPhotoUrl:{
            type: String,
            default: "",
        },
        CreateCashOutUrl:{
            type: String,
            default: "",
        },
        confirmCategoryLevelPaymentUrl:{
            type: String,
            default: "",
        }
    },
    data() {
      return {
        fileUrl: "",
        fileName: "",
        originalFileName: "",
        fileUploadError: "No Error",
        SelectedFile: null,
        files: null,
        isUploadFileDialog: false,
        isUploadFileSuccessDialog: false,
        isUploadFileFailureDialog: false,
        message: "",
        isOffPlatformPaymentDialog: false,
        isOffPlatformPaymentSuccessDialog: false,
        isOffPlatformPaymentFailureDialog: false,
        messageOffPlatformPayment: "",
          form: {
                title: "Teller",
                qSelects: [],
                qInputs: [],
                qFiles: [
                    { label: "Picture (1MB Maximum)", name: "", type: "file",
                    selectedFile: null,
                    showPreview: false,
                imagePreview: '',
                    files: [],
                    Template: {
                        sn: 0,
                        iconName: "",
                        visible: false,
                    }}
                ],
                qColors: [],
                qBtns: [],
                qDates: [],
                GroupedCheckBoxes: [],
                clearQInputs(){
                    var i = 0;
                    for (i = 0; i < this.qInputs.length; i++){
                        this.qInputs[i].name = "";
                    }
                },
                clearQFiles(){
                    var i = 0;
                    for (i = 0; i < this.qFiles.length; i++){
                        this.qFiles[i].name = "";
                    }
                },
            }

      }
    },
    methods: {
      onFileSelected(payload){
            var context = this;
            context.form.qFiles[0].selectedFile = payload.selectedFile;
            let reader  = new FileReader();
            reader.addEventListener("load", function () {
            context.form.qFiles[0].showPreview = true;
            context.form.qFiles[0].imagePreview = reader.result;
            }.bind(context), false);
            if(context.form.qFiles[0].selectedFile){
                if (/\.(jpe?g|png|gif)$/i.test(context.form.qFiles[0].selectedFile.name)) {
                reader.readAsDataURL(context.form.qFiles[0].selectedFile);
              }else{
                      alert("Wrong image format. Only supports .jpg, .jpeg, .png and .gif")
              }
          }    
      },
      UploadAction(){
        var context =  this;
        context.isUploadFileDialog = true;
      },
      cancelUploadFile(){
        var context =  this;
        context.isUploadFileDialog = false;
      },
      cancelUploadFileSuccess(){
        var context = this;
        context.isUploadFileSuccessDialog = false;
      },
      okayUploadFileSucess(){
        var context = this;
        context.isUploadFileSuccessDialog = false;
      },
      cancelUploadFileFailure(){
        var context = this;
        context.isUploadFileFailureDialog = false;
      },
      okayUploadFileFailure(){
        var context = this;
        context.isUploadFileFailureDialog = false;
      },
      OffPlatformPayment(){
        var context = this;
        context.isOffPlatformPaymentDialog = true;
      },
      cancelOffPlatformPayment(){
        var context = this;
        context.isOffPlatformPaymentDialog = false;
      },
      async uploadPicture(){
        console.log("uploadPicture started")
            var context = this;
            const formData = new FormData();
            console.log("selectedFile: ", context.form.qFiles[0].selectedFile)
            formData.append('file', context.form.qFiles[0].selectedFile);
            
            var url = `gcp/upload`;
            const payload = {
                url,
                req: formData,
            }
            console.log("payload: ", payload)
            //uploadLogo
            var response = await gcphttp.post(payload)
            context.fileUrl = response.data.url;
            context.fileName = response.data.fileName;
            context.originalFileName = response.data.originalFileName;
            context.fileUploadError = response.data.error;
            console.log("fileUrl: ", context.fileUrl)
             console.log("uploadPicture completed")
        },
        async okayUploadFile(){
          console.log("okayUploadFile started")
            var context = this;
            if(context.form.qFiles[0].imagePreview){
              await context.uploadPicture();
            }
            if(context.fileUploadError === "No Error") {
              await context.okayOffPlatformPayment();
            }else{
              alert("File upload error. Please try again")
            }
            console.log("okayUploadFile completed")
            
        },
      async okayOffPlatformPayment(){
         console.log("okayOffPlatformPayment started")
          var context = this;

           var todayDate = new Date();

           const returnOnInvestment = Number(context.selectedQualifiedLevel.returnOnInvestment)

          const payload = CreateCashOutPayload(context.selectedQualifiedLevel,
                context.selectedCategoryBankDetails, context.IdentityModel, 
                todayDate, context.fileUrl, context.originalFileName, context.category,
                context.levelIndex, returnOnInvestment);

          console.log("payload: ", payload)
          var response = await this.$store.dispatch('cashOutStore/CreateCashOutDTO', {
              url: context.CreateCashOutUrl,
              request: payload
              })

          const { 
            data : {
                    data: result,
                    message,
                    success,
                  }
          } = response

          context.isOffPlatformPaymentDialog = false;
          if(success){
            this.$router.push(`/${context.confirmCategoryLevelPaymentUrl}`)
            context.isUploadFileDialog = true;
          }else{
            context.isOffPlatformPaymentFailureDialog = true;
            context.messageOffPlatformPayment = message;
          }
          console.log("okayOffPlatformPayment completed")
      },
      cancel(){
        var context = this;
        this.$router.push(`/${context.confirmCategoryLevelPaymentUrl}`)
      },
      okayOffPlatformPaymentSucess(){
        var context = this;
        context.isOffPlatformPaymentSuccessDialog = false;
      },
      cancelOffPlatformPaymentSuccess(){
        var context = this;
        context.isOffPlatformPaymentSuccessDialog = false;
      },
      okayOffPlatformPaymentFailure(){
        var context = this;
        context.isOffPlatformPaymentFailureDialog = false;
      },
      okayOffPlatformPaymentFailure(){
        var context = this;
        context.isOffPlatformPaymentFailureDialog = false;
      }
    },
  }
</script>