(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{"03fa":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("SelectedLevel",{attrs:{selectedQualifiedLevel:e.selectedQualifiedLevel,selectedCategoryBankDetails:e.selectedCategoryBankDetails,IdentityModel:e.IdentityModel,CashOut:e.CashOut,levelIndex:e.levelIndex,category:e.category,UploadPhotoUrl:e.UploadPhotoUrl,CreateCashOutUrl:e.CreateCashOutUrl,confirmCategoryLevelPaymentUrl:e.confirmCategoryLevelPaymentUrl}})],1)},r=[],l=a("549c"),n=a.n(l),s=a("52b5"),c=a.n(s),i=a("f79f"),u=a("b985"),d=(a("5dc2"),{computed:{selectedQualifiedLevel:function(){return this.$store.getters["cashOutStore/selectedQualifiedLevel"]},selectedCategoryBankDetails:function(){var e=this.$store.getters["cashOutStore/selectedCategoryBankDetails"];return e},IdentityModel:function(){return this.$store.getters["authenticationStore/IdentityModel"]},CashOut:function(){return this.$store.getters["cashOutStore/CashOut"]},levelIndex:function(){return this.$store.getters["cashOutStore/levelIndex"]}},components:{SelectedLevel:i["a"]},data:function(){return{SelectedFile:null,files:null,category:"CategoryN10000",isUploadFileDialog:!1,isUploadFileSuccessDialog:!1,isUploadFileFailureDialog:!1,message:"",isOffPlatformPaymentDialog:!1,isOffPlatformPaymentSuccessDialog:!1,isOffPlatformPaymentFailureDialog:!1,messageOffPlatformPayment:"",UploadPhotoUrl:"".concat(u["f"],"/uploadphoto"),CreateCashOutUrl:"".concat(u["f"],"/createcashoutdto"),confirmCategoryLevelPaymentUrl:"confirmCategoryN10000LevelPayment",amount:"10000.00",url:"".concat(u["f"],"/getcategorybankdetails"),categoryIndex:5}},created:function(){var e=this;return n()(c.a.mark((function t(){var a,o,r,l,n,s;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e,o={category:a.category,amount:a.amount},e.$store.commit("accountStore/onCategoryValueChanged",o),e.$store.commit("cashOutStore/onCategoryValueChanged",o),o={url:"".concat(a.url,"/").concat(a.categoryIndex),req:{}},r=response,l=r.data,n=l.data,l.message,s=l.success,s&&e.$store.commit("cashOutStore/GetCategoryBankDetails",n);case 7:case"end":return t.stop()}}),t)})))()}}),f=d,g=a("a6c2"),m=Object(g["a"])(f,o,r,!1,null,null,null);t["default"]=m.exports}}]);