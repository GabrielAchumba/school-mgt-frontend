<template>
<div>

  <div class="row text-center bg-primary flex flex-center q-pb-lg">


  <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
  <div class="q-pa-md" style="font-family: Lato;">
    
    <q-card class="q-pa-sm q-gutter-sm"> 

              <q-card-section class="bg-primary text-accent">
              <div class="row text-center flex flex-center q-pb-lg">
                <div class="col-md-3 col-lg-3 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                </div>
                <div class="col-md-6 col-lg-6 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                  <p>Qualified Level Payment</p>
                </div>
                  
                  <div class="col-md-3 col-lg-3 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                  </div>
                  
              </div>

            </q-card-section>

            <q-card-section class="text-accent bg-primary">
              <div class="row text-center flex flex-center q-pb-lg">

                  
                <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">

                    <span class="text-h6">Account Name ({{category}}): {{ selectedCategoryBankDetails.categoryAccountName }} </span>
                    <br>
                    <span class="text-h6">Bank Name ({category}): {{ selectedCategoryBankDetails.categoryBankName }}</span>
                    <br>
                    <span class="text-h6">Account Number ({{category}}): {{ selectedCategoryBankDetails.categoryAccountNumber }}</span>
                    <br>
                    <br>
                    
                </div>

              </div>

            </q-card-section>

            <q-card-section class="text-accent bg-primary">
              <div class="row text-center flex flex-center q-pb-lg">

                  <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">

                    <span class="text-h6">Account Name: {{ selectedQualifiedLevel.accountName }}</span>
                    <br>
                    <span class="text-h6">Bank Name: {{ selectedQualifiedLevel.bankName }}</span>
                    <br>
                    <span class="text-h6">Account Number: {{ selectedQualifiedLevel.accountNumber }}</span>
                    <br>
                    <br>
                    
                </div>

              </div>

            </q-card-section>


            <q-card-section class="text-accent bg-primary">
              <div class="row text-center flex flex-center q-pb-lg">

                <div class="col-md-5 col-lg-5 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">           

                  <div>
                    <div class="text-caption text-accent text-weight-bolder q-mt-sm">Return On Investment</div>
                    <span class="text-h6">₦{{ selectedQualifiedLevel.returnOnInvestment }}</span>
                  </div>
                </div>
                  
                  <div class="col-md-2 col-lg-2 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                  </div>

                  
                <div 
                class="col-md-5 col-lg-5 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none  bg-ccent text-primary">

                    <input 
                    type="file" @change="onFileSelected"/>

                    <br>
                    <br>
                    <q-btn 
                    class="text-capitalize  bg-ccent text-primary" 
                              exact
                              size="sm" style="width:75px" dense label="Upload Paycheck"
                                  type="button"
                                      @click="UploadAction" />

                      <q-btn 
                      class="text-capitalize bg-ccent text-primary" 
                              exact
                              size="sm" style="width:75px" dense label="Click to Complete Payment"
                                  type="button"
                                      @click="OffPlatformPayment" />
                      <br>
                      <br>
                </div>

              </div>

            </q-card-section>

    </q-card>
        
    </div>
  </div>

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
    :message="`Pay slip uploaded successfully.`"
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
  import { CreateCashOutPayload } from "./utils"
  export default {
    components:{
      MessageBox
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

      }
    },
    methods: {
      onFileSelected(event){
            var context = this;
            context.files = event.target.files;
            context.SelectedFile = event.target.files[0];
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
            console.log("formData: ", formData)
            var response = await this.$store.dispatch('cashOutStore/UploadPhoto', {
                url: context.UploadPhotoUrl,
                request: formData,
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
              this.$store.commit('cashOutStore/UploadFile', result);
            context.isUploadFileSuccessDialog = true;
          }else{
              context.isUploadFileFailureDialog = true;
              context.message = message;
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
      async okayOffPlatformPayment(){
          var context = this;

           var todayDate = new Date();

           const returnOnInvestment = Number(context.selectedQualifiedLevel.returnOnInvestment)

          const payload = CreateCashOutPayload(context.selectedQualifiedLevel,
                context.selectedCategoryBankDetails, context.IdentityModel, 
                todayDate, context.CashOut, context.category,
                context.levelIndex, returnOnInvestment);

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
            context.isOffPlatformPaymentSuccessDialog = true;
          }else{
            context.isOffPlatformPaymentFailureDialog = true;
            context.messageOffPlatformPayment = message;
          }
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