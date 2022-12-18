(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[68],{eb64:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.showSpinner?e._e():n("Table",{attrs:{table_VM:e.tableVM},on:{createSession:function(t){return e.createSession(t)},updateSession:function(t){return e.updateSession(t)},deleteSession:function(t){return e.deleteSession(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},i=[],a=(n("23bf"),n("06db"),n("7f7f"),n("8a81"),n("1c4c"),n("5df3"),n("cadf"),n("ac6a"),n("fa84")),o=n.n(a),r=n("967e"),c=n.n(r),l=n("3a3c"),u=n("9bff"),d=n("39b2"),f=n("9ac7");function p(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=m(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var s=0,i=function(){};return{s:i,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,r=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){r=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(r)throw a}}}}function m(e,t){if(e){if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}var b={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{Table:l["a"],MessageBox:u["a"]},data:function(){return{tableVM:{selectedSession:{},title:"Sessions",columns:[{name:"actions",label:"Actions",field:"",align:"left",type:""},{name:"type",label:"Type of Session",field:"",align:"left",type:"text"}],rows:[],separator:"cell",createItem:"createSession",updateItem:"updateSession",deleteItem:"deleteSession",createItemUrl:"/create-session",updateItemUrl:"/update-session",importURL:"/import-sessions"},dialogs:[{title:"Delete Session",isVisible:!1,message:"Do you want to delete a session",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Session deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}]}},methods:{okayEvent:function(){var e=this;e.isFetchTableDialog=!1},cancelEvent:function(){var e=this;e.isFetchTableDialog=!1},createSession:function(){var e=this;console.log(e.tableVM.createItemUrl),this.$router.push(e.tableVM.createItemUrl)},updateSession:function(e){var t=this;this.$store.commit("sessionStore/SetSelectedSession",e),this.$router.push(t.tableVM.updateItemUrl)},deleteSession:function(e){var t=this;t.selectedSession=e,console.log(t.selectedSession),t.dialogs[0].isVisible=!0},cancelDialog:function(e){var t,n=this,s=-1,i=p(n.dialogs);try{for(i.s();!(t=i.n()).done;){var a=t.value;if(s++,a.title===e){n.dialogs[s].isVisible=!1;break}}}catch(o){i.e(o)}finally{i.f()}},delete:function(){var e=this;return o()(c.a.mark((function t(){var n,s,i,a,o,r,l,u;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,s=e.$store.getters["authenticationStore/IdentityModel"],i="session/".concat(n.selectedSession.id,"/").concat(s.schoolId),a={url:i},t.next=6,Object(d["d"])(a);case 6:o=t.sent,r=o.data,l=r.message,u=r.success,u?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=l,n.dialogs[2].isVisible=!0);case 9:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return o()(c.a.mark((function n(){var s,i,a,o,r;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:s=t,i=-1,a=p(s.dialogs),n.prev=3,a.s();case 5:if((o=a.n()).done){n.next=22;break}if(r=o.value,i++,r.title!==e){n.next=20;break}n.t0=e,n.next="Delete Session"===n.t0?12:"Success"===n.t0?15:18;break;case 12:return n.next=14,s.delete();case 14:return n.abrupt("break",18);case 15:return n.next=17,s._loadSessions();case 17:return n.abrupt("break",18);case 18:return s.dialogs[i].isVisible=!1,n.abrupt("break",22);case 20:n.next=5;break;case 22:n.next=27;break;case 24:n.prev=24,n.t1=n["catch"](3),a.e(n.t1);case 27:return n.prev=27,a.f(),n.finish(27);case 30:case"end":return n.stop()}}),n,null,[[3,24,27,30]])})))()},_loadSessions:function(){var e=this;return o()(c.a.mark((function t(){var n,s,i,a,o;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,s=e.$store.getters["authenticationStore/IdentityModel"],e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=5,Object(f["a"])(s.schoolId);case 5:i=t.sent,a=i.result,o=i.message,e.$store.commit("authenticationStore/setShowSpinner",!1),e.$store.commit("sessionStore/SetSessions",a),n.tableVM.rows=a,0===a.length&&(n.isFetchTableDialog=!0,n.message=o);case 12:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return o()(c.a.mark((function t(){var n,s;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,s=e.$store.getters["authenticationStore/IdentityModel"],"CEO"===s.schoolId&&(n.tableVM.createItemUrl="/super-admin-create-session",n.tableVM.updateItemUrl="/super-admin-update-session",n.tableVM.importURL="/super-admin-import-sessions"),t.next=5,n._loadSessions();case 5:e.$store.commit("authenticationStore/setCreateURL",n.tableVM.createItemUrl),e.$store.commit("authenticationStore/setActiveColumns",n.tableVM.columns),e.$store.commit("authenticationStore/setActiveRows",n.tableVM.rows),e.$store.commit("authenticationStore/setNewRows",n.tableVM.rows),e.$store.commit("authenticationStore/setActiveRoute","sessions"),e.$store.commit("authenticationStore/setImportURL",n.tableVM.importURL);case 11:case"end":return t.stop()}}),t)})))()}},S=b,v=n("2877"),g=n("0d59"),w=n("24e8"),y=n("eebe"),k=n.n(y),V=Object(v["a"])(S,s,i,!1,null,null,null);t["default"]=V.exports;k()(V,"components",{QSpinner:g["a"],QDialog:w["a"]})}}]);