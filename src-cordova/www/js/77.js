(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[77],{"1b1e":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():n("Form",{attrs:{formData:e.form},on:{Create:function(t){return e.Create(t)},Cancel:function(t){return e.Cancel(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},a=[],i=(n("d38f"),n("b7dd"),n("0012"),n("6212"),n("950c"),n("2bf3"),n("5b54"),n("549c")),s=n.n(i),o=n("52b5"),l=n.n(o),c=(n("1a43"),n("0588")),u=n("82f4"),f=n("5dc2"),d={title:"Create Level",qSelects:[],qInputs:[{label:"Type of Level",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Create",name:"Create",icon:"add"}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""}},p=[{title:"Create Level",isVisible:!1,message:"Do you want to create a level",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Level created successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function h(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=v(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw i}}}}function v(e,t){if(e){if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:c["a"],Form:u["a"]},data:function(){return{form:d,dialogs:p}},methods:{Create:function(){var e,t=this,n=-1,r=h(t.dialogs);try{for(r.s();!(e=r.n()).done;){var a=e.value;if(n++,"Create Level"==a.title){t.dialogs[n].isVisible=!0;break}}}catch(i){r.e(i)}finally{r.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-level-landing"):this.$router.push("/level-landing")},cancelDialog:function(e){var t,n=this,r=-1,a=h(n.dialogs);try{for(a.s();!(t=a.n()).done;){var i=t.value;if(r++,i.title===e){n.dialogs[r].isVisible=!1;break}}}catch(s){a.e(s)}finally{a.f()}},save:function(){var e=this;return s()(l.a.mark((function t(){var n,r,a,i,s,o,c,u;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,r=e.$store.getters["authenticationStore/IdentityModel"],a="level/create",i={url:a,req:{type:n.form.qInputs[0].name,schoolId:r.schoolId}},e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=7,Object(f["b"])(i);case 7:s=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),o=s.data,c=o.message,u=o.success,u?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=c,n.dialogs[2].isVisible=!0);case 11:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return s()(l.a.mark((function n(){var r,a,i,s,o,c;return l.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t,a=-1,i=h(r.dialogs),n.prev=3,i.s();case 5:if((s=i.n()).done){n.next=22;break}if(o=s.value,a++,o.title!==e){n.next=20;break}n.t0=e,n.next="Create Level"===n.t0?12:"Success"===n.t0?15:18;break;case 12:return n.next=14,r.save();case 14:return n.abrupt("break",18);case 15:return c=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===c.schoolId?t.$router.push("/super-admin-level-landing"):t.$router.push("/level-landing"),n.abrupt("break",18);case 18:return r.dialogs[a].isVisible=!1,n.abrupt("break",22);case 20:n.next=5;break;case 22:n.next=27;break;case 24:n.prev=24,n.t1=n["catch"](3),i.e(n.t1);case 27:return n.prev=27,i.f(),n.finish(27);case 30:case"end":return n.stop()}}),n,null,[[3,24,27,30]])})))()}},created:function(){var e=this;e.form.clearQInputs()}},b=m,y=n("a6c2"),k=n("c99e"),w=n("ec6d"),S=n("63c1"),C=n.n(S),x=Object(y["a"])(b,r,a,!1,null,null,null);t["default"]=x.exports;C()(x,"components",{QSpinner:k["a"],QDialog:w["a"]})}}]);