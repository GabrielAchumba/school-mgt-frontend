<template>
    <div>
        

            <div class="q-pa-md">
                <q-card class="column full-height" style="width: 500px">
          
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Update Referee</div>
          </q-card-section>

          <q-card-section>
                <div class="row">
                    <div class="col-12">
                        <q-input v-model="fullName" label="Full Name"></q-input>
                    </div>
                </div>


                 <div class="row">
                    <div class="col-12" style="height:10px">     
                    </div>  
                </div>

                <div class="row">
                    <div class="col-5">
                        <q-input v-model="jobPosition" label="Job Position"></q-input>
                    </div>

                    <div class="col-2"></div>  

                    <div class="col-5">
                        <q-input v-model="organization" label="Name of Organization"></q-input>
                    </div>     
                </div>


                 <div class="row">
                    <div class="col-12" style="height:10px">     
                    </div>  
                </div>

                <div class="row">
                    <div class="col-5">
                        <q-input v-model="telephoneNumber" label="Telephone Number"></q-input>
                    </div>

                    <div class="col-2"></div>  

                    <div class="col-5">
                        <q-input v-model="email" label="Email"></q-input>
                    </div>     
                </div>


                 <div class="row">
                    <div class="col-12" style="height:10px">     
                    </div>  
                </div>

                 <div class="row">
                    <div class="col-12">
                         <q-input
                            v-model="address"
                            filled
                            clearable
                            type="textarea"
                            color="blue"
                            label="Address"
                        />
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
            <q-btn  label="Submit" color="primary"  @click="update" size=md no-caps></q-btn>
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
            return this.$store.getters['referenceStore/base64String'];
        },
        SelectedReference(){
            return this.$store.getters['referenceStore/SelectedReference'];
        }
      },
      components: {
          
        },
      data () {
    return {
            fullName: "",
            jobPosition: "",
            address: "",
            organization: "",
            telephoneNumber: "",
            email: "",
            base64String:"",
            selected_file:'',
            check_if_document_upload:false
            }
        },
      methods: {
           getUrl (files) {
          return `http://localhost:52766/api/References/UploadPhoto`
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

                this.$axios.post('References/UploadPhoto',fd,{
                headers: { 'Content-Type': undefined},
                }).then(function (response) {
                if (response.data.ok) {
                }
                }.bind(this));

            },
          update(){
            var context = this;

          this.$store.dispatch('referenceStore/UpdateReference', {
                fullName: context.fullName,
                jobPosition: context.jobPosition,
                address: context.address,
                organization: context.organization,
                telephoneNumber: context.telephoneNumber,
                email: context.email,
                base64String:"",
                id: context.SelectedReference.id,
                userId: context.IdentityModel.id
                });

               
      },
      cancel(){
        this.$store.commit('referenceStore/CancelReferenceDataUDialog');
      }
    },
    created() {
        var context = this;
        var referee = this.$store.setters['referenceStore/SelectedReference'];
        context.fullName = referee.fullName;
        context.jobPosition = referee.jobPosition;
        context.organization=referee.organization;
        context.address=referee.address;
        context.telephoneNumber=referee.telephoneNumber;
        context.email=referee.email;
                

  }
}
</script>

<style scoped>

</style>