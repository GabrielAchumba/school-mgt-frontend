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
  import { accountn5000Controller } from '../../../store/modules/backendRoutes'
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
        Contribution: "5000",
        confirmEntryPaymentUrl: "confirmEntryPaymentN5000",
        url: `${accountn5000Controller}/comfirmpayment`
      }
    },
  }
</script>

<style scoped>

</style>
