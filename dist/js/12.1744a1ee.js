(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"16f6":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{staticClass:"bg-primary",attrs:{view:"hHh lpR fFf"}},[a("q-header",{staticClass:"q-py-sm bg-primary text-accent",style:"border-bottom: 2px solid "+t.theme_color},[a("q-toolbar",[a("img",{attrs:{src:"/statics/newway.jpg",width:"100",height:"40"}}),a("q-space"),a("q-tabs",{attrs:{shrink:""}},[a("q-btn",{attrs:{avatar:""},on:{click:t.toggleButton}},[t.getIsUserPhoto()?a("q-avatar",{staticClass:"bg-primary text-accent"},[a("q-img",{attrs:{src:t.IdentityModel.base64String}})],1):a("q-avatar",{staticClass:"bg-accent text-primary"},[t._v("\n\t        "+t._s(t.IdentityModel.firstName.charAt(0))+"\n\t      ")]),a("q-menu",{attrs:{fit:""}},[a("q-list",{staticClass:"text-accent text-caption bg-primary",attrs:{dense:""}},[a("q-item",{staticClass:"bg-primary text-accent"},[a("q-item-section",{attrs:{avatar:""}},[a("div",{staticClass:"row text-center flex flex-center q-pb-lg"},[a("div",{staticClass:"col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none"},[a("div",{staticClass:"q-pa-md",staticStyle:{"font-family":"Lato"},attrs:{avatar:""}},[t.getIsUserPhoto()?a("q-avatar",{staticClass:"bg-primary text-accent"},[a("q-img",{attrs:{src:t.IdentityModel.base64String}})],1):a("q-avatar",{staticClass:"bg-accent text-primary"},[t._v("\n                                  "+t._s(t.IdentityModel.firstName.charAt(0))+"\n                                ")])],1),a("div",{staticClass:"q-pa-md",staticStyle:{"font-family":"Lato"}},[a("p",{staticClass:"bg-primary text-accent"},[t._v("\n                                  "+t._s(t.IdentityModel.firstName)+" "+t._s(t.IdentityModel.lastName)+"\n                                ")])])])])])],1),a("q-item",{staticClass:"bg-primary accent-white"},[a("q-item-section",{attrs:{avatar:""}},[a("div",{staticClass:"row text-center flex flex-center q-pb-lg"},[a("div",{staticClass:"col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none"},[a("q-btn",{staticClass:"q-mr-md bg-accent text-primary",style:"min-height:auto; padding:1px;",attrs:{size:"12px",dense:"",icon:"color_lens"},on:{click:t.logoutUser}},[t._v("\n                                    Logout\n                                  ")])],1)])])],1)],1)],1)],1),a("div",["/admin"!=this.$router.history.current.fullPath?a("q-btn",{staticClass:"text-accent bg-primary",attrs:{icon:t.rightMenuIcon,flat:"",dense:""}},[a("q-menu",{attrs:{fit:""}},[a("q-list",{staticClass:"text-accent text-caption bg-primary",attrs:{dense:""}},t._l(t.menuList,(function(e){return a("q-item",{key:e.title,staticClass:"bg-primary text-accent",attrs:{clickable:""},on:{click:function(a){return t.scrollToElement(e.to)}}},[a("q-item-section",[t._v("\n                    "+t._s(e.title)+"\n                    ")])],1)})),1)],1)],1):t._e()],1)],1)],1)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],n=a("fa84"),r=a.n(n),o=a("967e"),c=a.n(o),l=(a("e4b6"),a("b87a"),a("1c1ce"),a("b82d"),a("0428"),a("6b11"),{name:"AdminLayout",computed:{IdentityModel:function(){return this.$store.getters["authenticationStore/IdentityModel"]},Loginstatus:function(){return this.$store.getters["authenticationStore/Loginstatus"]},theme_color:function(){return this.$store.getters["authenticationStore/theme_color"]}},components:{},data:function(){return{leftDrawerOpen:!0,showAccountDetails:!1,rightMenuIcon:"menu",navs:[],rightDrawerOpen:window.innerWidth<700,menuList:[{name:"showPage",title:"Home",description:"Landing Page",image:"/statics/images/staffs.jpg",to:"/referal"},{name:"showPage",title:"Profile",description:"Update your profile",image:"/statics/images/staffs.jpg",to:"/update-referal"},{name:"showPage",title:"Schools",description:"The schools that came to us by you",image:"/statics/images/staffs.jpg",to:"/referal-schools"}]}},methods:{showSelectedRouters:function(){return console.log("this.$router: ",this.$router),"/admin"!=this.$router.history.current.fullPath},getIsUserPhoto:function(){var t=this;return""!=t.IdentityModel.base64String&&void 0!=t.IdentityModel.base64String},toggleButton:function(){var t=this;1==t.showAccountDetails?t.showAccountDetails=!1:t.showAccountDetails=!0},logoutUser:function(){this.$store.dispatch("authenticationStore/Logout")},scrollToElement:function(t){this.$router.push("".concat(t))},onResize:function(t){var e=window.innerWidth,a=this;a.rightDrawerOpen=!1,e<700&&(a.rightDrawerOpen=!0),this.$store.commit("authenticationStore/setIsMobile",a.rightDrawerOpen)}},created:function(){var t=this;return r()(c.a.mark((function e(){var a;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:window.addEventListener("resize",t.onResize),a=t,window.innerWidth<700&&(a.rightDrawerOpen=!0),t.$store.commit("authenticationStore/setIsMobile",a.rightDrawerOpen);case 4:case"end":return e.stop()}}),e)})))()},destroyed:function(){window.removeEventListener("resize",this.onResize)}}),u=l,m=a("2877"),d=a("4d5a"),g=a("e359"),h=a("65c6"),p=a("9c40"),f=a("2c91"),b=a("429b"),w=a("cb32"),y=a("068f"),q=a("4e73"),v=a("1c1c"),x=a("66e5"),C=a("4074"),I=a("09e3"),_=a("2eeb"),S=a("eebe"),M=a.n(S),L=Object(m["a"])(u,s,i,!1,null,null,null);e["default"]=L.exports;M()(L,"components",{QLayout:d["a"],QHeader:g["a"],QToolbar:h["a"],QBtn:p["a"],QSpace:f["a"],QTabs:b["a"],QAvatar:w["a"],QImg:y["a"],QMenu:q["a"],QList:v["a"],QItem:x["a"],QItemSection:C["a"],QPageContainer:I["a"]}),M()(L,"directives",{GoBack:_["a"]})}}]);