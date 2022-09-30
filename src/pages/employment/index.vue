<template>
  
  <div id="q-app">
  <div class="q-pa-sm q-gutter-sm">
    <div class="row">
            <q-btn 
               color="blue" 
               label="Create Profile" 
               @click="showNewEmployment" 
               size=sm no-caps></q-btn>
      </div>

      <div class="row">
          <div class="col-12" style="height:10px">     
          </div>  
      </div>
    
    <div class="row"> 
    <div 
          v-for="employment in Employments"
        :key="employment.id"
        class="col-xs-12 col-sm-12 col-md-12 col-lg-12 q-col-gutter-md">
        <q-card>
          <q-card-section class="bg-primary text-white">
            <div class="text-subtitle2">
                   Name of Organization: {{ employment.organizationName }}
                   <br>
                   Job Role: {{ employment.jobTitle }}
                   <br>
                   Duration: {{ employment.startDay }}/{{ employment.startMonth }}/{{ employment.startYear }} - 
                    {{ employment.endDay }}/{{ employment.endMonth }}/{{ employment.endYear }}
                </div>
            <div class="text-subtitle2">     
                   {{ employment.jobDescription }}
                   <br>
                   <q-btn 
                        color="blue" 
                        label="Update" 
                        @click="showSelectedEmployment(employment)" 
                        size=sm no-caps></q-btn>

                        <q-btn 
                        color="blue" 
                        label="Delete" 
                        @click="deleteItem(employment)" 
                        size=sm no-caps></q-btn>
                
               
               </div>
          </q-card-section>

           <q-card-section>
               <div class="row">
                   <div class="col-12">
                        <q-img 
                        :src=education.base64String
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
    Employments() {
      return this.$store.getters['employmentStore/Employments'];
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
      confirm("Are you sure you want to delete this employement?") &&
        this.deleteItemPrivate(selectedItem);
    },
    deleteItemPrivate(selectedItem){
      this.$store.dispatch('employmentStore/DeleteEmployment', selectedItem)
    },
    showNewEmployment(){
      this.$store.commit('employmentStore/ShowEmploymentDataCDialog')
    },
    showSelectedEmployment(selectedItem){
       this.$store.commit('employmentStore/ShowEmploymentDataUDialog', selectedItem)
    }

  },
  created() {
    var context =this;
    this.$store.dispatch('employmentStore/ReadEmployments', {
      userId: context.IdentityModel.id
    })

  }
  
}
</script>

<style scoped>

</style>
