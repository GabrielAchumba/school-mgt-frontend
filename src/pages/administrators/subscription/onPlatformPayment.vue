<template>
<div>

<div class="row text-center flex flex-center q-pb-lg">

<div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
 <div class="q-pa-md" style="font-family: Lato;">
  
  <q-card class="q-pa-sm q-gutter-sm"> 

            <q-card-section class="bg-primary text-accent">
            <div class="row text-center flex flex-center q-pb-lg">
              <div class="col-md-3 col-lg-3 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
              </div>
               <div class="col-md-6 col-lg-6 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                 <p>On-Platform Payment</p>
               </div>
                
                <div class="col-md-3 col-lg-3 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
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
import PayStackButton from "./payment.vue"
  export default {
       components: {
            PayStackButton,
        },
    data() {
      return {
        TotalCost: 1200000

      }
    },
    methods: {

    },
  }
</script>