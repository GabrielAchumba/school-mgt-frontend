(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[110],{"8c94":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{staticClass:"bg-primary",attrs:{view:"hHh lpR fFf"}},[n("q-header",{staticClass:"q-pa-none bg-primary"},[n("MainMenuBar",{attrs:{menuList:e.contextMenuList},on:{logoutUser:function(t){return e.logoutUser(t)}}})],1),n("q-page-container",{staticStyle:{height:"100vh"}},[e.showSpinner?e._e():n("router-view"),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:"3em",thickness:10}})],1)])],1),n("q-dialog",{model:{value:e.globalSearchDialog,callback:function(t){e.globalSearchDialog=t},expression:"globalSearchDialog"}},[n("searchDialog")],1)],1)},i=[],o=(n("ef92"),n("0012"),n("f69e"),n("ad58"),n("d93a"),n("d38f"),n("b7dd"),n("1a43"),n("6212"),n("950c"),n("2bf3"),n("5b54"),n("9289")),s=n.n(o),a=n("549c"),c=n.n(a),u=n("52b5"),l=n.n(u),h=(n("c889"),n("932d")),d=n("c194"),f=n("8679"),m=n("ff2d"),p=n("56cc"),g=n("cd65"),b=n("cabb"),S=n("08f0"),y=n("1bb5"),v=n("ec61"),w=n("e852"),M=n("60b9"),x=n("0faa"),O=n("7f8e");function k(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=L(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}function L(e,t){if(e){if("string"===typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}h["a"].getBrand;var I=h["a"].setBrand,D={name:"AdminLayout",computed:{IdentityModel:function(){return this.$store.getters["authenticationStore/IdentityModel"]},Loginstatus:function(){return this.$store.getters["authenticationStore/Loginstatus"]},theme_color:function(){return this.$store.getters["authenticationStore/theme_color"]},globalSearchDialog:function(){return this.$store.getters["authenticationStore/globalSearchDialog"]},primaryColor:function(){return this.$store.getters["administratorStore/primaryColor"]},secondaryColor:function(){return this.$store.getters["administratorStore/secondaryColor"]},tertiaryColor:function(){return this.$store.getters["administratorStore/tertiaryColor"]}},components:{MainMenuBar:w["a"],searchDialog:M["a"]},data:function(){return{schoolName:"",leftDrawerOpen:!0,showAccountDetails:!1,rightMenuIcon:"menu",navs:[],rightDrawerOpen:window.innerWidth<700,menuList:x["b"],contextMenuList:[],landingMenu:[],checkSubscription:{},showSpinner:!1}},methods:{showSelectedRouters:function(){return console.log("this.$router: ",this.$router),"/admin"!=this.$router.history.current.fullPath},getIsUserPhoto:function(){var e=this;return""!=e.IdentityModel.base64String&&void 0!=e.IdentityModel.base64String},toggleButton:function(){var e=this;1==e.showAccountDetails?e.showAccountDetails=!1:e.showAccountDetails=!0},logoutUser:function(){this.$store.dispatch("authenticationStore/Logout")},scrollToElement:function(e){this.$router.push("".concat(e))},onResize:function(e){var t=window.innerWidth,n=this;n.rightDrawerOpen=!1,t<700&&(n.rightDrawerOpen=!0),this.$store.commit("authenticationStore/setIsMobile",n.rightDrawerOpen)},verifyResultsAnalysisSubscription:function(){var e=this;if(e.checkSubscription.isResultsAnalysis=!0,0==e.checkSubscription.isResultsAnalysis){var t=-1,n=0;for(n=0;n<e.landingMenu.length;n++)if("Results Analysis"==e.landingMenu[n].title){t=n;break}for(-1!=t&&e.landingMenu.splice(t,1),t=-1,n=0;n<e.contextMenuList.length;n++)if("Results Analysis"==e.contextMenuList[n].title){t=n;break}-1!=t&&e.contextMenuList.splice(t,1)}},verifyFileManagementSubscription:function(){var e=this;if(e.checkSubscription.isFileManagement=!0,0==e.checkSubscription.isFileManagement){var t=-1,n=0;for(n=0;n<e.landingMenu.length;n++)if("File Management"==e.landingMenu[n].title){t=n;break}for(-1!=t&&e.landingMenu.splice(t,1),t=-1,n=0;n<e.contextMenuList.length;n++)if("File Management"==e.contextMenuList[n].title){t=n;break}-1!=t&&e.contextMenuList.splice(t,1)}},verifyAdevertizementSubscription:function(){var e=this;if(e.checkSubscription.isAdvertizement=!0,0==e.checkSubscription.isAdvertizement){var t=-1,n=0;for(n=0;n<e.landingMenu.length;n++)if("Branding & Advertisement"==e.landingMenu[n].title){t=n;break}for(-1!=t&&e.landingMenu.splice(t,1),t=-1,n=0;n<e.contextMenuList.length;n++)if("Branding & Advertisement"==e.contextMenuList[n].title){t=n;break}-1!=t&&e.contextMenuList.splice(t,1)}},verifyExamQuizSubscription:function(){var e=this;if(e.checkSubscription.isExamQuiz=!0,0==e.checkSubscription.isExamQuiz){var t=-1,n=0;for(n=0;n<e.landingMenu.length;n++)if("Examination & Quiz"==e.landingMenu[n].title){t=n;break}for(-1!=t&&e.landingMenu.splice(t,1),t=-1,n=0;n<e.contextMenuList.length;n++)if("Examination & Quiz"==e.contextMenuList[n].title){t=n;break}-1!=t&&e.contextMenuList.splice(t,1)}},checkSubscritpion:function(){var e=this;return c()(l.a.mark((function t(){var n,r,i,o,s,a,c,u,h;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,r=e.$store.getters["authenticationStore/IdentityModel"],t.next=4,Object(x["a"])(r.schoolId);case 4:i=t.sent,o=i.result,n.checkSubscription=A({},o),e.$store.commit("administratorStore/SetIsSubscription",o),console.log("context.menuList: ",n.menuList),s=[],a=k(n.menuList);try{for(a.s();!(c=a.n()).done;)u=c.value,h=A({},u),h.to="/".concat(u.to),s.push(A({},h))}catch(l){a.e(l)}finally{a.f()}n.contextMenuList=s.map((function(e){return A({},e)})),n.landingMenu=s.map((function(e){return A({},e)})),n.landingMenu.shift(),n.verifyResultsAnalysisSubscription(),n.verifyFileManagementSubscription(),n.verifyAdevertizementSubscription(),n.verifyExamQuizSubscription(),e.$store.commit("administratorStore/SetMainMenuList",n.landingMenu);case 20:case"end":return t.stop()}}),t)})))()},initializeLogo:function(e){I("primary",e.primaryColor),I("accent",e.tertiaryColor),I("secondary",e.secondaryColor)},branding:function(e){var t=this;return c()(l.a.mark((function n(){var r,i;return l.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t,n.next=3,Object(O["a"])(e);case 3:i=n.sent,0===i.result.length&&i.result.push({fileUrl:"/statics/newway.jpg",primaryColor:"#FFFFFF",secondaryColor:"#FF0000",tertiaryColor:"#056608",createdBy:"CEO"}),t.$store.commit("LogoStore/SetSelectedLogo",i.result[0]),r.initializeLogo(i.result[0]);case 7:case"end":return n.stop()}}),n)})))()}},created:function(){var e=this;return c()(l.a.mark((function t(){var n,r,i,o,s,a,c,u,h,w,M,x,O,L;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,n.showSpinner=!0,window.addEventListener("resize",e.onResize),e.$store.commit("authenticationStore/setActiveRoute","adminLanding"),window.innerWidth<700&&(n.rightDrawerOpen=!0),e.$store.commit("authenticationStore/setIsMobile",n.rightDrawerOpen),t.next=8,Object(v["a"])();case 8:r=t.sent,e.$store.commit("schoolStore/SetSchools",r.result),i=e.$store.getters["authenticationStore/IdentityModel"],o=k(r.result),t.prev=12,o.s();case 14:if((s=o.n()).done){t.next=23;break}if(a=s.value,a.id!==i.schoolId){t.next=21;break}return n.schoolName=a.schoolName,e.$store.commit("schoolStore/SetUserSchool",a),n.branding(i.schoolId),t.abrupt("break",23);case 21:t.next=14;break;case 23:t.next=28;break;case 25:t.prev=25,t.t0=t["catch"](12),o.e(t.t0);case 28:return t.prev=28,o.f(),t.finish(28);case 31:if("Admin"!=i.userType||"CEO"===i.designationId){t.next=65;break}return t.next=34,Object(d["a"])(i.schoolId);case 34:return c=t.sent,e.$store.commit("classRoomStore/SetClassRooms",c.result),t.next=38,Object(f["a"])(i.schoolId);case 38:return u=t.sent,e.$store.commit("staffStore/SetStaffs",u.result),t.next=42,Object(m["a"])(i.schoolId);case 42:return h=t.sent,e.$store.commit("studentStore/SetStudents",h.result),t.next=46,Object(p["a"])(i.schoolId);case 46:return w=t.sent,e.$store.commit("subjectStore/SetSubjects",w.result),t.next=50,Object(g["a"])(i.schoolId);case 50:return M=t.sent,e.$store.commit("assessmentStore/SetAssessments",M.result),t.next=54,Object(b["a"])(i.schoolId);case 54:return x=t.sent,e.$store.commit("gradeStore/SetGrades",x.result),t.next=58,Object(S["a"])(i.schoolId);case 58:return O=t.sent,e.$store.commit("levelStore/SetLevels",O.result),t.next=62,Object(y["a"])(i.schoolId);case 62:L=t.sent,e.$store.commit("sessionStore/SetSessions",L.result),n.checkSubscritpion();case 65:n.showSpinner=!1;case 66:case"end":return t.stop()}}),t,null,[[12,25,28,31]])})))()},destroyed:function(){window.removeEventListener("resize",this.onResize)}},C=D,z=n("a6c2"),E=n("f624"),F=n("8738"),R=n("ddc7"),P=n("c99e"),Q=n("ec6d"),q=n("63c1"),B=n.n(q),U=Object(z["a"])(C,r,i,!1,null,null,null);t["default"]=U.exports;B()(U,"components",{QLayout:E["a"],QHeader:F["a"],QPageContainer:R["a"],QSpinner:P["a"],QDialog:Q["a"]})}}]);