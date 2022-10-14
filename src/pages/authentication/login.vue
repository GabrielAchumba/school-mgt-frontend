<template>
    <div class="q-pa-md">
        <Form
        v-if="isForgotPassword"
        :formData="forgotPasswordForm"
        @SendOTP="SendOTP($event)"
        @CancelForgotPassword="CancelForgotPassword($event)"/>

        <Form
        v-else-if="isVerifyOTP"
        :formData="verifyOTPForm"
        @VerifyOTP="VerifyOTP($event)"
        @CancelVerifyOTP="CancelVerifyOTP($event)"/>

        <Form
        v-else-if="isResetPassword"
        :formData="resetPasswordForm"
        @ResetPassword="ResetPassword($event)"
        @CancelResetPassword="CancelResetPassword($event)"
        @qInputTemplateAction="ResetPasswordQInputTemplateAction($event)"/>

        <Form
        v-else
        :formData="loginForm"
        @SignIn="SignIn($event)"
        @ForgotPassword="ForgotPassword($event)"
        @qInputTemplateAction="LoginQInputTemplateAction($event)"/>

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
  import { loginForm, forgotPasswordForm, verifyOTPForm, resetPasswordForm, dialogs }
  from "./view_models/login-view-model";

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
        MessageBox,
        Form,
      },
        data () {
          return {
            isForgotPassword: false,
            isVerifyOTP: false,
            isResetPassword: false,
            loginForm: loginForm,
            forgotPasswordForm: forgotPasswordForm,
            verifyOTPForm: verifyOTPForm,
            resetPasswordForm: resetPasswordForm,
            dialogs: dialogs,
            token: "",
            user: {},
            }
        },
        methods: {
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
            context.isForgotPassword = false;
            context.isResetPassword = false;
            context.isVerifyOTP = false;
          },
          CancelVerifyOTP(){
            var context = this;
            context.isForgotPassword = true;
            context.isResetPassword = false;
            context.isVerifyOTP = false
          },
          CancelResetPassword(){
            var context = this;
            context.isForgotPassword = false;
            context.isResetPassword = false;
            context.isVerifyOTP = true
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
        ForgotPassword(){
            var context = this;
            context.isForgotPassword = true;
            context.isResetPassword = false;
        },
        generateSendAndSaveOTP(){
          // if OTP generation is successfully then
          var context = this;

          context.dialogFailureOrScuess("Send OTP", false);
          const success = true;
          if(success){
            context.dialogFailureOrScuess("Send OTP Success", true);
          }else{
            context.dialogFailureOrScuess("Verify OTP Failure", true)
          }
        },
        VerifyOTP(){
          // if verify OTP is successfully then
          var context = this;

          context.dialogFailureOrScuess("Verify OTP", false);
          const success = true;
          if(success){
            context.dialogFailureOrScuess("Verify OTP Success", true);
          }else{
            context.dialogFailureOrScuess("Send OTP Failure", true)
          }
        },
        ResetPassword(){
          // if reset password is successfully then
          var context = this;

          context.dialogFailureOrScuess("Reset Password", false);
          const success = true;
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

            var response = await post({
             url: "user/login",
             req: {
               username: context.loginForm.qInputs[0].name,
               password: context.loginForm.qInputs[1].name
             },
            });

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
              this.$store.commit('authenticationStore/Login',{
                token: context.token,
                user: context.user,
              })
              context.dialogFailureOrScuess("Sign In Success", true);
            }else{
              context.dialogFailureOrScuess( "Sign In Failure", true);
            }
        },
        logInSuccessOkay(){
            
            var context = this;
           if (context.user.designationId === "CEO"){
             this.$router.push('/admin');
           }else{
              switch(context.user.userType.toLowerCase()){
                case "admin":
                this.$router.push('/admin');
                break;
                case "referal":
                this.$router.push('/referal');
                break;
              case "member":
                this.$router.push('/member');
                break;
              case "student":
                this.$router.push('/student');
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
                            context.generateSendAndSaveOTP();
                        case "Send OTP Success":
                          context.isForgotPassword = false;
                          context.isVerifyOTP = true
                          context.isResetPassword = false;
                          break;
                        case "Verify OTP Success":
                          context.isForgotPassword = false;
                          context.isVerifyOTP = false
                          context.isResetPassword = true;
                          break;
                        case "Reset Password":
                            context.generateSendAndSaveOTP();
                        case "Reset Password Success":
                          context.isForgotPassword = false;
                          context.isVerifyOTP = false
                          context.isResetPassword = false;
                          break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        }
    }
</script>

<style>
.login-form {
  position: absolute;
}
</style>