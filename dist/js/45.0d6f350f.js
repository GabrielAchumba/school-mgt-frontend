(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{9528:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"col-12"},[n("q-card",{staticClass:"column full-height",staticStyle:{width:"500px"}},[n("q-card-section",[e.IsPaymentSuccessful?n("div",[n("p",[e._v("\n               Payment was succesful. Thanks for using our platform\n           ")]),n("br"),n("p",[e._v("Here is your payment pincode: "+e._s(e.PaymentCode))])]):n("div",[n("p",[e._v("\n               Payment was not succesful. Please try again later. Thanks for using our platform\n           ")])])]),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"primary"},on:{click:e.Done}},[e._v("\n               Done\n               ")])],1)],1)],1)])},a=[],o={computed:{IsPaymentSuccessful:function(){return this.$store.getters["dealersStore/dealers"]},PaymentCode:function(){return this.$store.getters["ticketsStore/PaymentCode"]}},data:function(){return{}},methods:{Done:function(){this.$router.push("/generated-tokens")}}},r=o,c=n("2877"),i=n("f09f"),u=n("a370"),l=n("4b7e"),d=n("9c40"),p=n("7f67"),f=n("eebe"),m=n.n(f),h=Object(c["a"])(r,s,a,!1,null,null,null);t["default"]=h.exports;m()(h,"components",{QCard:i["a"],QCardSection:u["a"],QCardActions:l["a"],QBtn:d["a"]}),m()(h,"directives",{ClosePopup:p["a"]})}}]);