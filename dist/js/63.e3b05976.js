(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[63],{"7b4a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-sm"},[a("ExcelImport",{attrs:{title:e.title,_applicationColumns:e.applicationColumns},on:{saveTable:function(t){return e.Create(t)}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[a("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[a("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return a("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(a){e.$set(t,"isVisible",a)},expression:"dialog.isVisible"}},[a("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},r=[],i=(a("23bf"),a("06db"),a("7f7f"),a("8a81"),a("1c4c"),a("5df3"),a("cadf"),a("ac6a"),a("d25f"),a("9986"),a("8e6e"),a("fa84")),o=a.n(i),s=a("c47a"),l=a.n(s),c=a("967e"),u=a.n(c),b=(a("6d67"),a("456d"),a("7514"),a("28a5"),a("c5f6"),a("9bff")),p=a("9e0c"),v=a("7ac8"),f=[{title:"Create Questions",isVisible:!1,message:"Do you want to create questions?",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Questions created successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}],m=a("b82d"),d=a("a776");function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=x(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(s)throw i}}}}function x(e,t){if(e){if("string"===typeof e)return k(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?k(e,t):void 0}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var w={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{ExcelImport:p["a"],MessageBox:b["a"]},data:function(){return{title:"Import Questions",appVariables:[{variableTitle:"Subject",variableName:"subject"},{variableTitle:"Level",variableName:"level"},{variableTitle:"Question",variableName:"question"},{variableTitle:"Option A",variableName:"optionA"},{variableTitle:"Option B",variableName:"optionB"},{variableTitle:"Option C",variableName:"optionC"},{variableTitle:"Option D",variableName:"optionD"},{variableTitle:"Option E",variableName:"optionE"},{variableTitle:"Option F",variableName:"optionF"},{variableTitle:"Option G",variableName:"optionG"},{variableTitle:"Answer",variableName:"answer"},{variableTitle:"Examination Date",variableName:"examinationDate"}],applicationColumns:[],dialogs:f,tableRows:[]}},methods:{Create:function(e){var t=this;t.tableRows=e;var a,n=-1,r=y(t.dialogs);try{for(r.s();!(a=r.n()).done;){var i=a.value;if(n++,"Create Questions"==i.title){t.dialogs[n].isVisible=!0;break}}}catch(o){r.e(o)}finally{r.f()}},Cancel:function(){var e=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===e.schoolId?this.$router.push("/super-admin-exam-question-landing"):this.$router.push("/exam-question-landing")},cancelDialog:function(e){var t,a=this,n=-1,r=y(a.dialogs);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(n++,i.title===e){a.dialogs[n].isVisible=!1;break}}}catch(o){r.e(o)}finally{r.f()}},setWorkSheetColumns:function(){var e=this,t={label:"",value:"",type:"text",list:[],actionName:"referedByAction",visible:!0};t.list=e.appVariables.map((function(e){return{type:e.variableTitle,value:e.variableTitle,label:e.variableTitle,variableName:e.variableName}}));for(var a=0;a<e.appVariables.length;a++)e.applicationColumns.push(g({},t)),e.applicationColumns[a].id="Application Column ".concat(a+1),e.applicationColumns[a].value=e.applicationColumns[a].list[a].value,e.applicationColumns[a].sn=a;console.log("applicationColumns: ",e.applicationColumns)},createQuestions:function(){var e=this;return o()(u.a.mark((function t(){var a,n,r,i,o,s,l,c,b,p,f,h,g,x,k,w,S,O,j,E,C,I,D,N,T,$,V;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,n=e.$store.getters["authenticationStore/IdentityModel"],r="",t.next=5,Object(m["a"])(n.schoolId);case 5:return i=t.sent,o=i.result,t.next=9,Object(d["a"])(n.schoolId);case 9:s=t.sent,l=s.result,console.log("subjects: ",o),console.log("levels: ",l),c=[],b=!1,p=[],console.log("context.tableRows; ",a.tableRows),f=y(a.tableRows),t.prev=18,f.s();case 20:if((h=f.n()).done){t.next=84;break}for(g=h.value,x={},p=[],k=Object.keys(g),w=function(){var e=O[S];if("Question"==="".concat(e)||"Subject"==="".concat(e)||"Level"==="".concat(e)||"Answer"==="".concat(e)){var t="".concat(e),n=a.appVariables.find((function(t){return t.variableTitle===e}));x["".concat(n.variableName)]="".concat(g[t])}else if("Examination Date"==="".concat(e)){var r=g["".concat(e)].split("/");x.examYear=Number(r[0]),x.examMonth=Number(r[1]),x.examDay=Number(r[2])}else{var i="".concat(e);p.push({answer:"".concat(g[i]),cloudImageUrl:"",cloudImageName:"",originalImageName:""})}},S=0,O=k;S<O.length;S++)w();x.schoolId=n.schoolId,x.createdBy=n.id,x.cloudImageUrl="",x.cloudImageName="",x.originalImageName="",x.answerOptions=p,b=!1,j=y(o),t.prev=35,j.s();case 37:if((E=j.n()).done){t.next=46;break}if(C=E.value,C.type!==x["subject"]){t.next=44;break}return x.subjectId=C.id,console.log("subject seen"),b=!0,t.abrupt("break",46);case 44:t.next=37;break;case 46:t.next=51;break;case 48:t.prev=48,t.t0=t["catch"](35),j.e(t.t0);case 51:return t.prev=51,j.f(),t.finish(51);case 54:if(0!=b){t.next=57;break}return r+="The subject specified in the external file does not exist in your school database\n",t.abrupt("continue",82);case 57:b=!1,I=y(l),t.prev=59,I.s();case 61:if((D=I.n()).done){t.next=70;break}if(N=D.value,N.type!==x["level"]){t.next=68;break}return x.levelId=N.id,console.log("level seen"),b=!0,t.abrupt("break",70);case 68:t.next=61;break;case 70:t.next=75;break;case 72:t.prev=72,t.t1=t["catch"](59),I.e(t.t1);case 75:return t.prev=75,I.f(),t.finish(75);case 78:if(0!=b){t.next=81;break}return r+="The subject specified in the external file does not exist in your school database\n",t.abrupt("continue",82);case 81:c.push(x);case 82:t.next=20;break;case 84:t.next=89;break;case 86:t.prev=86,t.t2=t["catch"](18),f.e(t.t2);case 89:return t.prev=89,f.f(),t.finish(89);case 92:if(""!==r){t.next=109;break}return console.log("questions: ",c),T="examquestion/createmany",$={url:T,req:c},console.log("payload: ",$),e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=100,Object(v["c"])($);case 100:V=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),console.log("response: ",V),a.dialogs[0].isVisible=!1,V.data?a.dialogs[1].isVisible=!0:a.dialogs[2].isVisible=!0,e.$store.commit("authenticationStore/setIsError",!1),e.$store.commit("authenticationStore/setErrorMessages",""),t.next=111;break;case 109:e.$store.commit("authenticationStore/setIsError",!0),e.$store.commit("authenticationStore/setErrorMessages",r);case 111:case"end":return t.stop()}}),t,null,[[18,86,89,92],[35,48,51,54],[59,72,75,78]])})))()},okDialog:function(e){var t=this;return o()(u.a.mark((function a(){var n,r,i,o,s,l;return u.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=t,r=-1,i=y(n.dialogs),a.prev=3,i.s();case 5:if((o=i.n()).done){a.next=22;break}if(s=o.value,r++,s.title!==e){a.next=20;break}a.t0=e,a.next="Create Questions"===a.t0?12:"Success"===a.t0?15:18;break;case 12:return a.next=14,n.createQuestions();case 14:return a.abrupt("break",18);case 15:return l=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===l.schoolId?t.$router.push("/super-admin-exam-question-landing"):t.$router.push("/exam-question-landing"),a.abrupt("break",18);case 18:return n.dialogs[r].isVisible=!1,a.abrupt("break",22);case 20:a.next=5;break;case 22:a.next=27;break;case 24:a.prev=24,a.t1=a["catch"](3),i.e(a.t1);case 27:return a.prev=27,i.f(),a.finish(27);case 30:case"end":return a.stop()}}),a,null,[[3,24,27,30]])})))()}},created:function(){var e=this;e.setWorkSheetColumns(),this.$store.commit("authenticationStore/setIsError",!1),this.$store.commit("authenticationStore/setErrorMessages","")}},S=w,O=a("2877"),j=a("0d59"),E=a("24e8"),C=a("eebe"),I=a.n(C),D=Object(O["a"])(S,n,r,!1,null,null,null);t["default"]=D.exports;I()(D,"components",{QSpinner:j["a"],QDialog:E["a"]})}}]);