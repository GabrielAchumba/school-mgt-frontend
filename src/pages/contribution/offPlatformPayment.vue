<template>
<div>

<q-scroll-area v-if="!showSpinner" style="height: 100vh; max-width: 100%;">
<div class="row">

  <div class="col-12 q-pa-sm bg-primary text-accent">

      <span class="text-h6">Account Name: {{ categoryAccountName }} </span>
      <br>
      <span class="text-h6">Bank Name: {{ categoryBankName }} </span>
      <br>
      <span class="text-h6">Account Number: {{ categoryAccountNumber }} </span>
      <br>
      <br>
      
  </div>

  <div class="col-12 q-pa-sm">

      <div v-if="!isOTP" class="col-12 q-pa-sm">
        <span>
          <p class="q-ma-none">Bank Name</p>
          <q-select
              class="q-ma-none"
              color="accent" 
              outlined label-color="accent"
              option-disable="inactive"
              v-model="bankNamePaidFrom"
              :options="banks"
              option-value="name"
              :option-label="'type'"
              name="type"
              emit-value
              map-options
              @input="onQSelectItemValueChanged(bankNamePaidFrom)"
              >
            </q-select>
        </span>
      </div>

      <div v-if="!isOTP" class="col-12 q-pa-sm">
        <q-input outlined label="Account Name "
        v-model="accountNamePaidFrom">
      </q-input>
      </div>

      <div v-if="!isOTP" class="col-12 q-pa-sm">
        <q-input outlined label="Account Number "
        v-model="accountNumberPaidFrom">
      </q-input>
      </div>
      
  </div>

  <Form
    class="col-12 q-pa-sm"
    :formData="form"
    @onFileSelected="onFileSelected($event)"/>


  <div class="col-12 q-ma-none">
        
    <div class="row">

      <StatusBar class="col-12 text-center q-pa-sm"
      :savingStatus="savingStatus"
      :message="messageOffPlatformPayment"
      :saveComplete="saveComplete"
      :saveError="saveError"
      @updateStatusBar="updateStatusBar"/>

      <div class="col-5 q-pa-sm">           

        <div>
          <div class="text-caption text-accent text-weight-bolder q-mt-sm">Investment</div>
          <span class="text-h6 text-accent">₦{{ amount }}</span>
        </div>
      </div>

       <div class="col-2 q-pa-sm"> </div>
        
      <div 
      class="col-5 q-pa-sm text-center">
            <q-btn 
            class="text-capitalize bg-accent text-primary" 
            exact
            size="md" style="width:95%" dense label="Submit"
            type="button"
            @click="okayOffPlatformPaymentSucess" />
      </div>

    </div>
  </div>

</div>

<!-- <q-dialog v-model="isUploadFileDialog">
  <MessageBox
  title="Upload Pay Slip"
  :message="`Do you want to upload pay slip?`"
  okayEvent="okayUploadFile"
  cancelEvent="cancelUploadFile"
  @okayUploadFile="okayUploadFile($event)"
  @cancelUploadFile="cancelUploadFile($event)"
  >
  </MessageBox>
</q-dialog> -->

<!-- <q-dialog v-model="isUploadFileSuccessDialog">
  <MessageBox
  title="Success"
  :message="`Pay slip uploaded successfully.`"
  okayEvent="okayUploadFileSucess"
  cancelEvent="cancelUploadFileSuccess"
  @okayUploadFileSucess="okayUploadFileSucess($event)"
  @cancelUploadFileSuccess="cancelUploadFileSuccess($event)"
  >
  </MessageBox>
</q-dialog> -->

<!-- <q-dialog v-model="isUploadFileFailureDialog">
  <MessageBox
  title="Failure"
  :message="`${message}.`"
  okayEvent="okayUploadFileFailure"
  cancelEvent="cancelUploadFileFailure"
  @okayUploadFileFailure="okayUploadFileFailure($event)"
  @cancelUploadFileFailure="cancelUploadFileFailure($event)"
  >
  </MessageBox>
</q-dialog> -->

<!-- <q-dialog v-model="isOffPlatformPaymentDialog">
  <MessageBox
  title="Complete Payment"
  :message="`Do you want to invest in this category?`"
  okayEvent="okayOffPlatformPayment"
  cancelEvent="cancelOffPlatformPayment"
  @okayOffPlatformPayment="okayOffPlatformPayment($event)"
  @cancelOffPlatformPayment="cancelOffPlatformPayment($event)"
  >
  </MessageBox>
