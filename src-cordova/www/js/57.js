(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[57],{e4d5:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-sm"},[e.setIsResponsive?n("div",[n("div",{staticClass:"row"},[n("LevelSelector",{staticClass:"col-12",attrs:{qSelect:e.exam_vm.qSelectLevel},on:{onLevelValueChange:function(t){return e.onLevelValueChange(t)}}}),n("SubjectSelector",{staticClass:"col-12",attrs:{qSelect:e.exam_vm.qSelectSubject},on:{onSubjectValueChange:function(t){return e.onSubjectValueChange(t)}}}),n("Form",{staticClass:"col-12",attrs:{formData:e.questionsForms},on:{linkClick:function(t){return e.selectPastQuestions(t)},qListTemplateAction:function(t){return e.filterPastQuestions(t)}}}),n("Form",{staticClass:"col-12",attrs:{formData:e.form},on:{Cancel:function(t){return e.Cancel(t)}}})],1)]):n("div",[n("q-resize-observer",{attrs:{debounce:0},on:{resize:e.onResize}}),n("q-splitter",{style:e.splitterStyle,attrs:{id:"photos",limits:[0,100],"before-class":"overflow-hidden","after-class":"overflow-hidden"},scopedSlots:e._u([{key:"before",fn:function(){return[n("div",{staticClass:"row"},[n("LevelSelector",{staticClass:"col-12",attrs:{qSelect:e.exam_vm.qSelectLevel},on:{onLevelValueChange:function(t){return e.onLevelValueChange(t)}}}),n("SubjectSelector",{staticClass:"col-12",attrs:{qSelect:e.exam_vm.qSelectSubject},on:{onSubjectValueChange:function(t){return e.onSubjectValueChange(t)}}}),n("Form",{staticClass:"col-12",attrs:{formData:e.questionsForms},on:{linkClick:function(t){return e.selectPastQuestions(t)},qListTemplateAction:function(t){return e.filterPastQuestions(t)}}})],1)]},proxy:!0},{key:"after",fn:function(){return[n("Form",{attrs:{formData:e.form},on:{Start:function(t){return e.Start(t)},Cancel:function(t){return e.Cancel(t)}}})]},proxy:!0}]),model:{value:e.splitterModel,callback:function(t){e.splitterModel=t},expression:"splitterModel"}})],1),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},s=[],o=(n("d38f"),n("b7dd"),n("1a43"),n("0012"),n("6212"),n("950c"),n("2bf3"),n("5b54"),n("ef92"),n("f69e"),n("ad58"),n("d93a"),n("7efb")),a=n.n(o),i=n("9289"),c=n.n(i),l=n("549c"),u=n.n(l),d=(n("c889"),n("52b5")),m=n.n(d),f=n("82f4"),v=n("0588"),h=(n("7919"),n("7d14")),p=n("2c1a"),b=n("c8d5"),S=n("0601"),x=n("9b9d"),g=n("bc6a");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=q(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,s=function(){};return{s:s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){i=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(i)throw o}}}}function q(e,t){if(e){if("string"===typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var L={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]},splitterStyle:function(){var e=this;return{height:"100vh",width:"".concat(e.width,"px")}},setIsResponsive:function(){var e=window.innerWidth;return e<700}},components:{Form:f["a"],MessageBox:v["a"],LevelSelector:h["a"],SubjectSelector:p["a"]},data:function(){return{width:400,splitterModel:30,isMobile:!1,form:b["b"],dialogs:b["a"],selectedSubject:null,selectedLevel:null,exam_vm:x["b"],questionsForms:b["c"],selectedPastQuestions:{}}},methods:{onLevelValueChange:function(e){var t=this;return u()(m.a.mark((function n(){var r;return m.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("selectedLevel: ",e),r=t,r.selectedLevel=e.qSelect,r.exam_vm.qSelectSubject.value="",r.questionsForms.qLists=[],n.next=7,r.FetchExamQuestions();case 7:case"end":return n.stop()}}),n)})))()},onSubjectValueChange:function(e){var t=this;return u()(m.a.mark((function n(){var r;return m.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("selectedSubject: ",e),r=t,r.selectedSubject=e.qSelect,r.questionsForms.qLists=[],n.next=6,r.FetchExamQuestions();case 6:case"end":return n.stop()}}),n)})))()},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-exam-landing"):this.$router.push("/exam-landing")},cancelDialog:function(e){var t,n=this,r=-1,s=j(n.dialogs);try{for(s.s();!(t=s.n()).done;){var o=t.value;if(r++,o.title===e){n.dialogs[r].isVisible=!1;break}}}catch(a){s.e(a)}finally{s.f()}},startExamination:function(){var e=this;return u()(m.a.mark((function t(){var n;return m.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,t.next=3,n.viewQuestions();case 3:e.$router.push("/start-exam");case 4:case"end":return t.stop()}}),t)})))()},selectPastQuestions:function(e){var t=this;t.selectedPastQuestions=e;var n,r=-1,s=j(t.dialogs);try{for(s.s();!(n=s.n()).done;){var o=n.value;if(r++,"Start Examination"==o.title){t.dialogs[r].isVisible=!0;break}}}catch(a){s.e(a)}finally{s.f()}},okDialog:function(e){var t=this;return u()(m.a.mark((function n(){var r,s,o,a,i;return m.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t,s=-1,o=j(r.dialogs),n.prev=3,o.s();case 5:if((a=o.n()).done){n.next=19;break}if(i=a.value,s++,i.title!==e){n.next=17;break}n.t0=e,n.next="Start Examination"===n.t0?12:15;break;case 12:return n.next=14,r.startExamination();case 14:return n.abrupt("break",15);case 15:return r.dialogs[s].isVisible=!1,n.abrupt("break",19);case 17:n.next=5;break;case 19:n.next=24;break;case 21:n.prev=21,n.t1=n["catch"](3),o.e(n.t1);case 24:return n.prev=24,o.f(),n.finish(24);case 27:case"end":return n.stop()}}),n,null,[[3,21,24,27]])})))()},initializeData:function(){var e=this;e.questionsForms.qLists=[],e.exam_vm.qSelectSubject.list=this.$store.getters["subjectStore/subjects"].sort((function(e,t){return e.type.toLowerCase().localeCompare(t.type.toLowerCase())})).map((function(e){return y(y({},e),{},{label:e.type,value:e.id})})),e.exam_vm.qSelectSubject.value="",e.exam_vm.qSelectLevel.list=this.$store.getters["levelStore/levels"].sort((function(e,t){return e.type.toLowerCase().localeCompare(t.type.toLowerCase())})).map((function(e){return y(y({},e),{},{label:e.type,value:e.id})})),e.exam_vm.qSelectLevel.value="",this.$store.commit("authenticationStore/setShowSpinner",!1),console.log("context.exam_vm: ",e.exam_vm)},FetchExamQuestions:function(){var e=this;return u()(m.a.mark((function t(){var n,r,s,o,i;return m.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e,r=e.$store.getters["authenticationStore/IdentityModel"],console.log("context.selectedSubject: ",n.selectedSubject),console.log("context.selectedLevel: ",n.selectedLevel),!n.selectedSubject||!n.selectedLevel){t.next=19;break}return s={url:"examquestion/findAll",req:{subjectId:n.selectedSubject.value,levelId:n.selectedLevel.value,schoolId:r.schoolId}},t.prev=6,t.next=9,Object(S["b"])(s);case 9:o=t.sent,console.log("response.data: ",o.data),n.questionsForms.qLists=[],i=o.data.map((function(e){return{name:"".concat(n.selectedSubject.type,"_").concat(e.date),address:"",route:"/exam-rules",letter:n.selectedSubject.type.charAt(0),subjectId:e.subjectId,levelId:e.levelId,schoolId:e.schoolId,createdAt:e.createdAt,examDay:e.examDay,examMonth:e.examMonth,examYear:e.examYear}})),console.log("items: ",i),n.questionsForms.qLists.push({label:"Past Questions",items:a()(i),originalItems:a()(i)}),t.next=19;break;case 17:t.prev=17,t.t0=t["catch"](6);case 19:case"end":return t.stop()}}),t,null,[[6,17]])})))()},filterPastQuestions:function(e){var t=this;switch(console.log("payload: ",e),e.label){case"Past Questions":console.log("payload.originalItems: ",e.originalItems),console.log("payload.listBoxSearchModel: ",e.listBoxSearchModel),t.questionsForms.qLists[0].items=Object(g["a"])(e.originalItems,e.listBoxSearchModel),console.log("context.questionsForms.qLists.items: ",t.questionsForms.qLists[0].items);break}},viewQuestions:function(){var e=this;return u()(m.a.mark((function t(){var n,r,s,o,a;return m.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,r=e.$store.getters["authenticationStore/IdentityModel"],e.$store.commit("authenticationStore/setShowSpinner",!0),s={url:"examquestion/selectedPastQuestions",req:{subjectId:n.selectedSubject.value,levelId:n.selectedLevel.value,schoolId:r.schoolId,examYear:n.selectedPastQuestions.examYear,examMonth:n.selectedPastQuestions.examMonth,examDay:n.selectedPastQuestions.examDay}},e.$store.commit("examStore/setYear",s.req.examYear),t.prev=5,t.next=8,Object(S["b"])(s);case 8:o=t.sent,a=o.data.map((function(e){return y(y({},e),{},{question:e.question,subject:n.selectedSubject.type,level:n.selectedLevel.type})})),console.log("questions: ",a),e.$store.commit("examStore/SetQuestions",a),e.$store.commit("authenticationStore/setShowSpinner",!1),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](5),e.$store.commit("authenticationStore/setShowSpinner",!1);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})))()},onResize:function(e){var t=this;t.width=e.width},onResizePage:function(e){var t=window.innerWidth,n=this;n.isMobile=t<700}},created:function(){var e=this;window.addEventListener("resize",e.onResizePage),e.initializeData(),this.$store.commit("authenticationStore/setIsError",!1),this.$store.commit("authenticationStore/setErrorMessages","")}},C=L,I=n("a6c2"),O=n("1169"),P=n("37e6"),Q=n("ec6d"),$=n("63c1"),D=n.n($),M=Object(I["a"])(C,r,s,!1,null,null,null);t["default"]=M.exports;D()(M,"components",{QResizeObserver:O["a"],QSplitter:P["a"],QDialog:Q["a"]})}}]);