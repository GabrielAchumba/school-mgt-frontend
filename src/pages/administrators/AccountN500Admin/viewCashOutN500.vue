<template>
  <div>
    <viewCashOut
    :selectedCashOut="selectedCashOut"
    :categoryTitle="categoryTitle"
    :cashOutsUrl="cashOutsUrl"/>
  </div>
</template>

<script>
  import viewCashOut from "../../../components/AccountAdmin/viewCashOut.vue"
  import { cashoutn500Controller } from '../../../store/modules/backendRoutes'
  export default {
      computed: {
        selectedCashOut(){
          return this.$store.getters['cashOutStore/selectedCashOut'];
        },
      },
      components:{
        viewCashOut
      },
    data() {
      return {
        categoryTitle: "Category N500",
        cashOutsUrl: `${cashoutn500Controller}`
      }
    },
  }
</script>