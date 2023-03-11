(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{"1cf4":function(e,i,a){"use strict";var t=a("7811"),s=a.n(t);s.a},7811:function(e,i,a){},b616:function(e,i,a){"use strict";a.r(i);var t=function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("q-layout",[a("q-page-container",[a("q-page",{staticClass:"flex flex-center bg-primary"},[a("q-card",{staticClass:"personal-data-form",style:(e.$q.platform.is.mobile,{width:"90%",height:"95%"})},[a("q-card-section",{staticClass:"bg-accent text-primary"},[a("div",{staticClass:"row no-wrap items-center"},[a("div",{staticClass:"col text-h6 ellipsis"},[e._v("\n        Administratot Data\n      ")])])]),a("q-card-section",[a("q-form",{staticClass:"q-gutter-md"},[a("q-input",{attrs:{outlined:"",label:"First Name *","lazy-rules":""},model:{value:e.AdminDTO.firstName,callback:function(i){e.$set(e.AdminDTO,"firstName",i)},expression:"AdminDTO.firstName"}}),a("q-input",{attrs:{outlined:"",label:"Last Name *","lazy-rules":""},model:{value:e.AdminDTO.lastName,callback:function(i){e.$set(e.AdminDTO,"lastName",i)},expression:"AdminDTO.lastName"}}),a("q-input",{attrs:{outlined:"",label:"Username *","lazy-rules":""},model:{value:e.AdminDTO.username,callback:function(i){e.$set(e.AdminDTO,"username",i)},expression:"AdminDTO.username"}}),a("q-input",{attrs:{type:e.passwordType,outlined:"",label:"Password *","lazy-rules":""},scopedSlots:e._u([e.isVisible?{key:"append",fn:function(){return[a("q-icon",{staticClass:"bg-primary text-accent",attrs:{name:"visibility"},on:{click:e.togglePasswordVisibility}})]},proxy:!0}:{key:"append",fn:function(){return[a("q-icon",{staticClass:"bg-primary text-accent",attrs:{name:"visibility_off"},on:{click:e.togglePasswordVisibility}})]},proxy:!0}],null,!0),model:{value:e.AdminDTO.password,callback:function(i){e.$set(e.AdminDTO,"password",i)},expression:"AdminDTO.password"}}),a("q-select",{attrs:{color:"accent",outlined:"","label-color":"accent",options:e.typesOfAdmin,label:"Administrator"},on:{input:e.onItemValueChanged},model:{value:e.typeOfAdmin,callback:function(i){e.typeOfAdmin=i},expression:"typeOfAdmin"}}),a("div",{staticClass:"col-12"},[a("q-btn",{staticClass:"text-primary bg-accent",staticStyle:{width:"95%"},attrs:{label:"Register",type:"button"},on:{click:e.register}})],1)],1)],1)],1),a("q-dialog",{model:{value:e.isUploadFileDialog,callback:function(i){e.isUploadFileDialog=i},expression:"isUploadFileDialog"}},[a("MessageBox",{attrs:{title:"Upload Photo",message:"Do you want to upload photo?",okayEvent:"okayUploadFile",cancelEvent:"cancelUploadFile"},on:{okayUploadFile:function(i){return e.okayUploadFile(i)},cancelUploadFile:function(i){return e.cancelUploadFile(i)}}})],1),a("q-dialog",{model:{value:e.isUploadFileSuccessDialog,callback:function(i){e.isUploadFileSuccessDialog=i},expression:"isUploadFileSuccessDialog"}},[a("MessageBox",{attrs:{title:"Success",message:"Photo uploaded successfully.",okayEvent:"okayUploadFileSucess",cancelEvent:"cancelUploadFileSuccess"},on:{okayUploadFileSucess:function(i){return e.okayUploadFileSucess(i)},cancelUploadFileSuccess:function(i){return e.cancelUploadFileSuccess(i)}}})],1),a("q-dialog",{model:{value:e.isUploadFileFailureDialog,callback:function(i){e.isUploadFileFailureDialog=i},expression:"isUploadFileFailureDialog"}},[a("MessageBox",{attrs:{title:"Failure",message:e.message+".",okayEvent:"okayUploadFileFailure",cancelEvent:"cancelUploadFileFailure"},on:{okayUploadFileFailure:function(i){return e.okayUploadFileFailure(i)},cancelUploadFileFailure:function(i){return e.cancelUploadFileFailure(i)}}})],1),a("q-dialog",{model:{value:e.isRegisterDialog,callback:function(i){e.isRegisterDialog=i},expression:"isRegisterDialog"}},[a("MessageBox",{attrs:{title:"Register",message:"Do you want to register an administrator?",okayEvent:"savePersonalData",cancelEvent:"cancelRegistration"},on:{cancelRegistration:function(i){return e.cancelRegistration(i)},savePersonalData:function(i){return e.savePersonalData(i)}}})],1),a("q-dialog",{model:{value:e.isRegisterSuccessDialog,callback:function(i){e.isRegisterSuccessDialog=i},expression:"isRegisterSuccessDialog"}},[a("MessageBox",{attrs:{title:"Success",message:"Your registration was successful!",okayEvent:"RegistrationSuccessOkay",cancelEvent:"RegistrationSuccessCancel"},on:{RegistrationSuccessCancel:function(i){return e.RegistrationSuccessCancel(i)},RegistrationSuccessOkay:function(i){return e.RegistrationSuccessOkay(i)}}})],1),a("q-dialog",{model:{value:e.isRegisterFailureDialog,callback:function(i){e.isRegisterFailureDialog=i},expression:"isRegisterFailureDialog"}},[a("MessageBox",{attrs:{title:"Error",message:e.message+".",okayEvent:"RegistrationFailureOkay",cancelEvent:"RegistrationFailureCancel"},on:{RegistrationFailureCancel:function(i){return e.RegistrationFailureCancel(i)},RegistrationFailureOkay:function(i){return e.RegistrationFailureOkay(i)}}})],1)],1)],1)],1)},s=[],o=a("fa84"),l=a.n(o),n=a("967e"),r=a.n(n),c=a("9bff"),u=a("0d91"),d={computed:{isSuperAdmin:function(){return this.$store.getters["administratorStore/isSuperAdmin"]},PhotoDto:function(){return this.$store.getters["administratorStore/PhotoDto"]}},components:{MessageBox:c["a"]},data:function(){return{passwordType:"password",isVisible:!1,typesOfAdmin:["Accounting","Registration","CEO"],typeOfAdmin:"Registration",AdminDTO:{firstName:"",lastName:"",userName:"",password:"",userType:"Admin",designation:"None"},isRegisterDialog:!1,isRegisterSuccessDialog:!1,isRegisterFailureDialog:!1,message:"",SelectedFile:null,files:null,isUploadFileDialog:!1,isUploadFileSuccessDialog:!1,isUploadFileFailureDialog:!1}},props:{theme_color:{type:String,default:"#10731f"}},methods:{onItemValueChanged:function(){},onFileSelected:function(e){var i=this;i.files=e.target.files,i.SelectedFile=e.target.files[0]},UploadAction:function(){var e=this;e.isUploadFileDialog=!0},cancelUploadFile:function(){var e=this;e.isUploadFileDialog=!1},okayUploadFile:function(){var e=this;return l()(r.a.mark((function i(){var a,t,s,o,l,n,c,d,g;return r.a.wrap((function(i){while(1)switch(i.prev=i.next){case 0:for(s in a=e,t=new FormData,a.files)t.append("images[]",a.files[s]);return o="".concat(u["r"],"/uploadphoto"),i.next=6,e.$store.dispatch("administratorStore/UploadPhoto",{request:t,url:o});case 6:l=i.sent,n=l.data,c=n.data,d=n.message,g=n.success,a.isUploadFileDialog=!1,g?(e.$store.commit("administratorStore/UploadFile",c),a.isUploadFileSuccessDialog=!0):(a.isUploadFileFailureDialog=!0,a.message=d);case 10:case"end":return i.stop()}}),i)})))()},cancelUploadFileSuccess:function(){var e=this;e.isUploadFileSuccessDialog=!1},okayUploadFileSucess:function(){var e=this;e.isUploadFileSuccessDialog=!1},cancelUploadFileFailure:function(){var e=this;e.isUploadFileFailureDialog=!1},okayUploadFileFailure:function(){var e=this;e.isUploadFileFailureDialog=!1},togglePasswordVisibility:function(){var e=this;e.isVisible?(e.isVisible=!1,e.passwordType="password"):(e.isVisible=!0,e.passwordType="text")},register:function(){var e=this;e.isRegisterDialog=!0},savePersonalData:function(){var e=this;return l()(r.a.mark((function i(){var a,t,s,o,l,n;return r.a.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=e,a.AdminDTO.designation=a.typeOfAdmin,""!=a.PhotoDto.base64String&&void 0!=a.PhotoDto.base64String&&(a.AdminDTO.base64String=a.PhotoDto.base64String),i.next=5,e.$store.dispatch("administratorStore/CreateAdministrator",a.AdminDTO);case 5:t=i.sent,s=t.data,o=s.data,l=s.message,n=s.success,a.isRegisterDialog=!1,a.message=l,n?(e.$store.commit("administratorStore/CreateAdministrator",o),e.$store.commit("authenticationStore/AddUserPhoto",o),a.isRegisterSuccessDialog=!0):a.isRegisterFailureDialog=!0;case 10:case"end":return i.stop()}}),i)})))()},cancelRegistration:function(){var e=this;e.isRegisterDialog=!1},RegistrationSuccessOkay:function(){var e=this;e.isRegisterSuccessDialog=!1,1==e.isSuperAdmin&&(this.$router.push("/administrators"),this.$store.commit("administratorStore/UpdateIsSuperAdmin",!1))},RegistrationSuccessCancel:function(){var e=this;e.isRegisterSuccessDialog=!1,this.$router.push("/administrators"),1==e.isSuperAdmin&&(this.$router.push("/administrators"),this.$store.commit("administratorStore/UpdateIsSuperAdmin",!1))},RegistrationFailureOkay:function(){var e=this;e.isRegisterFailureDialog=!1},RegistrationFailureCancel:function(){var e=this;e.isRegisterFailureDialog=!1}}},g=d,p=(a("1cf4"),a("2877")),m=a("4d5a"),f=a("09e3"),F=a("9989"),D=a("f09f"),y=a("a370"),S=a("0378"),v=a("9c40"),h=a("27f9"),U=a("0016"),b=a("ddd8"),k=a("24e8"),R=a("eebe"),A=a.n(R),w=Object(p["a"])(g,t,s,!1,null,null,null);i["default"]=w.exports;A()(w,"components",{QLayout:m["a"],QPageContainer:f["a"],QPage:F["a"],QCard:D["a"],QCardSection:y["a"],QForm:S["a"],QBtn:v["a"],QInput:h["a"],QIcon:U["a"],QSelect:b["a"],QDialog:k["a"]})}}]);