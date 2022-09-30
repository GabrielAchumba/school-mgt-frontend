<template>
  
  <div id="q-app">
  <div class="q-pa-sm q-gutter-sm">
    <div class="row">
            <q-btn 
               color="blue" 
               label="Create Profile" 
               @click="showNewSkill" 
               size=sm no-caps></q-btn>
      </div>

      <div class="row">
          <div class="col-12" style="height:10px">     
          </div>  
    </div>
    
    <div class="row"> 
    <div 
          v-for="Skill in Skills"
        :key="Skill.id"
        class="col-xs-12 col-sm-12 col-md-12 col-lg-12 q-col-gutter-md">
        <q-card>
          <q-card-section class="bg-primary text-white">
            <div class="text-subtitle2">
               <q-btn 
               color="blue" 
               label="Update" 
               @click="showSelectedSkill(Skill)" 
               size=sm no-caps></q-btn>

               <q-btn 
               color="blue" 
               label="Delete" 
               @click="deleteItem(Skill)" 
               size=sm no-caps></q-btn>
               
               </div>
          </q-card-section>

           <q-card-section>
               <div class="row">
                   <div class="col-5">
                       <p>{{ Skill.statement }}</p>
                       <br>
                       <p>Type of Skill: {{ Skill.title }}</p>
                       <br>
                       <p>Years of Experience: {{ Skill.yearsOfExperience }}</p>
                       <br>
                   </div>
                   <div class="col-2"></div>
                   <div class="col-5">
                        <q-img 
                        :src=Skill.base64String
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
    Skills() {
      return this.$store.getters['skillStore/Skills'];
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
      confirm("Are you sure you want to delete this skill?") &&
        this.deleteItemPrivate(selectedItem);
    },
    deleteItemPrivate(selectedItem){
      this.$store.dispatch('skillStore/DeleteSkill', selectedItem)
    },
    showNewSkill(){
      this.$store.commit('skillStore/ShowSkillDataCDialog')
    },
    showSelectedSkill(selectedItem){
       this.$store.commit('skillStore/ShowSkillDataUDialog', selectedItem)
    }

  },
  created() {
    var context =this;
    this.$store.dispatch('skillStore/ReadSkills', {
      userId: context.IdentityModel.id
    })

  }
  
}
</script>

<style scoped>

</style>
