<template>
  <div>
      <unconfirmedAccounts
      :uncomfirmedAccounts="uncomfirmedAccounts"
      :columns="columns"
      :comfirmPaymentUrl="comfirmPaymentUrl"/>
  </div>
</template>

<script>
  import unconfirmedAccounts from "../../../components/AccountAdmin/unconfirmedAccounts.vue"
  import { accountn1000Controller } from '../../../store/modules/backendRoutes'
  import { get } from "../../../store/modules/services";
    export default {
        computed: {
        uncomfirmedAccounts(){
            return this.$store.getters['accountStore/accountDTO'];
        },
      },
      components:{
        unconfirmedAccounts
      },
      data () {
    return {
            url: `${accountn1000Controller}/getuncomfirmedaccounts`,
            comfirmPaymentUrl: "comfirmPaymentN1000",
            columns: [
              { name: "fullName", label: "FullName", field: "", align: "left" },
              { name: "contribution", label: "Contribution (₦)", field: "", align: "left" },
              { name: "entryDate", label: "Contribution Payment Date", field: "", align: "left" },
              { name: "comfirmPayment", label: "Comfirm Payment", field: "actions", align: "left" }
            ],
            isFetchTableDialog: false,
            message: "",
            }
        },
        async created() {
          var context = this;
          const payload = {
            url: context.url,
          }
          var response = await get(payload)

        const { 
              data : {
                data: result,
                message,
                success,
              }
        } = response

        if(success){
          this.$store.commit('accountStore/GetUnComfirmedAccounts', result)
        }else{
            var context = this;
            context.isFetchTableDialog = true;
            context.message = message;
        }

      }
    }
</script>
