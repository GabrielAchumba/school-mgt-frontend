(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[97],{fac6:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-pa-sm"},[t.setIsResponsive?n("div",[n("div",{staticClass:"row"},[n("ResultsSubscription",{staticClass:"col-12",on:{onResultScriptionValueChange:function(e){return t.onResultScriptionValueChange(e)},onStudentsSelected:function(e){return t.onStudentsSelected(e)}}}),n("ExamsQuizSubscription",{staticClass:"col-12",on:{onExamsQuizScriptionValueChange:function(e){return t.onExamsQuizScriptionValueChange(e)}}}),n("FileManagementSubscription",{staticClass:"col-12",on:{onFileManagementScriptionValueChange:function(e){return t.onFileManagementScriptionValueChange(e)}}}),n("CustomizeAppSubscription",{staticClass:"col-12",on:{onCustomizationScriptionValueChange:function(e){return t.onCustomizationScriptionValueChange(e)}}}),n("OnlineLearning",{staticClass:"col-12",on:{onOnlineLearningScriptionValueChange:function(e){return t.onOnlineLearningScriptionValueChange(e)}}}),n("div",{staticClass:"col-12 q-py-sm text-right"},[t.isMobile?n("q-icon",{staticClass:"q-pa-sm text-accent",attrs:{name:t.invoiceBtn.icon,size:"30px"},on:{click:t.showPaymentPage}},[n("q-tooltip",[t._v("\n                        "+t._s(t.invoiceBtn.label)+"\n                        ")])],1):n("q-btn",{staticClass:"q-ma-sm bg-accent text-primary",attrs:{label:t.invoiceBtn.label,type:"button",size:"md",icon:t.invoiceBtn.icon,"no-caps":""},on:{click:t.showPaymentPage}})],1)],1),n("div",{staticClass:"row"},[t.isInvoice?n("Invoice",{staticClass:"col-12"}):t._e(),t.isPaymentPlatform?n("MakePayment",{staticClass:"col-12",on:{getPaymentResponse:function(e){return t.getPaymentResponse(e)}}}):t._e()],1)]):n("div",[n("q-resize-observer",{attrs:{debounce:0},on:{resize:t.onResize}}),n("q-splitter",{style:t.splitterStyle,attrs:{id:"photos",limits:[0,100],"before-class":"overflow-hidden","after-class":"overflow-hidden"},scopedSlots:t._u([{key:"before",fn:function(){return[n("div",{staticClass:"row"},[n("ResultsSubscription",{staticClass:"col-12",on:{onResultScriptionValueChange:function(e){return t.onResultScriptionValueChange(e)},onStudentsSelected:function(e){return t.onStudentsSelected(e)}}}),n("ExamsQuizSubscription",{staticClass:"col-12",on:{onExamsQuizScriptionValueChange:function(e){return t.onExamsQuizScriptionValueChange(e)}}}),n("FileManagementSubscription",{staticClass:"col-12",on:{onFileManagementScriptionValueChange:function(e){return t.onFileManagementScriptionValueChange(e)}}}),n("CustomizeAppSubscription",{staticClass:"col-12",on:{onCustomizationScriptionValueChange:function(e){return t.onCustomizationScriptionValueChange(e)}}}),n("OnlineLearning",{staticClass:"col-12",on:{onOnlineLearningScriptionValueChange:function(e){return t.onOnlineLearningScriptionValueChange(e)}}}),n("div",{staticClass:"col-12 q-py-sm text-right"},[t.isMobile?n("q-icon",{staticClass:"q-pa-sm text-accent",attrs:{name:t.invoiceBtn.icon,size:"30px"},on:{click:t.showPaymentPage}},[n("q-tooltip",[t._v("\n                        "+t._s(t.invoiceBtn.label)+"\n                        ")])],1):n("q-btn",{staticClass:"q-ma-sm bg-accent text-primary",attrs:{label:t.invoiceBtn.label,type:"button",size:"md",icon:t.invoiceBtn.icon,"no-caps":""},on:{click:t.showPaymentPage}})],1)],1)]},proxy:!0},{key:"after",fn:function(){return[n("div",{staticClass:"row"},[t.isInvoice?n("Invoice",{staticClass:"col-12"}):t._e(),t.isPaymentPlatform?n("MakePayment",{staticClass:"col-12",on:{getPaymentResponse:function(e){return t.getPaymentResponse(e)}}}):t._e()],1)]},proxy:!0}]),model:{value:t.splitterModel,callback:function(e){t.splitterModel=e},expression:"splitterModel"}})],1)])},o=[],s=(n("456d"),n("8a81"),n("d25f"),n("9986"),n("8e6e"),n("c47a")),a=n.n(s),r=(n("c5f6"),n("7417")),c=n("085c"),u=n("6c36"),l=n("e74b"),p=n("42a7"),m=n("5702"),S=n("802c");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v={computed:{setIsResponsive:function(){var t=window.innerWidth;return t<700},splitterStyle:function(){var t=this;return{height:"100vh",width:"".concat(t.width,"px")}}},components:{ResultsSubscription:r["a"],ExamsQuizSubscription:c["a"],FileManagementSubscription:u["a"],CustomizeAppSubscription:l["a"],Invoice:m["a"],MakePayment:S["a"],OnlineLearning:p["a"]},data:function(){return{width:400,splitterModel:30,isMobile:!1,isInvoice:!0,isPaymentPlatform:!1,invoiceBtn:{label:"Configure",icon:"payment"},resultSubscription:{variable:"",value:"",amount:0},examsAndQuizSubscription:{variable:"",value:"",amount:0},fileManagementSubscription:{variable:"",value:"",amount:0},appCustomizationSubscription:{variable:"",value:"",amount:0},onLineLearningSubscription:{variable:"",value:"",amount:0},allSubscriptions:{variable:"",value:"",amount:0},paymentStatus:{variable:"Payment Status",value:"NOT PAID"},paymentMessage:{variable:"Message",value:"Payment In Progress"},receiptNo:{variable:"Receipt Number",value:""},totalAmount:0,numberOfStudents:0,studentIds:[]}},methods:{onResize:function(t){var e=this;e.width=t.width},onResizePage:function(t){var e=window.innerWidth,n=this;n.isMobile=e<700,console.log("context.isMobile: ",n.isMobile)},onStudentsSelected:function(t){var e=this;e.numberOfStudents=Number(t.studentsForm.GroupedCheckBoxes[0].group.length),this.$store.commit("subscriptionStore/SetStudentIds",t.studentsForm.GroupedCheckBoxes[0].group)},getPaymentResponse:function(t){var e=this;e.resultSubscription=g({},t.resultSubscription),e.examsAndQuizSubscription=g({},t.examsAndQuizSubscription),e.fileManagementSubscription=g({},t.fileManagementSubscription),e.appCustomizationSubscription=g({},t.appCustomizationSubscription),e.onLineLearningSubscription=g({},t.onLineLearningSubscription),e.allSubscriptions=g({},t.allSubscriptions),e.paymentStatus=g({},t.paymentStatus),e.paymentMessage=g({},t.paymentMessage),e.receiptNo=g({},t.receiptNo),this.$store.commit("subscriptionStore/SetResultSubscription",e.resultSubscription),this.$store.commit("subscriptionStore/SetExamsAndQuizSubscription",e.examsAndQuizSubscription),this.$store.commit("subscriptionStore/SetFileManagementSubscription",e.fileManagementSubscription),this.$store.commit("subscriptionStore/SetAppCustomizationSubscription",e.appCustomizationSubscription),this.$store.commit("subscriptionStore/SetOnLineLearningSubscription",e.onLineLearningSubscription),this.$store.commit("subscriptionStore/SetAllSubscriptions",e.allSubscriptions),this.$store.commit("subscriptionStore/SetPaymentStatus",e.paymentStatus),this.$store.commit("subscriptionStore/SetPaymentMessage",e.paymentMessage),this.$store.commit("subscriptionStore/SetReceiptNo",e.receiptNo)},onResultScriptionValueChange:function(t){var e=this,n=Number(t.qSelect.amount)*e.numberOfStudents;e.resultSubscription={name:"RESULT",variable:"Results Analysis (".concat(t.qSelect.label,"):"),value:"₦".concat(n,".00"),amount:n},this.$store.commit("subscriptionStore/SetResultSubscription",e.resultSubscription),e.sumAllSubscriptions()},onExamsQuizScriptionValueChange:function(t){var e=this;e.examsAndQuizSubscription={name:"EXAMS & QUIZ",variable:"Exams & Quiz (".concat(t.qSelect.label,"):"),value:"₦".concat(t.qSelect.amount,".00"),amount:t.qSelect.amount},this.$store.commit("subscriptionStore/SetExamsAndQuizSubscription",e.examsAndQuizSubscription),e.sumAllSubscriptions()},onFileManagementScriptionValueChange:function(t){var e=this;e.fileManagementSubscription={name:"FILE MANAGEMENT",variable:"File Management (".concat(t.qSelect.label,"):"),value:"₦".concat(t.qSelect.amount,".00"),amount:t.qSelect.amount},this.$store.commit("subscriptionStore/SetFileManagementSubscription",e.fileManagementSubscription),e.sumAllSubscriptions()},onCustomizationScriptionValueChange:function(t){var e=this;e.appCustomizationSubscription={name:"APP CUSTOMIZATION",variable:"App Customization (".concat(t.qSelect.label,"):"),value:"₦".concat(t.qSelect.amount,".00"),amount:t.qSelect.amount},this.$store.commit("subscriptionStore/SetAppCustomizationSubscription",e.appCustomizationSubscription),e.sumAllSubscriptions()},onOnlineLearningScriptionValueChange:function(t){var e=this;e.onLineLearningSubscription={name:"ONLINE LEARNING",variable:"Online Learning (".concat(t.qSelect.label,"):"),value:"₦".concat(t.qSelect.amount,".00"),amount:t.qSelect.amount},this.$store.commit("subscriptionStore/SetOnLineLearningSubscription",e.onLineLearningSubscription),e.sumAllSubscriptions()},sumAllSubscriptions:function(){var t=this;t.totalAmount=t.resultSubscription.amount+t.fileManagementSubscription.amount+t.examsAndQuizSubscription.amount+t.appCustomizationSubscription.amount+t.onLineLearningSubscription.amount,t.allSubscriptions={name:"TOTAL AMOUNT",variable:"Total Amount:",value:"₦".concat(t.totalAmount,".00"),amount:t.totalAmount},this.$store.commit("subscriptionStore/SetAllSubscriptions",t.allSubscriptions)},showPaymentPage:function(){var t=this;!0===t.isInvoice?(t.isInvoice=!1,t.isPaymentPlatform=!0,t.invoiceBtn.icon="receipt"):(t.isInvoice=!0,t.isPaymentPlatform=!1,t.invoiceBtn.icon="payment")}},created:function(){window.addEventListener("resize",this.onResizePage),this.$store.commit("authenticationStore/setActiveRoute","createsubscription"),this.$store.commit("authenticationStore/setIsError",!1),this.$store.commit("authenticationStore/setErrorMessages","")}},h=v,d=n("2877"),f=n("0016"),C=n("05c0"),y=n("9c40"),z=n("3980"),P=n("8562"),M=n("eebe"),A=n.n(M),O=Object(d["a"])(h,i,o,!1,null,null,null);e["default"]=O.exports;A()(O,"components",{QIcon:f["a"],QTooltip:C["a"],QBtn:y["a"],QResizeObserver:z["a"],QSplitter:P["a"]})}}]);