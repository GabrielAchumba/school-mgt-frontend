(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{db64:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.showSpinner?e._e():n("Table",{attrs:{table_VM:e.tableVM},on:{updateItem:function(t){return e.updateItem(t)},deleteMission:function(t){return e.deleteMission(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},s=[],a=(n("d38f"),n("b7dd"),n("1a43"),n("0012"),n("6212"),n("950c"),n("2bf3"),n("5b54"),n("549c")),r=n.n(a),o=n("52b5"),c=n.n(o),l=n("785a"),u=n("0588"),d=n("0601"),m=n("4df8");function h(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=f(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,s=function(){};return{s:s,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){o=!0,a=e},f:function(){try{r||null==n.return||n.return()}finally{if(o)throw a}}}}function f(e,t){if(e){if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var b={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{Table:l["a"],MessageBox:u["a"]},data:function(){return{cardList:[],tableVM:{selectedMission:{},title:"Missions",columns:[{name:"actions",label:"Actions",field:"",align:"left",type:""},{name:"title",label:"Title",field:"",align:"left",type:"text"}],rows:[],separator:"cell",createItem:"createMission",updateItem:"updateItem",deleteItem:"deleteMission",createItemUrl:"/create-mission",updateItemUrl:"/update-mission"},dialogs:[{title:"Delete Mission",isVisible:!1,message:"Do you want to delete a mission",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Mission deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}]}},methods:{okayEvent:function(){var e=this;e.isFetchTableDialog=!1},cancelEvent:function(){var e=this;e.isFetchTableDialog=!1},createMission:function(){var e=this;console.log(e.tableVM.createItemUrl),this.$router.push(e.tableVM.createItemUrl)},updateItem:function(e){var t=this;this.$store.commit("MissionStore/SetSelectedMission",e),this.$router.push(t.tableVM.updateItemUrl)},deleteMission:function(e){var t=this;t.selectedMission=e,console.log(t.selectedMission),t.dialogs[0].isVisible=!0},cancelDialog:function(e){var t,n=this,i=-1,s=h(n.dialogs);try{for(s.s();!(t=s.n()).done;){var a=t.value;if(i++,a.title===e){n.dialogs[i].isVisible=!1;break}}}catch(r){s.e(r)}finally{s.f()}},delete:function(){var e=this;return r()(c.a.mark((function t(){var n,i,s,a,r,o,l,u;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,i=e.$store.getters["authenticationStore/IdentityModel"],s="mission/".concat(n.selectedMissionModel.id,"/").concat(i.schoolId),a={url:s},console.log("payload: ",a),t.next=7,Object(d["d"])(a);case 7:r=t.sent,o=r.data,l=o.message,u=o.success,u?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=l,n.dialogs[2].isVisible=!0);case 10:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return r()(c.a.mark((function n(){var i,s,a,r,o;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),i=t,s=-1,a=h(i.dialogs),n.prev=4,a.s();case 6:if((r=a.n()).done){n.next=23;break}if(o=r.value,s++,o.title!==e){n.next=21;break}n.t0=e,n.next="Delete Mission"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,i.delete();case 15:return n.abrupt("break",19);case 16:return n.next=18,i._loadMissions();case 18:return n.abrupt("break",19);case 19:return i.dialogs[s].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),a.e(n.t1);case 28:return n.prev=28,a.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()},_loadMissions:function(){var e=this;return r()(c.a.mark((function t(){var n,i,s,a,r;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,i=e.$store.getters["authenticationStore/IdentityModel"],e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=5,Object(m["a"])(i.schoolId);case 5:s=t.sent,a=s.result,r=s.message,e.$store.commit("authenticationStore/setShowSpinner",!1),e.$store.commit("MissionStore/SetMissions",a),n.tableVM.rows=a,e.$store.commit("resultStore/SetResults",a),0===a.length&&(n.isFetchTableDialog=!0,n.message=r);case 13:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return r()(c.a.mark((function t(){var n,i;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,i=e.$store.getters["authenticationStore/IdentityModel"],"CEO"===i.schoolId&&(n.tableVM.createItemUrl="/super-admin-create-mission",n.tableVM.updateItemUrl="/super-admin-update-mission"),t.next=5,n._loadMissions();case 5:e.$store.commit("authenticationStore/setCreateURL",n.tableVM.createItemUrl),e.$store.commit("authenticationStore/setActiveColumns",n.tableVM.columns),e.$store.commit("authenticationStore/setActiveRows",n.tableVM.rows),e.$store.commit("authenticationStore/setNewRows",n.tableVM.rows),e.$store.commit("authenticationStore/setIsError",!1),e.$store.commit("authenticationStore/setErrorMessages","");case 11:case"end":return t.stop()}}),t)})))()}},g=b,v=n("a6c2"),w=n("c99e"),M=n("ec6d"),S=n("63c1"),y=n.n(S),k=Object(v["a"])(g,i,s,!1,null,null,null);t["default"]=k.exports;y()(k,"components",{QSpinner:w["a"],QDialog:M["a"]})}}]);