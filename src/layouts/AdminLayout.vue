<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          
        </q-toolbar-title>

        <q-btn stretch flat label="Options" 
       @click="showOptions" />
        <q-btn stretch flat label="Report" 
       @click="reportAction" />
        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>

  <!--   <q-drawer 
    show-if-above v-model="left" 
    side="left" 
    :breakpoint="767"
    :width="200"
    bordered
    content-class="bg-primary">
      
       <q-card>

         <q-card-section class="bg-primary text-white">
            <div class="text-h6">Headers</div>
          </q-card-section>

          <q-card-section>

              <q-list bordered padding>

                <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="IsColumnsSelected.lGASelected" />
                    </q-item-section>

                    <q-item-section>
                        <p>LGA</p>
                    </q-item-section>
                </q-item>

                <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="IsColumnsSelected.examTypeSelected" />
                    </q-item-section>

                    <q-item-section>
                        <p>Type of Exam</p>
                    </q-item-section>
                </q-item>

                <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="IsColumnsSelected.finalOverallGradeSelected" />
                    </q-item-section>

                    <q-item-section>
                        <p>Overall Grade</p>
                    </q-item-section>
                </q-item>

                 <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="IsColumnsSelected.genderSelected" />
                    </q-item-section>

                    <q-item-section>
                        <p>Gender</p>
                    </q-item-section>
                </q-item>

                 <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="IsColumnsSelected.gradeSelected" />
                    </q-item-section>

                    <q-item-section>
                        <p>Grade</p>
                    </q-item-section>
                </q-item>

                 <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="IsColumnsSelected.levelSelected" />
                    </q-item-section>

                    <q-item-section>
                        <p>Class</p>
                    </q-item-section>
                </q-item>

                 <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="IsColumnsSelected.schoolCategorySelected" />
                    </q-item-section>

                    <q-item-section>
                        <p>School Category</P>
                    </q-item-section>
                </q-item>

                 <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="IsColumnsSelected.schoolNameSelected" />
                    </q-item-section>

                    <q-item-section>
                        <p>Name of School</P>
                    </q-item-section>
                </q-item>

                 <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="IsColumnsSelected.scoreSelected" />
                    </q-item-section>

                    <q-item-section>
                        <p>Exam Score</p>
                    </q-item-section>
                </q-item>

                 <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="IsColumnsSelected.subjectSelected" />
                    </q-item-section>

                    <q-item-section>
                        <p>Subject</p>
                    </q-item-section>
                </q-item>
                </q-list>

          </q-card-section>

     </q-card>

    </q-drawer> -->

    <q-drawer 
    show-if-above v-model="right" 
    side="right" 
    :breakpoint="767"
    bordered
    content-class="bg-primary">

     <q-card>

         <q-card-section class="bg-primary text-white">
            <div class="text-h6">Sort Variables</div>
          </q-card-section>

          <q-card-section>

              <q-list bordered padding>

                <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="SortVariable.isLGAOfOriginSelected"/>
                    </q-item-section>

                    <q-item-section>
                        <q-select 
                            color="grey-3" 
                            outlined label-color="primary"
                             v-model="SortVariable.lGAOfOrigin"
                            :options ="AuthDTO.LGAs"
                            label="LGA">
                        </q-select>
                    </q-item-section>
                </q-item>

                <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="SortVariable.isExamTypeSelected"/>
                    </q-item-section>

                    <q-item-section>
                        <q-select 
                            color="grey-3" 
                            outlined label-color="primary"
                             v-model="SortVariable.examType"
                            :options ="AuthDTO.ExamTypes"
                            label="Type of Exam">
                        </q-select>
                    </q-item-section>
                </q-item>

                <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="SortVariable.isFinalOverallGradeSelected"/>
                    </q-item-section>

                    <q-item-section>
                        <q-select 
                            color="grey-3" 
                            outlined label-color="primary"
                             v-model="SortVariable.finalOverallGrade"
                            :options ="AuthDTO.OverallGrades"
                            label="Overall Grade">
                        </q-select>
                    </q-item-section>
                </q-item>

                 <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="SortVariable.isGenderSelected"/>
                    </q-item-section>

                    <q-item-section>
                        <q-select 
                            color="grey-3" 
                            outlined label-color="primary"
                             v-model="SortVariable.gender"
                            :options ="genders"
                            label="Gender">
                        </q-select>
                    </q-item-section>
                </q-item>

                 <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="SortVariable.isGradeSelected"/>
                    </q-item-section>

                    <q-item-section>
                        <q-select 
                            color="grey-3" 
                            outlined label-color="primary"
                             v-model="SortVariable.grade"
                            :options ="AuthDTO.Grades"
                            label="Grade">
                        </q-select>
                    </q-item-section>
                </q-item>

                 <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="SortVariable.islevelSelected"/>
                    </q-item-section>

                    <q-item-section>
                        <q-select 
                            color="grey-3" 
                            outlined label-color="primary"
                             v-model="SortVariable.level"
                            :options ="AuthDTO.Levels"
                            label="Class">
                        </q-select>
                    </q-item-section>
                </q-item>

                 <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="SortVariable.isSchoolCategorySelected"/>
                    </q-item-section>

                    <q-item-section>
                        <q-select 
                            color="grey-3" 
                            outlined label-color="primary"
                             v-model="SortVariable.schoolCategory"
                            :options ="AuthDTO.Schools"
                            label="School Category">
                        </q-select>
                    </q-item-section>
                </q-item>

                 <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="SortVariable.isSchoolNameSelected"/>
                    </q-item-section>

                    <q-item-section>
                        <q-select 
                            color="grey-3" 
                            outlined label-color="primary"
                             v-model="SortVariable.schoolName"
                            :options ="AuthDTO.SchoolNames"
                            label="Name of School">
                        </q-select>
                    </q-item-section>
                </q-item>

                 <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="SortVariable.isScoreSelected"/>
                    </q-item-section>

                    <q-item-section>
                        <q-select 
                            color="grey-3" 
                            outlined label-color="primary"
                             v-model="SortVariable.score"
                            :options ="ExamScores"
                            label="Exam Score (Begin)">
                        </q-select>
                    </q-item-section>
                </q-item>

                 <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="SortVariable.isScoreSelected"/>
                    </q-item-section>

                    <q-item-section>
                        <q-select 
                            color="grey-3" 
                            outlined label-color="primary"
                             v-model="SortVariable.scoreEnd"
                            :options ="ExamScores"
                            label="Exam Score (End)">
                        </q-select>
                    </q-item-section>
                </q-item>

                 <q-item tag="label" v-ripple>
                    <q-item-section side top>
                    <q-checkbox v-model="SortVariable.isSubjectSelected"/>
                    </q-item-section>

                    <q-item-section>
                        <q-select 
                            color="grey-3" 
                            outlined label-color="primary"
                             v-model="SortVariable.subject"
                            :options ="AuthDTO.PrimarySubjects"
                            label="Primary School Subject">
                        </q-select>
                    </q-item-section>
                </q-item>

                </q-list>

          </q-card-section>

     </q-card>
      
    </q-drawer>

    <q-page-container>
         <q-dialog v-model="PrimaryOptionCutOffCDialog">
          <createprimary-app></createprimary-app>
        </q-dialog>

        <q-dialog v-model="SecondaryOptionCutOffCDialog">
          <createsecondary-app></createsecondary-app>
        </q-dialog>
         <q-dialog v-model="PrimaryOptionCutOffUDialog">
          <updateprimary-app></updateprimary-app>
        </q-dialog>

        <q-dialog v-model="SecondaryOptionCutOffUDialog">
          <updatesecondary-app></updatesecondary-app>
        </q-dialog>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import createprimary from 'components/administrators/createprimary.vue';
