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
  import { cashoutn10000Controller } from '../../../store/modules/backendRoutes'
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
        categoryTitle: "Category N10000",
        cashOutsUrl: `${cashoutn10000Controller}`
      }
    },
  }
</script>