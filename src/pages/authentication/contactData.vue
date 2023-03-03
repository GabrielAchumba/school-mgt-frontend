<template>
  <q-layout>
   <q-page-container>
     <q-page class="flex flex-center bg-primary">
       <q-card
          class="personal-data-form"
          v-bind:style="
          $q.platform.is.mobile ? { width: '90%', height: '95%' } : { width: '90%' , height: '100%' }
          "
        >

   <q-card-section class="bg-accent text-primary">
    <div class="row no-wrap items-center">
      <div class="col text-h6 ellipsis">
        Contact Data
      </div>
    </div>
  </q-card-section>

   <q-card-section>
      <q-form class="q-gutter-md">

        <div class="row text-center flex flex-center q-pb-lg">
          <div 
          v-if="!isAdmin"
          class="col-md-6 col-lg-16 col-sx-6 col-sm-6 q-gutter-lg q-px-xl q-pb-none q-ma-none">
            <input type="file" @change="onFileSelected" class="bg-primary text-accent"/>
          </div>
          <div 
          v-if="!isAdmin"
          class="col-md-6 col-lg-6 col-sx-6 col-sm-6 q-gutter-lg q-px-xl q-pb-none q-ma-none">
            <q-btn class="text-capitalize bg-primary text-accent" 
            exact
            size="sm" style="width:75px" dense label="Upload Photo"
            type="button"
            @click="UploadAction" />
          </div>
        </div>

      <q-input outlined v-model="ContactDTO.phoneNumber" label="Phone Number *" lazy-rules />
      <q-input outlined v-model="ContactDTO.email" label="Email Address " lazy-rules />
      <q-input outlined v-model="ContactDTO.residentialCity" label="Residential City" lazy-rules />
      <q-input outlined v-model="ContactDTO.residentialState" label="Residential State" lazy-rules />
      <q-input outlined type="textarea" v-model="ContactDTO.address" label="Address" lazy-rules />

      <div class="row">
        <div class="col-6 text-left">
          <q-btn
            label="Cancel"
            type="button"
            size="sm"
            no-caps
            class="text-primary bg-accent"
            @click="cancel"
          />
        </div>
        <div class="col-6 text-right">
          <q-btn
            label="Update"
            type="button"
            size="sm"
            no-caps
            class="text-primary bg-accent"
            @click="updateData"
          />
        </div>
      </div>
    </q-form>
   </q-card-section>
        
  </q-card>

<q-dialog v-model="isUploadFileDialog">
  <MessageBox
  title="Upload Photo"
  :message="`Do you want to upload photo?`"
  okayEvent="okayUploadFile"
  cancelEvent="cancelUploadFile"
  @okayUploadFile="okayUploadFile($event)"
  @cancelUploadFile="cancelUploadFile($event)"
  >
  </MessageBox>
</q-dialog>

<q-dialog v-model="isUploadFileSuccessDialog">
  <MessageBox
  title="Success"
  :message="`Photo uploaded successfully.`"
  okayEvent="okayUploadFileSucess"
  cancelEvent="cancelUploadFileSuccess"
  @okayUploadFileSucess="okayUploadFileSucess($event)"
  @cancelUploadFileSuccess="cancelUploadFileSuccess($event)"
  >
  </MessageBox>
</q-dialog>

<q-dialog v-model="isUploadFileFailureDialog">
  <MessageBox
  title="Failure"
  :message="`${message}.`"
  okayEvent="okayUploadFileFailure"
  cancelEvent="cancelUploadFileFailure"
  @okayUploadFileFailure="okayUploadFileFailure($event)"
  @cancelUploadFileFailure="cancelUploadFileFailure($event)"
  >
  </MessageBox>
</q-dialog>


<q-dialog v-model="isUpdateDialog">
  <MessageBox
  title="Update"
  message="Do you want to contacts?"
  okayEvent="update"
  cancelEvent="cancelUpdate"
  @cancelUpdate="cancelUpdate($event)"
  @update="update($event)"
  >
  </MessageBox>
</q-dialog>

<q-dialog v-model="isUpdateSuccessDialog">
  <MessageBox
  title="Success"
  message="Contacts updated successfully!"
  okayEvent="UpdateSuccessOkay"
  cancelEvent="UpdateSuccessCancel"
  @UpdateSuccessCancel="UpdateSuccessCancel($event)"
  @UpdateSuccessOkay="UpdateSuccessOkay($event)"
  >
  </MessageBox>
</q-dialog>

  <q-dialog v-model="isUpdateFailureDialog">
    <MessageBox
    title="Error"
    :message="`${message}.`"
    okayEvent="UpdateFailureOkay"
    cancelEvent="UpdateFailureCancel"
    @UpdateFailureCancel="UpdateFailureCancel($event)"
    @UpdateFailureOkay="UpdateFailureOkay($event)"
    >
    </MessageBox>
  </q-dialog>

     </q-page>
   </q-page-container>
 </q-layout>
</template>

