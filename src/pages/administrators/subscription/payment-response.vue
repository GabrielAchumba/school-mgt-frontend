<template>
 <div>
     <div class="col-12">
         <q-card class="column full-height" style="width: 500px">
             <q-card-section>
            <div  v-if="IsPaymentSuccessful">
            <p>
                Payment was succesful. Thanks for using our platform
            </p>
                <br>
                <p>Here is your payment pincode: {{ PaymentCode }}</p>
            </div>

            <div  v-else>
            <p>
                Payment was not succesful. Please try again later. Thanks for using our platform
            </p>
            </div>
          </q-card-section>
          <q-card-actions align="right">
               <q-btn 
                @click="Done" color="primary" v-close-popup>
                Done
                </q-btn>
          </q-card-actions>
         </q-card>
     </div>
 </div>
</template>

<script>

export default {
  computed: {
    IsPaymentSuccessful(){
      return this.$store.getters['dealersStore/dealers'];
    },
    PaymentCode(){
      return this.$store.getters['ticketsStore/PaymentCode'];
    }
   },
  data() {
    return {
      
    };
  },
  methods: {
      Done(){
          this.$router.push('/generated-tokens')
      }
  }
};
</script>