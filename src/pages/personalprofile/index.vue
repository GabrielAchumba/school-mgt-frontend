<template>
  
  <div id="q-app">
  <div class="q-pa-sm q-gutter-sm">
    <div class="row">
            <q-btn 
               color="blue" 
               label="Create Profile" 
               @click="showNewPersonalProfile" 
               size=sm no-caps></q-btn>
      </div>

      <div class="row">
                    <div class="col-12" style="height:10px">     
                    </div>  
                </div>
    
    <div class="row"> 
    <div 
          v-for="personalProfile in PersonalProfiles"
        :key="personalProfile.id"
        class="col-xs-12 col-sm-12 col-md-12 col-lg-12 q-col-gutter-md">
        <q-card>
          <q-card-section class="bg-primary text-white">
            <div class="text-subtitle2">
               <q-btn 
               color="blue" 
               label="Update" 
               @click="showSelectedProfile(personalProfile)" 
               size=sm no-caps></q-btn>

               <q-btn 
               color="blue" 
               label="Delete" 
               @click="deleteItem(personalProfile)" 
               size=sm no-caps></q-btn>
               
               </div>
          </q-card-section>

           <q-card-section>
               <div class="row">
                   <div class="col-5">
                       <p>{{ personalProfile.statement }}</p>
                   </div>
                   <div class="col-2"></div>
                   <div class="col-5">
                        <q-img 
                        :src=personalProfile.base64String
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
    PersonalProfiles() {
      return this.$store.getters['personalprofileStore/PersonalProfiles'];
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
      confirm("Are you sure you want to delete this personal profile?") &&
        this.deleteItemPrivate(selectedItem);
    },
    deleteItemPrivate(selectedItem){
      this.$store.dispatch('personalprofileStore/DeletePersonalProfile', selectedItem)
    },
    showNewPersonalProfile(){
      this.$store.commit('personalprofileStore/ShowPersonalProfileDataCDialog')
    },
    showSelectedProfile(selectedItem){
       this.$store.commit('personalprofileStore/ShowPersonalProfileDataUDialog', selectedItem)
    }

  },
  created() {
    var context =this;
    this.$store.dispatch('personalprofileStore/ReadPersonalProfiles', {
      userId: context.IdentityModel.id
    })

  }
  
}
</script>

<style scoped>

</style>
