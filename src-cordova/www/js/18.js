(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"248f":function(e,t,r){},4637:function(e,t,r){"use strict";var n=r("248f"),i=r.n(n);i.a},6983:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.showSpinner?e._e():r("ComfirmUsers",{attrs:{formData:e.form,unConfirmedCardList:e.unConfirmedCardList,confirmedCardList:e.confirmedCardList,pages:e.pages,pagesConfirmed:e.pagesConfirmed},on:{confirmUser:function(t){return e.confirmUser(t)},blockUser:function(t){return e.blockUser(t)},paginationAction:function(t){return e.paginationAction(t)},paginationActionConfirmed:function(t){return e.paginationActionConfirmed(t)},nextAction:function(t){return e.nextAction(t)},backAction:function(t){return e.backAction(t)},nextActionConfirmed:function(t){return e.nextActionConfirmed(t)},backActionConfirmed:function(t){return e.backActionConfirmed(t)},filterUnConfirmedUsers:function(t){return e.filterUnConfirmedUsers(t)},filterConfirmedUsers:function(t){return e.filterConfirmedUsers(t)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[r("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[r("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return r("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(r){e.$set(t,"isVisible",r)},expression:"dialog.isVisible"}},[r("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},i=[],a=(r("d38f"),r("b7dd"),r("1a43"),r("0012"),r("6212"),r("950c"),r("2bf3"),r("5b54"),r("ef92"),r("ad58"),r("d93a"),r("9289")),s=r.n(a),o=r("7efb"),c=r.n(o),l=r("549c"),f=r.n(l),u=(r("f69e"),r("c889"),r("52b5")),m=r.n(u),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("q-tabs",{staticClass:"text-accent",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:e.formData.tab,callback:function(t){e.$set(e.formData,"tab",t)},expression:"formData.tab"}},[r("q-tab",{staticClass:"bg-accent text-primary",attrs:{name:"unconfirmed",label:"Unconfirmed"}}),r("q-tab",{staticClass:"bg-accent text-primary",attrs:{name:"confirmed",label:"Confirmed"}})],1),r("q-separator"),r("q-tab-panels",{attrs:{animated:""},model:{value:e.formData.tab,callback:function(t){e.$set(e.formData,"tab",t)},expression:"formData.tab"}},[r("q-tab-panel",{attrs:{name:"unconfirmed"}},[r("span",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 pagination"},[r("a",{attrs:{href:"#"},on:{click:e.backAction}},[e._v("«")]),e._l(e.pages,(function(t){return r("div",{key:t.sn},[t.isActive?r("a",{staticClass:"bg-accent text-primary",attrs:{href:"#"},on:{click:function(r){return e.paginationAction(t)}}},[e._v(e._s(t.sn)+"\n                    ")]):r("a",{attrs:{href:"#"},on:{click:function(r){return e.paginationAction(t)}}},[e._v(e._s(t.sn)+"\n                    ")])])})),r("a",{attrs:{href:"#"},on:{click:e.nextAction}},[e._v("»")])],2)]),r("q-input",{staticClass:"q-ma-none bg-primary text-accent",attrs:{outlined:"",bordered:"",type:"text"},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"bg-primary text-accent",attrs:{name:"search"},on:{click:e.filterUnConfirmedUsers}})]},proxy:!0}]),model:{value:e.formData.filterUnConfirmedUser,callback:function(t){e.$set(e.formData,"filterUnConfirmedUser",t)},expression:"formData.filterUnConfirmedUser"}}),r("q-list",{attrs:{bordered:""}},e._l(e.unConfirmedCardList,(function(t){return r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.sn,staticClass:"q-pa-sm",attrs:{clickable:""}},[r("q-item-section",[r("div",{staticClass:"row"},[r("div",{staticClass:"col1 q-pa-sm"},[r("img",{attrs:{src:t.image}})]),r("div",{staticClass:"col2 q-sa-sm"},[r("span",[r("p",[e._v(e._s(t.title)+" ("+e._s(t.description)+")")]),r("span",[r("p",{staticClass:"q-ma-none"},[e._v(e._s(t.qSelect.label))]),r("q-select",{staticClass:"q-ma-none",attrs:{color:"accent",outlined:"","label-color":"accent","option-disable":"inactive",options:t.qSelect.list,"option-value":"id","option-label":"type",name:"type","emit-value":"","map-options":""},model:{value:t.qSelect.value,callback:function(r){e.$set(t.qSelect,"value",r)},expression:"card.qSelect.value"}})],1),r("div",e._l(t.qBtns,(function(n){return r("q-btn",{key:n.label,staticClass:"q-ma-sm bg-accent text-primary",attrs:{label:n.label,disabled:n.btnDisabled,type:"button",size:"md","no-caps":""},on:{click:function(r){return e.BtnClickAction(n.name,t)}}})})),1)])])])])],1)})),1)],1)]),r("q-tab-panel",{attrs:{name:"confirmed"}},[r("span",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 pagination"},[r("a",{attrs:{href:"#"},on:{click:e.backActionConfirmed}},[e._v("«\n                ")]),e._l(e.pagesConfirmed,(function(t){return r("div",{key:t.sn},[t.isActive?r("a",{staticClass:"bg-accent text-primary",attrs:{href:"#"},on:{click:function(r){return e.paginationActionConfirmed(t)}}},[e._v(e._s(t.sn)+"\n                    ")]):r("a",{attrs:{href:"#"},on:{click:function(r){return e.paginationActionConfirmed(t)}}},[e._v(e._s(t.sn)+"\n                    ")])])})),r("a",{attrs:{href:"#"},on:{click:e.nextActionConfirmed}},[e._v("»\n                ")])],2)]),r("q-input",{staticClass:"q-ma-none bg-primary text-accent",attrs:{outlined:"",bordered:"",type:"text"},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"bg-primary text-accent",attrs:{name:"search"},on:{click:e.filterConfirmedUsers}})]},proxy:!0}]),model:{value:e.formData.filterConfirmedUser,callback:function(t){e.$set(e.formData,"filterConfirmedUser",t)},expression:"formData.filterConfirmedUser"}}),r("q-list",{attrs:{bordered:""}},e._l(e.confirmedCardList,(function(t){return r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.sn,staticClass:"q-pa-sm",attrs:{clickable:""}},[r("q-item-section",[r("div",{staticClass:"row"},[r("div",{staticClass:"col1 q-pa-sm"},[r("img",{attrs:{src:t.image}})]),r("div",{staticClass:"col2 q-sa-sm"},[r("span",[r("p",[e._v(e._s(t.title)+" ("+e._s(t.description)+")")]),r("span",[r("p",{staticClass:"q-ma-none"},[e._v(e._s(t.qSelect.label))]),r("q-select",{staticClass:"q-ma-none",attrs:{color:"accent",outlined:"","label-color":"accent","option-disable":"inactive",options:t.qSelect.list,"option-value":"id","option-label":"type",name:"type","emit-value":"","map-options":""},model:{value:t.qSelect.value,callback:function(r){e.$set(t.qSelect,"value",r)},expression:"card.qSelect.value"}})],1),r("div",e._l(t.qBtns,(function(n){return r("q-btn",{key:n.label,staticClass:"q-ma-sm bg-accent text-primary",attrs:{label:n.label,disabled:n.btnDisabled,type:"button",size:"md","no-caps":""},on:{click:function(r){return e.BtnClickAction(n.name,t)}}})})),1)])])])])],1)})),1)],1)])],1)],1)},p=[],b={props:{confirmedCardList:{type:Array,default:[]},unConfirmedCardList:{type:Array,default:[]},pages:{type:Array,default:[]},pagesConfirmed:{type:Array,default:[]},formData:{type:Object,default:{tab:"unconfirmed",filterConfirmedUser:"",filterUnConfirmedUser:"",activeLinkStyle:{backgroundColor:"yellow"}}}},methods:{BtnClickAction:function(e,t){this.$emit(e,t)},getIsUserPhoto:function(e){return""!=e.image&&void 0!=e.image},paginationAction:function(e){var t=this;this.$emit("paginationAction",{page:e,filter:t.formData.filterUnConfirmedUser})},paginationActionConfirmed:function(e){var t=this;this.$emit("paginationActionConfirmed",{page:e,filter:t.formData.filterConfirmedUser})},backAction:function(){var e=this;this.$emit("backAction",{filter:e.formData.filterUnConfirmedUser})},nextAction:function(){var e=this;this.$emit("nextAction",{filter:e.formData.filterUnConfirmedUser})},nextActionConfirmed:function(){var e=this;this.$emit("nextActionConfirmed",{filter:e.formData.filterConfirmedUser})},backActionConfirmed:function(){this.$emit("backActionConfirmed",{filter:context.formData.filterConfirmedUser})},filterUnConfirmedUsers:function(){var e=this;this.$emit("filterUnConfirmedUsers",e.formData.filterUnConfirmedUser)},filterConfirmedUsers:function(){var e=this;this.$emit("filterConfirmedUsers",e.formData.filterConfirmedUser)}}},g=b,v=(r("4637"),r("a6c2")),C=r("6471"),h=r("9ad2"),k=r("3f5f"),U=r("eb48"),x=r("9efb"),y=r("a3be"),S=r("19dc"),w=r("692f"),A=r("e0e9"),q=r("6c44"),D=r("f636"),$=r("ef9c"),_=r("a561"),O=r("63c1"),I=r.n(O),P=Object(v["a"])(g,d,p,!1,null,null,null),j=P.exports;I()(P,"components",{QTabs:C["a"],QTab:h["a"],QSeparator:k["a"],QTabPanels:U["a"],QTabPanel:x["a"],QInput:y["a"],QIcon:S["a"],QList:w["a"],QItem:A["a"],QItemSection:q["a"],QSelect:D["a"],QBtn:$["a"]}),I()(P,"directives",{Ripple:_["a"]});var B=r("0588"),E=r("5dc2"),N=r("940b"),M={tab:"unconfirmed",filterConfirmedUser:"",filterUnConfirmedUser:""};function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Q(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=T(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,o=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw a}}}}function T(e,t){if(e){if("string"===typeof e)return z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(e,t):void 0}}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var R={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]},isMobile:function(){var e=window.innerWidth;return e<700}},components:{ComfirmUsers:j,MessageBox:B["a"]},data:function(){return{unConfirmedCardList:[],confirmedCardList:[],dialogs:[{title:"Confirm User",isVisible:!1,message:"Do you want to confirm a user",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Confirm User Success",isVisible:!1,message:"User confirmed successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Confirm User Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Block User",isVisible:!1,message:"Do you want to block a user",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Block User Success",isVisible:!1,message:"User blocked successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Block User Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}],pages:[],page:1,pagesConfirmed:[],pageConfirmed:1,mobileAppStepper:7,webAppStepper:25,totalNumberOfUsers:0,totalNumberOfConfirmedUsers:0,limit:0,confirmedUsers:[],unConfirmedUsers:[],paginatedUsers:[],selectedUser:{},form:M}},methods:{filterUnConfirmedUsers:function(e){var t=this;return f()(m.a.mark((function r(){var n;return m.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t,""===e&&(e="@"),r.next=4,n._loadPaginatedUsers(1,e);case 4:case"end":return r.stop()}}),r)})))()},filterConfirmedUsers:function(e){var t=this;return f()(m.a.mark((function r(){var n;return m.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t,""===e&&(e="@"),r.next=4,n._loadPaginatedConfirmedUsers(1,e);case 4:case"end":return r.stop()}}),r)})))()},confirmUser:function(e){var t=this;t.selectedUser=e;var r,n=-1,i=Q(t.dialogs);try{for(i.s();!(r=i.n()).done;){var a=r.value;if(n++,"Confirm User"==a.title){t.dialogs[n].isVisible=!0;break}}}catch(s){i.e(s)}finally{i.f()}},confirmUserAsync:function(){var e=this;return f()(m.a.mark((function t(){var r,n,i,a,s,o,c,l;return m.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e,n=e.$store.getters["authenticationStore/IdentityModel"],i="user/confirmuser/".concat(r.selectedUser.id),a={url:i,req:{designationId:r.selectedUser.qSelect.value,confirmedBy:n.id}},console.log("payload: ",a),e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=8,Object(E["c"])(a);case 8:s=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),o=s.data,c=o.message,l=o.success,l?r.dialogs[1].isVisible=!0:(r.dialogs[2].message=c,r.dialogs[2].isVisible=!0);case 12:case"end":return t.stop()}}),t)})))()},blockUser:function(e){var t=this;t.selectedUser=e;var r,n=-1,i=Q(t.dialogs);try{for(i.s();!(r=i.n()).done;){var a=r.value;if(n++,"Block User"==a.title){t.dialogs[n].isVisible=!0;break}}}catch(s){i.e(s)}finally{i.f()}},blockUserAsync:function(){var e=this;return f()(m.a.mark((function t(){var r,n,i,a,s,o,c,l;return m.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e,n=e.$store.getters["authenticationStore/IdentityModel"],i="user/blockuser/".concat(r.selectedUser.id),a={url:i,req:{designationId:r.selectedUser.qSelect.value,blockedBy:n.id}},console.log("payload: ",a),e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=8,Object(E["c"])(a);case 8:s=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),o=s.data,c=o.message,l=o.success,l?r.dialogs[1].isVisible=!0:(r.dialogs[2].message=c,r.dialogs[2].isVisible=!0);case 12:case"end":return t.stop()}}),t)})))()},cancelDialog:function(e){var t,r=this,n=-1,i=Q(r.dialogs);try{for(i.s();!(t=i.n()).done;){var a=t.value;if(n++,a.title===e){r.dialogs[n].isVisible=!1;break}}}catch(s){i.e(s)}finally{i.f()}},okDialog:function(e){var t=this;return f()(m.a.mark((function r(){var n,i,a,s,o,c,l;return m.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:console.log("payload: ",e),n=t,i=t.$store.getters["authenticationStore/IdentityModel"],a=-1,s=[],o=Q(n.dialogs),r.prev=6,o.s();case 8:if((c=o.n()).done){r.next=45;break}if(l=c.value,a++,l.title!==e){r.next=43;break}r.t0=e,r.next="Confirm User"===r.t0?15:"Block User"===r.t0?18:"Confirm User Success"===r.t0?21:"Block User Success"===r.t0?30:39;break;case 15:return r.next=17,n.confirmUserAsync();case 17:return r.abrupt("break",39);case 18:return r.next=20,n.blockUserAsync();case 20:return r.abrupt("break",39);case 21:return r.next=23,n._loadPaginatedUsers(n.page,n.form.filterUnConfirmedUser);case 23:return r.next=25,n._loadPaginatedConfirmedUsers(n.pageConfirmed,n.form.filterConfirmedUser);case 25:return r.next=27,Object(N["d"])(i.schoolId,"@");case 27:return s=r.sent,t.$store.commit("userStore/setUnComfirmedUsers",s.result),r.abrupt("break",39);case 30:return r.next=32,n._loadPaginatedUsers(n.page,n.form.filterUnConfirmedUser);case 32:return r.next=34,n._loadPaginatedConfirmedUsers(n.pageConfirmed,n.form.filterConfirmedUser);case 34:return r.next=36,Object(N["d"])(i.schoolId,"@");case 36:return s=r.sent,t.$store.commit("userStore/setUnComfirmedUsers",s.result),r.abrupt("break",39);case 39:return n.dialogs[a].isVisible=!1,""===e.filter&&(e.filter="@"),n.form.filterUnConfirmedUser=e.filter,r.abrupt("break",45);case 43:r.next=8;break;case 45:r.next=50;break;case 47:r.prev=47,r.t1=r["catch"](6),o.e(r.t1);case 50:return r.prev=50,o.f(),r.finish(50);case 53:case"end":return r.stop()}}),r,null,[[6,47,50,53]])})))()},nextAction:function(e){var t=this;return f()(m.a.mark((function r(){var n,i,a,s,o;return m.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=t,i=n.pages[0].sn,a=n.pages[0].sn,s=0,n.pages=[],o=a*n.limit;case 6:if(!(o<n.totalNumberOfUsers)){r.next=20;break}if(i++,s++,!n.isMobile){r.next=14;break}if(!(s>n.mobileAppStepper)){r.next=12;break}return r.abrupt("break",20);case 12:r.next=16;break;case 14:if(!(s>n.webAppStepper)){r.next=16;break}return r.abrupt("break",20);case 16:n.pages.push({sn:i,isActive:!1});case 17:o+=n.limit,r.next=6;break;case 20:return n.pages[0].isActive=!0,""===e.filter&&(e.filter="@"),n.form.filterUnConfirmedUser=e.filter,r.next=25,n._loadUpdatedPaginatedUsers(n.pages[0],e.filter);case 25:case"end":return r.stop()}}),r)})))()},nextActionConfirmed:function(e){var t=this;return f()(m.a.mark((function r(){var n,i,a,s,o;return m.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=t,i=n.pagesConfirmed[0].sn,a=n.pagesConfirmed[0].sn,s=0,n.pagesConfirmed=[],o=a*n.limit;case 6:if(!(o<n.totalNumberOfConfirmedUsers)){r.next=20;break}if(i++,s++,!n.isMobile){r.next=14;break}if(!(s>n.mobileAppStepper)){r.next=12;break}return r.abrupt("break",20);case 12:r.next=16;break;case 14:if(!(s>n.webAppStepper)){r.next=16;break}return r.abrupt("break",20);case 16:n.pagesConfirmed.push({sn:i,isActive:!1});case 17:o+=n.limit,r.next=6;break;case 20:return n.pagesConfirmed[0].isActive=!0,""===e.filter&&(e.filter="@"),n.form.filterConfirmedUser=e.filter,r.next=25,n._loadUpdatedPaginatedConfirmedUsers(n.pagesConfirmed[0],e.filter);case 25:case"end":return r.stop()}}),r)})))()},backAction:function(e){var t=this;return f()(m.a.mark((function r(){var n,i,a,s,o,c,l;return m.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=t,i=n.pages[0].sn-2,i<1&&(i=0),a=0,s=n.pages.length,o=n.pages[s-1].sn,c=n.pages[0].sn-1,n.pages=[],l=c*n.limit;case 9:if(!(l<o*n.limit)){r.next=23;break}if(i++,a++,!n.isMobile){r.next=17;break}if(!(a>n.mobileAppStepper)){r.next=15;break}return r.abrupt("break",23);case 15:r.next=19;break;case 17:if(!(a>n.webAppStepper)){r.next=19;break}return r.abrupt("break",23);case 19:n.pages.push({sn:i,isActive:!1});case 20:l+=n.limit,r.next=9;break;case 23:return n.pages[0].isActive=!0,""===e.filter&&(e.filter="@"),n.form.filterUnConfirmedUser=e.filter,r.next=28,n._loadUpdatedPaginatedUsers(n.pages[0],e.filter);case 28:case"end":return r.stop()}}),r)})))()},backActionConfirmed:function(e){var t=this;return f()(m.a.mark((function r(){var n,i,a,s,o,c,l;return m.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=t,i=n.pagesConfirmed[0].sn-2,i<1&&(i=0),a=0,s=n.pagesConfirmed.length,o=n.pagesConfirmed[s-1].sn,c=n.pagesConfirmed[0].sn-1,n.pagesConfirmed=[],l=c*n.limit;case 9:if(!(l<o*n.limit)){r.next=23;break}if(i++,a++,!n.isMobile){r.next=17;break}if(!(a>n.mobileAppStepper)){r.next=15;break}return r.abrupt("break",23);case 15:r.next=19;break;case 17:if(!(a>n.webAppStepper)){r.next=19;break}return r.abrupt("break",23);case 19:n.pagesConfirmed.push({sn:i,isActive:!1});case 20:l+=n.limit,r.next=9;break;case 23:return n.pagesConfirmed[0].isActive=!0,""===e.filter&&(e.filter="@"),n.form.filterConfirmedUser=e.filter,r.next=28,n._loadUpdatedPaginatedConfirmedUsers(n.pagesConfirmed[0],e.filter);case 28:case"end":return r.stop()}}),r)})))()},paginationAction:function(e){var t=this;return f()(m.a.mark((function r(){var n,i;return m.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t,n.page=e.page.sn,i=e.filter,r.next=5,n._loadPaginatedUsers(n.page,i);case 5:case"end":return r.stop()}}),r)})))()},paginationActionConfirmed:function(e){var t=this;return f()(m.a.mark((function r(){var n,i;return m.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t,n.pageConfirmed=e.page.sn,i=e.filter,r.next=5,n._loadPaginatedConfirmedUsers(n.pageConfirmed,i);case 5:case"end":return r.stop()}}),r)})))()},_loadUpdatedPaginatedUsers:function(e,t){var r=this;return f()(m.a.mark((function n(){var i,a,s,o,l,f;return m.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=r,a=r.$store.getters["authenticationStore/IdentityModel"],r.$store.commit("authenticationStore/setShowSpinner",!0),i.page=e.sn,""!==t&&void 0!==t||(t="@"),n.next=7,Object(N["d"])(a.schoolId,t);case 7:return s=n.sent,r.$store.commit("userStore/setUnComfirmedUsers",s.result),n.next=11,Object(N["b"])(a.schoolId,i.page,t);case 11:o=n.sent,l=o.result,o.message,f=l.paginatedUsers,r.$store.commit("authenticationStore/setShowSpinner",!1),i.unConfirmedUsers=c()(f),i.unConfirmedCardList=i.unConfirmedUsers.map((function(e,t){return L(L({sn:t+1,title:"".concat(e.firstName," ").concat(e.lastName),description:e.userType,image:e.fileUrl},e),{},{qBtns:[{label:"Confirm",btnDisabled:!1,name:"confirmUser"}],qSelect:{label:"Designation *",value:e.designationId,type:"text",list:r.$store.getters["staffStore/staffs"].map((function(e){return L(L({},e),{},{type:e.type})})),actionName:"designationAction",visible:!0}})}));case 18:case"end":return n.stop()}}),n)})))()},_loadUpdatedPaginatedConfirmedUsers:function(e,t){var r=this;return f()(m.a.mark((function n(){var i,a,s,o,l,f;return m.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=r,a=r.$store.getters["authenticationStore/IdentityModel"],r.$store.commit("authenticationStore/setShowSpinner",!0),i.page=e.sn,""!==t&&void 0!==t||(t="@"),n.next=7,Object(N["d"])(a.schoolId,t);case 7:return s=n.sent,r.$store.commit("userStore/setUnComfirmedUsers",s.result),n.next=11,Object(N["b"])(a.schoolId,i.page,t);case 11:o=n.sent,l=o.result,o.message,f=l.paginatedUsers,r.$store.commit("authenticationStore/setShowSpinner",!1),i.confirmedUsers=c()(f),i.unConfirmedCardList=i.confirmedUsers.map((function(e,t){return L(L({sn:t+1,title:"".concat(e.firstName," ").concat(e.lastName),description:e.userType,image:e.fileUrl},e),{},{qBtns:[{label:"Block",btnDisabled:!1,name:"blockUser"}],qSelect:{label:"Designation *",value:e.designationId,type:"text",list:r.$store.getters["staffStore/staffs"].map((function(e){return L(L({},e),{},{type:e.type})})),actionName:"designationAction",visible:!0}})}));case 18:case"end":return n.stop()}}),n)})))()},_loadPaginatedUsers:function(e,t){var r=this;return f()(m.a.mark((function n(){var i,a,s,o,l,f,u,d,p,b;return m.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=r,""!==t&&void 0!==t||(t="@"),a=r.$store.getters["authenticationStore/IdentityModel"],r.$store.commit("authenticationStore/setShowSpinner",!0),n.next=6,Object(N["b"])(a.schoolId,e,t);case 6:s=n.sent,o=s.result,s.message,l=o.paginatedUsers,f=o.totalNumberOfUsers,u=o.limit,r.$store.commit("authenticationStore/setShowSpinner",!1),d=0,i.pages=[],i.totalNumberOfUsers=f,i.limit=u,p=!1,b=0;case 17:if(!(b<f)){n.next=31;break}if(d++,!i.isMobile){n.next=24;break}if(!(d>i.mobileAppStepper)){n.next=22;break}return n.abrupt("break",31);case 22:n.next=26;break;case 24:if(!(d>i.webAppStepper)){n.next=26;break}return n.abrupt("break",31);case 26:p=d===e,i.pages.push({sn:d,isActive:p});case 28:b+=u,n.next=17;break;case 31:i.unConfirmedUsers=c()(l),i.unConfirmedCardList=i.unConfirmedUsers.map((function(e,t){return L(L({sn:t+1,title:"".concat(e.firstName," ").concat(e.lastName),description:e.userType,image:e.fileUrl},e),{},{qBtns:[{label:"Confirm",btnDisabled:!1,name:"confirmUser"}],qSelect:{label:"Designation *",value:e.designationId,type:"text",list:r.$store.getters["staffStore/staffs"].map((function(e){return L(L({},e),{},{type:e.type})})),actionName:"designationAction",visible:!0}})}));case 33:case"end":return n.stop()}}),n)})))()},_loadPaginatedConfirmedUsers:function(e,t){var r=this;return f()(m.a.mark((function n(){var i,a,s,o,l,f,u,d,p,b;return m.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=r,a=r.$store.getters["authenticationStore/IdentityModel"],r.$store.commit("authenticationStore/setShowSpinner",!0),""!==t&&void 0!==t||(t="@"),n.next=6,Object(N["a"])(a.schoolId,e,t);case 6:s=n.sent,o=s.result,s.message,l=o.paginatedUsers,f=o.totalNumberOfUsers,u=o.limit,r.$store.commit("authenticationStore/setShowSpinner",!1),d=0,i.pagesConfirmed=[],i.totalNumberOfConfirmedUsers=f,i.limit=u,p=!1,b=0;case 17:if(!(b<f)){n.next=31;break}if(d++,!i.isMobile){n.next=24;break}if(!(d>i.mobileAppStepper)){n.next=22;break}return n.abrupt("break",31);case 22:n.next=26;break;case 24:if(!(d>i.webAppStepper)){n.next=26;break}return n.abrupt("break",31);case 26:p=e===d,i.pagesConfirmed.push({sn:d,isActive:p});case 28:b+=u,n.next=17;break;case 31:i.confirmedUsers=c()(l),i.confirmedCardList=i.confirmedUsers.map((function(e,t){return L(L({sn:t+1,title:"".concat(e.firstName," ").concat(e.lastName),description:e.userType,image:e.fileUrl},e),{},{qBtns:[{label:"Block",btnDisabled:!1,name:"blockUser"}],qSelect:{label:"Designation *",value:e.designationId,type:"text",list:r.$store.getters["staffStore/staffs"].map((function(e){return L(L({},e),{},{type:e.type})})),actionName:"designationAction",visible:!0}})}));case 33:case"end":return n.stop()}}),n)})))()},setBackRoute:function(){var e=this.$store.getters["authenticationStore/IdentityModel"],t="";t="CEO"===e.schoolId?"/super-admin":"/admin",this.$store.commit("authenticationStore/setBackRoute",t)}},created:function(){var e=this;return f()(m.a.mark((function t(){var r,n,i;return m.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e,n=e.$store.getters["authenticationStore/IdentityModel"],r.form.filterUnConfirmedUser="@",r.form.filterConfirmedUser="@",t.next=6,r._loadPaginatedUsers(1,r.form.filterUnConfirmedUser);case 6:return t.next=8,r._loadPaginatedConfirmedUsers(1,r.form.filterConfirmedUser);case 8:return t.next=10,Object(N["d"])(n.schoolId,"@");case 10:i=t.sent,console.log("unConfirmedUsers.result: ",i.result),e.$store.commit("userStore/setUnComfirmedUsers",i.result),e.$store.commit("authenticationStore/setActiveRoute","unconfirmed-users"),e.$store.commit("authenticationStore/setIsError",!1),e.$store.commit("authenticationStore/setErrorMessages",""),r.setBackRoute(),e.$store.commit("authenticationStore/setPageTitle","Users");case 18:case"end":return t.stop()}}),t)})))()}},F=R,J=r("c99e"),W=r("ec6d"),G=Object(v["a"])(F,n,i,!1,null,null,null);t["default"]=G.exports;I()(G,"components",{QSpinner:J["a"],QDialog:W["a"]})}}]);