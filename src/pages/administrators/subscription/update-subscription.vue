<template>
  <div class="q-pa-sm">
    <div v-if="isMobile">
      <div class="row">
          <ResultsSubscription class="col-12"
          :isUpdate="isUpdate"
          @onResultScriptionValueChange="onResultScriptionValueChange($event)"
          @onStudentsSelected="onStudentsSelected($event)"/>
          <ExamsQuizSubscription class="col-12"
          :isUpdate="isUpdate"
          @onExamsQuizScriptionValueChange="onExamsQuizScriptionValueChange($event)"/>
          <FileManagementSubscription class="col-12"
          :isUpdate="isUpdate"
          @onFileManagementScriptionValueChange="onFileManagementScriptionValueChange($event)"/>
          <CustomizeAppSubscription class="col-12"
          :isUpdate="isUpdate"
          @onCustomizationScriptionValueChange="onCustomizationScriptionValueChange($event)"/>
          <OnlineLearning class="col-12"
          :isUpdate="isUpdate"
          @onOnlineLearningScriptionValueChange="onOnlineLearningScriptionValueChange($event)"/>
          <div class="col-12 q-py-sm text-right">
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
      </div>

      <div class="row">
          <Invoice 
          v-if="isInvoice"
          class="col-12"/>
          <MakePayment  
          v-if="isPaymentPlatform"
          class="col-12"/>
      </div>

    </div>
    <div v-else>
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
          :isUpdate="isUpdate"
          @onResultScriptionValueChange="onResultScriptionValueChange($event)"
          @onStudentsSelected="onStudentsSelected($event)"/>
          <ExamsQuizSubscription class="col-12"
          :isUpdate="isUpdate"
          @onExamsQuizScriptionValueChange="onExamsQuizScriptionValueChange($event)"/>
          <FileManagementSubscription class="col-12"
          :isUpdate="isUpdate"
          @onFileManagementScriptionValueChange="onFileManagementScriptionValueChange($event)"/>
          <CustomizeAppSubscription class="col-12"
          :isUpdate="isUpdate"
          @onCustomizationScriptionValueChange="onCustomizationScriptionValueChange($event)"/>
          <OnlineLearning class="col-12"
          :isUpdate="isUpdate"
          @onOnlineLearningScriptionValueChange="onOnlineLearningScriptionValueChange($event)"/>
          <div class="col-12 q-py-sm text-right">
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
  </div>
</template>

<script>
import ResultsSubscription from "./subscription_plans/results-subcription.vue";
import ExamsQuizSubscription from "./subscription_plans/exams-quiz-subscription.vue";
import FileManagementSubscription from "./subscription_plans/filemanagement-subscription.vue";
import CustomizeAppSubscription from "./subscription_plans/customization-subscription.vue";
import OnlineLearning from "./subscription_plans/online-learning-subscription.vue";
import Invoice from "./invoice.vue";
import MakePayment from "./make-payment.vue";
import { get, put } from "../../../store/modules/services";

