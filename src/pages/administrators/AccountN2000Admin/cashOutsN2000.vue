<template>
  <div>
    <cashOuts
    :columns="columns"
    :cashOuts="cashOuts"
    :title="title"
    :viewCashOutUrl="viewCashOutUrl"/>
  </div>
</template>

<script>
  import cashOuts from "../../../components/AccountAdmin/cashOuts.vue"
  import { cashoutn2000Controller } from '../../../store/modules/backendRoutes'
    export default {
        computed: {
        cashOuts(){
            return this.$store.getters['cashOutStore/cashOuts'];
        },
      },
      components:{
        cashOuts
      },
      data () {
    return {
            columns: [
              { name: "fullName", label: "Full Name", field: "", align: "left" },
              { name: "createdDate", label: "Payment Date", field: "", align: "left" },
              { name: "returnOnInvestment", label: "Amount Paid (₦)", field: "", align: "left" },
              { name: "category", label: "category", field: "", align: "left" },
              { name: "level", label: "Level", field: "", align: "left" },
              { name: "bankName", label: "Bank Name", field: "", align: "left" },
              { name: "accountName", label: "AccountName", field: "", align: "left" },
              { name: "accountNumber", label: "Account Number", field: "", align: "left" },
              { name: "categoryN2000BankName", label: "CategoryN2000 Bank Name", field: "", align: "left" },
              { name: "categoryN2000AccountName", label: "CategoryN2000 Account Name", field: "", align: "left" },
              { name: "categoryN2000AccountNumber", label: "CategoryN2000 Account Number", field: "", align: "left" },
              { name: "actions", label: "Action", field: "actions", align: "left" }
            ],
            title: "",
            viewCashOutUrl: "",
            }
        },
        async created() {
          var context = this;
          var url = `${cashoutn2000Controller}/getcashouts`;
          context.title = "Paid Category N2000 Levels";
          context.viewCashOutUrl = "viewCashOutN2000";

        var response = await this.$store.dispatch('cashOutStore/GetCashOuts', {
           url
         })


         const { 
              data : {
                data: result,
                message,
                success,
              }
        } = response

        if(success){
          this.$store.commit('cashOutStore/GetCashOuts', result)
        }else{
            var context = this;
            context.isFetchTableDialog = true;
            context.message = message;
        }


      }
    }
</script>
