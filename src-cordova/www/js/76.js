(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[76],{"477d":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.showSpinner?e._e():a("Table",{attrs:{table_VM:e.tableVM,tableRows:e.tableVM.rows},on:{createGrade:function(t){return e.createGrade(t)},updateGrade:function(t){return e.updateGrade(t)},deleteGrade:function(t){return e.deleteGrade(t)}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[a("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[a("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return a("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(a){e.$set(t,"isVisible",a)},expression:"dialog.isVisible"}},[a("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},n=[],o=(a("d38f"),a("b7dd"),a("1a43"),a("0012"),a("6212"),a("950c"),a("2bf3"),a("5b54"),a("549c")),i=a.n(o),s=a("52b5"),c=a.n(s),l=a("785a"),u=a("0588"),d=a("5dc2"),m=a("cabb");function h(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=p(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==a.return||a.return()}finally{if(s)throw o}}}}function p(e,t){if(e){if("string"===typeof e)return f(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var g={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{Table:l["a"],MessageBox:u["a"]},data:function(){return{tableVM:{selectedGrade:{},title:"Grades",columns:[{name:"actions",label:"Actions",field:"",align:"left",type:""},{name:"type",label:"Type of Grade",field:"",align:"left",type:"text"}],rows:[],separator:"cell",createItem:"createGrade",updateItem:"updateGrade",deleteItem:"deleteGrade",createItemUrl:"/create-grade",updateItemUrl:"/update-grade",importURL:"/import-grades"},dialogs:[{title:"Delete Grade",isVisible:!1,message:"Do you want to delete a grade",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Grade deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}]}},methods:{okayEvent:function(){var e=this;e.isFetchTableDialog=!1},cancelEvent:function(){var e=this;e.isFetchTableDialog=!1},createGrade:function(){var e=this;console.log(e.tableVM.createItemUrl),this.$router.push(e.tableVM.createItemUrl)},updateGrade:function(e){var t=this;this.$store.commit("gradeStore/SetSelectedGrade",e),this.$router.push(t.tableVM.updateItemUrl)},deleteGrade:function(e){var t=this;t.selectedGrade=e,console.log(t.selectedGrade),t.dialogs[0].isVisible=!0},cancelDialog:function(e){var t,a=this,r=-1,n=h(a.dialogs);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(r++,o.title===e){a.dialogs[r].isVisible=!1;break}}}catch(i){n.e(i)}finally{n.f()}},delete:function(){var e=this;return i()(c.a.mark((function t(){var a,r,n,o,i,s,l,u;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,r=e.$store.getters["authenticationStore/IdentityModel"],n="grade/".concat(a.selectedGrade.id,"/").concat(r.schoolId),o={url:n},console.log("payload: ",o),t.next=7,Object(d["d"])(o);case 7:i=t.sent,s=i.data,l=s.message,u=s.success,u?a.dialogs[1].isVisible=!0:(a.dialogs[2].message=l,a.dialogs[2].isVisible=!0);case 10:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return i()(c.a.mark((function a(){var r,n,o,i,s;return c.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:console.log("payload: ",e),r=t,n=-1,o=h(r.dialogs),a.prev=4,o.s();case 6:if((i=o.n()).done){a.next=23;break}if(s=i.value,n++,s.title!==e){a.next=21;break}a.t0=e,a.next="Delete Grade"===a.t0?13:"Success"===a.t0?16:19;break;case 13:return a.next=15,r.delete();case 15:return a.abrupt("break",19);case 16:return a.next=18,r._loadGrades();case 18:return a.abrupt("break",19);case 19:return r.dialogs[n].isVisible=!1,a.abrupt("break",23);case 21:a.next=6;break;case 23:a.next=28;break;case 25:a.prev=25,a.t1=a["catch"](4),o.e(a.t1);case 28:return a.prev=28,o.f(),a.finish(28);case 31:case"end":return a.stop()}}),a,null,[[4,25,28,31]])})))()},_loadGrades:function(){var e=this;return i()(c.a.mark((function t(){var a,r,n,o,i;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,r=e.$store.getters["authenticationStore/IdentityModel"],e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=5,Object(m["a"])(r.schoolId);case 5:n=t.sent,o=n.result,i=n.message,e.$store.commit("authenticationStore/setShowSpinner",!1),e.$store.commit("gradeStore/SetGrades",o),a.tableVM.rows=o,0===o.length&&(a.isFetchTableDialog=!0,a.message=i);case 12:case"end":return t.stop()}}),t)})))()},setBackRoute:function(){var e=this.$store.getters["authenticationStore/IdentityModel"],t="";t="CEO"===e.schoolId?"/super-admin":"/admin",this.$store.commit("authenticationStore/setBackRoute",t)}},created:function(){var e=this;return i()(c.a.mark((function t(){var a,r;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,r=e.$store.getters["authenticationStore/IdentityModel"],"CEO"===r.schoolId&&(a.tableVM.createItemUrl="/super-admin-create-grade",a.tableVM.updateItemUrl="/super-admin-update-grade"),t.next=5,a._loadGrades();case 5:e.$store.commit("authenticationStore/setCreateURL",a.tableVM.createItemUrl),e.$store.commit("authenticationStore/setActiveColumns",a.tableVM.columns),e.$store.commit("authenticationStore/setActiveRows",a.tableVM.rows),e.$store.commit("authenticationStore/setNewRows",a.tableVM.rows),e.$store.commit("authenticationStore/setActiveRoute","grades"),e.$store.commit("authenticationStore/setImportURL",a.tableVM.importURL),e.$store.commit("authenticationStore/setIsError",!1),e.$store.commit("authenticationStore/setErrorMessages",""),a.setBackRoute(),e.$store.commit("authenticationStore/setPageTitle","Grades");case 15:case"end":return t.stop()}}),t)})))()}},b=g,v=a("a6c2"),w=a("c99e"),S=a("ec6d"),y=a("63c1"),k=a.n(y),G=Object(v["a"])(b,r,n,!1,null,null,null);t["default"]=G.exports;k()(G,"components",{QSpinner:w["a"],QDialog:S["a"]})}}]);