import createsecondary from 'components/administrators/createsecondary.vue';
import updateprimary from 'components/administrators/updateprimary.vue';
import updatesecondary from 'components/administrators/updatesecondary.vue';
export default {
    computed:{
         PrimaryOptionCutOffCDialog() {
          return this.$store.getters['administratorStore/PrimaryOptionCutOffCDialog'];
        },
        SecondaryOptionCutOffCDialog() {
          return this.$store.getters['administratorStore/SecondaryOptionCutOffCDialog'];
        },
        PrimaryOptionCutOffUDialog() {
          return this.$store.getters['administratorStore/PrimaryOptionCutOffUDialog'];
        },
        SecondaryOptionCutOffUDialog() {
          return this.$store.getters['administratorStore/SecondaryOptionCutOffUDialog'];
        },
        SortVariable() {
            return this.$store.getters['administratorStore/SortVariable'];
        },
        AuthDTO(){
            return this.$store.getters['authenticationStore/AuthDTO'];
        },
        genders(){
            return this.$store.getters['clientStore/genders'];
        },
        ExamScores(){
            return this.$store.getters['authenticationStore/ExamScores'];
        },
        IsColumnsSelected(){
            return this.$store.getters['administratorStore/IsColumnsSelected'];
        }
    },
    components: {
        'createprimary-app' : createprimary,
        'createsecondary-app' : createsecondary,
        'updateprimary-app' : updateprimary,
        'updatesecondary-app' : updatesecondary
    },
  data () {
    return {
      left: true,
      right: false,
      navs: [
              {
                label:'Analysis',
                icon: 'group',
                to:'/admin'
              }
            ]
    }
  },
  methods:{
      reportAction(){
          this.$store.dispatch('administratorStore/ReadSortModels');
      },
      showOptions(){
          this.$router.push('/options');
      }
  },
  created(){
    this.$store.dispatch('authenticationStore/LoadList');
  }
}
</script>