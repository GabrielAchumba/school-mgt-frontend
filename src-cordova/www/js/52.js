(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[52],{"2b55":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():n("Form",{attrs:{formData:e.form},on:{Create:function(t){return e.Create(t)},Cancel:function(t){return e.Cancel(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},a=[],i=(n("d38f"),n("b7dd"),n("0012"),n("6212"),n("950c"),n("2bf3"),n("5b54"),n("549c")),r=n.n(i),o=n("52b5"),c=n.n(o),l=(n("1a43"),n("0588")),u=n("82f4"),f=n("5dc2"),d={title:"Create Continuous Assessment",qSelects:[{label:"Level *",value:"",type:"text",list:[],actionName:"levelAction",visible:!0},{label:"Subject *",value:"",type:"text",list:[],actionName:"subjectAction",visible:!0}],qInputs:[{label:"Title",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Maximum Score",name:"",type:"number",Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Create",name:"Create",icon:"add"}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""},clearQSelects:function(){var e=0;for(e=0;e<this.qSelects.length;e++)this.qSelects[e].value="",this.qSelects[e].list=[],this.qSelects[e].visible=!0}},m=[{title:"Create Continuous Assessment",isVisible:!1,message:"Do you want to create continuous assessment",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Continuous assessment created successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function p(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=h(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var s=0,a=function(){};return{s:a,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){o=!0,i=e},f:function(){try{r||null==n.return||n.return()}finally{if(o)throw i}}}}function h(e,t){if(e){if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}var b={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:l["a"],Form:u["a"]},data:function(){return{form:d,dialogs:m}},methods:{Create:function(){var e,t=this,n=-1,s=p(t.dialogs);try{for(s.s();!(e=s.n()).done;){var a=e.value;if(n++,"Create Continuous Assessment"==a.title){t.dialogs[n].isVisible=!0;break}}}catch(i){s.e(i)}finally{s.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-ca-landing"):this.$router.push("/ca-landing")},cancelDialog:function(e){var t,n=this,s=-1,a=p(n.dialogs);try{for(a.s();!(t=a.n()).done;){var i=t.value;if(s++,i.title===e){n.dialogs[s].isVisible=!1;break}}}catch(r){a.e(r)}finally{a.f()}},save:function(){var e=this;return r()(c.a.mark((function t(){var n,s,a,i,r,o,l,u;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,s="ca/create",a=e.$store.getters["authenticationStore/IdentityModel"],i={url:s,req:{createdBy:a.id,schoolId:a.schoolId,title:n.form.qInputs[0].name,maximumScore:n.form.qInputs[1].name,levelId:n.form.qSelects[0].value,subjectId:n.form.qSelects[1].value}},console.log("payload: ",i),e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=8,Object(f["b"])(i);case 8:r=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),o=r.data,l=o.message,u=o.success,n.dialogs[0].isVisible=!1,u?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=l,n.dialogs[2].isVisible=!0);case 13:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return r()(c.a.mark((function n(){var s,a,i,r,o,l;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),s=t,a=-1,i=p(s.dialogs),n.prev=4,i.s();case 6:if((r=i.n()).done){n.next=23;break}if(o=r.value,a++,o.title!==e){n.next=21;break}n.t0=e,n.next="Create Continuous Assessment"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,s.save();case 15:return n.abrupt("break",19);case 16:return l=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===l.schoolId?t.$router.push("/super-admin-ca-landing"):t.$router.push("/ca-landing"),n.abrupt("break",19);case 19:return s.dialogs[a].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),i.e(n.t1);case 28:return n.prev=28,i.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()}},created:function(){var e=this;e.form.clearQInputs(),e.form.clearQSelects(),e.form.qSelects[0].list=this.$store.getters["subjectStore/subjects"]}},g=b,S=n("a6c2"),y=n("c99e"),k=n("ec6d"),w=n("63c1"),C=n.n(w),x=Object(S["a"])(g,s,a,!1,null,null,null);t["default"]=x.exports;C()(x,"components",{QSpinner:y["a"],QDialog:k["a"]})}}]);