<template>
  
  <div id="q-app">
  <div class="q-pa-sm q-gutter-sm">
    <div class="row">
            <q-btn 
               color="blue" 
               label="Create Profile" 
               @click="showNewReference" 
               size=sm no-caps></q-btn>
      </div>

      <div class="row">
          <div class="col-12" style="height:10px">     
          </div>  
    </div>
    
    <div class="row"> 
    <div 
          v-for="reference in References"
        :key="reference.id"
        class="col-xs-12 col-sm-12 col-md-12 col-lg-12 q-col-gutter-md">
        <q-card>
          <q-card-section class="bg-primary text-white">
            <div class="text-subtitle2">
                   Full Name: {{ reference.fullName }}
                   <br>
                   Job Position: {{ reference.jobPosition }}
                   <br>
                   Organization: {{ reference.organization }}
                   <br>
                   Telephone Number: {{ reference.telephoneNumber }}
                   <br>
                   Email: {{ reference.email }}
                </div>
            <div class="text-subtitle2">     
                   {{ employment.address }}
                   <br>
                   <q-btn 
                        color="blue" 
                        label="Update" 
                        @click="showSelectedReference(reference)" 
                        size=sm no-caps></q-btn>

                        <q-btn 
                        color="blue" 
                        label="Delete" 
                        @click="deleteItem(reference)" 
                        size=sm no-caps></q-btn>
                
               
               </div>
          </q-card-section>

           <q-card-section>
               <div class="row">
                   <div class="col-12">
                        <q-img 
                        :src=reference.base64String
                        style="width:150px"
                        ratio="1"
                        spinner-color="white"
                        class="rounded-borders"/>
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
  computed: {
    IdentityModel() {
            return this.$store.getters['authenticationStore/IdentityModel'];
        },
    References() {
      return this.$store.getters['referenceStore/References'];
    }
  },
  components: {
  },
  data() {
    return {

    };
  },
 methods: {
    deleteItem(selectedItem){
      confirm("Are you sure you want to delete this referee?") &&
        this.deleteItemPrivate(selectedItem);
    },
    deleteItemPrivate(selectedItem){
      this.$store.dispatch('referenceStore/DeleteReference', selectedItem)
    },
    showNewReference(){
      this.$store.commit('referenceStore/ShowReferenceDataCDialog')
    },
    showSelectedReference(selectedItem){
       this.$store.commit('referenceStore/ShowReferenceDataUDialog', selectedItem)
    }

  },
  created() {
    var context =this;
    this.$store.dispatch('referenceStore/ReadReferences', {
      userId: context.IdentityModel.id
    })

  }
  
}
</script>

<style scoped>

</style>
