(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[75],{dc15:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():n("Form",{attrs:{formData:e.form},on:{Update:function(t){return e.Update(t)},Cancel:function(t){return e.Cancel(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},a=[],r=(n("23bf"),n("06db"),n("8a81"),n("1c4c"),n("5df3"),n("cadf"),n("ac6a"),n("456d"),n("d25f"),n("9986"),n("8e6e"),n("c47a")),o=n.n(r),i=n("fa84"),l=n.n(i),c=n("967e"),u=n.n(c),d=(n("7f7f"),n("6d67"),n("9bff")),p=n("9437"),f=n("39b2"),m={title:"Update Student",qSelects:[{label:"Designation *",value:"",type:"text",list:[],actionName:"designationAction",visible:!0},{label:"Level *",value:"",type:"text",list:[],actionName:"levelAction",visible:!0},{label:"Class Room *",value:"",type:"text",list:[],actionName:"classRoomAction",visible:!0},{label:"Session *",value:"",type:"text",list:[],actionName:"sessionAction",visible:!0}],qInputs:[{label:"First Name *",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Last Name *",name:"",type:"text",Template:{sn:1,iconName:"",visible:!1}},{label:"User Name *",name:"",type:"text",Template:{sn:2,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Update",name:"Update",icon:"update"}],qDates:[],GroupedCheckBoxes:[]},v=[{title:"Update Student",isVisible:!1,message:"Do you want to update a Student",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Student updated successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=S(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var s=0,a=function(){};return{s:a,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,r=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw r}}}}function S(e,t){if(e){if("string"===typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}var w={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:d["a"],Form:p["a"]},data:function(){return{selectedStudent:{},form:m,dialogs:v}},methods:{Update:function(){var e,t=this,n=-1,s=h(t.dialogs);try{for(s.s();!(e=s.n()).done;){var a=e.value;if(n++,"Update Student"==a.title){t.dialogs[n].isVisible=!0;break}}}catch(r){s.e(r)}finally{s.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-student-landing"):this.$router.push("/student-landing")},cancelDialog:function(e){var t,n=this,s=-1,a=h(n.dialogs);try{for(a.s();!(t=a.n()).done;){var r=t.value;if(s++,r.title===e){n.dialogs[s].isVisible=!1;break}}}catch(o){a.e(o)}finally{a.f()}},save:function(){var e=this;return l()(u.a.mark((function t(){var n,s,a,r,o,i,l,c;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,s=e.$store.getters["authenticationStore/IdentityModel"],a="user/".concat(n.selectedStudent.id),r={url:a,req:{firstName:n.form.qInputs[0].name,lastName:n.form.qInputs[1].name,userName:n.form.qInputs[2].name,designationId:n.form.qSelects[0].value,levelId:n.form.qSelects[1].value,classRoomId:n.form.qSelects[2].value,sessionId:n.form.qSelects[3].value,userType:"Student",schoolId:s.schoolId}},console.log("payload: ",r),e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=8,Object(f["c"])(r);case 8:o=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),i=o.data,l=i.message,c=i.success,c?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=l,n.dialogs[2].isVisible=!0);case 12:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return l()(u.a.mark((function n(){var s,a,r,o,i,l;return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),s=t,a=-1,r=h(s.dialogs),n.prev=4,r.s();case 6:if((o=r.n()).done){n.next=23;break}if(i=o.value,a++,i.title!==e){n.next=21;break}n.t0=e,n.next="Update Student"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,s.save();case 15:return n.abrupt("break",19);case 16:return l=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===l.schoolId?t.$router.push("/super-admin-student-landing"):t.$router.push("/student-landing"),n.abrupt("break",19);case 19:return s.dialogs[a].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),r.e(n.t1);case 28:return n.prev=28,r.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()}},created:function(){var e=this;e.selectedStudent=this.$store.getters["studentStore/selectedStudent"],console.log("selectedStudent: ",e.selectedStudent),e.form.qInputs[0].name=e.selectedStudent.firstName,e.form.qInputs[1].name=e.selectedStudent.lastName,e.form.qInputs[2].name=e.selectedStudent.userName,e.form.qSelects[0].list=this.$store.getters["staffStore/staffs"].map((function(e){return g(g({},e),{},{type:e.type,value:e.id,label:e.type})})),e.form.qSelects[0].value=e.selectedStudent.designationId,e.form.qSelects[1].list=this.$store.getters["levelStore/levels"].map((function(e){return g(g({},e),{},{type:e.type,value:e.id,label:e.type})})),e.form.qSelects[1].value=e.selectedStudent.levelId,e.form.qSelects[2].list=this.$store.getters["classRoomStore/classRooms"].map((function(e){return g(g({},e),{},{type:e.type,value:e.id,label:e.type})})),e.form.qSelects[2].value=e.selectedStudent.classRoomId,e.form.qSelects[3].list=this.$store.getters["sessionStore/sessions"].map((function(e){return g(g({},e),{},{type:e.type,value:e.id,label:e.type})})),e.form.qSelects[3].value=e.selectedStudent.sessionId}},k=w,q=n("2877"),x=n("0d59"),I=n("24e8"),O=n("eebe"),D=n.n(O),$=Object(q["a"])(k,s,a,!1,null,null,null);t["default"]=$.exports;D()($,"components",{QSpinner:x["a"],QDialog:I["a"]})}}]);