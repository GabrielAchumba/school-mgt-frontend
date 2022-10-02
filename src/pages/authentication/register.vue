<template>

 <q-layout>
   <q-page-container>
     <q-page class="flex flex-center bg-primary text-accent">
       <q-card
          class="personal-data-form"
          v-bind:style="
          $q.platform.is.mobile ? { width: '90%', height: '95%' } : { width: '90%' , height: '95%' }
          "
        >

   <q-card-section>
    <div class="row no-wrap items-center">
      <div class="col text-h6 ellipsis">
        Personal Data
      </div>
    </div>
  </q-card-section>

   <q-card-section>
      <q-form class="q-gutter-md">
      <q-input outlined v-model="PersonalDataDTO.firstName" label="First Name *" lazy-rules />
      <q-input outlined v-model="PersonalDataDTO.lastName" label="Last Name *" lazy-rules />
      <q-input outlined v-model="PersonalDataDTO.username" label="Username *" lazy-rules />
      <q-input 
       :type="passwordType"
        outlined v-model="PersonalDataDTO.password" label="Password *" lazy-rules>
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

      <div class="row">
        <div class="col-6 text-left">
        </div>
        <div class="col-6 text-right">
          <q-btn
            label="Register"
            type="button"
            size="sm"
            no-caps
            class="bg-accent text-primary"
            @click="register"
          />
        </div>
      </div>
    </q-form>
   </q-card-section>
        
  </q-card>

  <q-dialog v-model="isRegisterDialog">
  <MessageBox
  title="Register"
  message="Do you want to register with empowerment network?"
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
    export default {
        computed: {
        isAdmin(){
          return this.$store.getters['clientStore/isAdmin'];
        }
      },
    components:{
      MessageBox
    },
    data () {
    return {
      passwordType: "password",
      isVisible: false,
      PersonalDataDTO: {
            title:"",
            firstName:"",
            middleName:"",
            lastName:"",
            gender:"",
            userName:"",
            password:"",
            userType: "Member",
	          designation: "None",
          },
          isRegisterDialog: false,
          isRegisterSuccessDialog: false,
          isRegisterFailureDialog: false,
          message: "",
          }
        },
        props: {
            theme_color: {
            type: String,
            default: '#10731f', 
            }
        },
        methods: {
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
            cancel(){
              var context = this;
              context.isRegisterDialog = false;
              if(context.isAdmin == true){
                this.$router.push('/registeredContributors');
                this.$store.commit('clientStore/isAdminUpdate', false) 
              }else{
                this.$router.push('/user-home');
              }
            },
            async savePersonalData(){
              var context = this;
               var response = await this.$store.dispatch('clientStore/CreatePersonalDataDTO', 
               context.PersonalDataDTO)

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
                this.$store.commit('clientStore/CreatePersonalDataDTO', result)
                this.$store.commit('clientStore/commitTab', "login")
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
              if(context.isAdmin == true){
                this.$router.push('/registeredContributors');
                this.$store.commit('clientStore/isAdminUpdate', false) 
              }else{
                this.$router.push('/user-home');
              }
            },
            RegistrationSuccessCancel(){
              var context = this;
              context.isRegisterSuccessDialog = false;
              if(context.isAdmin == true){
                this.$router.push('/registeredContributors');
                this.$store.commit('clientStore/isAdminUpdate', false) 
              }else{
                this.$router.push('/user-home');
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