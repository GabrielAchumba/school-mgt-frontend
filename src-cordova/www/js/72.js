(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[72],{"4a62":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-sm"},[a("ExcelImport",{attrs:{title:e.title,applicationColumns:e.applicationColumns},on:{saveTable:function(t){return e.Create(t)}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[a("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[a("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return a("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(a){e.$set(t,"isVisible",a)},expression:"dialog.isVisible"}},[a("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},r=[],i=(a("d38f"),a("b7dd"),a("1a43"),a("0012"),a("6212"),a("950c"),a("2bf3"),a("5b54"),a("ef92"),a("f69e"),a("ad58"),a("d93a"),a("9289")),o=a.n(i),s=a("549c"),l=a.n(s),c=(a("c889"),a("52b5")),u=a.n(c),p=a("0588"),d=a("6c3a"),f=a("5dc2"),b=[{title:"Create Grades",isVisible:!1,message:"Do you want to create grades",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Grade created successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=g(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(s)throw i}}}}function g(e,t){if(e){if("string"===typeof e)return y(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var w={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{ExcelImport:d["a"],MessageBox:p["a"]},data:function(){return{title:"Import Grades",appVariables:[{variableTitle:"From",variableName:"from"},{variableTitle:"To",variableName:"to"},{variableTitle:"Point",variableName:"point"},{variableTitle:"Grade",variableName:"type"}],applicationColumns:[],dialogs:b,tableRows:[]}},methods:{Create:function(e){var t=this;t.tableRows=e;var a,n=-1,r=m(t.dialogs);try{for(r.s();!(a=r.n()).done;){var i=a.value;if(n++,"Create Grades"==i.title){t.dialogs[n].isVisible=!0;break}}}catch(o){r.e(o)}finally{r.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-grade-landing"):this.$router.push("/grade-landing")},cancelDialog:function(e){var t,a=this,n=-1,r=m(a.dialogs);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(n++,i.title===e){a.dialogs[n].isVisible=!1;break}}}catch(o){r.e(o)}finally{r.f()}},createGrades:function(){var e=this;return l()(u.a.mark((function t(){var a,n,r,i,o,s,l,c,p,d,b,v,h,g,y,w;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e,n=e.$store.getters["authenticationStore/IdentityModel"],r=[],i=m(a.tableRows);try{for(i.s();!(o=i.n()).done;){s=o.value,l={},c=m(a.appVariables);try{for(c.s();!(p=c.n()).done;)d=p.value,l["".concat(d.variableName)]=s["".concat(d.variableTitle)]}catch(u){c.e(u)}finally{c.f()}l.schoolId=n.schoolId,r.push(l)}}catch(u){i.e(u)}finally{i.f()}return console.log("Grades: ",r),b="grade/createmany",v={url:b,req:r},e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=11,Object(f["b"])(v);case 11:h=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),g=h.data,y=g.message,w=g.success,a.dialogs[0].isVisible=!1,w?a.dialogs[1].isVisible=!0:(a.dialogs[2].message=y,a.dialogs[2].isVisible=!0);case 16:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return l()(u.a.mark((function a(){var n,r,i,o,s,l;return u.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:console.log("payload: ",e),n=t,r=-1,i=m(n.dialogs),a.prev=4,i.s();case 6:if((o=i.n()).done){a.next=23;break}if(s=o.value,r++,s.title!==e){a.next=21;break}a.t0=e,a.next="Create Grades"===a.t0?13:"Success"===a.t0?16:19;break;case 13:return a.next=15,n.createGrades();case 15:return a.abrupt("break",19);case 16:return l=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===l.schoolId?t.$router.push("/super-admin-grade-landing"):t.$router.push("/grade-landing"),a.abrupt("break",19);case 19:return n.dialogs[r].isVisible=!1,a.abrupt("break",23);case 21:a.next=6;break;case 23:a.next=28;break;case 25:a.prev=25,a.t1=a["catch"](4),i.e(a.t1);case 28:return a.prev=28,i.f(),a.finish(28);case 31:case"end":return a.stop()}}),a,null,[[4,25,28,31]])})))()},setWorkSheetColumns:function(){var e=this,t={label:"",value:"",type:"text",list:[],actionName:"referedByAction",visible:!0};t.list=e.appVariables.map((function(e){return{type:e.variableTitle,value:e.variableTitle,label:e.variableTitle,variableName:e.variableName}}));for(var a=0;a<e.appVariables.length;a++)e.applicationColumns.push(h({},t)),e.applicationColumns[a].id="Application Column ".concat(a+1),e.applicationColumns[a].value=e.applicationColumns[a].list[a].value,e.applicationColumns[a].sn=a}},created:function(){var e=this;e.setWorkSheetColumns(),this.$store.commit("authenticationStore/setIsError",!1),this.$store.commit("authenticationStore/setErrorMessages",""),this.$store.commit("authenticationStore/setPageTitle","Import Grades")}},k=w,S=a("a6c2"),C=a("c99e"),O=a("ec6d"),x=a("63c1"),E=a.n(x),D=Object(S["a"])(k,n,r,!1,null,null,null);t["default"]=D.exports;E()(D,"components",{QSpinner:C["a"],QDialog:O["a"]})}}]);