<script>
  import MessageBox from "../../components/dialogs/MessageBox.vue"
  import { userController } from '../../store/modules/backendRoutes'
    export default {
      computed: {
        selectedContact(){
          return this.$store.getters['clientStore/selectedContact'];
        },
        isAdmin(){
          return this.$store.getters['clientStore/isAdmin'];
        },
        IdentityModel() {
            return this.$store.getters['authenticationStore/IdentityModel'];
        },
        PhotoDto(){
          return this.$store.getters['clientStore/PhotoDto'];
        }
      },
      components:{
        MessageBox,
      },
      data () {
    return {
          ContactDTO:{
            phoneNumber:"",
            email:"",
            address:"",
            residentialCity:"",
            residentialState:""
          },
          isUpdateDialog: false,
          isUpdateSuccessDialog: false,
          isUpdateFailureDialog: false,
          message: "",
          SelectedFile: null,
          files: null,
          isUploadFileDialog: false,
          isUploadFileSuccessDialog: false,
          isUploadFileFailureDialog: false,
          }
        },
        props: {
            theme_color: {
            type: String,
            default: 'rgb(0, 163, 82)'
            }
        },
        methods: {
          onFileSelected(event){
            var context = this;
            context.files = event.target.files;
            context.SelectedFile = event.target.files[0];
          },
          UploadAction(){
            var context =  this;
            context.isUploadFileDialog = true;
          },
          cancelUploadFile(){
            var context =  this;
            context.isUploadFileDialog = false;
          },
          async okayUploadFile(){
            var context = this;
                const formData = new FormData();
                for (var i in context.files) {
                  formData.append('images[]', context.files[i]);
                }
              
              var url = `${userController}/uploadphoto`;

              var response = await this.$store.dispatch('clientStore/UploadPhoto', {
                request: formData,
                url
                }); 

            const { 
                  data : {
                    data: result,
                    message,
                    success,
                  }
            } = response
            context.isUploadFileDialog = false;
            if(success){
              this.$store.commit('clientStore/UploadFile', result);
              context.isUploadFileSuccessDialog = true;
            }else{
                context.isUploadFileFailureDialog = true;
                context.message = message;
            }
          },
          cancelUploadFileSuccess(){
            var context = this;
            context.isUploadFileSuccessDialog = false;
          },
          okayUploadFileSucess(){
            var context = this;
            context.isUploadFileSuccessDialog = false;
          },
          cancelUploadFileFailure(){
            var context = this;
            context.isUploadFileFailureDialog = false;
          },
          okayUploadFileFailure(){
            var context = this;
            context.isUploadFileFailureDialog = false;
          },
          updateData(){
            var context = this;
            context.isUpdateDialog = true;
          },
          cancel(){
              var context = this;
              context.isUpdateDialog = false;
              if(context.isAdmin == true){
                this.$router.push('/contacts');
                this.$store.commit('clientStore/isAdminUpdate', false) 
              }else{
                this.$router.push('/user-home');
              }
            },
          async update(){
        var context = this;

        if(context.isAdmin == false){
          context.ContactDTO.contributorId = context.IdentityModel.id;
        }

        if (context.ContactDTO.phoneNumber === "") {
          alert("Enter your phone number without +234");
          return;
        }

        if (context.ContactDTO.residentialCity === "") {
          alert("Enter your residential city");
          return;
        }

        if (context.ContactDTO.residentialState === "") {
          alert("Enter your residential state");
          return;
        }

        if(context.PhotoDto.base64String != "" && 
        context.PhotoDto.base64String != undefined){
          context.ContactDTO.base64String = context.PhotoDto.base64String
        }


        var response = await this.$store.dispatch('clientStore/UpdateContactDTO', context.ContactDTO)

         const { 
          data : {
            data: result,
            message,
            success,
                }
          } = response

          context.isUpdateDialog = false;
          context.message = message;
            if(success){
              context.isUpdateSuccessDialog = true;
              this.$store.commit('authenticationStore/AddUserPhoto', result)
            }else{
              context.isUpdateFailureDialog = true;
            }
      },
      cancelUpdate(){
        var context = this;
        context.isUpdateDialog = false;
      },
      UpdateSuccessOkay(){
        var context = this;
        context.isUpdateSuccessDialog = false;
        if(context.isAdmin == true){
          this.$router.push('/contacts');
          this.$store.commit('clientStore/isAdminUpdate', false)  
        }
      },
      UpdateSuccessCancel(){
        var context = this;
        context.isUpdateSuccessDialog = false;
        if(context.isAdmin == true){
          this.$router.push('/contacts');
          this.$store.commit('clientStore/isAdminUpdate', false)
        }
      },
      UpdateFailureOkay(){
        var context = this;
        context.isUpdateFailureDialog = false;
      },
      UpdateFailureCancel(){
        var context = this;
        context.isUpdateFailureDialog = false;
      }
    },
    async created(){
    var context = this;
    if(context.isAdmin == true){
      context.ContactDTO = {...context.selectedContact}
    }else{
      var response = await this.$store.dispatch('clientStore/GetContributor', context.IdentityModel.id)
      const { 
              data : {
                data: contributor,
                success,
                    }
              } = response
        if(success){
          context.ContactDTO = {...contributor}
        }

      
    }
  }
}
</script>

<style>
.personal-data-form {
  position: absolute;
}
</style>
