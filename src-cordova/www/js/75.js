(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[75],{"9e0e":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.showSpinner?e._e():s("div",{staticClass:"q-pa-sm"},[e.setIsResponsive?s("div",[s("div",{staticClass:"row"},[s("LevelSelector",{staticClass:"col-12",attrs:{qSelect:e.selectors_vm.qSelectLevel},on:{onLevelValueChange:function(t){return e.onLevelValueChange(t)}}}),s("SubjectSelector",{staticClass:"col-12",attrs:{qSelect:e.selectors_vm.qSelectSubject},on:{onSubjectValueChange:function(t){return e.onSubjectValueChange(t)}}}),s("Form",{staticClass:"col-12",attrs:{formData:e.lessonNotesForm},on:{linkClick:function(t){return e.GetSelectedLessonNote(t)},qListTemplateAction:function(t){return e.filterLessonNotes(t)}}}),e._l(e.noteSections,(function(t){return s("div",{key:t.title},[e.isFileUrl(t.fileUrl)?s("TitleDescriptionImage",{attrs:{title:t.title,description:t.description,imageUrl:t.fileUrl,imageTitle:t.imageTitle,imageDescription:t.imageDescription,isVideo:t.isVideo,isImage:t.isImage,isAudio:t.isAudio}}):s("TitleDescription",{attrs:{title:t.title,description:t.description}})],1)}))],2)]):s("div",[s("q-resize-observer",{attrs:{debounce:0},on:{resize:e.onResize}}),s("q-splitter",{style:e.splitterStyle,attrs:{id:"photos",limits:[0,100],"before-class":"overflow-hidden","after-class":"overflow-hidden"},scopedSlots:e._u([{key:"before",fn:function(){return[s("div",{staticClass:"row"},[s("LevelSelector",{staticClass:"col-12",attrs:{qSelect:e.selectors_vm.qSelectLevel},on:{onLevelValueChange:function(t){return e.onLevelValueChange(t)}}}),s("SubjectSelector",{staticClass:"col-12",attrs:{qSelect:e.selectors_vm.qSelectSubject},on:{onSubjectValueChange:function(t){return e.onSubjectValueChange(t)},qListTemplateAction:function(t){return e.filterLessonNotes(t)}}}),s("Form",{staticClass:"col-12",attrs:{formData:e.lessonNotesForm},on:{linkClick:function(t){return e.GetSelectedLessonNote(t)}}})],1)]},proxy:!0},{key:"after",fn:function(){return[s("q-scroll-area",{staticStyle:{height:"100vh","max-width":"100%"}},e._l(e.noteSections,(function(t){return s("div",{key:t.title},[e.isFileUrl(t.fileUrl)?s("TitleDescriptionImage",{attrs:{title:t.title,description:t.description,imageUrl:t.fileUrl,imageTitle:t.imageTitle,imageDescription:t.imageDescription,isVideo:t.isVideo,isImage:t.isImage,isAudio:t.isAudio}}):s("TitleDescription",{attrs:{title:t.title,description:t.description}})],1)})),0)]},proxy:!0}],null,!1,30665021),model:{value:e.splitterModel,callback:function(t){e.splitterModel=t},expression:"splitterModel"}})],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[s("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[s("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return s("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(s){e.$set(t,"isVisible",s)},expression:"dialog.isVisible"}},[s("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},n=[],i=(s("d38f"),s("b7dd"),s("1a43"),s("0012"),s("6212"),s("950c"),s("2bf3"),s("5b54"),s("ef92"),s("f69e"),s("ad58"),s("d93a"),s("7efb")),r=s.n(i),a=s("9289"),l=s.n(a),c=s("549c"),u=s.n(c),d=s("52b5"),p=s.n(d),m=(s("6ac6"),s("c889"),s("0a68")),f=s("a157"),h=s("785a"),v=s("82f4"),b=s("0588"),g=s("7d14"),S=s("2c1a"),w=s("0601"),y={title:"Lesson Notes",qSelects:[],qInputs:[],qBtns:[],qDates:[],GroupedCheckBoxes:[],qLists:[]},L={title:"",qSelectSubject:{label:"Subject",value:"",type:"text",list:[],actionName:"onSubject",visible:!0},qSelectLevel:{label:"Level",value:"",type:"text",list:[],actionName:"onLevel",visible:!0}},k={qParagraphs:[]};s("40cc");function x(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function I(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?x(Object(s),!0).forEach((function(t){l()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):x(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function j(e,t){var s="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!s){if(Array.isArray(e)||(s=N(e))||t&&e&&"number"===typeof e.length){s&&(e=s);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,a=!1;return{s:function(){s=s.call(e)},n:function(){var e=s.next();return r=e.done,e},e:function(e){a=!0,i=e},f:function(){try{r||null==s.return||s.return()}finally{if(a)throw i}}}}function N(e,t){if(e){if("string"===typeof e)return q(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?q(e,t):void 0}}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,o=new Array(t);s<t;s++)o[s]=e[s];return o}var D={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]},splitterStyle:function(){var e=this;return{height:"100vh",width:"".concat(e.width,"px")}},setIsResponsive:function(){var e=window.innerWidth;return e<700}},components:{Table:h["a"],MessageBox:b["a"],Form:v["a"],LevelSelector:g["a"],SubjectSelector:S["a"],TitleDescription:m["a"],TitleDescriptionImage:f["a"]},data:function(){return{width:400,splitterModel:30,isMobile:!1,selectedLessonNote:{},lessonNotesForm:y,selectors_vm:L,tableVM:{title:"Lesson Notes",columns:[{name:"actions",label:"Actions",field:"",align:"left",type:""},{name:"title",label:"Title",field:"",align:"left",type:"text"}],rows:[],separator:"cell",createItem:"createLessonNote",updateItem:"updateLessonNote",deleteItem:"deleteLessonNote",createItemUrl:"/create-lesson-note",updateItemUrl:"/update-lesson-note"},dialogs:[{title:"Delete Lesson Note",isVisible:!1,message:"Do you want to delete lesson note",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Lesson note deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}],selectedLevel:null,selectedSubject:null,selectedLessonNoteForm:k,noteSections:[]}},methods:{isFileUrl:function(e){return""!==e&&void 0!=e},getFileExtension:function(e){var t=e.split(".");return t[1]},onResize:function(e){var t=this;t.width=e.width},okayEvent:function(){var e=this;e.isFetchTableDialog=!1},cancelEvent:function(){var e=this;e.isFetchTableDialog=!1},createLessonNote:function(){var e=this;this.$router.push(e.tableVM.createItemUrl)},updateLessonNote:function(e){var t=this;this.$store.commit("lessonNoteStore/SetSelectedLessonNote",e),this.$router.push(t.tableVM.updateItemUrl)},deleteLessonNote:function(e){var t=this;t.selectedLessonNote=e,console.log(t.selectedLessonNote),t.dialogs[0].isVisible=!0},cancelDialog:function(e){var t,s=this,o=-1,n=j(s.dialogs);try{for(n.s();!(t=n.n()).done;){var i=t.value;if(o++,i.title===e){s.dialogs[o].isVisible=!1;break}}}catch(r){n.e(r)}finally{n.f()}},delete:function(){var e=this;return u()(p.a.mark((function t(){var s,o,n,i,r,a,l,c;return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e,o=e.$store.getters["authenticationStore/IdentityModel"],n="lessonnote/".concat(s.selectedLessonNote.id,"/").concat(o.schoolId),i={url:n},console.log("payload: ",i),t.next=7,Object(w["d"])(i);case 7:r=t.sent,a=r.data,l=a.message,c=a.success,c?s.dialogs[1].isVisible=!0:(s.dialogs[2].message=l,s.dialogs[2].isVisible=!0);case 10:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return u()(p.a.mark((function s(){var o,n,i,r,a;return p.a.wrap((function(s){while(1)switch(s.prev=s.next){case 0:console.log("payload: ",e),o=t,n=-1,i=j(o.dialogs),s.prev=4,i.s();case 6:if((r=i.n()).done){s.next=23;break}if(a=r.value,n++,a.title!==e){s.next=21;break}s.t0=e,s.next="Delete Lesson Note"===s.t0?13:"Success"===s.t0?16:19;break;case 13:return s.next=15,o.delete();case 15:return s.abrupt("break",19);case 16:return s.next=18,o.loadLessonNotes();case 18:return s.abrupt("break",19);case 19:return o.dialogs[n].isVisible=!1,s.abrupt("break",23);case 21:s.next=6;break;case 23:s.next=28;break;case 25:s.prev=25,s.t1=s["catch"](4),i.e(s.t1);case 28:return s.prev=28,i.f(),s.finish(28);case 31:case"end":return s.stop()}}),s,null,[[4,25,28,31]])})))()},onLevelValueChange:function(e){console.log("selectedLevel: ",e);var t=this;t.selectedLevel=e.qSelect,t.selectors_vm.qSelectSubject.value="",t.lessonNotesForm.qLists=[]},onSubjectValueChange:function(e){var t=this;return u()(p.a.mark((function s(){var o;return p.a.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return console.log("selectedSubject: ",e),o=t,o.selectedSubject=e.qSelect,s.next=5,o.FetchLessonNotes();case 5:case"end":return s.stop()}}),s)})))()},GetSelectedLessonNote:function(e){var t=this;return u()(p.a.mark((function s(){var o,n,i,r,a,l,c,u,d;return p.a.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return o=t,n=t.$store.getters["authenticationStore/IdentityModel"],t.$store.commit("authenticationStore/setShowSpinner",!0),o.noteSections=[],o.noteSections.push({title:e.title,description:"",fileUrl:"",imageTitle:"",imageDescription:"",isVideo:!1,isImage:!1,isAudio:!1,isPdf:!1}),s.prev=5,i={url:"lessonnotesection/findAll",req:{lessonNoteId:e._id,schoolId:n.schoolId}},s.next=9,Object(w["b"])(i);case 9:r=s.sent,console.log("response: ",r),a=0,l=j(r.data),s.prev=13,l.s();case 15:if((c=l.n()).done){s.next=39;break}if(u=c.value,a++,o.noteSections.push({title:u.sectionTitle,description:u.content,fileUrl:u.fileUrl,imageTitle:"",imageDescription:"",isVideo:!1,isImage:!1,isAudio:!1,isPdf:!1}),!o.isFileUrl(u.originalFileName)){s.next=37;break}d=o.getFileExtension(u.originalFileName),console.log("fileExtension: ",d),s.t0=d,s.next="pdf"===s.t0?25:"mp4"===s.t0?27:"mp3"===s.t0?29:"png"===s.t0?31:"jpeg"===s.t0?33:"jpg"===s.t0?35:37;break;case 25:return o.noteSections[a].isPdf=!0,s.abrupt("break",37);case 27:return o.noteSections[a].isVideo=!0,s.abrupt("break",37);case 29:return o.noteSections[a].isAudio=!0,s.abrupt("break",37);case 31:return o.noteSections[a].isImage=!0,s.abrupt("break",37);case 33:return o.noteSections[a].isImage=!0,s.abrupt("break",37);case 35:return o.noteSections[a].isImage=!0,s.abrupt("break",37);case 37:s.next=15;break;case 39:s.next=44;break;case 41:s.prev=41,s.t1=s["catch"](13),l.e(s.t1);case 44:return s.prev=44,l.f(),s.finish(44);case 47:console.log("context.noteSections: ",o.noteSections),t.$store.commit("authenticationStore/setShowSpinner",!1),s.next=54;break;case 51:s.prev=51,s.t2=s["catch"](5),t.$store.commit("authenticationStore/setShowSpinner",!1);case 54:case"end":return s.stop()}}),s,null,[[5,51],[13,41,44,47]])})))()},FetchLessonNotes:function(){var e=this;return u()(p.a.mark((function t(){var s,o,n,i,a;return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s=e,o=e.$store.getters["authenticationStore/IdentityModel"],console.log("context.selectedSubject: ",s.selectedSubject),console.log("context.selectedLevel: ",s.selectedLevel),!s.selectedSubject||!s.selectedLevel){t.next=19;break}return n={url:"lessonnote/notes",req:{subjectId:s.selectedSubject.value,levelId:s.selectedLevel.value,schoolId:o.schoolId}},t.prev=6,t.next=9,Object(w["b"])(n);case 9:i=t.sent,console.log("response.data: ",i.data),s.lessonNotesForm.qLists=[],a=i.data.map((function(e){return I(I({},e),{},{name:e.title,address:"",route:"/lesson-note-landing",letter:e.title.charAt(0)})})),console.log("items: ",a),s.lessonNotesForm.qLists.push({label:"Notes",items:r()(a),originalItems:r()(a)}),t.next=19;break;case 17:t.prev=17,t.t0=t["catch"](6);case 19:case"end":return t.stop()}}),t,null,[[6,17]])})))()},filterLessonNotes:function(e){var t=this;switch(console.log("payload: ",e),e.label){case"Notes":console.log("payload.originalItems: ",e.originalItems),console.log("payload.listBoxSearchModel: ",e.listBoxSearchModel),t.lessonNotesForm.qLists[0].items=customFilter(e.originalItems,e.listBoxSearchModel),console.log("context.lessonNotesForm.qLists.items: ",t.lessonNotesForm.qLists[0].items);break}},initializeSelectors:function(){var e=this;e.selectors_vm.qSelectSubject.list=this.$store.getters["subjectStore/subjects"].sort((function(e,t){return e.type.toLowerCase().localeCompare(t.type.toLowerCase())})).map((function(e){return I(I({},e),{},{label:e.type,value:e.id})})),e.selectors_vm.qSelectLevel.list=this.$store.getters["levelStore/levels"].sort((function(e,t){return e.type.toLowerCase().localeCompare(t.type.toLowerCase())})).map((function(e){return I(I({},e),{},{label:e.type,value:e.id})}))}},created:function(){var e=this,t=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===t.schoolId&&(e.tableVM.createItemUrl="/super-admin-create-lesson-note",e.tableVM.updateItemUrl="/super-admin-update-lesson-note"),e.initializeSelectors(),this.$store.commit("authenticationStore/setCreateURL",e.tableVM.createItemUrl),this.$store.commit("authenticationStore/setActiveColumns",e.tableVM.columns),this.$store.commit("authenticationStore/setActiveRows",e.tableVM.rows),this.$store.commit("authenticationStore/setNewRows",e.tableVM.rows),this.$store.commit("authenticationStore/setActiveRoute","lessonnotes"),this.$store.commit("authenticationStore/setIsError",!1),this.$store.commit("authenticationStore/setErrorMessages","")}},V=D,C=s("a6c2"),F=s("1169"),M=s("37e6"),O=s("b51c"),$=s("c99e"),T=s("ec6d"),A=s("63c1"),E=s.n(A),U=Object(C["a"])(V,o,n,!1,null,null,null);t["default"]=U.exports;E()(U,"components",{QResizeObserver:F["a"],QSplitter:M["a"],QScrollArea:O["a"],QSpinner:$["a"],QDialog:T["a"]})}}]);