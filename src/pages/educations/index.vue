<template>
  
  <div id="q-app">
    <div class="q-pa-sm q-gutter-sm">
    <div class="row">
           <q-btn 
               color="primary" 
               label="Register Education" 
               @click="showNewEducation" 
               size=sm no-caps></q-btn>
      </div>

      <div class="row">
          <div class="col-12" style="height:10px">     
          </div>  
    </div>
    
    <div class="row"> 
      <div class="col-12">     

        <q-card>
          <q-card-section class="bg-primary text-white">
            Education Report
          </q-card-section>
           <q-card-section>
               <q-table  
             :data="Educations" 
             :columns="columns" 
             row-key="name" 
             binary-state-sort
             style="height:250px">


      <template v-slot:body="props">
          <q-tr :props="props">
            <!-- <q-td key="image" :props="props">{{ props.row.image }}</q-td> -->
            <q-td key="schoolName" :props="props">{{ props.row.schoolName }}</q-td>
             <q-td key="level" :props="props">{{ props.row.level }}</q-td>
            <q-td key="finalOverallGrade" :props="props">{{ props.row.finalOverallGrade }}</q-td>
            <q-td key="startYear" :props="props">{{ props.row.startYear }}</q-td>
            <q-td key="endYear" :props="props">{{ props.row.endYear }}</q-td>
           <q-td key="view" :props="props">
             <q-btn 
              icon="table_rows"
              color="primary" 
              no-shadows
              @click="resultsStatemet(props.row)" 
              size=sm no-caps>
              <q-tooltip>
                View Statements of Result
              </q-tooltip>
              </q-btn>
            </q-td>

             <q-td key="update" :props="props">

             <q-btn 
              icon="update"
              color="primary" 
              no-shadows
              @click="showSelectedEducation(props.row)" 
              size=sm no-caps>
              <q-tooltip>
                Update Education
              </q-tooltip>
              </q-btn>
            </q-td>

            <q-td key="delete" :props="props">
              <q-btn 
              icon="delete"
              color="primary" 
              no-shadows
              @click="deleteItem(props.row)" 
              size=sm no-caps>
              <q-tooltip>
                Delete Education
              </q-tooltip>
              </q-btn>
            </q-td>
          </q-tr>
        </template>
    </q-table>

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
    Educations() {
      return this.$store.getters['educationStore/Educations'];
    },
    SelectedEducation(){
      return this.$store.getters['educationStore/SelectedEducation'];
    }
  },
  components: {
  },
  data() {
    return {
       columns: [
        { name: "schoolName", label: "School", field: "", align: "left" },
        { name: "level", label: "Class", field: "", align: "left" },
        { name: "finalOverallGrade", label: "Overall Grade", field: "", align: "left" },
        { name: "startYear", label: "Start Year", field: "", align: "left" },
        { name: "endYear", label: "End Year", field: "", align: "left" },
        { name: "view", label: "View Results", field: "actions", align: "left" },
        { name: "update", label: "Update", field: "actions", align: "left" },
        { name: "delete", label: "End Year", field: "actions", align: "left" }
        /* {
          name: "actions",
          label: "Actions",
          field: "actions",
          style: "width: 50px"
        } */
       ]

    };
  },
 methods: {
    deleteItem(selectedItem){
      confirm("Are you sure you want to delete this education?") &&
        this.deleteItemPrivate(selectedItem)
    },
    deleteItemPrivate(selectedItem){
      this.$store.dispatch('educationStore/DeleteEducation', selectedItem)
    },
    showNewEducation(){
      this.$store.commit('educationStore/ShowEducationDataCDialog')
    },
    showSelectedEducation(selectedItem){
       this.$store.commit('educationStore/ShowEducationDataUDialog', selectedItem)
    },
    resultsStatemet(selectedItem){
      var context =  this;
      console.log(selectedItem)
      this.$store.commit('educationStore/ShowEducationDataUDialog2', selectedItem)
       this.$store.dispatch('statementOfResultsStore/ReadStatementOfResults', {
         userId: context.IdentityModel.id,
         educationId: selectedItem.id
       })
    }

  },
  created() {
    var context =this;
    this.$store.dispatch('educationStore/ReadEducations', {
      userId: context.IdentityModel.id
    })

  }
  
}
</script>

<style scoped>

</style>

₦
