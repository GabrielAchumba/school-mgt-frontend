(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[74],{e16c:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.showSpinner?e._e():n("div",{staticClass:"q-pa-sm"},[e.setIsResponsive?n("div",[n("div",{staticClass:"row"},[n("LevelSelector",{staticClass:"col-12",attrs:{qSelect:e.selectors_vm.qSelectLevel},on:{onLevelValueChange:function(t){return e.onLevelValueChange(t)}}}),n("SubjectSelector",{staticClass:"col-12",attrs:{qSelect:e.selectors_vm.qSelectSubject},on:{onSubjectValueChange:function(t){return e.onSubjectValueChange(t)}}}),n("Form",{staticClass:"col-12",attrs:{formData:e.lessonNotesForm},on:{linkClick:function(t){return e.GetSelectedLessonNote(t)}}}),e._l(e.noteSections,(function(t){return n("div",{key:t.title},[e.isFileUrl(t.fileUrl)?n("TitleDescriptionImage",{attrs:{title:t.title,description:t.description,imageUrl:t.fileUrl,imageTitle:t.imageTitle,imageDescription:t.imageDescription,isVideo:t.isVideo,isImage:t.isImage,isAudio:t.isAudio}}):n("TitleDescription",{attrs:{title:t.title,description:t.description}})],1)}))],2)]):n("div",[n("q-resize-observer",{attrs:{debounce:0},on:{resize:e.onResize}}),n("q-splitter",{style:e.splitterStyle,attrs:{id:"photos",limits:[0,100],"before-class":"overflow-hidden","after-class":"overflow-hidden"},scopedSlots:e._u([{key:"before",fn:function(){return[n("div",{staticClass:"row"},[n("LevelSelector",{staticClass:"col-12",attrs:{qSelect:e.selectors_vm.qSelectLevel},on:{onLevelValueChange:function(t){return e.onLevelValueChange(t)}}}),n("SubjectSelector",{staticClass:"col-12",attrs:{qSelect:e.selectors_vm.qSelectSubject},on:{onSubjectValueChange:function(t){return e.onSubjectValueChange(t)}}}),n("Form",{staticClass:"col-12",attrs:{formData:e.lessonNotesForm},on:{linkClick:function(t){return e.GetSelectedLessonNote(t)}}})],1)]},proxy:!0},{key:"after",fn:function(){return[n("q-scroll-area",{staticStyle:{height:"100vh","max-width":"100%"}},e._l(e.noteSections,(function(t){return n("div",{key:t.title},[e.isFileUrl(t.fileUrl)?n("TitleDescriptionImage",{attrs:{title:t.title,description:t.description,imageUrl:t.fileUrl,imageTitle:t.imageTitle,imageDescription:t.imageDescription,isVideo:t.isVideo,isImage:t.isImage,isAudio:t.isAudio}}):n("TitleDescription",{attrs:{title:t.title,description:t.description}})],1)})),0)]},proxy:!0}],null,!1,216549331),model:{value:e.splitterModel,callback:function(t){e.splitterModel=t},expression:"splitterModel"}})],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},o=[],i=(n("23bf"),n("06db"),n("7f7f"),n("8a81"),n("1c4c"),n("5df3"),n("cadf"),n("ac6a"),n("456d"),n("d25f"),n("9986"),n("8e6e"),n("4db1")),r=n.n(i),a=n("c47a"),l=n.n(a),c=n("fa84"),u=n.n(c),d=n("967e"),p=n.n(d),f=(n("28a5"),n("6d67"),n("383f")),v=n("0301"),b=n("3a3c"),h=n("9437"),m=n("9bff"),g=n("0c24"),S=n("c601"),w=n("7ac8"),y={title:"Lesson Notes",qSelects:[],qInputs:[],qBtns:[],qDates:[],GroupedCheckBoxes:[],qLists:[]},k={title:"",qSelectSubject:{label:"Subject",value:"",type:"text",list:[],actionName:"onSubject",visible:!0},qSelectLevel:{label:"Level",value:"",type:"text",list:[],actionName:"onLevel",visible:!0}},L={qParagraphs:[]};n("55b1");function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=D(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var s=0,o=function(){};return{s:o,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){a=!0,i=e},f:function(){try{r||null==n.return||n.return()}finally{if(a)throw i}}}}function D(e,t){if(e){if("string"===typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}var V={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]},splitterStyle:function(){var e=this;return{height:"100vh",width:"".concat(e.width,"px")}},setIsResponsive:function(){var e=window.innerWidth;return e<700}},components:{Table:b["a"],MessageBox:m["a"],Form:h["a"],LevelSelector:g["a"],SubjectSelector:S["a"],TitleDescription:f["a"],TitleDescriptionImage:v["a"]},data:function(){return{width:400,splitterModel:30,isMobile:!1,selectedLessonNote:{},lessonNotesForm:y,selectors_vm:k,tableVM:{title:"Lesson Notes",columns:[{name:"actions",label:"Actions",field:"",align:"left",type:""},{name:"title",label:"Title",field:"",align:"left",type:"text"}],rows:[],separator:"cell",createItem:"createLessonNote",updateItem:"updateLessonNote",deleteItem:"deleteLessonNote",createItemUrl:"/create-lesson-note",updateItemUrl:"/update-lesson-note"},dialogs:[{title:"Delete Lesson Note",isVisible:!1,message:"Do you want to delete lesson note",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Lesson note deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}],selectedLevel:null,selectedSubject:null,selectedLessonNoteForm:L,noteSections:[]}},methods:{isFileUrl:function(e){return""!==e&&void 0!=e},getFileExtension:function(e){var t=e.split(".");return t[1]},onResize:function(e){var t=this;t.width=e.width},okayEvent:function(){var e=this;e.isFetchTableDialog=!1},cancelEvent:function(){var e=this;e.isFetchTableDialog=!1},createLessonNote:function(){var e=this;this.$router.push(e.tableVM.createItemUrl)},updateLessonNote:function(e){var t=this;this.$store.commit("lessonNoteStore/SetSelectedLessonNote",e),this.$router.push(t.tableVM.updateItemUrl)},deleteLessonNote:function(e){var t=this;t.selectedLessonNote=e,console.log(t.selectedLessonNote),t.dialogs[0].isVisible=!0},cancelDialog:function(e){var t,n=this,s=-1,o=I(n.dialogs);try{for(o.s();!(t=o.n()).done;){var i=t.value;if(s++,i.title===e){n.dialogs[s].isVisible=!1;break}}}catch(r){o.e(r)}finally{o.f()}},delete:function(){var e=this;return u()(p.a.mark((function t(){var n,s,o,i,r,a,l,c;return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,s=e.$store.getters["authenticationStore/IdentityModel"],o="lessonnote/".concat(n.selectedLessonNote.id,"/").concat(s.schoolId),i={url:o},console.log("payload: ",i),t.next=7,Object(w["d"])(i);case 7:r=t.sent,a=r.data,l=a.message,c=a.success,c?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=l,n.dialogs[2].isVisible=!0);case 10:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return u()(p.a.mark((function n(){var s,o,i,r,a;return p.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),s=t,o=-1,i=I(s.dialogs),n.prev=4,i.s();case 6:if((r=i.n()).done){n.next=23;break}if(a=r.value,o++,a.title!==e){n.next=21;break}n.t0=e,n.next="Delete Lesson Note"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,s.delete();case 15:return n.abrupt("break",19);case 16:return n.next=18,s.loadLessonNotes();case 18:return n.abrupt("break",19);case 19:return s.dialogs[o].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),i.e(n.t1);case 28:return n.prev=28,i.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()},onLevelValueChange:function(e){console.log("selectedLevel: ",e);var t=this;t.selectedLevel=e.qSelect,t.selectors_vm.qSelectSubject.value="",t.lessonNotesForm.qLists=[]},onSubjectValueChange:function(e){var t=this;return u()(p.a.mark((function n(){var s;return p.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("selectedSubject: ",e),s=t,s.selectedSubject=e.qSelect,n.next=5,s.FetchLessonNotes();case 5:case"end":return n.stop()}}),n)})))()},GetSelectedLessonNote:function(e){var t=this;return u()(p.a.mark((function n(){var s,o,i,r,a,l,c,u,d;return p.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=t,o=t.$store.getters["authenticationStore/IdentityModel"],t.$store.commit("authenticationStore/setShowSpinner",!0),s.noteSections=[],s.noteSections.push({title:e.title,description:"",fileUrl:"",imageTitle:"",imageDescription:"",isVideo:!1,isImage:!1,isAudio:!1,isPdf:!1}),n.prev=5,i={url:"lessonnotesection/findAll",req:{lessonNoteId:e._id,schoolId:o.schoolId}},n.next=9,Object(w["b"])(i);case 9:r=n.sent,console.log("response: ",r),a=0,l=I(r.data),n.prev=13,l.s();case 15:if((c=l.n()).done){n.next=39;break}if(u=c.value,a++,s.noteSections.push({title:u.sectionTitle,description:u.content,fileUrl:u.fileUrl,imageTitle:"",imageDescription:"",isVideo:!1,isImage:!1,isAudio:!1,isPdf:!1}),!s.isFileUrl(u.originalFileName)){n.next=37;break}d=s.getFileExtension(u.originalFileName),console.log("fileExtension: ",d),n.t0=d,n.next="pdf"===n.t0?25:"mp4"===n.t0?27:"mp3"===n.t0?29:"png"===n.t0?31:"jpeg"===n.t0?33:"jpg"===n.t0?35:37;break;case 25:return s.noteSections[a].isPdf=!0,n.abrupt("break",37);case 27:return s.noteSections[a].isVideo=!0,n.abrupt("break",37);case 29:return s.noteSections[a].isAudio=!0,n.abrupt("break",37);case 31:return s.noteSections[a].isImage=!0,n.abrupt("break",37);case 33:return s.noteSections[a].isImage=!0,n.abrupt("break",37);case 35:return s.noteSections[a].isImage=!0,n.abrupt("break",37);case 37:n.next=15;break;case 39:n.next=44;break;case 41:n.prev=41,n.t1=n["catch"](13),l.e(n.t1);case 44:return n.prev=44,l.f(),n.finish(44);case 47:console.log("context.noteSections: ",s.noteSections),t.$store.commit("authenticationStore/setShowSpinner",!1),n.next=54;break;case 51:n.prev=51,n.t2=n["catch"](5),t.$store.commit("authenticationStore/setShowSpinner",!1);case 54:case"end":return n.stop()}}),n,null,[[5,51],[13,41,44,47]])})))()},FetchLessonNotes:function(){var e=this;return u()(p.a.mark((function t(){var n,s,o,i,a;return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e,s=e.$store.getters["authenticationStore/IdentityModel"],console.log("context.selectedSubject: ",n.selectedSubject),console.log("context.selectedLevel: ",n.selectedLevel),!n.selectedSubject||!n.selectedLevel){t.next=19;break}return o={url:"lessonnote/notes",req:{subjectId:n.selectedSubject.value,levelId:n.selectedLevel.value,schoolId:s.schoolId}},t.prev=6,t.next=9,Object(w["b"])(o);case 9:i=t.sent,console.log("response.data: ",i.data),n.lessonNotesForm.qLists=[],a=i.data.map((function(e){return j(j({},e),{},{name:e.title,address:"",route:"/lesson-note-landing",letter:e.title.charAt(0)})})),console.log("items: ",a),n.lessonNotesForm.qLists.push({label:"Notes",items:r()(a)}),t.next=19;break;case 17:t.prev=17,t.t0=t["catch"](6);case 19:case"end":return t.stop()}}),t,null,[[6,17]])})))()},initializeSelectors:function(){var e=this;e.selectors_vm.qSelectSubject.list=this.$store.getters["subjectStore/subjects"].sort((function(e,t){return e.type.toLowerCase().localeCompare(t.type.toLowerCase())})).map((function(e){return j(j({},e),{},{label:e.type,value:e.id})})),e.selectors_vm.qSelectLevel.list=this.$store.getters["levelStore/levels"].sort((function(e,t){return e.type.toLowerCase().localeCompare(t.type.toLowerCase())})).map((function(e){return j(j({},e),{},{label:e.type,value:e.id})}))}},created:function(){var e=this,t=this.$store.getters["authenticationStore/IdentityModel"];"CEO"===t.schoolId&&(e.tableVM.createItemUrl="/super-admin-create-lesson-note",e.tableVM.updateItemUrl="/super-admin-update-lesson-note"),e.initializeSelectors(),this.$store.commit("authenticationStore/setCreateURL",e.tableVM.createItemUrl),this.$store.commit("authenticationStore/setActiveColumns",e.tableVM.columns),this.$store.commit("authenticationStore/setActiveRows",e.tableVM.rows),this.$store.commit("authenticationStore/setNewRows",e.tableVM.rows),this.$store.commit("authenticationStore/setActiveRoute","lessonnotes")}},q=V,C=n("2877"),O=n("3980"),F=n("8562"),$=n("4983"),U=n("0d59"),M=n("24e8"),T=n("eebe"),A=n.n(T),E=Object(C["a"])(q,s,o,!1,null,null,null);t["default"]=E.exports;A()(E,"components",{QResizeObserver:O["a"],QSplitter:F["a"],QScrollArea:$["a"],QSpinner:U["a"],QDialog:M["a"]})}}]);