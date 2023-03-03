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
  import { accountn10000Controller } from '../../../store/modules/backendRoutes'
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
        Contribution: "10000",
        confirmEntryPaymentUrl: "confirmEntryPaymentN10000",
        url: `${accountn10000Controller}/comfirmpayment`
      }
    },
  }
</script>

<style scoped>

</style>
