(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"70bc":function(t,e,a){"use strict";var n=a("f800"),o=a.n(n);o.a},c774:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{staticClass:"bg-primary",attrs:{view:"hHh lpR fFf"}},[a("q-header",{staticClass:"q-py-sm bg-primary text-accent",style:"border-bottom: 2px solid "+t.theme_color},[a("q-toolbar",[a("q-btn",{staticClass:"bg-primary text-accent",attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("img",{attrs:{src:"/statics/newway.jpg",width:"100",height:"40"}}),a("q-space"),a("q-tabs",{attrs:{shrink:""},model:{value:t.selected_tab,callback:function(e){t.selected_tab=e},expression:"selected_tab"}},[t.rightDrawerOpen?a("div",[a("q-btn",{staticClass:"text-accent bg-primary",attrs:{icon:t.rightMenuIcon,flat:""},on:{click:t.toggleMobilePhoneMenu}},[a("q-menu",{attrs:{fit:""}},[a("q-list",{staticClass:"text-accent text-caption bg-primary",attrs:{dense:""}},t._l(t.menuList,(function(e){return a("q-item",{key:e.name,staticClass:"bg-primary text-accent",attrs:{clickable:""},on:{click:function(a){return t.scrollToElement(e.name)}}},[a("q-item-section",[t._v("\n                    "+t._s(e.label)+"\n                    ")])],1)})),1)],1)],1)],1):t._l(t.menuList,(function(e){return a("q-tab",{key:e.name,style:t.getTabHeaderStyle(e.tabIndex),attrs:{lass:"q-mr-sm q-py-xs text-accent",label:e.label},on:{click:function(a){return t.scrollToElement(e.name)}}})})),a("q-btn",{attrs:{flat:"",avatar:""},on:{click:t.toggleButton}},[t.getIsUserPhoto()?a("q-avatar",{staticClass:"bg-primary text-accent"},[a("q-img",{attrs:{src:t.IdentityModel.base64String}})],1):a("q-avatar",{staticClass:"bg-accent text-primary"},[t._v("\n\t        "+t._s(t.IdentityModel.firstName.charAt(0))+"\n\t      ")]),a("q-menu",{attrs:{fit:""}},[a("q-list",{staticClass:"text-accent text-caption bg-primary",attrs:{dense:""}},[a("q-item",{staticClass:"bg-primary text-accent"},[a("q-item-section",{attrs:{avatar:""}},[a("div",{staticClass:"row text-center flex flex-center q-pb-lg"},[a("div",{staticClass:"col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none"},[a("div",{staticClass:"q-pa-md",staticStyle:{"font-family":"Lato"},attrs:{avatar:""}},[t.getIsUserPhoto()?a("q-avatar",{staticClass:"bg-primary text-accent"},[a("q-img",{attrs:{src:t.IdentityModel.base64String}})],1):a("q-avatar",{staticClass:"bg-primary text-accent"},[t._v("\n                                  "+t._s(t.IdentityModel.firstName.charAt(0))+"\n                                ")])],1),a("div",{staticClass:"q-pa-md",staticStyle:{"font-family":"Lato"}},[a("p",{staticClass:"bg-primary text-accent"},[t._v("\n                                  "+t._s(t.IdentityModel.firstName)+" "+t._s(t.IdentityModel.lastName)+"\n                                ")])])])])])],1),a("q-item",{staticClass:"bg-primary text-accent"},[a("q-item-section",{attrs:{avatar:""}},[a("div",{staticClass:"row text-center flex flex-center q-pb-lg"},[a("div",{staticClass:"col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none"},[a("q-btn",{staticClass:"q-mr-md bg-accent text-primary",style:"min-height:auto; padding:1px;",attrs:{size:"12px",dense:"",icon:"color_lens"},on:{click:t.logoutUser}},[t._v("\n                                    Logout\n                                  ")])],1)])])],1)],1)],1)],1)],2)],1)],1),a("q-page-container",[a("router-view")],1)],1)},o=[],s={computed:{IdentityModel:function(){return this.$store.getters["authenticationStore/IdentityModel"]},Loginstatus:function(){return this.$store.getters["authenticationStore/Loginstatus"]},theme_color:function(){return this.$store.getters["authenticationStore/theme_color"]}},data:function(){return{leftDrawerOpen:!0,showAccountDetails:!1,rightMenuIcon:"menu",selected_tab:"home",navs:[{label:"Category NGN500.00",icon:"group",to:"/user-createCategoryN500"},{label:"Category NGN1000.00",icon:"group",to:"/user-createCategoryN1000"},{label:"Category NGN2000.00",icon:"group",to:"/user-createCategoryN2000"},{label:"Category NGN5000.00",icon:"group",to:"/user-createCategoryN5000"},{label:"Category NGN10000.00",icon:"group",to:"/user-createCategoryN10000"},{label:"Invest",icon:"group",to:"/user-contribution"},{label:"Dashboard",icon:"school",to:"/user-dashboard"},{label:"Advertise Business",icon:"school",to:"/user-dashboard"},{label:"FAQs",icon:"school",to:"/faqs"}],rightDrawerOpen:window.innerWidth<700,menuList:[{name:"home",tabIndex:"home",label:"Home"},{name:"about_us",tabIndex:"about_us",label:"About Us"}]}},methods:{getTabHeaderStyle:function(t){var e=this;return e.selected_tab==t?"[{backgroundColor: ".concat(e.theme_color,"}]"):"[{}]"},toggleMobilePhoneMenu:function(){var t=this;0==t.showMobilePhoneMenu?t.rightMenuIcon="close":t.rightMenuIcon="menu"},getIsUserPhoto:function(){var t=this;return""!=t.IdentityModel.base64String&&void 0!=t.IdentityModel.base64String},toggleButton:function(){var t=this;1==t.showAccountDetails?t.showAccountDetails=!1:t.showAccountDetails=!0},logoutUser:function(){this.$store.dispatch("authenticationStore/Logout")},scrollToElement:function(t){this.$router.push("".concat(t))},onResize:function(t){var e=window.innerWidth,a=this;a.rightDrawerOpen=!1,e<700&&(a.rightDrawerOpen=!0)}},mounted:function(){window.addEventListener("resize",this.onResize)},unmounted:function(){window.removeEventListener("resize",this.onResize)}},r=s,i=(a("70bc"),a("2877")),c=a("4d5a"),l=a("e359"),u=a("65c6"),g=a("9c40"),b=a("2c91"),d=a("429b"),m=a("4e73"),h=a("1c1c"),p=a("66e5"),y=a("4074"),f=a("7460"),q=a("cb32"),v=a("068f"),x=a("09e3"),w=a("eebe"),C=a.n(w),_=Object(i["a"])(r,n,o,!1,null,null,null);e["default"]=_.exports;C()(_,"components",{QLayout:c["a"],QHeader:l["a"],QToolbar:u["a"],QBtn:g["a"],QSpace:b["a"],QTabs:d["a"],QMenu:m["a"],QList:h["a"],QItem:p["a"],QItemSection:y["a"],QTab:f["a"],QAvatar:q["a"],QImg:v["a"],QPageContainer:x["a"]})},f800:function(t,e,a){}}]);