(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[80],{bf20:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("CardList",{attrs:{cardList:t.cardList},on:{showPage:function(s){return t.showPage(s)}}})],1)},a=[],o=e("4f99"),i=e("9bff"),r={components:{CardList:o["a"],MessageBox:i["a"]},data:function(){return{cardList:[{name:"showPage",title:"Lesson Notes",description:"Create and upadte lesson note for any subject",image:"/statics/images/single_student_result.jpg",to:"lesson-note-landing"},{name:"showPage",title:"Continuous Assessments",description:"Create and update continuous assessments for any subject",image:"/statics/images/results.jpg",to:"ca-landing"},{name:"showPage",title:"Lesson Note Sections",description:"Create and upadte lesson sections for any lesson note",image:"/statics/images/single_student_result.jpg",to:"lesson-note-section-landing"},{name:"showPage",title:"Continuous Assessment Questions",description:"Create and upadte questions for a selected continuous assessment",image:"/statics/images/single_student_result.jpg",to:"ca-question-landing"},{name:"showPage",title:"Continuous Assessment Answers",description:"Create and upadte answers of the continuous assessment questions created",image:"/statics/images/single_student_result.jpg",to:"ca-answer-landing"}]}},methods:{showPage:function(t){this.$router.push(t.to)}},created:function(){var t=this,s=this.$store.getters["authenticationStore/IdentityModel"];if("CEO"===s.schoolId)for(var e=0;e<t.cardList.length;e++)t.cardList[e].to="/super-admin-".concat(t.cardList[e].to);if("Student"===s.userType)for(var n=0;n<t.cardList.length;n++)t.cardList[n].to="/student-".concat(t.cardList[n].to);else for(var a=0;a<t.cardList.length;a++)t.cardList[a].to="/".concat(t.cardList[a].to);console.log("context.cardList: ",t.cardList)}},c=r,d=e("2877"),u=Object(d["a"])(c,n,a,!1,null,null,null);s["default"]=u.exports}}]);