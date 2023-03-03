<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card>

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
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="offplatformpayment" label="Off-Platform Payment" />
         <!--  <q-tab name="onplatformpayment" label="On-Platform Payment" /> -->
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          
          <q-tab-panel name="offplatformpayment">
            <offPlatformPayment-app
            :category="category"
            :amount="amount"
            :categoryBankName="selectedCategoryBankDetails.categoryBankName"
            :categoryAccountName="selectedCategoryBankDetails.categoryAccountName"
            :categoryAccountNumber="selectedCategoryBankDetails.categoryAccountNumber"></offPlatformPayment-app>
          </q-tab-panel>

          <!-- <q-tab-panel name="onplatformpayment">
            <onPlatformPayment-app></onPlatformPayment-app>

          </q-tab-panel> -->

        </q-tab-panels>

      </q-card>

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
import offPlatformPayment from 'pages/contribution/offPlatformPayment.vue'
import onPlatformPayment from 'pages/contribution/onPlatformPayment.vue' 
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
            'offPlatformPayment-app': offPlatformPayment,
            'onPlatformPayment-app': onPlatformPayment
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
          url = `${cashoutn500Controller}/getcategorybankdetails`;
          break;
        case "CategoryN1000":
          url = `${cashoutn1000Controller}/getcategorybankdetails`;
          break;
        case "CategoryN2000":
          url = `${cashoutn2000Controller}/getcategorybankdetails`;
          break;
        case "CategoryN5000":
          url = `${cashoutn5000Controller}/getcategorybankdetails`;
          break;
        case "CategoryN10000":
          url = `${cashoutn10000Controller}/getcategorybankdetails`;
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