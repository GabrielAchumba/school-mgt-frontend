(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[98],{d56d:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bg-primary"},[e("CardList",{attrs:{cardList:t.cardList},on:{showPage:function(s){return t.showPage(s)}}})],1)},i=[],r=e("cfef"),o={components:{CardList:r["a"]},data:function(){return{cardList:[{name:"showPage",title:"Create Subscription",description:"Creat Subscription for plans for all Torpa's non-free features",image:"/statics/images/staffs.jpg",to:"/create-subscription"},{name:"showPage",title:"Uphdate Subscription",description:"Update Subscription for your existing plans or add new features",image:"/statics/images/staffs.jpg",to:"/update-subscription"}]}},methods:{showPage:function(t){this.$router.push(t.to)}},created:function(){this.$store.commit("authenticationStore/setIsError",!1),this.$store.commit("authenticationStore/setErrorMessages","")}},n=o,c=e("a6c2"),u=Object(c["a"])(n,a,i,!1,null,null,null);s["default"]=u.exports}}]);