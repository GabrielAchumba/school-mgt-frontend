(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[101],{"34f5":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-pa-sm"},[t.isMobile?n("div",[n("div",{staticClass:"row"},[n("ResultsSubscription",{staticClass:"col-12",attrs:{isUpdate:t.isUpdate},on:{onResultScriptionValueChange:function(e){return t.onResultScriptionValueChange(e)},onStudentsSelected:function(e){return t.onStudentsSelected(e)}}}),n("ExamsQuizSubscription",{staticClass:"col-12",attrs:{isUpdate:t.isUpdate},on:{onExamsQuizScriptionValueChange:function(e){return t.onExamsQuizScriptionValueChange(e)}}}),n("FileManagementSubscription",{staticClass:"col-12",attrs:{isUpdate:t.isUpdate},on:{onFileManagementScriptionValueChange:function(e){return t.onFileManagementScriptionValueChange(e)}}}),n("CustomizeAppSubscription",{staticClass:"col-12",attrs:{isUpdate:t.isUpdate},on:{onCustomizationScriptionValueChange:function(e){return t.onCustomizationScriptionValueChange(e)}}}),n("OnlineLearning",{staticClass:"col-12",attrs:{isUpdate:t.isUpdate},on:{onOnlineLearningScriptionValueChange:function(e){return t.onOnlineLearningScriptionValueChange(e)}}}),n("div",{staticClass:"col-12 q-py-sm text-right"},[t.isMobile?n("q-icon",{staticClass:"q-pa-sm text-accent",attrs:{name:t.invoiceBtn.icon,size:"30px"},on:{click:t.showPaymentPage}},[n("q-tooltip",[t._v("\n                        "+t._s(t.invoiceBtn.label)+"\n                        ")])],1):n("q-btn",{staticClass:"q-ma-sm bg-accent text-primary",attrs:{label:t.invoiceBtn.label,type:"button",size:"md",icon:t.invoiceBtn.icon,"no-caps":""},on:{click:t.showPaymentPage}})],1)],1),n("div",{staticClass:"row"},[t.isInvoice?n("Invoice",{staticClass:"col-12"}):t._e(),t.isPaymentPlatform?n("MakePayment",{staticClass:"col-12"}):t._e()],1)]):n("div",[n("q-resize-observer",{attrs:{debounce:0},on:{resize:t.onResize}}),n("q-splitter",{style:t.splitterStyle,attrs:{id:"photos",limits:[0,100],"before-class":"overflow-hidden","after-class":"overflow-hidden"},scopedSlots:t._u([{key:"before",fn:function(){return[n("div",{staticClass:"row"},[n("ResultsSubscription",{staticClass:"col-12",attrs:{isUpdate:t.isUpdate},on:{onResultScriptionValueChange:function(e){return t.onResultScriptionValueChange(e)},onStudentsSelected:function(e){return t.onStudentsSelected(e)}}}),n("ExamsQuizSubscription",{staticClass:"col-12",attrs:{isUpdate:t.isUpdate},on:{onExamsQuizScriptionValueChange:function(e){return t.onExamsQuizScriptionValueChange(e)}}}),n("FileManagementSubscription",{staticClass:"col-12",attrs:{isUpdate:t.isUpdate},on:{onFileManagementScriptionValueChange:function(e){return t.onFileManagementScriptionValueChange(e)}}}),n("CustomizeAppSubscription",{staticClass:"col-12",attrs:{isUpdate:t.isUpdate},on:{onCustomizationScriptionValueChange:function(e){return t.onCustomizationScriptionValueChange(e)}}}),n("OnlineLearning",{staticClass:"col-12",attrs:{isUpdate:t.isUpdate},on:{onOnlineLearningScriptionValueChange:function(e){return t.onOnlineLearningScriptionValueChange(e)}}}),n("div",{staticClass:"col-12 q-py-sm text-right"},[t.isMobile?n("q-icon",{staticClass:"q-pa-sm text-accent",attrs:{name:t.invoiceBtn.icon,size:"30px"},on:{click:t.showPaymentPage}},[n("q-tooltip",[t._v("\n                        "+t._s(t.invoiceBtn.label)+"\n                        ")])],1):n("q-btn",{staticClass:"q-ma-sm bg-accent text-primary",attrs:{label:t.invoiceBtn.label,type:"button",size:"md",icon:t.invoiceBtn.icon,"no-caps":""},on:{click:t.showPaymentPage}})],1)],1)]},proxy:!0},{key:"after",fn:function(){return[n("div",{staticClass:"row"},[t.isInvoice?n("Invoice",{staticClass:"col-12"}):t._e(),t.isPaymentPlatform?n("MakePayment",{staticClass:"col-12"}):t._e()],1)]},proxy:!0}]),model:{value:t.splitterModel,callback:function(e){t.splitterModel=e},expression:"splitterModel"}})],1)])},o=[],a=(n("ef92"),n("0012"),n("f69e"),n("ad58"),n("d93a"),n("9289")),s=n.n(a),c=n("549c"),r=n.n(c),u=n("52b5"),l=n.n(u),p=(n("7b62"),n("c4b5")),m=n("cc2c"),S=n("1041"),b=n("dba8"),d=n("c14c"),g=n("37d3"),v=n("9ab4"),f=n("5dc2");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y={computed:{splitterStyle:function(){var t=this;return{height:"100vh",width:"".concat(t.width,"px")}}},components:{ResultsSubscription:p["a"],ExamsQuizSubscription:m["a"],FileManagementSubscription:S["a"],CustomizeAppSubscription:b["a"],Invoice:g["a"],MakePayment:v["a"],OnlineLearning:d["a"]},data:function(){return{width:400,splitterModel:30,isMobile:!1,isInvoice:!0,isPaymentPlatform:!1,invoiceBtn:{label:"Configure",icon:"payment"},resultSubscription:{variable:"",value:"",amount:0},examsAndQuizSubscription:{variable:"",value:"",amount:0},fileManagementSubscription:{variable:"",value:"",amount:0},appCustomizationSubscription:{variable:"",value:"",amount:0},onLineLearningSubscription:{variable:"",value:"",amount:0},allSubscriptions:{variable:"",value:"",amount:0},paymentStatus:{variable:"Payment Status",value:"NOT PAID"},paymentMessage:{variable:"Message",value:"Payment In Progress"},receiptNo:{variable:"Receipt Number",value:""},totalAmount:0,numberOfStudents:0,isUpdate:!1}},methods:{onResize:function(t){var e=this;e.width=t.width},onResizePage:function(t){var e=window.innerWidth,n=this;n.isMobile=e<700},onStudentsSelected:function(t){var e=this;e.numberOfStudents=Number(t.studentsForm.GroupedCheckBoxes[0].group.length)},onResultScriptionValueChange:function(t){if("None"!==t.qSelect.label){var e=this,n=Number(t.qSelect.amount)*e.numberOfStudents;e.resultSubscription={name:"RESULT",variable:"Results Analysis (".concat(t.qSelect.label,"):"),value:"".concat(n,".00"),amount:n},this.$store.commit("subscriptionStore/SetResultSubscription",e.resultSubscription),e.sumAllSubscriptions()}else alert("You can set subscription to none")},onExamsQuizScriptionValueChange:function(t){if("None"!==t.qSelect.label){var e=this;e.examsAndQuizSubscription={name:"EXAMS & QUIZ",variable:"Exams & Quiz (".concat(t.qSelect.label,"):"),value:"".concat(t.qSelect.amount,".00"),amount:t.qSelect.amount},this.$store.commit("subscriptionStore/SetExamsAndQuizSubscription",e.examsAndQuizSubscription),e.sumAllSubscriptions()}else alert("You can set subscription to none")},onFileManagementScriptionValueChange:function(t){if("None"!==t.qSelect.label){var e=this;e.fileManagementSubscription={name:"FILE MANAGEMENT",variable:"File Management (".concat(t.qSelect.label,"):"),value:"".concat(t.qSelect.amount,".00"),amount:t.qSelect.amount},this.$store.commit("subscriptionStore/SetFileManagementSubscription",e.fileManagementSubscription),e.sumAllSubscriptions()}else alert("You can set subscription to none")},onCustomizationScriptionValueChange:function(t){if("None"!==t.qSelect.label){var e=this;e.appCustomizationSubscription={name:"APP CUSTOMIZATION",variable:"App Customization (".concat(t.qSelect.label,"):"),value:"".concat(t.qSelect.amount,".00"),amount:t.qSelect.amount},this.$store.commit("subscriptionStore/SetAppCustomizationSubscription",e.appCustomizationSubscription),e.sumAllSubscriptions()}else alert("You can set subscription to none")},onOnlineLearningScriptionValueChange:function(t){if("None"!==t.qSelect.label){var e=this;e.onLineLearningSubscription={name:"ONLINE LEARNING",variable:"Online Learning (".concat(t.qSelect.label,"):"),value:"".concat(t.qSelect.amount,".00"),amount:t.qSelect.amount},this.$store.commit("subscriptionStore/SetOnLineLearningSubscription",e.onLineLearningSubscription),e.sumAllSubscriptions()}else alert("You can set subscription to none")},sumAllSubscriptions:function(){var t=this;t.totalAmount=t.resultSubscription.amount+t.fileManagementSubscription.amount+t.examsAndQuizSubscription.amount+t.appCustomizationSubscription.amount+t.onLineLearningSubscription.amount,t.allSubscriptions={name:"TOTAL AMOUNT",variable:"Total Amount:",value:"".concat(t.totalAmount,".00"),amount:t.totalAmount},this.$store.commit("subscriptionStore/SetAllSubscriptions",t.allSubscriptions)},showPaymentPage:function(){var t=this;!0===t.isInvoice?(t.isInvoice=!1,t.isPaymentPlatform=!0,t.invoiceBtn.icon="receipt"):(t.isInvoice=!0,t.isPaymentPlatform=!1,t.invoiceBtn.icon="payment")},getSchoolSubscriptions:function(){var t=this;return r()(l.a.mark((function e(){var n,i,o,a,s,c,r,u;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,i=t.$store.getters["authenticationStore/IdentityModel"],o="payment/".concat(i.schoolId),a={url:o},console.log("payload: ",a),e.next=7,Object(f["a"])(a);case 7:s=e.sent,c=s.data,r=c.data,c.message,u=c.success,u&&(n.resultSubscription=C({},r.resultSubscription),n.examsAndQuizSubscription=C({},r.examsAndQuizSubscription),n.fileManagementSubscription=C({},r.fileManagementSubscription),n.appCustomizationSubscription=C({},r.appCustomizationSubscription),n.onLineLearningSubscription=C({},r.onLineLearningSubscription),n.allSubscriptions=C({},r.allSubscriptions),n.paymentStatus=C({},r.paymentStatus),n.paymentMessage=C({},r.paymentMessage),n.receiptNo=C({},r.receiptNo),t.$store.commit("subscriptionStore/SetResultSubscription",n.resultSubscription),t.$store.commit("subscriptionStore/SetExamsAndQuizSubscription",n.examsAndQuizSubscription),t.$store.commit("subscriptionStore/SetFileManagementSubscription",n.fileManagementSubscription),t.$store.commit("subscriptionStore/SetAppCustomizationSubscription",n.appCustomizationSubscription),t.$store.commit("subscriptionStore/SetOnLineLearningSubscription",n.onLineLearningSubscription),t.$store.commit("subscriptionStore/SetAllSubscriptions",n.allSubscriptions),t.$store.commit("subscriptionStore/SetPaymentStatus",n.paymentStatus),t.$store.commit("subscriptionStore/SetPaymentMessage",n.paymentMessage),t.$store.commit("subscriptionStore/SetReceiptNo",n.receiptNo));case 10:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;return r()(l.a.mark((function e(){var n;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,window.addEventListener("resize",t.onResizePage),t.$store.commit("authenticationStore/setActiveRoute","updatesubscription"),e.next=5,n.getSchoolSubscriptions();case 5:n.isUpdate=!0,console.log("isUpdate: ",n.isUpdate);case 7:case"end":return e.stop()}}),e)})))()}},z=y,M=n("a6c2"),P=n("19dc"),O=n("3676"),A=n("ef9c"),w=n("1169"),x=n("37e6"),q=n("63c1"),L=n.n(q),U=Object(M["a"])(z,i,o,!1,null,null,null);e["default"]=U.exports;L()(U,"components",{QIcon:P["a"],QTooltip:O["a"],QBtn:A["a"],QResizeObserver:w["a"],QSplitter:x["a"]})}}]);