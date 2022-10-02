<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center bg-primary text-accent">
        <q-card
           class="login-form"
          v-bind:style="
          $q.platform.is.mobile ? { width: '90%', height: '95%' } : { width: '90%' , height: '95%' }
          "
        >

          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                {{ title }}
              </div>
            </div>
          </q-card-section>

          <q-card-section 
          v-if="isForgotPasswordComponent">
            <ForgotPassword 
            forgotPasswordEvent="forgotPasswordEvent"
            forgotPasswordEvent2="forgotPasswordEvent2"
            @forgotPasswordEvent="forgotPasswordEvent($event)"
            @forgotPasswordEvent2="forgotPasswordEvent2($event)"/>
          </q-card-section>

           <q-card-section
          v-else-if="isResetPassword">
            <ResetPassword
            ResetPasswordEvent="ResetPasswordEvent"
            ResetPasswordEvent2="ResetPasswordEvent2"
            @ResetPasswordEvent="ResetPasswordEvent($event)"
            @ResetPasswordEvent2="ResetPasswordEvent2($event)"/>
          </q-card-section>

          <q-card-section v-else>
            <q-form class="q-gutter-md">
              <q-input outlined v-model="username" label="Username" lazy-rules />

              <q-input
                :type="passwordType"
                outlined
                v-model="password"
                label="Password"
                lazy-rules
              >
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
                  <div class="col-3 text-left">
                    <q-btn
                      label="Forgot Password"
                      type="button"
                      size="sm"
                      no-caps
                      class="bg-accent text-primary"
                      @click="forgotPasswordAction"
                    />
                  </div>
                  <div class="col-6"></div>
                  <div class="col-3 text-right">
                    <q-btn
                      label="Login"
                      type="button"
                      size="sm"
                      no-caps
                      class="bg-accent text-primary"
                      @click="loginAction"
                    />
                  </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>

<q-dialog v-model="isLoginActionMessage">
  <MessageBox
  title="Log In"
  message="Do you want to log in?"
  okayEvent="login"
  cancelEvent="cancelLogin"
  @cancelLogin="cancelLogin($event)"
  @login="login($event)"
  >
  </MessageBox>
</q-dialog>

<q-dialog v-model="isLoginSuccessMessage">
  <MessageBox
  title="Log Success"
  message="You have successfully logged in!"
  okayEvent="logInSuccessOkay"
  cancelEvent="logInSuccessCancel"
  @logInSuccessCancel="logInSuccessCancel($event)"
  @logInSuccessOkay="logInSuccessOkay($event)"
  >
  </MessageBox>
</q-dialog>

<q-dialog v-model="isLoginFailureMessage">
  <MessageBox
  title="Login Error"
  :message="`${message}. Please check your login credentials.`"
  okayEvent="logInFailureOkay"
  cancelEvent="logInFailureCancel"
  @logInFailureCancel="logInFailureCancel($event)"
  @logInFailureOkay="logInFailureOkay($event)"
  >
  </MessageBox>
</q-dialog>

<q-dialog v-model="isForgotPassword">
  <MessageBox
  title="Log In"
  message="Did you forget your password?"
  okayEvent="forgotPassword"
  cancelEvent="cancelForgotPassword"
  @forgotPassword="forgotPassword($event)"
  @cancelForgotPassword="cancelForgotPassword($event)"
  >
  </MessageBox>
</q-dialog>

   </q-layout>
</template>

<script>
  import MessageBox from "../../components/dialogs/MessageBox.vue"
  import ForgotPassword from "./ForgotPassword.vue"
  import ResetPassword from "./ResetPassword.vue"
  import { post } from "../../store/modules/services"
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
        ForgotPassword,
        ResetPassword,
      },
        data () {
          return {
            passwordType: "password",
            isVisible: false,
            username: "",
            password: "",
            isLoginActionMessage: false,
            isLoginSuccessMessage: false,
            isLoginFailureMessage: false,
            message: '',
            token: "",
            user: {},
            isForgotPassword: false,
            isResetPassword: false,
            isForgotPasswordComponent: false,
            title: "Log In"
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
          loginAction(){
            var context = this;
            context.isLoginActionMessage = true;
          },
          async login(){
            var context = this;

            var response = await post({
             url: "user/login",
             req: {
               username: context.username,
               password: context.password
             },
            });

            const { 
              data : {
                data: result,
                message,
                success,
              }
              } = response

              console.log("result: ", result);
            
            context.message = message;
            context.isLoginActionMessage = false;
            if(success){
              context.isLoginSuccessMessage = true;
              context.token = result.token;
              context.user = result.user;
            }else{
              context.isLoginFailureMessage = true;
            }
          },
          cancelLogin(){
            var context = this;
            context.isLoginActionMessage = false;
          },
          logInFailureOkay(){
            var context = this;
            context.isLoginFailureMessage = false;
          },
          logInFailureCancel(){
            var context = this;
            context.isLoginFailureMessage = false;
          },
          logInSuccessOkay(){
            
            var context = this;
            context.isLoginSuccessMessage = false;

            switch(context.user.userType.toLowerCase()){
              case "member":
                this.$router.push('/user');
                break;
              case "admin":
                this.$router.push('/admin');
                break;
            }
            this.$store.commit('authenticationStore/Login',{
              token: context.token,
              user: context.user,
            })
          },
          logInSuccessCancel(){
            var context = this;
            context.isLoginSuccessMessage = false;
          },
          forgotPasswordEvent(){
            var context = this
            context.isForgotPassword = false
            context.isForgotPasswordComponent = false;
            context.isResetPassword = true
          },
          forgotPasswordEvent2(){
            var context = this
            context.isForgotPassword = false
            context.isForgotPasswordComponent = false;
            context.isResetPassword = false
            context.title = "Log In"
          },
          ResetPasswordEvent2(){
            var context = this
            context.isForgotPassword = false
            context.isForgotPasswordComponent = false;
            context.isResetPassword = false
            context.title = "Log In"
          },
          ResetPasswordEvent(){
            var context = this
            context.isForgotPassword = false
            context.isForgotPasswordComponent = false;
            context.isResetPassword = false
          },
          forgotPasswordAction(){
            var context = this;
            context.isForgotPassword = true;
            context.title = "Log In"
          },
          forgotPassword(){
            var context = this;
            context.isForgotPasswordComponent = true;
            context.title = "Forgot Password"
            context.isForgotPassword = false
            context.isResetPassword = false
          },
          cancelForgotPassword(){
            var context = this;
            context.isForgotPasswordComponent = false;
            context.isForgotPassword = false
            context.isResetPassword = false
            context.title = "Log In"
          }

        }
    }
</script>

<style>
.login-form {
  position: absolute;
}
</style>