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

      <q-form v-if="isAuthenticate"
      class="q-gutter-md">
        <div class="row">
          <div class="col-12 q-pa-sm">
          <span>
            <p class="q-ma-none">Country</p>
            <q-select
                class="q-ma-none"
                color="accent" 
                outlined label-color="accent"
                option-disable="inactive"
                v-model="seletedCountry"
                :options="countries"
                option-value="name"
                :option-label="'type'"
                name="type"
                emit-value
                map-options
                @input="onQSelectItemValueChanged"
                >
              </q-select>
          </span>
        </div>
      </div>
      <div class="row">
        <q-input class="col-4 q-pa-sm" outlined disable v-model="seletedCountry.code" label="code" lazy-rules />
        <q-input class="col-8 q-pa-sm" outlined v-model="PersonalDataDTO.phoneNumber" label="Phone Number" lazy-rules />
      </div>

      <div class="row">
              <div class="col-12 text-center q-pa-sm">
                <q-btn
                label="Authenticate"
                style="width:100%"
                type="button"
                size="md"
                no-caps
                class="bg-accent text-primary"
                @click="SendVerificationCode"
                />
              </div>
              <div class="col-12 text-center q-pa-sm">
                <q-btn
                label="Refresh"
                style="width:100%"
                type="button"
                size="md"
                no-caps
                class="bg-accent text-primary"
                @click="resetRecaptcha"
                />
              </div>
      </div>

      <div class="row">
        <div id="recaptcha-container"></div><br><br>
      </div>
    </q-form>


      <q-form 
      v-if="isOTP"
      class="q-gutter-md">
      <q-input 
       type="text"
        outlined v-model="oTP" label="OTP" lazy-rules>
        <template 
            v-slot:before>
            <q-icon 
            name="refresh" 
            class="bg-primary text-accent"
            @click="resetRecaptcha" />
          </template>
        	<template 
            v-slot:append>
            <q-icon 
            :disable="disableSendOTP"
            name="send" 
            class="bg-primary text-accent"
            @click="VerifyOTP" />
          </template>
      </q-input>
    </q-form>


      <q-form 
      v-if="isPersonalData"
      class="q-gutter-md">
      <q-input outlined v-model="PersonalDataDTO.firstName" label="First Name" lazy-rules />
      <q-input outlined v-model="PersonalDataDTO.lastName" label="Last Name" lazy-rules />
      <q-input outlined v-model="PersonalDataDTO.userName" label="Username" lazy-rules />
      <q-input 
       :type="passwordType"
        outlined v-model="PersonalDataDTO.password" label="Password" lazy-rules>
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
              <div class="col-12 text-center q-pa-sm">
                <q-btn
                label="Register"
                style="width:100%"
                type="button"
                size="md"
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
  import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
  import { getAuth } from 'firebase/auth'
  import { initializeApp } from "firebase/app";
  import MessageBox from "../../components/dialogs/MessageBox.vue"
  import { countryCodes } from "./view_models/country_codes";
  import { userController } from "../../store/modules/backendRoutes";
  import { post } from "../../store/modules/auth-services";
  

  const firebaseConfig = {
    apiKey: "AIzaSyB9VzN87QcRpEbSegBYjZBTqigdJLkiBAc",
    authDomain: "lemongatetech.firebaseapp.com",
    databaseURL: "https://lemongatetech.firebaseio.com",
    projectId: "lemongatetech",
    storageBucket: "lemongatetech.appspot.com",
    messagingSenderId: "391787476785",
    appId: "1:391787476785:web:48fc551307c092ff8ae210"
  };
  const app = initializeApp(firebaseConfig)
  const auth = getAuth()

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
      oTP: "",
      isAuthenticate: true,
      isOTP: false,
      isPersonalData: false,
      seletedCountry:"",
      countries:[],
      passwordType: "password",
      isVisible: false,
      disableSendOTP: false,
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
            phoneNumber: "",
            countryCode: "",
            country: "",
          },
          proxyDate: '2019/03/01',
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
                //this.$router.push('/user-home');
                this.$emit("showLoginPage")
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
            },
          getCountries(){
            var context = this;
            context.countries = countryCodes.map((row) => {
              return {
                ...row
              }
            })
          },
          onQSelectItemValueChanged(){
            var context = this;
            context.PersonalDataDTO.countryCode = context.seletedCountry.code
            context.PersonalDataDTO.country = context.seletedCountry.label
           
          },
          SendVerificationCode(){
            var context = this;
            if(context.PersonalDataDTO.phoneNumber.length < 10){
                  alert("Phone number can not be less than 10 digits")
                  return;
              }
              let phone = context.PersonalDataDTO.phoneNumber;
              if(context.PersonalDataDTO.phoneNumber > 10){
                  const diff = context.PersonalDataDTO.phoneNumber.length - 10;
                  phone = context.PersonalDataDTO.phoneNumber.slice(diff);
              }
              
              context.sendOtp(phone, context.PersonalDataDTO.countryCode);
          },
          sendOtp(phNo, countryCode){
            var context = this;
            let phoneNumber = countryCode + phNo;
            let appVerifier = context.appVerifier;
            console.log("phoneNumber: ", phoneNumber)
            console.log("appVerifier: ", appVerifier)
            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
              .then(function (confirmationResult) {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                //alert('SMS sent')
                //context.$store.commit("authenticationStore/setShowSpinner", false);
                context.isAuthenticate = false;
                context.isOTP = true
                context.isPersonalData = false;
                window.confirmationResult = confirmationResult;
                
                //
              }).catch(function (error) {
                console.log("error: ", error);
              // Error; SMS not sent
              // ...
              //context.$store.commit("authenticationStore/setShowSpinner", false);
              alert('Error ! SMS not sent')
            });
          //}
        },
        async VerifyOTP(){
          var context = this;
          context.disableSendOTP = true;
          await context.VerifyCode();
        },
        async VerifyCode(){
          /* if(this.phNo.length != 10 || this.otp.length != 6){
            alert('Invalid Phone Number/OTP Format !');
          }else{ */
            //
            var context = this
            let code = context.oTP;
            console.log("verification code: ", code);
            //
            window.confirmationResult.confirm(code).then(function (result) {
              // User signed in successfully.
              var user = result.user;
              console.log("user: ", user);
              context.isAuthenticate = false;
              context.isOTP = false
              context.isPersonalData = true;
              context.disableSendOTP = false;
            }).catch(function (error) {
                alert("User couldn't sign in (bad verification code?)")
            });
          //}
        },
          initReCaptcha(){
            setTimeout(()=>{
              let context = this
              window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
                size: 'normal',
                callback: function(response) {
                    console.log("response: ", response);
                },
              }, auth);
              //
              context.appVerifier =  window.recaptchaVerifier
              console.log("appVerifier: ", context.appVerifier)
            },3000)
            //window.recaptchaVerifier.clear()
          },
          resetRecaptcha(){
            var context = this;
            window.recaptchaVerifier.clear()
            context.isAuthenticate = true;
            context.isOTP = false
            context.isPersonalData = false;
            context.disableSendOTP = false;
            context.appVerifier =  window.recaptchaVerifier;
          }
        },
        async created(){
          var context = this;
          context.getCountries();
          context.initReCaptcha();
        }
    }
</script>

<style>
.personal-data-form {
  position: absolute;
}
</style>