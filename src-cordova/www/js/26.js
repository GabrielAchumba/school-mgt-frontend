(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{"751e":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"bg-primary"},[i("CardList",{attrs:{cardList:t.cardList},on:{showPage:function(a){return t.showPage(a)}}})],1)},o=[],s=i("cfef"),n={components:{CardList:s["a"]},data:function(){return{cardList:[{name:"showPage",title:"Logo",description:"Create and update logo and brand colors",image:"/statics/images/logo.jpg",to:"logo-landing"},{name:"showPage",title:"Vision",description:"State the vision of your organization and also upadate it any time",image:"/statics/images/vision.jpg",to:"vision-landing"},{name:"showPage",title:"Mission",description:"State the mission of your organization and also upadate it any time",image:"/statics/images/mission.jpg",to:"mission-landing"},{name:"showPage",title:"Core Value",description:"These are the characteristics of your organization",image:"/statics/images/core_values.jpg",to:"core-value-landing"},{name:"showPage",title:"About Us",description:"Describe in detail things about your organization",image:"/statics/images/about_us.jpg",to:"about-us-landing"},{name:"showPage",title:"Contact",description:"The contact of your organization such as official line, address, etc.",image:"/statics/images/contact.jpg",to:"contact-landing"},{name:"showPage",title:"Landing Page",description:"Customize the images and texts of your landing page",image:"/statics/images/home.jpg",to:"home-landing"},{name:"showPage",title:"News & Events",description:"Post up to date news and events about your organization",image:"/statics/images/news.jpg",to:"news-landing"}]}},methods:{showPage:function(t){this.$router.push(t.to)}},created:function(){var t=this,a=this.$store.getters["authenticationStore/IdentityModel"];if("CEO"===a.schoolId)for(var i=0;i<t.cardList.length;i++)t.cardList[i].to="/super-admin-".concat(t.cardList[i].to);else for(var e=0;e<t.cardList.length;e++)t.cardList[e].to="/".concat(t.cardList[e].to);console.log("context.cardList: ",t.cardList),this.$store.commit("authenticationStore/setIsError",!1),this.$store.commit("authenticationStore/setErrorMessages","")}},r=n,c=i("a6c2"),g=Object(c["a"])(r,e,o,!1,null,null,null);a["default"]=g.exports}}]);