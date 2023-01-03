(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[70],{"412a":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():n("Form",{attrs:{formData:e.form},on:{Update:function(t){return e.Update(t)},Cancel:function(t){return e.Cancel(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},r=[],i=(n("d38f"),n("b7dd"),n("0012"),n("6212"),n("950c"),n("2bf3"),n("5b54"),n("549c")),s=n.n(i),o=n("52b5"),c=n.n(o),l=(n("1a43"),n("7b62"),n("0588")),u=n("82f4"),d=n("5dc2"),p={title:"Update Grade",qSelects:[],qInputs:[{label:"Type of Grade",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Score From *",name:"",type:"number",Template:{sn:1,iconName:"",visible:!1}},{label:"Score To *",name:"",type:"number",Template:{sn:2,iconName:"",visible:!1}},{label:"Point *",name:"",type:"number",Template:{sn:3,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Update",name:"Update",icon:"update"}],qDates:[],GroupedCheckBoxes:[]},m=[{title:"Update Grade",isVisible:!1,message:"Do you want to update a grade",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Grade updated successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function f(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=h(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw i}}}}function h(e,t){if(e){if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var g={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:l["a"],Form:u["a"]},data:function(){return{selectedGrade:{},form:p,dialogs:m}},methods:{Update:function(){var e,t=this,n=-1,a=f(t.dialogs);try{for(a.s();!(e=a.n()).done;){var r=e.value;if(n++,"Update Grade"==r.title){t.dialogs[n].isVisible=!0;break}}}catch(i){a.e(i)}finally{a.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-grade-landing"):this.$router.push("/grade-landing")},cancelDialog:function(e){var t,n=this,a=-1,r=f(n.dialogs);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(a++,i.title===e){n.dialogs[a].isVisible=!1;break}}}catch(s){r.e(s)}finally{r.f()}},save:function(){var e=this;return s()(c.a.mark((function t(){var n,a,r,i,s,o,l,u;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a=e.$store.getters["authenticationStore/IdentityModel"],r="grade/".concat(n.selectedGrade.id),i={url:r,req:{type:n.form.qInputs[0].name,from:Number(n.form.qInputs[1].name),to:Number(n.form.qInputs[2].name),point:Number(n.form.qInputs[3].name),schoolId:a.schoolId}},e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=7,Object(d["c"])(i);case 7:s=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),o=s.data,l=o.message,u=o.success,u?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=l,n.dialogs[2].isVisible=!0);case 11:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return s()(c.a.mark((function n(){var a,r,i,s,o,l;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=t,r=-1,i=f(a.dialogs),n.prev=3,i.s();case 5:if((s=i.n()).done){n.next=22;break}if(o=s.value,r++,o.title!==e){n.next=20;break}n.t0=e,n.next="Update Grade"===n.t0?12:"Success"===n.t0?15:18;break;case 12:return n.next=14,a.save();case 14:return n.abrupt("break",18);case 15:return l=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===l.schoolId?t.$router.push("/super-admin-grade-landing"):t.$router.push("/grade-landing"),n.abrupt("break",18);case 18:return a.dialogs[r].isVisible=!1,n.abrupt("break",22);case 20:n.next=5;break;case 22:n.next=27;break;case 24:n.prev=24,n.t1=n["catch"](3),i.e(n.t1);case 27:return n.prev=27,i.f(),n.finish(27);case 30:case"end":return n.stop()}}),n,null,[[3,24,27,30]])})))()}},created:function(){var e=this;e.selectedGrade=this.$store.getters["gradeStore/selectedGrade"],e.form.qInputs[0].name=e.selectedGrade.type,e.form.qInputs[1].name=e.selectedGrade.from,e.form.qInputs[2].name=e.selectedGrade.to,e.form.qInputs[3].name=e.selectedGrade.point}},v=g,y=n("a6c2"),k=n("c99e"),S=n("ec6d"),w=n("63c1"),x=n.n(w),I=Object(y["a"])(v,a,r,!1,null,null,null);t["default"]=I.exports;x()(I,"components",{QSpinner:k["a"],QDialog:S["a"]})}}]);