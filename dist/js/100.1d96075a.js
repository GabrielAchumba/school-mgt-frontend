(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[100],{"428e":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-primary"},[s("CardList",{attrs:{cardList:t.cardList},on:{showPage:function(e){return t.showPage(e)}}})],1)},a=[],o=s("4f99"),r={components:{CardList:o["a"]},data:function(){return{cardList:[{name:"showPage",title:"Create Subscription",description:"Creat Subscription for plans for all Torpa's non-free features",image:"/statics/images/staffs.jpg",to:"/create-subscription"},{name:"showPage",title:"Uphdate Subscription",description:"Update Subscription for your existing plans or add new features",image:"/statics/images/staffs.jpg",to:"/update-subscription"}]}},methods:{showPage:function(t){this.$router.push(t.to)},setBackRoute:function(){var t=this.$store.getters["authenticationStore/IdentityModel"],e="";e="CEO"===t.schoolId?"/super-admin":"/admin",this.$store.commit("authenticationStore/setBackRoute",e)}},created:function(){var t=this;this.$store.commit("authenticationStore/setIsError",!1),this.$store.commit("authenticationStore/setErrorMessages",""),t.setBackRoute()}},n=r,c=s("2877"),u=Object(c["a"])(n,i,a,!1,null,null,null);e["default"]=u.exports}}]);