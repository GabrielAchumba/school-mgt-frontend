(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[104],{d046:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():n("Form",{attrs:{formData:e.form},on:{Update:function(t){return e.Update(t)},Cancel:function(t){return e.Cancel(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},a=[],s=(n("d38f"),n("b7dd"),n("0012"),n("6212"),n("950c"),n("2bf3"),n("5b54"),n("ef92"),n("f69e"),n("ad58"),n("d93a"),n("9289")),i=n.n(s),o=n("549c"),c=n.n(o),l=n("52b5"),u=n.n(l),p=(n("1a43"),n("c889"),n("0588")),f=n("82f4"),d=n("5dc2"),m={title:"Update User",qSelects:[{label:"Designation *",value:"",type:"text",list:[],actionName:"designationAction",visible:!0}],qInputs:[{label:"First Name *",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Last Name *",name:"",type:"text",Template:{sn:1,iconName:"",visible:!1}},{label:"User Name *",name:"",type:"text",Template:{sn:2,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Update",name:"Update",icon:"update"}],qDates:[],GroupedCheckBoxes:[]},b=[{title:"Update User",isVisible:!1,message:"Do you want to update a user",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"User updated successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=y(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw s}}}}function y(e,t){if(e){if("string"===typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:p["a"],Form:f["a"]},data:function(){return{selectedUser:{},form:m,dialogs:b}},methods:{Update:function(){var e,t=this,n=-1,r=v(t.dialogs);try{for(r.s();!(e=r.n()).done;){var a=e.value;if(n++,"Update User"==a.title){t.dialogs[n].isVisible=!0;break}}}catch(s){r.e(s)}finally{r.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-user-landing"):this.$router.push("/user-landing")},cancelDialog:function(e){var t,n=this,r=-1,a=v(n.dialogs);try{for(a.s();!(t=a.n()).done;){var s=t.value;if(r++,s.title===e){n.dialogs[r].isVisible=!1;break}}}catch(i){a.e(i)}finally{a.f()}},save:function(){var e=this;return c()(u.a.mark((function t(){var n,r,a,s,i,o,c,l;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,e.$store.getters["authenticationStore/IdentityModel"],r="user/".concat(n.selectedUser.id),a=n.selectedUser.schoolId,s={url:r,req:{firstName:n.form.qInputs[0].name,lastName:n.form.qInputs[1].name,userName:n.form.qInputs[2].name,designationId:n.form.qSelects[0].value,userType:"Member",schoolId:a}},console.log("payload: ",s),e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=9,Object(d["c"])(s);case 9:i=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),o=i.data,c=o.message,l=o.success,l?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=c,n.dialogs[2].isVisible=!0);case 13:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return c()(u.a.mark((function n(){var r,a,s,i,o,c;return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),r=t,a=-1,s=v(r.dialogs),n.prev=4,s.s();case 6:if((i=s.n()).done){n.next=23;break}if(o=i.value,a++,o.title!==e){n.next=21;break}n.t0=e,n.next="Update User"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,r.save();case 15:return n.abrupt("break",19);case 16:return c=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===c.schoolId?t.$router.push("/super-admin-user-landing"):t.$router.push("/user-landing"),n.abrupt("break",19);case 19:return r.dialogs[a].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),s.e(n.t1);case 28:return n.prev=28,s.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()}},created:function(){var e=this;e.selectedUser=this.$store.getters["userStore/selectedUser"],e.form.qInputs[0].name=e.selectedUser.firstName,e.form.qInputs[1].name=e.selectedUser.lastName,e.form.qInputs[2].name=e.selectedUser.userName,e.form.qSelects[0].list=this.$store.getters["staffStore/staffs"].map((function(e){return h(h({},e),{},{type:e.type})}))}},k=S,U=n("a6c2"),O=n("c99e"),x=n("ec6d"),D=n("63c1"),q=n.n(D),I=Object(U["a"])(k,r,a,!1,null,null,null);t["default"]=I.exports;q()(I,"components",{QSpinner:O["a"],QDialog:x["a"]})}}]);