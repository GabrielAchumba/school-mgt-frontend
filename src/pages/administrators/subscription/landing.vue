<template>
  <div class="overflow-hidden">
    <q-resize-observer @resize="onResize" :debounce="0" />

    <q-splitter
      id="photos"
      v-model="splitterModel"
      :limits="[0, 100]"
      :style="splitterStyle"
      before-class="overflow-hidden"
      after-class="overflow-hidden"
    >

      <template v-slot:before>
        <div class="row">
          <ResultsSubscription class="col-12"
          @onResultScriptionValueChange="onResultScriptionValueChange($event)"/>
          <ExamsQuizSubscription class="col-12"
          @onExamsQuizScriptionValueChange="onExamsQuizScriptionValueChange($event)"/>
          <FileManagementSubscription class="col-12"
          @onFileManagementScriptionValueChange="onFileManagementScriptionValueChange($event)"/>
          <CustomizeAppSubscription class="col-12"
          @onCustomizationScriptionValueChange="onCustomizationScriptionValueChange($event)"/>
          <div class="row no-wrap">
            <!-- <div class="col-12"> -->
              <q-space/>
              <q-icon
                      v-if="isMobile"
                      class="q-pa-sm text-accent"
                      :name="invoiceBtn.icon"
                      @click="showPaymentPage"
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
                      @click="showPaymentPage"
                />
            </div>
           <!-- </div> -->
        </div>
      </template>

      <template v-slot:after>
        <div class="row">
          <Invoice 
          v-if="isInvoice"
          class="col-12"/>
          <MakePayment  
          v-if="isPaymentPlatform"
          class="col-12"/>
        </div>
      </template>

    </q-splitter>
  </div>
</template>

<script>
import ResultsSubscription from "./subscription_plans/results-subcription.vue";
import ExamsQuizSubscription from "./subscription_plans/exams-quiz-subscription.vue";
import FileManagementSubscription from "./subscription_plans/filemanagement-subscription.vue";
import CustomizeAppSubscription from "./subscription_plans/customization-subscription.vue";
import Invoice from "./invoice.vue";
import MakePayment from "./make-payment.vue";

