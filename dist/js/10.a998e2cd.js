(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"0c9a":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"hHh lpR fFf"}},[n("q-header",{staticClass:"q-pa-none bg-accent text-primary"},[n("q-toolbar",["/school-landing"==this.$router.history.current.fullPath?n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"create"},on:{click:e.create}}):e._e(),n("q-space"),n("img",{attrs:{src:"/statics/newway.jpg",width:"100",height:"40"}}),n("q-space"),n("q-tabs",{attrs:{shrink:""},model:{value:e.selected_tab,callback:function(t){e.selected_tab=t},expression:"selected_tab"}},[e.rightDrawerOpen?n("div",[n("q-btn",{staticClass:"text-primary bg-accent",attrs:{icon:e.rightMenuIcon,flat:"",dense:""},on:{click:e.toggleMobilePhoneMenu}},[n("q-menu",{attrs:{fit:""}},[n("q-list",{staticClass:"text-accent text-caption bg-primary",attrs:{dense:""}},e._l(e.menuList,(function(t){return n("q-item",{key:t.name,staticClass:"bg-primary text-accent",attrs:{clickable:""},on:{click:function(n){return e.scrollToElement(t.name)}}},[n("q-item-section",[e._v("\n                    "+e._s(t.label)+"\n                    ")])],1)})),1)],1)],1)],1):e._l(e.menuList,(function(t){return n("q-tab",{key:t.name,staticClass:"q-mr-sm q-py-xs text-primary",style:e.getTabHeaderStyle(t.tabIndex),attrs:{label:t.label},on:{click:function(n){return e.scrollToElement(t.name)}}})}))],2)],1)],1),n("q-page-container",{staticStyle:{height:"100vh"}},[n("router-view")],1)],1)},o=[],r=n("fa84"),s=n.n(r),i=n("967e"),c=n.n(i),l=n("6b11"),u={computed:{theme_color:function(){return this.$store.getters["authenticationStore/theme_color"]}},data:function(){return{rightMenuIcon:"menu",rightDrawerOpen:window.innerWidth<700,leftDrawerOpen:!0,showAccountDetails:!1,showMobilePhoneMenu:!1,selected_tab:"home",menuList:[{name:"/",tabIndex:"home",label:"Home"},{name:"login_register",tabIndex:"login_register",label:"Sign In"},{name:"school-landing",tabIndex:"schools",label:"Schools"}]}},methods:{create:function(){var e=this.$store.getters["authenticationStore/createURL"];this.$router.push(e)},onResize:function(e){var t=window.innerWidth,n=this;n.rightDrawerOpen=!1,t<700&&(n.rightDrawerOpen=!0)},toggleMobilePhoneMenu:function(){},getTabHeaderStyle:function(e){var t=this;return t.selected_tab==e?"[{backgroundColor: ".concat(t.theme_color,"}]"):"[{}]"},toggleButton:function(){var e=this;1==e.showAccountDetails?e.showAccountDetails=!1:e.showAccountDetails=!0},logoutUser:function(){this.$store.dispatch("authenticationStore/Logout")},scrollToElement:function(e){var t=this;t.selected_tab=e,this.$router.push("".concat(e))}},created:function(){var e=this;return s()(c.a.mark((function t(){var n;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return window.addEventListener("resize",e.onResize),t.next=3,Object(l["a"])();case 3:n=t.sent,e.$store.commit("schoolStore/SetSchools",n.result);case 5:case"end":return t.stop()}}),t)})))()},destroyed:function(){window.removeEventListener("resize",this.onResize)}},h=u,d=n("2877"),b=n("4d5a"),m=n("e359"),g=n("65c6"),p=n("9c40"),w=n("2c91"),f=n("429b"),v=n("4e73"),_=n("1c1c"),q=n("66e5"),y=n("4074"),x=n("7460"),k=n("09e3"),S=n("eebe"),Q=n.n(S),D=Object(d["a"])(h,a,o,!1,null,null,null);t["default"]=D.exports;Q()(D,"components",{QLayout:b["a"],QHeader:m["a"],QToolbar:g["a"],QBtn:p["a"],QSpace:w["a"],QTabs:f["a"],QMenu:v["a"],QList:_["a"],QItem:q["a"],QItemSection:y["a"],QTab:x["a"],QPageContainer:k["a"]})}}]);