(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{a259:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Table",{attrs:{table_VM:e.tableVM},on:{updateItem:function(t){return e.updateItem(t)},deleteVision:function(t){return e.deleteVision(t)}}}),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},i=[],o=(n("23bf"),n("06db"),n("7f7f"),n("8a81"),n("1c4c"),n("5df3"),n("cadf"),n("ac6a"),n("fa84")),r=n.n(o),s=n("967e"),l=n.n(s),c=n("3a3c"),u=n("9bff"),d=n("7ac8"),f=n("04a5");function b(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=m(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){s=!0,o=e},f:function(){try{r||null==n.return||n.return()}finally{if(s)throw o}}}}function m(e,t){if(e){if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var g={components:{Table:c["a"],MessageBox:u["a"]},data:function(){return{cardList:[],tableVM:{selectedVision:{},title:"Visions",columns:[{name:"actions",label:"Actions",field:"",align:"left",type:""},{name:"title",label:"Title",field:"",align:"left",type:"text"}],rows:[],separator:"cell",createItem:"createVision",updateItem:"updateItem",deleteItem:"deleteVision",createItemUrl:"/create-vision",updateItemUrl:"/update-vision"},dialogs:[{title:"Delete Vision",isVisible:!1,message:"Do you want to delete a vision",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Vision deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}]}},methods:{okayEvent:function(){var e=this;e.isFetchTableDialog=!1},cancelEvent:function(){var e=this;e.isFetchTableDialog=!1},createVision:function(){var e=this;console.log(e.tableVM.createItemUrl),this.$router.push(e.tableVM.createItemUrl)},updateItem:function(e){var t=this;this.$store.commit("VisionStore/SetSelectedVision",e),this.$router.push(t.tableVM.updateItemUrl)},deleteVision:function(e){var t=this;t.selectedVision=e,console.log(t.selectedVision),t.dialogs[0].isVisible=!0},cancelDialog:function(e){var t,n=this,a=-1,i=b(n.dialogs);try{for(i.s();!(t=i.n()).done;){var o=t.value;if(a++,o.title===e){n.dialogs[a].isVisible=!1;break}}}catch(r){i.e(r)}finally{i.f()}},delete:function(){var e=this;return r()(l.a.mark((function t(){var n,a,i,o,r,s,c,u;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a=e.$store.getters["authenticationStore/IdentityModel"],i="vision/".concat(n.selectedVisionModel.id,"/").concat(a.schoolId),o={url:i},console.log("payload: ",o),t.next=7,Object(d["d"])(o);case 7:r=t.sent,s=r.data,c=s.message,u=s.success,u?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=c,n.dialogs[2].isVisible=!0);case 10:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return r()(l.a.mark((function n(){var a,i,o,r,s;return l.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),a=t,i=-1,o=b(a.dialogs),n.prev=4,o.s();case 6:if((r=o.n()).done){n.next=23;break}if(s=r.value,i++,s.title!==e){n.next=21;break}n.t0=e,n.next="Delete Vision"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,a.delete();case 15:return n.abrupt("break",19);case 16:return n.next=18,a._loadVisions();case 18:return n.abrupt("break",19);case 19:return a.dialogs[i].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),o.e(n.t1);case 28:return n.prev=28,o.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()},_loadVisions:function(){var e=this;return r()(l.a.mark((function t(){var n,a,i,o,r;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a=e.$store.getters["authenticationStore/IdentityModel"],t.next=4,Object(f["a"])(a.schoolId);case 4:i=t.sent,o=i.result,r=i.message,e.$store.commit("VisionStore/SetVisions",o),n.tableVM.rows=o,e.$store.commit("resultStore/SetResults",o),0===o.length&&(n.isFetchTableDialog=!0,n.message=r);case 11:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return r()(l.a.mark((function t(){var n;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,t.next=3,n._loadVisions();case 3:e.$store.commit("authenticationStore/setCreateURL",n.tableVM.createItemUrl),e.$store.commit("authenticationStore/setActiveColumns",n.tableVM.columns),e.$store.commit("authenticationStore/setActiveRows",n.tableVM.rows),e.$store.commit("authenticationStore/setNewRows",n.tableVM.rows);case 7:case"end":return t.stop()}}),t)})))()}},p=g,h=n("2877"),V=n("24e8"),y=n("eebe"),w=n.n(y),k=Object(h["a"])(p,a,i,!1,null,null,null);t["default"]=k.exports;w()(k,"components",{QDialog:V["a"]})}}]);