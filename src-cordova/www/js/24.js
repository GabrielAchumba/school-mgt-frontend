(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{"072f":function(e,t,n){},"2e5e":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row bg-primary"},[n("div",{staticClass:"col-sm-0 col-xs-0 col-md-6 col-xl-6 col-lg-6 bg-primary"},[n("TorpaLandingPage")],1),n("div",{staticClass:"col-sm-12 col-xs-12 col-md-6 col-xl-6 col-lg-6 bg-primary"},[n("login")],1)])},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md bg-primary"},[e.showSpinner?e._e():n("div",{staticClass:"q-pa-md"},[e.isForgotPassword?n("Form",{attrs:{formData:e.forgotPasswordForm},on:{SendOTP:function(t){return e.SendOTP(t)},resetRecaptcha:function(t){return e.resetRecaptcha(t)},CancelForgotPassword:function(t){return e.CancelForgotPassword(t)}}}):e._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isForgotPassword,expression:"isForgotPassword"}],attrs:{id:"recaptcha-container"}}),n("br"),e.isVerifyOTP?n("Form",{attrs:{formData:e.verifyOTPForm},on:{VerifyOTP:function(t){return e.VerifyOTP(t)},CancelVerifyOTP:function(t){return e.CancelVerifyOTP(t)}}}):e._e(),e.isResetPassword?n("Form",{attrs:{formData:e.resetPasswordForm},on:{ResetPassword:function(t){return e.ResetPassword(t)},CancelResetPassword:function(t){return e.CancelResetPassword(t)},qInputTemplateAction:function(t){return e.ResetPasswordQInputTemplateAction(t)}}}):e._e(),e.isLoginForm?n("Form",{attrs:{formData:e.loginForm},on:{SignIn:function(t){return e.SignIn(t)},ForgotPassword:function(t){return e.ForgotPassword(t)},SignUp:function(t){return e.SignUp(t)},qInputTemplateAction:function(t){return e.LoginQInputTemplateAction(t)},onToggle:function(t){return e.onToggleLoginForm(t)}}}):e._e(),e.isLoginFormWithToken?n("Form",{attrs:{formData:e.loginFormWithToken},on:{SignInWithToken:function(t){return e.SignInWithToken(t)},onToggle:function(t){return e.onToggleLoginFormWithToken(t)}}}):e._e(),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:"3em",thickness:10}})],1)])])},i=[],a=(n("b7dd"),n("0012"),n("6212"),n("950c"),n("2bf3"),n("5b54"),n("ef92"),n("f69e"),n("ad58"),n("d93a"),n("9289")),c=n.n(a),l=n("549c"),u=n.n(l),g=n("52b5"),d=n.n(g),m=(n("1a43"),n("d38f"),n("c889"),n("0588")),f=n("82f4"),p=n("5dc2"),b=n("d4d7"),h={title:"Sign in User",qInputs:[{label:"User Name",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Password",name:"",type:"password",Template:{sn:1,iconName:"visibility_off",visible:!0}}],qBtns:[{label:"Forgot Password",name:"ForgotPassword",icon:"lock_reset",btnDisabled:!1},{label:"Sign In",name:"SignIn",icon:"login",btnDisabled:!1},{label:"Sign Up",name:"SignUp",icon:"how_to_reg",btnDisabled:!1}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""}},w={title:"Forgot User Password",qSelects:[{label:"Country",value:"",type:"text",list:b["a"],actionName:"countryAction",visible:!0}],qInputs:[{label:"User Name",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Phone Number",name:"",type:"phoneNumber",Template:{sn:1,iconName:"phone",visible:!1}}],qBtns:[{label:"Send OTP",name:"SendOTP",icon:"send",btnDisabled:!1},{label:"Reset",name:"resetRecaptcha",icon:"refresh",btnDisabled:!1},{label:"Cancel",name:"CancelForgotPassword",icon:"close",btnDisabled:!1}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""},clearQSelects:function(){var e=0;for(e=0;e<this.qSelects.length;e++)this.qSelects[e].value="",this.qSelects[e].visible=!0}},v={title:"Verfiy OTP",qInputs:[{label:"otp",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Verify",name:"VerifyOTP",icon:"verify_user",btnDisabled:!1},{label:"Cancel",name:"CancelVerifyOTP",icon:"close",btnDisabled:!1}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""}},P={title:"Reset Password",qInputs:[{label:"Password",name:"",type:"password",Template:{sn:0,iconName:"visibility_off",visible:!0}},{label:"Password Confirm",name:"",type:"password",Template:{sn:1,iconName:"visibility_off",visible:!0}}],qBtns:[{label:"Reset Password",name:"ResetPassword",icon:"lock_reset",btnDisabled:!1},{label:"Cancel",name:"CancelResetPassword",icon:"close",btnDisabled:!1}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""}},y={title:"Sign In Student",qToggles:[{label:"Log in non-student",name:"Disagreed",visible:!0}],qInputs:[{label:"Token",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}}],qSelects:[{label:"School Name *",value:"",type:"text",list:[],actionName:"schoolNameAction",visible:!0}],qBtns:[{label:"Sign In",name:"SignInWithToken",icon:"login"}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""}},S=[{title:"Sign In",isVisible:!1,message:"Do you want to log in?",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Sign In Success",isVisible:!1,message:"You have successfully signed in!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Sign In Failure",isVisible:!1,message:"Wrong login credentials. Please check your credentials",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Forgot Password",isVisible:!1,message:"Did you forget your password?",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Send OTP",isVisible:!1,message:"OTP will be sent to your phone number",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Send OTP Success",isVisible:!1,message:"OTP successfully send to your phone number. Please check your phone",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Send OTP Failure",isVisible:!1,message:"Failed to send OTP to your phone number. Please try again",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Verify OTP",isVisible:!1,message:"Let us verify the OTP",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Verify OTP Success",isVisible:!1,message:"OTP is current!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Verify OTP Failure",isVisible:!1,message:"Wrong OTP",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Reset Password",isVisible:!1,message:"Do you want to reset password?",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Reset Password Success",isVisible:!1,message:"Password changed successfully.",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Reset Password Failure",isVisible:!1,message:"Failed to reset password. Please try again",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Sign In Student",isVisible:!1,message:"Do you want to log in?",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Sign In Student Success",isVisible:!1,message:"You have successfully signed in!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Sign In Student Failure",isVisible:!1,message:"Wrong login credentials. Please check your credentials",okayEvent:"okDialog",cancelEvent:"cancelDialog"}],F=n("5705"),k=n("4b38"),T=n("ec61");function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=q(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var s=0,o=function(){};return{s:o,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){a=!0,r=e},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw r}}}}function q(e,t){if(e){if("string"===typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}var x={apiKey:"AIzaSyB9VzN87QcRpEbSegBYjZBTqigdJLkiBAc",authDomain:"lemongatetech.firebaseapp.com",databaseURL:"https://lemongatetech.firebaseio.com",projectId:"lemongatetech",storageBucket:"lemongatetech.appspot.com",messagingSenderId:"391787476785",appId:"1:391787476785:web:48fc551307c092ff8ae210"},E=(Object(k["a"])(x),Object(F["b"])()),R={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]}},components:{MessageBox:m["a"],Form:f["a"]},data:function(){return{disableSendOTPButton:!1,isForgotPassword:!1,isVerifyOTP:!1,isResetPassword:!1,isLoginForm:!0,isLoginFormWithToken:!1,loginForm:h,forgotPasswordForm:w,verifyOTPForm:v,resetPasswordForm:P,loginFormWithToken:y,dialogs:S,token:"",user:{},test:1}},methods:{onToggleLoginForm:function(e){var t=this;t.isForgotPassword=!1,t.isResetPassword=!1,t.isVerifyOTP=!1,"Disagreed"===e?(t.isLoginForm=!0,t.isLoginFormWithToken=!1):(t.isLoginForm=!1,t.isLoginFormWithToken=!0)},onToggleLoginFormWithToken:function(e){var t=this;t.isForgotPassword=!1,t.isResetPassword=!1,t.isVerifyOTP=!1,"Disagreed"===e?(t.isLoginForm=!1,t.isLoginFormWithToken=!0):(t.isLoginForm=!0,t.isLoginFormWithToken=!1)},SignUp:function(){this.$router.push("/register")},LoginQInputTemplateAction:function(e){var t=this,n=e.sn;"visibility_off"===t.loginForm.qInputs[n].Template.iconName?(t.loginForm.qInputs[n].Template.iconName="visibility",t.loginForm.qInputs[n].type="text"):(t.loginForm.qInputs[n].Template.iconName="visibility_off",t.loginForm.qInputs[n].type="password")},ResetPasswordQInputTemplateAction:function(e){console.log(e);var t=this,n=e.sn;"visibility_off"===t.resetPasswordForm.qInputs[n].Template.iconName?(t.resetPasswordForm.qInputs[n].Template.iconName="visibility",t.resetPasswordForm.qInputs[n].type="text"):(t.resetPasswordForm.qInputs[n].Template.iconName="visibility_off",t.resetPasswordForm.qInputs[n].type="password")},CancelForgotPassword:function(){var e=this;e.isLoginForm=!0,e.isForgotPassword=!1,e.isResetPassword=!1,e.isVerifyOTP=!1,e.isLoginFormWithToken=!1,e.forgotPasswordForm.qBtns[2].btnDisabled=!1},CancelVerifyOTP:function(){var e=this;e.isLoginForm=!1,e.isForgotPassword=!0,e.isResetPassword=!1,e.isVerifyOTP=!1,e.isLoginFormWithToken=!1,e.verifyOTPForm.qBtns[1].btnDisabled=!1},CancelResetPassword:function(){var e=this;e.isLoginForm=!1,e.isForgotPassword=!1,e.isResetPassword=!1,e.isVerifyOTP=!0,e.isLoginFormWithToken=!1,e.resetPasswordForm.qBtns[1].btnDisabled=!1},SendOTP:function(){var e,t=this,n=-1,s=D(t.dialogs);try{for(s.s();!(e=s.n()).done;){var o=e.value;if(n++,"Send OTP"==o.title){t.dialogs[n].isVisible=!0,t.forgotPasswordForm.qBtns[0].btnDisabled=!1;break}}}catch(r){s.e(r)}finally{s.f()}},SignIn:function(){var e,t=this,n=-1,s=D(t.dialogs);try{for(s.s();!(e=s.n()).done;){var o=e.value;if(n++,"Sign In"==o.title){t.dialogs[n].isVisible=!0,t.loginForm.qBtns[1].btnDisabled=!0;break}}}catch(r){s.e(r)}finally{s.f()}},SignInWithToken:function(){var e,t=this,n=-1,s=D(t.dialogs);try{for(s.s();!(e=s.n()).done;){var o=e.value;if(n++,"Sign In Student"==o.title){t.dialogs[n].isVisible=!0;break}}}catch(r){s.e(r)}finally{s.f()}},ForgotPassword:function(){var e=this;e.isForgotPassword=!0,e.isResetPassword=!1,e.isLoginForm=!1,e.isVerifyOTP=!1,e.isLoginFormWithToken=!1},ResetPassword:function(){var e,t=this,n=-1,s=D(t.dialogs);try{for(s.s();!(e=s.n()).done;){var o=e.value;if(n++,"Reset Password"==o.title){t.dialogs[n].isVisible=!0,t.resetPasswordForm.qBtns[0].btnDisabled=!1;break}}}catch(r){s.e(r)}finally{s.f()}},ChangePassword:function(){var e=this;return u()(d.a.mark((function t(){var n,s,o,r,i;return d.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,s="user/resetpassword",o={url:s,req:{userName:n.forgotPasswordForm.qInputs[0].name,password:n.resetPasswordForm.qInputs[0].name,passwordConfirm:n.resetPasswordForm.qInputs[1].name}},e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=6,Object(p["b"])(o);case 6:r=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),i=r.data.success,i?n.dialogFailureOrScuess("Reset Password Success",!0):n.dialogFailureOrScuess("Reset Password Failure",!0);case 10:case"end":return t.stop()}}),t)})))()},dialogFailureOrScuess:function(e,t){var n,s=this,o=-1,r=D(s.dialogs);try{for(r.s();!(n=r.n()).done;){var i=n.value;if(o++,i.title==e){s.dialogs[o].isVisible=t;break}}}catch(a){r.e(a)}finally{r.f()}},cancelDialog:function(e){console.log("payload: ",e);var t,n=this,s=!1,o=-1,r=D(n.dialogs);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(o++,i.title===e){switch(n.dialogs[o].isVisible=s,e){case"Send OTP":n.forgotPasswordForm.qBtns[0].btnDisabled=s;break;case"Reset":n.forgotPasswordForm.qBtns[1].btnDisabled=s;break;case"Forgot Password":n.forgotPasswordForm.qBtns[0].btnDisabled=s;break;case"Sign In":n.loginForm.qBtns[1].btnDisabled=s;break;case"Sign Up":n.loginForm.qBtns[2].btnDisabled=s;break;case"Verify OTP":n.verifyOTPForm.qBtns[0].btnDisabled=s;break;case"Reset Password":n.loginForm.qBtns[1].btnDisabled=s;break}break}}}catch(a){r.e(a)}finally{r.f()}},login:function(){var e=this;return u()(d.a.mark((function t(){var n,s,o,r,i;return d.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=4,Object(p["b"])({url:"user/login",req:{username:n.loginForm.qInputs[0].name,password:n.loginForm.qInputs[1].name}});case 4:s=t.sent,n.test=100,e.$store.commit("authenticationStore/setShowSpinner",!1),o=s.data,r=o.data,o.message,i=o.success,n.dialogFailureOrScuess("Sign In",!1),i?(n.token=r.token,n.user=r.user,console.log("context.user: ",n.user),e.$store.commit("authenticationStore/Login",{token:n.token,user:n.user}),n.dialogFailureOrScuess("Sign In Success",!0)):n.dialogFailureOrScuess("Sign In Failure",!0);case 10:case"end":return t.stop()}}),t)})))()},loginWithToken:function(){var e=this;return u()(d.a.mark((function t(){var n,s,o,r,i,a,c;return d.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,s=n.loginFormWithToken.qSelects[0].value,o=n.loginFormWithToken.qInputs[0].name,e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=6,Object(p["a"])({url:"student/loginstudent/".concat(o,"/").concat(s)});case 6:r=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),i=r.data,a=i.data,i.message,c=i.success,n.dialogFailureOrScuess("Sign In Student",!1),c?(n.token=a.token,n.user=a.user,console.log("context.user: ",n.user),e.$store.commit("studentStore/SetSelectedStudent",n.user),e.$store.commit("authenticationStore/Login",{token:n.token,user:n.user}),n.dialogFailureOrScuess("Sign In Student Success",!0)):n.dialogFailureOrScuess("Sign In Student Failure",!0);case 11:case"end":return t.stop()}}),t)})))()},userIsExist:function(){var e=this;return u()(d.a.mark((function t(){var n,s,o,r,i,a,c;return d.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("userIsExist called"),n=e,n.forgotPasswordForm.qBtns[0].disabled=!0,s="user/user-is-exist2",o={url:s,req:{userName:n.forgotPasswordForm.qInputs[0].name,phoneNumber:n.forgotPasswordForm.qInputs[1].name,countryCode:n.forgotPasswordForm.qSelects[0].value.code}},console.log("payload: ",o),t.next=8,Object(p["b"])(o);case 8:r=t.sent,i=r.data,a=i.data,i.message,c=i.success,c?n.forgotPasswordForm.qBtns[0].btnDisabled=!1:alert("Failed"),console.log("context.userExists: ",a),a?n.SendVerificationCode():alert("user does not exist"),n.forgotPasswordForm.qBtns[0].disabled=!1;case 14:case"end":return t.stop()}}),t)})))()},logInSuccessOkay:function(){var e=this;if(console.log("context.user: ",e.user),console.log("context.test: ",e.test),"CEO"===e.user.designationId)this.$router.push("/super-admin");else switch(e.user.userType.toLowerCase()){case"admin":this.$router.push("/admin");break;case"referal":this.$router.push("/referal");break;case"student":this.$router.push("/student");break;case"member":this.$router.push("/member");break}},okDialog:function(e){var t=this;return u()(d.a.mark((function n(){var s,o,r,i,a;return d.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),s=t,o=-1,r=D(s.dialogs),n.prev=4,r.s();case 6:if((i=r.n()).done){n.next=45;break}if(a=i.value,o++,a.title!==e){n.next=43;break}n.t0=e,n.next="Sign In"===n.t0?13:"Sign In Success"===n.t0?17:"Send OTP"===n.t0?19:"Verify OTP Success"===n.t0?22:"Reset Password"===n.t0?28:"Reset Password Success"===n.t0?30:"Sign In Student"===n.t0?36:"Sign In Student Success"===n.t0?39:41;break;case 13:return n.next=15,s.login();case 15:return s.loginForm.qBtns[1].btnDisabled=!1,n.abrupt("break",41);case 17:return s.logInSuccessOkay(),n.abrupt("break",41);case 19:return n.next=21,s.userIsExist();case 21:return n.abrupt("break",41);case 22:return s.isForgotPassword=!1,s.isVerifyOTP=!1,s.isResetPassword=!0,s.isLoginForm=!1,s.isLoginFormWithToken=!1,n.abrupt("break",41);case 28:s.ChangePassword(),s.resetPasswordForm.qBtns[0].btnDisabled=!0;case 30:return s.isForgotPassword=!1,s.isVerifyOTP=!1,s.isResetPassword=!1,s.isLoginForm=!0,s.isLoginFormWithToken=!1,n.abrupt("break",41);case 36:return n.next=38,s.loginWithToken();case 38:return n.abrupt("break",41);case 39:return t.$router.push("/student"),n.abrupt("break",41);case 41:return s.dialogs[o].isVisible=!1,n.abrupt("break",45);case 43:n.next=6;break;case 45:n.next=50;break;case 47:n.prev=47,n.t1=n["catch"](4),r.e(n.t1);case 50:return n.prev=50,r.f(),n.finish(50);case 53:case"end":return n.stop()}}),n,null,[[4,47,50,53]])})))()},SendVerificationCode:function(){var e=this,t=e.forgotPasswordForm.qInputs[1],n=e.forgotPasswordForm.qSelects[0];if(t.name.length<10)alert("Phone number can not be less than 10 digits");else{var s=t.name;if(t.name>10){var o=t.name.length-10;s=t.name.slice(o)}console.log("phone: ",s),console.log("Template: ",t.Template),"phone"===t.Template.iconName&&(console.log("code: ",n.value.code),e.sendOtp(s,n.value.code))}},sendOtp:function(e,t){var n=this,s=t+e,o=n.appVerifier;console.log("phoneNumber: ",s),console.log("appVerifier: ",o),Object(F["c"])(E,s,o).then((function(e){n.isForgotPassword=!1,n.isVerifyOTP=!0,n.isResetPassword=!1,n.isLoginForm=!1,n.isLoginFormWithToken=!1,window.confirmationResult=e})).catch((function(e){console.log("error: ",e),alert("Error ! SMS not sent")}))},VerifyOTP:function(){var e=this;return u()(d.a.mark((function t(){var n;return d.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,e.$store.commit("authenticationStore/setShowSpinner",!0),n.verifyOTPForm.qBtns[0].btnDisabled=!0,t.next=5,n.VerifyCode();case 5:e.$store.commit("authenticationStore/setShowSpinner",!1);case 6:case"end":return t.stop()}}),t)})))()},VerifyCode:function(){var e=this;return u()(d.a.mark((function t(){var n,s;return d.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e,s=n.verifyOTPForm.qInputs[0].name,console.log("verification code: ",s),window.confirmationResult.confirm(s).then((function(e){var t=e.user;console.log("user: ",t),n.isForgotPassword=!1,n.isVerifyOTP=!1,n.isResetPassword=!0,n.isLoginForm=!1,n.isLoginFormWithToken=!1,n.verifyOTPForm.qBtns[0].btnDisabled=!1})).catch((function(e){alert("User couldn't sign in (bad verification code?)")}));case 4:case"end":return t.stop()}}),t)})))()},initReCaptcha:function(){var e=this;setTimeout((function(){var t=e;window.recaptchaVerifier=new F["a"]("recaptcha-container",{size:"normal",callback:function(e){console.log("response: ",e)}},E),t.appVerifier=window.recaptchaVerifier,console.log("appVerifier: ",t.appVerifier)}),1e3)},resetRecaptcha:function(){var e=this;e.forgotPasswordForm.qBtns[1].btnDisabled=!0,window.recaptchaVerifier.clear(),e.appVerifier=window.recaptchaVerifier,e.forgotPasswordForm.qBtns[1].btnDisabled=!1}},created:function(){var e=this;return u()(d.a.mark((function t(){var n,s;return d.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,e.$store.commit("authenticationStore/setShowSpinner",!0),n.loginForm.clearQInputs(),n.forgotPasswordForm.clearQInputs(),n.forgotPasswordForm.clearQSelects(),n.verifyOTPForm.clearQInputs(),n.resetPasswordForm.clearQInputs(),n.loginFormWithToken.clearQInputs(),t.next=10,Object(T["a"])();case 10:s=t.sent,e.$store.commit("schoolStore/SetSchools",s.result),n.loginFormWithToken.qSelects[0].list=s.result.map((function(e){return O(O({},e),{},{type:e.schoolName})})),n.initReCaptcha(),e.$store.commit("authenticationStore/setShowSpinner",!1);case 15:case"end":return t.stop()}}),t)})))()}},L=R,C=(n("8d2e"),n("a6c2")),B=n("ec6d"),W=n("c99e"),N=n("63c1"),j=n.n(N),$=Object(C["a"])(L,r,i,!1,null,null,null),_=$.exports;j()($,"components",{QDialog:B["a"],QSpinner:W["a"]});var Q=n("30f8"),A={computed:{isMobile:function(){var e=window.innerWidth;return e<700}},components:{login:_,TorpaLandingPage:Q["default"]},data:function(){return{previewImage:"/statics/newway.jpg"}}},U=A,G=Object(C["a"])(U,s,o,!1,null,null,null);t["default"]=G.exports},"8d2e":function(e,t,n){"use strict";var s=n("072f"),o=n.n(s);o.a}}]);