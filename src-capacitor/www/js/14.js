(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"1d31":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():n("Form",{attrs:{formData:e.form},on:{Create:function(t){return e.Create(t)},Cancel:function(t){return e.Cancel(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},r=[],i=(n("d38f"),n("b7dd"),n("0012"),n("6212"),n("950c"),n("2bf3"),n("5b54"),n("549c")),o=n.n(i),s=n("52b5"),c=n.n(s),l=(n("1a43"),n("0588")),u=n("82f4"),d=n("0601"),f={title:"Create About Us",qSelects:[],qInputs:[{label:"Title",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Description",name:"",type:"textarea",Template:{sn:1,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Create",name:"Create",icon:"add"}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""}},p=[{title:"Create About Us",isVisible:!1,message:"Do you want to create about us",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"About us created successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function h(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=b(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw i}}}}function b(e,t){if(e){if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var m={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:l["a"],Form:u["a"]},data:function(){return{form:f,dialogs:p}},methods:{Create:function(){var e,t=this,n=-1,a=h(t.dialogs);try{for(a.s();!(e=a.n()).done;){var r=e.value;if(n++,"Create About Us"==r.title){t.dialogs[n].isVisible=!0;break}}}catch(i){a.e(i)}finally{a.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-about-us-landing"):this.$router.push("/about-us-landing")},cancelDialog:function(e){var t,n=this,a=-1,r=h(n.dialogs);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(a++,i.title===e){n.dialogs[a].isVisible=!1;break}}}catch(o){r.e(o)}finally{r.f()}},save:function(){var e=this;return o()(c.a.mark((function t(){var n,a,r,i,o;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a="aboutus/create",r=e.$store.getters["authenticationStore/IdentityModel"],i={url:a,req:{title:n.form.qInputs[0].name,description:n.form.qInputs[1].name,schoolId:r.schoolId,createdBy:r.id}},console.log("payload: ",i),e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=8,Object(d["b"])(i);case 8:o=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),o.data?n.dialogs[1].isVisible=!0:(n.dialogs[2].message="Failed to create about us",n.dialogs[2].isVisible=!0);case 11:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return o()(c.a.mark((function n(){var a,r,i,o,s,l;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),a=t,r=-1,i=h(a.dialogs),n.prev=4,i.s();case 6:if((o=i.n()).done){n.next=23;break}if(s=o.value,r++,s.title!==e){n.next=21;break}n.t0=e,n.next="Create About Us"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,a.save();case 15:return n.abrupt("break",19);case 16:return l=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===l.schoolId?t.$router.push("/super-admin-about-us-landing"):t.$router.push("/about-us-landing"),n.abrupt("break",19);case 19:return a.dialogs[r].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),i.e(n.t1);case 28:return n.prev=28,i.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()}},created:function(){var e=this;e.form.clearQInputs()}},v=m,y=n("a6c2"),k=n("c99e"),w=n("ec6d"),S=n("63c1"),C=n.n(S),x=Object(y["a"])(v,a,r,!1,null,null,null);t["default"]=x.exports;C()(x,"components",{QSpinner:k["a"],QDialog:w["a"]})}}]);