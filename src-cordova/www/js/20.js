(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"933b":function(e,t,a){"use strict";var i=a("e91f"),s=a.n(i);s.a},a647:function(e,t,a){},d451:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._l(e.cardList,(function(t){return a("div",{key:t.id},[e.showSpinner?e._e():a("Story",{staticClass:"bg-primary q-pa-sm",attrs:{story:t}})],1)})),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[a("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[a("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return a("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(a){e.$set(t,"isVisible",a)},expression:"dialog.isVisible"}},[a("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},s=[],n=(a("d38f"),a("b7dd"),a("1a43"),a("0012"),a("6212"),a("950c"),a("2bf3"),a("5b54"),a("ef92"),a("f69e"),a("ad58"),a("d93a"),a("9289")),r=a.n(n),o=a("549c"),l=a.n(o),c=(a("c889"),a("52b5")),d=a.n(c),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md"},[a("q-card",[a("StoryHeader",{attrs:{fileUrl:e.story.friendImage,title:e.story.friendFullName,description:e.story.createdDate}}),a("Gallery",{attrs:{pages:e.story.galleries}}),a("Message",{attrs:{content:e.story.content}})],1)],1)},p=[],g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-toolbar",{staticClass:"bg-primary text-accent"},[a("div",{staticClass:"q-pa-sm text-caption text-left"},[a("q-btn",{staticClass:"text-capitalize",attrs:{flat:"",size:e.size}},[a("span",[a("q-avatar",{attrs:{round:"",size:"70px"}},[a("img",{attrs:{src:e.fileUrl}})])],1),a("span",[a("p",{staticClass:"q-pa-none q-ma-none"},[e._v(e._s(e.title))]),a("p",{staticClass:"text-caption"},[e._v(e._s(e.description))])])])],1),a("q-space")],1)],1)},m=[],f={props:{fileUrl:{type:String,default:"/statics/images/TorpaLogo.png"},title:{type:String,default:"Gabriel Achumba"},description:{type:String,default:"January 5, 2022"}},data:function(){return{dense:!1,size:"md"}}},h=f,b=(a("933b"),a("a6c2")),v=a("66cf"),y=a("ef9c"),I=a("d6e3"),w=a("dc01"),x=a("63c1"),S=a.n(x),k=Object(b["a"])(h,g,m,!1,null,"170812c4",null),V=k.exports;S()(k,"components",{QToolbar:v["a"],QBtn:y["a"],QAvatar:I["a"],QSpace:w["a"]});var A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("q-btn",{staticClass:"col",attrs:{flat:"",icon:"navigate_before"},on:{click:e.backAction}}),e._l(e.paginatedPages,(function(t){return a("div",{key:t.sn,staticClass:"col-xl-3 col-lg-3 col-md-3 col-xs-10 col-sm-10 text-center q-pa-sm"},[a("q-card",{staticClass:"my-card"},[t.isImage?a("img",{staticClass:"my-img",attrs:{src:t.fileUrl,height:"100%",width:"100%"}}):e._e(),a("video",{directives:[{name:"show",rawName:"v-show",value:t.isVideo,expression:"paginatedPage.isVideo"}],staticClass:"q-pa-sm video",attrs:{src:t.fileUrl,controls:"",autoplay:"",controlsList:"nodownload",oncontextmenu:"return false;"}}),t.isAudio?a("div",{staticClass:"q-pa-sm video flex flex-center"},[a("video",{directives:[{name:"show",rawName:"v-show",value:t.isAudio,expression:"paginatedPage.isAudio"}],attrs:{src:t.fileUrl,controls:"",autoplay:"",controlsList:"nodownload",oncontextmenu:"return false;"}})]):e._e()])],1)})),a("q-btn",{staticClass:"col",attrs:{flat:"",icon:"navigate_next"},on:{click:e.nextAction}})],2)},j=[],D={computed:{setIsResponsive:function(){var e=window.innerWidth;return e<900}},props:{pages:{type:Array,default:function(){return[{sn:0,fileUrl:"/statics/images/mobile/auth.jpeg",isImage:!1,isVideo:!1,isAudio:!1},{sn:1,fileUrl:"/statics/images/mobile/Ads landing.jpeg",isImage:!1,isVideo:!1,isAudio:!1},{sn:2,fileUrl:"/statics/images/mobile/CBT.jpeg",isImage:!1,isVideo:!1,isAudio:!1},{sn:3,fileUrl:"/statics/images/mobile/torpa admin landing 1.jpeg",isImage:!1,isVideo:!1,isAudio:!1},{sn:4,fileUrl:"/statics/images/mobile/torpa admin landing 2.jpeg",isImage:!1,isVideo:!1,isAudio:!1},{sn:5,fileUrl:"/statics/images/mobile/student report card.jpeg",isImage:!1,isVideo:!1,isAudio:!1},{sn:6,fileUrl:"/statics/images/mobile/student report plot.jpeg",isImage:!1,isVideo:!1,isAudio:!1},{sn:7,fileUrl:"/statics/images/mobile/students positions.jpeg",isImage:!1,isVideo:!1,isAudio:!1},{sn:8,fileUrl:"/statics/images/mobile/subjects.jpeg",isImage:!1,isVideo:!1,isAudio:!1},{sn:9,fileUrl:"/statics/images/mobile/lesson note 2.jpeg",isImage:!1,isVideo:!1,isAudio:!1}]}}},data:function(){return{startIndex:-1,endIndex:-1,paginatedPages:[{}],pagesPerView:3}},methods:{nextAction:function(){var e=this;e.startIndex++,e.startIndex>=e.pages.length&&(e.startIndex=e.pages.length-1),e.paginatedPages=[];var t=0;e.pagesPerView=!0===e.setIsResponsive?1:3;for(var a=e.startIndex;a<e.pages.length;a++){if(t++,t>e.pagesPerView)break;e.paginatedPages.push(e.pages[a])}},backAction:function(){var e=this,t=e.paginatedPages.length;e.pagesPerView=!0===e.setIsResponsive?1:3,e.endIndex=e.paginatedPages[t-1].sn,e.endIndex--,e.startIndex=e.endIndex-3,e.startIndex<0&&(e.startIndex=0),e.endIndex<0&&(e.endIndex=0),e.paginatedPages=[];for(var a=0,i=e.startIndex;i<=e.endIndex;i++){if(a++,a>e.pagesPerView)break;e.paginatedPages.push(e.pages[i])}}},created:function(){var e=this;e.nextAction()}},O=D,U=(a("d958"),a("5ce7")),M=Object(b["a"])(O,A,j,!1,null,null,null),C=M.exports;S()(M,"components",{QBtn:y["a"],QCard:U["a"]});var P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-sm"},[a("TitleDescription",{attrs:{title:e.title,description:e.content}})],1)},E=[],F=a("e5d2"),N={components:{TitleDescription:F["a"]},props:{title:{type:String,default:""},content:{type:String,default:""}}},q=N,_=Object(b["a"])(q,P,E,!1,null,null,null),$=_.exports,L={components:{StoryHeader:V,Gallery:C,Message:$},props:{story:{type:Object,default:function(){return{friendImage:"",friendFullName:"",createdDate:"",galleries:function(){return[]}}}}}},z=L,Q=Object(b["a"])(z,u,p,!1,null,null,null),T=Q.exports;S()(Q,"components",{QCard:U["a"]});var R=a("0588"),B=a("0601");function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function H(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=J(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var i=0,s=function(){};return{s:s,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r=!0,o=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return r=e.done,e},e:function(e){o=!0,n=e},f:function(){try{r||null==a.return||a.return()}finally{if(o)throw n}}}}function J(e,t){if(e){if("string"===typeof e)return K(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?K(e,t):void 0}}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}var W={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{Story:T,MessageBox:R["a"]},data:function(){return{cardList:[],tableVM:{selectedFileModel:{},title:"Stories",columns:[{name:"actions",label:"Actions",field:"",align:"left",type:""},{name:"message",label:"Message",field:"",align:"left",type:"text"}],rows:[],separator:"cell",createItem:"createStory",updateItem:"updateItem",deleteItem:"deleteStory",createItemUrl:"/create-story",updateItemUrl:"/update-story"},dialogs:[{title:"Delete Story",isVisible:!1,message:"Do you want to delete a story",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Story deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}],stories:[{friendImage:"/statics/images/levels.jpg",friendFullName:"John Williams",fromId:"",toId:"",groupName:"Story",message:"Who do you think will emerge the president of Nigeria in the forthcoming 2023 election",meetingId:"",files:[{fileUrl:"https://storage.googleapis.com/lemongatetech.appspot.com/1672176209010No%205%20Create_Staff.mp4?GoogleAccessId=firebase-adminsdk-3ko44%40lemongatetech.iam.gserviceaccount.com&Expires=1754953200&Signature=Q8ld2jIrLYdOwx%2FNPqvs0nXKHnNR1fpxkFMDoDqNd552xFbEJGhsesCGR33uTtza9zAiOvIyrPLSlbQioFG1ps%2FzXVMTPnkjajOZ1hHAwYda%2FeHiQC8hh62JUZd6mwPf8o8HGXO3PCcJKmMpppxu4jS8KUXdevwxDFzYPziCG9SnmN%2FhspjHGEsRvtWnUQIKLxgkecLRCYU0XUXRbqpH5LK4eEnLmMzNDgNOUihtGMDbOIrD7MBAkXq4kWt6N396tQJXL7azfVr6VbsM4TkLQDEXR4iibkA8gJUYRhf5IH27%2BIAyOMZ6CEx%2FVqRtRCuOZHak4b9XsyiLBCXSuf4hSw%3D%3D",fileName:"",originalFileName:"",groupName:"Story",isImage:!1,isVideo:!0,isAudio:!1}],likes:[],shares:[],createdBy:"",schoolId:"",createdAt:Date.now()},{friendImage:"/statics/images/sessions.jpg",friendFullName:"Austin Ore",fromId:"",toId:"",groupName:"Story",message:"In my own statistics, Peter Obi will emerge as the president of Nigeria",meetingId:"",files:[{fileUrl:"/statics/images/parallax.jpg",fileName:"",originalFileName:"",groupName:"Story",isImage:!0,isVideo:!1,isAudio:!1},{fileUrl:"/statics/images/news.jpg",fileName:"",originalFileName:"",groupName:"Story",isImage:!0,isVideo:!1,isAudio:!1}],likes:[],shares:[],createdBy:"",schoolId:"",createdAt:Date.now()}]}},methods:{okayEvent:function(){var e=this;e.isFetchTableDialog=!1},cancelEvent:function(){var e=this;e.isFetchTableDialog=!1},createFileModel:function(){var e=this;console.log(e.tableVM.createItemUrl),this.$router.push(e.tableVM.createItemUrl)},updateItem:function(e){var t=this;this.$store.commit("FileModelStore/SetSelectedFileModel",e),this.$router.push(t.tableVM.updateItemUrl)},deleteFileModel:function(e){var t=this;t.selectedFileModel=e,console.log(t.selectedFileModel),t.dialogs[0].isVisible=!0},cancelDialog:function(e){var t,a=this,i=-1,s=H(a.dialogs);try{for(s.s();!(t=s.n()).done;){var n=t.value;if(i++,n.title===e){a.dialogs[i].isVisible=!1;break}}}catch(r){s.e(r)}finally{s.f()}},delete:function(){var e=this;return l()(d.a.mark((function t(){var a,i,s,n,r,o,l,c;return d.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,i=e.$store.getters["authenticationStore/IdentityModel"],s="filemanagement/".concat(a.selectedFileModel.id,"/").concat(i.schoolId),n={url:s},console.log("payload: ",n),t.next=7,Object(B["e"])(n);case 7:r=t.sent,o=r.data,l=o.message,c=o.success,c?a.dialogs[1].isVisible=!0:(a.dialogs[2].message=l,a.dialogs[2].isVisible=!0);case 10:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return l()(d.a.mark((function a(){var i,s,n,r,o;return d.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:console.log("payload: ",e),i=t,s=-1,n=H(i.dialogs),a.prev=4,n.s();case 6:if((r=n.n()).done){a.next=23;break}if(o=r.value,s++,o.title!==e){a.next=21;break}a.t0=e,a.next="Delete FileModel"===a.t0?13:"Success"===a.t0?16:19;break;case 13:return a.next=15,i.delete();case 15:return a.abrupt("break",19);case 16:return a.next=18,i._loadStories();case 18:return a.abrupt("break",19);case 19:return i.dialogs[s].isVisible=!1,a.abrupt("break",23);case 21:a.next=6;break;case 23:a.next=28;break;case 25:a.prev=25,a.t1=a["catch"](4),n.e(a.t1);case 28:return a.prev=28,n.f(),a.finish(28);case 31:case"end":return a.stop()}}),a,null,[[4,25,28,31]])})))()},_loadStories:function(){var e=this;return l()(d.a.mark((function t(){var a,i;return d.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e,e.$store.getters["authenticationStore/IdentityModel"],i=a.stories,a.tableVM.rows=i,console.log("result: ",i),a.cardList=i.map((function(e,t){var a=e.message;return X(X({id:t+1},e),{},{name:"showPage",createdDate:new Date(e.createdAt).toDateString(),qBtns:[{label:"View",name:"View"}],galleries:e.files.map((function(e,t){return X({sn:t},e)})),content:'<p style="text-align: left;">\n                                '.concat(a,"\n                            </p>")})})),console.log("context.cardList: ",a.cardList),e.$store.commit("resultStore/SetResults",i),e.$store.commit("componentsStore/setCardItems",a.cardList);case 9:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return l()(d.a.mark((function t(){var a,i;return d.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,i=e.$store.getters["authenticationStore/IdentityModel"],"CEO"===i.schoolId&&(a.tableVM.createItemUrl="/socialize-create-story",a.tableVM.updateItemUrl="/socialize-update-story"),t.next=5,a._loadStories();case 5:e.$store.commit("authenticationStore/setCreateURL",a.tableVM.createItemUrl),e.$store.commit("authenticationStore/setIsError",!1),e.$store.commit("authenticationStore/setErrorMessages",""),e.$store.commit("authenticationStore/setPageTitle","Stories");case 10:case"end":return t.stop()}}),t)})))()}},Y=W,Z=a("c99e"),ee=a("ec6d"),te=Object(b["a"])(Y,i,s,!1,null,null,null);t["default"]=te.exports;S()(te,"components",{QSpinner:Z["a"],QDialog:ee["a"]})},d958:function(e,t,a){"use strict";var i=a("a647"),s=a.n(i);s.a},e91f:function(e,t,a){}}]);