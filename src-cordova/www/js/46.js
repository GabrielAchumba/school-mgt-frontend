(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{"0b28":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("cashOuts",{attrs:{columns:e.columns,cashOuts:e.cashOuts,title:e.title,viewCashOutUrl:e.viewCashOutUrl}})],1)},n=[],s=a("549c"),c=a.n(s),i=a("52b5"),u=a.n(i),r=a("1e90"),o=a("b985"),m=a("5dc2"),f={computed:{cashOuts:function(){return this.$store.getters["cashOutStore/cashOuts"]}},components:{cashOuts:r["a"]},data:function(){return{columns:[{name:"fullName",label:"Full Name",field:"",align:"left"},{name:"createdDate",label:"Payment Date",field:"",align:"left"},{name:"returnOnInvestment",label:"Amount Paid (₦)",field:"",align:"left"},{name:"category",label:"category",field:"",align:"left"},{name:"level",label:"Level",field:"",align:"left"},{name:"bankName",label:"Bank Name",field:"",align:"left"},{name:"accountName",label:"AccountName",field:"",align:"left"},{name:"accountNumber",label:"Account Number",field:"",align:"left"},{name:"actions",label:"Action",field:"actions",align:"left"}],title:"",viewCashOutUrl:""}},created:function(){var e=this;return c()(u.a.mark((function t(){var a,l,n,s,c,i,r,f;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,l="".concat(o["h"],"/getcashouts/3"),a.title="Paid Category N2000 Levels",a.viewCashOutUrl="viewCashOutN2000",n={url:l,req:{}},t.next=7,Object(m["a"])(n);case 7:s=t.sent,c=s.data,i=c.data,r=c.message,f=c.success,f?e.$store.commit("cashOutStore/GetCashOuts",i):(a=e,a.isFetchTableDialog=!0,a.message=r);case 10:case"end":return t.stop()}}),t)})))()}},d=f,h=a("a6c2"),b=Object(h["a"])(d,l,n,!1,null,null,null);t["default"]=b.exports}}]);