(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{3192:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():n("Form",{attrs:{formData:e.form},on:{Update:function(t){return e.Update(t)},Cancel:function(t){return e.Cancel(t)},onFileSelected:function(t){return e.onFileSelected(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},s=[],a=(n("23bf"),n("06db"),n("8a81"),n("1c4c"),n("5df3"),n("cadf"),n("ac6a"),n("fa84")),o=n.n(a),r=n("967e"),l=n.n(r),c=(n("7f7f"),n("9bff")),u=n("9437"),d=n("7ac8"),f={title:"Update Vision",qSelects:[],qInputs:[{label:"Title",name:"",type:"text",selectedFile:null,files:[],Template:{sn:0,iconName:"",visible:!1}},{label:"Description",name:"",type:"textarea",selectedFile:null,files:[],Template:{sn:0,iconName:"",visible:!1}}],qFiles:[{label:"Background Image",name:"",type:"file",selectedFile:null,showPreview:!1,imagePreview:"",files:[],Template:{sn:0,iconName:"",visible:!1}}],qColors:[],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Update",name:"Update",icon:"add"}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""},clearQFiles:function(){var e=0;for(e=0;e<this.qFiles.length;e++)this.qFiles[e].name=""},clearQColors:function(){var e=0;for(e=0;e<this.qColors.length;e++)this.qColors[e].name=""}},p=[{title:"Update Vision",isVisible:!1,message:"Do you want to update a Vision",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Vision updated successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function m(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=h(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,s=function(){};return{s:s,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,r=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){r=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(r)throw a}}}}function h(e,t){if(e){if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var v={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:c["a"],Form:u["a"]},data:function(){return{form:f,dialogs:p,VisionUrl:"",doesVisionExists:!1,selectedVision:{},fileName:"",originalFileName:""}},methods:{Update:function(){var e,t=this,n=-1,i=m(t.dialogs);try{for(i.s();!(e=i.n()).done;){var s=e.value;if(n++,"Update Vision"==s.title){t.dialogs[n].isVisible=!0;break}}}catch(a){i.e(a)}finally{i.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-vision-landing"):this.$router.push("/vision-landing")},cancelDialog:function(e){var t,n=this,i=-1,s=m(n.dialogs);try{for(s.s();!(t=s.n()).done;){var a=t.value;if(i++,a.title===e){n.dialogs[i].isVisible=!1;break}}}catch(o){s.e(o)}finally{s.f()}},onFileSelected:function(e){var t=this;t.form.qFiles[0].selectedFile=e.selectedFile;var n=new FileReader;n.addEventListener("load",function(){t.form.qFiles[0].showPreview=!0,t.form.qFiles[0].imagePreview=n.result}.bind(t),!1),t.form.qFiles[0].selectedFile&&(/\.(jpe?g|png|gif)$/i.test(t.form.qFiles[0].selectedFile.name)?n.readAsDataURL(t.form.qFiles[0].selectedFile):alert("Wrong image format. Only supports .jpg, .jpeg, .png and .gif"))},uploadVision:function(){var e=this;return o()(l.a.mark((function t(){var n,i,s,a,o;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,i=new FormData,console.log("selectedFile: ",n.form.qFiles[0].selectedFile),i.append("file",n.form.qFiles[0].selectedFile),s="vision/upload",a={url:s,req:i},console.log("payload: ",a),t.next=9,Object(d["b"])(a);case 9:o=t.sent,n.VisionUrl=o.data.url,n.fileName=o.data.fileName,n.originalFileName=o.data.originalFileName,console.log("VisionUrl: ",n.VisionUrl);case 14:case"end":return t.stop()}}),t)})))()},checkVisionExistance:function(){var e=this;return o()(l.a.mark((function t(){var n,i,s,a,o;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,i="vision/checkfile",s=e.$store.getters["authenticationStore/IdentityModel"],a={url:i,req:{schoolId:s.schoolId}},console.log("payload: ",a),t.next=7,Object(d["b"])(a);case 7:o=t.sent,console.log("response: ",o),n.doesLogoExists=o.data,console.log("doesLogoExists: ",n.doesLogoExists);case 11:case"end":return t.stop()}}),t)})))()},save:function(){var e=this;return o()(l.a.mark((function t(){var n,i,s,a,o;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,i=e.$store.getters["authenticationStore/IdentityModel"],s="vision/".concat(n.selectedVision.id),a={url:s,req:{title:n.form.qInputs[0].name,description:n.form.qInputs[1].name,fileUrl:n.VisionUrl,fileName:n.fileName,originalFileName:n.originalFileName,schoolId:i.schoolId,createdBy:i.id}},console.log("payload: ",a),t.next=7,put(a);case 7:o=t.sent,201===o.status||200==o.status?n.dialogs[1].isVisible=!0:(n.dialogs[2].message="Error while saving vision",n.dialogs[2].isVisible=!0);case 9:case"end":return t.stop()}}),t)})))()},uploadAndSaveVisionUr:function(){var e=this;return o()(l.a.mark((function t(){var n;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=4,n.uploadVision();case 4:return t.next=6,n.save();case 6:e.$store.commit("authenticationStore/setShowSpinner",!1);case 7:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return o()(l.a.mark((function n(){var i,s,a,o,r,c;return l.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),i=t,s=-1,a=m(i.dialogs),n.prev=4,a.s();case 6:if((o=a.n()).done){n.next=23;break}if(r=o.value,s++,r.title!==e){n.next=21;break}n.t0=e,n.next="Update Vision"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,i.uploadAndSaveVisionUr();case 15:return n.abrupt("break",19);case 16:return c=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===c.schoolId?t.$router.push("/super-admin-vision-landing"):t.$router.push("/vision-landing"),n.abrupt("break",19);case 19:return i.dialogs[s].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),a.e(n.t1);case 28:return n.prev=28,a.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()}},created:function(){var e=this;e.selectedVision=this.$store.getters["VisionStore/selectedVision"],e.VisionUrl=e.selectedVision.fileUrl,e.form.qFiles[0].showPreview=!0,e.form.qFiles[0].imagePreview=e.selectedVision.fileUrl,e.form.qInputs[0].name=e.selectedVision.title,e.form.qInputs[1].name=e.selectedVision.description}},b=v,w=n("2877"),y=n("0d59"),k=n("24e8"),F=n("eebe"),V=n.n(F),S=Object(w["a"])(b,i,s,!1,null,null,null);t["default"]=S.exports;V()(S,"components",{QSpinner:y["a"],QDialog:k["a"]})}}]);