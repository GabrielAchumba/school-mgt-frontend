(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{b5aa:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.showSpinner?e._e():n("Table",{attrs:{table_VM:e.tableVM,tableRows:e.tableVM.rows},on:{updateItem:function(t){return e.updateItem(t)},deleteNews:function(t){return e.deleteNews(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},r=[],s=(n("d38f"),n("b7dd"),n("1a43"),n("0012"),n("6212"),n("950c"),n("2bf3"),n("5b54"),n("549c")),o=n.n(s),i=n("52b5"),c=n.n(i),l=n("785a"),u=n("0588"),d=n("0601"),m=n("553c");function h(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=f(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,s=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw s}}}}function f(e,t){if(e){if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var w={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{Table:l["a"],MessageBox:u["a"]},data:function(){return{cardList:[],tableVM:{selectedNews:{},title:"News",columns:[{name:"actions",label:"Actions",field:"",align:"left",type:""},{name:"title",label:"Title",field:"",align:"left",type:"text"}],rows:[],separator:"cell",createItem:"createNews",updateItem:"updateItem",deleteItem:"deleteNews",createItemUrl:"/create-news",updateItemUrl:"/update-news"},dialogs:[{title:"Delete News",isVisible:!1,message:"Do you want to delete News",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"News deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}]}},methods:{okayEvent:function(){var e=this;e.isFetchTableDialog=!1},cancelEvent:function(){var e=this;e.isFetchTableDialog=!1},createNews:function(){var e=this;console.log(e.tableVM.createItemUrl),this.$router.push(e.tableVM.createItemUrl)},updateItem:function(e){var t=this;this.$store.commit("NewsStore/SetSelectedNews",e),this.$router.push(t.tableVM.updateItemUrl)},deleteNews:function(e){var t=this;t.selectedNews=e,console.log(t.selectedNews),t.dialogs[0].isVisible=!0},cancelDialog:function(e){var t,n=this,a=-1,r=h(n.dialogs);try{for(r.s();!(t=r.n()).done;){var s=t.value;if(a++,s.title===e){n.dialogs[a].isVisible=!1;break}}}catch(o){r.e(o)}finally{r.f()}},delete:function(){var e=this;return o()(c.a.mark((function t(){var n,a,r,s,o,i,l,u;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a=e.$store.getters["authenticationStore/IdentityModel"],r="news/".concat(n.selectedNewsModel.id,"/").concat(a.schoolId),s={url:r},console.log("payload: ",s),t.next=7,Object(d["e"])(s);case 7:o=t.sent,i=o.data,l=i.message,u=i.success,u?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=l,n.dialogs[2].isVisible=!0);case 10:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return o()(c.a.mark((function n(){var a,r,s,o,i;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),a=t,r=-1,s=h(a.dialogs),n.prev=4,s.s();case 6:if((o=s.n()).done){n.next=23;break}if(i=o.value,r++,i.title!==e){n.next=21;break}n.t0=e,n.next="Delete News"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,a.delete();case 15:return n.abrupt("break",19);case 16:return n.next=18,a._loadNewses();case 18:return n.abrupt("break",19);case 19:return a.dialogs[r].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),s.e(n.t1);case 28:return n.prev=28,s.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()},_loadNewses:function(){var e=this;return o()(c.a.mark((function t(){var n,a,r,s,o;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a=e.$store.getters["authenticationStore/IdentityModel"],e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=5,Object(m["a"])(a.schoolId);case 5:r=t.sent,s=r.result,o=r.message,e.$store.commit("authenticationStore/setShowSpinner",!1),e.$store.commit("NewsStore/SetNewses",s),n.tableVM.rows=s,e.$store.commit("resultStore/SetResults",s),0===s.length&&(n.isFetchTableDialog=!0,n.message=o);case 13:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return o()(c.a.mark((function t(){var n,a;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a=e.$store.getters["authenticationStore/IdentityModel"],"CEO"===a.schoolId&&(n.tableVM.createItemUrl="/super-admin-create-news",n.tableVM.updateItemUrl="/super-admin-update-news"),t.next=5,n._loadNewses();case 5:e.$store.commit("authenticationStore/setCreateURL",n.tableVM.createItemUrl),e.$store.commit("authenticationStore/setActiveColumns",n.tableVM.columns),e.$store.commit("authenticationStore/setActiveRows",n.tableVM.rows),e.$store.commit("authenticationStore/setNewRows",n.tableVM.rows),e.$store.commit("authenticationStore/setIsError",!1),e.$store.commit("authenticationStore/setErrorMessages","");case 11:case"end":return t.stop()}}),t)})))()}},b=w,g=n("a6c2"),v=n("c99e"),S=n("ec6d"),y=n("63c1"),k=n.n(y),I=Object(g["a"])(b,a,r,!1,null,null,null);t["default"]=I.exports;k()(I,"components",{QSpinner:v["a"],QDialog:S["a"]})}}]);