(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{3700:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[n("Form",{attrs:{formData:e.form},on:{Update:function(t){return e.Update(t)},Cancel:function(t){return e.Cancel(t)}}}),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},r=[],o=(n("23bf"),n("06db"),n("8a81"),n("1c4c"),n("5df3"),n("cadf"),n("ac6a"),n("fa84")),i=n.n(o),s=n("967e"),c=n.n(s),l=(n("7f7f"),n("9bff")),u=n("9437"),f=n("39b2"),d={title:"Update Subject",qSelects:[],qInputs:[{label:"Type of Subject",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Update",name:"Update",icon:"update"}],qDates:[],GroupedCheckBoxes:[]},b=[{title:"Update Subject",isVisible:!1,message:"Do you want to update a Subject",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Subject updated successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function p(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=g(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}function g(e,t){if(e){if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var m={components:{MessageBox:l["a"],Form:u["a"]},data:function(){return{selectedSubject:{},form:d,dialogs:b}},methods:{Update:function(){var e,t=this,n=-1,a=p(t.dialogs);try{for(a.s();!(e=a.n()).done;){var r=e.value;if(n++,"Update Subject"==r.title){t.dialogs[n].isVisible=!0;break}}}catch(o){a.e(o)}finally{a.f()}},Cancel:function(){this.$router.push("/subject-landing")},cancelDialog:function(e){var t,n=this,a=-1,r=p(n.dialogs);try{for(r.s();!(t=r.n()).done;){var o=t.value;if(a++,o.title===e){n.dialogs[a].isVisible=!1;break}}}catch(i){r.e(i)}finally{r.f()}},save:function(){var e=this;return i()(c.a.mark((function t(){var n,a,r,o,i,s,l,u;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a=e.$store.getters["authenticationStore/IdentityModel"],r="subject/".concat(n.selectedSubject.id),o={url:r,req:{type:n.form.qInputs[0].name,schoolId:a.schoolId}},console.log("payload: ",o),t.next=7,Object(f["c"])(o);case 7:i=t.sent,s=i.data,l=s.message,u=s.success,u?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=l,n.dialogs[2].isVisible=!0);case 10:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return i()(c.a.mark((function n(){var a,r,o,i,s;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),a=t,r=-1,o=p(a.dialogs),n.prev=4,o.s();case 6:if((i=o.n()).done){n.next=22;break}if(s=i.value,r++,s.title!==e){n.next=20;break}n.t0=e,n.next="Update Subject"===n.t0?13:"Success"===n.t0?16:18;break;case 13:return n.next=15,a.save();case 15:return n.abrupt("break",18);case 16:return t.$router.push("/subject-landing"),n.abrupt("break",18);case 18:return a.dialogs[r].isVisible=!1,n.abrupt("break",22);case 20:n.next=6;break;case 22:n.next=27;break;case 24:n.prev=24,n.t1=n["catch"](4),o.e(n.t1);case 27:return n.prev=27,o.f(),n.finish(27);case 30:case"end":return n.stop()}}),n,null,[[4,24,27,30]])})))()}},created:function(){var e=this;e.selectedSubject=this.$store.getters["subjectStore/selectedSubject"],e.form.qInputs[0].name=e.selectedSubject.type}},y=m,h=n("2877"),k=n("24e8"),S=n("eebe"),j=n.n(S),w=Object(h["a"])(y,a,r,!1,null,null,null);t["default"]=w.exports;j()(w,"components",{QDialog:k["a"]})}}]);