(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"0538":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.showSpinner?e._e():a("Table",{attrs:{table_VM:e.tableVM},on:{updateItem:function(t){return e.updateItem(t)},deleteCoreValue:function(t){return e.deleteCoreValue(t)}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[a("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[a("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return a("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(a){e.$set(t,"isVisible",a)},expression:"dialog.isVisible"}},[a("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},r=[],o=(a("23bf"),a("06db"),a("7f7f"),a("8a81"),a("1c4c"),a("5df3"),a("cadf"),a("ac6a"),a("fa84")),i=a.n(o),s=a("967e"),l=a.n(s),c=a("3a3c"),u=a("9bff"),d=a("7ac8"),f=a("86fd");function m(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=h(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==a.return||a.return()}finally{if(s)throw o}}}}function h(e,t){if(e){if("string"===typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var v={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{Table:c["a"],MessageBox:u["a"]},data:function(){return{cardList:[],tableVM:{selectedCoreValue:{},title:"CoreValues",columns:[{name:"actions",label:"Actions",field:"",align:"left",type:""},{name:"title",label:"Title",field:"",align:"left",type:"text"}],rows:[],separator:"cell",createItem:"createCoreValue",updateItem:"updateItem",deleteItem:"deleteCoreValue",createItemUrl:"/create-core-value",updateItemUrl:"/update-core-value"},dialogs:[{title:"Delete Core Value",isVisible:!1,message:"Do you want to delete core value",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Core value deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}]}},methods:{okayEvent:function(){var e=this;e.isFetchTableDialog=!1},cancelEvent:function(){var e=this;e.isFetchTableDialog=!1},createCoreValue:function(){var e=this;console.log(e.tableVM.createItemUrl),this.$router.push(e.tableVM.createItemUrl)},updateItem:function(e){var t=this;this.$store.commit("CoreValueStore/SetSelectedCoreValue",e),this.$router.push(t.tableVM.updateItemUrl)},deleteCoreValue:function(e){var t=this;t.selectedCoreValue=e,console.log(t.selectedCoreValue),t.dialogs[0].isVisible=!0},cancelDialog:function(e){var t,a=this,n=-1,r=m(a.dialogs);try{for(r.s();!(t=r.n()).done;){var o=t.value;if(n++,o.title===e){a.dialogs[n].isVisible=!1;break}}}catch(i){r.e(i)}finally{r.f()}},delete:function(){var e=this;return i()(l.a.mark((function t(){var a,n,r,o,i,s,c,u;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,n=e.$store.getters["authenticationStore/IdentityModel"],r="corevalue/".concat(a.selectedCoreValueModel.id,"/").concat(n.schoolId),o={url:r},console.log("payload: ",o),t.next=7,Object(d["d"])(o);case 7:i=t.sent,s=i.data,c=s.message,u=s.success,u?a.dialogs[1].isVisible=!0:(a.dialogs[2].message=c,a.dialogs[2].isVisible=!0);case 10:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return i()(l.a.mark((function a(){var n,r,o,i,s;return l.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:console.log("payload: ",e),n=t,r=-1,o=m(n.dialogs),a.prev=4,o.s();case 6:if((i=o.n()).done){a.next=23;break}if(s=i.value,r++,s.title!==e){a.next=21;break}a.t0=e,a.next="Delete Core Value"===a.t0?13:"Success"===a.t0?16:19;break;case 13:return a.next=15,n.delete();case 15:return a.abrupt("break",19);case 16:return a.next=18,n._loadCoreValues();case 18:return a.abrupt("break",19);case 19:return n.dialogs[r].isVisible=!1,a.abrupt("break",23);case 21:a.next=6;break;case 23:a.next=28;break;case 25:a.prev=25,a.t1=a["catch"](4),o.e(a.t1);case 28:return a.prev=28,o.f(),a.finish(28);case 31:case"end":return a.stop()}}),a,null,[[4,25,28,31]])})))()},_loadCoreValues:function(){var e=this;return i()(l.a.mark((function t(){var a,n,r,o,i;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,n=e.$store.getters["authenticationStore/IdentityModel"],e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=5,Object(f["a"])(n.schoolId);case 5:r=t.sent,o=r.result,i=r.message,e.$store.commit("authenticationStore/setShowSpinner",!1),e.$store.commit("CoreValueStore/SetCoreValues",o),a.tableVM.rows=o,e.$store.commit("resultStore/SetResults",o),0===o.length&&(a.isFetchTableDialog=!0,a.message=i);case 13:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return i()(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,n=e.$store.getters["authenticationStore/IdentityModel"],"CEO"===n.schoolId&&(a.tableVM.createItemUrl="/super-admin-create-core-value",a.tableVM.updateItemUrl="/super-admin-update-core-value"),t.next=5,a._loadCoreValues();case 5:e.$store.commit("authenticationStore/setCreateURL",a.tableVM.createItemUrl),e.$store.commit("authenticationStore/setActiveColumns",a.tableVM.columns),e.$store.commit("authenticationStore/setActiveRows",a.tableVM.rows),e.$store.commit("authenticationStore/setNewRows",a.tableVM.rows);case 9:case"end":return t.stop()}}),t)})))()}},b=v,g=a("2877"),V=a("0d59"),w=a("24e8"),S=a("eebe"),y=a.n(S),k=Object(g["a"])(b,n,r,!1,null,null,null);t["default"]=k.exports;y()(k,"components",{QSpinner:V["a"],QDialog:w["a"]})}}]);