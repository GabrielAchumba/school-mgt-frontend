<template>
    <div>
        

            <div class="q-pa-md">
                <q-card class="column full-height" style="width: 500px">
          
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Update Employment</div>
          </q-card-section>

          <q-card-section>
                <div class="row">
                    <div class="col-5">
                        <q-input v-model="organizationName" label="Name of Organization"></q-input>
                    </div>

                    <div class="col-2"></div>  

                    <div class="col-5">
                        <q-input v-model="jobTitle" label="Job Title"></q-input>
                    </div>     
                </div>

                 <div class="row">
                    <div class="col-12" style="height:10px">     
                    </div>  
                </div>

                 <div class="row">
                    <div class="col-12">
                         <q-input
                            v-model="jobDescription"
                            filled
                            clearable
                            type="textarea"
                            color="blue"
                            label="Job Description"
                        />
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
        IdentityModel() {
            return this.$store.getters['authenticationStore/IdentityModel'];
        },
        base64String(){
            return this.$store.getters['employmentStore/base64String'];
        },
        SelectedEmployment(){
            return this.$store.getters['employmentStore/SelectedEmployment'];
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
            organizationName: "",
            jobDescription: "",
            jobTitle: "",
            base64String:"",
            selected_file:'',
            check_if_document_upload:false,
            startdate: '2019/03/01',
            proxyStartDate: '2019/03/01',
            enddate: '2019/03/01',
            proxyEndDate: '2019/03/01'
            }
        },
      methods: {
          getUrl (files) {
          return `http://localhost:52766/api/Employments/UploadPhoto`
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

                this.$axios.post('Employments/UploadPhoto',fd,{
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

          this.$store.dispatch('employmentStore/CreateEmployment', {
                startDay: sDay,
                startMonth: sMonth,
                startYear: sYear,
                endDay: eDay,
                endMonth: eMonth,
                endYear: eYear,
                organizationName: context.organizationName,
                jobDescription: context.jobDescription,
                jobTitle: context.jobTitle,
                base64String:"",
                id: context.SelectedEmployment.id,
                userId: context.IdentityModel.id
                });

               
      },
      cancel(){
        this.$store.commit('employmentStore/CancelEmploymentDataUDialog');
      }
    },
    created() {
        var context = this;
        var employment = this.$store.setters['employmentStore/SelectedEmployment'];
        context.startDay = employment.startDay;
        context.startMonth = employment.startMonth;
        context.startYear = employment.startYear;
        context.endDay = employment.endDay;
        context.endMonth = employment.endMonth;
        context.endYear = employment.endYear;
        context.organizationName = employment.organizationName;
        context.jobDescription = employment.jobDescription;
        context.jobTitle =  employment.jobTitle;

        context.startdate = context.startYear + '/' 
                            + context.startMonth + '/'
                            + context.startDay;
        
        context.proxyStartDate = context.startdate;

        context.enddate = context.endYear + '/' 
                            + context.endMonth + '/'
                            + context.endDay;

        context.proxyEndDate = context.enddate;

                

  }
}
</script>

<style scoped>

</style>