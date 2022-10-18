<template>
    <div class="q-pa-md">
        <Form
        v-if="registrationFormVisible"
        :formData="registrationForm"
        @Next="Next($event)"
        @CancelCreateUser="CancelCreateUser($event)"
        @userTypeAction="userTypeAction($event)"
        @qInputTemplateAction="ShowOrHidePassword($event)"/>

        <Form
        v-if="phoneNumberFormVisible"
        :formData="phoneNumberForm"
        @CancelSendCodeSMS="CancelSendCodeSMS($event)"
        @qInputTemplateAction="GenerateVerificationCode($event)"/>
        <div 
        v-show="phoneNumberFormVisible"
        id="recaptcha-container"></div><br>

        <Form
        v-if="otpFormVisible"
        :formData="otpForm"
        @Submit="Submit($event)"
        @CancelSubmit="CancelSubmit($event)"/>
      <!--   <button id="sign-in-button" @click="sendOtp">Get OTP</button>
        <button @click="verifyOtp">Verify</button><br> -->

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
</template>

<script>

import MessageBox from "../../components/dialogs/MessageBox.vue";
import Form from "../../components/Forms/Form.vue";
import { post } from "../../store/modules/services";
import { registrationForm, phoneNumberForm, otpForm, dialogs } from "./view_models/register-view-model";
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";


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

//const auth = app.auth()
//const db = app.firestore()

