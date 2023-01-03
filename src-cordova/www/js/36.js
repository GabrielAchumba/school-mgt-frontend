(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{"6dc8":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():n("Form",{attrs:{formData:e.form},on:{Create:function(t){return e.Create(t)},Cancel:function(t){return e.Cancel(t)},onFileSelected:function(t){return e.onFileSelected(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},a=[],r=(n("d38f"),n("b7dd"),n("0012"),n("6212"),n("950c"),n("2bf3"),n("5b54"),n("549c")),s=n.n(r),o=n("52b5"),l=n.n(o),c=(n("1a43"),n("0588")),u=n("82f4"),d=n("0601"),f={title:"Create Vision",qSelects:[],qInputs:[{label:"Title",name:"",type:"text",selectedFile:null,files:[],Template:{sn:0,iconName:"",visible:!1}},{label:"Description",name:"",type:"textarea",selectedFile:null,files:[],Template:{sn:0,iconName:"",visible:!1}}],qFiles:[{label:"Background Image",name:"",type:"file",selectedFile:null,showPreview:!1,imagePreview:"",files:[],Template:{sn:0,iconName:"",visible:!1}}],qColors:[],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Create",name:"Create",icon:"add"}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""},clearQFiles:function(){var e=0;for(e=0;e<this.qFiles.length;e++)this.qFiles[e].name="",this.qFiles[e].selectedFile=null,this.qFiles[e].showPreview=!1,this.qFiles[e].imagePreview=""},clearQColors:function(){var e=0;for(e=0;e<this.qColors.length;e++)this.qColors[e].name=""}},p=[{title:"Create Vision",isVisible:!1,message:"Do you want to create a Vision",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Vision created successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function h(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=m(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,r=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw r}}}}function m(e,t){if(e){if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var v={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:c["a"],Form:u["a"]},data:function(){return{form:f,dialogs:p,VisionUrl:"",fileName:"",originalFileName:"",doesVisionExists:!1}},methods:{Create:function(){var e,t=this,n=-1,i=h(t.dialogs);try{for(i.s();!(e=i.n()).done;){var a=e.value;if(n++,"Create Vision"==a.title){t.dialogs[n].isVisible=!0;break}}}catch(r){i.e(r)}finally{i.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-vision-landing"):this.$router.push("/vision-landing")},cancelDialog:function(e){var t,n=this,i=-1,a=h(n.dialogs);try{for(a.s();!(t=a.n()).done;){var r=t.value;if(i++,r.title===e){n.dialogs[i].isVisible=!1;break}}}catch(s){a.e(s)}finally{a.f()}},onFileSelected:function(e){var t=this;t.form.qFiles[0].selectedFile=e.selectedFile;var n=new FileReader;n.addEventListener("load",function(){t.form.qFiles[0].showPreview=!0,t.form.qFiles[0].imagePreview=n.result}.bind(t),!1),t.form.qFiles[0].selectedFile&&(/\.(jpe?g|png|gif)$/i.test(t.form.qFiles[0].selectedFile.name)?n.readAsDataURL(t.form.qFiles[0].selectedFile):alert("Wrong image format. Only supports .jpg, .jpeg, .png and .gif"))},uploadVision:function(){var e=this;return s()(l.a.mark((function t(){var n,i,a,r,s,o;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,i=e.$store.getters["authenticationStore/IdentityModel"],a=new FormData,n.form.qFiles[0].selectedFile.schoolId=i.schoolId,a.append("file",n.form.qFiles[0].selectedFile),r="vision/upload",s={url:r,req:a},t.next=9,Object(d["b"])(s);case 9:o=t.sent,n.VisionUrl=o.data.url,n.fileName=o.data.fileName,n.originalFileName=o.data.originalFileName;case 13:case"end":return t.stop()}}),t)})))()},checkVisionExistance:function(){var e=this;return s()(l.a.mark((function t(){var n,i,a,r,s;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,i="vision/checkfile",a=e.$store.getters["authenticationStore/IdentityModel"],r={url:i,req:{schoolId:a.schoolId}},t.next=6,Object(d["b"])(r);case 6:s=t.sent,n.doesLogoExists=s.data,console.log("doesLogoExists: ",n.doesLogoExists);case 9:case"end":return t.stop()}}),t)})))()},save:function(){var e=this;return s()(l.a.mark((function t(){var n,i,a,r,s;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e,i="vision/create",a=e.$store.getters["authenticationStore/IdentityModel"],r={url:i,req:{title:n.form.qInputs[0].name,description:n.form.qInputs[1].name,fileUrl:n.VisionUrl,fileName:n.fileName,originalFileName:n.originalFileName,schoolId:a.schoolId,createdBy:a.id}},n.dialogs[0].isVisible=!0,""!==n.VisionUrl){t.next=8;break}return alert("Failed to upload file. Please try again"),t.abrupt("return");case 8:return console.log("payload: ",r),t.next=11,Object(d["b"])(r);case 11:s=t.sent,201===s.status||200==s.status?n.dialogs[1].isVisible=!0:(n.dialogs[2].message="Error while saving Vision",n.dialogs[2].isVisible=!0);case 13:case"end":return t.stop()}}),t)})))()},uploadAndSaveVisionUr:function(){var e=this;return s()(l.a.mark((function t(){var n;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=4,n.checkVisionExistance();case 4:if(!1!==n.doesLogoExists){t.next=11;break}return t.next=7,n.uploadVision();case 7:return t.next=9,n.save();case 9:t.next=12;break;case 11:alert("Vision already exists");case 12:e.$store.commit("authenticationStore/setShowSpinner",!1);case 13:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return s()(l.a.mark((function n(){var i,a,r,s,o,c;return l.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),i=t,a=-1,r=h(i.dialogs),n.prev=4,r.s();case 6:if((s=r.n()).done){n.next=23;break}if(o=s.value,a++,o.title!==e){n.next=21;break}n.t0=e,n.next="Create Vision"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,i.uploadAndSaveVisionUr();case 15:return n.abrupt("break",19);case 16:return c=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===c.schoolId?t.$router.push("/super-admin-vision-landing"):t.$router.push("/vision-landing"),n.abrupt("break",19);case 19:return i.dialogs[a].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),r.e(n.t1);case 28:return n.prev=28,r.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()}},created:function(){var e=this;e.form.clearQInputs(),e.form.clearQFiles()}},b=v,w=n("a6c2"),k=n("c99e"),y=n("ec6d"),F=n("63c1"),x=n.n(F),S=Object(w["a"])(b,i,a,!1,null,null,null);t["default"]=S.exports;x()(S,"components",{QSpinner:k["a"],QDialog:y["a"]})}}]);