(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51],{a584:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showSpinner?t._e():n("Table",{attrs:{table_VM:t.tableVM},on:{createContact:function(e){return t.createContact(e)},updateContact:function(e){return t.updateContact(e)},deleteContact:function(e){return t.deleteContact(e)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:t.spinnerSize,thickness:t.spinnerThickness}})],1)]),t._l(t.dialogs,(function(e){return n("q-dialog",{key:e.title,model:{value:e.isVisible,callback:function(n){t.$set(e,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:e.title,message:e.message,okayEvent:e.okayEvent,cancelEvent:e.cancelEvent},on:{cancelDialog:function(e){return t.cancelDialog(e)},okDialog:function(e){return t.okDialog(e)}}})],1)}))],2)},o=[],r=(n("23bf"),n("06db"),n("7f7f"),n("8a81"),n("1c4c"),n("5df3"),n("cadf"),n("ac6a"),n("fa84")),i=n.n(r),c=n("967e"),s=n.n(c),l=n("3a3c"),u=n("9bff"),d=n("7ac8");function f(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=h(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){c=!0,r=t},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw r}}}}function h(t,e){if(t){if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var m={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{Table:l["a"],MessageBox:u["a"]},data:function(){return{tableVM:{selectedContact:{},title:"Contacts",columns:[{name:"actions",label:"Actions",field:"",align:"left",type:""},{name:"title",label:"Title",field:"",align:"left",type:"text"}],rows:[],separator:"cell",createItem:"createContact",updateItem:"updateContact",deleteItem:"deleteContact",createItemUrl:"/create-contact",updateItemUrl:"/update-contact"},dialogs:[{title:"Delete Contact",isVisible:!1,message:"Do you want to delete contact",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"Contact deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}]}},methods:{okayEvent:function(){var t=this;t.isFetchTableDialog=!1},cancelEvent:function(){var t=this;t.isFetchTableDialog=!1},createContact:function(){var t=this;this.$router.push(t.tableVM.createItemUrl)},updateContact:function(t){var e=this;this.$store.commit("ContactStore/SetSelectedContact",t),this.$router.push(e.tableVM.updateItemUrl)},deleteContact:function(t){var e=this;e.selectedContact=t,console.log(e.selectedContact),e.dialogs[0].isVisible=!0},cancelDialog:function(t){var e,n=this,a=-1,o=f(n.dialogs);try{for(o.s();!(e=o.n()).done;){var r=e.value;if(a++,r.title===t){n.dialogs[a].isVisible=!1;break}}}catch(i){o.e(i)}finally{o.f()}},delete:function(){var t=this;return i()(s.a.mark((function e(){var n,a,o,r,i,c,l,u;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,a=t.$store.getters["authenticationStore/IdentityModel"],o="contact/".concat(n.selectedContact.id,"/").concat(a.schoolId),r={url:o},console.log("payload: ",r),e.next=7,Object(d["d"])(r);case 7:i=e.sent,c=i.data,l=c.message,u=c.success,u?n.dialogs[1].isVisible=!0:(n.dialogs[2].message=l,n.dialogs[2].isVisible=!0);case 10:case"end":return e.stop()}}),e)})))()},okDialog:function(t){var e=this;return i()(s.a.mark((function n(){var a,o,r,i,c;return s.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",t),a=e,o=-1,r=f(a.dialogs),n.prev=4,r.s();case 6:if((i=r.n()).done){n.next=23;break}if(c=i.value,o++,c.title!==t){n.next=21;break}n.t0=t,n.next="Delete Contact"===n.t0?13:"Success"===n.t0?16:19;break;case 13:return n.next=15,a.delete();case 15:return n.abrupt("break",19);case 16:return n.next=18,a.loadContacts();case 18:return n.abrupt("break",19);case 19:return a.dialogs[o].isVisible=!1,n.abrupt("break",23);case 21:n.next=6;break;case 23:n.next=28;break;case 25:n.prev=25,n.t1=n["catch"](4),r.e(n.t1);case 28:return n.prev=28,r.f(),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[4,25,28,31]])})))()},loadContacts:function(){var t=this;return i()(s.a.mark((function e(){var n,a,o,r;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,t.$store.commit("authenticationStore/setShowSpinner",!0),a=t.$store.getters["authenticationStore/IdentityModel"],o="contact/files/".concat(a.schoolId),e.next=6,Object(d["a"])({url:o});case 6:r=e.sent,t.$store.commit("authenticationStore/setShowSpinner",!1),r.data?(n.tableVM.rows=r.data,t.$store.commit("ContactStore/SetContacts",r.data)):(n.isFetchTableDialog=!0,n.message=message);case 9:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;return i()(s.a.mark((function e(){var n,a;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,a=t.$store.getters["authenticationStore/IdentityModel"],"CEO"===a.schoolId&&(n.tableVM.createItemUrl="/super-admin-create-contact",n.tableVM.updateItemUrl="/super-admin-update-contact"),e.next=5,n.loadContacts();case 5:t.$store.commit("authenticationStore/setCreateURL",n.tableVM.createItemUrl),t.$store.commit("authenticationStore/setActiveColumns",n.tableVM.columns),t.$store.commit("authenticationStore/setActiveRows",n.tableVM.rows),t.$store.commit("authenticationStore/setNewRows",n.tableVM.rows),t.$store.commit("authenticationStore/setIsError",!1),t.$store.commit("authenticationStore/setErrorMessages","");case 11:case"end":return e.stop()}}),e)})))()}},b=m,g=n("2877"),v=n("0d59"),w=n("24e8"),S=n("eebe"),y=n.n(S),k=Object(g["a"])(b,a,o,!1,null,null,null);e["default"]=k.exports;y()(k,"components",{QSpinner:v["a"],QDialog:w["a"]})}}]);