(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[121],{5167:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-primary"},[s("CardList",{attrs:{cardList:t.cardList},on:{showPage:function(e){return t.showPage(e)}}})],1)},o=[],a=s("4ee9"),i={computed:{cardList:function(){return this.$store.getters["administratorStore/mainMenuList"]}},components:{CardList:a["a"]},methods:{showPage:function(t){this.$router.push(t.to)},setRoutes:function(){var t=this.$store.getters["authenticationStore/IdentityModel"];this.$store.commit("userStore/SetSelectedUser",t);var e="",s="/update-user";if("CEO"===t.schoolId)e="/super-admin",s="/super-admin-update-user";else switch(t.userType){case"Admin":e="/admin",s="/update-user";break;case"Student":e="/student",s="/student-update-user";break;case"Teacher":e="/teacher",s="/teacher-update-user";break}this.$store.commit("authenticationStore/setBackRoute",e),this.$store.commit("authenticationStore/setUpdateUserRoute",s)}},created:function(){var t=this;this.$store.commit("authenticationStore/setIsError",!1),this.$store.commit("authenticationStore/setErrorMessages",""),t.setRoutes(),this.$store.commit("authenticationStore/setPageTitle","TORPA - NSG School App")}},n=i,u=s("a6c2"),c=Object(u["a"])(n,r,o,!1,null,null,null);e["default"]=c.exports}}]);