(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{b482:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[n("Form",{attrs:{formData:e.form},on:{Update:function(t){return e.Update(t)},Cancel:function(t){return e.Cancel(t)}}}),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},s=[],r=(n("23bf"),n("06db"),n("8a81"),n("1c4c"),n("5df3"),n("cadf"),n("ac6a"),n("fa84")),o=n.n(r),i=n("967e"),l=n.n(i),c=(n("7f7f"),n("9bff")),u=n("9437"),f=n("39b2"),d={title:"Update Lesson",qSelects:[],qInputs:[{label:"Type of Lesson",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel"},{label:"Update",name:"Update"}],qDates:[],GroupedCheckBoxes:[]},p=[{title:"Update Lesson",isVisible:!1,message:"Do you want to update a Lesson",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Lesson updated successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function b(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=g(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,s=function(){};return{s:s,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,r=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw r}}}}function g(e,t){if(e){if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var m={components:{MessageBox:c["a"],Form:u["a"]},data:function(){return{selectedLesson:{},form:d,dialogs:p}},methods:{Update:function(){var e,t=this,n=-1,a=b(t.dialogs);try{for(a.s();!(e=a.n()).done;){var s=e.value;if(n++,"Update Lesson"==s.title){t.dialogs[n].isVisible=!0;break}}}catch(r){a.e(r)}finally{a.f()}},Cancel:function(){this.$router.push("/lesson-landing")},cancelDialog:function(e){var t,n=this,a=-1,s=b(n.dialogs);try{for(s.s();!(t=s.n()).done;){var r=t.value;if(a++,r.title===e){n.dialogs[a].isVisible=!1;break}}}catch(o){s.e(o)}finally{s.f()}},save:function(){var e=this;return o()(l.a.mark((function t(){var n,a,s,r,o,i,c;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a="lesson/".concat(n.selectedLesson.id),s={url:a,req:{type:n.form.qInputs[0].name}},console.log("payload: ",s),t.next=6,Object(f["c"])(s);case 6:r=t.sent,o=r.data,i=o.message,c=o.success,c?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=i,n.dialogs[2].isVisible=!0);case 9:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return o()(l.a.mark((function n(){var a,s,r,o,i;return l.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),a=t,s=-1,r=b(a.dialogs),n.prev=4,r.s();case 6:if((o=r.n()).done){n.next=22;break}if(i=o.value,s++,i.title!==e){n.next=20;break}n.t0=e,n.next="Update Lesson"===n.t0?13:"Success"===n.t0?16:18;break;case 13:return n.next=15,a.save();case 15:return n.abrupt("break",18);case 16:return t.$router.push("/lesson-landing"),n.abrupt("break",18);case 18:return a.dialogs[s].isVisible=!1,n.abrupt("break",22);case 20:n.next=6;break;case 22:n.next=27;break;case 24:n.prev=24,n.t1=n["catch"](4),r.e(n.t1);case 27:return n.prev=27,r.f(),n.finish(27);case 30:case"end":return n.stop()}}),n,null,[[4,24,27,30]])})))()}},created:function(){var e=this;e.selectedLesson=this.$store.getters["LessonStore/selectedLesson"],e.form.qInputs[0].name=e.selectedLesson.type}},y=m,h=n("2877"),k=n("24e8"),w=n("eebe"),x=n.n(w),D=Object(h["a"])(y,a,s,!1,null,null,null);t["default"]=D.exports;x()(D,"components",{QDialog:k["a"]})}}]);