<template>
  <div>
    <q-form class="q-gutter-md">
        <q-input outlined v-model="resetPasswordPayload.userName" label="Username" lazy-rules />
        <q-input type="password" outlined v-model="resetPasswordPayload.password" label="Password" lazy-rules />
        <q-input type="password" outlined v-model="resetPasswordPayload.passwordConfirm" label="Password Confirm" lazy-rules />

        <div class="row">
            <div class="col-3 text-left">
                <q-btn
                    label="Cancel"
                    type="button"
                    size="sm"
                    no-caps
                    class="bg-accent text-primary"
                    @click="canceResetPasswordAction"
                />
            </div>
            <div class="col-6"></div>
            <div class="col-3 text-right">
                <q-btn
                    label="Reser Password"
                    type="button"
                    size="sm"
                    no-caps
                    class="bg-accent text-primary"
                    @click="resetPasswordAction"
                />
            </div>
        </div>

    </q-form>

<q-dialog v-model="isResetPasswordDialog">
  <MessageBox
  title="Reset Password"
  message="You are about to generate token for reseting password"
  okayEvent="ResetPassword"
  cancelEvent="cancelResetPassword"
  @cancelResetPassword="cancelResetPassword($event)"
  @ResetPassword="ResetPassword($event)"
  >
  </MessageBox>
</q-dialog>

<q-dialog v-model="isResetPasswordSuccessDialog">
  <MessageBox
  title="Token Sent Success"
  :message="ResetPasswordResponse.message"
  okayEvent="ResetPasswordSuccessOkay"
  cancelEvent="ResetPasswordSuccessCancel"
  @ResetPasswordSuccessCancel="ResetPasswordSuccessCancel($event)"
  @ResetPasswordSuccessOkay="ResetPasswordSuccessOkay($event)"
  >
  </MessageBox>
</q-dialog>

<q-dialog v-model="isResetPasswordFailureDialog">
  <MessageBox
  title="Token Generation Error"
  :message="`${message}. Please check your data entered.`"
  okayEvent="ResetPasswordFailureOkay"
  cancelEvent="ResetPasswordFailureCancel"
  @ResetPasswordFailureCancel="ResetPasswordFailureCancel($event)"
  @ResetPasswordFailureOkay="ResetPasswordFailureOkay($event)"
  >
  </MessageBox>
</q-dialog>

  </div>
</template>

<script>
  import MessageBox from "../../components/dialogs/MessageBox.vue"
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
        ResetPasswordEvent: {
            type: String,
            default: ''
        },
        ResetPasswordEvent2:{
          type: String,
            default: ''
        }
      },
    data () {
          return {
            isVisible: false,
            isResetPasswordDialog: false,
            isResetPasswordSuccessDialog: false,
            isResetPasswordFailureDialog: false,
            message: '',
            resetPasswordPayload: {
                password: "",
                passwordConfirm: "",
                userName: "",
            },
            ResetPasswordResponse: {
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
          ResetPasswordAction(){
            var context = this;
            context.isResetPasswordDialog = true;
          },
          async ResetPassword(){
            var context = this;

            var response = await this.$store.dispatch('authenticationStore/ResetPassword', 
            context.ResetPasswordPayload);

            const { 
              data : {
                data: result,
                message,
                success,
              }
              } = response
            
            context.ResetPasswordResponse = result
            context.message = message;
            context.isResetPasswordDialog = false;
            if(success){
              context.isResetPasswordSuccessDialog = true;
            }else{
              context.isResetPasswordFailureDialog = true;
            }
          },
          cancelResetPassword(){
            var context = this;
            context.isResetPasswordDialog = false;
            this.$emit(context.ResetPasswordEvent2);
          },
          ResetPasswordFailureOkay(){
            var context = this;
            context.isResetPasswordFailureDialog = false;
            this.$emit(context.ResetPasswordEvent2);
          },
          ResetPasswordFailureCancel(){
            var context = this;
            context.isResetPasswordFailureDialog = false;
            this.$emit(context.ResetPasswordEvent2);
          },
          ResetPasswordSuccessOkay(){
            
            var context = this;
            context.isResetPasswordSuccessDialog = false;
            this.$emit(context.ResetPasswordEvent); 
          },
          ResetPasswordSuccessCancel(){
            var context = this;
            context.isResetPasswordSuccessDialog = false;
            this.$emit(context.ResetPasswordEvent2);
          },
          canceResetPasswordAction(){
            var context = this;
            this.$emit(context.ResetPasswordEvent2);
          }

        }
    }
</script>

<style>
.login-form {
  position: absolute;
}
</style>