(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{cb01:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.showSpinner?e._e():n("Table",{attrs:{table_VM:e.tableVM},on:{updateItem:function(t){return e.updateItem(t)},deleteVision:function(t){return e.deleteVision(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},o=[],r=(n("d38f"),n("b7dd"),n("1a43"),n("0012"),n("6212"),n("950c"),n("2bf3"),n("5b54"),n("549c")),a=n.n(r),s=n("52b5"),c=n.n(s),l=n("785a"),u=n("0588"),d=n("0601"),m=n("17ba");function p(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=f(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,r=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw r}}}}function f(e,t){if(e){if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var v={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{Table:l["a"],MessageBox:u["a"]},data:function(){return{cardList:[],tableVM:{selectedVision:{},title:"Visions",columns:[{name:"actions",label:"Actions",field:"",align:"left",type:""},{name:"title",label:"Title",field:"",align:"left",type:"text"}],rows:[],separator:"cell",createItem:"createVision",updateItem:"updateItem",deleteItem:"deleteVision",createItemUrl:"/create-vision",updateItemUrl:"/update-vision"},dialogs:[{title:"Delete Vision",isVisible:!1,message:"Do you want to delete a vision",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Vision deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}]}},methods:{okayEvent:function(){var e=this;e.isFetchTableDialog=!1},cancelEvent:function(){var e=this;e.isFetchTableDialog=!1},createVision:function(){var e=this;console.log(e.tableVM.createItemUrl),this.$router.push(e.tableVM.createItemUrl)},updateItem:function(e){var t=this;this.$store.commit("VisionStore/SetSelectedVision",e),this.$router.push(t.tableVM.updateItemUrl)},deleteVision:function(e){var t=this;t.selectedVision=e,console.log(t.selectedVision),t.dialogs[0].isVisible=!0},cancelDialog:function(e){var t,n=this,i=-1,o=p(n.dialogs);try{for(o.s();!(t=o.n()).done;){var r=t.value;if(i++,r.title===e){n.dialogs[i].isVisible=!1;break}}}catch(a){o.e(a)}finally{o.f()}},deleteFile:function(e){return a()(c.a.mark((function t(){var n,i,o;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="vision/removeFile",i={url:n,req:{fileName:e}},console.log("payload: ",i),t.next=5,Object(d["b"])(i);case 5:o=t.sent,console.log("response: ",o);case 7:case"end":return t.stop()}}),t)})))()},delete:function(){var e=this;return a()(c.a.mark((function t(){var n,i,o,r,a;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,console.log("selectedVision: ",n.selectedVision),t.next=4,n.deleteFile(n.selectedVision.fileName);case 4:return i=t.sent,console.log("deleteFileResponse: ",i),o=e.$store.getters["authenticationStore/IdentityModel"],r="vision/".concat(n.selectedVision._id,"/").concat(o.schoolId),a={url:r},console.log("payload: ",a),t.next=12,Object(d["d"])(a);case 12:t.sent,n.dialogs[1].isVisible=!0;case 14:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return a()(c.a.mark((function n(){var i,o,r,a,s;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),i=t,o=-1,r=p(i.dialogs),n.prev=4,r.s();case 6:if((a=r.n()).done){n.next=23;break}if(s=a.value,o++,s.title!==e){n.next=21;break}n.t0=e,n.next="Delete Vision"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,i.delete();case 15:return n.abrupt("break",19);case 16:return n.next=18,i._loadVisions();case 18:return n.abrupt("break",19);case 19:return i.dialogs[o].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),r.e(n.t1);case 28:return n.prev=28,r.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()},_loadVisions:function(){var e=this;return a()(c.a.mark((function t(){var n,i,o,r,a;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,i=e.$store.getters["authenticationStore/IdentityModel"],e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=5,Object(m["a"])(i.schoolId);case 5:o=t.sent,r=o.result,a=o.message,e.$store.commit("authenticationStore/setShowSpinner",!1),e.$store.commit("VisionStore/SetVisions",r),n.tableVM.rows=r,e.$store.commit("resultStore/SetResults",r),0===r.length&&(n.isFetchTableDialog=!0,n.message=a);case 13:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return a()(c.a.mark((function t(){var n,i;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,i=e.$store.getters["authenticationStore/IdentityModel"],"CEO"===i.schoolId&&(n.tableVM.createItemUrl="/super-admin-create-vision",n.tableVM.updateItemUrl="/super-admin-uupdate-vision"),t.next=5,n._loadVisions();case 5:e.$store.commit("authenticationStore/setCreateURL",n.tableVM.createItemUrl),e.$store.commit("authenticationStore/setActiveColumns",n.tableVM.columns),e.$store.commit("authenticationStore/setActiveRows",n.tableVM.rows),e.$store.commit("authenticationStore/setNewRows",n.tableVM.rows),e.$store.commit("authenticationStore/setIsError",!1),e.$store.commit("authenticationStore/setErrorMessages","");case 11:case"end":return t.stop()}}),t)})))()}},b=v,g=n("a6c2"),V=n("c99e"),w=n("ec6d"),S=n("63c1"),y=n.n(S),k=Object(g["a"])(b,i,o,!1,null,null,null);t["default"]=k.exports;y()(k,"components",{QSpinner:V["a"],QDialog:w["a"]})}}]);