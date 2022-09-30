<template>
  
  <div class="q-pa-md">

      <div class="row">
          <div class="col-12" style="height:10px">     
          </div>  
    </div>
    
    <div class="row"> 
      <div class="col-12">     

        <q-card>
          <q-card-section class="bg-primary text-white">
            Report of Students
          </q-card-section>
          
           <q-card-section>
             <q-option-group
                v-model="separator"
                inline
                class="q-mb-md"
                :options="[
                  { label: 'Horizontal (default)', value: 'horizontal' },
                  { label: 'Vertical', value: 'vertical' },
                  { label: 'Cell', value: 'cell' },
                  { label: 'None', value: 'none' },
                ]"
              />
               <q-table 
               class="my-sticky-header-table"
             :data="SortModels" 
             :columns="columns" 
             row-key="name"
             :visible-columns="visibleColumns"
             :separator="separator">


            <template v-slot:top="props">
        <div class="col-2 q-table__title">Switch Columns</div>

          <q-space />
         
       <div v-if="$q.screen.gt.xs" class="col">
          <q-toggle v-model="visibleColumns" val="fullName" label="FullName" />
          <q-toggle v-model="visibleColumns" val="subject" label="Subject" />
          <q-toggle v-model="visibleColumns" val="score" label="Score (%)" />
          <q-toggle v-model="visibleColumns" val="grade" label="Grade" />
          <q-toggle v-model="visibleColumns" val="level" label="Class" />
          <q-toggle v-model="visibleColumns" val="schoolName" label="School" />
          <q-toggle v-model="visibleColumns" val="schoolCategory" label="School Category" />
          <q-toggle v-model="visibleColumns" val="lGAOfOrigin" label="LGA" />
          <q-toggle v-model="visibleColumns" val="examType" label="Type of Exam" />
          <q-toggle v-model="visibleColumns" val="finalOverallGrade" label="Overall Grade" />
          <q-toggle v-model="visibleColumns" val="gender" label="Gender" />
        </div>
        <q-select
          v-else
          v-model="visibleColumns"
          multiple
          borderless
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          style="min-width: 150px"
        />

        <q-btn
          flat round dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        /> 
        </template>

        <template  v-slot:body="props">
        <q-tr :props="props"
          v-if="props.row.isPassed">
            <q-td key="fullName" :props="props">{{ props.row.fullName }}</q-td>
            <q-td key="subject" :props="props">{{ props.row.subject }}</q-td>
            <q-td key="score" :props="props">{{ props.row.score }}</q-td>
            <q-td key="grade" :props="props">{{ props.row.grade }}</q-td>
            <q-td key="level" :props="props">{{ props.row.level }}</q-td>
            <q-td key="schoolName" :props="props">{{ props.row.schoolName }}</q-td>
            <q-td key="schoolCategory" :props="props">{{ props.row.schoolCategory }}</q-td>
            <q-td key="lGAOfOrigin" :props="props">{{ props.row.lGAOfOrigin }}</q-td>
            <q-td key="examType" :props="props">{{ props.row.examType }}</q-td>
            <q-td key="finalOverallGrade" :props="props">{{ props.row.finalOverallGrade }}</q-td>
            <q-td key="gender" :props="props">{{ props.row.gender }}</q-td>
          </q-tr>
          <q-tr :props="props"
          v-else>
            <q-td key="fullName" :props="props" style="color: red">{{ props.row.fullName }}</q-td>
            <q-td key="subject" :props="props" style="color: red">{{ props.row.subject }}</q-td>
            <q-td key="score" :props="props" style="color: red">{{ props.row.score }}</q-td>
            <q-td key="grade" :props="props" style="color: red">{{ props.row.grade }}</q-td>
            <q-td key="level" :props="props" style="color: red">{{ props.row.level }}</q-td>
            <q-td key="schoolName" :props="props" style="color: red">{{ props.row.schoolName }}</q-td>
            <q-td key="schoolCategory" :props="props" style="color: red">{{ props.row.schoolCategory }}</q-td>
            <q-td key="lGAOfOrigin" :props="props" style="color: red">{{ props.row.lGAOfOrigin }}</q-td>
            <q-td key="examType" :props="props" style="color: red">{{ props.row.examType }}</q-td>
            <q-td key="finalOverallGrade" :props="props" style="color: red">{{ props.row.finalOverallGrade }}</q-td>
            <q-td key="gender" :props="props" style="color: red">{{ props.row.gender }}</q-td>
          </q-tr>
      </template>
    </q-table>

          </q-card-section>


      </q-card>
               </div> 
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    SortModels() {
            return this.$store.getters['administratorStore/SortModels'];
        },
    IsColumnsSelected(){
            return this.$store.getters['administratorStore/IsColumnsSelected'];
        }
  },
  components: {
  },
  data() {
    return {
      separator: 'vertical',
      visibleColumns: [ 'fullName', 'subject', 'score', 'grade', 'level', 'schoolName', 'schoolCategory', 'lGAOfOrigin', 'examType' , 'finalOverallGrade' , 'gender'  ],
      columns: [
      { name: "fullName", label: "FullName", field: "", align: "left"} ,
      { name: "subject", label: "Subject", field: "", align: "left"},
      { name: "score", label: "Score (%)", field: "", align: "left"},
      { name: "grade", label: "Grade", field: "", align: "left"},
      { name: "level", label: "Class", field: "", align: "left"},
      { name: "schoolName", label: "School", field: "", align: "left"},
      { name: "schoolCategory", label: "School Category", field: "", align: "left"},
      { name: "lGAOfOrigin", label: "LGA", field: "", align: "left"},
      { name: "examType", label: "Type of Exam", field: "", align: "left"},
      { name: "finalOverallGrade", label: "Overall Grade", field: "", align: "left"},
      { name: "gender", label: "Gender", field: "", align: "left"}
     ]
    };
  },
 methods: {

  },
  created() {

  }
  
}
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 600px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #c1f4cd

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>
