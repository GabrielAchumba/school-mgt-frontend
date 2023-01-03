(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[84],{d9ba:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-sm"},[n("ExcelImport",{attrs:{title:e.title,applicationColumns:e.applicationColumns},on:{saveTable:function(t){return e.Create(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},i=[],r=(n("d38f"),n("b7dd"),n("1a43"),n("0012"),n("6212"),n("950c"),n("2bf3"),n("5b54"),n("ef92"),n("f69e"),n("ad58"),n("d93a"),n("549c")),s=n.n(r),o=n("9289"),l=n.n(o),c=n("52b5"),u=n.n(c),p=(n("c889"),n("0588")),f=n("6c3a"),b=n("5dc2"),d=[{title:"Create Sessions",isVisible:!1,message:"Do you want to create sessions",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Sessions created successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=g(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,r=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw r}}}}function g(e,t){if(e){if("string"===typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var S={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{ExcelImport:f["a"],MessageBox:p["a"]},data:function(){return{title:"Import Sessions",appVariables:[{variableTitle:"Session Name",variableName:"type"}],applicationColumns:[],dialogs:d,tableRows:[]}},methods:{Create:function(e){var t=this;t.tableRows=e;var n,a=-1,i=m(t.dialogs);try{for(i.s();!(n=i.n()).done;){var r=n.value;if(a++,"Create Sessions"==r.title){t.dialogs[a].isVisible=!0;break}}}catch(s){i.e(s)}finally{i.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-session-landing"):this.$router.push("/session-landing")},cancelDialog:function(e){var t,n=this,a=-1,i=m(n.dialogs);try{for(i.s();!(t=i.n()).done;){var r=t.value;if(a++,r.title===e){n.dialogs[a].isVisible=!1;break}}}catch(s){i.e(s)}finally{i.f()}},setWorkSheetColumns:function(){var e=this,t={label:"",value:"",type:"text",list:[],actionName:"referedByAction",visible:!0};t.list=e.appVariables.map((function(e){return{type:e.variableTitle,value:e.variableTitle,label:e.variableTitle,variableName:e.variableName}}));for(var n=0;n<e.appVariables.length;n++)e.applicationColumns.push(v({},t)),e.applicationColumns[n].id="Application Column ".concat(n+1),e.applicationColumns[n].value=e.applicationColumns[n].list[n].value,e.applicationColumns[n].sn=n;console.log("applicationColumns: ",e.applicationColumns)},createSessions:function(){var e=this;return s()(u.a.mark((function t(){var n,a,i,r,s,o,l,c,p;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a=e.$store.getters["authenticationStore/IdentityModel"],i=n.tableRows.map((function(e){var t,i={},r=m(n.appVariables);try{for(r.s();!(t=r.n()).done;){var s=t.value;i["".concat(s.variableName)]=e["".concat(s.variableTitle)]}}catch(o){r.e(o)}finally{r.f()}return i.schoolId=a.schoolId,i})),r="session/createmany",s={url:r,req:i},e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=8,Object(b["b"])(s);case 8:o=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),l=o.data,c=l.message,p=l.success,n.dialogs[0].isVisible=!1,p?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=c,n.dialogs[2].isVisible=!0);case 13:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return s()(u.a.mark((function n(){var a,i,r,s,o,l;return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),a=t,i=-1,r=m(a.dialogs),n.prev=4,r.s();case 6:if((s=r.n()).done){n.next=23;break}if(o=s.value,i++,o.title!==e){n.next=21;break}n.t0=e,n.next="Create Sessions"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,a.createSessions();case 15:return n.abrupt("break",19);case 16:return l=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===l.schoolId?t.$router.push("/super-admin-session-landing"):t.$router.push("/session-landing"),n.abrupt("break",19);case 19:return a.dialogs[i].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),r.e(n.t1);case 28:return n.prev=28,r.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()}},created:function(){var e=this;e.setWorkSheetColumns(),this.$store.commit("authenticationStore/setIsError",!1),this.$store.commit("authenticationStore/setErrorMessages","")}},w=S,k=n("a6c2"),C=n("c99e"),O=n("ec6d"),x=n("63c1"),E=n.n(x),D=Object(k["a"])(w,a,i,!1,null,null,null);t["default"]=D.exports;E()(D,"components",{QSpinner:C["a"],QDialog:O["a"]})}}]);