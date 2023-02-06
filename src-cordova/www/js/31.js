(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{"29af":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():o("Form",{attrs:{formData:e.form},on:{Create:function(t){return e.Create(t)},Cancel:function(t){return e.Cancel(t)},onFileSelected:function(t){return e.onFileSelected(t)}}}),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[o("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[o("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return o("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(o){e.$set(t,"isVisible",o)},expression:"dialog.isVisible"}},[o("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},r=[],a=(o("d38f"),o("b7dd"),o("0012"),o("6212"),o("950c"),o("2bf3"),o("5b54"),o("549c")),i=o.n(a),s=o("52b5"),l=o.n(s),c=(o("1a43"),o("0588")),u=o("82f4"),d=o("0601"),f={title:"Create Logo",qSelects:[],qInputs:[],qFiles:[{label:"Logo Path",name:"",type:"file",selectedFile:null,showPreview:!1,imagePreview:"",files:[],Template:{sn:0,iconName:"",visible:!1}}],qColors:[{label:"Primary Color",name:"",type:"color",selectedFile:null,files:[],Template:{sn:0,iconName:"",visible:!1}},{label:"Secondary Color",name:"",type:"color",selectedFile:null,files:[],Template:{sn:0,iconName:"",visible:!1}},{label:"Tertiary Color",name:"",type:"color",selectedFile:null,files:[],Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Create",name:"Create",icon:"add"}],qDates:[],GroupedCheckBoxes:[],clearQFiles:function(){var e=0;for(e=0;e<this.qFiles.length;e++)this.qFiles[e].name="",this.qFiles[e].selectedFile=null,this.qFiles[e].showPreview=!1,this.qFiles[e].imagePreview=""},clearQColors:function(){var e=0;for(e=0;e<this.qColors.length;e++)this.qColors[e].name=""}},g=[{title:"Create Logo",isVisible:!1,message:"Do you want to create a Logo",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Logo created successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function m(e,t){var o="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=p(e))||t&&e&&"number"===typeof e.length){o&&(e=o);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==o.return||o.return()}finally{if(s)throw a}}}}function p(e,t){if(e){if("string"===typeof e)return h(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var v={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:c["a"],Form:u["a"]},data:function(){return{form:f,dialogs:g,LogoUrl:"",doesLogoExists:!1,fileName:"",originalFileName:""}},methods:{Create:function(){var e,t=this,o=-1,n=m(t.dialogs);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(o++,"Create Logo"==r.title){t.dialogs[o].isVisible=!0;break}}}catch(a){n.e(a)}finally{n.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-logo-landing"):this.$router.push("/logo-landing")},cancelDialog:function(e){var t,o=this,n=-1,r=m(o.dialogs);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(n++,a.title===e){o.dialogs[n].isVisible=!1;break}}}catch(i){r.e(i)}finally{r.f()}},onFileSelected:function(e){var t=this;t.form.qFiles[0].selectedFile=e.selectedFile;var o=new FileReader;o.addEventListener("load",function(){t.form.qFiles[0].showPreview=!0,t.form.qFiles[0].imagePreview=o.result}.bind(t),!1),t.form.qFiles[0].selectedFile&&(/\.(jpe?g|png|gif)$/i.test(t.form.qFiles[0].selectedFile.name)?o.readAsDataURL(t.form.qFiles[0].selectedFile):alert("Wrong image format. Only supports .jpg, .jpeg, .png and .gif"))},uploadLogo:function(){var e=this;return i()(l.a.mark((function t(){var o,n,r,a,i;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e,n=new FormData,console.log("selectedFile: ",o.form.qFiles[0].selectedFile),n.append("file",o.form.qFiles[0].selectedFile),r="logo/upload",a={url:r,req:n},console.log("payload: ",a),t.next=9,Object(d["c"])(a);case 9:i=t.sent,o.LogoUrl=i.data.url,o.fileName=i.data.fileName,o.originalFileName=i.data.originalFileName,console.log("LogoUrl: ",o.LogoUrl);case 14:case"end":return t.stop()}}),t)})))()},checkLogoExistance:function(){var e=this;return i()(l.a.mark((function t(){var o,n,r,a,i;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e,n="logo/checkfile",r=e.$store.getters["authenticationStore/IdentityModel"],a={url:n,req:{schoolId:r.schoolId}},console.log("payload: ",a),t.next=7,Object(d["c"])(a);case 7:i=t.sent,console.log("response: ",i),o.doesLogoExists=i.data,console.log("doesLogoExists: ",o.doesLogoExists);case 11:case"end":return t.stop()}}),t)})))()},save:function(){var e=this;return i()(l.a.mark((function t(){var o,n,r,a,i;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e,n="logo/create",r=e.$store.getters["authenticationStore/IdentityModel"],a={url:n,req:{primaryColor:o.form.qColors[0].name,secondaryColor:o.form.qColors[1].name,tertiaryColor:o.form.qColors[2].name,schoolId:r.schoolId,fileUrl:o.LogoUrl,fileName:o.fileName,originalFileName:o.originalFileName,createdBy:r.id}},console.log("payload: ",a),t.next=7,Object(d["c"])(a);case 7:i=t.sent,201===i.status||200==i.status?o.dialogs[1].isVisible=!0:(o.dialogs[2].message="Error while saving the Logo",o.dialogs[2].isVisible=!0);case 9:case"end":return t.stop()}}),t)})))()},uploadAndSaveLogoUr:function(){var e=this;return i()(l.a.mark((function t(){var o;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e,e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=4,o.checkLogoExistance();case 4:if(!1!==o.doesLogoExists){t.next=11;break}return t.next=7,o.uploadLogo();case 7:return t.next=9,o.save();case 9:t.next=12;break;case 11:alert("Logo already exists");case 12:e.$store.commit("authenticationStore/setShowSpinner",!1);case 13:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return i()(l.a.mark((function o(){var n,r,a,i,s,c;return l.a.wrap((function(o){while(1)switch(o.prev=o.next){case 0:console.log("payload: ",e),n=t,r=-1,a=m(n.dialogs),o.prev=4,a.s();case 6:if((i=a.n()).done){o.next=23;break}if(s=i.value,r++,s.title!==e){o.next=21;break}o.t0=e,o.next="Create Logo"===o.t0?13:"Success"===o.t0?16:19;break;case 13:return o.next=15,n.uploadAndSaveLogoUr();case 15:return o.abrupt("break",19);case 16:return c=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===c.schoolId?t.$router.push("/super-admin-logo-landing"):t.$router.push("/logo-landing"),o.abrupt("break",19);case 19:return n.dialogs[r].isVisible=!1,o.abrupt("break",23);case 21:o.next=6;break;case 23:o.next=28;break;case 25:o.prev=25,o.t1=o["catch"](4),a.e(o.t1);case 28:return o.prev=28,a.f(),o.finish(28);case 31:case"end":return o.stop()}}),o,null,[[4,25,28,31]])})))()}},created:function(){var e=this;e.form.clearQFiles(),e.form.clearQColors()}},b=v,w=o("a6c2"),y=o("c99e"),F=o("ec6d"),k=o("63c1"),x=o.n(k),S=Object(w["a"])(b,n,r,!1,null,null,null);t["default"]=S.exports;x()(S,"components",{QSpinner:y["a"],QDialog:F["a"]})}}]);