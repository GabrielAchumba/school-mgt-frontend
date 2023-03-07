<template>
  <q-layout>
   <q-page-container>
     <q-page class="flex flex-center bg-primary">
       <q-card
          class="personal-data-form"
          v-bind:style="
          $q.platform.is.mobile ? { width: '90%', height: '95%' } : { width: '90%' , height: '95%' }
          "
        >

   <q-card-section class="text-primary bg-accent">
    <div class="row no-wrap items-center">
      <div class="col text-h6 ellipsis">
        Administrator Details
      </div>
    </div>
  </q-card-section>

   <q-card-section>
      <q-form class="q-gutter-md">

        <div class="row text-center flex flex-center q-pb-lg">
          <div 
          v-if="!isSuperAdmin"
          class="col-md-6 col-lg-16 col-sx-6 col-sm-6 q-gutter-lg q-px-xl q-pb-none q-ma-none">
            <input type="file" @change="onFileSelected" class="bg-accent text-primary"/>
          </div>
          <div 
          v-if="!isSuperAdmin"
          class="col-md-6 col-lg-6 col-sx-6 col-sm-6 q-gutter-lg q-px-xl q-pb-none q-ma-none">
            <q-btn class="text-capitalize bg-accent text-primary" 
            exact
            size="sm" style="width:75px" dense label="Upload"
            type="button"
            @click="UploadAction" />
          </div>
        </div>
      <q-input outlined v-model="AdministratorDTO.firstName" label="First Name *" lazy-rules />
      <q-input outlined v-model="AdministratorDTO.lastName" label="Last Name *" lazy-rules />
      <q-input outlined v-model="AdministratorDTO.userName" label="Username *" lazy-rules />

        <q-select 
        v-if="isSuperAdmin"
          color="accent" 
          outlined label-color="accent"
          v-model="typeOfAdmin"
          :options ="typesOfAdmin"
          @input="onItemValueChanged"
          label="Administrator"
          >
      </q-select>

      <div class="col-12">
        <q-btn
          style="width:95%"
          label="Update"
          type="button"
          size="sm"
          no-caps
          class="text-primary bg-accent"
          @click="updateData"
        />
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
  message="Do you want to update administrator details?"
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
  message="Administrator details updated successfully!"
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
        SelectedAdmin(){
          return this.$store.getters['administratorStore/SelectedAdmin'];
        },
        isSuperAdmin(){
          return this.$store.getters['administratorStore/isSuperAdmin'];
        },
        IdentityModel() {
            return this.$store.getters['authenticationStore/IdentityModel'];
        },
        PhotoDto(){
          return this.$store.getters['administratorStore/PhotoDto'];
        }
      },
    components:{
      MessageBox,
    },
    data () {
    return {
        AdministratorDTO: {
          firstName: "",
          lastName: "",
          username: "",
        },
        isUpdateDialog: false,
        isUpdateSuccessDialog: false,
        isUpdateFailureDialog: false,
        typesOfAdmin: [
            "Accounting",
            "Registration",
            "CEO",
        ],
        typeOfAdmin: "Registration",
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
      onItemValueChanged(){

      },
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

              var response = await this.$store.dispatch('administratorStore/UploadPhoto', {
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
              this.$store.commit('administratorStore/UploadFile', result);
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
      async update(){
        var context = this;
         if (context.AdministratorDTO.firstName === "") {
          alert("Enter your first name");
          return;
        }

         if (context.AdministratorDTO.lastName === "") {
          alert("Enter your last name");
          return;
        }

         if (context.AdministratorDTO.userName === "") {
          alert("Enter your username");
          return;
        }

        if(context.PhotoDto.base64String != "" && 
        context.PhotoDto.base64String != undefined){
          context.AdministratorDTO.base64String = context.PhotoDto.base64String
        }

        if(context.isSuperAdmin == false){
          context.AdministratorDTO.contributorId = context.IdentityModel.id;
        }
        var response = await this.$store.dispatch('administratorStore/UpdateAdministrator', context.AdministratorDTO)

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
        if(context.isSuperAdmin == true){
          this.$router.push('/administrators');
          this.$store.commit('administratorStore/UpdateIsSuperAdmin', false) 
        }
      },
      UpdateSuccessCancel(){
        var context = this;
        context.isUpdateSuccessDialog = false;
        if(context.isSuperAdmin == true){
          this.$router.push('/administrators');
          this.$store.commit('administratorStore/UpdateIsSuperAdmin', false) 
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
        console.log("context.isSuperAdmin: ", context.isSuperAdmin )
        if(context.isSuperAdmin == true){
          context.AdministratorDTO = {...context.SelectedAdmin}
        }else{
        var response = await this.$store.dispatch('administratorStore/GetAdministrator', context.IdentityModel.id)
          const { 
              data : {
                data: contributor,
                message,
                success,
                    }
              } = response
          console.log("contributor: ", contributor)
          context.AdministratorDTO = {...contributor}
        }
      }
    }
</script>

<style>
.personal-data-form {
  position: absolute;
}
</style>