(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{"2c96":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():n("Form",{attrs:{formData:e.form},on:{Update:function(t){return e.Update(t)},Cancel:function(t){return e.Cancel(t)},onFileSelected:function(t){return e.onFileSelected(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},i=[],a=(n("d38f"),n("b7dd"),n("0012"),n("6212"),n("950c"),n("2bf3"),n("5b54"),n("549c")),r=n.n(a),o=n("52b5"),l=n.n(o),c=(n("1a43"),n("0588")),u=n("82f4"),d=n("0601"),f={title:"Update Continuous Assessment Answer",qSelects:[],qInputs:[{label:"Section Title",name:"",type:"text",selectedFile:null,files:[],Template:{sn:0,iconName:"",visible:!1}},{label:"Content",name:"",type:"textarea",selectedFile:null,files:[],Template:{sn:1,iconName:"",visible:!1}},{label:"Score",name:"",type:"number",selectedFile:null,files:[],Template:{sn:1,iconName:"",visible:!1}}],qFiles:[{label:"File Path",name:"",type:"file",selectedFile:null,showPreview:!1,imagePreview:"",showVideoPreview:!1,fileType:"image",files:[],Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Update",name:"Update",icon:"add"}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""},clearQFiles:function(){var e=0;for(e=0;e<this.qFiles.length;e++)this.qFiles[e].name="",this.qFiles[e].selectedFile=null,this.qFiles[e].showPreview=!1,this.qFiles[e].showVideoPreview=!1,this.qFiles[e].imagePreview=""}},p=[{title:"Update Continuous Assessment Answer",isVisible:!1,message:"Do you want to update continuous assessment answer",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Continuous assessment answer updated successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function m(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=h(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var s=0,i=function(){};return{s:i,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){o=!0,a=e},f:function(){try{r||null==n.return||n.return()}finally{if(o)throw a}}}}function h(e,t){if(e){if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}var v={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:c["a"],Form:u["a"]},data:function(){return{form:f,dialogs:p,fileUrl:"",doesVisionExists:!1,selectedCAAnswer:{},fileName:"",originalFileName:""}},methods:{Update:function(){var e,t=this,n=-1,s=m(t.dialogs);try{for(s.s();!(e=s.n()).done;){var i=e.value;if(n++,"Update Continuous Assessment Answer"==i.title){t.dialogs[n].isVisible=!0;break}}}catch(a){s.e(a)}finally{s.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-ca-answer-landing"):this.$router.push("/ca-answer-landing")},cancelDialog:function(e){var t,n=this,s=-1,i=m(n.dialogs);try{for(i.s();!(t=i.n()).done;){var a=t.value;if(s++,a.title===e){n.dialogs[s].isVisible=!1;break}}}catch(r){i.e(r)}finally{i.f()}},onFileSelected:function(e){var t=this;t.form.qFiles[0].selectedFile=e.selectedFile;var n=new FileReader;n.addEventListener("load",function(){t.form.qFiles[0].showPreview=!0,t.form.qFiles[0].imagePreview=n.result}.bind(t),!1),t.form.qFiles[0].selectedFile&&(/\.(jpe?g|png|gif)$/i.test(t.form.qFiles[0].selectedFile.name)?n.readAsDataURL(t.form.qFiles[0].selectedFile):alert("Wrong image format. Only supports .jpg, .jpeg, .png and .gif"))},uploadVision:function(){var e=this;return r()(l.a.mark((function t(){var n,s,i,a,r;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,s=new FormData,console.log("selectedFile: ",n.form.qFiles[0].selectedFile),s.append("file",n.form.qFiles[0].selectedFile),i="caanswer/upload",a={url:i,req:s},console.log("payload: ",a),t.next=9,Object(d["b"])(a);case 9:r=t.sent,n.fileUrl=r.data.url,n.fileName=r.data.fileName,n.originalFileName=r.data.originalFileName,console.log("fileUrl: ",n.fileUrl);case 14:case"end":return t.stop()}}),t)})))()},checkVisionExistance:function(){var e=this;return r()(l.a.mark((function t(){var n,s,i,a,r;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,s="caanswer/checkfile",i=e.$store.getters["authenticationStore/IdentityModel"],a={url:s,req:{schoolId:i.schoolId}},console.log("payload: ",a),t.next=7,Object(d["b"])(a);case 7:r=t.sent,console.log("response: ",r),n.doesLogoExists=r.data,console.log("doesLogoExists: ",n.doesLogoExists);case 11:case"end":return t.stop()}}),t)})))()},save:function(){var e=this;return r()(l.a.mark((function t(){var n,s,i,a,r;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,s=e.$store.getters["authenticationStore/IdentityModel"],i="caanswer/".concat(n.selectedCAAnswer.id),a={url:i,req:{fileType:n.fileType,sectionTitle:n.form.qInputs[0].name,content:n.form.qInputs[1].name,score:n.form.qInputs[2].name,schoolId:s.schoolId,fileUrl:n.fileUrl,fileName:n.fileName,originalFileName:n.originalFileName,createdBy:s.id,cAId:"",cAQuestionId:"",userType:s.userType}},console.log("payload: ",a),t.next=7,put(a);case 7:r=t.sent,201===r.status||200==r.status?n.dialogs[1].isVisible=!0:(n.dialogs[2].message="Error while saving vision",n.dialogs[2].isVisible=!0);case 9:case"end":return t.stop()}}),t)})))()},uploadAndSaveVisionUr:function(){var e=this;return r()(l.a.mark((function t(){var n;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=4,n.uploadVision();case 4:return t.next=6,n.save();case 6:e.$store.commit("authenticationStore/setShowSpinner",!1);case 7:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return r()(l.a.mark((function n(){var s,i,a,r,o,c;return l.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),s=t,i=-1,a=m(s.dialogs),n.prev=4,a.s();case 6:if((r=a.n()).done){n.next=23;break}if(o=r.value,i++,o.title!==e){n.next=21;break}n.t0=e,n.next="Update Continuous Assessment Answer"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,s.uploadAndSaveVisionUr();case 15:return n.abrupt("break",19);case 16:return c=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===c.schoolId?t.$router.push("/super-admin-ca-answer-landing"):t.$router.push("/ca-answer-landing"),n.abrupt("break",19);case 19:return s.dialogs[i].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),a.e(n.t1);case 28:return n.prev=28,a.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()}},created:function(){var e=this;e.selectedCAAnswer=this.$store.getters["cAAnswerStore/selectedCAAnswer"],e.fileUrl=e.selectedCAAnswer.fileUrl,e.form.qFiles[0].showPreview=!0,e.form.qFiles[0].imagePreview=e.selectedCAAnswer.fileUrl,e.form.qInputs[0].name=e.selectedCAAnswer.sectionTitle,e.form.qInputs[1].name=e.selectedCAAnswer.content,e.form.qInputs[2].name=e.selectedCAAnswer.score}},w=v,b=n("a6c2"),y=n("c99e"),F=n("ec6d"),A=n("63c1"),S=n.n(A),k=Object(b["a"])(w,s,i,!1,null,null,null);t["default"]=k.exports;S()(k,"components",{QSpinner:y["a"],QDialog:F["a"]})}}]);