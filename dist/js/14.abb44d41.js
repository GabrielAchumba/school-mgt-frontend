(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"34e7":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Table",{attrs:{table_VM:e.tableVM},on:{createAssessment:function(t){return e.createAssessment(t)},updateAssessment:function(t){return e.updateAssessment(t)},deleteAssessment:function(t){return e.deleteAssessment(t)}}}),e._l(e.dialogs,(function(t){return s("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(s){e.$set(t,"isVisible",s)},expression:"dialog.isVisible"}},[s("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},a=[],r=(s("23bf"),s("06db"),s("7f7f"),s("8a81"),s("1c4c"),s("5df3"),s("cadf"),s("ac6a"),s("fa84")),i=s.n(r),o=s("967e"),l=s.n(o),c=s("3a3c"),u=s("9bff"),d=s("39b2");function f(e,t){var s="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!s){if(Array.isArray(e)||(s=m(e))||t&&e&&"number"===typeof e.length){s&&(e=s);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,o=!1;return{s:function(){s=s.call(e)},n:function(){var e=s.next();return i=e.done,e},e:function(e){o=!0,r=e},f:function(){try{i||null==s.return||s.return()}finally{if(o)throw r}}}}function m(e,t){if(e){if("string"===typeof e)return b(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,n=new Array(t);s<t;s++)n[s]=e[s];return n}var g={components:{Table:c["a"],MessageBox:u["a"]},data:function(){return{tableVM:{selectedAssessment:{},title:"Assessments",columns:[{name:"type",label:"Type of Assessment",field:"",align:"left"},{name:"percentage",label:"Percentage",field:"",align:"left"},{name:"actions",label:"Actions",field:"",align:"left"}],rows:[],separator:"cell",createItem:"createAssessment",updateItem:"updateAssessment",deleteItem:"deleteAssessment",createItemUrl:"/create-assessment",updateItemUrl:"/update-assessment"},dialogs:[{title:"Delete Assessment",isVisible:!1,message:"Do you want to delete an Assessment",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Assessment deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}]}},methods:{okayEvent:function(){var e=this;e.isFetchTableDialog=!1},cancelEvent:function(){var e=this;e.isFetchTableDialog=!1},createAssessment:function(){var e=this;this.$router.push(e.tableVM.createItemUrl)},updateAssessment:function(e){var t=this;this.$store.commit("assessmentStore/SetSelectedAssessment",e),this.$router.push(t.tableVM.updateItemUrl)},deleteAssessment:function(e){var t=this;t.selectedAssessment=e,console.log(t.selectedAssessment),t.dialogs[0].isVisible=!0},cancelDialog:function(e){var t,s=this,n=-1,a=f(s.dialogs);try{for(a.s();!(t=a.n()).done;){var r=t.value;if(n++,r.title===e){s.dialogs[n].isVisible=!1;break}}}catch(i){a.e(i)}finally{a.f()}},delete:function(){var e=this;return i()(l.a.mark((function t(){var s,n,a,r,i,o,c,u;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e,n=e.$store.getters["authenticationStore/IdentityModel"],a="assessment/".concat(s.selectedAssessment.id,"/").concat(n.schoolId),r={url:a},console.log("payload: ",r),t.next=7,Object(d["d"])(r);case 7:i=t.sent,o=i.data,c=o.message,u=o.success,u?s.dialogs[1].isVisible=!0:(s.dialogs[2].message=c,s.dialogs[2].isVisible=!0);case 10:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return i()(l.a.mark((function s(){var n,a,r,i,o;return l.a.wrap((function(s){while(1)switch(s.prev=s.next){case 0:console.log("payload: ",e),n=t,a=-1,r=f(n.dialogs),s.prev=4,r.s();case 6:if((i=r.n()).done){s.next=23;break}if(o=i.value,a++,o.title!==e){s.next=21;break}s.t0=e,s.next="Delete Assessment"===s.t0?13:"Success"===s.t0?16:19;break;case 13:return s.next=15,n.delete();case 15:return s.abrupt("break",19);case 16:return s.next=18,n.loadAssessmentf();case 18:return s.abrupt("break",19);case 19:return n.dialogs[a].isVisible=!1,s.abrupt("break",23);case 21:s.next=6;break;case 23:s.next=28;break;case 25:s.prev=25,s.t1=s["catch"](4),r.e(s.t1);case 28:return s.prev=28,r.f(),s.finish(28);case 31:case"end":return s.stop()}}),s,null,[[4,25,28,31]])})))()},loadAssessmentf:function(){var e=this;return i()(l.a.mark((function t(){var s,n,a,r,i,o,c,u;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e,n=e.$store.getters["authenticationStore/IdentityModel"],a="assessment/".concat(n.schoolId),t.next=5,Object(d["a"])({url:a});case 5:r=t.sent,i=r.data,o=i.data,c=i.message,u=i.success,u?(s.tableVM.rows=o,e.$store.commit("assessmentStore/SetAssessments",o)):(s.isFetchTableDialog=!0,s.message=c);case 8:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return i()(l.a.mark((function t(){var s;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e,t.next=3,s.loadAssessmentf();case 3:e.$store.commit("authenticationStore/setCreateURL",s.tableVM.createItemUrl);case 4:case"end":return t.stop()}}),t)})))()}},p=g,v=s("2877"),h=s("24e8"),A=s("eebe"),y=s.n(A),k=Object(v["a"])(p,n,a,!1,null,null,null);t["default"]=k.exports;y()(k,"components",{QDialog:h["a"]})}}]);