(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{"7dc0":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-pa-md"},[s("div",{staticClass:"row"},[s("p",{staticClass:"col-6 q-pa-sm text-center text-h6"},[t._v("Subject: ")]),s("p",{staticClass:"col-6 q-pa-sm text-center text-h6"},[t._v(t._s(t.subjectName))])]),s("div",{staticClass:"row"},[s("p",{staticClass:"col-6 q-pa-sm text-center text-h6"},[t._v("Level: ")]),s("p",{staticClass:"col-6 q-pa-sm text-center text-h6"},[t._v(t._s(t.levelName))])]),s("div",{staticClass:"row"},[s("p",{staticClass:"col-6 q-pa-sm text-center text-h6"},[t._v("Year: ")]),s("p",{staticClass:"col-6 q-pa-sm text-center text-h6"},[t._v(t._s(t.year))])]),s("div",{staticClass:"row"},[s("p",{staticClass:"col-6 q-pa-sm text-center text-h6"},[t._v("Score: ")]),s("p",{staticClass:"col-6 q-pa-sm text-center text-h6"},[t._v(t._s(t.score)+" of "+t._s(t.totalNumber))])]),s("div",{staticClass:"row"},[s("p",{staticClass:"col-6 q-pa-sm text-center text-h6"},[t._v("Percentage: ")]),s("p",{staticClass:"col-6 q-pa-sm text-center text-h6"},[t._v(t._s(t.calculatePercentage()))])])])},r=[],c={computed:{subjectName:function(){return this.$store.getters["examStore/subjectName"]},levelName:function(){return this.$store.getters["examStore/levelName"]},year:function(){return this.$store.getters["examStore/year"]},score:function(){return this.$store.getters["examStore/score"]},totalNumber:function(){return this.$store.getters["examStore/totalNumber"]}},methods:{calculatePercentage:function(){var t=0,e=this.$store.getters["examStore/score"],s=this.$store.getters["examStore/totalNumber"],a=(e/s*100).toFixed(t);return a}}},o=c,l=s("2877"),n=Object(l["a"])(o,a,r,!1,null,null,null);e["default"]=n.exports}}]);