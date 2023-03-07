<template>
  <div class="q-pa-sm">
      <div>
        <q-select 
          color="accent" 
          outlined label-color="accent"
          v-model="category"
          :options ="categories"
          @input="onItemValueChanged"
          label="Category">
      </q-select>
      <q-separator />
        <q-tabs
          v-model="tab"
          dense
          class="bg-accent text-primary"
          active-color="primary"
          indicator-color="secondary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="offplatformpayment" label="Off-Platform" />
          <q-tab name="onplatformpayment" label="On-Platform" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="offplatformpayment" class="bg-primary">
          <OffPlatformPayment
            :category="category"
            :amount="amount"
            :categoryBankName="selectedCategoryBankDetails.categoryBankName"
            :categoryAccountName="selectedCategoryBankDetails.categoryAccountName"
            :categoryAccountNumber="selectedCategoryBankDetails.categoryAccountNumber"/>
          </q-tab-panel>

          <q-tab-panel name="onplatformpayment" class="bg-primary">
            <OnPlatformPayment
            :category="category"
            :amount="amount"
            :categoryBankName="selectedCategoryBankDetails.categoryBankName"
            :categoryAccountName="selectedCategoryBankDetails.categoryAccountName"
            :categoryAccountNumber="selectedCategoryBankDetails.categoryAccountNumber"/>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    <q-dialog v-model="isBankDetailsFaliureDialog">
    <MessageBox
    title="Failure"
    :message="`${messageBankDetails}.`"
    okayEvent="okayBankDetailsFailure"
    cancelEvent="cancelBankDetailsFailure"
    @okayBankDetailsFailure="okayBankDetailsFailure($event)"
    @cancelBankDetailsFailure="cancelBankDetailsFailure($event)"
    >
    </MessageBox>
  </q-dialog>
  </div>
</template>

<script>
import OffPlatformPayment from 'pages/contribution/offPlatformPayment.vue'
import OnPlatformPayment from 'pages/contribution/onPlatformPayment.vue' 
import { cashoutn500Controller } from "../../store/modules/backendRoutes"
import { cashoutn1000Controller } from "../../store/modules/backendRoutes"
import { cashoutn2000Controller } from "../../store/modules/backendRoutes"
import { cashoutn5000Controller } from "../../store/modules/backendRoutes"
import { cashoutn10000Controller } from "../../store/modules/backendRoutes"

export default {
    computed:{
      selectedCategoryBankDetails(){
          var result = this.$store.getters['cashOutStore/selectedCategoryBankDetails'];
          console.log("result: ", result)
            return result;
        },
    },
    components: {
            OffPlatformPayment,
            OnPlatformPayment,
        },
  data () {
    return {
      tab: 'offplatformpayment',
      categories: [
        "CategoryN500",
        "CategoryN1000",
        "CategoryN2000",
        "CategoryN5000",
        "CategoryN10000"
      ],
      amounts: {
        CategoryN500: "500.00",
        CategoryN1000: "1,000.00",
        CategoryN2000: "2,000",
        CategoryN5000: "5,000.00",
        CategoryN10000: "10,000.00"
      },
      category: "CategoryN500",
      amount: "500.00",
      messageBankDetails: "",
      isBankDetailsFaliureDialog: false,
    }
  },
  methods:{
    async onItemValueChanged() {
      var context = this;
      context.amount = context.amounts[context.category];
      var payload = {
        category: context.category,
        amount: context.amount,
      }
      context.OnCategoryValueChanged(payload)
      await context.GetCategoryBankDetails();
 
    },
    OnCategoryValueChanged(payload){
      var context = this;
      this.$store.commit('accountStore/onCategoryValueChanged', payload);
      this.$store.commit('cashOutStore/onCategoryValueChanged', payload);
    },
    async GetCategoryBankDetails(){
      var context = this;
      var url = "";
      switch(context.category){
        case "CategoryN500":
          url = `${cashoutn500Controller}/getcategorybankdetails/1`;
          break;
        case "CategoryN1000":
          url = `${cashoutn1000Controller}/getcategorybankdetails/2`;
          break;
        case "CategoryN2000":
          url = `${cashoutn2000Controller}/getcategorybankdetails/3`;
          break;
        case "CategoryN5000":
          url = `${cashoutn5000Controller}/getcategorybankdetails/4`;
          break;
        case "CategoryN10000":
          url = `${cashoutn10000Controller}/getcategorybankdetails/5`;
          break;
      }

      var response = await this.$store.dispatch('cashOutStore/GetCategoryBankDetails', {
        url
      });

    const { 
        data : {
          data: result,
          message,
          success,
        }
      } = response

      if(success){
        this.$store.commit('cashOutStore/GetCategoryBankDetails', result);
      }else{
        context.messageBankDetails = message;
        context.isBankDetailsFaliureDialog = true;
      }  
    },
    okayBankDetailsFailure(){
      var context = this;
      context.isBankDetailsFaliureDialog = false;
    },
    cancelBankDetailsFailure(){
      var context = this;
      context.isBankDetailsFaliureDialog = false;
    }

  },
  async created(){
    var context = this;
     context.OnCategoryValueChanged(context.category)
     await context.GetCategoryBankDetails();
  }
}
</script>