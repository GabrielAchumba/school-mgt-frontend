<template>
<div>

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
        <q-input class="col-8 q-pa-sm" outlined v-model="forgotPasswordPayload.phoneNumber" label="Phone Number" lazy-rules />
      </div>
      <q-input class="col-12 q-pa-sm" outlined v-model="forgotPasswordPayload.userName" label="Username" lazy-rules />

      <div class="row">
              <div class="col-12 text-center q-pa-sm">
                <q-btn
                label="Authenticate"
                style="width:100%"
                type="button"
                size="md"
                no-caps
                class="bg-accent text-primary"
                @click="userIsExist"
                />
              </div>
              <div class="col-12 text-center q-pa-sm">
                <q-btn
                label="Cancel"
                style="width:100%"
                type="button"
                size="md"
                no-caps
                class="bg-accent text-primary"
                @click="canceForgotPasswordAction"
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

<q-dialog v-model="isForgotPasswordDialog">
  <MessageBox
  title="Forgot Password"
  message="You are about to generate token for reseting password"
  okayEvent="forgotPassword"
  cancelEvent="cancelForgotPassword"
  @cancelForgotPassword="cancelForgotPassword($event)"
  @forgotPassword="forgotPassword($event)"
  >
  </MessageBox>
</q-dialog>

<q-dialog v-model="isForgotPasswordSuccessDialog">
  <MessageBox
  title="Token Sent Success"
  :message="forgotPasswordResponse.message"
  okayEvent="forgotPasswordSuccessOkay"
  cancelEvent="forgotPasswordSuccessCancel"
  @forgotPasswordSuccessCancel="forgotPasswordSuccessCancel($event)"
  @forgotPasswordSuccessOkay="forgotPasswordSuccessOkay($event)"
  >
  </MessageBox>
</q-dialog>

<q-dialog v-model="isForgotPasswordFailureDialog">
  <MessageBox
  title="Token Generation Error"
  :message="`${message}. Please check your data entered.`"
  okayEvent="forgotPasswordFailureOkay"
  cancelEvent="forgotPasswordFailureCancel"
  @forgotPasswordFailureCancel="forgotPasswordFailureCancel($event)"
  @forgotPasswordFailureOkay="forgotPasswordFailureOkay($event)"
  >
  </MessageBox>
</q-dialog>

   </div>
</template>

<script>
  import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
  import { getAuth } from 'firebase/auth'
  import { initializeApp } from "firebase/app";
  import MessageBox from "../../components/dialogs/MessageBox.vue"
  import { countryCodes } from "./view_models/country_codes";
  import { post } from "../../store/modules/auth-services";
  import { userController } from "../../store/modules/backendRoutes";

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
        visible(){
          return this.$store.getters['authenticationStore/visible'];
        },
        showSimulatedReturnData(){
          return this.$store.getters['authenticationStore/showSimulatedReturnData'];
        }
      },
      components:{
        MessageBox
      },
      props:{
        forgotPasswordEvent: {
            type: String,
            default: ''
        },
        forgotPasswordEvent2:{
          type: String,
            default: ''
        }
      },
    data () {
          return {
            oTP: "",
            countries: [],
            disableSendOTP: false,
            isAuthenticate: true,
            isOTP: false,
            isVisible: false,
            seletedCountry:"",
            isForgotPasswordDialog: false,
            isForgotPasswordSuccessDialog: false,
            isForgotPasswordFailureDialog: false,
            message: '',
            forgotPasswordPayload: {
                phoneNumbr: "",
                userName: "",
                countryCode: "",
            },
            forgotPasswordResponse: {
                message: ""
            }
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
          forgotPasswordAction(){
            var context = this;
            context.isForgotPasswordDialog = true;
          },
          async forgotPassword(){
            var context = this;
            const payload = {
              url: `${userController}/forgotpassword`,
              req: context.forgotPasswordPayload
            }
            var response = await post(payload);
            
            const { 
              data : {
                data: result,
                message,
                success,
              }
              } = response
            
            if(result != null){
              console.log("result: ", result)
              context.forgotPasswordResponse = result
            }
            
            context.message = message;
            context.isForgotPasswordDialog = false;
            if(success){
              context.isForgotPasswordSuccessDialog = true;
            }else{
              context.isForgotPasswordFailureDialog = true;
            }
          },
          cancelForgotPassword(){
            var context = this;
            context.isForgotPasswordDialog = false;
            this.$emit(context.forgotPasswordEvent2);
          },
          forgotPasswordFailureOkay(){
            var context = this;
            context.isForgotPasswordFailureDialog = false;
            this.$emit(context.forgotPasswordEvent2);
          },
          forgotPasswordFailureCancel(){
            var context = this;
            context.isForgotPasswordFailureDialog = false;
            this.$emit(context.forgotPasswordEvent2);
          },
          forgotPasswordSuccessOkay(){
            
            var context = this;
            //context.isForgotPasswordSuccessDialog = false;
            this.$emit(context.forgotPasswordEvent); 
          },
          forgotPasswordSuccessCancel(){
            var context = this;
            context.isForgotPasswordSuccessDialog = false;
            this.$emit(context.forgotPasswordEvent2);
          },
          canceForgotPasswordAction(){
            var context = this;
            this.$emit(context.forgotPasswordEvent2);
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
            context.forgotPasswordPayload.countryCode = context.seletedCountry.code
            context.forgotPasswordPayload.country = context.seletedCountry.label
           
          },
          async userIsExist(){
            var context = this;
            
            var url = `${userController}/user-is-exist`;
            const payload = {
                url,
                req: {
                    userName: context.forgotPasswordPayload.userName,
                    phoneNumber: context.forgotPasswordPayload.phoneNumber,
                    countryCode: context.forgotPasswordPayload.countryCode,
                }
            }
            console.log("payload: ", payload)
            var response = await post(payload)
            const { 
                data : {
                    data: userExists,
                    message,
                    success,
                }
            } = response
            if(!success){
                alert("Failed")
            }else{
              console.log("context.userExists: ", userExists);
              if(userExists){
                this.$store.commit("authenticationStore/setSelectedUserName", context.forgotPasswordPayload.userName)
                context.SendVerificationCode();
              }else{
                alert("user does not exist")
              }
            }
            
        },
        SendVerificationCode(){
            var context = this;
            if(context.forgotPasswordPayload.phoneNumber.length < 10){
                  alert("Phone number can not be less than 10 digits")
                  return;
              }
              let phone = context.forgotPasswordPayload.phoneNumber;
              if(context.forgotPasswordPayload.phoneNumber > 10){
                  const diff = context.forgotPasswordPayload.phoneNumber.length - 10;
                  phone = context.forgotPasswordPayload.phoneNumber.slice(diff);
              }
              
              context.sendOtp(phone, context.forgotPasswordPayload.countryCode);
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
              context.disableSendOTP = false;
              context.forgotPasswordSuccessOkay()
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
.login-form {
  position: absolute;
}
</style>