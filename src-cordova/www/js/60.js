(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[60],{"7eb3":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():n("Form",{attrs:{formData:e.form},on:{Update:function(t){return e.Update(t)},Cancel:function(t){return e.Cancel(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},i=[],o=(n("d38f"),n("b7dd"),n("0012"),n("6212"),n("950c"),n("2bf3"),n("5b54"),n("549c")),r=n.n(o),s=n("52b5"),c=n.n(s),l=(n("1a43"),n("0588")),u=n("82f4"),f=n("0601"),d={title:"Update Contact",qSelects:[],qInputs:[{label:"Title",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Description",name:"",type:"textarea",Template:{sn:1,iconName:"",visible:!1}},{label:"Official Email Address",name:"",type:"text",Template:{sn:2,iconName:"",visible:!1}},{label:"Official First Phone Number",name:"",type:"text",Template:{sn:3,iconName:"",visible:!1}},{label:"Official Second Phone Number",name:"",type:"text",Template:{sn:4,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Update",name:"Update",icon:"update"}],qDates:[],GroupedCheckBoxes:[]},p=[{title:"Update Contact",isVisible:!1,message:"Do you want to update contact",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Contact updated successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function m(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=h(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){s=!0,o=e},f:function(){try{r||null==n.return||n.return()}finally{if(s)throw o}}}}function h(e,t){if(e){if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var g={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:l["a"],Form:u["a"]},data:function(){return{selectedContact:{},form:d,dialogs:p}},methods:{Update:function(){var e,t=this,n=-1,a=m(t.dialogs);try{for(a.s();!(e=a.n()).done;){var i=e.value;if(n++,"Update Contact"==i.title){t.dialogs[n].isVisible=!0;break}}}catch(o){a.e(o)}finally{a.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-contact-landing"):this.$router.push("/contact-landing")},cancelDialog:function(e){var t,n=this,a=-1,i=m(n.dialogs);try{for(i.s();!(t=i.n()).done;){var o=t.value;if(a++,o.title===e){n.dialogs[a].isVisible=!1;break}}}catch(r){i.e(r)}finally{i.f()}},save:function(){var e=this;return r()(c.a.mark((function t(){var n,a,i,o,r,s,l,u;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a="contact/".concat(n.selectedContact.id),i=e.$store.getters["authenticationStore/IdentityModel"],o={url:a,req:{title:n.form.qInputs[0].name,description:n.form.qInputs[1].name,officialEmail:n.form.qInputs[2].name,officialPhoneNumber1:n.form.qInputs[3].name,officialPhoneNumber2:n.form.qInputs[4].name,schoolId:i.schoolId}},console.log("payload: ",o),e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=8,Object(f["d"])(o);case 8:r=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),s=r.data,l=s.message,u=s.success,u?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=l,n.dialogs[2].isVisible=!0);case 12:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return r()(c.a.mark((function n(){var a,i,o,r,s,l;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),a=t,i=-1,o=m(a.dialogs),n.prev=4,o.s();case 6:if((r=o.n()).done){n.next=23;break}if(s=r.value,i++,s.title!==e){n.next=21;break}n.t0=e,n.next="Update Contact"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,a.save();case 15:return n.abrupt("break",19);case 16:return l=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===l.schoolId?t.$router.push("/super-admin-contact-landing"):t.$router.push("/contact-landing"),n.abrupt("break",19);case 19:return a.dialogs[i].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),o.e(n.t1);case 28:return n.prev=28,o.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()}},created:function(){var e=this;e.selectedContact=this.$store.getters["ContactStore/selectedContact"],e.form.qInputs[0].name=e.selectedContact.title,e.form.qInputs[1].name=e.selectedContact.description,e.form.qInputs[2].name=e.selectedContact.officialEmail,e.form.qInputs[3].name=e.selectedContact.officialPhoneNumber1,e.form.qInputs[4].name=e.selectedContact.officialPhoneNumber2}},v=g,y=n("a6c2"),k=n("c99e"),S=n("ec6d"),w=n("63c1"),C=n.n(w),x=Object(y["a"])(v,a,i,!1,null,null,null);t["default"]=x.exports;C()(x,"components",{QSpinner:k["a"],QDialog:S["a"]})}}]);