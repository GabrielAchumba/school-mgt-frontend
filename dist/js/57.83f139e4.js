(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[57],{"13a1":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 q-pa-sm"},[a("span",[a("p",{staticClass:"q-ma-none"},[e._v(e._s(e.exam_vm.qSelectSubject.label))]),a("div",{staticClass:"row no-wrap"},[a("q-select",{staticClass:"q-ma-none col-12",attrs:{color:"accent",outlined:"","label-color":"accent","option-disable":"inactive",options:e.exam_vm.qSelectSubject.list,"option-value":"id","option-label":"type",name:e.exam_vm.qSelectSubject.value,"emit-value":"","map-options":""},model:{value:e.selectedSubject,callback:function(t){e.selectedSubject=t},expression:"selectedSubject"}})],1)])]),a("div",{staticClass:"col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 q-pa-sm"},[a("span",[a("p",{staticClass:"q-ma-none"},[e._v(e._s(e.exam_vm.qSelectLevel.label))]),a("div",{staticClass:"row no-wrap"},[a("q-select",{staticClass:"q-ma-none col-12",attrs:{color:"accent",outlined:"","label-color":"accent","option-disable":"inactive",options:e.exam_vm.qSelectLevel.list,"option-value":"id","option-label":"type",name:e.exam_vm.qSelectLevel.value,"emit-value":"","map-options":""},model:{value:e.selectedLevel,callback:function(t){e.selectedLevel=t},expression:"selectedLevel"}})],1)])]),a("div",{staticClass:"col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 q-pa-sm"},[a("span",[a("p",{staticClass:"q-ma-none"},[e._v(e._s(e.exam_vm.qDate.label))]),a("q-input",{staticClass:"q-ma-none",attrs:{filled:"",mask:"date",rules:["date"]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{attrs:{cover:"","transition-show":"scale","transition-hide":"scale"}},[a("q-date",{model:{value:e.exam_vm.qDate.name,callback:function(t){e.$set(e.exam_vm.qDate,"name",t)},expression:"exam_vm.qDate.name"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"accent",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:e.exam_vm.qDate.name,callback:function(t){e.$set(e.exam_vm.qDate,"name",t)},expression:"exam_vm.qDate.name"}})],1)]),a("q-space"),a("q-btn",{staticClass:"col-2",attrs:{outline:"",dense:"",flat:"",icon:"table_view"},on:{click:e.viewAnswers}})],1),e.showSpinner?e._e():a("Table",{attrs:{table_VM:e.tableVM},on:{createExam:function(t){return e.createExam(t)},updateExam:function(t){return e.updateExam(t)},deleteExam:function(t){return e.deleteExam(t)}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[a("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[a("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return a("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(a){e.$set(t,"isVisible",a)},expression:"dialog.isVisible"}},[a("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},o=[],s=(a("23bf"),a("06db"),a("8a81"),a("1c4c"),a("5df3"),a("cadf"),a("ac6a"),a("456d"),a("d25f"),a("9986"),a("8e6e"),a("c47a")),r=a.n(s),i=a("fa84"),l=a.n(i),c=(a("6d67"),a("7514"),a("28a5"),a("7f7f"),a("c5f6"),a("967e")),u=a.n(c),m=a("3a3c"),p=a("9bff"),v=a("7ac8"),d={title:"",examQuestionSessions:[],qSelect:{label:"Variables",value:"",type:"text",list:[],actionName:"onVariables",visible:!0},qSelectSubject:{label:"Subject",value:"",type:"text",list:[],actionName:"onSubject",visible:!0},qSelectLevel:{label:"Level",value:"",type:"text",list:[],actionName:"onLevel",visible:!0},answerOptions:[],qSelectAnswerOption:{label:"Answer Option",value:"",type:"text",list:[],actionName:"onAnswerOption",visible:!0},qDate:{label:"Examination Date",name:"2021/02/05"}};a("39b2");function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function w(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=h(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r=!0,i=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return r=e.done,e},e:function(e){i=!0,s=e},f:function(){try{r||null==a.return||a.return()}finally{if(i)throw s}}}}function h(e,t){if(e){if("string"===typeof e)return x(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?x(e,t):void 0}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var S={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{Table:m["a"],MessageBox:p["a"]},data:function(){return{selectedSubject:null,selectedLevel:null,exam_vm:d,selectedAnswer:{},tableVM:{title:"Exams",columns:[{name:"actions",label:"Actions",field:"",align:"left",type:""},{name:"question",label:"Question",field:"",align:"left",type:"text"},{name:"answerOption",label:"Answer Option",field:"",align:"left",type:"text"},{name:"answer",label:"Answer",field:"",align:"left",type:"text"},{name:"subject",label:"Subject",field:"",align:"left",type:"text"},{name:"level",label:"Level",field:"",align:"left",type:"text"}],rows:[],separator:"cell",createItem:"createAnswer",updateItem:"updateAnswer",deleteItem:"deleteAnswer",createItemUrl:"/create-exam-answer",updateItemUrl:"/update-exam-answer",importURL:"/import-exam-answers"},dialogs:[{title:"Delete Answer",isVisible:!1,message:"Do you want to delete an answer",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Answer deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}]}},methods:{okayEvent:function(){var e=this;e.isFetchTableDialog=!1},cancelEvent:function(){var e=this;e.isFetchTableDialog=!1},createExam:function(){var e=this;console.log(e.tableVM.createItemUrl),this.$router.push(e.tableVM.createItemUrl)},updateExam:function(e){var t=this;this.$store.commit("examStore/SetSelectedAnswer",e),this.$router.push(t.tableVM.updateItemUrl)},deleteExam:function(e){var t=this;t.selectedExam=e,console.log(t.selectedExam),t.dialogs[0].isVisible=!0},cancelDialog:function(e){var t,a=this,n=-1,o=w(a.dialogs);try{for(o.s();!(t=o.n()).done;){var s=t.value;if(n++,s.title===e){a.dialogs[n].isVisible=!1;break}}}catch(r){o.e(r)}finally{o.f()}},delete:function(){var e=this;return l()(u.a.mark((function t(){var a,n,o;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,e.$store.getters["authenticationStore/IdentityModel"],n="examanswer/".concat(a.selectedExam._id),o={url:n},t.next=6,Object(v["e"])(o);case 6:t.sent,a.dialogs[0].isVisible=!1,a.dialogs[1].isVisible=!0;case 9:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return l()(u.a.mark((function a(){var n,o,s,r,i;return u.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=t,o=-1,s=w(n.dialogs),a.prev=3,s.s();case 5:if((r=s.n()).done){a.next=22;break}if(i=r.value,o++,i.title!==e){a.next=20;break}a.t0=e,a.next="Delete Answer"===a.t0?12:"Success"===a.t0?15:18;break;case 12:return a.next=14,n.delete();case 14:return a.abrupt("break",18);case 15:return a.next=17,n.viewQuestions();case 17:return a.abrupt("break",18);case 18:return n.dialogs[o].isVisible=!1,a.abrupt("break",22);case 20:a.next=5;break;case 22:a.next=27;break;case 24:a.prev=24,a.t1=a["catch"](3),s.e(a.t1);case 27:return a.prev=27,s.f(),a.finish(27);case 30:case"end":return a.stop()}}),a,null,[[3,24,27,30]])})))()},initializeData:function(){var e=this;e.exam_vm.qSelectSubject.list=this.$store.getters["subjectStore/subjects"].sort((function(e,t){return e.type.toLowerCase().localeCompare(t.type.toLowerCase())})).map((function(e){return f(f({},e),{},{label:e.type,value:e.id})})),e.exam_vm.qSelectLevel.list=this.$store.getters["levelStore/levels"].sort((function(e,t){return e.type.toLowerCase().localeCompare(t.type.toLowerCase())})).map((function(e){return f(f({},e),{},{label:e.type,value:e.id})})),this.$store.commit("authenticationStore/setShowSpinner",!1)},viewAnswers:function(){var e=this;return l()(u.a.mark((function t(){var a,n,o,s,r,i,l,c;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,n=e.$store.getters["authenticationStore/IdentityModel"],e.$store.commit("authenticationStore/setShowSpinner",!0),o=[],s=a.exam_vm.qSelectSubject.list.find((function(e){return e.value===a.selectedSubject})),r=a.exam_vm.qSelectLevel.list.find((function(e){return e.value===a.selectedLevel})),i=a.exam_vm.qDate.name.split("/"),l={url:"examanswer/findAll",req:{subjectId:s.value,levelId:r.value,schoolId:n.schoolId,examYear:Number(i[0]),examMonth:Number(i[1]),examDay:Number(i[2])}},t.prev=8,console.log("payload: ",l),t.next=12,Object(v["c"])(l);case 12:c=t.sent,console.log("result: ",c.data),o=c.data.map((function(e){return f(f({},e),{},{question:e.question,subject:s.type,level:r.type})})),console.log("rows: ",o),e.$store.commit("authenticationStore/setShowSpinner",!1),e.$store.commit("examStore/SetAnswers",o),a.tableVM.rows=o,e.$store.commit("authenticationStore/setActiveColumns",a.tableVM.columns),e.$store.commit("authenticationStore/setActiveRows",a.tableVM.rows),e.$store.commit("authenticationStore/setNewRows",a.tableVM.rows),e.$store.commit("authenticationStore/setShowSpinner",!1),t.next=28;break;case 25:t.prev=25,t.t0=t["catch"](8),e.$store.commit("authenticationStore/setShowSpinner",!1);case 28:case"end":return t.stop()}}),t,null,[[8,25]])})))()}},created:function(){var e=this;return l()(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e,n=e.$store.getters["authenticationStore/IdentityModel"],"CEO"===n.schoolId&&(a.tableVM.createItemUrl="/super-admin-create-exam-answer",a.tableVM.updateItemUrl="/super-admin-update-exam-answer",a.tableVM.importURL="/super-admin-import-exam-answers"),e.$store.commit("authenticationStore/setActiveColumns",[]),e.$store.commit("authenticationStore/setActiveRows",[]),e.$store.commit("authenticationStore/setNewRows",[]),a.initializeData(),e.$store.commit("authenticationStore/setActiveRoute","answers"),e.$store.commit("authenticationStore/setCreateURL",a.tableVM.createItemUrl),e.$store.commit("authenticationStore/setImportURL",a.tableVM.importURL);case 10:case"end":return t.stop()}}),t)})))()}},g=S,y=a("2877"),q=a("ddd8"),k=a("27f9"),j=a("0016"),D=a("7cbe"),_=a("52ee"),E=a("9c40"),$=a("2c91"),C=a("0d59"),A=a("24e8"),O=a("7f67"),V=a("eebe"),I=a.n(V),L=Object(y["a"])(g,n,o,!1,null,null,null);t["default"]=L.exports;I()(L,"components",{QSelect:q["a"],QInput:k["a"],QIcon:j["a"],QPopupProxy:D["a"],QDate:_["a"],QBtn:E["a"],QSpace:$["a"],QSpinner:C["a"],QDialog:A["a"]}),I()(L,"directives",{ClosePopup:O["a"]})}}]);