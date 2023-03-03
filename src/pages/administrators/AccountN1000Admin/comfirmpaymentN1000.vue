<template>
  <div>
    <comfirmpayment
    :SelectedAccount="SelectedAccount"
    :Contribution="Contribution"
    :confirmEntryPaymentUrl="confirmEntryPaymentUrl"
    :url="url"/>
  </div>
</template>

<script>
  import comfirmpayment from "../../../components/AccountAdmin/comfirmpayment.vue"
  import { accountn1000Controller } from '../../../store/modules/backendRoutes'
  export default {
      computed: {
        SelectedAccount(){
            return this.$store.getters['accountStore/SelectedAccount'];
        },
      },
      components:{
        comfirmpayment
      },
    data() {
      return {
        Contribution: "1000",
        confirmEntryPaymentUrl: "confirmEntryPaymentN1000",
        url: `${accountn1000Controller}/comfirmpayment`
      }
    },
  }
</script>

<style scoped>

</style>
