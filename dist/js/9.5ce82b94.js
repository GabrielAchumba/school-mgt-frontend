(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{d7e8:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("CardList",{attrs:{cardList:t.cardList},on:{showPage:function(s){return t.showPage(s)}}})],1)},a=[],n=e("4f99"),o=e("9bff"),r={components:{CardList:n["a"],MessageBox:o["a"]},data:function(){return{cardList:[{name:"showPage",title:"Single Student Results Analysis",description:"The statistics analysis of a student results",image:"/statics/images/single_student_result.jpg",to:"single-student-results-analysis"},{name:"showPage",title:"Positions of Students",description:"The statistics analysis of position of students results",image:"/statics/images/results.jpg",to:"students-positions-analysis"},{name:"showPage",title:"Multiple Students Results Analysis",description:"The statistics analysis of multiple students results",image:"/statics/images/view results.jpg",to:"summarized-students-result"}]}},methods:{showPage:function(t){this.$router.push(t.to)}},created:function(){var t=this,s=this.$store.getters["authenticationStore/IdentityModel"];if("CEO"===s.schoolId)for(var e=0;e<t.cardList.length;e++)t.cardList[e].to="/super-admin-".concat(t.cardList[e].to);if("Student"===s.userType)for(var i=0;i<t.cardList.length;i++)t.cardList[i].to="/student-".concat(t.cardList[i].to);else for(var a=0;a<t.cardList.length;a++)t.cardList[a].to="/".concat(t.cardList[a].to);console.log("context.cardList: ",t.cardList)}},c=r,u=e("2877"),d=Object(u["a"])(c,i,a,!1,null,null,null);s["default"]=d.exports}}]);