(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{"51f9":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("cashOuts",{attrs:{columns:e.columns,cashOuts:e.cashOuts,title:e.title,viewCashOutUrl:e.viewCashOutUrl}})],1)},n=[],s=a("fa84"),c=a.n(s),u=a("967e"),i=a.n(u),r=a("fbc6"),o=a("0d91"),f={computed:{cashOuts:function(){return this.$store.getters["cashOutStore/cashOuts"]}},components:{cashOuts:r["a"]},data:function(){return{columns:[{name:"fullName",label:"Full Name",field:"",align:"left"},{name:"createdDate",label:"Payment Date",field:"",align:"left"},{name:"returnOnInvestment",label:"Amount Paid (₦)",field:"",align:"left"},{name:"category",label:"category",field:"",align:"left"},{name:"level",label:"Level",field:"",align:"left"},{name:"bankName",label:"Bank Name",field:"",align:"left"},{name:"accountName",label:"AccountName",field:"",align:"left"},{name:"accountNumber",label:"Account Number",field:"",align:"left"},{name:"actions",label:"Action",field:"actions",align:"left"}],title:"",viewCashOutUrl:""}},created:function(){var e=this;return c()(i.a.mark((function t(){var a,l,n,s,c,u,r;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,l="".concat(o["f"],"/getcashouts/5"),a.title="Paid Category N10000 Levels",a.viewCashOutUrl="viewCashOutN10000",t.next=6,e.$store.dispatch("cashOutStore/GetCashOuts",{url:l});case 6:n=t.sent,s=n.data,c=s.data,u=s.message,r=s.success,r?e.$store.commit("cashOutStore/GetCashOuts",c):(a=e,a.isFetchTableDialog=!0,a.message=u);case 9:case"end":return t.stop()}}),t)})))()}},m=f,h=a("2877"),d=Object(h["a"])(m,l,n,!1,null,null,null);t["default"]=d.exports}}]);