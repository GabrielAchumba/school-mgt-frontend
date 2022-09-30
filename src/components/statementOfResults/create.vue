<template>
    <div>
        

            <div class="q-pa-md">
                <q-card class="column full-height" style="width: 500px">
          
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Register Statement of Result</div>
          </q-card-section>

          <q-card-section>
                <div class="row">
                    <div class="col-5">
                      <q-select 
                            color="grey-3" 
                            outlined label-color="primary"
                            v-model="examType"
                            :options ="AuthDTO.ExamTypes"
                            label="Type of Exam">
                        </q-select>
                    </div>

                    <div class="col-2">
                    </div>

                    <div class="col-5">
                      <q-select 
                          v-if="isPrimarySchool"
                            color="grey-3" 
                            outlined label-color="primary"
                            v-model="subject"
                            :options ="AuthDTO.PrimarySubjects"
                            label="Subject">
                        </q-select>
                        <q-select 
                            v-else-if="isSecondarySchool"
                            color="grey-3" 
                            outlined label-color="primary"
                            v-model="subject"
                            :options ="AuthDTO.SecondarySubjects"
                            label="Subject">
                        </q-select>
                        <q-input 
                          v-else
                          v-model="subject" 
                          label="Course">
                        </q-input>
                    </div>
                </div>


                 <div class="row">
                    <div class="col-12" style="height:10px">     
                    </div>  
                </div>

                <div class="row">
                    <div class="col-5">
                      <q-select 
                            color="grey-3" 
                            outlined label-color="primary"
                            v-model="grade"
                            :options ="AuthDTO.Grades"
                            label="Grade">
                        </q-select>
                    </div>

                    <div class="col-2"></div>  

                    <div class="col-5">
                        <q-input v-model="score" label="Score (%)"></q-input>
                    </div>     
                </div>


                 <div class="row">
                    <div class="col-12" style="height:10px">     
                    </div>  
                </div>


                <div class="row">
                    <div class="col-12" style="height:10px">     
                    </div>  
                </div>

              <div class="row"> 
                    <div class="col-5">
                        <div class="q-mb-sm">
                            <q-badge color="blue">
                                Result Date: {{ date }}
                            </q-badge>
                            </div>

                            <q-btn icon="event" round color="primary">
                            <q-popup-proxy @before-show="updateProxy" transition-show="scale" transition-hide="scale">
                                <q-date v-model="proxyDate">
                                <div class="row items-center justify-end q-gutter-sm">
                                    <q-btn label="Cancel" color="primary" flat v-close-popup />
                                    <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                                </div>
                                </q-date>
                            </q-popup-proxy>
                            </q-btn>
                    </div>   
                </div>


               

          </q-card-section>
          
          <q-card-actions align="right">
            <q-btn  label="Submit" color="primary"  @click="create" size=md no-caps></q-btn>
            <q-btn  label="Cancel" color="primary"  @click="cancel" size=md no-caps></q-btn>

          </q-card-actions>
        </q-card>
                
            </div>
        
    </div>
</template>

<script>

export default {
    computed: {
      SchoolStatus(){
            return this.$store.getters['authenticationStore/SchoolStatus'];
        },
       IdentityModel() {
            return this.$store.getters['authenticationStore/IdentityModel'];
        },
        SelectedEducation(){
            return this.$store.getters['educationStore/SelectedEducation'];
        },
         AuthDTO(){
        return this.$store.getters['authenticationStore/AuthDTO'];
        }
      
      },
      components: {
          
        },
      data () {
    return {
            level: "",
            subject: "",
            grade: "",
            obtainedDay: 0,
            obtainedMonth: 0,
            obtainedYear: 0,
            isPrimarySchool: false,
            isSecondarySchool: false,
            date: '2019/03/01',
            proxyDate: '2019/03/01',
            score: "" ,
            examType: ""
            }
        },
      methods: {
         updateProxy () {
              var context = this;
            context.proxyDate = context.date
            },
            save () {
                var context = this;
                context.date = context.proxyDate
            },
          create(){
            var context = this;

            var res = context.date.split("/");
            var oDay = parseInt(res[2]);
            var oMonth = parseInt(res[1]);
            var oYear = parseInt(res[0]);

          this.$store.dispatch('statementOfResultsStore/CreateStatementOfResult', {
                level: context.level,
                subject: context.subject,
                grade: context.grade,
                obtainedDay: oDay,
                obtainedMonth: oMonth,
                obtainedYear: oYear,
                educationId: context.SelectedEducation.id,
                userId: context.IdentityModel.id,
                score: context.score,
                examType: context.examType
                });

               
      },
      cancel(){
        this.$store.commit('statementOfResultsStore/CancelStatementOfResultDataCDialog');
      }
    },
    created() {
      var context = this;
      var education = this.$store.getters['educationStore/SelectedEducation'];
      context.isPrimarySchool = education.isPrimarySchool;
      context.isSecondarySchool = education.isSecondarySchool;
      

  }
}
</script>

<style scoped>

</style>