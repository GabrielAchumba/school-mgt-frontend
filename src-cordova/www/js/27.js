(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{6019:function(e,t,a){"use strict";var i=a("786e"),s=a.n(i);s.a},"786e":function(e,t,a){},"905b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",[a("q-page-container",[a("q-page",{staticClass:"flex flex-center bg-primary"},[a("q-card",{staticClass:"personal-data-form",style:(e.$q.platform.is.mobile,{width:"90%",height:"95%"})},[a("q-card-section",{staticClass:"text-primary bg-accent"},[a("div",{staticClass:"row no-wrap items-center"},[a("div",{staticClass:"col text-h6 ellipsis"},[e._v("\n        Administrator Details\n      ")])])]),a("q-card-section",[a("q-form",{staticClass:"q-gutter-md"},[a("div",{staticClass:"row text-center flex flex-center q-pb-lg"},[e.isSuperAdmin?e._e():a("div",{staticClass:"col-md-6 col-lg-16 col-sx-6 col-sm-6 q-gutter-lg q-px-xl q-pb-none q-ma-none"},[a("input",{staticClass:"bg-accent text-primary",attrs:{type:"file"},on:{change:e.onFileSelected}})]),e.isSuperAdmin?e._e():a("div",{staticClass:"col-md-6 col-lg-6 col-sx-6 col-sm-6 q-gutter-lg q-px-xl q-pb-none q-ma-none"},[a("q-btn",{staticClass:"text-capitalize bg-accent text-primary",staticStyle:{width:"75px"},attrs:{exact:"",size:"sm",dense:"",label:"Upload",type:"button"},on:{click:e.UploadAction}})],1)]),a("q-input",{attrs:{outlined:"",label:"First Name *","lazy-rules":""},model:{value:e.AdministratorDTO.firstName,callback:function(t){e.$set(e.AdministratorDTO,"firstName",t)},expression:"AdministratorDTO.firstName"}}),a("q-input",{attrs:{outlined:"",label:"Last Name *","lazy-rules":""},model:{value:e.AdministratorDTO.lastName,callback:function(t){e.$set(e.AdministratorDTO,"lastName",t)},expression:"AdministratorDTO.lastName"}}),a("q-input",{attrs:{outlined:"",label:"Username *","lazy-rules":""},model:{value:e.AdministratorDTO.userName,callback:function(t){e.$set(e.AdministratorDTO,"userName",t)},expression:"AdministratorDTO.userName"}}),e.isSuperAdmin?a("q-select",{attrs:{color:"accent",outlined:"","label-color":"accent",options:e.typesOfAdmin,label:"Administrator"},on:{input:e.onItemValueChanged},model:{value:e.typeOfAdmin,callback:function(t){e.typeOfAdmin=t},expression:"typeOfAdmin"}}):e._e(),a("div",{staticClass:"col-12"},[a("q-btn",{staticClass:"text-primary bg-accent",staticStyle:{width:"95%"},attrs:{label:"Update",type:"button",size:"sm","no-caps":""},on:{click:e.updateData}})],1)],1)],1)],1),a("q-dialog",{model:{value:e.isUploadFileDialog,callback:function(t){e.isUploadFileDialog=t},expression:"isUploadFileDialog"}},[a("MessageBox",{attrs:{title:"Upload Photo",message:"Do you want to upload photo?",okayEvent:"okayUploadFile",cancelEvent:"cancelUploadFile"},on:{okayUploadFile:function(t){return e.okayUploadFile(t)},cancelUploadFile:function(t){return e.cancelUploadFile(t)}}})],1),a("q-dialog",{model:{value:e.isUploadFileSuccessDialog,callback:function(t){e.isUploadFileSuccessDialog=t},expression:"isUploadFileSuccessDialog"}},[a("MessageBox",{attrs:{title:"Success",message:"Photo uploaded successfully.",okayEvent:"okayUploadFileSucess",cancelEvent:"cancelUploadFileSuccess"},on:{okayUploadFileSucess:function(t){return e.okayUploadFileSucess(t)},cancelUploadFileSuccess:function(t){return e.cancelUploadFileSuccess(t)}}})],1),a("q-dialog",{model:{value:e.isUploadFileFailureDialog,callback:function(t){e.isUploadFileFailureDialog=t},expression:"isUploadFileFailureDialog"}},[a("MessageBox",{attrs:{title:"Failure",message:e.message+".",okayEvent:"okayUploadFileFailure",cancelEvent:"cancelUploadFileFailure"},on:{okayUploadFileFailure:function(t){return e.okayUploadFileFailure(t)},cancelUploadFileFailure:function(t){return e.cancelUploadFileFailure(t)}}})],1),a("q-dialog",{model:{value:e.isUpdateDialog,callback:function(t){e.isUpdateDialog=t},expression:"isUpdateDialog"}},[a("MessageBox",{attrs:{title:"Update",message:"Do you want to update administrator details?",okayEvent:"update",cancelEvent:"cancelUpdate"},on:{cancelUpdate:function(t){return e.cancelUpdate(t)},update:function(t){return e.update(t)}}})],1),a("q-dialog",{model:{value:e.isUpdateSuccessDialog,callback:function(t){e.isUpdateSuccessDialog=t},expression:"isUpdateSuccessDialog"}},[a("MessageBox",{attrs:{title:"Success",message:"Administrator details updated successfully!",okayEvent:"UpdateSuccessOkay",cancelEvent:"UpdateSuccessCancel"},on:{UpdateSuccessCancel:function(t){return e.UpdateSuccessCancel(t)},UpdateSuccessOkay:function(t){return e.UpdateSuccessOkay(t)}}})],1),a("q-dialog",{model:{value:e.isUpdateFailureDialog,callback:function(t){e.isUpdateFailureDialog=t},expression:"isUpdateFailureDialog"}},[a("MessageBox",{attrs:{title:"Error",message:e.message+".",okayEvent:"UpdateFailureOkay",cancelEvent:"UpdateFailureCancel"},on:{UpdateFailureCancel:function(t){return e.UpdateFailureCancel(t)},UpdateFailureOkay:function(t){return e.UpdateFailureOkay(t)}}})],1)],1)],1)],1)},s=[],o=(a("ef92"),a("0012"),a("f69e"),a("ad58"),a("d93a"),a("9289")),n=a.n(o),r=a("549c"),l=a.n(r),c=a("52b5"),u=a.n(c),d=a("0588"),p=a("b985"),m=a("5dc2");function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var U={computed:{SelectedAdmin:function(){return this.$store.getters["administratorStore/SelectedAdmin"]},isSuperAdmin:function(){return this.$store.getters["administratorStore/isSuperAdmin"]},IdentityModel:function(){return this.$store.getters["authenticationStore/IdentityModel"]},PhotoDto:function(){return this.$store.getters["administratorStore/PhotoDto"]}},components:{MessageBox:d["a"]},data:function(){return{AdministratorDTO:{firstName:"",lastName:"",username:""},isUpdateDialog:!1,isUpdateSuccessDialog:!1,isUpdateFailureDialog:!1,typesOfAdmin:["Accounting","Registration","CEO"],typeOfAdmin:"Registration",message:"",SelectedFile:null,files:null,isUploadFileDialog:!1,isUploadFileSuccessDialog:!1,isUploadFileFailureDialog:!1}},props:{theme_color:{type:String,default:"rgb(0, 163, 82)"}},methods:{onItemValueChanged:function(){},onFileSelected:function(e){var t=this;t.files=e.target.files,t.SelectedFile=e.target.files[0]},UploadAction:function(){var e=this;e.isUploadFileDialog=!0},cancelUploadFile:function(){var e=this;e.isUploadFileDialog=!1},okayUploadFile:function(){var e=this;return l()(u.a.mark((function t(){var a,i,s,o,n,r,l,c,d;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(s in a=e,i=new FormData,a.files)i.append("images[]",a.files[s]);return o="".concat(p["r"],"/uploadphoto"),t.next=6,e.$store.dispatch("administratorStore/UploadPhoto",{request:i,url:o});case 6:n=t.sent,r=n.data,l=r.data,c=r.message,d=r.success,a.isUploadFileDialog=!1,d?(e.$store.commit("administratorStore/UploadFile",l),a.isUploadFileSuccessDialog=!0):(a.isUploadFileFailureDialog=!0,a.message=c);case 10:case"end":return t.stop()}}),t)})))()},cancelUploadFileSuccess:function(){var e=this;e.isUploadFileSuccessDialog=!1},okayUploadFileSucess:function(){var e=this;e.isUploadFileSuccessDialog=!1},cancelUploadFileFailure:function(){var e=this;e.isUploadFileFailureDialog=!1},okayUploadFileFailure:function(){var e=this;e.isUploadFileFailureDialog=!1},updateData:function(){var e=this;e.isUpdateDialog=!0},update:function(){var e=this;return l()(u.a.mark((function t(){var a,i,s,o,n,r,l;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e,""!==a.AdministratorDTO.firstName){t.next=4;break}return alert("Enter your first name"),t.abrupt("return");case 4:if(""!==a.AdministratorDTO.lastName){t.next=7;break}return alert("Enter your last name"),t.abrupt("return");case 7:if(""!==a.AdministratorDTO.userName){t.next=10;break}return alert("Enter your username"),t.abrupt("return");case 10:return""!=a.PhotoDto.base64String&&void 0!=a.PhotoDto.base64String&&(a.AdministratorDTO.base64String=a.PhotoDto.base64String),0==a.isSuperAdmin&&(a.AdministratorDTO.contributorId=a.IdentityModel.id),i={url:"".concat(p["r"],"/updateadministratordto/")+a.AdministratorDTO.contributorId,req:a.AdministratorDTO},t.next=15,Object(m["c"])(i);case 15:s=t.sent,o=s.data,n=o.data,r=o.message,l=o.success,a.isUpdateDialog=!1,a.message=r,l?(a.isUpdateSuccessDialog=!0,e.$store.commit("authenticationStore/AddUserPhoto",n)):a.isUpdateFailureDialog=!0;case 20:case"end":return t.stop()}}),t)})))()},cancelUpdate:function(){var e=this;e.isUpdateDialog=!1},UpdateSuccessOkay:function(){var e=this;e.isUpdateSuccessDialog=!1,1==e.isSuperAdmin&&(this.$router.push("/administrators"),this.$store.commit("administratorStore/UpdateIsSuperAdmin",!1))},UpdateSuccessCancel:function(){var e=this;e.isUpdateSuccessDialog=!1,1==e.isSuperAdmin&&(this.$router.push("/administrators"),this.$store.commit("administratorStore/UpdateIsSuperAdmin",!1))},UpdateFailureOkay:function(){var e=this;e.isUpdateFailureDialog=!1},UpdateFailureCancel:function(){var e=this;e.isUpdateFailureDialog=!1}},created:function(){var e=this;return l()(u.a.mark((function t(){var a,i,s,o,n;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e,console.log("context.isSuperAdmin: ",a.isSuperAdmin),1!=a.isSuperAdmin){t.next=6;break}a.AdministratorDTO=f({},a.SelectedAdmin),t.next=13;break;case 6:return i={url:"".concat(p["r"],"/").concat(a.IdentityModel.id),req:{}},t.next=9,Object(m["a"])(i);case 9:s=t.sent,o=s.data,n=o.data,o.message,o.success,console.log("contributor: ",n),a.AdministratorDTO=f({},n);case 13:case"end":return t.stop()}}),t)})))()}},F=U,D=(a("6019"),a("a6c2")),S=a("f624"),y=a("ddc7"),b=a("505d"),h=a("5ce7"),v=a("7006"),O=a("3548"),k=a("ef9c"),x=a("a3be"),A=a("f636"),q=a("ec6d"),w=a("63c1"),C=a.n(w),E=Object(D["a"])(F,i,s,!1,null,null,null);t["default"]=E.exports;C()(E,"components",{QLayout:S["a"],QPageContainer:y["a"],QPage:b["a"],QCard:h["a"],QCardSection:v["a"],QForm:O["a"],QBtn:k["a"],QInput:x["a"],QSelect:A["a"],QDialog:q["a"]})}}]);