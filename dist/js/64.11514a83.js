(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[64],{9838:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"q-pa-sm"},[s("q-scroll-area",{staticStyle:{height:"80vh","max-width":"100%"}},[e.setIsResponsive?s("div",[s("div",{staticClass:"row"},[s("LevelSelector",{directives:[{name:"show",rawName:"v-show",value:!e.isQuestions,expression:"!isQuestions"}],staticClass:"col-12",attrs:{qSelect:e.exam_vm.qSelectLevel},on:{onLevelValueChange:function(t){return e.onLevelValueChange(t)}}}),s("SubjectSelector",{directives:[{name:"show",rawName:"v-show",value:!e.isQuestions,expression:"!isQuestions"}],staticClass:"col-12",attrs:{qSelect:e.exam_vm.qSelectSubject},on:{onSubjectValueChange:function(t){return e.onSubjectValueChange(t)}}}),s("Form",{directives:[{name:"show",rawName:"v-show",value:!e.isQuestions,expression:"!isQuestions"}],staticClass:"col-12",attrs:{formData:e.questionsForms},on:{viewQuestions:function(t){return e.viewQuestions(t)},qListTemplateAction:function(t){return e.filterPastQuestions(t)}}}),s("Form",{directives:[{name:"show",rawName:"v-show",value:e.isQuestions,expression:"isQuestions"}],staticClass:"col-12",attrs:{formData:e.selectedQuestionsForms},on:{updateExam:function(t){return e.updateExam(t)},deleteExam:function(t){return e.deleteExam(t)},qListAddItemAction:function(t){return e.createExam(t)},isQuestionsAction:function(t){return e.isQuestionsAction(t)}}})],1)]):s("div",[s("q-resize-observer",{attrs:{debounce:0},on:{resize:e.onResize}}),s("q-splitter",{style:e.splitterStyle,attrs:{id:"photos",limits:[0,100],"before-class":"overflow-hidden","after-class":"overflow-hidden"},scopedSlots:e._u([{key:"before",fn:function(){return[s("div",{staticClass:"row"},[s("LevelSelector",{staticClass:"col-12",attrs:{qSelect:e.exam_vm.qSelectLevel},on:{onLevelValueChange:function(t){return e.onLevelValueChange(t)}}}),s("SubjectSelector",{staticClass:"col-12",attrs:{qSelect:e.exam_vm.qSelectSubject},on:{onSubjectValueChange:function(t){return e.onSubjectValueChange(t)}}}),s("Form",{staticClass:"col-12",attrs:{formData:e.questionsForms},on:{viewQuestions:function(t){return e.viewQuestions(t)},qListTemplateAction:function(t){return e.filterPastQuestions(t)},qListAddItemAction:function(t){return e.createExam(t)}}})],1)]},proxy:!0},{key:"after",fn:function(){return[s("Table",{staticClass:"col-12",attrs:{table_VM:e.tableVM,tableRows:e.tableVM.rows},on:{dataImport:function(t){return e.dataImport(t)},createExam:function(t){return e.createExam(t)},updateExam:function(t){return e.updateExam(t)},deleteExam:function(t){return e.deleteExam(t)},deleteAllItems:function(t){return e.deleteQuestions(t)}}})]},proxy:!0}]),model:{value:e.splitterModel,callback:function(t){e.splitterModel=t},expression:"splitterModel"}})],1),e._l(e.dialogs,(function(t){return s("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(s){e.$set(t,"isVisible",s)},expression:"dialog.isVisible"}},[s("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)],1)},n=[],o=(s("23bf"),s("06db"),s("8a81"),s("1c4c"),s("5df3"),s("cadf"),s("ac6a"),s("456d"),s("d25f"),s("9986"),s("8e6e"),s("4db1")),i=s.n(o),r=s("c47a"),l=s.n(r),c=s("fa84"),u=s.n(c),m=(s("6d67"),s("7f7f"),s("967e")),d=s.n(m),v=s("9437"),h=s("3a3c"),f=s("9bff"),p=(s("b6e4"),s("0c24")),b=s("c601"),x=s("7fab"),g=s("7ac8"),S=s("c055"),w=s("f58e");function y(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function q(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?y(Object(s),!0).forEach((function(t){l()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):y(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function E(e,t){var s="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!s){if(Array.isArray(e)||(s=V(e))||t&&e&&"number"===typeof e.length){s&&(e=s);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,r=!1;return{s:function(){s=s.call(e)},n:function(){var e=s.next();return i=e.done,e},e:function(e){r=!0,o=e},f:function(){try{i||null==s.return||s.return()}finally{if(r)throw o}}}}function V(e,t){if(e){if("string"===typeof e)return I(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?I(e,t):void 0}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,a=new Array(t);s<t;s++)a[s]=e[s];return a}var Q={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]},splitterStyle:function(){var e=this;return{height:"100vh",width:"".concat(e.width,"px")}},setIsResponsive:function(){var e=window.innerWidth;return e<700}},components:{Form:v["a"],MessageBox:f["a"],LevelSelector:p["a"],SubjectSelector:b["a"],Table:h["a"]},data:function(){return{isQuestions:!1,width:400,splitterModel:30,isMobile:!1,form:x["b"],selectedSubject:null,selectedLevel:null,exam_vm:S["b"],questionsForms:x["c"],selectedQuestionsForms:x["d"],selectedPastQuestions:{},selectedExam:{},tableVM:{title:"Examination",columns:[{name:"sn",label:"SN",field:"",align:"left",type:"text"},{name:"actions",label:"Actions",field:"",align:"left",type:""},{name:"question",label:"Question",field:"",align:"left",type:"text"},{name:"subject",label:"Subject",field:"",align:"left",type:"text"},{name:"level",label:"Level",field:"",align:"left",type:"text"}],rows:[],separator:"cell",dataImport:"dataImport",createItem:"createExam",updateItem:"updateExam",deleteItem:"deleteExam",createItemUrl:"/create-exam-question",updateItemUrl:"/update-exam-question",importURL:"/import-exam-questions"},dialogs:[{title:"Delete Exam",isVisible:!1,message:"Do you want to delete a exam",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Exam deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Delete Questions",isVisible:!1,message:"Do you want to delete questions",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Delete Success",isVisible:!1,message:"Questions deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Delete Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}],ids:[]}},methods:{isQuestionsAction:function(){var e=this;e.isQuestions=!0!==e.isQuestions},dataImport:function(){var e=this;console.log(e.tableVM.importURL),this.$router.push(e.tableVM.importURL)},createExam:function(){var e=this;console.log(e.tableVM.createItemUrl),this.$router.push(e.tableVM.createItemUrl)},updateExam:function(e){var t=this;this.$store.commit("examStore/SetSelectedExam",e),this.$router.push(t.tableVM.updateItemUrl)},deleteExam:function(e){var t=this;t.selectedExam=e,console.log(t.selectedExam),t.dialogs[0].isVisible=!0},clearData:function(){var e=this;e.questionsForms.qLists=[],e.tableVM.rows=[],this.$store.commit("authenticationStore/setActiveRows",e.tableVM.rows),this.$store.commit("authenticationStore/setNewRows",e.tableVM.rows)},onLevelValueChange:function(e){var t=this;return u()(d.a.mark((function s(){var a;return d.a.wrap((function(s){while(1)switch(s.prev=s.next){case 0:console.log("selectedLevel: ",e),a=t,a.selectedLevel=e.qSelect,a.exam_vm.qSelectSubject.value="",a.clearData();case 5:case"end":return s.stop()}}),s)})))()},onSubjectValueChange:function(e){var t=this;return u()(d.a.mark((function s(){var a;return d.a.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return console.log("selectedSubject: ",e),a=t,a.selectedSubject=e.qSelect,a.clearData(),s.next=6,a.FetchExamQuestions();case 6:case"end":return s.stop()}}),s)})))()},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-exam-landing"):this.$router.push("/exam-landing")},cancelDialog:function(e){var t,s=this,a=-1,n=E(s.dialogs);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(a++,o.title===e){s.dialogs[a].isVisible=!1;break}}}catch(i){n.e(i)}finally{n.f()}},startExamination:function(){var e=this;return u()(d.a.mark((function t(){var s;return d.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e,t.next=3,s.viewQuestions();case 3:e.$router.push("/start-exam");case 4:case"end":return t.stop()}}),t)})))()},selectPastQuestions:function(e){var t=this;t.selectedPastQuestions=e;var s,a=-1,n=E(t.dialogs);try{for(n.s();!(s=n.n()).done;){var o=s.value;if(a++,"Start Examination"==o.title){t.dialogs[a].isVisible=!0;break}}}catch(i){n.e(i)}finally{n.f()}},deleteQuestions:function(e){var t=this;t.ids=[];var s,a=-1,n=E(e);try{for(n.s();!(s=n.n()).done;){var o=s.value;a++,"Agreed"===o&&t.ids.push(t.tableVM.rows[a]._id)}}catch(i){n.e(i)}finally{n.f()}console.log("context.ids: ",t.ids),t.dialogs[3].isVisible=!0},deleteAll:function(){var e=this;return u()(d.a.mark((function t(){var s,a,n,o,i;return d.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e,a=e.$store.getters["authenticationStore/IdentityModel"],n="examquestion/deletemany",o={url:n,req:{ids:s.ids,schoolId:a.schoolId}},console.log("payload: ",o),t.next=7,Object(g["c"])(o);case 7:i=t.sent,console.log("response: ",i),s.dialogs[3].isVisible=!1,201===i.status?s.dialogs[4].isVisible=!0:(s.dialogs[5].message="Could not complete the deleting process. Error occured while deleting questions",s.dialogs[5].isVisible=!0);case 11:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return u()(d.a.mark((function s(){var a,n,o,i,r;return d.a.wrap((function(s){while(1)switch(s.prev=s.next){case 0:a=t,n=-1,o=E(a.dialogs),s.prev=3,o.s();case 5:if((i=o.n()).done){s.next=26;break}if(r=i.value,n++,r.title!==e){s.next=24;break}s.t0=e,s.next="Start Examination"===s.t0?12:"Delete Questions"===s.t0?15:"Delete Success"===s.t0?18:22;break;case 12:return s.next=14,a.startExamination();case 14:return s.abrupt("break",22);case 15:return s.next=17,a.deleteAll();case 17:return s.abrupt("break",22);case 18:return a.dialogs[n].isVisible=!1,s.next=21,a.viewQuestions(a.selectedPastQuestions);case 21:return s.abrupt("break",22);case 22:return a.dialogs[n].isVisible=!1,s.abrupt("break",26);case 24:s.next=5;break;case 26:s.next=31;break;case 28:s.prev=28,s.t1=s["catch"](3),o.e(s.t1);case 31:return s.prev=31,o.f(),s.finish(31);case 34:case"end":return s.stop()}}),s,null,[[3,28,31,34]])})))()},initializeData:function(){var e=this;e.questionsForms.qLists=[];var t=this.$store.getters["subjectStore/subjects"];e.exam_vm.qSelectSubject.list=t.sort((function(e,t){return e.type.toLowerCase().localeCompare(t.type.toLowerCase())})).map((function(e){return q(q({},e),{},{label:e.type,value:e.id})})),e.exam_vm.qSelectSubject.value="";var s=this.$store.getters["levelStore/levels"];e.exam_vm.qSelectLevel.list=s.sort((function(e,t){return e.type.toLowerCase().localeCompare(t.type.toLowerCase())})).map((function(e){return q(q({},e),{},{label:e.type,value:e.id})})),e.exam_vm.qSelectLevel.value="",this.$store.commit("authenticationStore/setShowSpinner",!1),console.log("context.exam_vm: ",e.exam_vm)},FetchExamQuestions:function(){var e=this;return u()(d.a.mark((function t(){var s,a,n,o,r;return d.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s=e,a=e.$store.getters["authenticationStore/IdentityModel"],console.log("context.selectedSubject: ",s.selectedSubject),console.log("context.selectedLevel: ",s.selectedLevel),!s.selectedSubject||!s.selectedLevel){t.next=19;break}return n={url:"examquestion/findAll",req:{subjectId:s.selectedSubject.value,levelId:s.selectedLevel.value,schoolId:a.schoolId}},t.prev=6,console.log("payload: ",n),t.next=10,Object(g["c"])(n);case 10:o=t.sent,console.log("response.data: ",o.data),s.questionsForms.qLists=[],r=o.data.map((function(e){return{name:"".concat(s.selectedSubject.type," ").concat(e.examYear),address:"",route:"/exam-rules",letter:"".concat(e.examYear),subjectId:e.subjectId,levelId:e.levelId,schoolId:e.schoolId,createdAt:e.createdAt,examDay:e.examDay,examMonth:e.examMonth,examYear:e.examYear}})),s.questionsForms.qLists.push({label:"Past Questions",items:i()(r),originalItems:i()(r),qBtns:[{label:"View",name:"viewQuestions",icon:"view"}]}),t.next=19;break;case 17:t.prev=17,t.t0=t["catch"](6);case 19:case"end":return t.stop()}}),t,null,[[6,17]])})))()},filterPastQuestions:function(e){var t=this;switch(e.label){case"Past Questions":t.questionsForms.qLists[0].items=Object(w["a"])(e.originalItems,e.listBoxSearchModel);break}},viewQuestions:function(e){var t=this;return u()(d.a.mark((function s(){var a,n,o,r,l;return d.a.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=t,a.selectedPastQuestions=e,n=t.$store.getters["authenticationStore/IdentityModel"],t.$store.commit("authenticationStore/setShowSpinner",!0),a.tableVM.title="".concat(a.selectedLevel.type," ").concat(e.name),o={url:"examquestion/selectedPastQuestions",req:{subjectId:a.selectedSubject.value,levelId:a.selectedLevel.value,schoolId:n.schoolId,examYear:e.examYear,examMonth:e.examMonth,examDay:e.examDay}},t.$store.commit("examStore/setYear",o.req.examYear),s.prev=7,s.next=10,Object(g["c"])(o);case 10:r=s.sent,a.tableVM.rows=r.data.map((function(e,t){return q(q({sn:t+1},e),{},{question:e.question,subject:a.selectedSubject.type,level:a.selectedLevel.type,route:"/exam-question-landing"})})),a.selectedQuestionsForms.qLists=[],l=r.data.map((function(e,t){return q(q({},e),{},{name:"<blockquote>".concat(e.question,"</blockquote>"),address:"",route:"",letter:"".concat(t+1),label:t})})),console.log("items: ",l),a.selectedQuestionsForms.title=a.tableVM.title,a.selectedQuestionsForms.qLists.push({label:a.tableVM.title,items:i()(l),originalItems:i()(l),qBtns:[{label:"Edit",name:"updateExam",icon:"update"},{label:"Delete",name:"deleteExam",icon:"delete"}]}),t.$store.commit("examStore/SetExams",a.tableVM.rows),t.$store.commit("authenticationStore/setActiveColumns",a.tableVM.columns),t.$store.commit("authenticationStore/setActiveRows",a.tableVM.rows),t.$store.commit("authenticationStore/setNewRows",a.tableVM.rows),t.$store.commit("authenticationStore/setShowSpinner",!1),a.isQuestions=!0,s.next=28;break;case 25:s.prev=25,s.t0=s["catch"](7),t.$store.commit("authenticationStore/setShowSpinner",!1);case 28:case"end":return s.stop()}}),s,null,[[7,25]])})))()},onResize:function(e){var t=this;t.width=e.width},onResizePage:function(e){var t=window.innerWidth,s=this;s.isMobile=t<700}},created:function(){var e=this;window.addEventListener("resize",e.onResizePage);var t=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===t.schoolId&&(e.tableVM.createItemUrl="/super-admin-create-exam-question",e.tableVM.updateItemUrl="/super-admin-update-exam-question",e.tableVM.importURL="/super-admin-import-exam-questions"),this.$store.commit("authenticationStore/setActiveColumns",[]),this.$store.commit("authenticationStore/setActiveRows",[]),this.$store.commit("authenticationStore/setNewRows",[]),e.initializeData(),this.$store.commit("authenticationStore/setActiveRoute","exam"),this.$store.commit("authenticationStore/setCreateURL",e.tableVM.createItemUrl),this.$store.commit("authenticationStore/setImportURL",e.tableVM.importURL),this.$store.commit("authenticationStore/setIsError",!1),this.$store.commit("authenticationStore/setErrorMessages",""),this.$store.commit("authenticationStore/setPageTitle","Past Questions")}},j=Q,k=s("2877"),L=s("4983"),M=s("3980"),D=s("8562"),$=s("24e8"),C=s("eebe"),A=s.n(C),O=Object(k["a"])(j,a,n,!1,null,null,null);t["default"]=O.exports;A()(O,"components",{QScrollArea:L["a"],QResizeObserver:M["a"],QSplitter:D["a"],QDialog:$["a"]})}}]);