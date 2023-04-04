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

   <q-card-section class="bg-accent text-primary">
    <div class="row no-wrap items-center">
      <div class="col text-h6 ellipsis">
        Administratot Data
      </div>
    </div>
  </q-card-section>

   <q-card-section>
      <q-form class="q-gutter-md">
          
        <!-- <div class="row text-center flex flex-center q-pb-lg">
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
        </div> -->
      <q-input outlined v-model="AdminDTO.firstName" label="First Name *" lazy-rules />
      <q-input outlined v-model="AdminDTO.lastName" label="Last Name *" lazy-rules />
      <q-input outlined v-model="AdminDTO.username" label="Username *" lazy-rules />
      <q-input 
       :type="passwordType"
        outlined v-model="AdminDTO.password" label="Password *" lazy-rules>
        	<template 
                v-if="isVisible"
                v-slot:append>
                <q-icon name="visibility" 
                class="bg-primary text-accent"
                @click="togglePasswordVisibility" />
              </template>
              	<template 
                v-else
                v-slot:append>
                <q-icon name="visibility_off" 
                class="bg-primary text-accent"
                 @click="togglePasswordVisibility" />
              </template>
      </q-input>

      <q-select 
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
          label="Register"
          type="button"
          class="text-primary bg-accent"
          @click="register"
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

  <q-dialog v-model="isRegisterDialog">
  <MessageBox
  title="Register"
  message="Do you want to register an administrator?"
  okayEvent="savePersonalData"
  cancelEvent="cancelRegistration"
  @cancelRegistration="cancelRegistration($event)"
  @savePersonalData="savePersonalData($event)"
  >
  </MessageBox>
</q-dialog>

<q-dialog v-model="isRegisterSuccessDialog">
  <MessageBox
  title="Success"
  message="Your registration was successful!"
  okayEvent="RegistrationSuccessOkay"
  cancelEvent="RegistrationSuccessCancel"
  @RegistrationSuccessCancel="RegistrationSuccessCancel($event)"
  @RegistrationSuccessOkay="RegistrationSuccessOkay($event)"
  >
  </MessageBox>
</q-dialog>

<q-dialog v-model="isRegisterFailureDialog">
  <MessageBox
  title="Error"
  :message="`${message}.`"
  okayEvent="RegistrationFailureOkay"
  cancelEvent="RegistrationFailureCancel"
  @RegistrationFailureCancel="RegistrationFailureCancel($event)"
  @RegistrationFailureOkay="RegistrationFailureOkay($event)"
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
    import { post } from "../../store/modules/services";
    
    export default {
    computed:{
        isSuperAdmin(){
          return this.$store.getters['administratorStore/isSuperAdmin'];
        },
        PhotoDto(){
          return this.$store.getters['administratorStore/PhotoDto'];
        }
    },
    components:{
      MessageBox
    },
    data () {
    return {
      passwordType: "password",
      isVisible: false,
      typesOfAdmin: [
            "Accounting",
            "Registration",
            "CEO",
        ],
        typeOfAdmin: "Registration",
      AdminDTO: {
            firstName:"",
            lastName:"",
            userName:"",
            password:"",
            userType: "Admin",
	        designation: "None",
          },
          isRegisterDialog: false,
          isRegisterSuccessDialog: false,
          isRegisterFailureDialog: false,
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
            default: '#10731f', 
            }
        },
        methods: {
        onItemValueChanged() {
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
          togglePasswordVisibility(){
            var context = this;
            if(context.isVisible) {
              context.isVisible=false
              context.passwordType = "password";
            }else {
              context.isVisible= true;
              context.passwordType = "text";
            }
          },
            register(){
              var context = this;
              context.isRegisterDialog = true;
            },
            async savePersonalData(){
              var context = this;
                context.AdminDTO.designation = context.typeOfAdmin

                if(context.PhotoDto.base64String != "" && 
                context.PhotoDto.base64String != undefined){
                  context.AdminDTO.base64String = context.PhotoDto.base64String
                }
                const payload = {
                  url: `${userController}/registeradministrator`,
                  req: context.AdminDTO
                }
               var response = await post(payload)

              const { 
              data : {
                data: result,
                message,
                success,
                    }
              } = response
            
            context.isRegisterDialog = false;
            context.message = message;
              if(success){
                this.$store.commit('administratorStore/CreateAdministrator', result)
                this.$store.commit('authenticationStore/AddUserPhoto', result)
                context.isRegisterSuccessDialog = true;
              }else{
                context.isRegisterFailureDialog = true;
              }
            },
            cancelRegistration(){
              var context = this;
              context.isRegisterDialog = false;
            },
            RegistrationSuccessOkay(){
              var context = this;
              context.isRegisterSuccessDialog = false;
              if(context.isSuperAdmin == true){
                this.$router.push('/administrators');
                this.$store.commit('administratorStore/UpdateIsSuperAdmin', false) 
              }
            },
            RegistrationSuccessCancel(){
              var context = this;
              context.isRegisterSuccessDialog = false;
              this.$router.push('/administrators');
              if(context.isSuperAdmin == true){
                this.$router.push('/administrators');
                this.$store.commit('administratorStore/UpdateIsSuperAdmin', false) 
              }
            },
            RegistrationFailureOkay(){
              var context = this;
              context.isRegisterFailureDialog = false;
            },
            RegistrationFailureCancel(){
              var context = this;
              context.isRegisterFailureDialog = false;
            }
        }
    }
</script>

<style>
.personal-data-form {
  position: absolute;
}
</style>