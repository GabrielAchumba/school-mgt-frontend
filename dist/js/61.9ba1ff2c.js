(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[61],{"7dc0":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-pa-md"},[s("div",{staticClass:"row q-pa-md flex flex-center"},[s("Chart")],1),s("div",{staticClass:"row"},[s("p",{staticClass:"col-12 q-pa-sm text-center text-h6"},[t._v("You scored "+t._s(t.score)+" of "+t._s(t.totalNumber)+" Questions")]),s("p",{staticClass:"col-12 q-pa-sm text-center text-h6"},[t._v("The Assessment is on "+t._s(t.subjectName)+", "+t._s(t.levelName)+" "+t._s(t.year)+" ")])])])},o=[],a=s("0f57"),n={computed:{subjectName:function(){return this.$store.getters["examStore/subjectName"]},levelName:function(){return this.$store.getters["examStore/levelName"]},year:function(){return this.$store.getters["examStore/year"]},score:function(){return this.$store.getters["examStore/score"]},totalNumber:function(){return this.$store.getters["examStore/totalNumber"]},percentage:function(){return this.$store.getters["examStore/percentage"]}},components:{Chart:a["default"]},created:function(){this.$store.commit("authenticationStore/setIsError",!1),this.$store.commit("authenticationStore/setErrorMessages",""),this.$store.commit("authenticationStore/setPageTitle","Scores")}},c=n,i=s("2877"),u=Object(i["a"])(c,r,o,!1,null,null,null);e["default"]=u.exports}}]);