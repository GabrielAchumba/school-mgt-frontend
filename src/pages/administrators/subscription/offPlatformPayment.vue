<template>
<div class="q-pa-sm text-center flex flex-center">
    
    <q-card class="row q-pa-sm"> 
      <q-card-section class="col-12 text-accent">
        <span class="text-h6">Account Name: {{ categoryAccountName }} </span>
        <br>
        <span class="text-h6">Bank Name: {{ categoryBankName }} </span>
        <br>
        <span class="text-h6">Account Number: {{ categoryAccountNumber }} </span>
        <br>
        <br>
      </q-card-section>

      <q-card-section class="col-12">
        <div class="q-pa-sm">
          <q-input outlined label="Bank Name"
          v-model="bankNamePaidFrom">
        </q-input>
        </div>

        <div class="q-pa-sm">
          <q-input outlined label="Account Name"
          v-model="accountNamePaidFrom">
        </q-input>
        </div>

        <div class="q-pa-sm">
          <q-input outlined label="Account Number"
          v-model="accountNumberPaidFrom">
        </q-input>
        </div>
      </q-card-section>


      <q-card-section class="col-12">
        <div class="row">

          <div 
          class="col-md-5 col-lg-5 col-sm-12 col-xs-12 q-pa-sm text-center">
              <input 
              type="file" @change="onFileSelected" class="bg-accent text-primary"/>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 q-pa-sm text-center">           
            <div>
              <div class="text-caption text-accent text-weight-bolder">Investment</div>
              <span class="text-h6 text-accent">₦{{ amount }}</span>
            </div>
          </div>

          <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12 q-pa-sm text-center">           
              <q-icon
                      v-if="isMobile"
                      class="q-pa-sm text-accent"
                      :name="invoiceBtn.icon"
                      @click="OffPlatformPayment"
                      size="30px">
                          <q-tooltip>
                          {{ invoiceBtn.label }}
                          </q-tooltip>
              </q-icon>
              <q-btn class="q-ma-sm bg-accent text-primary"
                      v-else
                      :label="invoiceBtn.label"
                      type="button"
                      size="md"
                      :icon="invoiceBtn.icon"
                      no-caps
                      @click="OffPlatformPayment">
                      </q-btn>
          </div>

        </div>
      </q-card-section>

    </q-card>

