(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[60],{dc15:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md"},[a("Form",{attrs:{formData:e.form},on:{Update:function(t){return e.Update(t)},Cancel:function(t){return e.Cancel(t)}}}),e._l(e.dialogs,(function(t){return a("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(a){e.$set(t,"isVisible",a)},expression:"dialog.isVisible"}},[a("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},r=[],s=(a("23bf"),a("06db"),a("8a81"),a("1c4c"),a("5df3"),a("cadf"),a("ac6a"),a("fa84")),i=a.n(s),o=a("967e"),l=a.n(o),c=(a("28a5"),a("7f7f"),a("c5f6"),a("9bff")),u=a("9437"),d=a("39b2"),f={title:"Update Student",qSelects:[{label:"Type of Subscription *",value:"",type:"text",list:[{value:1,type:"90 Days",label:"90 Days"},{value:2,type:"180 Days",label:"180 Days"},{value:3,type:"360 Days",label:"360 Days"}],actionName:"subscriptionType",visible:!0}],qInputs:[{label:"First Name",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Last Name",name:"",type:"text",Template:{sn:1,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Update",name:"Update",icon:"update"}],qDates:[{label:"Date of Birth",name:"2019/02/01"}],GroupedCheckBoxes:[]},b=[{title:"Update Student",isVisible:!1,message:"Do you want to update a Student",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Student updated successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function p(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=m(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,o=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return i=e.done,e},e:function(e){o=!0,s=e},f:function(){try{i||null==a.return||a.return()}finally{if(o)throw s}}}}function m(e,t){if(e){if("string"===typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var g={components:{MessageBox:c["a"],Form:u["a"]},data:function(){return{selectedStudent:{},form:f,dialogs:b}},methods:{Update:function(){var e,t=this,a=-1,n=p(t.dialogs);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(a++,"Update Student"==r.title){t.dialogs[a].isVisible=!0;break}}}catch(s){n.e(s)}finally{n.f()}},Cancel:function(){this.$router.push("/student-landing")},cancelDialog:function(e){var t,a=this,n=-1,r=p(a.dialogs);try{for(r.s();!(t=r.n()).done;){var s=t.value;if(n++,s.title===e){a.dialogs[n].isVisible=!1;break}}}catch(i){r.e(i)}finally{r.f()}},save:function(){var e=this;return i()(l.a.mark((function t(){var a,n,r,s,i,o,c,u,f;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,n=e.$store.getters["authenticationStore/IdentityModel"],r="student/".concat(a.selectedStudent.id),s=a.form.qDates[0].name.split("/"),i={url:r,req:{firstName:a.form.qInputs[0].name,lastName:a.form.qInputs[1].name,birthYear:Number(s[0]),birthMonth:Number(s[1]),birthDay:Number(s[1]),subscriptionType:a.form.qSelects[0].value.value,schoolId:n.schoolId}},console.log("payload: ",i),t.next=8,Object(d["c"])(i);case 8:o=t.sent,c=o.data,u=c.message,f=c.success,f?a.dialogs[1].isVisible=!0:(a.dialogs[2].message=u,a.dialogs[2].isVisible=!0);case 11:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return i()(l.a.mark((function a(){var n,r,s,i,o;return l.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:console.log("payload: ",e),n=t,r=-1,s=p(n.dialogs),a.prev=4,s.s();case 6:if((i=s.n()).done){a.next=22;break}if(o=i.value,r++,o.title!==e){a.next=20;break}a.t0=e,a.next="Update Student"===a.t0?13:"Success"===a.t0?16:18;break;case 13:return a.next=15,n.save();case 15:return a.abrupt("break",18);case 16:return t.$router.push("/student-landing"),a.abrupt("break",18);case 18:return n.dialogs[r].isVisible=!1,a.abrupt("break",22);case 20:a.next=6;break;case 22:a.next=27;break;case 24:a.prev=24,a.t1=a["catch"](4),s.e(a.t1);case 27:return a.prev=27,s.f(),a.finish(27);case 30:case"end":return a.stop()}}),a,null,[[4,24,27,30]])})))()}},created:function(){var e=this;e.selectedStudent=this.$store.getters["studentStore/selectedStudent"],console.log("selectedStudent: ",e.selectedStudent),e.form.qInputs[0].name=e.selectedStudent.firstName,e.form.qInputs[1].name=e.selectedStudent.lastName,e.form.qSelects[0].value=e.selectedStudent.subscriptionType;var t=e.selectedStudent.birthDay>9?toString(e.selectedStudent.birthDay):"0".concat(e.selectedStudent.birthDay),a=e.selectedStudent.birthMonth>9?toString(e.selectedStudent.birthMonth):"0".concat(e.selectedStudent.birthMonth);e.form.qDates[0].name="".concat(e.selectedStudent.birthYear,"/").concat(a,"/").concat(t)}},y=g,h=a("2877"),S=a("24e8"),D=a("eebe"),k=a.n(D),w=Object(h["a"])(y,n,r,!1,null,null,null);t["default"]=w.exports;k()(w,"components",{QDialog:S["a"]})}}]);