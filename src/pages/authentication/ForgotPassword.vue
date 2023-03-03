<template>
<div>
  <q-form class="q-gutter-md">
    <q-input outlined v-model="forgotPasswordPayload.userName" label="Username" lazy-rules />
    <q-input outlined v-model="forgotPasswordPayload.email" label="Email Address" lazy-rules />

    <div class="row">
      <div class="col-3 text-left">
        <q-btn
          label="Cancel"
          type="button"
          size="sm"
          no-caps
          class="bg-accent text-primary"
          @click="canceForgotPasswordAction"
        />
      </div>
      <div class="col-6"></div>
      <div class="col-3 text-right">
        <q-btn
          label="Forgot Password"
          type="button"
          size="sm"
          no-caps
          class="bg-accent text-primary"
          @click="forgotPasswordAction"
        />
      </div>
    </div>

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
            isVisible: false,
            isForgotPasswordDialog: false,
            isForgotPasswordSuccessDialog: false,
            isForgotPasswordFailureDialog: false,
            message: '',
            forgotPasswordPayload: {
                email: "",
                userName: "",
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

            var response = await this.$store.dispatch('authenticationStore/ForgotPassword', 
            context.forgotPasswordPayload);
            
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
            context.isForgotPasswordSuccessDialog = false;
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
          }

        }
    }
</script>

<style>
.login-form {
  position: absolute;
}
</style>