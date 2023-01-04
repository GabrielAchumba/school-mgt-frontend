(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[78],{f630:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.showSpinner?e._e():n("Table",{attrs:{table_VM:e.tableVM},on:{createLevel:function(t){return e.createLevel(t)},updateLevel:function(t){return e.updateLevel(t)},deleteLevel:function(t){return e.deleteLevel(t)},deleteAllItems:function(t){return e.deleteLevels(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},a=[],s=(n("23bf"),n("06db"),n("7f7f"),n("8a81"),n("1c4c"),n("5df3"),n("cadf"),n("ac6a"),n("456d"),n("d25f"),n("9986"),n("8e6e"),n("c47a")),o=n.n(s),i=n("fa84"),l=n.n(i),c=(n("6d67"),n("967e")),u=n.n(c),d=n("3a3c"),v=n("9bff"),f=n("39b2"),p=n("a776");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=g(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,s=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw s}}}}function g(e,t){if(e){if("string"===typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{Table:d["a"],MessageBox:v["a"]},data:function(){return{tableVM:{selectedLevel:{},title:"Levels",columns:[{name:"sn",label:"SN",field:"",align:"left",type:"text"},{name:"actions",label:"Actions",field:"",align:"left",type:""},{name:"type",label:"Type of Level",field:"",align:"left",type:"text"}],rows:[],separator:"cell",createItem:"createLevel",updateItem:"updateLevel",deleteItem:"deleteLevel",createItemUrl:"/create-level",updateItemUrl:"/update-level",importURL:"/import-levels"},dialogs:[{title:"Delete Level",isVisible:!1,message:"Do you want to delete a level",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Level deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Delete Levels",isVisible:!1,message:"Do you want to delete levels",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Delete Success",isVisible:!1,message:"Levels deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Delete Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}],ids:[]}},methods:{okayEvent:function(){var e=this;e.isFetchTableDialog=!1},cancelEvent:function(){var e=this;e.isFetchTableDialog=!1},createLevel:function(){var e=this;console.log(e.tableVM.createItemUrl),this.$router.push(e.tableVM.createItemUrl)},updateLevel:function(e){var t=this;this.$store.commit("levelStore/SetSelectedLevel",e),this.$router.push(t.tableVM.updateItemUrl)},deleteLevel:function(e){var t=this;t.selectedLevel=e,console.log(t.selectedLevel),t.dialogs[0].isVisible=!0},cancelDialog:function(e){var t,n=this,r=-1,a=h(n.dialogs);try{for(a.s();!(t=a.n()).done;){var s=t.value;if(r++,s.title===e){n.dialogs[r].isVisible=!1;break}}}catch(o){a.e(o)}finally{a.f()}},deleteLevels:function(e){console.log("checkBoxModels: ",e);var t=this;t.ids=[];var n,r=-1,a=h(e);try{for(a.s();!(n=a.n()).done;){var s=n.value;r++,"Agreed"===s&&t.ids.push(t.tableVM.rows[r].id)}}catch(o){a.e(o)}finally{a.f()}console.log("context.ids: ",t.ids)},delete:function(){var e=this;return l()(u.a.mark((function t(){var n,r,a,s,o,i,l,c;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,r=e.$store.getters["authenticationStore/IdentityModel"],a="level/".concat(n.selectedLevel.id,"/").concat(r.schoolId),s={url:a},t.next=6,Object(f["d"])(s);case 6:o=t.sent,i=o.data,l=i.message,c=i.success,c?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=l,n.dialogs[2].isVisible=!0);case 9:case"end":return t.stop()}}),t)})))()},deleteAll:function(){var e=this;return l()(u.a.mark((function t(){var n,r,a,s,o,i,l,c;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,r=e.$store.getters["authenticationStore/IdentityModel"],a="level/deletemany",s={url:a,req:{ids:n.ids,schoolId:r.schoolId}},t.next=6,Object(f["b"])(s);case 6:o=t.sent,i=o.data,l=i.message,c=i.success,c?n.dialogs[4].isVisible=!0:(n.dialogs[5].message=l,n.dialogs[5].isVisible=!0);case 9:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return l()(u.a.mark((function n(){var r,a,s,o,i;return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t,a=-1,s=h(r.dialogs),n.prev=3,s.s();case 5:if((o=s.n()).done){n.next=28;break}if(i=o.value,a++,i.title!==e){n.next=26;break}n.t0=e,n.next="Delete Level"===n.t0?12:"Success"===n.t0?15:"Delete Levels"===n.t0?18:"Delete Success"===n.t0?21:24;break;case 12:return n.next=14,r.delete();case 14:return n.abrupt("break",24);case 15:return n.next=17,r._loadLevels();case 17:return n.abrupt("break",24);case 18:return n.next=20,r.deleteAll();case 20:return n.abrupt("break",24);case 21:return n.next=23,r._loadLevels();case 23:return n.abrupt("break",24);case 24:return r.dialogs[a].isVisible=!1,n.abrupt("break",28);case 26:n.next=5;break;case 28:n.next=33;break;case 30:n.prev=30,n.t1=n["catch"](3),s.e(n.t1);case 33:return n.prev=33,s.f(),n.finish(33);case 36:case"end":return n.stop()}}),n,null,[[3,30,33,36]])})))()},_loadLevels:function(){var e=this;return l()(u.a.mark((function t(){var n,r,a,s,o;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,r=e.$store.getters["authenticationStore/IdentityModel"],e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=5,Object(p["a"])(r.schoolId);case 5:a=t.sent,s=a.result,o=a.message,e.$store.commit("authenticationStore/setShowSpinner",!1),e.$store.commit("levelStore/SetLevels",s),n.tableVM.rows=s.map((function(e,t){return m(m({sn:t+1},e),{},{route:"/level-landing"})})),console.log("context.tableVM.rows: ",n.tableVM.rows),0===s.length&&(n.isFetchTableDialog=!0,n.message=o);case 13:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return l()(u.a.mark((function t(){var n,r;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,r=e.$store.getters["authenticationStore/IdentityModel"],"CEO"===r.schoolId&&(n.tableVM.createItemUrl="/super-admin-create-level",n.tableVM.updateItemUrl="/super-admin-update-level"),t.next=5,n._loadLevels();case 5:e.$store.commit("authenticationStore/setCreateURL",n.tableVM.createItemUrl),e.$store.commit("authenticationStore/setActiveColumns",n.tableVM.columns),e.$store.commit("authenticationStore/setActiveRows",n.tableVM.rows),e.$store.commit("authenticationStore/setNewRows",n.tableVM.rows),e.$store.commit("authenticationStore/setActiveRoute","level"),e.$store.commit("authenticationStore/setImportURL",n.tableVM.importURL),e.$store.commit("authenticationStore/setIsError",!1),e.$store.commit("authenticationStore/setErrorMessages","");case 13:case"end":return t.stop()}}),t)})))()}},S=y,k=n("2877"),L=n("0d59"),D=n("24e8"),V=n("eebe"),x=n.n(V),I=Object(k["a"])(S,r,a,!1,null,null,null);t["default"]=I.exports;x()(I,"components",{QSpinner:L["a"],QDialog:D["a"]})}}]);