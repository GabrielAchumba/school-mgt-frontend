(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[116],{5167:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-primary"},[s("CardList",{attrs:{cardList:t.cardList},on:{showPage:function(e){return t.showPage(e)}}})],1)},o=[],n=s("cfef"),i={computed:{cardList:function(){return this.$store.getters["administratorStore/mainMenuList"]}},components:{CardList:n["a"]},methods:{showPage:function(t){this.$router.push(t.to)}},created:function(){this.$store.commit("authenticationStore/setIsError",!1),this.$store.commit("authenticationStore/setErrorMessages","")}},a=i,c=s("a6c2"),u=Object(c["a"])(a,r,o,!1,null,null,null);e["default"]=u.exports}}]);