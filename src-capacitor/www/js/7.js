(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"2f68":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"q-pa-md"},[e.showSpinner?e._e():s("Form",{attrs:{formData:e.form},on:{Create:function(t){return e.Create(t)},Cancel:function(t){return e.Cancel(t)},typeOfInstructor:function(t){return e.typeOfInstructor(t)}}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[s("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[s("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return s("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(s){e.$set(t,"isVisible",s)},expression:"dialog.isVisible"}},[s("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},n=[],a=(s("d38f"),s("b7dd"),s("0012"),s("6212"),s("950c"),s("2bf3"),s("5b54"),s("ef92"),s("f69e"),s("ad58"),s("d93a"),s("9289")),o=s.n(a),i=s("549c"),l=s.n(i),c=s("52b5"),u=s.n(c),f=(s("7b62"),s("1a43"),s("c889"),s("0588")),p=s("82f4"),m=s("5dc2"),v=s("940b"),b={title:"Create Result",qSelects:[{label:"Class Room",value:"",type:"text",list:[],actionName:"classRoom",visible:!0},{label:"Subject",value:"",type:"text",list:[],actionName:"subject",visible:!0},{label:"Student",value:"",type:"text",list:[],actionName:"student",visible:!0},{label:"Type of Instructor",value:"",type:"text",list:[],actionName:"typeOfInstructor",visible:!0},{label:"Instructor Full Name",value:"",type:"text",list:[],actionName:"instructor",visible:!0},{label:"Type of Assessment",value:"",type:"text",list:[],actionName:"instructor",visible:!0},{label:"Level",value:"",type:"text",list:[],actionName:"level",visible:!0},{label:"Session",value:"",type:"text",list:[],actionName:"session",visible:!0}],qInputs:[{label:"Score",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Maximum Score",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Create",name:"Create",icon:"add"}],qDates:[{label:"Created At",name:"2019/02/01"}],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""},clearQSelects:function(){var e=0;for(e=0;e<this.qSelects.length;e++)this.qSelects[e].value="",this.qSelects[e].list=[],this.qSelects[e].visible=!0},clearQDates:function(){var e=0;for(e=0;e<this.qDates.length;e++)this.qDates[e].name="2019/02/01"}},d=[{title:"Create Result",isVisible:!1,message:"Do you want to create a Result",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Result created successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function h(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function y(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?h(Object(s),!0).forEach((function(t){o()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):h(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function g(e,t){var s="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!s){if(Array.isArray(e)||(s=S(e))||t&&e&&"number"===typeof e.length){s&&(e=s);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,i=!1;return{s:function(){s=s.call(e)},n:function(){var e=s.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==s.return||s.return()}finally{if(i)throw a}}}}function S(e,t){if(e){if("string"===typeof e)return w(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,r=new Array(t);s<t;s++)r[s]=e[s];return r}var q={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{MessageBox:f["a"],Form:p["a"]},data:function(){return{form:b,dialogs:d}},methods:{Create:function(){var e,t=this,s=-1,r=g(t.dialogs);try{for(r.s();!(e=r.n()).done;){var n=e.value;if(s++,"Create Result"==n.title){t.dialogs[s].isVisible=!0;break}}}catch(a){r.e(a)}finally{r.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-results"):this.$router.push("/results")},cancelDialog:function(e){var t,s=this,r=-1,n=g(s.dialogs);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(r++,a.title===e){s.dialogs[r].isVisible=!1;break}}}catch(o){n.e(o)}finally{n.f()}},save:function(){var e=this;return l()(u.a.mark((function t(){var s,r,n,a,o,i,l,c;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e,r=e.$store.getters["authenticationStore/IdentityModel"],n="result/create",a={url:n,req:{score:Number(s.form.qInputs[0].name),scoreMax:Number(s.form.qInputs[1].name),classRoomId:s.form.qSelects[0].value,subjectId:s.form.qSelects[1].value,studentId:s.form.qSelects[2].value,designationId:s.form.qSelects[3].value,teacherId:s.form.qSelects[4].value,assessmentId:s.form.qSelects[5].value,levelId:s.form.qSelects[6].value,sessionId:s.form.qSelects[7].value,createdAt:s.form.qDates[0].name,schoolId:r.schoolId}},console.log("payload: ",a),e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=8,Object(m["b"])(a);case 8:o=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),i=o.data,l=i.message,c=i.success,c?s.dialogs[1].isVisible=!0:(s.dialogs[2].message=l,s.dialogs[2].isVisible=!0);case 12:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return l()(u.a.mark((function s(){var r,n,a,o,i,l;return u.a.wrap((function(s){while(1)switch(s.prev=s.next){case 0:console.log("payload: ",e),r=t,n=-1,a=g(r.dialogs),s.prev=4,a.s();case 6:if((o=a.n()).done){s.next=23;break}if(i=o.value,n++,i.title!==e){s.next=21;break}s.t0=e,s.next="Create Result"===s.t0?13:"Success"===s.t0?16:19;break;case 13:return s.next=15,r.save();case 15:return s.abrupt("break",19);case 16:return l=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===l.schoolId?t.$router.push("/super-admin-results"):t.$router.push("/results"),s.abrupt("break",19);case 19:return r.dialogs[n].isVisible=!1,s.abrupt("break",23);case 21:s.next=6;break;case 23:s.next=28;break;case 25:s.prev=25,s.t1=s["catch"](4),a.e(s.t1);case 28:return s.prev=28,a.f(),s.finish(28);case 31:case"end":return s.stop()}}),s,null,[[4,25,28,31]])})))()},typeOfInstructor:function(e){var t=this;return l()(u.a.mark((function s(){var r,n,a;return u.a.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return r=t,n=t.$store.getters["authenticationStore/IdentityModel"],s.next=4,Object(v["c"])(e.value,n.schoolId);case 4:a=s.sent,t.$store.commit("userStore/SetTeachers",a.result),r.form.qSelects[4].list=a.result.map((function(e){return y(y({},e),{},{type:"".concat(e.firstName," ").concat(e.lastName),value:e.id,label:e.type})}));case 7:case"end":return s.stop()}}),s)})))()}},created:function(){var e=this;e.form.clearQInputs(),e.form.clearQSelects(),e.form.clearQDates(),e.form.qSelects[0].list=this.$store.getters["classRoomStore/classRooms"].map((function(e){return y(y({},e),{},{type:e.type,value:e.id,label:e.type})})),e.form.qSelects[1].list=this.$store.getters["subjectStore/subjects"].map((function(e){return y(y({},e),{},{type:e.type,value:e.id,label:e.type})})),e.form.qSelects[2].list=this.$store.getters["studentStore/students"].map((function(e){return y(y({},e),{},{type:"".concat(e.firstName," ").concat(e.lastName),value:e.id,label:"".concat(e.firstName," ").concat(e.lastName)})})),e.form.qSelects[3].list=this.$store.getters["staffStore/staffs"].map((function(e){return y(y({},e),{},{type:e.type,value:e.id,label:e.type})})),e.form.qSelects[5].list=this.$store.getters["assessmentStore/assessments"].map((function(e){return y(y({},e),{},{type:e.type,value:e.id,label:e.type})})),e.form.qSelects[6].list=this.$store.getters["levelStore/levels"].map((function(e){return y(y({},e),{},{type:e.type,value:e.id,label:e.type})})),e.form.qSelects[7].list=this.$store.getters["sessionStore/sessions"].map((function(e){return y(y({},e),{},{type:e.type,value:e.id,label:e.type})}))}},k=q,I=s("a6c2"),x=s("c99e"),O=s("ec6d"),D=s("63c1"),$=s.n(D),C=Object(I["a"])(k,r,n,!1,null,null,null);t["default"]=C.exports;$()(C,"components",{QSpinner:x["a"],QDialog:O["a"]})}}]);