</q-dialog> -->

<q-dialog v-model="isOffPlatformPaymentSuccessDialog">
  <MessageBox
  title="Invest"
  :message="`Do you want to invest in this category?`"
  okayEvent="uploadAndSavePayment"
  cancelEvent="cancelOffPlatformPaymentSuccess"
  @uploadAndSavePayment="uploadAndSavePayment($event)"
  @cancelOffPlatformPaymentSuccess="cancelOffPlatformPaymentSuccess($event)"
  >
  </MessageBox>
</q-dialog>

<!-- <q-dialog v-model="isOffPlatformPaymentFailureDialog">
  <MessageBox
  title="Failure"
  :message="`${messageOffPlatformPayment}.`"
  okayEvent="okayOffPlatformPaymentFailure"
  cancelEvent="cancelOffPlatformPaymentFailure"
  @okayOffPlatformPaymentFailure="okayOffPlatformPaymentFailure($event)"
  @cancelOffPlatformPaymentFailure="cancelOffPlatformPaymentFailure($event)"
  >
  </MessageBox>
</q-dialog> -->

</q-scroll-area>
  <div 
        v-show="showSpinner"
        class="q-gutter-md row">
            <div class="col-12 q-pa-sm absolute-center flex flex-center">
                <q-spinner
                    color="accent"
                    :size="spinnerSize"
                    :thickness="spinnerThickness"
                />
            </div>
    </div>
  </div>
</template>

<script>
  import MessageBox from "../../components/dialogs/MessageBox.vue"
  import Form from "../../components/Form/Form.vue";
  import StatusBar from "../../components/StatusBar/StatusBar.vue";

