(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[90],{a468:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():n("Form",{attrs:{formData:e.form},on:{Update:function(t){return e.Update(t)},Cancel:function(t){return e.Cancel(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},r=[],s=(n("23bf"),n("06db"),n("8a81"),n("1c4c"),n("5df3"),n("cadf"),n("ac6a"),n("fa84")),i=n.n(s),o=n("967e"),c=n.n(o),l=(n("7f7f"),n("9bff")),u=n("9437"),f=n("39b2"),d={title:"Update Type  of User",qSelects:[],qInputs:[{label:"Type of User",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close",btnDisabled:!1},{label:"Update",name:"Update",icon:"update",btnDisabled:!1}],qDates:[],GroupedCheckBoxes:[]},p=[{title:"Update Type of User",isVisible:!1,message:"Do you want to update a type of user",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Type of user updated successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function h(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=b(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw s}}}}function b(e,t){if(e){if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var m={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:l["a"],Form:u["a"]},data:function(){return{selectedStaff:{},form:d,dialogs:p}},methods:{Update:function(){var e,t=this,n=-1,a=h(t.dialogs);try{for(a.s();!(e=a.n()).done;){var r=e.value;if(n++,"Update Type of User"==r.title){t.dialogs[n].isVisible=!0,t.form.qBtns[1].btnDisabled=!0;break}}}catch(s){a.e(s)}finally{a.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-staff-landing"):this.$router.push("/staff-landing")},cancelDialog:function(e){var t,n=this,a=-1,r=h(n.dialogs);try{for(r.s();!(t=r.n()).done;){var s=t.value;if(a++,s.title===e){n.dialogs[a].isVisible=!1;break}}}catch(i){r.e(i)}finally{r.f()}n.form.qBtns[0].btnDisabled=!1,n.form.qBtns[1].btnDisabled=!1},save:function(){var e=this;return i()(c.a.mark((function t(){var n,a,r,s,i,o,l,u;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a=e.$store.getters["authenticationStore/IdentityModel"],r="staff/".concat(n.selectedStaff.id),s={url:r,req:{type:n.form.qInputs[0].name,schoolId:a.schoolId}},console.log("payload: ",s),e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=8,Object(f["c"])(s);case 8:i=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),o=i.data,l=o.message,u=o.success,u?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=l,n.dialogs[2].isVisible=!0);case 12:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return i()(c.a.mark((function n(){var a,r,s,i,o,l;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),a=t,r=-1,s=h(a.dialogs),n.prev=4,s.s();case 6:if((i=s.n()).done){n.next=24;break}if(o=i.value,r++,o.title!==e){n.next=22;break}n.t0=e,n.next="Update Type of User"===n.t0?13:"Success"===n.t0?17:20;break;case 13:return n.next=15,a.save();case 15:return a.form.qBtns[1].btnDisabled=!1,n.abrupt("break",20);case 17:return l=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===l.schoolId?t.$router.push("/super-admin-staff-landing"):t.$router.push("/staff-landing"),n.abrupt("break",20);case 20:return a.dialogs[r].isVisible=!1,n.abrupt("break",24);case 22:n.next=6;break;case 24:n.next=29;break;case 26:n.prev=26,n.t1=n["catch"](4),s.e(n.t1);case 29:return n.prev=29,s.f(),n.finish(29);case 32:case"end":return n.stop()}}),n,null,[[4,26,29,32]])})))()}},created:function(){var e=this;e.selectedStaff=this.$store.getters["staffStore/selectedStaff"],e.form.qInputs[0].name=e.selectedStaff.type,this.$store.commit("authenticationStore/setPageTitle","Update Designation")}},v=m,y=n("2877"),S=n("0d59"),k=n("24e8"),w=n("eebe"),D=n.n(w),x=Object(y["a"])(v,a,r,!1,null,null,null);t["default"]=x.exports;D()(x,"components",{QSpinner:S["a"],QDialog:k["a"]})}}]);