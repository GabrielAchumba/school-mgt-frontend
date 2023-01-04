(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[87],{3682:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():n("Form",{attrs:{formData:e.form},on:{Create:function(t){return e.Create(t)},Cancel:function(t){return e.Cancel(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},a=[],s=(n("d38f"),n("b7dd"),n("0012"),n("6212"),n("950c"),n("2bf3"),n("5b54"),n("549c")),o=n.n(s),i=n("52b5"),c=n.n(i),l=(n("1a43"),n("0588")),u=n("82f4"),f=n("5dc2"),p={title:"Create Type of User",qSelects:[],qInputs:[{label:"Type of User",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Create",name:"Create",icon:"add"}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""}},d=[{title:"Create Type of User",isVisible:!1,message:"Do you want to create a type of user",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Type of user created successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function h(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=g(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,s=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw s}}}}function g(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:l["a"],Form:u["a"]},data:function(){return{form:p,dialogs:d}},methods:{Create:function(){var e,t=this,n=-1,r=h(t.dialogs);try{for(r.s();!(e=r.n()).done;){var a=e.value;if(n++,"Create Type of User"==a.title){t.dialogs[n].isVisible=!0;break}}}catch(s){r.e(s)}finally{r.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-staff-landing"):this.$router.push("/staff-landing")},cancelDialog:function(e){var t,n=this,r=-1,a=h(n.dialogs);try{for(a.s();!(t=a.n()).done;){var s=t.value;if(r++,s.title===e){n.dialogs[r].isVisible=!1;break}}}catch(o){a.e(o)}finally{a.f()}},save:function(){var e=this;return o()(c.a.mark((function t(){var n,r,a,s,o,i,l,u;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,r=e.$store.getters["authenticationStore/IdentityModel"],a="staff/create",s={url:a,req:{type:n.form.qInputs[0].name,schoolId:r.schoolId}},console.log("payload: ",s),e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=8,Object(f["b"])(s);case 8:o=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),i=o.data,l=i.message,u=i.success,u?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=l,n.dialogs[2].isVisible=!0);case 12:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return o()(c.a.mark((function n(){var r,a,s,o,i,l;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),r=t,a=-1,s=h(r.dialogs),n.prev=4,s.s();case 6:if((o=s.n()).done){n.next=23;break}if(i=o.value,a++,i.title!==e){n.next=21;break}n.t0=e,n.next="Create Type of User"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,r.save();case 15:return n.abrupt("break",19);case 16:return l=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===l.schoolId?t.$router.push("/super-admin-staff-landing"):t.$router.push("/staff-landing"),n.abrupt("break",19);case 19:return r.dialogs[a].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),s.e(n.t1);case 28:return n.prev=28,s.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()}},created:function(){var e=this;e.form.clearQInputs(),console.log("form: ",e.form)}},b=v,y=n("a6c2"),k=n("c99e"),w=n("ec6d"),S=n("63c1"),C=n.n(S),x=Object(y["a"])(b,r,a,!1,null,null,null);t["default"]=x.exports;C()(x,"components",{QSpinner:k["a"],QDialog:w["a"]})}}]);