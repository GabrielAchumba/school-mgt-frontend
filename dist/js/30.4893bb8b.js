(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{"197e":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.showSpinner?e._e():o("Table",{attrs:{table_VM:e.tableVM,tableRows:e.tableVM.rows},on:{updateItem:function(t){return e.updateItem(t)},deleteLogo:function(t){return e.deleteLogo(t)}}}),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[o("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[o("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return o("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(o){e.$set(t,"isVisible",o)},expression:"dialog.isVisible"}},[o("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},a=[],r=(o("23bf"),o("06db"),o("7f7f"),o("8a81"),o("1c4c"),o("5df3"),o("cadf"),o("ac6a"),o("fa84")),i=o.n(r),s=o("967e"),l=o.n(s),c=o("3a3c"),u=o("9bff"),d=o("7ac8"),g=o("2898");function f(e,t){var o="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=m(e))||t&&e&&"number"===typeof e.length){o&&(e=o);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,s=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return i=e.done,e},e:function(e){s=!0,r=e},f:function(){try{i||null==o.return||o.return()}finally{if(s)throw r}}}}function m(e,t){if(e){if("string"===typeof e)return p(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var h={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{Table:c["a"],MessageBox:u["a"]},data:function(){return{cardList:[],tableVM:{selectedLogo:{},title:"Logos",columns:[{name:"actions",label:"Actions",field:"",align:"left",type:""},{name:"primaryColor",label:"Primary Color",field:"",align:"left",type:"text"},{name:"secondaryColor",label:"Secondary Color",field:"",align:"left",type:"text"},{name:"tertiaryColor",label:"Tertiary Color",field:"",align:"left",type:"text"}],rows:[],separator:"cell",createItem:"createLogo",updateItem:"updateItem",deleteItem:"deleteLogo",createItemUrl:"/create-logo",updateItemUrl:"/update-logo"},dialogs:[{title:"Delete Logo",isVisible:!1,message:"Do you want to delete a logo",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Logo deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}]}},methods:{okayEvent:function(){var e=this;e.isFetchTableDialog=!1},cancelEvent:function(){var e=this;e.isFetchTableDialog=!1},createLogo:function(){var e=this;console.log(e.tableVM.createItemUrl),this.$router.push(e.tableVM.createItemUrl)},updateItem:function(e){var t=this;this.$store.commit("LogoStore/SetSelectedLogo",e),this.$router.push(t.tableVM.updateItemUrl)},deleteLogo:function(e){var t=this;t.selectedLogo=e,console.log(t.selectedLogo),t.dialogs[0].isVisible=!0},cancelDialog:function(e){var t,o=this,n=-1,a=f(o.dialogs);try{for(a.s();!(t=a.n()).done;){var r=t.value;if(n++,r.title===e){o.dialogs[n].isVisible=!1;break}}}catch(i){a.e(i)}finally{a.f()}},delete:function(){var e=this;return i()(l.a.mark((function t(){var o,n,a,r,i,s,c,u;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e,n=e.$store.getters["authenticationStore/IdentityModel"],a="logo/".concat(o.selectedLogoModel.id,"/").concat(n.schoolId),r={url:a},console.log("payload: ",r),t.next=7,Object(d["e"])(r);case 7:i=t.sent,s=i.data,c=s.message,u=s.success,u?o.dialogs[1].isVisible=!0:(o.dialogs[2].message=c,o.dialogs[2].isVisible=!0);case 10:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return i()(l.a.mark((function o(){var n,a,r,i,s;return l.a.wrap((function(o){while(1)switch(o.prev=o.next){case 0:console.log("payload: ",e),n=t,a=-1,r=f(n.dialogs),o.prev=4,r.s();case 6:if((i=r.n()).done){o.next=23;break}if(s=i.value,a++,s.title!==e){o.next=21;break}o.t0=e,o.next="Delete Logo"===o.t0?13:"Success"===o.t0?16:19;break;case 13:return o.next=15,n.delete();case 15:return o.abrupt("break",19);case 16:return o.next=18,n._loadLogos();case 18:return o.abrupt("break",19);case 19:return n.dialogs[a].isVisible=!1,o.abrupt("break",23);case 21:o.next=6;break;case 23:o.next=28;break;case 25:o.prev=25,o.t1=o["catch"](4),r.e(o.t1);case 28:return o.prev=28,r.f(),o.finish(28);case 31:case"end":return o.stop()}}),o,null,[[4,25,28,31]])})))()},_loadLogos:function(){var e=this;return i()(l.a.mark((function t(){var o,n,a,r,i;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e,n=e.$store.getters["authenticationStore/IdentityModel"],e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=5,Object(g["a"])(n.schoolId);case 5:a=t.sent,r=a.result,i=a.message,e.$store.commit("authenticationStore/setShowSpinner",!1),e.$store.commit("LogoStore/SetLogos",r),o.tableVM.rows=r,e.$store.commit("resultStore/SetResults",r),0===r.length&&(o.isFetchTableDialog=!0,o.message=i);case 13:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return i()(l.a.mark((function t(){var o,n;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e,n=e.$store.getters["authenticationStore/IdentityModel"],"CEO"===n.schoolId&&(o.tableVM.createItemUrl="/super-admin-create-logo",o.tableVM.updateItemUrl="/super-admin-update-logo"),t.next=5,o._loadLogos();case 5:e.$store.commit("authenticationStore/setCreateURL",o.tableVM.createItemUrl),e.$store.commit("authenticationStore/setActiveColumns",o.tableVM.columns),e.$store.commit("authenticationStore/setActiveRows",o.tableVM.rows),e.$store.commit("authenticationStore/setNewRows",o.tableVM.rows),e.$store.commit("authenticationStore/setIsError",!1),e.$store.commit("authenticationStore/setErrorMessages","");case 11:case"end":return t.stop()}}),t)})))()}},b=h,v=o("2877"),w=o("0d59"),y=o("24e8"),S=o("eebe"),k=o.n(S),x=Object(v["a"])(b,n,a,!1,null,null,null);t["default"]=x.exports;k()(x,"components",{QSpinner:w["a"],QDialog:y["a"]})}}]);