(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[73],{"30d5":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row text-center flex full-Width"},[o("div",{staticClass:"col-4 q-ma-sm q-pa-sm"},[o("q-card",[o("p",{staticClass:"q-pa-sm"},[t._v("Full Names of Students")]),o("hr"),o("q-scroll-area",{staticStyle:{height:"500px"}},[o("q-option-group",{staticClass:"full-Width text-left",attrs:{options:t.GroupedCheckBox.list,type:"checkbox"},on:{change:t.onGroupCheckBoxModelChanged},model:{value:t.GroupedCheckBox.group,callback:function(e){t.$set(t.GroupedCheckBox,"group",e)},expression:"GroupedCheckBox.group"}})],1)],1)],1),o("div",{staticClass:"col-6 q-ma-sm q-pa-sm"},[o("span",[o("p",{staticClass:"q-ma-none text-left"},[t._v("Subscription Plan")]),o("q-select",{staticClass:"col-7 q-ma-none",attrs:{color:"accent",outlined:"","label-color":"accent","option-disable":"inactive",options:t.qSelect.list,"option-value":"id","option-label":"type",name:"type","emit-value":"","map-options":""},on:{input:function(e){return t.onQSelectItemValueChanged(t.qSelect)}},model:{value:t.qSelect.value,callback:function(e){t.$set(t.qSelect,"value",e)},expression:"qSelect.value"}})],1),o("div",{staticClass:"text-right"},[o("q-btn",{staticClass:"q-ma-sm bg-accent text-primary",attrs:{label:t.qBtn.label,type:"button",size:"md","no-caps":""},on:{click:function(e){return t.ClickAction(t.qBtn.name)}}})],1),o("makepayment")],1)])},a=[],l=o("c47a"),r=o.n(l),c=o("fa84"),s=o.n(c),i=o("967e"),u=o.n(i),p=(o("6d67"),o("456d"),o("8a81"),o("d25f"),o("9986"),o("8e6e"),o("23bf"),o("06db"),o("7f7f"),o("1c4c"),o("5df3"),o("cadf"),o("ac6a"),o("1c1ce")),m=o("802c"),d={title:"Instructors",qSelects:[],qInputs:[],qBtns:[{label:"Done",name:"closeTeachersDialog"}],qDates:[],GroupedCheckBoxes:[{isGroupedCheckBox:!0,isExpanded:!0,list:[],group:[],label:"Teachers"}],qToggles:[{label:"All Students",name:!1,visible:!1}]};function f(t,e){var o="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=b(t))||e&&t&&"number"===typeof t.length){o&&(t=o);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r=!0,c=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return r=t.done,t},e:function(t){c=!0,l=t},f:function(){try{r||null==o.return||o.return()}finally{if(c)throw l}}}}function b(t,e){if(t){if("string"===typeof t)return h(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function S(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function v(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?S(Object(o),!0).forEach((function(e){r()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):S(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var g={components:{makepayment:m["a"]},data:function(){return{nStudents:0,visible:!0,qSelect:{label:"",value:"",type:"",list:[{value:1,type:"90 Days",label:"90 Days",amount:1e3},{value:2,type:"180 Days",label:"180 Days",amount:1800},{value:3,type:"360 Days",label:"360 Days",amount:2500}],actionName:"typeOfInstructor",visible:!0},qBtn:{label:"Make Payment",name:"makePayment"},GroupedCheckBox:{label:"",value:"",list:[],group:[]},totalAmount:0,totalAmountTitle:"",totalAmountDescription:"",selectedSubscriptionPlan:{},selectStudentsForm:d}},methods:{onGroupCheckBoxModelChanged:function(t){var e=this;console.log("val: ",t),console.log("GroupedCheckBox.group: ",e.GroupedCheckBox.group),e.CalculateNumberOfStudents(),e.SetTotalAmountViewProps(),console.log("totalAmount: ",e.totalAmount),console.log("totalAmountTitle: ",e.totalAmountTitle),console.log("totalAmountDescription: ",e.totalAmountDescription)},updateTotalAmountViewProps:function(){var t=this;this.$store.commit("subscriptionStore/SetTotalAmount",t.totalAmount),this.$store.commit("subscriptionStore/SetTotalAmountTitle",t.totalAmountTitle),this.$store.commit("subscriptionStore/SetTotalAmountDescription",t.totalAmountDescription)},onQSelectItemValueChanged:function(t){var e=this;console.log("_qSelect: ",t),this.$store.commit("subscriptionStore/SetSelectedSubscriptionPlan",t),e.CalculateNumberOfStudents(),e.SetTotalAmountViewProps(),console.log("totalAmount: ",e.totalAmount),console.log("totalAmountTitle: ",e.totalAmountTitle),console.log("totalAmountDescription: ",e.totalAmountDescription)},ClickAction:function(t){var e=this;console.log("actionName: ",t),e.CalculateNumberOfStudents(),e.SetTotalAmountViewProps(),this.$router.push("/total-amount")},_loadSubjects:function(){var t=this;return s()(u.a.mark((function e(){var o,n,a,l;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t,n=t.$store.getters["authenticationStore/IdentityModel"],e.next=4,Object(p["a"])(n.schoolId);case 4:a=e.sent,l=a.result,t.$store.commit("subjectStore/SetSubjects",l),o.GroupedCheckBox.list=l.map((function(t){return v(v({},t),{},{value:t.id,label:"".concat(t.firstName,"  ").concat(t.lastName)})})),o.selectedSubscriptionPlan=t.$store.getters["subscriptionStore/selectedSubscriptionPlan"],o.qSelect.value=o.selectedSubscriptionPlan.label,o.CalculateNumberOfStudents(),o.SetTotalAmountViewProps(),console.log("totalAmount: ",o.totalAmount),console.log("totalAmountTitle: ",o.totalAmountTitle),console.log("totalAmountDescription: ",o.totalAmountDescription);case 15:case"end":return e.stop()}}),e)})))()},SetTotalAmountViewProps:function(){var t=this;t.totalAmount=t.selectedSubscriptionPlan.amount*t.nStudents,t.totalAmountTitle="".concat(t.selectedSubscriptionPlan.label," Subscription Plan Total Amount"),t.totalAmountDescription="The total amount to be paid for ".concat(t.nStudents," students is ₦").concat(t.totalAmount),t.updateTotalAmountViewProps()},CalculateNumberOfStudents:function(){var t,e=this,o=f(e.GroupedCheckBox.group);try{for(o.s();!(t=o.n()).done;){var n=t.value;if(1===n.value)return void(e.nStudents=e.GroupedCheckBox.list.length-1)}}catch(a){o.e(a)}finally{o.f()}e.nStudents=e.GroupedCheckBox.group.length}},created:function(){var t=this;return s()(u.a.mark((function e(){var o;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t,e.next=3,o._loadSubjects();case 3:case"end":return e.stop()}}),e)})))()}},y=g,A=o("2877"),C=o("f09f"),x=o("4983"),w=o("9f0a"),k=o("ddd8"),q=o("9c40"),O=o("eebe"),P=o.n(O),T=Object(A["a"])(y,n,a,!1,null,null,null);e["default"]=T.exports;P()(T,"components",{QCard:C["a"],QScrollArea:x["a"],QOptionGroup:w["a"],QSelect:k["a"],QBtn:q["a"]})}}]);