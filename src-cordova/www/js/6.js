(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"9a10":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[n("Form",{attrs:{formData:e.form},on:{Update:function(t){return e.Update(t)},Cancel:function(t){return e.Cancel(t)}}}),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},s=[],o=(n("d38f"),n("b7dd"),n("0012"),n("6212"),n("950c"),n("2bf3"),n("5b54"),n("549c")),r=n.n(o),i=n("52b5"),l=n.n(i),c=(n("1a43"),n("0588")),u=n("82f4"),d=n("5dc2"),f={title:"Update Lesson",qSelects:[],qInputs:[{label:"Type of Lesson",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel"},{label:"Update",name:"Update"}],qDates:[],GroupedCheckBoxes:[]},p=[{title:"Update Lesson",isVisible:!1,message:"Do you want to update a Lesson",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Lesson updated successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function g(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=b(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,s=function(){};return{s:s,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){i=!0,o=e},f:function(){try{r||null==n.return||n.return()}finally{if(i)throw o}}}}function b(e,t){if(e){if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var m={components:{MessageBox:c["a"],Form:u["a"]},data:function(){return{selectedLesson:{},form:f,dialogs:p}},methods:{Update:function(){var e,t=this,n=-1,a=g(t.dialogs);try{for(a.s();!(e=a.n()).done;){var s=e.value;if(n++,"Update Lesson"==s.title){t.dialogs[n].isVisible=!0;break}}}catch(o){a.e(o)}finally{a.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-lesson-landing"):this.$router.push("/lesson-landing")},cancelDialog:function(e){var t,n=this,a=-1,s=g(n.dialogs);try{for(s.s();!(t=s.n()).done;){var o=t.value;if(a++,o.title===e){n.dialogs[a].isVisible=!1;break}}}catch(r){s.e(r)}finally{s.f()}},save:function(){var e=this;return r()(l.a.mark((function t(){var n,a,s,o,r,i,c;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a="lesson/".concat(n.selectedLesson.id),s={url:a,req:{type:n.form.qInputs[0].name}},console.log("payload: ",s),t.next=6,Object(d["c"])(s);case 6:o=t.sent,r=o.data,i=r.message,c=r.success,c?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=i,n.dialogs[2].isVisible=!0);case 9:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return r()(l.a.mark((function n(){var a,s,o,r,i,c;return l.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),a=t,s=-1,o=g(a.dialogs),n.prev=4,o.s();case 6:if((r=o.n()).done){n.next=23;break}if(i=r.value,s++,i.title!==e){n.next=21;break}n.t0=e,n.next="Update Lesson"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,a.save();case 15:return n.abrupt("break",19);case 16:return c=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===c.schoolId?t.$router.push("/super-admin-lesson-landing"):t.$router.push("/lesson-landing"),n.abrupt("break",19);case 19:return a.dialogs[s].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),o.e(n.t1);case 28:return n.prev=28,o.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()}},created:function(){var e=this;e.selectedLesson=this.$store.getters["LessonStore/selectedLesson"],e.form.qInputs[0].name=e.selectedLesson.type}},h=m,y=n("a6c2"),k=n("ec6d"),w=n("63c1"),x=n.n(w),D=Object(y["a"])(h,a,s,!1,null,null,null);t["default"]=D.exports;x()(D,"components",{QDialog:k["a"]})}}]);