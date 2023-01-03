(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{d5a6:function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():t("Form",{attrs:{formData:e.form},on:{Update:function(o){return e.Update(o)},Cancel:function(o){return e.Cancel(o)},onFileSelected:function(o){return e.onFileSelected(o)}}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[t("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[t("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(o){return t("q-dialog",{key:o.title,model:{value:o.isVisible,callback:function(t){e.$set(o,"isVisible",t)},expression:"dialog.isVisible"}},[t("MessageBox",{attrs:{title:o.title,message:o.message,okayEvent:o.okayEvent,cancelEvent:o.cancelEvent},on:{cancelDialog:function(o){return e.cancelDialog(o)},okDialog:function(o){return e.okDialog(o)}}})],1)}))],2)},r=[],a=(t("d38f"),t("b7dd"),t("0012"),t("6212"),t("950c"),t("2bf3"),t("5b54"),t("549c")),i=t.n(a),l=t("52b5"),s=t.n(l),c=(t("1a43"),t("0588")),u=t("82f4"),d=t("0601"),g={title:"Update Logo",qSelects:[],qInputs:[],qFiles:[{label:"Logo",name:"",type:"file",selectedFile:null,showPreview:!1,imagePreview:"",files:[],Template:{sn:0,iconName:"",visible:!1}}],qColors:[{label:"Primary Color",name:"",type:"color",selectedFile:null,files:[],Template:{sn:0,iconName:"",visible:!1}},{label:"Secondary Color",name:"",type:"color",selectedFile:null,files:[],Template:{sn:0,iconName:"",visible:!1}},{label:"Tertiary Color",name:"",type:"color",selectedFile:null,files:[],Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Update",name:"Update",icon:"update"}],qDates:[],GroupedCheckBoxes:[],clearQFiles:function(){var e=0;for(e=0;e<this.qFiles.length;e++)this.qFiles[e].name=""},clearQColors:function(){var e=0;for(e=0;e<this.qColors.length;e++)this.qColors[e].name=""}},f=[{title:"Update Logo",isVisible:!1,message:"Do you want to update a Logo",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Logo updated successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function p(e,o){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=m(e))||o&&e&&"number"===typeof e.length){t&&(e=t);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw a}}}}function m(e,o){if(e){if("string"===typeof e)return h(e,o);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(e,o):void 0}}function h(e,o){(null==o||o>e.length)&&(o=e.length);for(var t=0,n=new Array(o);t<o;t++)n[t]=e[t];return n}var v={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:c["a"],Form:u["a"]},data:function(){return{form:g,dialogs:f,LogoUrl:"",doesLogoExists:!1,selectedLogo:{},fileName:"",originalFileName:""}},methods:{Update:function(){var e,o=this,t=-1,n=p(o.dialogs);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(t++,"Update Logo"==r.title){o.dialogs[t].isVisible=!0;break}}}catch(a){n.e(a)}finally{n.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-logo-landing"):this.$router.push("/logo-landing")},cancelDialog:function(e){var o,t=this,n=-1,r=p(t.dialogs);try{for(r.s();!(o=r.n()).done;){var a=o.value;if(n++,a.title===e){t.dialogs[n].isVisible=!1;break}}}catch(i){r.e(i)}finally{r.f()}},onFileSelected:function(e){var o=this;o.form.qFiles[0].selectedFile=e.selectedFile;var t=new FileReader;t.addEventListener("load",function(){o.form.qFiles[0].showPreview=!0,o.form.qFiles[0].imagePreview=t.result}.bind(o),!1),o.form.qFiles[0].selectedFile&&(/\.(jpe?g|png|gif)$/i.test(o.form.qFiles[0].selectedFile.name)?t.readAsDataURL(o.form.qFiles[0].selectedFile):alert("Wrong image format. Only supports .jpg, .jpeg, .png and .gif"))},uploadLogo:function(){var e=this;return i()(s.a.mark((function o(){var t,n,r,a,i;return s.a.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return t=e,n=new FormData,console.log("selectedFile: ",t.form.qFiles[0].selectedFile),n.append("file",t.form.qFiles[0].selectedFile),r="logo/upload",a={url:r,req:n},console.log("payload: ",a),o.next=9,Object(d["b"])(a);case 9:i=o.sent,t.LogoUrl=i.data.url,t.fileName=i.data.fileName,t.originalFileName=i.data.originalFileName,console.log("LogoUrl: ",t.LogoUrl);case 14:case"end":return o.stop()}}),o)})))()},checkLogoExistance:function(){var e=this;return i()(s.a.mark((function o(){var t,n,r,a,i;return s.a.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return t=e,n="logo/checkfile",r=e.$store.getters["authenticationStore/IdentityModel"],a={url:n,req:{schoolId:r.schoolId}},console.log("payload: ",a),o.next=7,Object(d["b"])(a);case 7:i=o.sent,console.log("response: ",i),t.doesLogoExists=i.data,console.log("doesLogoExists: ",t.doesLogoExists);case 11:case"end":return o.stop()}}),o)})))()},save:function(){var e=this;return i()(s.a.mark((function o(){var t,n,r,a,i;return s.a.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return t=e,n="logo/".concat(t.selectedLogo.id),r=e.$store.getters["authenticationStore/IdentityModel"],a={url:n,req:{primaryColor:t.form.qColors[0].name,secondaryColor:t.form.qColors[1].name,tertiaryColor:t.form.qColors[2].name,schoolId:r.schoolId,fileUrl:t.LogoUrl,fileName:t.fileName,originalFileName:t.originalFileName,createdBy:r.id}},console.log("payload: ",a),o.next=7,put(a);case 7:i=o.sent,201===i.status||200==i.status?t.dialogs[1].isVisible=!0:(t.dialogs[2].message="Error while saving the Logo",t.dialogs[2].isVisible=!0);case 9:case"end":return o.stop()}}),o)})))()},uploadAndSaveLogoUr:function(){var e=this;return i()(s.a.mark((function o(){var t;return s.a.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return t=e,e.$store.commit("authenticationStore/setShowSpinner",!0),o.next=4,t.uploadLogo();case 4:return o.next=6,t.save();case 6:e.$store.commit("authenticationStore/setShowSpinner",!1);case 7:case"end":return o.stop()}}),o)})))()},okDialog:function(e){var o=this;return i()(s.a.mark((function t(){var n,r,a,i,l,c;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("payload: ",e),n=o,r=-1,a=p(n.dialogs),t.prev=4,a.s();case 6:if((i=a.n()).done){t.next=23;break}if(l=i.value,r++,l.title!==e){t.next=21;break}t.t0=e,t.next="Create Logo"===t.t0?13:"Success"===t.t0?16:19;break;case 13:return t.next=15,n.uploadAndSaveLogoUr();case 15:return t.abrupt("break",19);case 16:return c=o.$store.getters["authenticationStore/IdentityModel"],"CEO"===c.schoolId?o.$router.push("/super-admin-logo-landing"):o.$router.push("/logo-landing"),t.abrupt("break",19);case 19:return n.dialogs[r].isVisible=!1,t.abrupt("break",23);case 21:t.next=6;break;case 23:t.next=28;break;case 25:t.prev=25,t.t1=t["catch"](4),a.e(t.t1);case 28:return t.prev=28,a.f(),t.finish(28);case 31:case"end":return t.stop()}}),t,null,[[4,25,28,31]])})))()}},created:function(){var e=this;e.selectedLogo=this.$store.getters["LogoStore/selectedLogo"],e.LogoUrl=e.selectedLogo.fileUrl,e.form.qFiles[0].showPreview=!0,e.form.qFiles[0].imagePreview=e.selectedLogo.fileUrl,e.form.qColors[0].name=e.selectedLogo.primaryColor,e.form.qColors[1].name=e.selectedLogo.secondaryColor,e.form.qColors[2].name=e.selectedLogo.tertiaryColor,console.log("context.form: ",e.form)}},b=v,y=t("a6c2"),w=t("c99e"),F=t("ec6d"),k=t("63c1"),S=t.n(k),L=Object(y["a"])(b,n,r,!1,null,null,null);o["default"]=L.exports;S()(L,"components",{QSpinner:w["a"],QDialog:F["a"]})}}]);