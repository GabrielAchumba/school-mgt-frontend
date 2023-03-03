<template>
<div>

<div class="row text-center flex flex-center q-pb-lg">


<div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
 <div class="q-pa-md" style="font-family: Lato;">
  
  <q-card class="q-pa-sm q-gutter-sm"> 

            <q-card-section class="bg-accent text-primary">
            <div class="row text-center flex flex-center q-pb-lg">
              <div class="col-md-3 col-lg-3 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
              </div>
               <div class="col-md-6 col-lg-6 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                 <p>Off-Platform Payment</p>
               </div>
                
                <div class="col-md-3 col-lg-3 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                </div>
                
            </div>

          </q-card-section>

          <q-card-section>
            <div class="row text-center flex flex-center q-pb-lg bg-primary text-accent">

                
              <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">

                  <span class="text-h6">Account Name: {{ categoryAccountName }} </span>
                  <br>
                  <span class="text-h6">Bank Name: {{ categoryBankName }} </span>
                  <br>
                  <span class="text-h6">Account Number: {{ categoryAccountNumber }} </span>
                  <br>
                  <br>
                  
              </div>

            </div>

          </q-card-section>

          <q-card-section>
            <div class="row text-center flex flex-center q-pb-lg">

                
              <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">

                  <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-md">
                    <q-input outlined label="Bank Name Paid From "
                    v-model="bankNamePaidFrom">
                  </q-input>
                  </div>

                  <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-md">
                    <q-input outlined label="Account Name Paid From "
                    v-model="accountNamePaidFrom">
                  </q-input>
                  </div>

                  <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-md">
                    <q-input outlined label="Account Number Paid From "
                    v-model="accountNumberPaidFrom">
                  </q-input>
                  </div>
                  
              </div>

            </div>

          </q-card-section>


          <q-card-section>
            <div class="row text-center flex flex-center q-pb-lg">

               <div class="col-md-5 col-lg-5 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">           

                <div>
                  <div class="text-caption text-accent text-weight-bolder q-mt-sm">Investment</div>
                  <span class="text-h6 text-accent">₦{{ amount }}</span>
                </div>
               </div>
                
                <div class="col-md-2 col-lg-2 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                </div>

                
              <div 
              class="col-md-5 col-lg-5 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">

                  <input 
                  type="file" @change="onFileSelected" class="bg-accent text-primary"/>

                  <br>
                  <br>
                  <q-btn 
                  class="text-capitalize bg-accent text-primary" 
                            exact
                            size="sm" style="width:75px" dense label="Upload Paycheck"
                                type="button"
                                    @click="UploadAction" />

                    <q-btn 
                    class="text-capitalize bg-accent text-primary" 
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
  import MessageBox from "../../components/dialogs/MessageBox.vue"

import { accountn500Controller } from "../../store/modules/backendRoutes"
import { accountn1000Controller } from "../../store/modules/backendRoutes"
import { accountn2000Controller } from "../../store/modules/backendRoutes"
import { accountn5000Controller } from "../../store/modules/backendRoutes"
import { accountn10000Controller } from "../../store/modules/backendRoutes"
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
        }
      },
      components:{
        MessageBox
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
            request: {
            bankNamePaidFrom: context.bankNamePaidFrom,
            accountNamePaidFrom: context.accountNamePaidFrom,
            accountNumberPaidFrom: context.accountNumberPaidFrom,
            contributorId: id,
            base64String: context.Account.base64String,
            fileName: context.Account.fileName,
            createdYear: todayDate.getFullYear(),
            createdMonth: todayDate.getMonth() + 1,
            createdDay: todayDate.getDate(),
            username
            },
            url: "",
          }

          var response = {}

          switch(context.category){
            case "CategoryN500":
              payload.url = `${accountn500Controller}/offplatformpayment`,
              response = await this.$store.dispatch('accountStore/OffPlatformPayment', payload)
            break;
            case "CategoryN1000":
              payload.url = `${accountn1000Controller}/offplatformpayment`,
              response = await this.$store.dispatch('accountStore/OffPlatformPayment', payload)
            break;
            case "CategoryN2000":
              payload.url = `${accountn2000Controller}/offplatformpayment`,
              response = await this.$store.dispatch('accountStore/OffPlatformPayment', payload)
            break;
            case "CategoryN5000":
              payload.url = `${accountn5000Controller}/offplatformpayment`,
              response = await this.$store.dispatch('accountStore/OffPlatformPayment', payload)
            break;
            case "CategoryN10000":
              payload.url = `${accountn10000Controller}/offplatformpayment`,
              response = await this.$store.dispatch('accountStore/OffPlatformPayment', payload)
            break;
          }

           const { 
              data : {
                data: result,
                message,
                success,
              }
        } = response
        context.isOffPlatformPaymentDialog = false;

        if(success){

          switch(context.category){
              case "CategoryN500":
                this.$store.commit('accountStore/OffPlatformPayment', {
                  makeContributionsUrl: "makeContributionsN500",
                  result
                }) 
              break;
              case "CategoryN1000":
                this.$store.commit('accountStore/OffPlatformPayment', {
                  makeContributionsUrl: "makeContributionsN1000",
                  result
                }) 
              break;
              case "CategoryN2000":
                this.$store.commit('accountStore/OffPlatformPayment', {
                  makeContributionsUrl: "makeContributionsN2000",
                  result
                }) 
              break;
              case "CategoryN5000":
                this.$store.commit('accountStore/OffPlatformPayment', {
                  makeContributionsUrl: "makeContributionsN5000",
                  result
                }) 
              break;
              case "CategoryN10000":
                this.$store.commit('accountStore/OffPlatformPayment', {
                  makeContributionsUrl: "makeContributionsN10000",
                  result
                }) 
              break;
          }
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
    created() {

    }
  }
</script>