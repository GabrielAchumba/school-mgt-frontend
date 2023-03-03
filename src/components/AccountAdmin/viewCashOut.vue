<template>
<div>

<div class="row text-center flex flex-center q-pb-lg">


<div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
 <div class="q-pa-md" style="font-family: Lato;">
  
  <q-card class="q-pa-sm q-gutter-sm"> 

            <q-card-section class="bg-accent text-primary">
            <div class="row text-center flex flex-center q-pb-lg">
              <div class="col-md-2 col-lg-3 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
              </div>
               <div class="col-md-8 col-lg-6 col-sx-12 col-sm-12 text-h6 text-weight-bolder q-gutter-lg q-px-xl q-pb-none q-ma-none">
                 <p>Paid Qualified</p>
               </div>
                
                <div class="col-md-2 col-lg-3 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                </div>
                
            </div>

             <div class="row bg-primary text-center flex flex-center q-pb-lg">
              <div class="text-h6 text-Secondary text-weight-bolder q-mt-sm">{{ categoryTitle }} Full Name: </div>
              <br>
              <div class="text-h6 text-primary text-weight-bolder q-mt-sm"> {{selectedCashOut.fullName}}</div>
            </div>

          </q-card-section>
             <div class="row text-center flex flex-center q-pb-lg">
              <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                <div class="q-pa-md">
                <q-img 
                    :src=selectedCashOut.base64String
                    spinner-color="accent"
                    class="rounded-borders"/>

                </div>
              </div>
            </div>
          <q-card-section>

          </q-card-section>

          <q-card-section class="bg-primary text-accent">
            <div class="row text-center flex flex-center q-pb-lg">

                
              <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">

                  <span class="text-h6">Account Name ({{ categoryTitle }}): {{ selectedCashOut.categoryN500AccountName }} </span>
                  <br>
                  <span class="text-h6">Bank Name ({{ categoryTitle }}): {{ selectedCashOut.categoryN500BankName }}</span>
                  <br>
                  <span class="text-h6">Account Number ({{ categoryTitle }}): {{ selectedCashOut.categoryN500AccountNumber }}</span>
                  <br>
                  <br>
                  
              </div>

            </div>

          </q-card-section>

          <q-card-section class="bg-primary text-accent">
            <div class="row text-center flex flex-center q-pb-lg">

                <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">

                  <span class="text-h6">Account Name: {{ selectedCashOut.accountName }}</span>
                  <br>
                  <span class="text-h6">Bank Name: {{ selectedCashOut.bankName }}</span>
                  <br>
                  <span class="text-h6">Account Number: {{ selectedCashOut.accountNumber }}</span>
                  <br>
                  <br>
                  
              </div>

            </div>

          </q-card-section>


          <q-card-section class="bg-primary text-accent">
            <div class="row text-center flex flex-center q-pb-lg">

               <div class="col-md-5 col-lg-5 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">           

                <div>
                  <div class="text-caption text-green-8 text-weight-bolder q-mt-sm">Return On Investment</div>
                  <span class="text-h6">₦{{ selectedCashOut.returnOnInvestment }}</span>
                </div>
               </div>
                
                <div class="col-md-2 col-lg-2 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                </div>

            </div>

          </q-card-section>

          <q-card-section>
             <div class="row text-center flex flex-center q-pb-lg">
            <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12" :class="$q.platform.is.desktop ? '' : 'q-px-md'">

              <div class="q-mt-md">
                <q-btn class="q-mt-md q-ml-md bg-accent text-secondary"  @click="closeView" icon="cancel_presentation" label="Close"/>
              </div>
            </div>
          </div>
          </q-card-section>

      </q-card>
      
  </div>
</div>

</div>

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