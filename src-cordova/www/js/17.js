(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"71dc":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("CardList",{attrs:{cardList:t.n1000ROIs}})],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row bg-primary"},[n("div",{staticClass:"col-md-12 col-lg-12 col-xs-12 col-sm-12"},[n("h5",{staticClass:"text-center text-accent"},[t._v("Category ₦1000.00\n              "),n("br")])])])}],c=n("fa84"),r=n.n(c),i=n("967e"),o=n.n(i),l=(n("6d67"),n("c5f6"),n("4f99")),u={props:{theme_color:{type:String,default:"#10731f"}},components:{CardList:l["a"]},data:function(){return{n1000ROIs:[],images:["N50","N100","N200","N500","N1000","N1000","N1000"]}},methods:{countDownLiners:function(t){return Math.pow(3,t+1)}},created:function(){var t=this;return r()(o.a.mark((function e(){var n,a,s,c,r,i,l;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,e.next=3,t.$store.dispatch("dashboardStore/GetROIs");case 3:a=e.sent,s=a.data,c=s.data.n1000ROIs,r=s.success,r&&(i=0,n.n1000ROIs=c.map((function(t,e){var a=Math.pow(3,e+1);return i+=Number(t.replaceAll(",","")),{title:"Level ".concat(e+1," "),description:"Contributor (Category ₦1000.00) receives ₦".concat(t," after completing Level ").concat(e+1,". This Level has ").concat(a," downliners."),image:"/statics/images/".concat(n.images[e],".png")}})),l=n.images.length-1,n.n1000ROIs.push({title:"Total",description:"Total return on investmenst received after completing this category levels is ₦".concat(i,".00"),image:"/statics/images/".concat(n.images[l],".png")}));case 6:case"end":return e.stop()}}),e)})))()}},d=u,p=n("2877"),m=Object(p["a"])(d,a,s,!1,null,null,null);e["default"]=m.exports}}]);