export default {
  computed:{
    splitterStyle(){
        var context = this;
        return {
          height: `100vh`,
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
    OnlineLearning,
  },
  data(){
    return {
      width: 400, 
      splitterModel: 30, // start at 30%,
      isMobile: false,
      isInvoice: true,
      isPaymentPlatform: false,
      invoiceBtn: {label: "Configure", icon: "payment"},
      resultSubscription: {variable: "", value: "", amount: 0},
      examsAndQuizSubscription: {variable: "", value: "", amount: 0},
      fileManagementSubscription: {variable: "", value: "", amount: 0},
      appCustomizationSubscription: {variable: "", value: "", amount: 0},
      onLineLearningSubscription: {variable: "", value: "", amount: 0},
      allSubscriptions: {variable: "", value: "", amount: 0},
      paymentStatus: {variable: "Payment Status", value: "NOT PAID"},
      paymentMessage: {variable: "Message", value: "Payment In Progress"},
      receiptNo: {variable: "Receipt Number", value: ""},
      totalAmount: 0,
      numberOfStudents: 0,
      isUpdate: false,
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
    onStudentsSelected(payload){
      var context = this;
      context.numberOfStudents = Number(payload.studentsForm.GroupedCheckBoxes[0].group.length);
    },
    onResultScriptionValueChange(payload){
        if(payload.qSelect.label === "None") {
            alert('You can set subscription to none');
            return
        }
      var context = this;
      const amt = Number(payload.qSelect.amount) * context.numberOfStudents;
      context.resultSubscription = {
          name: "RESULT",
          variable: `Results Analysis (${payload.qSelect.label}):`,
          value: `${amt}.00`,
          amount: amt,
      }
      this.$store.commit("subscriptionStore/SetResultSubscription", context.resultSubscription);

      context.sumAllSubscriptions();
    },
    onExamsQuizScriptionValueChange(payload){
        if(payload.qSelect.label === "None") {
            alert('You can set subscription to none');
            return
        }
      var context = this;
      context.examsAndQuizSubscription = {
          name: "EXAMS & QUIZ",
          variable: `Exams & Quiz (${payload.qSelect.label}):`,
          value: `${payload.qSelect.amount}.00`,
          amount: payload.qSelect.amount,
      }
      this.$store.commit("subscriptionStore/SetExamsAndQuizSubscription", context.examsAndQuizSubscription);

     context.sumAllSubscriptions();

    },
    onFileManagementScriptionValueChange(payload){
        if(payload.qSelect.label === "None") {
            alert('You can set subscription to none');
            return
        }
      var context = this;
      context.fileManagementSubscription = {
          name: "FILE MANAGEMENT",
          variable: `File Management (${payload.qSelect.label}):`,
          value: `${payload.qSelect.amount}.00`,
          amount: payload.qSelect.amount,
      }
      this.$store.commit("subscriptionStore/SetFileManagementSubscription", context.fileManagementSubscription);

      context.sumAllSubscriptions();

    },
    onCustomizationScriptionValueChange(payload){
        if(payload.qSelect.label === "None") {
            alert('You can set subscription to none');
            return
        }
       var context = this;
      context.appCustomizationSubscription = {
          name: "APP CUSTOMIZATION",
          variable: `App Customization (${payload.qSelect.label}):`,
          value: `${payload.qSelect.amount}.00`,
          amount: payload.qSelect.amount,
      }
      this.$store.commit("subscriptionStore/SetAppCustomizationSubscription", context.appCustomizationSubscription);

      context.sumAllSubscriptions();

    },
    onOnlineLearningScriptionValueChange(payload){
        if(payload.qSelect.label === "None") {
            alert('You can set subscription to none');
            return
        }
      var context = this;
      context.onLineLearningSubscription = {
          name: "ONLINE LEARNING",
          variable: `Online Learning (${payload.qSelect.label}):`,
          value: `${payload.qSelect.amount}.00`,
          amount: payload.qSelect.amount,
      }
      this.$store.commit("subscriptionStore/SetOnLineLearningSubscription", context.onLineLearningSubscription);

      context.sumAllSubscriptions();
    },
    sumAllSubscriptions(){
      var context = this;
      context.totalAmount = context.resultSubscription.amount +
      context.fileManagementSubscription.amount + context.examsAndQuizSubscription.amount +
      context.appCustomizationSubscription.amount + context.onLineLearningSubscription.amount;
      context.allSubscriptions = {
          name: "TOTAL AMOUNT",
          variable: `Total Amount:`,
          value: `${context.totalAmount}.00`,
          amount: context.totalAmount,
      }
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

    },
    async getSchoolSubscriptions(){
    var context = this;
    var user = this.$store.getters["authenticationStore/IdentityModel"]
            
    var url = `payment/${user.schoolId}`;
    const payload = {
        url,
    }

    console.log("payload: ", payload)
    var response = await get(payload)

    const { 
        data : {
            data: result,
            message,
            success,
        }
    } = response

    if(success){
        context.resultSubscription = { ...result.resultSubscription};
        context.examsAndQuizSubscription = { ...result.examsAndQuizSubscription};
        context.fileManagementSubscription = { ...result.fileManagementSubscription};
        context.appCustomizationSubscription = { ...result.appCustomizationSubscription};
        context.onLineLearningSubscription = { ...result.onLineLearningSubscription};
        context.allSubscriptions = { ...result.allSubscriptions};
        context.paymentStatus = { ...result.paymentStatus};
        context.paymentMessage = { ...result.paymentMessage};
        context.receiptNo = { ...result.receiptNo};

        this.$store.commit("subscriptionStore/SetResultSubscription", context.resultSubscription);
        this.$store.commit("subscriptionStore/SetExamsAndQuizSubscription", context.examsAndQuizSubscription);
        this.$store.commit("subscriptionStore/SetFileManagementSubscription", context.fileManagementSubscription);
        this.$store.commit("subscriptionStore/SetAppCustomizationSubscription", context.appCustomizationSubscription);
        this.$store.commit("subscriptionStore/SetOnLineLearningSubscription", context.onLineLearningSubscription);
        this.$store.commit("subscriptionStore/SetAllSubscriptions", context.allSubscriptions);
        this.$store.commit("subscriptionStore/SetPaymentStatus", context.paymentStatus);
        this.$store.commit("subscriptionStore/SetPaymentMessage", context.paymentMessage);
        this.$store.commit("subscriptionStore/SetReceiptNo", context.receiptNo);
    }
  }
  },
  async created(){
    var context = this;
    window.addEventListener("resize", this.onResizePage);
    this.$store.commit("authenticationStore/setActiveRoute", "updatesubscription");
    await context.getSchoolSubscriptions();
    context.isUpdate = true;
    console.log("isUpdate: ", context.isUpdate);
    
  }
}
</script>