(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[109],{1190:function(t,e,i){"use strict";var n=i("608b"),a=i.n(n);a.a},"608b":function(t,e,i){},a95e:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{staticClass:"bg-primary",attrs:{view:"hHh lpR fFf"}},[i("q-header",[i("MainNavbar",{attrs:{productGroups:t.productGroups,serviceGroups:t.serviceGroups}}),i("q-separator")],1),i("q-page-container",[i("router-view",{staticClass:"bg-primary"})],1)],1)},a=[],o=i("bc78"),r=i("a887"),u=o["a"].setBrand,s={computed:{setIsResponsive:function(){var t=window.innerWidth;return t<700}},components:{MainNavbar:r["a"]},data:function(){return{productGroups:[{title:"Input Deck",products:[{title:"Dimensions",name:"/input/dimensions"},{title:"Gridding",name:"/input/gridding"},{title:"Rock Porosity",name:"/input/rock/porosity"},{title:"Rock Permeability",name:"/input/rock/permeability"},{title:"PVT",name:"/input/pvt"},{title:"Wells",name:"/input/wells"},{title:"Initialization",name:"/input/initialization"},{title:"Boundaries",name:"/input/boundaries"},{title:"Schedule",name:"/input/schedule"}]}],serviceGroups:[{title:"Output",services:[{title:"Simulation Log",name:"/output/simulationlog"},{title:"Pressure Distribution",name:"/output/pressuredistribution"},{title:"Saturation Distribution",name:"/output/saturationdistribution"},{title:"Well Production",name:"/output/wellproduction"},{title:"Reservoir Production",name:""}]}]}},methods:{initializeLogo:function(){u("primary","#000000"),u("accent","#00FFFF"),u("secondary","#FFCC00")}},created:function(){this.$store.commit("authenticationStore/setReservoirSimulationList")}},l=s,p=(i("1190"),i("2877")),c=i("4d5a"),d=i("e359"),m=i("eb85"),b=i("09e3"),v=i("eebe"),f=i.n(v),w=Object(p["a"])(l,n,a,!1,null,null,null);e["default"]=w.exports;f()(w,"components",{QLayout:c["a"],QHeader:d["a"],QSeparator:m["a"],QPageContainer:b["a"]})}}]);