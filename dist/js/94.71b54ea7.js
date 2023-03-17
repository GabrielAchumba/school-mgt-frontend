(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[94],{f4c8:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():n("Form",{attrs:{formData:e.form},on:{Create:function(t){return e.Create(t)},Cancel:function(t){return e.Cancel(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},r=[],i=(n("23bf"),n("06db"),n("8a81"),n("1c4c"),n("5df3"),n("cadf"),n("ac6a"),n("fa84")),s=n.n(i),o=n("967e"),c=n.n(o),l=(n("7f7f"),n("9bff")),u=n("9437"),f=n("39b2"),d={title:"Create Subject",qSelects:[],qInputs:[{label:"Type of Subject",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Create",name:"Create",icon:"add"}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""}},p=[{title:"Create Subject",isVisible:!1,message:"Do you want to create a Subject",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Subject created successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function h(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=b(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw i}}}}function b(e,t){if(e){if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var m={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:l["a"],Form:u["a"]},data:function(){return{form:d,dialogs:p}},methods:{Create:function(){var e,t=this,n=-1,a=h(t.dialogs);try{for(a.s();!(e=a.n()).done;){var r=e.value;if(n++,"Create Subject"==r.title){t.dialogs[n].isVisible=!0;break}}}catch(i){a.e(i)}finally{a.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-subject-landing"):this.$router.push("/subject-landing")},cancelDialog:function(e){var t,n=this,a=-1,r=h(n.dialogs);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(a++,i.title===e){n.dialogs[a].isVisible=!1;break}}}catch(s){r.e(s)}finally{r.f()}},save:function(){var e=this;return s()(c.a.mark((function t(){var n,a,r,i,s,o,l,u;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a=e.$store.getters["authenticationStore/IdentityModel"],r="subject/create",i={url:r,req:{type:n.form.qInputs[0].name,schoolId:a.schoolId}},console.log("payload: ",i),e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=8,Object(f["b"])(i);case 8:s=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),o=s.data,l=o.message,u=o.success,u?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=l,n.dialogs[2].isVisible=!0);case 12:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return s()(c.a.mark((function n(){var a,r,i,s,o,l;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),a=t,r=-1,i=h(a.dialogs),n.prev=4,i.s();case 6:if((s=i.n()).done){n.next=23;break}if(o=s.value,r++,o.title!==e){n.next=21;break}n.t0=e,n.next="Create Subject"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,a.save();case 15:return n.abrupt("break",19);case 16:return l=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===l.schoolId?t.$router.push("/super-admin-subject-landing"):t.$router.push("/subject-landing"),n.abrupt("break",19);case 19:return a.dialogs[r].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),i.e(n.t1);case 28:return n.prev=28,i.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()}},created:function(){var e=this;e.form.clearQInputs(),this.$store.commit("authenticationStore/setPageTitle","Create Subject")}},v=m,S=n("2877"),y=n("0d59"),k=n("24e8"),w=n("eebe"),C=n.n(w),x=Object(S["a"])(v,a,r,!1,null,null,null);t["default"]=x.exports;C()(x,"components",{QSpinner:y["a"],QDialog:k["a"]})}}]);