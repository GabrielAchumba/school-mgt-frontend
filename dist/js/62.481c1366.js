(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[62],{"0623":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-sm"},[n("ExcelImport",{attrs:{title:e.title,applicationColumns:e.applicationColumns},on:{saveTable:function(t){return e.Create(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},r=[],s=(n("23bf"),n("06db"),n("7f7f"),n("8a81"),n("1c4c"),n("5df3"),n("cadf"),n("456d"),n("d25f"),n("9986"),n("8e6e"),n("fa84")),i=n.n(s),o=n("c47a"),c=n.n(o),l=n("967e"),u=n.n(l),p=(n("6d67"),n("ac6a"),n("7514"),n("9bff")),b=n("9e0c"),f=n("7ac8"),v=[{title:"Create Answers",isVisible:!1,message:"Do you want to create answers?",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Answers created successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}],d=n("b82d"),h=n("a776");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=k(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw s}}}}function k(e,t){if(e){if("string"===typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var x={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{ExcelImport:b["a"],MessageBox:p["a"]},data:function(){return{title:"Import Questions",appVariables:[{variableTitle:"Subject",variableName:"subject"},{variableTitle:"Level",variableName:"level"},{variableTitle:"Question",variableName:"question"},{variableTitle:"Answer",variableName:"answer"}],applicationColumns:[],dialogs:v,tableRows:[]}},methods:{Create:function(e){var t=this;t.tableRows=e;var n,a=-1,r=w(t.dialogs);try{for(r.s();!(n=r.n()).done;){var s=n.value;if(a++,"Create Answers"==s.title){t.dialogs[a].isVisible=!0;break}}}catch(i){r.e(i)}finally{r.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-exam-answer-landing"):this.$router.push("/exam-answer-landing")},cancelDialog:function(e){var t,n=this,a=-1,r=w(n.dialogs);try{for(r.s();!(t=r.n()).done;){var s=t.value;if(a++,s.title===e){n.dialogs[a].isVisible=!1;break}}}catch(i){r.e(i)}finally{r.f()}},setWorkSheetColumns:function(){var e=this,t={label:"",value:"",type:"text",list:[],actionName:"referedByAction",visible:!0};t.list=e.appVariables.map((function(e){return{type:e.variableTitle,value:e.variableTitle,label:e.variableTitle,variableName:e.variableName}}));for(var n=0;n<e.appVariables.length;n++)e.applicationColumns.push(g({},t)),e.applicationColumns[n].id="Application Column ".concat(n+1),e.applicationColumns[n].value=e.applicationColumns[n].list[n].value,e.applicationColumns[n].sn=n;console.log("applicationColumns: ",e.applicationColumns)},viewQuestions:function(e,t,n,a){var r=this;return i()(u.a.mark((function s(){var i,o,c,l;return u.a.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return r,i=r.$store.getters["authenticationStore/IdentityModel"],o=[],c={url:"examquestion/findAll",req:{subjectId:e,levelId:t,schoolId:i.schoolId}},s.prev=4,console.log("payload: ",c),s.next=8,Object(f["c"])(c);case 8:l=s.sent,o=l.data.map((function(e){return g(g({},e),{},{question:e.question,subject:a,level:n})})),console.log("rows: ",o),s.next=16;break;case 13:s.prev=13,s.t0=s["catch"](4),console.log("error fetching questions of a specific subject");case 16:return s.abrupt("return",o);case 17:case"end":return s.stop()}}),s,null,[[4,13]])})))()},createAnswers:function(){var e=this;return i()(u.a.mark((function t(){var n,a,r,s,i,o,c,l,p,b,v,m,g,k,y,x,S;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a=e.$store.getters["authenticationStore/IdentityModel"],t.next=4,Object(d["a"])(a.schoolId);case 4:return r=t.sent,s=r.result,t.next=8,Object(h["a"])(a.schoolId);case 8:i=t.sent,o=i.result,console.log("subjects: ",s),console.log("levels: ",o),c=[],l=[],p=!1,[],b=-1,console.log("context.tableRows; ",n.tableRows),v=w(n.tableRows),t.prev=19,g=u.a.mark((function e(){var t,r,i,f,v,d,h,g,k,y,x,S,j,O,I,C,E,D,$;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=m.value,b++,r={},[],i=w(n.appVariables);try{for(i.s();!(f=i.n()).done;)v=f.value,r["".concat(v.variableName)]=t["".concat(v.variableTitle)]}catch(u){i.e(u)}finally{i.f()}r.schoolId=a.schoolId,r.createdBy=a.id,p=!1,d="",h=w(s),e.prev=11,h.s();case 13:if((g=h.n()).done){e.next=22;break}if(k=g.value,k.type!==r["subject"]){e.next=20;break}return r.subjectId=k.id,d=k.type,p=!0,e.abrupt("break",22);case 20:e.next=13;break;case 22:e.next=27;break;case 24:e.prev=24,e.t0=e["catch"](11),h.e(e.t0);case 27:return e.prev=27,h.f(),e.finish(27);case 30:if(0!=p){e.next=32;break}return e.abrupt("return","continue");case 32:p=!1,y="",x=w(o),e.prev=35,x.s();case 37:if((S=x.n()).done){e.next=46;break}if(j=S.value,j.type!==r["level"]){e.next=44;break}return r.levelId=j.id,y=j.type,p=!0,e.abrupt("break",46);case 44:e.next=37;break;case 46:e.next=51;break;case 48:e.prev=48,e.t1=e["catch"](35),x.e(e.t1);case 51:return e.prev=51,x.f(),e.finish(51);case 54:if(0!=p){e.next=56;break}return e.abrupt("return","continue");case 56:if(0!==b){e.next=61;break}return e.next=59,n.viewQuestions(r.subjectId,r.levelId,y,d);case 59:l=e.sent,console.log("questions: ",l);case 61:if(!(l.length>0)){e.next=86;break}O=l.find((function(e){return e.question===r.question})),I=[{id:0,value:"A"},{id:1,value:"B"},{id:2,value:"C"},{id:3,value:"D"},{id:4,value:"E"},{id:5,value:"F"},{id:6,value:"G"}],C=-1,r.questionId=O._id,E=w(O.answerOptions),e.prev=67,E.s();case 69:if((D=E.n()).done){e.next=78;break}if($=D.value,C++,$.answer!==r.answer){e.next=76;break}return r.answerId=$._id,r.answerOption=I[C].value,e.abrupt("break",78);case 76:e.next=69;break;case 78:e.next=83;break;case 80:e.prev=80,e.t2=e["catch"](67),E.e(e.t2);case 83:return e.prev=83,E.f(),e.finish(83);case 86:c.push(r);case 87:case"end":return e.stop()}}),e,null,[[11,24,27,30],[35,48,51,54],[67,80,83,86]])})),v.s();case 22:if((m=v.n()).done){t.next=29;break}return t.delegateYield(g(),"t0",24);case 24:if(k=t.t0,"continue"!==k){t.next=27;break}return t.abrupt("continue",27);case 27:t.next=22;break;case 29:t.next=34;break;case 31:t.prev=31,t.t1=t["catch"](19),v.e(t.t1);case 34:return t.prev=34,v.f(),t.finish(34);case 37:return console.log("answers: ",c),y="examanswer/createmany",x={url:y,req:c},e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=43,Object(f["c"])(x);case 43:S=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),console.log("response: ",S),n.dialogs[0].isVisible=!1,S.data?n.dialogs[1].isVisible=!0:n.dialogs[2].isVisible=!0;case 48:case"end":return t.stop()}}),t,null,[[19,31,34,37]])})))()},okDialog:function(e){var t=this;return i()(u.a.mark((function n(){var a,r,s,i,o,c;return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=t,r=-1,s=w(a.dialogs),n.prev=3,s.s();case 5:if((i=s.n()).done){n.next=22;break}if(o=i.value,r++,o.title!==e){n.next=20;break}n.t0=e,n.next="Create Answers"===n.t0?12:"Success"===n.t0?15:18;break;case 12:return n.next=14,a.createAnswers();case 14:return n.abrupt("break",18);case 15:return c=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===c.schoolId?t.$router.push("/super-admin-exam-answer-landing"):t.$router.push("/exam-answer-landing"),n.abrupt("break",18);case 18:return a.dialogs[r].isVisible=!1,n.abrupt("break",22);case 20:n.next=5;break;case 22:n.next=27;break;case 24:n.prev=24,n.t1=n["catch"](3),s.e(n.t1);case 27:return n.prev=27,s.f(),n.finish(27);case 30:case"end":return n.stop()}}),n,null,[[3,24,27,30]])})))()}},created:function(){var e=this;e.setWorkSheetColumns(),this.$store.commit("authenticationStore/setIsError",!1),this.$store.commit("authenticationStore/setErrorMessages","")}},S=x,j=n("2877"),O=n("0d59"),I=n("24e8"),C=n("eebe"),E=n.n(C),D=Object(j["a"])(S,a,r,!1,null,null,null);t["default"]=D.exports;E()(D,"components",{QSpinner:O["a"],QDialog:I["a"]})}}]);