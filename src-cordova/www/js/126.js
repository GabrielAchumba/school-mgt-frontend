(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[126],{"5f37":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-primary"},[t.cardList.length>0?s("CardList",{attrs:{cardList:t.cardList},on:{showPage:function(e){return t.showPage(e)}}}):s("div",{staticClass:"flex flex-center text-h4 text-accent"},[t._v("\n      "+t._s(t.notConfirmed)+"\n     ")])],1)},o=[],i=s("4ee9"),a={computed:{cardList:function(){return this.$store.getters["administratorStore/mainMenuList"]}},components:{CardList:i["a"]},data:function(){return{notConfirmed:"No Confirmed. Contact your administrator"}},methods:{showPage:function(t){this.$router.push(t.to)},setRoutes:function(){var t=this.$store.getters["authenticationStore/IdentityModel"];this.$store.commit("userStore/SetSelectedUser",t);var e="",s="/update-user";if("CEO"===t.schoolId)e="/super-admin",s="/super-admin-update-user";else switch(t.userType){case"Admin":e="/admin",s="/update-user";break;case"Student":e="/student",s="/student-update-user";break;case"Member":e="/member",s="/member-update-user";break}this.$store.commit("authenticationStore/setBackRoute",e),this.$store.commit("authenticationStore/setUpdateUserRoute",s)}},created:function(){var t=this;this.$store.commit("authenticationStore/setIsError",!1),this.$store.commit("authenticationStore/setErrorMessages",""),t.setRoutes(),this.$store.commit("authenticationStore/setPageTitle","TORPA - NSG School App")}},n=a,u=s("a6c2"),c=Object(u["a"])(n,r,o,!1,null,null,null);e["default"]=c.exports}}]);