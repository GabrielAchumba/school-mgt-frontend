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
  import { accountn500Controller } from '../../../store/modules/backendRoutes'
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
        Contribution: "500",
        confirmEntryPaymentUrl: "confirmEntryPaymentN500",
        url: `${accountn500Controller}/comfirmpayment`
      }
    },
  }
</script>

<style scoped>

</style>
