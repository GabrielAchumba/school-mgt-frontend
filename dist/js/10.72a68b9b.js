(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"1ed6":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"q-pa-md"},[s("Form",{attrs:{formData:e.form},on:{Update:function(t){return e.Update(t)},Cancel:function(t){return e.Cancel(t)},deleteResult:function(t){return e.deleteResult(t)},typeOfInstructor:function(t){return e.typeOfInstructor(t)}}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[s("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[s("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return s("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(s){e.$set(t,"isVisible",s)},expression:"dialog.isVisible"}},[s("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},n=[],r=(s("06db"),s("8a81"),s("1c4c"),s("5df3"),s("cadf"),s("ac6a"),s("456d"),s("d25f"),s("9986"),s("8e6e"),s("c47a")),l=s.n(r),o=s("fa84"),i=s.n(o),c=s("967e"),u=s.n(c),d=(s("c5f6"),s("7f7f"),s("6d67"),s("23bf"),s("9bff")),p=s("9437"),f=s("39b2"),m=s("6132"),v={title:"Update Result",qSelects:[{label:"Class Room",value:"",type:"text",list:[],actionName:"classRoom",visible:!0},{label:"Subject",value:"",type:"text",list:[],actionName:"subject",visible:!0},{label:"Student",value:"",type:"text",list:[],actionName:"student",visible:!0},{label:"Type of Instructor",value:"",type:"text",list:[],actionName:"typeOfInstructor",visible:!0},{label:"Instructor Full Name",value:"",type:"text",list:[],actionName:"instructor",visible:!0},{label:"Type of Assessment",value:"",type:"text",list:[],actionName:"instructor",visible:!0},{label:"Level",value:"",type:"text",list:[],actionName:"level",visible:!0},{label:"Session",value:"",type:"text",list:[],actionName:"session",visible:!0}],qInputs:[{label:"Score",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Maximum Score",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Delete",name:"deleteResult",icon:"remove"},{label:"Update",name:"Update",icon:"update"}],qDates:[{label:"Updated At",name:"2019/02/01"}],GroupedCheckBoxes:[]},b=[{title:"Update Result",isVisible:!1,message:"Do you want to update a Result",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Update Success",isVisible:!1,message:"Result updated successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Update Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Delete Result",isVisible:!1,message:"Do you want to delete a Result",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Delete Success",isVisible:!1,message:"Result deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Delete Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function g(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function y(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?g(Object(s),!0).forEach((function(t){l()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function h(e,t){var s="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!s){if(Array.isArray(e)||(s=S(e))||t&&e&&"number"===typeof e.length){s&&(e=s);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,o=!1;return{s:function(){s=s.call(e)},n:function(){var e=s.next();return l=e.done,e},e:function(e){o=!0,r=e},f:function(){try{l||null==s.return||s.return()}finally{if(o)throw r}}}}function S(e,t){if(e){if("string"===typeof e)return w(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,a=new Array(t);s<t;s++)a[s]=e[s];return a}var k={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:d["a"],Form:p["a"]},data:function(){return{selectedResult:{},form:v,dialogs:b}},methods:{deleteResult:function(){var e=this;e.dialogs[3].isVisible=!0},Update:function(){var e,t=this,s=-1,a=h(t.dialogs);try{for(a.s();!(e=a.n()).done;){var n=e.value;if(s++,"Update Result"==n.title){t.dialogs[s].isVisible=!0;break}}}catch(r){a.e(r)}finally{a.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-results"):this.$router.push("/results")},cancelDialog:function(e){var t,s=this,a=-1,n=h(s.dialogs);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(a++,r.title===e){s.dialogs[a].isVisible=!1;break}}}catch(l){n.e(l)}finally{n.f()}},save:function(){var e=this;return i()(u.a.mark((function t(){var s,a,n,r,l,o,i,c;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e,a=e.$store.getters["authenticationStore/IdentityModel"],n="result/".concat(s.selectedResult.id),r={url:n,req:{score:Number(s.form.qInputs[0].name),scoreMax:Number(s.form.qInputs[1].name),classRoomId:s.form.qSelects[0].value,subjectId:s.form.qSelects[1].value,studentId:s.form.qSelects[2].value,designationId:s.form.qSelects[3].value,teacherId:s.form.qSelects[4].value,assessmentId:s.form.qSelects[5].value,levelId:s.form.qSelects[6].value,sessionId:s.form.qSelects[7].value,updatedAt:s.form.qDates[0].name,schoolId:a.schoolId}},console.log("payload: ",r),e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=8,Object(f["c"])(r);case 8:l=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),o=l.data,i=o.message,c=o.success,c?s.dialogs[1].isVisible=!0:(s.dialogs[2].message=i,s.dialogs[2].isVisible=!0);case 12:case"end":return t.stop()}}),t)})))()},delete:function(){var e=this;return i()(u.a.mark((function t(){var s,a,n,r,l,o,i;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e,a="result/".concat(s.selectedResult.id),n={url:a},console.log("payload: ",n),t.next=6,Object(f["d"])(n);case 6:r=t.sent,l=r.data,o=l.message,i=l.success,i?s.dialogs[4].isVisible=!0:(s.dialogs[5].message=o,s.dialogs[5].isVisible=!0);case 9:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return i()(u.a.mark((function s(){var a,n,r,l,o,i;return u.a.wrap((function(s){while(1)switch(s.prev=s.next){case 0:console.log("payload: ",e),a=t,n=-1,r=h(a.dialogs),s.prev=4,r.s();case 6:if((l=r.n()).done){s.next=29;break}if(o=l.value,n++,o.title!==e){s.next=27;break}s.t0=e,s.next="Delete Result"===s.t0?13:"Update Result"===s.t0?16:"Update Success"===s.t0?19:"Delete Success"===s.t0?22:25;break;case 13:return s.next=15,a.delete();case 15:return s.abrupt("break",25);case 16:return s.next=18,a.save();case 18:return s.abrupt("break",25);case 19:return i=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===i.schoolId?t.$router.push("/super-admin-results"):t.$router.push("/results"),s.abrupt("break",25);case 22:return i=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===i.schoolId?t.$router.push("/super-admin-results"):t.$router.push("/results"),s.abrupt("break",25);case 25:return a.dialogs[n].isVisible=!1,s.abrupt("break",29);case 27:s.next=6;break;case 29:s.next=34;break;case 31:s.prev=31,s.t1=s["catch"](4),r.e(s.t1);case 34:return s.prev=34,r.f(),s.finish(34);case 37:case"end":return s.stop()}}),s,null,[[4,31,34,37]])})))()},typeOfInstructor:function(e){var t=this;return i()(u.a.mark((function s(){var a,n,r;return u.a.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=t,n=t.$store.getters["authenticationStore/IdentityModel"],s.next=4,Object(m["c"])(e.value,n.schoolId);case 4:r=s.sent,t.$store.commit("userStore/SetTeachers",r.result),a.form.qSelects[4].list=r.result.map((function(e){return y(y({},e),{},{type:"".concat(e.firstName," ").concat(e.lastName),value:e.id,lable:"".concat(e.firstName," ").concat(e.lastName)})}));case 7:case"end":return s.stop()}}),s)})))()},loadSelectedResult:function(){var e=this;return i()(u.a.mark((function t(){var s,a,n,r,l;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e,s.selectedResult=e.$store.getters["resultStore/selectedResult"],console.log("context.selectedResult: ",s.selectedResult),s.form.qSelects[0].list=e.$store.getters["classRoomStore/classRooms"].map((function(e){return y(y({},e),{},{type:e.type,value:e.id,label:e.type})})),s.form.qSelects[1].list=e.$store.getters["subjectStore/subjects"].map((function(e){return y(y({},e),{},{type:e.type,value:e.id,label:e.type})})),s.form.qSelects[2].list=e.$store.getters["studentStore/students"].map((function(e){return y(y({},e),{},{type:"".concat(e.firstName," ").concat(e.lastName),value:e.id,label:"".concat(e.firstName," ").concat(e.lastName)})})),s.form.qSelects[3].list=e.$store.getters["staffStore/staffs"].map((function(e){return y(y({},e),{},{type:e.type,value:e.id,label:e.type})})),t.next=9,s.typeOfInstructor({value:s.selectedResult.designationId});case 9:s.form.qSelects[5].list=e.$store.getters["assessmentStore/assessments"].map((function(e){return y(y({},e),{},{type:e.type,value:e.id,label:e.type})})),s.form.qSelects[6].list=e.$store.getters["levelStore/levels"].map((function(e){return y(y({},e),{},{type:e.type,value:e.id,label:e.type})})),s.form.qSelects[7].list=e.$store.getters["sessionStore/sessions"].map((function(e){return y(y({},e),{},{type:e.type,value:e.id,label:e.type})})),s.form.qInputs[0].name=s.selectedResult.score,s.form.qInputs[1].name=s.selectedResult.scoreMax,s.form.qSelects[0].value=s.selectedResult.classRoomId,s.form.qSelects[1].value=s.selectedResult.subjectId,s.form.qSelects[2].value=s.selectedResult.studentId,s.form.qSelects[3].value=s.selectedResult.designationId,s.form.qSelects[4].value=s.selectedResult.teacherId,s.form.qSelects[5].value=s.selectedResult.assessmentId,s.form.qSelects[6].value=s.selectedResult.levelId,s.form.qSelects[7].value=s.selectedResult.sessionId,a=new Date(s.selectedResult.createdAt),n=("0"+(a.getMonth()+1)).slice(-2),r=("0"+a.getDate()).slice(-2),l=a.getFullYear(),s.form.qDates[0].name=l+"/"+n+"/"+r;case 27:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return i()(u.a.mark((function t(){var s;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e,t.next=3,s.loadSelectedResult();case 3:case"end":return t.stop()}}),t)})))()}},I=k,x=s("2877"),R=s("0d59"),q=s("24e8"),D=s("eebe"),O=s.n(D),$=Object(x["a"])(I,a,n,!1,null,null,null);t["default"]=$.exports;O()($,"components",{QSpinner:R["a"],QDialog:q["a"]})}}]);