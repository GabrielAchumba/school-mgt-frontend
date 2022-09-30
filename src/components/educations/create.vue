<template>
    <div>
        

            <div class="q-pa-md">
                <q-card class="column full-height" style="width: 500px">
          
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Create Education</div>
          </q-card-section>

          <q-card-section
           v-if="isHigherInstitution">
                

                 <div class="row">
                    
                     <div class="col-5">
                        <q-select 
                            color="grey-3" 
                            outlined label-color="primary"
                            v-model="faculty"
                            :options ="AuthDTO.Faculties"
                            @input="onFacultyValueChanged"
                            label="Faculty">
                        </q-select>
                    </div> 

                    <div class="col-2"></div>  

                    <div class="col-5">
                        <q-select 
                            color="grey-3" 
                            outlined label-color="primary"
                            v-model="department"
                            :options ="AuthDTO.Departments"
                            label="Department">
                        </q-select>
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
                            v-model="schoolCategory"
                            :options ="AuthDTO.Schools"
                            @input="onSchoolCategoryValueChanged"
                            label="School Category">
                        </q-select>
                    </div> 

                    <div class="col-2"></div>  

                    <div class="col-5">
                        <q-select 
                            color="grey-3" 
                            outlined label-color="primary"
                            v-model="finalOverallGrade"
                            :options ="AuthDTO.OverallGrades"
                            label="Overall Grade">
                        </q-select>
                    </div>     
                </div>



               <div 
                v-if="isHigherInstitution"
               class="row">

                    <div class="col-5">
                        <q-input v-model="schoolName" label="School"></q-input>
                    </div> 

                    <div class="col-2"></div>  

                    <div class="col-5">
                        <q-select 
                           
                            color="grey-3" 
                            outlined label-color="primary"
                            v-model="higherInstitution"
                            :options ="AuthDTO.HigherInstitutions"
                            label="Higher Institution">
                        </q-select>
                    </div>

                </div>

                 <div 
                v-else
               class="row">

                    <div class="col-12">
                        <q-input v-model="schoolName" label="School"></q-input>
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
                                Start Date: {{ startdate }}
                            </q-badge>
                            </div>

                            <q-btn icon="event" round color="primary">
                            <q-popup-proxy @before-show="updateProxyStart" 
                            transition-show="scale" transition-hide="scale">
                                <q-date v-model="proxyStartDate">
                                <div class="row items-center justify-end q-gutter-sm">
                                    <q-btn label="Cancel" color="primary" flat v-close-popup />
                                    <q-btn label="OK" color="primary" flat @click="saveStart" v-close-popup />
                                </div>
                                </q-date>
                            </q-popup-proxy>
                            </q-btn>
                    </div>   

                    <div class="col-2"></div>  

                    <div class="col-5">
                        <div class="q-mb-sm">
                            <q-badge color="blue">
                                End Date: {{ enddate }}
                            </q-badge>
                            </div>

                            <q-btn icon="event" round color="primary">
                            <q-popup-proxy @before-show="updateProxyEnd" 
                            transition-show="scale" transition-hide="scale">
                                <q-date v-model="proxyEndDate">
                                <div class="row items-center justify-end q-gutter-sm">
                                    <q-btn label="Cancel" color="primary" flat v-close-popup />
                                    <q-btn label="OK" color="primary" flat @click="saveEnd" v-close-popup />
                                </div>
                                </q-date>
                            </q-popup-proxy>
                            </q-btn>
                    </div>   
                </div>

                <div class="row">
                    <div class="col-12" style="height:10px">     
                    </div>  
                </div>

              <div class="row">
                     <q-uploader
                    label="Auto Uploader"
                      auto-upload
                      :url="getUrl"
                      multiple
                      />    
                </div>

               

          </q-card-section>

          <q-card-section
           v-else>
                
                 <div class="row">

                    <div class="col-12">
                        <q-select 
                            color="grey-3" 
                            outlined label-color="primary"
                            v-model="schoolName"
                            :options ="AuthDTO.SchoolNames"
                            label="School Name">
                        </q-select>
                    </div> 

                </div>

                <div class="row">
                    <div class="col-12" style="height:10px">     
                    </div>  
                </div>  

                <div class="row">

                    <div class="col-12">
                        <q-select 
                            color="grey-3" 
                            outlined label-color="primary"
                            v-model="schoolCategory"
                            :options ="AuthDTO.Schools"
                            @input="onSchoolCategoryValueChanged"
                            label="School Category">
                        </q-select>
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
                            v-model="level"
                            :options ="AuthDTO.Levels"
                            @input="onSchoolCategoryValueChanged"
                            label="Class">
                        </q-select>
                    </div> 

                    <div class="col-2"></div> 

                    <div class="col-5">
                        <q-select 
                            color="grey-3" 
                            outlined label-color="primary"
                            v-model="finalOverallGrade"
                            :options ="AuthDTO.OverallGrades"
                            label="Overall Grade">
                        </q-select>
                    </div> 

                </div>


                 <div class="row">
                    <div class="col-12" style="height:10px">     
                    </div>  
                </div>

                <div class="row">
                    <div class="col-5">
                        <div class="q-mb-sm">
                            <q-badge color="primary">
                                Start Date: {{ startdate }}
                            </q-badge>
                            </div>

                            <q-btn icon="event" round color="primary">
                            <q-popup-proxy @before-show="updateProxyStart" 
                            transition-show="scale" transition-hide="scale">
                                <q-date v-model="proxyStartDate">
                                <div class="row items-center justify-end q-gutter-sm">
                                    <q-btn label="Cancel" color="primary" flat v-close-popup />
                                    <q-btn label="OK" color="primary" flat @click="saveStart" v-close-popup />
                                </div>
                                </q-date>
                            </q-popup-proxy>
                            </q-btn>
                    </div>   

                    <div class="col-2"></div>  

                    <div class="col-5">
                        <div class="q-mb-sm">
                            <q-badge color="primary">
                                End Date: {{ enddate }}
                            </q-badge>
                            </div>

                            <q-btn icon="event" round color="primary">
                            <q-popup-proxy @before-show="updateProxyEnd" 
                            transition-show="scale" transition-hide="scale">
                                <q-date v-model="proxyEndDate">
                                <div class="row items-center justify-end q-gutter-sm">
                                    <q-btn label="Cancel" color="primary" flat v-close-popup />
                                    <q-btn label="OK" color="primary" flat @click="saveEnd" v-close-popup />
                                </div>
                                </q-date>
                            </q-popup-proxy>
                            </q-btn>
                    </div>   
                </div>

                <div class="row">
                    <div class="col-12" style="height:10px">     
                    </div>  
                </div>

              <div class="row">
                     <q-uploader
                    label="Auto Uploader"
                      auto-upload
                      :url="getUrl"
                      multiple
                      />    
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
        Departments(){
            return this.$store.getters['authenticationStore/Departments'];
        },
        SchoolStatus(){
            return this.$store.getters['authenticationStore/SchoolStatus'];
        },
        AuthDTO(){
        return this.$store.getters['authenticationStore/AuthDTO'];
        },
        IdentityModel() {
            return this.$store.getters['authenticationStore/IdentityModel'];
        },
        base64String(){
            return this.$store.getters['educationStore/base64String'];
        }
      },
      components: {
          
        },
      data () {
    return {
            startDay: 0,
            startMonth: 0,
            startYear: 0,
            endDay: 0,
            endMonth: 0,
            endYear: 0,
            schoolName: "",
            department: "",
            faculty: "",
            finalOverallGrade: "",
            schoolCategory: "",
            base64String:"",
            higherInstitution: "",
            isHigherInstitution: false,
            selected_file:'',
            check_if_document_upload:false,
            startdate: '2019/03/01',
            proxyStartDate: '2019/03/01',
            enddate: '2019/03/01',
            proxyEndDate: '2019/03/01',
            isPrimarySchool: true,
            isSecondarySchool: false,
            level: ""
            }
        },
      methods: {
          getUrl (files) {
          return `http://localhost:52766/api/Educations/UploadPhoto`
        },
          file_selected(file) {
              var context = this;
                context.selected_file = file[0];
                context.check_if_document_upload=true
            },
            uploadFile(){
                var context = this;
                let fd = new FormData();
                fd.append("file", context.selected_file);

                this.$axios.post('Educations/UploadPhoto',fd,{
                headers: { 'Content-Type': undefined},
                }).then(function (response) {
                if (response.data.ok) {
                }
                }.bind(this));

            },
            updateProxyStart () {
              var context = this;
            context.proxyStartDate = context.startdate
            },
            saveStart () {
                var context = this;
                context.startdate = context.proxyStartDate
            },
            updateProxyEnd () {
              var context = this;
            context.proxyEndDate = context.enddate
            },
            saveEnd () {
                var context = this;
                context.enddate = context.proxyEndDate
            },
          create(){
            var context = this;

            var res = context.startdate.split("/");
            var sDay = parseInt(res[2]);
            var sMonth = parseInt(res[1]);
            var sYear = parseInt(res[0]);

            var res2 = context.enddate.split("/");
            var eDay = parseInt(res2[2]);
            var eMonth = parseInt(res2[1]);
            var eYear = parseInt(res2[0]);

          this.$store.dispatch('educationStore/CreateEducation', {
                startDay: sDay,
                startMonth: sMonth,
                startYear: sYear,
                endDay: eDay,
                endMonth: eMonth,
                endYear: eYear,
                schoolName: context.schoolName,
                department: context.department,
                faculty: context.faculty,
                finalOverallGrade: context.finalOverallGrade,
                base64String:"",
                userId: context.IdentityModel.id,
                schoolCategory: context.schoolCategory,
                higherInstitution:context.higherInstitution,
                isPrimarySchool: context.isPrimarySchool,
                isSecondarySchool: context.isSecondarySchool,
                isHigherInstitution: context.isHigherInstitution,
                level: context.level
                });

               
      },
      cancel(){
        this.$store.commit('educationStore/CancelEducationDataCDialog');
      },
      onFacultyValueChanged(){
          var context = this;
           this.$store.commit('authenticationStore/onFacultyValueChanged', context.faculty);
      },
      onSchoolCategoryValueChanged(){
          var context = this;
          context.isHigherInstitution = false;
          context.isPrimarySchool = false;
          context.isSecondarySchool = false;
          if(context.schoolCategory == "Primary School"){
              context.isPrimarySchool = true;
          }
          if(context.schoolCategory == "Secondary School"){
              context.isSecondarySchool = true;
          }
          if(context.schoolCategory == "Higher Institution"){
              context.isHigherInstitution = true;
          }

           console.log( context.isPrimarySchool);
           console.log( context.isSecondarySchool);
            console.log( context.isHigherInstitution);
      }
    },
    created() {
        

  }
}
</script>

<style scoped>

</style>