import { accountn500Controller } from "../../store/modules/backendRoutes"
import { accountn1000Controller } from "../../store/modules/backendRoutes"
import { accountn2000Controller } from "../../store/modules/backendRoutes"
import { accountn5000Controller } from "../../store/modules/backendRoutes"
import { accountn10000Controller } from "../../store/modules/backendRoutes"
import { post, get } from "../../store/modules/services" 
import *  as gcphttp from "../../store/modules/gcp-services";
import { paymentGatewayController } from "../../store/modules/backendRoutes"

  export default {
      computed: {
        IdentityModel(){
            return this.$store.getters['authenticationStore/IdentityModel'];
        },
        DoesNotHaveMoneyAccount(){
          return this.$store.getters['authenticationStore/DoesNotHaveMoneyAccount'];
        },
        HasNotPaid(){
          return this.$store.getters['accountStore/HasNotPaid'];
        },
        unContributedUser(){
          return this.$store.getters['accountStore/unContributedUser'];
        },
        isAdmin(){
          return this.$store.getters['accountStore/isAdmin'];
        },
        Account(){
          return this.$store.getters['accountStore/Account'];
        },
        showSpinner(){
            return this.$store.getters["authenticationStore/showSpinner"];
        },
        spinnerSize(){
            return this.$store.getters["authenticationStore/spinnerSize"];
        },
        spinnerThickness(){
            return this.$store.getters["authenticationStore/spinnerThickness"];
        }
      },
      components:{
        MessageBox,
        Form,
        StatusBar
      },
      props: {
          category: {
              type: String,
              default: 'CategoryN500'
          },
          amount: {
              type: String,
              default: '500.00'
          },
          categoryBankName: {
              type: String,
              default: ''
          },
          categoryAccountName: {
              type: String,
              default: '500.00'
          },
          categoryAccountNumber: {
              type: String,
              default: '500.00'
          },
      },
    data() {
      return {
        isOTP: false,
        oTP: "",
        SelectedFile: null,
        files: null,
        responseMessage: "",
        HasMoneyAccount2: false,
        bankNamePaidFrom: "",
        accountNamePaidFrom: "",
        accountNumberPaidFrom: "",
        isUploadFileDialog: false,
        isUploadFileSuccessDialog: false,
        isUploadFileFailureDialog: false,
        message: "",
        isOffPlatformPaymentDialog: false,
        isOffPlatformPaymentSuccessDialog: false,
        isOffPlatformPaymentFailureDialog: false,
        messageOffPlatformPayment: "",
        banks: [],
        paymentLabel: "Initiate Payment",
        transferCode: "",
        fileUrl: "",
        fileName: "",
        originalFileName: "",
        fileUploadError: "No Error",
        savingStatus: "",
        saveError: false,
        saveComplete: false,
        count: 0,
        minutes: 0,
        seconds: 0,
        form: {
            title: "Payment Details",
            qSelects: [],
            qInputs: [
                { label: "Details SMS or Email Alert", name: "", type: "textarea",
                selectedFile: null,
                files: [],
                Template: {
                    sn: 0,
                    iconName: "",
                    visible: false,
                }},
            ],
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
      refreshPayment(){
        var context = this;
        if(context.isOTP == true) context.isOTP = false;
        else context.isOTP = true
      },
      UploadAction(){
        var context =  this;
        context.isUploadFileDialog = true;
      },
      cancelUploadFile(){
        var context =  this;
        context.isUploadFileDialog = false;
      },
      async okayUploadFile(){
        var context = this;
            const formData = new FormData();
            for (var i in context.files) {
              formData.append('images[]', context.files[i]);
            }
          
          var url = "";

          switch(context.category){
            case "CategoryN500":
              url = `${accountn500Controller}/uploadphoto`;
            break;
            case "CategoryN1000":
              url = `${accountn1000Controller}/uploadphoto`;
            break;
            case "CategoryN2000":
              url = `${accountn2000Controller}/uploadphoto`; 
            break;
            case "CategoryN5000":
              url = `${accountn5000Controller}/uploadphoto`;
            break;
            case "CategoryN10000":
              url = `${accountn10000Controller}/uploadphoto`;
            break;
          }

          var response = await this.$store.dispatch('accountStore/UploadPhoto', {
            request: formData,
            url
            }); 

        const { 
              data : {
                data: result,
                message,
                success,
              }
        } = response
        context.isUploadFileDialog = false;
        if(success){
          this.$store.commit('accountStore/UploadFile', result);
          context.isUploadFileSuccessDialog = true;
        }else{
            context.isUploadFileFailureDialog = true;
            context.messageOffPlatformPayment = message;
        }
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
      async getBanks(){
        var context = this;
        const payload = {
          url: `${paymentGatewayController}/getbanks`
        }

        this.$store.commit("authenticationStore/setShowSpinner", true);
        var response = await get(payload)
        this.$store.commit("authenticationStore/setShowSpinner", false);
            const { 
            data : {
                data: result,
                success,
                message,
            }
        } = response

        if(success){
          context.banks = result.map((row) => {
            return {
              ...row,
              type: row.name
            }
          })
        }

      },
      onQSelectItemValueChanged(qSelect){
        console.log("qSelect: ", qSelect)
      },
      onFileSelected(payload){
            var context = this;
            context.isUploadFileDialog = false;
            context.form.qFiles[0].selectedFile = payload.selectedFile;
            let reader  = new FileReader();
            reader.addEventListener("load", function () {
            context.form.qFiles[0].showPreview = true;
            context.form.qFiles[0].imagePreview = reader.result;
            context.isUploadFileDialog = true;
            }.bind(context), false);
            if(context.form.qFiles[0].selectedFile){
                if (/\.(jpe?g|png|gif)$/i.test(context.form.qFiles[0].selectedFile.name)) {
						reader.readAsDataURL(context.form.qFiles[0].selectedFile);
				}else{
                    alert("Wrong image format. Only supports .jpg, .jpeg, .png and .gif")
                }
            }
            
            
        },
        async uploadPicture(){
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
            try{
              var response = await gcphttp.post(payload)
              context.fileUrl = response.data.url;
              context.fileName = response.data.fileName;
              context.originalFileName = response.data.originalFileName;
              context.fileUploadError = response.data.error;
              if(context.fileUploadError !== "No Error"){
                context.saveError = false;
                context.messageOffPlatformPayment = context.fileUploadError;
              }
              console.log("fileUrl: ", context.fileUrl)

            }catch(e){
              context.saveError = true;
              context.saveComplete = false;
              context.fileUploadError = "File upload error";
              context.messageOffPlatformPayment = context.fileUploadError;
              context.savingStatus = ""
            }
        },
        async uploadAndSavePayment(){
            var context = this;
            context.saveError = false;
            context.saveComplete = false;
            context.savingStatus = "Saving Investment..."
            if(context.form.qFiles[0].imagePreview && context.isUploadFileDialog === true){
              await context.uploadPicture();
            }
            if(context.fileUploadError === "No Error") {
              await context.okayOffPlatformPayment();
            }else{
              context.message = "File upload error. Please try again";
            }
            
        },
      async okayOffPlatformPayment(){
          var context = this;
          var id
          var username = ""
          if(context.isAdmin == false){
            id = context.IdentityModel.id
            username = context.IdentityModel.userName
          }else{
            id = context.unContributedUser.contributorId
            username = context.unContributedUser.username
          }

           var todayDate = new Date();

  
          const payload = {
            req: {
            bankNamePaidFrom: context.bankNamePaidFrom,
            accountNamePaidFrom: context.accountNamePaidFrom,
            accountNumberPaidFrom: context.accountNumberPaidFrom,
            contributorId: id,
            base64String: context.fileUrl,
            fileName: context.originalFileName,
            createdYear: todayDate.getFullYear(),
            createdMonth: todayDate.getMonth() + 1,
            createdDay: todayDate.getDate(),
            username,
            reference: "",
            status: "pending",
            transfer_code: "",
            transferId: "",
            integration: "",
            recipient: context.form.qInputs[0].name,
            categoryIndex: 1,
            },
            url: "",
          }

          var response = {}

          switch(context.category){
            case "CategoryN500":
              payload.url = `${accountn500Controller}/offplatformpayment`
              payload.req.categoryIndex = 1
              response = await post(payload)
            break;
            case "CategoryN1000":
              payload.url = `${accountn1000Controller}/offplatformpayment`
              payload.req.categoryIndex = 2
              response = await post(payload)
            break;
            case "CategoryN2000":
              payload.url = `${accountn2000Controller}/offplatformpayment`
              payload.req.categoryIndex = 3
              response = await post(payload)
            break;
            case "CategoryN5000":
              payload.url = `${accountn5000Controller}/offplatformpayment`
              payload.req.categoryIndex = 4
              response = await post(payload)
            break;
            case "CategoryN10000":
              payload.url = `${accountn10000Controller}/offplatformpayment`
              payload.req.categoryIndex = 5
              response = await post(payload)
            break;
          }

           const { 
              data : {
                data: result,
                message,
                success,
              }
        } = response
        context.isOffPlatformPaymentSuccessDialog = false;

        if(success){

          switch(context.category){
              case "CategoryN500":
                this.$store.commit('accountStore/OffPlatformPayment', {
                  makeContributionsUrl: "makeContributionsN500",
                  result
                }) 
                context.savingStatus = "CategoryN500 invested successfully"
              break;
              case "CategoryN1000":
                this.$store.commit('accountStore/OffPlatformPayment', {
                  makeContributionsUrl: "makeContributionsN1000",
                  result
                }) 
                context.savingStatus = "CategoryN1000 invested successfully"
              break;
              case "CategoryN2000":
                this.$store.commit('accountStore/OffPlatformPayment', {
                  makeContributionsUrl: "makeContributionsN2000",
                  result
                }) 
                context.savingStatus = "CategoryN2000 invested successfully"
              break;
              case "CategoryN5000":
                this.$store.commit('accountStore/OffPlatformPayment', {
                  makeContributionsUrl: "makeContributionsN5000",
                  result
                }) 
                context.savingStatus = "CategoryN5000 invested successfully"
              break;
              case "CategoryN10000":
                this.$store.commit('accountStore/OffPlatformPayment', {
                  makeContributionsUrl: "makeContributionsN10000",
                  result
                }) 
                context.savingStatus = "CategoryN10000 invested successfully"
              break;
          }
          context.saveError = false;
          context.saveComplete = false;
        }else{
            context.saveComplete = false;
            context.saveError = true;
            context.savingStatus = ""
            context.messageOffPlatformPayment = message;
        }

      },
      okayOffPlatformPaymentSucess(){
        var context = this;
        context.isOffPlatformPaymentSuccessDialog = true;
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
      },
      updateStatusBar(payload){
        var context = this;
        context.minutes = payload.minutes
        context.seconds = payload.seconds
      },
    },
    async created() {
      var context = this;
      await context.getBanks();
    }
  }
</script>