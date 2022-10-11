<template>
    <paystack
        style="background-color:green; width:120px;height:40px;color:white;border-radius:5px;text-transform:lowercase;"
        :amount="amount"
        :email="email"
        :paystackkey="paystackkey"
        :reference="reference"
        :callback="callback"
        :close="close"
        :embed="false"
    >
       <i class="fas fa-money-bill-alt"></i>
       MAKE PAYMENT
    </paystack>
</template>

<script type="text/javascript">
import paystack from 'vue-paystack';
export default {
    components: {
        paystack  
    },
    props: {
  	 amount: {
      type: Number
    },
    paystackkey: {
      type: String
    }
  },
    data(){
        return{
          //sk_test_574ef246a0c1d74f8b9e0b8b10214d3959a00b01
          //pk_test_17ed4ab6c0fbee9592c9ea10c7c5371724ba8b0c

          //sk_test_48a8aff4985565a956fa468330273ad871b139a4
          //pk_test_807ad0729343100bb1cbfd200fecfff9eee2776d
          //paystackkey:"pk_test_807ad0729343100bb1cbfd200fecfff9eee2776d",
          email: "achumba.gabriel2017@gmail.com" // Customer email
          //amount: 0
        }
    },
    computed: {
      reference(){
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( let i=0; i < 10; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
      }
    },
    methods: {
      callback: function(response){
        console.log(response)

         if(response.status == "success"){
           console.log("Payment successful")
          this.$store.commit('subscriptionStore/SetIsPaymentSuccessful', true);
           this.$store.commit('subscriptionStore/SetPaymentResponse', response);
        } 
        else{
          console.log("Payment failed")
          this.$store.commit('subscriptionStore/SetIsPaymentSuccessful', false)
        }
      
      },
      close: function(){
          console.log("Payment closed")
      }
    },
  created() {

  }
}
</script>