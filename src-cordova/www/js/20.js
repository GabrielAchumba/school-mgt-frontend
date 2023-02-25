(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{a37f:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.showSpinner?e._e():o("Form",{attrs:{formData:e.form},on:{linkClick:function(t){return e.linkClick(t)},qListTemplateAction:function(t){return e.filterSchools(t)},qListAddItemAction:function(t){return e.createSchool(t)}}}),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[o("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[o("q-spinner",{attrs:{color:"accent",size:e.spinnerSize,thickness:e.spinnerThickness}})],1)]),e._l(e.dialogs,(function(t){return o("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(o){e.$set(t,"isVisible",o)},expression:"dialog.isVisible"}},[o("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},r=[],a=(o("d38f"),o("b7dd"),o("1a43"),o("0012"),o("6212"),o("950c"),o("2bf3"),o("5b54"),o("ef92"),o("f69e"),o("ad58"),o("d93a"),o("7efb")),s=o.n(a),i=o("9289"),c=o.n(i),l=o("549c"),u=o.n(l),h=(o("c889"),o("67c8"),o("52b5")),f=o.n(h),m=o("785a"),d=o("82f4"),p=o("0588"),b=o("5dc2"),g={title:"",qSelects:[],qInputs:[],qBtns:[],qDates:[],GroupedCheckBoxes:[],qLists:[]},S=o("bc6a");function v(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function w(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?v(Object(o),!0).forEach((function(t){c()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function y(e,t){var o="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=k(e))||t&&e&&"number"===typeof e.length){o&&(e=o);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,i=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return s=e.done,e},e:function(e){i=!0,a=e},f:function(){try{s||null==o.return||o.return()}finally{if(i)throw a}}}}function k(e,t){if(e){if("string"===typeof e)return x(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?x(e,t):void 0}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var D={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]},spinnerSize:function(){return this.$store.getters["authenticationStore/spinnerSize"]},spinnerThickness:function(){return this.$store.getters["authenticationStore/spinnerThickness"]}},components:{Table:m["a"],MessageBox:p["a"],Form:d["a"]},data:function(){return{form:g,cssProps:{backgroundImage:"url(".concat(o("e9a1"),")")},tableVM:{selectedSchool:{},title:"Schools",columns:[{name:"actions",label:"Actions",field:"",align:"left",type:""},{name:"route",label:"School Website",field:"",align:"left",type:"text"},{name:"schoolName",label:"School",field:"",align:"left",type:"text"},{name:"address",label:"Address",field:"",align:"left",type:"text"}],rows:[],separator:"cell",createItem:"createSchool",updateItem:"updateSchool",deleteItem:"deleteSchool",createItemUrl:"/create-school",updateItemUrl:"/update-school"},dialogs:[{title:"Delete School",isVisible:!1,message:"Do you want to delete a School",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"School deleted successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}]}},methods:{linkClick:function(e){this.$emit("linkClick",e)},okayEvent:function(){var e=this;e.isFetchTableDialog=!1},cancelEvent:function(){var e=this;e.isFetchTableDialog=!1},createSchool:function(){var e=this;console.log(e.tableVM.createItemUrl),this.$router.push(e.tableVM.createItemUrl)},updateSchool:function(e){var t=this;this.$store.commit("schoolStore/SetSelectedSchool",e),this.$router.push(t.tableVM.updateItemUrl)},deleteSchool:function(e){var t=this;t.selectedSchool=e,console.log(t.selectedSchool),t.dialogs[0].isVisible=!0},cancelDialog:function(e){var t,o=this,n=-1,r=y(o.dialogs);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(n++,a.title===e){o.dialogs[n].isVisible=!1;break}}}catch(s){r.e(s)}finally{r.f()}},delete:function(){var e=this;return u()(f.a.mark((function t(){var o,n,r,a,s,i,c;return f.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e,n="school/".concat(o.selectedSchool.id),r={url:n},console.log("payload: ",r),t.next=6,Object(b["d"])(r);case 6:a=t.sent,s=a.data,i=s.message,c=s.success,c?o.dialogs[1].isVisible=!0:(o.dialogs[2].message=i,o.dialogs[2].isVisible=!0);case 9:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return u()(f.a.mark((function o(){var n,r,a,s,i;return f.a.wrap((function(o){while(1)switch(o.prev=o.next){case 0:console.log("payload: ",e),n=t,r=-1,a=y(n.dialogs),o.prev=4,a.s();case 6:if((s=a.n()).done){o.next=23;break}if(i=s.value,r++,i.title!==e){o.next=21;break}o.t0=e,o.next="Delete School"===o.t0?13:"Success"===o.t0?16:19;break;case 13:return o.next=15,n.delete();case 15:return o.abrupt("break",19);case 16:return o.next=18,n.loadSchools();case 18:return o.abrupt("break",19);case 19:return n.dialogs[r].isVisible=!1,o.abrupt("break",23);case 21:o.next=6;break;case 23:o.next=28;break;case 25:o.prev=25,o.t1=o["catch"](4),a.e(o.t1);case 28:return o.prev=28,a.f(),o.finish(28);case 31:case"end":return o.stop()}}),o,null,[[4,25,28,31]])})))()},filterSchools:function(e){var t=this;switch(console.log("payload: ",e),e.label){case"Schools":console.log("payload.originalItems: ",e.originalItems),console.log("payload.listBoxSearchModel: ",e.listBoxSearchModel),t.form.qLists[0].items=Object(S["a"])(e.originalItems,e.listBoxSearchModel),console.log("context.questionsForms.qLists.items: ",t.form.qLists[0].items);break}},loadSchools:function(){var e=this;return u()(f.a.mark((function t(){var o,n,r,a,i,c,l,u;return f.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e,n="school",e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=5,Object(b["a"])({url:n});case 5:r=t.sent,e.$store.commit("authenticationStore/setShowSpinner",!1),a=r.data,i=a.data,c=a.message,l=a.success,l?(o.tableVM.rows=i.map((function(e){return w(w({},e),{},{route:e.schoolName.replace(/\s+/g,"_")})})),o.form.qLists=[],u=i.map((function(e){return{name:e.schoolName,address:e.address,route:e.schoolName.replace(/\s+/g,"_"),letter:e.schoolName.charAt(0)}})),console.log("items: ",u),o.form.qLists.push({label:"Schools",items:s()(u),originalItems:s()(u),isAddVisible:!1,isMenuListVisible:!1}),console.log("context.form: ",o.form),e.$store.commit("schoolStore/SetSchools",i)):(o.isFetchTableDialog=!0,o.message=c);case 9:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return u()(f.a.mark((function t(){var o,n;return f.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e,n=e.$store.getters["authenticationStore/IdentityModel"],"CEO"===n.schoolId&&(o.tableVM.createItemUrl="/super-admin-create-school",o.tableVM.updateItemUrl="/super-admin-update-school"),t.next=5,o.loadSchools();case 5:e.$store.commit("authenticationStore/setCreateURL",o.tableVM.createItemUrl),e.$store.commit("authenticationStore/setActiveColumns",o.tableVM.columns),e.$store.commit("authenticationStore/setActiveRows",o.tableVM.rows),e.$store.commit("authenticationStore/setNewRows",o.tableVM.rows),e.$store.commit("authenticationStore/setIsError",!1),e.$store.commit("authenticationStore/setErrorMessages","");case 11:case"end":return t.stop()}}),t)})))()}},I=D,O=o("a6c2"),V=o("c99e"),M=o("ec6d"),$=o("63c1"),j=o.n($),E=Object(O["a"])(I,n,r,!1,null,null,null);t["default"]=E.exports;j()(E,"components",{QSpinner:V["a"],QDialog:M["a"]})},e9a1:function(e,t,o){e.exports=o.p+"img/Neway_Logo.jpg"}}]);