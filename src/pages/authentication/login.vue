<template>
  <div class="q-pa-md">
    <div 
     v-if="!showSpinner"
     class="q-pa-md">
          <Form
          v-if="isForgotPassword"
          :formData="forgotPasswordForm"
          @SendOTP="SendOTP($event)"
          @resetRecaptcha="resetRecaptcha($event)"
          @CancelForgotPassword="CancelForgotPassword($event)"/>
          <div 
          v-show="isForgotPassword"
          id="recaptcha-container"></div><br>

          <Form
          v-if="isVerifyOTP"
          :formData="verifyOTPForm"
          @VerifyOTP="VerifyOTP($event)"
          @CancelVerifyOTP="CancelVerifyOTP($event)"/>

          <Form
          v-if="isResetPassword"
          :formData="resetPasswordForm"
          @ResetPassword="ResetPassword($event)"
          @CancelResetPassword="CancelResetPassword($event)"
          @qInputTemplateAction="ResetPasswordQInputTemplateAction($event)"/>

          <Form
          v-if="isLoginForm"
          :formData="loginForm"
          @SignIn="SignIn($event)"
          @ForgotPassword="ForgotPassword($event)"
          @SignUp="SignUp($event)"
          @qInputTemplateAction="LoginQInputTemplateAction($event)"
          @onToggle="onToggleLoginForm($event)"/>

           <Form
          v-if="isLoginFormWithToken"
          :formData="loginFormWithToken"
          @SignInWithToken="SignInWithToken($event)"
          @onToggle="onToggleLoginFormWithToken($event)"/>

        <q-dialog 
            v-for="dialog in dialogs" 
            :key="dialog.title"
            v-model="dialog.isVisible">
            <MessageBox
            :title="dialog.title"
            :message="dialog.message"
            :okayEvent="dialog.okayEvent"
            :cancelEvent="dialog.cancelEvent"
            @cancelDialog="cancelDialog($event)"
            @okDialog="okDialog($event)"
            >
            </MessageBox>
        </q-dialog>
    </div>


     <div 
      v-show="showSpinner"
      class="q-gutter-md row">
            <div class="col-12 q-pa-sm absolute-center flex flex-center">
                <q-spinner
                    color="accent"
                    size="3em"
                    :thickness="10"
                />
            </div>
        </div>
  </div>
</template>

<script>
  import MessageBox from "../../components/dialogs/MessageBox.vue";
  import Form from "../../components/Forms/Form.vue";
  import { post, get } from "../../store/modules/services";
  import { loginForm, forgotPasswordForm, verifyOTPForm, resetPasswordForm, dialogs,
  loginFormWithToken } from "./view_models/login-view-model";
  import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { loadSchools } from "../administrators/school/utils";
