(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[118],{ba9c:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-sm"},[a("TorpaLanding"),a("TitleDescription",{attrs:{title:t.aboutUs.title,description:t.aboutUs.description}}),a("Cards",{attrs:{cardList:t.aboutUs.list}})],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row bg-primary wrap"},[a("div",{staticClass:"col-12 q-mt-auto q-mb-auto flex flex-center"},t._l(t.cardList,(function(e){return a("div",{key:e.title,staticClass:"q-pa-sm"},[a("q-card",{staticClass:"my-card text-center box-shadow",staticStyle:{border:"none",width:"400px"},attrs:{square:"",bordered:""},on:{mouseover:function(e){return t.hoverOver(1)},mouseout:function(e){return t.hoverOutTimeout(1)},click:function(a){return t.cardClickHandler(e)}}},[a("q-img",{attrs:{src:e.fileUrl,height:"500px"}},[a("div",{staticClass:"absolute-bottom"},[a("div",{staticClass:"text-h6"},[t._v(t._s(e.title))]),a("div",{staticClass:"text-subtitle2"},[t._v(t._s(e.description))])])])],1)],1)})),0)])])},o=[],n=(a("1a43"),{props:{theme_color:{type:String,default:"#10731f"},cardList:{type:Array,default:[]},cardClickEvent:{type:String,default:""}},methods:{hoverOver:function(t){this["about_heading_color_"+t]=this.theme_color,this["about_heading_"+t]=["animated","bounceIn"]},hoverOutTimeout:function(t){var e=this;this["about_heading_color_"+t]="#424242",setTimeout((function(){e["about_heading_"+t]=[]}),1e3)},cardClickHandler:function(t){this.$emit(t.name,t)}}}),c=n,u=a("a6c2"),l=a("5ce7"),d=a("0798"),p=a("63c1"),h=a.n(p),m=Object(u["a"])(c,r,o,!1,null,null,null),b=m.exports;h()(m,"components",{QCard:l["a"],QImg:d["a"]});var v=a("495a"),f=a("0a68"),_={computed:{aboutUs:function(){return this.$store.getters["AboutUsStore/selectedAboutUs"]}},components:{TorpaLanding:v["a"],TitleDescription:f["a"],Cards:b}},C=_,g=Object(u["a"])(C,i,s,!1,null,null,null);e["default"]=g.exports}}]);