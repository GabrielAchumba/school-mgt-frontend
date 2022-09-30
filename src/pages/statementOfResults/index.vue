<template>
  
  <div id="q-app">
  <div class="q-pa-sm q-gutter-sm">
    <div class="row">
            <q-btn 
               color="primary" 
               label="Create Result Statement" 
               @click="ShowStatementOfResultDataCDialog" 
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
            Statement of Results
          </q-card-section>
           <q-card-section>
               <q-table  
             :data="StatementOfResults" 
             :columns="columns" 
             row-key="name" 
             binary-state-sort
             style="height:250px">


      <template v-slot:body="props">
          <q-tr :props="props">
            <!-- <q-td key="image" :props="props">{{ props.row.image }}</q-td> -->
            <q-td key="examType" :props="props">{{ props.row.examType }}</q-td>
            <q-td key="subject" :props="props">{{ props.row.subject }}</q-td>
            <q-td key="grade" :props="props">{{ props.row.grade }}</q-td>
            <q-td key="score" :props="props">{{ props.row.score }}</q-td>
           <q-td key="actions" :props="props">
             <q-btn 
              icon="update"
              color="green" 
              no-shadows
              @click="ShowStatementOfResultDataUDialog(props.row)" 
              size=sm no-caps>
              </q-btn>

              <q-btn 
              icon="delete"
              color="green" 
              no-shadows
              @click="DeleteStatementOfResult(props.row)" 
              size=sm no-caps>
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
    StatementOfResults() {
      return this.$store.getters['statementOfResultsStore/StatementOfResults'];
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
        { name: "examType", label: "Type of Exam", field: "", align: "left" },
        { name: "subject", label: "Subject/Course", field: "", align: "left" },
        { name: "grade", label: "Grade", field: "", align: "left" },
        { name: "score", label: "Score (%)", field: "", align: "left" },
        {
          name: "actions",
          label: "Actions",
          field: "actions",
          style: "width: 50px"
        }
       ]
    };
  },
 methods: {
    DeleteStatementOfResult(selectedItem){
      var context = this;
      confirm("Are you sure you want to delete this statement of result?") &&
        this.deleteItemPrivate({
          statementOfResultsId: selectedItem.id,
      userId: context.IdentityModel.id,
      educationId: context.SelectedEducation.id
    });
    },
    deleteItemPrivate(newobject){
      this.$store.dispatch('statementOfResultsStore/DeleteStatementOfResult', newobject)
    },
    ShowStatementOfResultDataCDialog(){
      this.$store.commit('statementOfResultsStore/ShowStatementOfResultDataCDialog')
    },
    ShowStatementOfResultDataUDialog(selectedItem){
       this.$store.commit('statementOfResultsStore/ShowStatementOfResultDataUDialog', selectedItem)
    }

  },
  created() {
    var context =this;
    this.$store.dispatch('statementOfResultsStore/ReadStatementOfResults', {
      userId: context.IdentityModel.id,
      educationId: context.SelectedEducation.id
    })

  }
  
}
</script>

<style scoped>

</style>
