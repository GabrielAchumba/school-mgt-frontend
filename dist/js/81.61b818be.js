(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[81],{9641:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():n("Form",{attrs:{formData:e.form},on:{Update:function(t){return e.Update(t)},Cancel:function(t){return e.Cancel(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},o=[],r=(n("23bf"),n("06db"),n("8a81"),n("1c4c"),n("5df3"),n("cadf"),n("ac6a"),n("fa84")),s=n.n(r),i=n("967e"),c=n.n(i),l=(n("7f7f"),n("9bff")),u=n("9437"),d=n("39b2"),f={title:"Update School",qSelects:[],qInputs:[{label:"School Name",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"School Address",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Update",name:"Update",icon:"update"}],qDates:[],GroupedCheckBoxes:[]},p=[{title:"Update School",isVisible:!1,message:"Do you want to update a School",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"School updated successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function h(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=m(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){i=!0,r=e},f:function(){try{s||null==n.return||n.return()}finally{if(i)throw r}}}}function m(e,t){if(e){if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var g={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:l["a"],Form:u["a"]},data:function(){return{selectedSchool:{},form:f,dialogs:p}},methods:{Update:function(){var e,t=this,n=-1,a=h(t.dialogs);try{for(a.s();!(e=a.n()).done;){var o=e.value;if(n++,"Update School"==o.title){t.dialogs[n].isVisible=!0;break}}}catch(r){a.e(r)}finally{a.f()}},Cancel:function(){this.$router.push("/school-landing")},cancelDialog:function(e){var t,n=this,a=-1,o=h(n.dialogs);try{for(o.s();!(t=o.n()).done;){var r=t.value;if(a++,r.title===e){n.dialogs[a].isVisible=!1;break}}}catch(s){o.e(s)}finally{o.f()}},save:function(){var e=this;return s()(c.a.mark((function t(){var n,a,o,r,s,i,l;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a="school/".concat(n.selectedSchool.id),o={url:a,req:{schoolName:n.form.qInputs[0].name,address:n.form.qInputs[1].name}},console.log("payload: ",o),e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=7,Object(d["c"])(o);case 7:r=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),s=r.data,i=s.message,l=s.success,l?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=i,n.dialogs[2].isVisible=!0);case 11:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return s()(c.a.mark((function n(){var a,o,r,s,i;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),a=t,o=-1,r=h(a.dialogs),n.prev=4,r.s();case 6:if((s=r.n()).done){n.next=22;break}if(i=s.value,o++,i.title!==e){n.next=20;break}n.t0=e,n.next="Update School"===n.t0?13:"Success"===n.t0?16:18;break;case 13:return n.next=15,a.save();case 15:return n.abrupt("break",18);case 16:return t.$router.push("/school-landing"),n.abrupt("break",18);case 18:return a.dialogs[o].isVisible=!1,n.abrupt("break",22);case 20:n.next=6;break;case 22:n.next=27;break;case 24:n.prev=24,n.t1=n["catch"](4),r.e(n.t1);case 27:return n.prev=27,r.f(),n.finish(27);case 30:case"end":return n.stop()}}),n,null,[[4,24,27,30]])})))()}},created:function(){var e=this;e.selectedSchool=this.$store.getters["schoolStore/selectedSchool"],e.form.qInputs[0].name=e.selectedSchool.schoolName,e.form.qInputs[1].name=e.selectedSchool.address}},v=g,S=n("2877"),k=n("0d59"),y=n("24e8"),w=n("eebe"),x=n.n(w),D=Object(S["a"])(v,a,o,!1,null,null,null);t["default"]=D.exports;x()(D,"components",{QSpinner:k["a"],QDialog:y["a"]})}}]);