(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[69],{"28ca":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():n("Form",{attrs:{formData:e.form},on:{Update:function(t){return e.Update(t)},Cancel:function(t){return e.Cancel(t)},view:function(t){return e.view(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},i=[],r=(n("23bf"),n("06db"),n("8a81"),n("1c4c"),n("5df3"),n("cadf"),n("ac6a"),n("fa84")),o=n.n(r),s=(n("7f7f"),n("967e")),l=n.n(s),c=n("9bff"),u=n("9437"),d=n("7ac8"),f={title:"View File",qSelects:[],qParagraphs:[{label:"Title",name:"",type:"text"},{label:"Description",name:"",type:"textarea"}],qLinks:[{label:"View File",name:"ViewFile",href:"#",target:"_blank"}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"view",name:"view",icon:"close"}],qDates:[],GroupedCheckBoxes:[]},p=[{title:"View File",isVisible:!1,message:"Do you want to update a File",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"File updated successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function m(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=g(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,r=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw r}}}}function g(e,t){if(e){if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var v={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:c["a"],Form:u["a"]},data:function(){return{selectedFileModel:{},form:f,dialogs:p,imageUrl:"",fileName:"",originalFileName:""}},methods:{Update2:function(){var e,t=this,n=-1,a=m(t.dialogs);try{for(a.s();!(e=a.n()).done;){var i=e.value;if(n++,"Update FileModel"==i.title){t.dialogs[n].isVisible=!0;break}}}catch(r){a.e(r)}finally{a.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-filemanagement-landing"):this.$router.push("/filemanagement-landing")},cancelDialog:function(e){var t,n=this,a=-1,i=m(n.dialogs);try{for(i.s();!(t=i.n()).done;){var r=t.value;if(a++,r.title===e){n.dialogs[a].isVisible=!1;break}}}catch(o){i.e(o)}finally{i.f()}},view:function(){},view2:function(){var e=this;return o()(l.a.mark((function t(){var n,a,i,r;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a="filemanagement/readPDF",i={url:a},console.log("response.data"),t.next=6,Object(d["a"])(i);case 6:r=t.sent,n.imageUrl="data:application/pdf;base64,".concat(r.data),n.form.qLinks[0].href=n.imageUrl,console.log("imageUrl: ",n.imageUrl);case 10:case"end":return t.stop()}}),t)})))()},save:function(){var e=this;return o()(l.a.mark((function t(){var n,a,i,r,o,s,c,u;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a=e.$store.getters["authenticationStore/IdentityModel"],i="FileModel/".concat(n.selectedFileModel.id),r={url:i,req:{type:n.form.qInputs[0].name,schoolId:a.schoolId}},console.log("payload: ",r),e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=8,Object(d["d"])(r);case 8:o=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),s=o.data,c=s.message,u=s.success,u?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=c,n.dialogs[2].isVisible=!0);case 12:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return o()(l.a.mark((function n(){var a,i,r,o,s,c;return l.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),a=t,i=-1,r=m(a.dialogs),n.prev=4,r.s();case 6:if((o=r.n()).done){n.next=23;break}if(s=o.value,i++,s.title!==e){n.next=21;break}n.t0=e,n.next="Update FileModel"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,a.save();case 15:return n.abrupt("break",19);case 16:return c=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===c.schoolId?t.$router.push("/super-admin-filemanagement-landing"):t.$router.push("/filemanagement-landing"),n.abrupt("break",19);case 19:return a.dialogs[i].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),r.e(n.t1);case 28:return n.prev=28,r.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()}},created:function(){var e=this;return o()(l.a.mark((function t(){var n;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e,n.selectedFileModel=e.$store.getters["FileModelStore/selectedFileModel"],n.form.qParagraphs[0].name=n.selectedFileModel.title,n.form.qParagraphs[1].name=n.selectedFileModel.description,n.form.qLinks[0].href=n.selectedFileModel.fileUrl;case 5:case"end":return t.stop()}}),t)})))()}},b=v,w=n("2877"),k=n("068f"),y=n("0d59"),S=n("24e8"),x=n("eebe"),F=n.n(x),D=Object(w["a"])(b,a,i,!1,null,null,null);t["default"]=D.exports;F()(D,"components",{QImg:k["a"],QSpinner:y["a"],QDialog:S["a"]})}}]);