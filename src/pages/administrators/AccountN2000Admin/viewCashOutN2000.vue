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
  import { cashoutn2000Controller } from '../../../store/modules/backendRoutes'
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
        categoryTitle: "Category N2000",
        cashOutsUrl: `${cashoutn2000Controller}`
      }
    },
  }
</script>