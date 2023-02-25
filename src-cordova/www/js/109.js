(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[109],{2475:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():n("Form",{attrs:{formData:e.form},on:{Create:function(t){return e.Create(t)},Cancel:function(t){return e.Cancel(t)},userTypeAction:function(t){return e.userTypeAction(t)},onFileSelected:function(t){return e.onFileSelected(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},i=[],a=(n("d38f"),n("b7dd"),n("0012"),n("6212"),n("950c"),n("2bf3"),n("5b54"),n("f69e"),n("ad58"),n("d93a"),n("9289")),s=n.n(a),o=n("549c"),l=n.n(o),c=n("52b5"),u=n.n(c),f=(n("1a43"),n("ef92"),n("c889"),n("0588")),m=n("82f4"),d=n("0601"),p=n("5dc2"),g={title:"Create User",qSelects:[{label:"Designation *",value:"",type:"text",list:[],actionName:"designationAction",visible:!0}],qInputs:[{label:"First Name *",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Last Name *",name:"",type:"text",Template:{sn:1,iconName:"",visible:!1}},{label:"User Name *",name:"",type:"text",Template:{sn:2,iconName:"",visible:!1}},{label:"Password *",name:"",type:"text",Template:{sn:3,iconName:"",visible:!1}}],qFiles:[{label:"User Picture",name:"",type:"file",selectedFile:null,showPreview:!1,imagePreview:"",files:[],Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close",btnDisabled:!1},{label:"Create",name:"Create",icon:"add",btnDisabled:!1}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""},clearQSelects:function(){var e=0;for(e=0;e<this.qSelects.length;e++)this.qSelects[e].value="",this.qSelects[e].visible=!0,0!=e&&(this.qSelects[e].list=[])}},h=[{title:"Create User",isVisible:!1,message:"Do you want to create a user",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"User created successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=y(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw a}}}}function y(e,t){if(e){if("string"===typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var q={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:f["a"],Form:m["a"]},data:function(){return{form:g,dialogs:h,fileUrl:"",fileName:"",originalFileName:"",isNewPicture:!1}},methods:{Create:function(){var e,t=this,n=-1,r=w(t.dialogs);try{for(r.s();!(e=r.n()).done;){var i=e.value;if(n++,"Create User"==i.title){t.dialogs[n].isVisible=!0,t.form.qBtns[1].btnDisabled=!0;break}}}catch(a){r.e(a)}finally{r.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-user-landing"):this.$router.push("/user-landing")},cancelDialog:function(e){var t,n=this,r=-1,i=w(n.dialogs);try{for(i.s();!(t=i.n()).done;){var a=t.value;if(r++,a.title===e){n.dialogs[r].isVisible=!1;break}}}catch(s){i.e(s)}finally{i.f()}n.form.qBtns[0].btnDisabled=!1,n.form.qBtns[1].btnDisabled=!1},onFileSelected:function(e){var t=this;t.form.qFiles[0].selectedFile=e.selectedFile;var n=new FileReader,r="image";n.addEventListener("load",function(){t.form.qFiles[0].showPreview=!1,t.form.qFiles[0].showVideoPreview=!1,t.isNewPicture=!0,"video"===r?(t.form.qFiles[0].showVideoPreview=!0,t.form.qFiles[0].imagePreview=n.result):(t.form.qFiles[0].showPreview=!0,t.form.qFiles[0].imagePreview=n.result)}.bind(t),!1),t.form.qFiles[0].selectedFile&&(/\.(jpe?g|png|gif)$/i.test(t.form.qFiles[0].selectedFile.name)||/\.(pdf|doc)$/i.test(t.form.qFiles[0].selectedFile.name)?(r="image",t.form.qFiles[0].fileType=r,n.readAsDataURL(t.form.qFiles[0].selectedFile)):/\.(ogg|mp4|webm)$/i.test(t.form.qFiles[0].selectedFile.name)?(r="video",t.form.qFiles[0].fileType=r,n.readAsDataURL(t.form.qFiles[0].selectedFile)):alert("Wrong file format. Only supports .jpg, .jpeg, .png, .gif, .mp4, .ogg, .webm, .pdf or .doc"))},uploadFile:function(){var e=this;return l()(u.a.mark((function t(){var n,r,i,a,s;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,r=new FormData,console.log("selectedFile: ",n.form.qFiles[0].selectedFile),r.append("file",n.form.qFiles[0].selectedFile),i="logo/upload",a={url:i,req:r},console.log("payload: ",a),e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=10,d["c"](a);case 10:s=t.sent,n.fileUrl=s.data.url,n.fileName=s.data.fileName,n.originalFileName=s.data.originalFileName,e.$store.commit("authenticationStore/setShowSpinner",!1),console.log("fileUrl: ",n.fileUrl);case 16:case"end":return t.stop()}}),t)})))()},save:function(){var e=this;return l()(u.a.mark((function t(){var n,r,i,a,s,o,l,c,f;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,r=e.$store.getters["authenticationStore/IdentityModel"],i="user/create",a=r.schoolId,Object.keys(r).length<=0?a="CEO":"Admin"==r.userType&&"CEO"!==r.designationId&&(a=r.schoolId),s={url:i,req:{firstName:n.form.qInputs[0].name,lastName:n.form.qInputs[1].name,userName:n.form.qInputs[2].name,password:n.form.qInputs[3].name,designationId:n.form.qSelects[0].value,userType:"Member",schoolId:a}},console.log("payload: ",s),e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=10,Object(p["b"])(s);case 10:o=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),l=o.data,c=l.message,f=l.success,f?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=c,n.dialogs[2].isVisible=!0);case 14:case"end":return t.stop()}}),t)})))()},uploadPicSave:function(){var e=this;return l()(u.a.mark((function t(){var n;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e,!n.isNewPicture){t.next=4;break}return t.next=4,n.uploadFile();case 4:return t.next=6,n.save();case 6:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return l()(u.a.mark((function n(){var r,i,a,s,o,l;return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),r=t,i=-1,a=w(r.dialogs),n.prev=4,a.s();case 6:if((s=a.n()).done){n.next=24;break}if(o=s.value,i++,o.title!==e){n.next=22;break}n.t0=e,n.next="Create User"===n.t0?13:"Success"===n.t0?17:20;break;case 13:return n.next=15,r.uploadPicSave();case 15:return r.form.qBtns[1].btnDisabled=!1,n.abrupt("break",20);case 17:return l=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===l.schoolId?t.$router.push("/super-admin-user-landing"):t.$router.push("/user-landing"),n.abrupt("break",20);case 20:return r.dialogs[i].isVisible=!1,n.abrupt("break",24);case 22:n.next=6;break;case 24:n.next=29;break;case 26:n.prev=26,n.t1=n["catch"](4),a.e(n.t1);case 29:return n.prev=29,a.f(),n.finish(29);case 32:case"end":return n.stop()}}),n,null,[[4,26,29,32]])})))()}},created:function(){var e=this;e.form.clearQInputs(),e.form.clearQSelects(),e.form.qSelects[0].list=this.$store.getters["staffStore/staffs"].map((function(e){return v(v({},e),{},{type:e.type})})),this.$store.commit("authenticationStore/setPageTitle","Create User")}},F=q,k=n("a6c2"),D=n("c99e"),x=n("ec6d"),O=n("63c1"),C=n.n(O),P=Object(k["a"])(F,r,i,!1,null,null,null);t["default"]=P.exports;C()(P,"components",{QSpinner:D["a"],QDialog:x["a"]})}}]);