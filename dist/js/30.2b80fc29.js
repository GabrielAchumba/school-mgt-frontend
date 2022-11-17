(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{"811f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Table",{attrs:{table_VM:e.tableVM},on:{updateItem:function(t){return e.updateItem(t)},deleteMission:function(t){return e.deleteMission(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:"3em",thickness:10}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},i=[],s=(n("23bf"),n("06db"),n("7f7f"),n("8a81"),n("1c4c"),n("5df3"),n("cadf"),n("ac6a"),n("fa84")),o=n.n(s),r=n("967e"),c=n.n(r),l=n("3a3c"),u=n("9bff"),d=n("7ac8"),f=n("ce65");function m(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=h(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,r=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){r=!0,s=e},f:function(){try{o||null==n.return||n.return()}finally{if(r)throw s}}}}function h(e,t){if(e){if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var p={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]}},components:{Table:l["a"],MessageBox:u["a"]},data:function(){return{cardList:[],tableVM:{selectedMission:{},title:"Missions",columns:[{name:"actions",label:"Actions",field:"",align:"left",type:""},{name:"title",label:"Title",field:"",align:"left",type:"text"}],rows:[],separator:"cell",createItem:"createMission",updateItem:"updateItem",deleteItem:"deleteMission",createItemUrl:"/create-mission",updateItemUrl:"/update-mission"},dialogs:[{title:"Delete Mission",isVisible:!1,message:"Do you want to delete a mission",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Mission deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}]}},methods:{okayEvent:function(){var e=this;e.isFetchTableDialog=!1},cancelEvent:function(){var e=this;e.isFetchTableDialog=!1},createMission:function(){var e=this;console.log(e.tableVM.createItemUrl),this.$router.push(e.tableVM.createItemUrl)},updateItem:function(e){var t=this;this.$store.commit("MissionStore/SetSelectedMission",e),this.$router.push(t.tableVM.updateItemUrl)},deleteMission:function(e){var t=this;t.selectedMission=e,console.log(t.selectedMission),t.dialogs[0].isVisible=!0},cancelDialog:function(e){var t,n=this,a=-1,i=m(n.dialogs);try{for(i.s();!(t=i.n()).done;){var s=t.value;if(a++,s.title===e){n.dialogs[a].isVisible=!1;break}}}catch(o){i.e(o)}finally{i.f()}},delete:function(){var e=this;return o()(c.a.mark((function t(){var n,a,i,s,o,r,l,u;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a=e.$store.getters["authenticationStore/IdentityModel"],i="mission/".concat(n.selectedMissionModel.id,"/").concat(a.schoolId),s={url:i},console.log("payload: ",s),t.next=7,Object(d["d"])(s);case 7:o=t.sent,r=o.data,l=r.message,u=r.success,u?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=l,n.dialogs[2].isVisible=!0);case 10:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return o()(c.a.mark((function n(){var a,i,s,o,r;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),a=t,i=-1,s=m(a.dialogs),n.prev=4,s.s();case 6:if((o=s.n()).done){n.next=23;break}if(r=o.value,i++,r.title!==e){n.next=21;break}n.t0=e,n.next="Delete Mission"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,a.delete();case 15:return n.abrupt("break",19);case 16:return n.next=18,a._loadMissions();case 18:return n.abrupt("break",19);case 19:return a.dialogs[i].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),s.e(n.t1);case 28:return n.prev=28,s.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()},_loadMissions:function(){var e=this;return o()(c.a.mark((function t(){var n,a,i,s,o;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a=e.$store.getters["authenticationStore/IdentityModel"],e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=5,Object(f["a"])(a.schoolId);case 5:i=t.sent,s=i.result,o=i.message,e.$store.commit("authenticationStore/setShowSpinner",!1),e.$store.commit("MissionStore/SetMissions",s),n.tableVM.rows=s,e.$store.commit("resultStore/SetResults",s),0===s.length&&(n.isFetchTableDialog=!0,n.message=o);case 13:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return o()(c.a.mark((function t(){var n;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,t.next=3,n._loadMissions();case 3:e.$store.commit("authenticationStore/setCreateURL",n.tableVM.createItemUrl),e.$store.commit("authenticationStore/setActiveColumns",n.tableVM.columns),e.$store.commit("authenticationStore/setActiveRows",n.tableVM.rows),e.$store.commit("authenticationStore/setNewRows",n.tableVM.rows);case 7:case"end":return t.stop()}}),t)})))()}},v=p,g=n("2877"),w=n("0d59"),M=n("24e8"),y=n("eebe"),S=n.n(y),k=Object(g["a"])(v,a,i,!1,null,null,null);t["default"]=k.exports;S()(k,"components",{QSpinner:w["a"],QDialog:M["a"]})}}]);