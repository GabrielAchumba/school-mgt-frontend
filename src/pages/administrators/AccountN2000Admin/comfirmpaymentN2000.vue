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
  import { accountn2000Controller } from '../../../store/modules/backendRoutes'
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
        Contribution: "2000",
        confirmEntryPaymentUrl: "confirmEntryPaymentN2000",
        url: `${accountn2000Controller}/comfirmpayment`
      }
    },
  }
</script>

<style scoped>

</style>
