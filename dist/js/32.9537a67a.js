(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{a9db:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Table",{attrs:{table_VM:e.tableVM},on:{createSchool:function(t){return e.createSchool(t)}}}),e._l(e.dialogs,(function(t){return a("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(a){e.$set(t,"isVisible",a)},expression:"dialog.isVisible"}},[a("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},n=[],r=(a("23bf"),a("06db"),a("7f7f"),a("8a81"),a("1c4c"),a("5df3"),a("cadf"),a("ac6a"),a("fa84")),l=a.n(r),c=a("967e"),s=a.n(c),i=a("3a3c"),u=a("9bff"),d=a("39b2");function f(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=h(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,c=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){c=!0,r=e},f:function(){try{l||null==a.return||a.return()}finally{if(c)throw r}}}}function h(e,t){if(e){if("string"===typeof e)return b(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=e[a];return o}var g={components:{Table:i["a"],MessageBox:u["a"]},data:function(){return{tableVM:{selectedSchool:{},title:"Schools",columns:[{name:"actions",label:"Actions",field:"",align:"left"},{name:"schoolName",label:"School",field:"",align:"left"},{name:"address",label:"Address",field:"",align:"left"}],rows:[],separator:"cell",createItem:"createSchool",updateItem:"updateSchool",deleteItem:"deleteSchool",createItemUrl:"/create-school",updateItemUrl:"/update-school"},dialogs:[{title:"Delete School",isVisible:!1,message:"Do you want to delete a School",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"School deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}]}},methods:{okayEvent:function(){var e=this;e.isFetchTableDialog=!1},cancelEvent:function(){var e=this;e.isFetchTableDialog=!1},createSchool:function(){var e=this;console.log(e.tableVM.createItemUrl),this.$router.push(e.tableVM.createItemUrl)},updateSchool:function(e){var t=this;this.$store.commit("schoolStore/SetSelectedSchool",e),this.$router.push(t.tableVM.updateItemUrl)},deleteSchool:function(e){var t=this;t.selectedSchool=e,console.log(t.selectedSchool),t.dialogs[0].isVisible=!0},cancelDialog:function(e){var t,a=this,o=-1,n=f(a.dialogs);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(o++,r.title===e){a.dialogs[o].isVisible=!1;break}}}catch(l){n.e(l)}finally{n.f()}},delete:function(){var e=this;return l()(s.a.mark((function t(){var a,o,n,r,l,c,i;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,o="school/".concat(a.selectedSchool.id),n={url:o},console.log("payload: ",n),t.next=6,Object(d["d"])(n);case 6:r=t.sent,l=r.data,c=l.message,i=l.success,i?a.dialogs[1].isVisible=!0:(a.dialogs[2].message=c,a.dialogs[2].isVisible=!0);case 9:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return l()(s.a.mark((function a(){var o,n,r,l,c;return s.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:console.log("payload: ",e),o=t,n=-1,r=f(o.dialogs),a.prev=4,r.s();case 6:if((l=r.n()).done){a.next=23;break}if(c=l.value,n++,c.title!==e){a.next=21;break}a.t0=e,a.next="Delete School"===a.t0?13:"Success"===a.t0?16:19;break;case 13:return a.next=15,o.delete();case 15:return a.abrupt("break",19);case 16:return a.next=18,o.loadSchools();case 18:return a.abrupt("break",19);case 19:return o.dialogs[n].isVisible=!1,a.abrupt("break",23);case 21:a.next=6;break;case 23:a.next=28;break;case 25:a.prev=25,a.t1=a["catch"](4),r.e(a.t1);case 28:return a.prev=28,r.f(),a.finish(28);case 31:case"end":return a.stop()}}),a,null,[[4,25,28,31]])})))()},loadSchools:function(){var e=this;return l()(s.a.mark((function t(){var a,o,n,r,l,c,i;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,o="school",t.next=4,Object(d["a"])({url:o});case 4:n=t.sent,r=n.data,l=r.data,c=r.message,i=r.success,i?(a.tableVM.rows=l,e.$store.commit("schoolStore/SetSchools",l)):(a.isFetchTableDialog=!0,a.message=c);case 7:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return l()(s.a.mark((function t(){var a;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,t.next=3,a.loadSchools();case 3:e.$store.commit("authenticationStore/setCreateURL",a.tableVM.createItemUrl),console.log(e.$router);case 5:case"end":return t.stop()}}),t)})))()}},v=g,m=a("2877"),p=a("24e8"),S=a("eebe"),k=a.n(S),y=Object(m["a"])(v,o,n,!1,null,null,null);t["default"]=y.exports;k()(y,"components",{QDialog:p["a"]})}}]);