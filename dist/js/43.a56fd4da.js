(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[43],{c303:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.showSpinner?e._e():n("Table",{attrs:{table_VM:e.tableVM},on:{createItem:function(t){return e.createItem(t)},updateItem:function(t){return e.updateItem(t)},deleteItem:function(t){return e.deleteItem(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},a=[],s=(n("23bf"),n("06db"),n("7f7f"),n("8a81"),n("1c4c"),n("5df3"),n("cadf"),n("ac6a"),n("fa84")),o=n.n(s),i=n("967e"),c=n.n(i),l=n("3a3c"),u=n("9bff"),d=n("7ac8"),m=function(){var e=o()(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="lessonnotesection/files/".concat(t),e.next=3,Object(d["a"])({url:n});case 3:return r=e.sent,e.abrupt("return",{result:r.data,message:""});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function f(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=h(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,s=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw s}}}}function h(e,t){if(e){if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{Table:l["a"],MessageBox:u["a"]},data:function(){return{selectedCAAnswer:{},cardList:[],tableVM:{title:"Continuous Assessment Answers",columns:[{name:"actions",label:"Actions",field:"",align:"left",type:""},{name:"sectionTitle",label:"Section Title",field:"",align:"left",type:"text"}],rows:[],separator:"cell",createItem:"createItem",updateItem:"updateItem",deleteItem:"deleteItem",createItemUrl:"/create-ca-answer",updateItemUrl:"/update-ca-answer"},dialogs:[{title:"Delete Continuous Assessment Answer",isVisible:!1,message:"Do you want to delete continuous assessment answer",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Continuous assessment answer deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}],isFetchTableDialog:!1}},methods:{okayEvent:function(){var e=this;e.isFetchTableDialog=!1},cancelEvent:function(){var e=this;e.isFetchTableDialog=!1},createItem:function(){var e=this;console.log(e.tableVM.createItemUrl),this.$router.push(e.tableVM.createItemUrl)},updateItem:function(e){var t=this;this.$store.commit("cAAnswerStore/SetSelectedCAAnswer",e),this.$router.push(t.tableVM.updateItemUrl)},deleteItem:function(e){var t=this;t.selectedCAAnswer=e,console.log(t.selectedCAAnswer),t.dialogs[0].isVisible=!0},cancelDialog:function(e){var t,n=this,r=-1,a=f(n.dialogs);try{for(a.s();!(t=a.n()).done;){var s=t.value;if(r++,s.title===e){n.dialogs[r].isVisible=!1;break}}}catch(o){a.e(o)}finally{a.f()}},delete:function(){var e=this;return o()(c.a.mark((function t(){var n,r,a,s,o,i,l,u;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,r=e.$store.getters["authenticationStore/IdentityModel"],a="caanswer/".concat(n.selectedCAAnswer.id,"/").concat(r.schoolId),s={url:a},console.log("payload: ",s),t.next=7,Object(d["e"])(s);case 7:o=t.sent,i=o.data,l=i.message,u=i.success,u?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=l,n.dialogs[2].isVisible=!0);case 10:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return o()(c.a.mark((function n(){var r,a,s,o,i;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),r=t,a=-1,s=f(r.dialogs),n.prev=4,s.s();case 6:if((o=s.n()).done){n.next=23;break}if(i=o.value,a++,i.title!==e){n.next=21;break}n.t0=e,n.next="Delete Continuous Assessment Answer"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,r.delete();case 15:return n.abrupt("break",19);case 16:return n.next=18,r._loadCAAnswers();case 18:return n.abrupt("break",19);case 19:return r.dialogs[a].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),s.e(n.t1);case 28:return n.prev=28,s.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()},_loadCAAnswers:function(){var e=this;return o()(c.a.mark((function t(){var n,r,a,s,o;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,r=e.$store.getters["authenticationStore/IdentityModel"],e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=5,m(r.schoolId);case 5:a=t.sent,s=a.result,o=a.message,e.$store.commit("authenticationStore/setShowSpinner",!1),e.$store.commit("cAAnswerStore/SetCAAnswers",s),n.tableVM.rows=s,0===s.length&&(n.isFetchTableDialog=!0,n.message=o);case 12:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return o()(c.a.mark((function t(){var n,r;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,r=e.$store.getters["authenticationStore/IdentityModel"],"CEO"===r.schoolId&&(n.tableVM.createItemUrl="/super-admin-create-ca-answer",n.tableVM.updateItemUrl="/super-admin-update-ca-answer"),t.next=5,n._loadCAAnswers();case 5:e.$store.commit("authenticationStore/setCreateURL",n.tableVM.createItemUrl),e.$store.commit("authenticationStore/setActiveColumns",n.tableVM.columns),e.$store.commit("authenticationStore/setActiveRows",n.tableVM.rows),e.$store.commit("authenticationStore/setNewRows",n.tableVM.rows),e.$store.commit("authenticationStore/setIsError",!1),e.$store.commit("authenticationStore/setErrorMessages","");case 11:case"end":return t.stop()}}),t)})))()}},w=b,g=n("2877"),v=n("0d59"),S=n("24e8"),A=n("eebe"),y=n.n(A),k=Object(g["a"])(w,r,a,!1,null,null,null);t["default"]=k.exports;y()(k,"components",{QSpinner:v["a"],QDialog:S["a"]})}}]);