<q-dialog v-model="isOffPlatformPaymentDialog">
  <MessageBox
  title="Complete Payment"
  :message="`Do you want to pay for the subscription(s)?`"
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
  :message="`Payment completed successfully. Please wait for less than 24 hours for verification. Thanks`"
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
  import MessageBox from "../../../components/dialogs/MessageBox.vue";
  import { post } from "../../../store/modules/services";
  export default {
      computed: {
        amount(){
          return this.$store.getters['subscriptionStore/allSubscriptions'].amount;
        },
        receiptNo(){
            return this.$store.getters["subscriptionStore/receiptNo"]
        },
        resultSubscription(){
            return this.$store.getters["subscriptionStore/resultSubscription"]
        },
        examsAndQuizSubscription(){
            return this.$store.getters["subscriptionStore/examsAndQuizSubscription"]
        },
        fileManagementSubscription(){
            return this.$store.getters["subscriptionStore/fileManagementSubscription"]
        },
        appCustomizationSubscription(){
            return this.$store.getters["subscriptionStore/appCustomizationSubscription"]
        },
        onLineLearningSubscription(){
            return this.$store.getters["subscriptionStore/onLineLearningSubscription"]
        },
        allSubscriptions(){
            return this.$store.getters["subscriptionStore/allSubscriptions"]
        },
        paymentStatus(){
            return this.$store.getters["subscriptionStore/paymentStatus"]
        },
        paymentMessage(){
            return this.$store.getters["subscriptionStore/paymentMessage"]
        },
        studentIds(){
            return this.$store.getters["subscriptionStore/studentIds"]
        },
      },
      components:{
        MessageBox
      },
    data() {
      return {
        categoryBankName: "Zenith Bank",
        categoryAccountName: "Newway Standard Global",
        categoryAccountNumber: "10002003001",
        SelectedFile: null,
        files: null,
        responseMessage: "",
        bankNamePaidFrom: "",
        accountNamePaidFrom: "",
        accountNumberPaidFrom: "",
        message: "",
        isOffPlatformPaymentDialog: false,
        isOffPlatformPaymentSuccessDialog: false,
        isOffPlatformPaymentFailureDialog: false,
        messageOffPlatformPayment: "",
        isMobile: false,
        invoiceBtn: {label: "Pay", icon: "payment"},
        Account: {base64String: "", fileName: ""},

      }
    },
    methods: {
      onFileSelected(event){
            var context = this;
            context.files = event.target.files;
            context.SelectedFile = event.target.files[0];
      },
      async okayUploadFile(){
        var context = this;
            const formData = new FormData();
            for (var i in context.files) {
              formData.append('images[]', context.files[i]);
            }
          
          var url = "payment/uploadphoto";
          const payload = {
                url,
                req: formData
          }

          console.log("payload: ", payload)
          var response = await post(payload)

        const { 
              data : {
                data: result,
                message,
                success,
              }
        } = response

        if(success){
            context.Account.base64String = result.base64String;
            context.Account.fileName = result.fileName;
        }else{
          context.message = message;
        }
      },
      OffPlatformPayment(){
        var context = this;
        context.isOffPlatformPaymentDialog = true;
      },
      cancelOffPlatformPayment(){
        var context = this;
        context.isOffPlatformPaymentDialog = false;
      },
      async paySubscription(){
          var context = this;
          var user = this.$store.getters["authenticationStore/IdentityModel"]
          
  
          const payload = {
            req: {
            bankNamePaidFrom: context.bankNamePaidFrom,
            accountNamePaidFrom: context.accountNamePaidFrom,
            accountNumberPaidFrom: context.accountNumberPaidFrom,
            base64String: context.Account.base64String,
            fileName: context.Account.fileName,
            schoolId: user.schoolId,
            resultSubscription: context.resultSubscription,
            examsAndQuizSubscription: context.examsAndQuizSubscription,
            fileManagementSubscription: context.fileManagementSubscription,
            appCustomizationSubscription: context.appCustomizationSubscription,
            onLineLearningSubscription: context.onLineLearningSubscription,
            allSubscriptions: context.allSubscriptions,
            paymentStatus: context.paymentStatus,
            paymentMessage: context.paymentMessage,
            receiptNo: context.receiptNo,
            studentIds: context.studentIds,
            },
            url: "payment/create",
          }

          console.log("payload: ", payload)
          var response = await post(payload)

           const { 
              data : {
                data: result,
                message,
                success,
              }
        } = response
        context.isOffPlatformPaymentDialog = false;

        if(success){
          context.emitPaymentResponse(result);
          context.isOffPlatformPaymentSuccessDialog = true;
        }else{
          context.isOffPlatformPaymentFailureDialog = true;
          context.messageOffPlatformPayment = message;
        }

      },
      emitPaymentResponse(payload){
        this.$emit("getPaymentResponse", payload);
      },
      async okayOffPlatformPayment(){
          var context = this;
          await context.okayUploadFile();
          await context.paySubscription();
          

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
      cancelOffPlatformPaymentFailure(){
        var context = this;
        context.isOffPlatformPaymentFailureDialog = false;
      },
      onResizePage(e) {
        const width = window.innerWidth;
        var context = this;
        if(width < 700) context.isMobile = true;
        else context.isMobile = false;
    },
    },
    created() {
      window.addEventListener("resize", this.onResizePage);
      this.$store.commit("authenticationStore/setActiveRoute", "subscription");
    }
  }
</script>