export default {
    components:{
        MessageBox,
        Form
    },
    data(){
        return {
            registrationForm: registrationForm,
            dialogs:dialogs,
            appVerifier: '',
            phoneNumberForm: phoneNumberForm,
            otpForm: otpForm,
            registrationFormVisible: true,
            phoneNumberFormVisible: false,
            otpFormVisible: false,
            userExists: false,
        }
    },
    methods:{
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
        ShowOrHidePassword(payload){
            var context = this;
            const sn = payload.sn
            if(context.registrationForm.qInputs[sn].Template.iconName === "visibility_off"){
              context.registrationForm.qInputs[sn].Template.iconName = "visibility";
              context.registrationForm.qInputs[sn].type = "text";
            }else{
              context.registrationForm.qInputs[sn].Template.iconName = "visibility_off";
              context.registrationForm.qInputs[sn].type = "password";
            }
        },
        GenerateVerificationCode(payload){
            var context = this;
            const sn = payload.sn
            console.log("phoneNumberFormVisible: ", context.phoneNumberFormVisible)

            if(context.phoneNumberForm.qInputs[sn].name.length < 10){
                alert("Phone number can not be less than 10 digits")
                return;
            }

            let phone = context.phoneNumberForm.qInputs[sn].name;
            if(context.phoneNumberForm.qInputs[sn].name.length > 10){
                const diff = context.phoneNumberForm.qInputs[sn].name.length - 10;
                phone = context.phoneNumberForm.qInputs[sn].name.slice(diff);
            }
            
            console.log("phone: ", phone);
            console.log("Template: ", context.phoneNumberForm.qInputs[sn].Template);
            if(context.phoneNumberForm.qInputs[sn].Template.iconName === "send"){
               console.log("code: ", context.phoneNumberForm.qSelects[0].value.code);
                context.sendOtp(phone,
                context.phoneNumberForm.qSelects[0].value.code);
                // For offline mode - to be removed
              /*   context.registrationFormVisible = false;
                context.phoneNumberFormVisible = false;
                context.otpFormVisible = true; */
            }
        },
        async Next(){

          const context = this;
          await context.userIsExist();
        },
        Submit(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Verify Code"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        CancelCreateUser(){
            this.$store.commit('authenticationStore/changeTab', "login");
        },
        CancelSendCodeSMS(){
            var context = this;
            context.registrationFormVisible = true;
            context.phoneNumberFormVisible = false;
            context.otpFormVisible = false;

        },
        CancelSubmit(){
            var context = this;
            context.registrationFormVisible = false;
            context.phoneNumberFormVisible = true;
            context.otpFormVisible = false;
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
        async save(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            
            var url = `user/create-admin`;
            var schoolId = context.registrationForm.qSelects[1].value;
            if(context.registrationForm.qSelects[0].value.type === "Referal"){
              schoolId = "CEO";
            }
            const payload = {
                url,
                req: {
                    firstName: context.registrationForm.qInputs[0].name,
                    lastName: context.registrationForm.qInputs[1].name,
                    userName: context.registrationForm.qInputs[2].name,
                    password: context.registrationForm.qInputs[3].name,
                    phoneNumber: context.phoneNumberForm.qInputs[0].name,
                    userType: context.registrationForm.qSelects[0].value.type,
                    countryCode: context.phoneNumberForm.qSelects[0].value.code,
                    schoolId,
                }
            }

            console.log("payload: ", payload)
            var response = await post(payload)

            const { 
                data : {
                    message,
                    success,
                }
            } = response
            context.dialogFailureOrScuess("Verify Code", false);
            if(success){
                context.dialogFailureOrScuess("Verify Code Success", true);
            }else{
                context.dialogFailureOrScuess("Verify Code Failure", true);
            }

        },
         async userIsExist(){
            var context = this;
            
            var url = `user/user-is-exist`;
            var schoolId = context.registrationForm.qSelects[1].value;
            if(context.registrationForm.qSelects[0].value.type === "Referal"){
              schoolId = "CEO";
            }
            const payload = {
                url,
                req: {
                    firstName: context.registrationForm.qInputs[0].name,
                    lastName: context.registrationForm.qInputs[1].name,
                    userName: context.registrationForm.qInputs[2].name,
                    password: context.registrationForm.qInputs[3].name,
                    phoneNumber: context.phoneNumberForm.qInputs[0].name,
                    userType: context.registrationForm.qSelects[0].value.type,
                    schoolId,
                }
            }

            console.log("payload: ", payload)
            var response = await post(payload)

            const { 
                data : {
                    data: result,
                    message,
                    success,
                }
            } = response

            if(!success){
                alert("Failed")
            }

            context.userExists = result;
            console.log("context.userExists: ", context.userExists);
            if(!context.userExists){
              context.registrationFormVisible = false;
              context.phoneNumberFormVisible = true;
              context.otpFormVisible = false;
            }else{
              alert("user already exist")
            }

        },
        async okDialog(payload){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Create User Success":
                            await context.userIsExist();
                            break;
                        case "Verify Code":
                            await context.verifyOtp();
                            // offline mode -- to be removed
                            //await context.save();
                            break;
                        case "Verify Code Success":
                            context.registrationFormVisible = false;
                            context.phoneNumberFormVisible = false;
                            context.otpFormVisible = false;
                            this.$router.push('/')
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
      userTypeAction(payload){
            var context = this;
            console.log("payload: ", payload)
            if(payload.value.value === 1){
                context.registrationForm.qSelects[1].visible = false;
            }else{
                context.registrationForm.qSelects[1].visible = true;
            }
      },
      sendOtp(phNo, countryCode){
          var context = this;
       /*  if(phNo.length != 10){
          alert('Invalid Phone Number Format !');
        }else{ */
          let phoneNumber = countryCode + phNo;
          //var phoneNumber = "+23407032488605";
          console.log("phoneNumber: ", phoneNumber);
          //
          let appVerifier = context.appVerifier
          console.log("appVerifier: ", appVerifier);
          //
           signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              console.log("confirmationResult: ", confirmationResult);
              context.registrationFormVisible = false;
              context.phoneNumberFormVisible = false;
              context.otpFormVisible = true;
              window.confirmationResult = confirmationResult;

              //
              alert('SMS sent')
            }).catch(function (error) {
            // Error; SMS not sent
            // ...
            alert('Error ! SMS not sent')
          });
        //}
      },
      async verifyOtp(){
        /* if(this.phNo.length != 10 || this.otp.length != 6){
          alert('Invalid Phone Number/OTP Format !');
        }else{ */
          //
          var context = this
          let code = context.otpForm.qInputs[0].name;
          console.log("verification code: ", code);
          //
          window.confirmationResult.confirm(code).then(function (result) {
            // User signed in successfully.
            var user = result.user;
            console.log("user: ", user);
            context.save();
            // ...
            //route to set password !
            //context.$router.push({path:'/setPassword'})
          }).catch(function (error) {
              console.log("User couldn't sign in (bad verification code?)")
            // User couldn't sign in (bad verification code?)
            // ...
          });
        //}
      },
      initReCaptcha(){
        setTimeout(()=>{
          let context = this
          window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            size: 'normal',
            callback: function(response) {
                //console.log("response: ", response);
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
        },1000)
      }
    },
    created(){
       var context = this;
       context.registrationForm.qSelects[1].list = this.$store.getters["schoolStore/schools"].map((row) => {
           return {
               ...row,
               type: row.schoolName
           }
       })

       context.initReCaptcha();
    }
}
</script>