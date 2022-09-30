<template>
    <div>
        

            <div class="q-pa-md">
                <q-card class="column full-height" style="width: 500px">
          
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Create Personal Profile</div>
          </q-card-section>

          <q-card-section>
              <div class="row">
                    <div class="col-12">
                         <q-input
                            v-model="statement"
                            filled
                            clearable
                            type="textarea"
                            color="blue"
                            label="Statement"
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
            <q-btn  label="Submit" color="primary"  @click="create" size=md no-caps></q-btn>
            <q-btn  label="Cancel" color="primary"  @click="cancel" size=md no-caps></q-btn>

          </q-card-actions>
        </q-card>
                
            </div>


       <!--  <div class="row">
            <div class="col-12" height="10"></div>   
        </div>  -->
        
    </div>
</template>

<script>

export default {
    computed: {
      IdentityModel() {
            return this.$store.getters['authenticationStore/IdentityModel'];
        },
        base64String(){
            return this.$store.getters['personalprofileStore/base64String'];
        }
      },
      components: {
          
        },
      data () {
    return {
            statement:"",
            base64String:"",
            selected_file:'',
            check_if_document_upload:false
            }
        },
      methods: {
         getUrl (files) {
          return `http://localhost:52766/api/PersonalProfiles/UploadPhoto`
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

                this.$axios.post('PersonalProfiles/UploadPhoto',fd,{
                headers: { 'Content-Type': undefined},
                }).then(function (response) {
                if (response.data.ok) {
                }
                }.bind(this));

            },
          create(){
            var context = this;

          this.$store.dispatch('personalprofileStore/CreatePersonalProfile', {
                statement: context.statement,
                base64String:context.base64String,
                userId: context.IdentityModel.id
                });

               
      },
      cancel(){
        this.$store.commit('personalprofileStore/CancelPersonalProfileDataCDialog');
      }
    },
    created() {
        var context = this;
        var personalProfile = this.$store.getters['personalprofileStore/NewPersonalProfile']
        context.statement = personalProfile.statement;

  }
}
</script>

<style scoped>

</style>