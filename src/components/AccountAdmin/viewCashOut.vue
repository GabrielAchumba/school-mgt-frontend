<template>
<div class="row text-center">
  <div class="col-12 q-pa-sm">
    <div class="text-h6 text-primary text-weight-bolder"> {{selectedCashOut.fullName}}</div>
  </div>
  <div class="col-12">
    <div class="q-pa-md">
      <q-img 
          :src=selectedCashOut.base64String
          spinner-color="accent"
          class="rounded-borders"/>
    </div>
  </div>
  <div class="col-12 q-pa-sm">
    <span class="text-h6">Account Name: {{ selectedCashOut.accountName }}</span>
    <br>
    <span class="text-h6">Bank Name: {{ selectedCashOut.bankName }}</span>
    <br>
    <span class="text-h6">Account Number: {{ selectedCashOut.accountNumber }}</span>
    <br>
    <br>
  </div>

  <div class="col-12 q-pa-sm">           
    <div>
      <div class="text-caption text-green-8 text-weight-bolder q-mt-sm">Return On Investment</div>
      <span class="text-h6">₦{{ selectedCashOut.returnOnInvestment }}</span>
    </div>
  </div>

  <!-- <div class="col-12 q-pa-sm">
    <q-btn class="bg-accent text-primary"
    style="width:100%"  
    @click="closeView" 
    label="Close"/>
  </div> -->

</div>

</template>

<script>
  export default {
    props:{
        categoryTitle: {
            type: String,
            default: "",
        },
        selectedCashOut: {
            type: Object,
            default: {},
        },
        cashOutsUrl: {
            type: String,
            default: "",
        }
    },
    methods:{
        closeView(){
          var context = this;
          this.$router.push(`/${context.cashOutsUrl}`);
      }
    }
  }
</script>