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

   <q-card-section>
    <div class="row no-wrap items-center">
      <div class="col text-h6 ellipsis">
        Personal Data
      </div>
    </div>
  </q-card-section>

   <q-card-section>
      <q-form class="q-gutter-md">
     <!--  <q-input filled v-model="PersonalDataDTO.title" label="Title" lazy-rules /> -->
      <q-input filled v-model="PersonalDataDTO.firstName" label="First Name *" lazy-rules />
      <!-- <q-input filled v-model="PersonalDataDTO.middleName" label="Middle Name" lazy-rules /> -->
      <q-input filled v-model="PersonalDataDTO.lastName" label="Last Name *" lazy-rules />
      <q-input filled v-model="PersonalDataDTO.username" label="Username *" lazy-rules />
      <q-input 
       :type="passwordType"
        filled v-model="PersonalDataDTO.password" label="Password *" lazy-rules>
        	<template 
                v-if="isVisible"
                v-slot:append>
                <q-icon name="visibility" class="text-accent bg-primary"
                @click="togglePasswordVisibility" />
              </template>
              	<template 
                v-else
                v-slot:append>
                <q-icon name="visibility_off" class="text-accent bg-primary"
                 @click="togglePasswordVisibility" />
              </template>
      </q-input>

     <!-- <div class="text-left">
        <q-badge color="primary">
            Date of Birth: {{ date }}
        </q-badge>
        

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
    </div>   -->

      <div class="text-right">
        <q-btn
          label="Register"
          type="button"
          class="bg-accent text-primary"
          @click="register"
        />
      </div>
    </q-form>
   </q-card-section>
        
  </q-card>

  <q-dialog v-model="isRegisterDialog">
  <MessageBox
  title="Register"
  message="Do you want to register a new user?"
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
  import { userController } from "../../store/modules/backendRoutes";
  import { post } from "../../store/modules/auth-services";
    export default {
        computed: {
        date(){
          return this.$store.getters['clientStore/date'];
        },
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
          proxyDate: '2019/03/01',
          isRegisterDialog: false,
          isRegisterSuccessDialog: false,
          isRegisterFailureDialog: false,
          message: "",
          }
        },
        props: {
            categoryUrl: {
                type: String,
                default: "",
            },
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
            updateProxy() {
            var context = this;
            context.proxyDate = context.date

            },
            save() {
            var context = this;
            this.$store.commit('clientStore/CommitDataOfBirth', context.proxyDate)
            },
            register(){
              var context = this;
              context.isRegisterDialog = true;
            },
            async savePersonalData(){
              var context = this;
              var todayDate = new Date();
              const payload = {
                url: `${userController}/register`,
                req: {
                  ...context.PersonalDataDTO,
                  createdYear: todayDate.getFullYear(),
                  createdMonth: todayDate.getMonth() + 1,
                  createdDay: todayDate.getDate()
                }
              }

              //console.log("payload: ", payload)
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
                this.$store.commit('clientStore/CreatePersonalDataDTO', result)
                this.$router.push(`/${context.categoryUrl}`);
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
              }
            },
            RegistrationSuccessCancel(){
              var context = this;
              context.isRegisterSuccessDialog = false;
              if(context.isAdmin == true){
                this.$router.push('/registeredContributors');
                this.$store.commit('clientStore/isAdminUpdate', false) 
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