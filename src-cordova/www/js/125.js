(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[125],{"5d5b":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row bg-primary",staticStyle:{height:"95vh"}},[e.isMobile?e._e():r("div",{staticClass:"col-6 bg-primary"},[r("TorpaLandingPage")],1),r("div",{staticClass:"col bg-primary"},[r("register")],1)])},i=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"q-pa-md bg-primary"},[e.registrationFormVisible?r("Form",{attrs:{formData:e.registrationForm},on:{Next:function(t){return e.Next(t)},CancelCreateUser:function(t){return e.CancelCreateUser(t)},userTypeAction:function(t){return e.userTypeAction(t)},qInputTemplateAction:function(t){return e.ShowOrHidePassword(t)}}}):e._e(),e.phoneNumberFormVisible?r("Form",{attrs:{formData:e.phoneNumberForm},on:{CancelSendCodeSMS:function(t){return e.CancelSendCodeSMS(t)},qInputTemplateAction:function(t){return e.GenerateVerificationCode(t)}}}):e._e(),r("div",{directives:[{name:"show",rawName:"v-show",value:e.phoneNumberFormVisible,expression:"phoneNumberFormVisible"}],attrs:{id:"recaptcha-container"}}),r("br"),e.otpFormVisible?r("Form",{attrs:{formData:e.otpForm},on:{Submit:function(t){return e.Submit(t)},CancelSubmit:function(t){return e.CancelSubmit(t)}}}):e._e(),e._l(e.dialogs,(function(t){return r("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(r){e.$set(t,"isVisible",r)},expression:"dialog.isVisible"}},[r("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},o=[],s=(r("b7dd"),r("0012"),r("6212"),r("950c"),r("2bf3"),r("5b54"),r("ef92"),r("f69e"),r("ad58"),r("d93a"),r("9289")),l=r.n(s),c=r("549c"),u=r.n(c),m=r("52b5"),p=r.n(m),b=(r("1a43"),r("d38f"),r("c889"),r("0588")),f=r("82f4"),d=r("5dc2"),g=r("d4d7"),h=["Instructor","Student","Teacher","Lecturer","Proprietor","Principal","Vice Principal","Headmaster","Headmistress","Vice Chancellor","Member","Staff"],v={title:"Create User",qSelects:[{label:"User Type",value:"",type:"text",list:h.map((function(e,t){return{sn:t+1,id:e,value:e,label:e,type:e}})),actionName:"userTypeAction",visible:!0},{label:"School Name *",value:"",type:"text",list:[],actionName:"schoolNameAction",visible:!0}],qInputs:[{label:"First Name",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Last Name",name:"",type:"text",Template:{sn:1,iconName:"",visible:!1}},{label:"User Name",name:"",type:"text",Template:{sn:2,iconName:"",visible:!1}},{label:"Password",name:"",type:"password",Template:{sn:3,iconName:"visibility_off",visible:!0}}],qBtns:[{label:"Cancel",name:"CancelCreateUser",icon:"close",btnDisabled:!1},{label:"Next",name:"Next",icon:"navigate_next",btnDisabled:!1}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""},clearQSelects:function(){var e=0;for(e=0;e<this.qSelects.length;e++)this.qSelects[e].value="",this.qSelects[e].visible=!0,0!=e&&(this.qSelects[e].list=[])}},y={title:"Send Code SMS",qSelects:[{label:"Country",value:"",type:"text",list:g["a"],actionName:"countryAction",visible:!0}],qInputs:[{label:"Phone Number",name:"",type:"text",Template:{sn:0,iconName:"send",visible:!0}}],qBtns:[{label:"Cancel",name:"CancelSendCodeSMS",icon:"close",btnDisabled:!1}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""},clearQSelects:function(){var e=0;for(e=0;e<this.qSelects.length;e++)this.qSelects[e].value="",this.qSelects[e].visible=!0}},F={title:"Verify Code",qInputs:[{label:"Enter SMS Code",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"CancelSubmit",icon:"close",btnDisabled:!1},{label:"Submit",name:"Submit",icon:"save_alt",btnDisabled:!1}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""}},S=[{title:"Create User",isVisible:!1,message:"Do you want to create a user",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Create User Success",isVisible:!1,message:"User created successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Create User Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Send Code",isVisible:!1,message:"A verification code will be sent to this phone number",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Send Code Success",isVisible:!1,message:"Verification code sent successfully. Please click OK and enter the code",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Send Code Failure",isVisible:!1,message:"Invalid phone number",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Verify Code",isVisible:!1,message:"Verify code and complete registration",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Verify Code Success",isVisible:!1,message:"User registered successfully",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Verify Code Failure",isVisible:!1,message:"Registration failed. Verify your credentials",okayEvent:"okDialog",cancelEvent:"cancelDialog"}],q=r("5705"),N=r("4b38");function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=I(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw a}}}}function I(e,t){if(e){if("string"===typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(e,t):void 0}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var x={apiKey:"AIzaSyB9VzN87QcRpEbSegBYjZBTqigdJLkiBAc",authDomain:"lemongatetech.firebaseapp.com",databaseURL:"https://lemongatetech.firebaseio.com",projectId:"lemongatetech",storageBucket:"lemongatetech.appspot.com",messagingSenderId:"391787476785",appId:"1:391787476785:web:48fc551307c092ff8ae210"},D=(Object(N["a"])(x),Object(q["b"])()),E={components:{MessageBox:b["a"],Form:f["a"]},data:function(){return{registrationForm:v,dialogs:S,appVerifier:"",phoneNumberForm:y,otpForm:F,registrationFormVisible:!0,phoneNumberFormVisible:!1,otpFormVisible:!1,userExists:!1}},methods:{dialogFailureOrScuess:function(e,t){var r,n=this,i=-1,a=w(n.dialogs);try{for(a.s();!(r=a.n()).done;){var o=r.value;if(i++,o.title==e){n.dialogs[i].isVisible=t;break}}}catch(s){a.e(s)}finally{a.f()}},ShowOrHidePassword:function(e){var t=this,r=e.sn;"visibility_off"===t.registrationForm.qInputs[r].Template.iconName?(t.registrationForm.qInputs[r].Template.iconName="visibility",t.registrationForm.qInputs[r].type="text"):(t.registrationForm.qInputs[r].Template.iconName="visibility_off",t.registrationForm.qInputs[r].type="password")},GenerateVerificationCode:function(e){var t=this,r=e.sn;if(t.phoneNumberForm.qInputs[r].Template.visible=!1,console.log("phoneNumberFormVisible: ",t.phoneNumberFormVisible),t.phoneNumberForm.qInputs[r].name.length<10)return alert("Phone number can not be less than 10 digits"),void(t.phoneNumberForm.qInputs[r].Template.visible=!0);var n=t.phoneNumberForm.qInputs[r].name;if(t.phoneNumberForm.qInputs[r].name.length>10){var i=t.phoneNumberForm.qInputs[r].name.length-10;n=t.phoneNumberForm.qInputs[r].name.slice(i)}console.log("phone: ",n),console.log("Template: ",t.phoneNumberForm.qInputs[r].Template),"send"===t.phoneNumberForm.qInputs[r].Template.iconName&&(console.log("code: ",t.phoneNumberForm.qSelects[0].value.code),t.sendOtp(n,t.phoneNumberForm.qSelects[0].value.code,r))},Next:function(){var e=this;return u()(p.a.mark((function t(){var r;return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e,r.registrationForm.qBtns[1].btnDisabled=!0,t.next=4,r.userIsExist();case 4:case"end":return t.stop()}}),t)})))()},Submit:function(){var e,t=this,r=-1,n=w(t.dialogs);try{for(n.s();!(e=n.n()).done;){var i=e.value;if(r++,"Verify Code"==i.title){t.dialogs[r].isVisible=!0,t.otpForm.qBtns[1].btnDisabled=!0;break}}}catch(a){n.e(a)}finally{n.f()}},CancelCreateUser:function(){this.$router.push("/login_register")},CancelSendCodeSMS:function(){var e=this;e.registrationFormVisible=!0,e.phoneNumberFormVisible=!1,e.otpFormVisible=!1},CancelSubmit:function(){var e=this;e.registrationFormVisible=!1,e.phoneNumberFormVisible=!0,e.otpFormVisible=!1},cancelDialog:function(e){var t,r=this,n=!1,i=-1,a=w(r.dialogs);try{for(a.s();!(t=a.n()).done;){var o=t.value;if(i++,o.title===e){switch(r.dialogs[i].isVisible=!1,e){case"Create User":r.registrationForm.qBtns[0].btnDisabled=n,r.registrationForm.qBtns[1].btnDisabled=n;break;case"Send Code":r.phoneNumberForm.qBtns[0].btnDisabled=n;break;case"Verify Code":r.otpForm.qBtns[0].btnDisabled=n;break}break}}}catch(s){a.e(s)}finally{a.f()}},save:function(){var e=this;return u()(p.a.mark((function t(){var r,n,i,a,o,s,l;return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e,e.$store.getters["authenticationStore/IdentityModel"],n="user/create",i=r.registrationForm.qSelects[1].value,"Referral"===r.registrationForm.qSelects[0].value&&(i="CEO"),a={url:n,req:{firstName:r.registrationForm.qInputs[0].name,lastName:r.registrationForm.qInputs[1].name,userName:r.registrationForm.qInputs[2].name,password:r.registrationForm.qInputs[3].name,phoneNumber:r.phoneNumberForm.qInputs[0].name,userType:r.registrationForm.qSelects[0].value,countryCode:r.phoneNumberForm.qSelects[0].value.code,schoolId:i,createdBy:"me",confirmed:!1}},console.log("payload: ",a),t.next=9,Object(d["b"])(a);case 9:o=t.sent,s=o.data,s.message,l=s.success,r.dialogFailureOrScuess("Verify Code",!1),l?r.dialogFailureOrScuess("Verify Code Success",!0):r.dialogFailureOrScuess("Verify Code Failure",!0),r.otpForm.qBtns[1].btnDisabled=!1;case 14:case"end":return t.stop()}}),t)})))()},userIsExist:function(){var e=this;return u()(p.a.mark((function t(){var r,n,i,a,o,s,l,c,u;return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e,n="user/user-is-exist",i=r.registrationForm.qSelects[1].value,"Referral"===r.registrationForm.qSelects[0].value&&(i="CEO"),a={url:n,req:{firstName:r.registrationForm.qInputs[0].name,lastName:r.registrationForm.qInputs[1].name,userName:r.registrationForm.qInputs[2].name,password:r.registrationForm.qInputs[3].name,phoneNumber:r.phoneNumberForm.qInputs[0].name,userType:r.registrationForm.qSelects[0].value,schoolId:i}},console.log("payload: ",a),t.next=8,Object(d["b"])(a);case 8:if(o=t.sent,s=o.data,l=s.data,c=s.message,u=s.success,u){t.next=13;break}return alert(c),t.abrupt("return");case 13:r.userExists=l,console.log("context.userExists: ",r.userExists),r.userExists?alert("user already exist"):(r.registrationFormVisible=!1,r.phoneNumberFormVisible=!0,r.otpFormVisible=!1),r.registrationForm.qBtns[1].btnDisabled=!1;case 17:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return u()(p.a.mark((function r(){var n,i,a,o,s;return p.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=t,i=-1,a=w(n.dialogs),r.prev=3,a.s();case 5:if((o=a.n()).done){r.next=27;break}if(s=o.value,i++,s.title!==e){r.next=25;break}r.t0=e,r.next="Create User Success"===r.t0?12:"Verify Code"===r.t0?15:"Verify Code Success"===r.t0?18:23;break;case 12:return r.next=14,n.userIsExist();case 14:return r.abrupt("break",23);case 15:return r.next=17,n.verifyOtp();case 17:return r.abrupt("break",23);case 18:return n.registrationFormVisible=!1,n.phoneNumberFormVisible=!1,n.otpFormVisible=!1,t.$router.push("/login_register"),r.abrupt("break",23);case 23:return n.dialogs[i].isVisible=!1,r.abrupt("break",27);case 25:r.next=5;break;case 27:r.next=32;break;case 29:r.prev=29,r.t1=r["catch"](3),a.e(r.t1);case 32:return r.prev=32,a.f(),r.finish(32);case 35:case"end":return r.stop()}}),r,null,[[3,29,32,35]])})))()},userTypeAction:function(e){var t=this;console.log("payload: ",e),"Referral"===e.value?t.registrationForm.qSelects[1].visible=!1:t.registrationForm.qSelects[1].visible=!0},sendOtp:function(e,t,r){var n=this,i=t+e;console.log("phoneNumber: ",i);var a=n.appVerifier;console.log("appVerifier: ",a),Object(q["c"])(D,i,a).then((function(e){console.log("confirmationResult: ",e),n.registrationFormVisible=!1,n.phoneNumberFormVisible=!1,n.otpFormVisible=!0,n.phoneNumberForm.qInputs[r].Template.visible=!0,window.confirmationResult=e,alert("SMS sent")})).catch((function(e){console.log("error: ",e),alert("Error ! SMS not sent")}))},verifyOtp:function(){var e=this;return u()(p.a.mark((function t(){var r,n;return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e,n=r.otpForm.qInputs[0].name,console.log("verification code: ",n),window.confirmationResult.confirm(n).then((function(e){var t=e.user;console.log("user: ",t),r.save()})).catch((function(e){console.log("User couldn't sign in (bad verification code?). ",e)}));case 4:case"end":return t.stop()}}),t)})))()},initReCaptcha:function(){var e=this;setTimeout((function(){var t=e;window.recaptchaVerifier=new q["a"]("recaptcha-container",{size:"normal",callback:function(e){}},D),t.appVerifier=window.recaptchaVerifier}),1e3)}},created:function(){var e=this;e.registrationForm.clearQInputs(),e.registrationForm.clearQSelects(),e.phoneNumberForm.clearQInputs(),e.phoneNumberForm.clearQInputs(),e.otpForm.clearQInputs(),e.registrationForm.qSelects[1].list=this.$store.getters["schoolStore/schools"].map((function(e){return C(C({},e),{},{type:e.schoolName})})),e.initReCaptcha()}},O=E,T=r("a6c2"),j=r("ec6d"),B=r("63c1"),P=r.n(B),A=Object(T["a"])(O,a,o,!1,null,null,null),U=A.exports;P()(A,"components",{QDialog:j["a"]});var _=r("30f8"),M={computed:{isMobile:function(){var e=window.innerWidth;return e<700}},components:{register:U,TorpaLandingPage:_["default"]}},Q=M,R=Object(T["a"])(Q,n,i,!1,null,null,null);t["default"]=R.exports}}]);