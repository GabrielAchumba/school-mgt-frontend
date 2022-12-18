(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[69],{ebda:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():n("Form",{attrs:{formData:e.form},on:{Update:function(t){return e.Update(t)},Cancel:function(t){return e.Cancel(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},a=[],i=(n("23bf"),n("06db"),n("8a81"),n("1c4c"),n("5df3"),n("cadf"),n("ac6a"),n("fa84")),r=n.n(i),o=n("967e"),c=n.n(o),l=(n("7f7f"),n("9bff")),u=n("9437"),d=n("39b2"),f={title:"Update Session",qSelects:[],qInputs:[{label:"Type of Session",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Update",name:"Update",icon:"update"}],qDates:[],GroupedCheckBoxes:[]},p=[{title:"Update Session",isVisible:!1,message:"Do you want to update a session",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Session updated successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function h(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=g(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var s=0,a=function(){};return{s:a,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){o=!0,i=e},f:function(){try{r||null==n.return||n.return()}finally{if(o)throw i}}}}function g(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}var v={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:l["a"],Form:u["a"]},data:function(){return{selectedSession:{},form:f,dialogs:p}},methods:{Update:function(){var e,t=this,n=-1,s=h(t.dialogs);try{for(s.s();!(e=s.n()).done;){var a=e.value;if(n++,"Update Session"==a.title){t.dialogs[n].isVisible=!0;break}}}catch(i){s.e(i)}finally{s.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-session-landing"):this.$router.push("/session-landing")},cancelDialog:function(e){var t,n=this,s=-1,a=h(n.dialogs);try{for(a.s();!(t=a.n()).done;){var i=t.value;if(s++,i.title===e){n.dialogs[s].isVisible=!1;break}}}catch(r){a.e(r)}finally{a.f()}},save:function(){var e=this;return r()(c.a.mark((function t(){var n,s,a,i,r,o,l,u;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,s=e.$store.getters["authenticationStore/IdentityModel"],a="session/".concat(n.selectedSession.id),i={url:a,req:{type:n.form.qInputs[0].name,schoolId:s.schoolId}},e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=7,Object(d["c"])(i);case 7:r=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),o=r.data,l=o.message,u=o.success,u?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=l,n.dialogs[2].isVisible=!0);case 11:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return r()(c.a.mark((function n(){var s,a,i,r,o,l;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:s=t,a=-1,i=h(s.dialogs),n.prev=3,i.s();case 5:if((r=i.n()).done){n.next=22;break}if(o=r.value,a++,o.title!==e){n.next=20;break}n.t0=e,n.next="Update Session"===n.t0?12:"Success"===n.t0?15:18;break;case 12:return n.next=14,s.save();case 14:return n.abrupt("break",18);case 15:return l=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===l.schoolId?t.$router.push("/super-admin-session-landing"):t.$router.push("/session-landing"),n.abrupt("break",18);case 18:return s.dialogs[a].isVisible=!1,n.abrupt("break",22);case 20:n.next=5;break;case 22:n.next=27;break;case 24:n.prev=24,n.t1=n["catch"](3),i.e(n.t1);case 27:return n.prev=27,i.f(),n.finish(27);case 30:case"end":return n.stop()}}),n,null,[[3,24,27,30]])})))()}},created:function(){var e=this;e.selectedSession=this.$store.getters["sessionStore/selectedSession"],e.form.qInputs[0].name=e.selectedSession.type}},b=v,S=n("2877"),y=n("0d59"),k=n("24e8"),w=n("eebe"),x=n.n(w),D=Object(S["a"])(b,s,a,!1,null,null,null);t["default"]=D.exports;x()(D,"components",{QSpinner:y["a"],QDialog:k["a"]})}}]);