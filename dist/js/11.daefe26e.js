(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{b4c3:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():r("Form",{attrs:{formData:e.form},on:{Update:function(t){return e.Update(t)},Cancel:function(t){return e.Cancel(t)},onFileSelected:function(t){return e.onFileSelected(t)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[r("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[r("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return r("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(r){e.$set(t,"isVisible",r)},expression:"dialog.isVisible"}},[r("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},i=[],a=(r("23bf"),r("06db"),r("8a81"),r("1c4c"),r("5df3"),r("cadf"),r("ac6a"),r("456d"),r("d25f"),r("9986"),r("8e6e"),r("c47a")),s=r.n(a),o=r("fa84"),l=r.n(o),c=r("967e"),u=r.n(c),f=(r("7f7f"),r("9bff")),d=r("9437"),m=r("39b2"),p=r("7ac8"),g={title:"Update User",qInputs:[{label:"First Name *",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Last Name *",name:"",type:"text",Template:{sn:1,iconName:"",visible:!1}},{label:"User Name *",name:"",type:"text",Template:{sn:2,iconName:"",visible:!1}}],qFiles:[{label:"User Picture",name:"",type:"file",selectedFile:null,showPreview:!1,imagePreview:"",files:[],Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close",btnDisabled:!1},{label:"Update",name:"Update",icon:"update",btnDisabled:!1}],qDates:[],GroupedCheckBoxes:[]},h=[{title:"Update User",isVisible:!1,message:"Do you want to update a user",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"User updated successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=y(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,o=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw a}}}}function y(e,t){if(e){if("string"===typeof e)return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?F(e,t):void 0}}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var S={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:f["a"],Form:d["a"]},data:function(){return{selectedUser:{},form:g,dialogs:h,imageUrl:"",fileName:"",originalFileName:"",fileUrl:"",isNewPicture:!1}},methods:{Update:function(){var e,t=this,r=-1,n=w(t.dialogs);try{for(n.s();!(e=n.n()).done;){var i=e.value;if(r++,"Update User"==i.title){t.dialogs[r].isVisible=!0;break}}}catch(a){n.e(a)}finally{n.f()}},Cancel:function(){var e=this;e.setRoutes()},cancelDialog:function(e){var t,r=this,n=-1,i=w(r.dialogs);try{for(i.s();!(t=i.n()).done;){var a=t.value;if(n++,a.title===e){r.dialogs[n].isVisible=!1;break}}}catch(s){i.e(s)}finally{i.f()}},onFileSelected:function(e){var t=this;t.form.qFiles[0].selectedFile=e.selectedFile;var r=new FileReader,n="image";r.addEventListener("load",function(){t.form.qFiles[0].showPreview=!1,t.form.qFiles[0].showVideoPreview=!1,t.isNewPicture=!0,"video"===n?(t.form.qFiles[0].showVideoPreview=!0,t.form.qFiles[0].imagePreview=r.result):(t.form.qFiles[0].showPreview=!0,t.form.qFiles[0].imagePreview=r.result,console.log("context.form.qFiles[0].showPreview: ",t.form.qFiles[0].showPreview))}.bind(t),!1),t.form.qFiles[0].selectedFile&&(/\.(jpe?g|png|gif)$/i.test(t.form.qFiles[0].selectedFile.name)||/\.(pdf|doc)$/i.test(t.form.qFiles[0].selectedFile.name)?(n="image",t.form.qFiles[0].fileType=n,r.readAsDataURL(t.form.qFiles[0].selectedFile)):/\.(ogg|mp4|webm)$/i.test(t.form.qFiles[0].selectedFile.name)?(n="video",t.form.qFiles[0].fileType=n,r.readAsDataURL(t.form.qFiles[0].selectedFile)):alert("Wrong file format. Only supports .jpg, .jpeg, .png, .gif, .mp4, .ogg, .webm, .pdf or .doc"))},uploadFile:function(){var e=this;return l()(u.a.mark((function t(){var r,n,i,a,s;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e,n=new FormData,console.log("selectedFile: ",r.form.qFiles[0].selectedFile),n.append("file",r.form.qFiles[0].selectedFile),i="logo/upload",a={url:i,req:n},console.log("payload: ",a),e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=10,p["c"](a);case 10:s=t.sent,r.fileUrl=s.data.url,r.fileName=s.data.fileName,r.originalFileName=s.data.originalFileName,""===r.fileUrl&&(r.isNewPicture=!1),e.$store.commit("authenticationStore/setShowSpinner",!1),console.log("fileUrl: ",r.fileUrl);case 17:case"end":return t.stop()}}),t)})))()},save:function(){var e=this;return l()(u.a.mark((function t(){var r,n,i,a,s,o,l,c;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e,e.$store.getters["authenticationStore/IdentityModel"],n="user/".concat(r.selectedUser.id),i=r.selectedUser.schoolId,a={url:n,req:b(b({},r.selectedUser),{},{firstName:r.form.qInputs[0].name,lastName:r.form.qInputs[1].name,userName:r.form.qInputs[2].name,fileUrl:r.fileUrl,fileName:r.fileName,originalFileName:r.originalFileName,schoolId:i})},console.log("payload: ",a),e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=9,Object(m["c"])(a);case 9:s=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),o=s.data,l=o.message,c=o.success,c?(e.$store.commit("authenticationStore/setIdentityModel",a.req),r.dialogs[1].isVisible=!0):(r.dialogs[2].message=l,r.dialogs[2].isVisible=!0);case 13:case"end":return t.stop()}}),t)})))()},uploadPicSave:function(){var e=this;return l()(u.a.mark((function t(){var r;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e,!r.isNewPicture){t.next=4;break}return t.next=4,r.uploadFile();case 4:return t.next=6,r.save();case 6:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return l()(u.a.mark((function r(){var n,i,a,s,o;return u.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:console.log("payload: ",e),n=t,i=-1,a=w(n.dialogs),r.prev=4,a.s();case 6:if((s=a.n()).done){r.next=22;break}if(o=s.value,i++,o.title!==e){r.next=20;break}r.t0=e,r.next="Update User"===r.t0?13:"Success"===r.t0?16:18;break;case 13:return r.next=15,n.uploadPicSave();case 15:return r.abrupt("break",18);case 16:return n.setRoutes(),r.abrupt("break",18);case 18:return n.dialogs[i].isVisible=!1,r.abrupt("break",22);case 20:r.next=6;break;case 22:r.next=27;break;case 24:r.prev=24,r.t1=r["catch"](4),a.e(r.t1);case 27:return r.prev=27,a.f(),r.finish(27);case 30:case"end":return r.stop()}}),r,null,[[4,24,27,30]])})))()},setRoutes:function(){var e=this.$store.getters["authenticationStore/IdentityModel"],t="";if("CEO"===e.schoolId)t="/super-admin-user-landing";else switch(e.userType){case"Admin":t="/admin";break;case"Student":t="/student";break;case"Teacher":t="/teacher";break}this.$router.push(t)}},created:function(){var e=this;e.selectedUser=this.$store.getters["userStore/selectedUser"],e.form.qInputs[0].name=e.selectedUser.firstName,e.form.qInputs[1].name=e.selectedUser.lastName,e.form.qInputs[2].name=e.selectedUser.userName,e.fileUrl=e.selectedUser.fileUrl,e.form.qFiles[0].showPreview=!0,e.form.qFiles[0].imagePreview=e.selectedUser.fileUrl,this.$store.commit("authenticationStore/setPageTitle","Update User")}},U=S,k=r("2877"),q=r("0d59"),x=r("24e8"),N=r("eebe"),P=r.n(N),D=Object(k["a"])(U,n,i,!1,null,null,null);t["default"]=D.exports;P()(D,"components",{QSpinner:q["a"],QDialog:x["a"]})}}]);