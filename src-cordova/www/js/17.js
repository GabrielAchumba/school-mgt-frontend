(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"998b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("CardList",{attrs:{cardList:t.n1000ROIs}})],1)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row bg-primary"},[n("div",{staticClass:"col-md-12 col-lg-12 col-xs-12 col-sm-12"},[n("h5",{staticClass:"text-center text-accent"},[t._v("Category ₦1000.00\n              "),n("br")])])])}],s=n("549c"),r=n.n(s),i=n("52b5"),o=n.n(i),l=(n("c889"),n("7b62"),n("cfef")),u=n("5dc2"),p=n("b985"),m={props:{theme_color:{type:String,default:"#10731f"}},components:{CardList:l["a"]},data:function(){return{n1000ROIs:[],images:["N50","N100","N200","N500","N1000","N1000","N1000"]}},methods:{countDownLiners:function(t){return Math.pow(3,t+1)}},created:function(){var t=this;return r()(o.a.mark((function e(){var n,a,c,s,r,i,l,m;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,a={url:"".concat(p["p"],"/getrois"),req:{}},e.next=4,Object(u["a"])(a);case 4:c=e.sent,s=c.data,r=s.data.n1000ROIs,i=s.success,i&&(l=0,n.n1000ROIs=r.map((function(t,e){var a=Math.pow(3,e+1);return l+=Number(t.replaceAll(",","")),{title:"Level ".concat(e+1," "),description:"Contributor (Category ₦1000.00) receives ₦".concat(t," after completing Level ").concat(e+1,". This Level has ").concat(a," downliners."),image:"/statics/images/".concat(n.images[e],".png")}})),m=n.images.length-1,n.n1000ROIs.push({title:"Total",description:"Total return on investmenst received after completing this category levels is ₦".concat(l,".00"),image:"/statics/images/".concat(n.images[m],".png")}));case 7:case"end":return e.stop()}}),e)})))()}},d=m,g=n("a6c2"),f=Object(g["a"])(d,a,c,!1,null,null,null);e["default"]=f.exports}}]);