export default {
  computed:{
    splitterStyle(){
        var context = this;
        return {
          height: `95vh`,
          width: `${context.width}px`,
        }
        //${Math.min(600, 0.66 * context.width)}px
      }
  },
  components:{
    ResultsSubscription,
    ExamsQuizSubscription,
    FileManagementSubscription,
    CustomizeAppSubscription,
    Invoice,
    MakePayment,
  },
  data(){
    return {
      width: 400, 
      splitterModel: 40, // start at 30%,
      isMobile: false,
      isInvoice: true,
      isPaymentPlatform: false,
      invoiceBtn: {label: "Pay", icon: "payment"},
      resultSubscription: {variable: "", value: "", amount: 0},
      examsAndQuizSubscription: {variable: "", value: "", amount: 0},
      fileManagementSubscription: {variable: "", value: "", amount: 0},
      appCustomizationSubscription: {variable: "", value: "", amount: 0},
      allSubscriptions: {variable: "", value: "", amount: 0},
      paymentStatus: {variable: "Payment Status", value: "NOT PAID"},
      paymentMessage: {variable: "Message", value: "Payment In Progress"},
      receiptNo: {variable: "Receipt Number", value: ""},
      totalAmount: 0,
    }
  },
  methods:{
    onResize (info) {
      var context = this;
      context.width = info.width;
    },
    onResizePage(e) {
            const width = window.innerWidth;
            var context = this;
            if(width < 700) context.isMobile = true;
            else context.isMobile = false;
    },
    onResultScriptionValueChange(payload){
      var context = this;
      const oldAmount = context.resultSubscription.amount;
      context.resultSubscription = {
          name: "RESULT",
          variable: `Results Analysis (${payload.qSelect.label}):`,
          value: `${payload.qSelect.amount}.00`,
          amount: payload.qSelect.amount,
      }
      this.$store.commit("subscriptionStore/SetResultSubscription", context.resultSubscription);

      if(payload.qSelect.label != "None"){
        context.totalAmount = context.totalAmount + payload.qSelect.amount - oldAmount;
      }else{
        context.totalAmount = context.totalAmount - oldAmount;
      }

      console.log("context.totalAmount: ", context.totalAmount)
      context.allSubscriptions.variable = "Total Amount";
      context.allSubscriptions.value =  `${context.totalAmount}.00`;
      context.allSubscriptions.amount =  context.totalAmount;
      this.$store.commit("subscriptionStore/SetAllSubscriptions", context.allSubscriptions);
    },
    onExamsQuizScriptionValueChange(payload){
      var context = this;
      const oldAmount = context.examsAndQuizSubscription.amount;
      context.examsAndQuizSubscription = {
          name: "EXAMS & QUIZ",
          variable: `Exams & Quiz (${payload.qSelect.label}):`,
          value: `${payload.qSelect.amount}.00`,
          amount: payload.qSelect.amount,
      }
      this.$store.commit("subscriptionStore/SetExamsAndQuizSubscription", context.examsAndQuizSubscription);

      if(payload.qSelect.label != "None"){
        context.totalAmount = context.totalAmount + payload.qSelect.amount;
      }else{
        context.totalAmount = context.totalAmount - payload.qSelect.amount;
      }
      context.allSubscriptions.variable = "Total Amount";
      context.allSubscriptions.value =  `${context.totalAmount}.00`;
      context.allSubscriptions.amount =  context.totalAmount;
      this.$store.commit("subscriptionStore/SetAllSubscriptions", context.allSubscriptions);

    },
    onFileManagementScriptionValueChange(payload){
      var context = this;
      const oldAmount = context.fileManagementSubscription.amount;
      context.fileManagementSubscription = {
          name: "FILE MANAGEMENT",
          variable: `File Management (${payload.qSelect.label}):`,
          value: `${payload.qSelect.amount}.00`,
          amount: payload.qSelect.amount,
      }
      this.$store.commit("subscriptionStore/SetFileManagementSubscription", context.fileManagementSubscription);

      if(payload.qSelect.label != "None"){
        context.totalAmount = context.totalAmount + payload.qSelect.amount - oldAmount;
      }else{
        context.totalAmount = context.totalAmount - payload.qSelect.amount - oldAmount;
      }
      context.allSubscriptions.variable = "Total Amount";
      context.allSubscriptions.value =  `${context.totalAmount}.00`;
      context.allSubscriptions.amount =  context.totalAmount;
      this.$store.commit("subscriptionStore/SetAllSubscriptions", context.allSubscriptions);

    },
    onCustomizationScriptionValueChange(payload){
       var context = this;
       const oldAmount = context.appCustomizationSubscription.amount;
      context.appCustomizationSubscription = {
          name: "APP CUSTOMIZATION",
          variable: `App Customization (${payload.qSelect.label}):`,
          value: `${payload.qSelect.amount}.00`,
          amount: payload.qSelect.amount,
      }
      this.$store.commit("subscriptionStore/SetAppCustomizationSubscription", context.appCustomizationSubscription);

      if(payload.qSelect.label != "None"){
        context.totalAmount = context.totalAmount + payload.qSelect.amount - oldAmount;
      }else{
        context.totalAmount = context.totalAmount - payload.qSelect.amount - oldAmount;
      }
      context.allSubscriptions.variable = "Total Amount";
      context.allSubscriptions.value =  `${context.totalAmount}.00`;
      context.allSubscriptions.amount =  context.totalAmount;
      this.$store.commit("subscriptionStore/SetAllSubscriptions", context.allSubscriptions);

    },
    showPaymentPage(){
      var context = this;
      if(context.isInvoice === true){
        context.isInvoice = false;
        context.isPaymentPlatform = true;
        context.invoiceBtn.icon = "receipt";
      }else{
        context.isInvoice = true;
        context.isPaymentPlatform = false;
        context.invoiceBtn.icon = "payment";
      }

    }
  },
  created(){
    var context = this;
    window.addEventListener("resize", this.onResizePage);
    this.$store.commit("authenticationStore/setActiveRoute", "subscription");
  }
}
</script>