import { BIconFileEasel } from 'bootstrap-vue';


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
        showSpinner(){
            return this.$store.getters["authenticationStore/showSpinner"];
        }
      },
      components:{
        MessageBox,
        Form,
      },
      data () {
          return {
            disableSendOTPButton: false,
            isForgotPassword: false,
            isVerifyOTP: false,
            isResetPassword: false,
            isLoginForm: true,
            isLoginFormWithToken: false,
            loginForm: loginForm,
            forgotPasswordForm: forgotPasswordForm,
            verifyOTPForm: verifyOTPForm,
            resetPasswordForm: resetPasswordForm,
            loginFormWithToken: loginFormWithToken,
            dialogs: dialogs,
            token: "",
            user: {},
            test: 1,
            }
        },
        methods: {
          onToggleLoginForm(payload){
            var context = this;
            context.isForgotPassword = false;
            context.isResetPassword = false;
            context.isVerifyOTP = false;

            if(payload === "Disagreed"){
              context.isLoginForm = true;
              context.isLoginFormWithToken = false;
            }else{
              context.isLoginForm = false;
              context.isLoginFormWithToken = true;
            }
          },
          onToggleLoginFormWithToken(payload){
            var context = this;
            context.isForgotPassword = false;
            context.isResetPassword = false;
            context.isVerifyOTP = false;

            if(payload === "Disagreed"){
              context.isLoginForm = false;
              context.isLoginFormWithToken = true;
            }else{
              context.isLoginForm = true;
              context.isLoginFormWithToken = false;
            } 
          },
          SignUp(){
            this.$router.push("/register");
          },
          LoginQInputTemplateAction(payload){
            var context = this;
            const sn = payload.sn
            if(context.loginForm.qInputs[sn].Template.iconName === "visibility_off"){
              context.loginForm.qInputs[sn].Template.iconName = "visibility";
              context.loginForm.qInputs[sn].type = "text";
            }else{
              context.loginForm.qInputs[sn].Template.iconName = "visibility_off";
              context.loginForm.qInputs[sn].type = "password";
            }
          },
          ResetPasswordQInputTemplateAction(payload){
            console.log(payload)
            var context = this;
            const sn = payload.sn
            if(context.resetPasswordForm.qInputs[sn].Template.iconName === "visibility_off"){
              context.resetPasswordForm.qInputs[sn].Template.iconName = "visibility";
              context.resetPasswordForm.qInputs[sn].type = "text";
            }else{
              context.resetPasswordForm.qInputs[sn].Template.iconName = "visibility_off";
              context.resetPasswordForm.qInputs[sn].type = "password";
            }
          },
          CancelForgotPassword(){
            var context = this;
            context.isLoginForm = true;
            context.isForgotPassword = false;
            context.isResetPassword = false;
            context.isVerifyOTP = false;
            context.isLoginFormWithToken = false;
          },
          CancelVerifyOTP(){
            var context = this;
            context.isLoginForm = false;
            context.isForgotPassword = true;
            context.isResetPassword = false;
            context.isVerifyOTP = false;
            context.isLoginFormWithToken = false;
          },
          CancelResetPassword(){
            var context = this;
            context.isLoginForm = false;
            context.isForgotPassword = false;
            context.isResetPassword = false;
            context.isVerifyOTP = true;
            context.isLoginFormWithToken = false;
          },
          SendOTP(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Send OTP"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        SignIn(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Sign In"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        SignInWithToken(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Sign In Student"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        ForgotPassword(){
            var context = this;
            context.isForgotPassword = true;
            context.isResetPassword = false;
            context.isLoginForm = false;
            context.isVerifyOTP = false;
            context.isLoginFormWithToken = false;
        },
        ResetPassword(){

          var context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Reset Password"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        async ChangePassword(){
          var context = this;
            
            var url = `user/resetpassword`;
            const payload = {
                url,
                req: {
                    userName: context.forgotPasswordForm.qInputs[0].name,
                    password: context.resetPasswordForm.qInputs[0].name,
                    passwordConfirm: context.resetPasswordForm.qInputs[1].name,
                }
            }

            this.$store.commit("authenticationStore/setShowSpinner", true);
            var response = await post(payload)
            this.$store.commit("authenticationStore/setShowSpinner", false);

            const { 
                data : {
                    success,
                }
            } = response

            if(success){
              context.dialogFailureOrScuess("Reset Password Success", true);
            }else{
              context.dialogFailureOrScuess("Reset Password Failure", true)
            }
        },
        dialogFailureOrScuess(dialogTitle, isVisible){
          const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == dialogTitle){
                    context.dialogs[i].isVisible = isVisible;
                    break;
                }
            }
        },
        cancelDialog(payload){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async login(){
            var context = this;

            this.$store.commit("authenticationStore/setShowSpinner", true);
            var response = await post({
             url: "user/login",
             req: {
               username: context.loginForm.qInputs[0].name,
               password: context.loginForm.qInputs[1].name
             },
            });
            context.test = 100;
            this.$store.commit("authenticationStore/setShowSpinner", false);

            const { 
              data : {
                data: result,
                message,
                success,
              }
              } = response

            
            context.dialogFailureOrScuess("Sign In", false);
            if(success){
              context.token = result.token;
              context.user = result.user;
              console.log("context.user: ", context.user);
              this.$store.commit('authenticationStore/Login',{
                token: context.token,
                user: context.user,
              })
              context.dialogFailureOrScuess("Sign In Success", true);
            }else{
              context.dialogFailureOrScuess( "Sign In Failure", true);
            }
        },
        async loginWithToken(){
            var context = this;

            const schoolId = context.loginFormWithToken.qSelects[0].value;
            const token = context.loginFormWithToken.qInputs[0].name;
            this.$store.commit("authenticationStore/setShowSpinner", true);
            var response = await get({
             url: `student/loginstudent/${token}/${schoolId}`,
            });
            this.$store.commit("authenticationStore/setShowSpinner", false);

            const { 
              data : {
                data: result,
                message,
                success,
              }
              } = response

            
            context.dialogFailureOrScuess("Sign In Student", false);
            if(success){
              context.token = result.token;
              context.user = result.user;
              console.log("context.user: ", context.user);
              this.$store.commit('studentStore/SetSelectedStudent', context.user)
              this.$store.commit('authenticationStore/Login', {
                token: context.token,
                user: context.user,
              })
              context.dialogFailureOrScuess("Sign In Student Success", true);
            }else{
              context.dialogFailureOrScuess( "Sign In Student Failure", true);
            }
        },
        async userIsExist(){
           console.log("userIsExist called")
            var context = this;
            context.forgotPasswordForm.qBtns[0].disabled = true;
            
            var url = `user/user-is-exist2`;
            const payload = {
                url,
                req: {
                    userName: context.forgotPasswordForm.qInputs[0].name,
                    phoneNumber: context.forgotPasswordForm.qInputs[1].name,
                    countryCode: context.forgotPasswordForm.qSelects[0].value.code,
                }
            }

            console.log("payload: ", payload)
            //this.$store.commit("authenticationStore/setShowSpinner", true);
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
            }

            console.log("context.userExists: ", userExists);
            if(userExists){
              context.SendVerificationCode();
            }else{
              alert("user does not exist")
            }

            context.forgotPasswordForm.qBtns[0].disabled = false;
            //this.$store.commit("authenticationStore/setShowSpinner", false);

        },
        logInSuccessOkay(){
            var context = this;
            console.log("context.user: ", context.user);
            console.log("context.test: ", context.test);
           if (context.user.designationId === "CEO"){
             this.$router.push('/super-admin');
           }else{
              switch(context.user.userType.toLowerCase()){
                case "admin":
                this.$router.push(`/admin`)
                break;
                case "referal":
                this.$router.push('/referal');
                break;
              case "member":
                this.$router.push('/member');
                break;
            }
           }
           
          },
        async okDialog(payload){
            console.log("payload: ", payload)
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Sign In":
                            await context.login();
                            break;
                        case "Sign In Success":
                            context.logInSuccessOkay();
                            break;
                        case "Send OTP":
                          await context.userIsExist();
                          break;
                        case "Verify OTP Success":
                          context.isForgotPassword = false;
                          context.isVerifyOTP = false
                          context.isResetPassword = true;
                          context.isLoginForm = false;
                          context.isLoginFormWithToken = false;
                          break;
                        case "Reset Password":
                            context.ChangePassword();
                        case "Reset Password Success":
                          context.isForgotPassword = false;
                          context.isVerifyOTP = false
                          context.isResetPassword = false;
                          context.isLoginForm = true;
                          context.isLoginFormWithToken = false;
                          break;
                        case "Sign In Student":
                            await context.loginWithToken();
                            break;
                        case "Sign In Student Success":
                          this.$router.push('/student');
                          break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        SendVerificationCode(){
          var context = this;
          const qInput = context.forgotPasswordForm.qInputs[1];
          const qSelect = context.forgotPasswordForm.qSelects[0];
          if(qInput.name.length < 10){
                alert("Phone number can not be less than 10 digits")
                return;
            }

            let phone = qInput.name;
            if(qInput.name > 10){
                const diff = qInput.name.length - 10;
                phone = qInput.name.slice(diff);
            }
            
            console.log("phone: ", phone);
            console.log("Template: ", qInput.Template);
            if(qInput.Template.iconName === "phone"){
               console.log("code: ", qSelect.value.code);
                context.sendOtp(phone,
                qSelect.value.code);
            }
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
              context.isForgotPassword = false;
              context.isVerifyOTP = true
              context.isResetPassword = false;
              context.isLoginForm = false;
              context.isLoginFormWithToken = false;
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
         this.$store.commit("authenticationStore/setShowSpinner", true);
        await VerifyCode();
        this.$store.commit("authenticationStore/setShowSpinner", false);
      },
      async VerifyCode(){
        /* if(this.phNo.length != 10 || this.otp.length != 6){
          alert('Invalid Phone Number/OTP Format !');
        }else{ */
          //
          var context = this
          let code = context.verifyOTPForm.qInputs[0].name;
          console.log("verification code: ", code);
          //
          window.confirmationResult.confirm(code).then(function (result) {
            // User signed in successfully.
            var user = result.user;
            console.log("user: ", user);
            context.isForgotPassword = false;
            context.isVerifyOTP = false;
            context.isResetPassword = true;
            context.isLoginForm = false;
            context.isLoginFormWithToken = false;
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
              // reCAPTCHA solved, allow signInWithPhoneNumber.
                //context.sendOtp(); 
              // ...
            },
            /* 'expired-callback': function() {
              // Response expired. Ask user to solve reCAPTCHA again.
              // ...
            } */
          }, auth);
          //
          context.appVerifier =  window.recaptchaVerifier
          console.log("appVerifier: ", context.appVerifier)
        },1000)

        //window.recaptchaVerifier.clear()
      },
      resetRecaptcha(){
        var context = this;
         window.recaptchaVerifier.clear()
         context.appVerifier =  window.recaptchaVerifier
         console.log("appVerifier: ", context.appVerifier)
      }
      },
      async created(){
       var context = this;
       //loginForm, forgotPasswordForm, verifyOTPForm, resetPasswordForm
       this.$store.commit("authenticationStore/setShowSpinner", true);
       context.loginForm.clearQInputs();
       context.forgotPasswordForm.clearQInputs();
       context.forgotPasswordForm.clearQSelects();
       context.verifyOTPForm.clearQInputs();
       context.resetPasswordForm.clearQInputs();
       context.loginFormWithToken.clearQInputs();
       const schools = await loadSchools();
       this.$store.commit('schoolStore/SetSchools', schools.result);
       context.loginFormWithToken.qSelects[0].list = schools.result.map((row) => {
           return {
               ...row,
               type: row.schoolName
           }
       })
       context.initReCaptcha();
       this.$store.commit("authenticationStore/setShowSpinner", false);
    }
    }
</script>

<style>
.login-form {
  position: absolute;
}
</style>