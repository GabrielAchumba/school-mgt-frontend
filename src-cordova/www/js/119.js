(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[119],{"827f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.showSpinner?e._e():n("Cards",{attrs:{cardList:e.cardList},on:{updateItem:function(t){return e.updateItem(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},a=[],i=(n("d38f"),n("b7dd"),n("1a43"),n("0012"),n("6212"),n("950c"),n("2bf3"),n("5b54"),n("ef92"),n("f69e"),n("ad58"),n("d93a"),n("9289")),o=n.n(i),s=n("549c"),l=n.n(s),c=(n("c889"),n("52b5")),u=n.n(c),d=n("7400"),f=n("0588"),p=n("0601"),m=n("9e8b");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=v(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw i}}}}function v(e,t){if(e){if("string"===typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{Cards:d["a"],MessageBox:f["a"]},data:function(){return{cardList:[],tableVM:{selectedFileModel:{},title:"Files",columns:[{name:"actions",label:"Actions",field:"",align:"left",type:""},{name:"type",label:"Type of Class Room",field:"",align:"left",type:"text"}],rows:[],separator:"cell",createItem:"createFileModel",updateItem:"updateItem",deleteItem:"deleteFileModel",updateItemUrl:"/student-view-file"},dialogs:[{title:"Delete FileModel",isVisible:!1,message:"Do you want to delete a file",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"File deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}]}},methods:{okayEvent:function(){var e=this;e.isFetchTableDialog=!1},cancelEvent:function(){var e=this;e.isFetchTableDialog=!1},createFileModel:function(){var e=this;console.log(e.tableVM.createItemUrl),this.$router.push(e.tableVM.createItemUrl)},updateItem:function(e){var t=this;this.$store.commit("FileModelStore/SetSelectedFileModel",e),this.$router.push(t.tableVM.updateItemUrl)},deleteFileModel:function(e){var t=this;t.selectedFileModel=e,console.log(t.selectedFileModel),t.dialogs[0].isVisible=!0},cancelDialog:function(e){var t,n=this,r=-1,a=g(n.dialogs);try{for(a.s();!(t=a.n()).done;){var i=t.value;if(r++,i.title===e){n.dialogs[r].isVisible=!1;break}}}catch(o){a.e(o)}finally{a.f()}},delete:function(){var e=this;return l()(u.a.mark((function t(){var n,r,a,i,o,s,l,c;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,r=e.$store.getters["authenticationStore/IdentityModel"],a="filemanagement/".concat(n.selectedFileModel.id,"/").concat(r.schoolId),i={url:a},console.log("payload: ",i),t.next=7,Object(p["e"])(i);case 7:o=t.sent,s=o.data,l=s.message,c=s.success,c?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=l,n.dialogs[2].isVisible=!0);case 10:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return l()(u.a.mark((function n(){var r,a,i,o,s;return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),r=t,a=-1,i=g(r.dialogs),n.prev=4,i.s();case 6:if((o=i.n()).done){n.next=23;break}if(s=o.value,a++,s.title!==e){n.next=21;break}n.t0=e,n.next="Delete FileModel"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,r.delete();case 15:return n.abrupt("break",19);case 16:return n.next=18,r._loadFileModels();case 18:return n.abrupt("break",19);case 19:return r.dialogs[a].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),i.e(n.t1);case 28:return n.prev=28,i.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()},_loadFileModels:function(){var e=this;return l()(u.a.mark((function t(){var n,r,a,i,o;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,r=e.$store.getters["authenticationStore/IdentityModel"],e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=5,Object(m["a"])(r.schoolId);case 5:a=t.sent,i=a.result,o=a.message,e.$store.commit("authenticationStore/setShowSpinner",!1),e.$store.commit("FileModelStore/SetFileModels",i),n.tableVM.rows=i,n.cardList=i.map((function(e,t){var n=e.description;return n.length>300&&(n=e.description.substr(1,3e3)),b(b({id:t+1},e),{},{name:"showPage",title:e.title,description:n,createdDate:new Date(e.createdAt).toDateString(),qBtns:[{label:"View",name:"View"}]})})),console.log("context.cardList: ",n.cardList),e.$store.commit("resultStore/SetResults",i),e.$store.commit("componentsStore/setCardItems",n.cardList),0===i.length&&(n.isFetchTableDialog=!0,n.message=o);case 16:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return l()(u.a.mark((function t(){var n;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,t.next=3,n._loadFileModels();case 3:e.$store.commit("authenticationStore/setCreateURL",n.tableVM.createItemUrl),e.$store.commit("authenticationStore/setActiveColumns",n.tableVM.columns),e.$store.commit("authenticationStore/setActiveRows",n.tableVM.rows),e.$store.commit("authenticationStore/setNewRows",n.tableVM.rows);case 7:case"end":return t.stop()}}),t)})))()}},S=y,k=n("a6c2"),M=n("c99e"),D=n("ec6d"),x=n("63c1"),F=n.n(x),O=Object(k["a"])(S,r,a,!1,null,null,null);t["default"]=O.exports;F()(O,"components",{QSpinner:M["a"],QDialog:D["a"]})}}]);