<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center bg-primary text-accent">
        <q-card
           class="custom-form"
          v-bind:style="
          $q.platform.is.mobile ? { width: '90%', height: '95%' } : { width: '90%' , height: '95%' }
          "
        >

          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                {{ title }}
              </div>
            </div>
          </q-card-section>

          <q-card-section>
            {{ description }}
          </q-card-section>

          <div class="row q-pa-sm">
              <div class="col-12">
                  <q-space></q-space>
              </div>
          </div>
        </q-card>
      </q-page>
    </q-page-container>

   </q-layout>
</template>

<script>
 export default {
     computed:{
         totalAmount(){
             return this.$store.getters['subscriptionStore/totalAmount'];
         }
     },
     data(){
         return {
             title: "Total Amount",
         }
     }

 }
</script>

<style>
.custom-form {
  position: absolute;
}
</style>