(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[71],{"7f94":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("PersonalDataCategories",{attrs:{personalDataList:e.personalDataList,columns:e.columns,isFetchTableDialog:e.isFetchTableDialog,message:e.message,createCategoryUrl:e.createCategoryUrl}})],1)},n=[],r=t("549c"),l=t.n(r),o=t("52b5"),c=t.n(o),i=t("bfb0"),u=t("b985"),g=t("5dc2"),m={computed:{personalDataList:function(){return this.$store.getters["categoryStore/personalDataList"]}},components:{PersonalDataCategories:i["a"]},data:function(){return{columns:[{name:"firstName",label:"First Name",field:"",align:"left"},{name:"lastName",label:"Last Name",field:"",align:"left"},{name:"actions",label:"Actions",field:"actions",align:"left"}],isFetchTableDialog:!1,message:"",createCategoryUrl:"createCategoryN2000"}},created:function(){var e=this;return l()(c.a.mark((function a(){var t,s,n,r,l,o,i,m;return c.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t="".concat(u["m"],"/getpersonaldataList"),s={url:t},a.next=4,Object(g["a"])(s);case 4:n=a.sent,r=n.data,l=r.data,o=r.message,i=r.success,i?e.$store.commit("categoryStore/GetPersonalDataList",l):(m=e,m.isFetchTableDialog=!0,m.message=o);case 7:case"end":return a.stop()}}),a)})))()}},f=m,p=t("a6c2"),b=Object(p["a"])(f,s,n,!1,null,null,null);a["default"]=b.exports}}]);