(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[69],{b816:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md"},[a("Form",{attrs:{formData:e.form},on:{Create:function(t){return e.Create(t)},Cancel:function(t){return e.Cancel(t)},userTypeAction:function(t){return e.userTypeAction(t)}}}),e._l(e.dialogs,(function(t){return a("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(a){e.$set(t,"isVisible",a)},expression:"dialog.isVisible"}},[a("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},r=[],s=(a("23bf"),a("06db"),a("8a81"),a("1c4c"),a("5df3"),a("cadf"),a("ac6a"),a("d25f"),a("9986"),a("8e6e"),a("c47a")),i=a.n(s),l=a("fa84"),o=a.n(l),c=a("967e"),u=a.n(c),f=(a("456d"),a("7f7f"),a("6d67"),a("9bff")),m=a("9437"),b=a("39b2"),p={title:"Create User",qSelects:[{label:"User Type *",value:"",type:"text",list:[{value:1,label:"Member",type:"Member"},{value:2,label:"Admin",type:"Admin"}],actionName:"userTypeAction",visible:!0},{label:"School Name *",value:"",type:"text",list:[],actionName:"schoolNameAction",visible:!0},{label:"Designation *",value:"",type:"text",list:[],actionName:"designationAction",visible:!0}],qInputs:[{label:"First Name *",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Last Name *",name:"",type:"text",Template:{sn:1,iconName:"",visible:!1}},{label:"User Name *",name:"",type:"text",Template:{sn:2,iconName:"",visible:!1}},{label:"Password *",name:"",type:"text",Template:{sn:3,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Create",name:"Create",icon:"add"}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""},clearQSelects:function(){var e=0;for(e=0;e<this.qSelects.length;e++)this.qSelects[e].value="",this.qSelects[e].visible=!0,0!=e&&(this.qSelects[e].list=[])}},v=[{title:"Create User",isVisible:!1,message:"Do you want to create a user",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"User created successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=h(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return i=e.done,e},e:function(e){l=!0,s=e},f:function(){try{i||null==a.return||a.return()}finally{if(l)throw s}}}}function h(e,t){if(e){if("string"===typeof e)return S(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var k={components:{MessageBox:f["a"],Form:m["a"]},data:function(){return{form:p,dialogs:v}},methods:{Create:function(){var e,t=this,a=-1,n=g(t.dialogs);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(a++,"Create User"==r.title){t.dialogs[a].isVisible=!0;break}}}catch(s){n.e(s)}finally{n.f()}},Cancel:function(){this.$router.push("/user-landing")},cancelDialog:function(e){var t,a=this,n=-1,r=g(a.dialogs);try{for(r.s();!(t=r.n()).done;){var s=t.value;if(n++,s.title===e){a.dialogs[n].isVisible=!1;break}}}catch(i){r.e(i)}finally{r.f()}},save:function(){var e=this;return o()(u.a.mark((function t(){var a,n,r,s,i,l,o,c,f;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,n=e.$store.getters["authenticationStore/IdentityModel"],r="user/create",s=a.form.qSelects[1].value,Object.keys(n).length<=0?s="CEO":"Admin"==n.userType&&"CEO"!==n.designationId&&(s=n.schoolId),i={url:r,req:{firstName:a.form.qInputs[0].name,lastName:a.form.qInputs[1].name,userName:a.form.qInputs[2].name,password:a.form.qInputs[3].name,designationId:a.form.qSelects[2].value,userType:a.form.qSelects[0].value.label,schoolId:s}},console.log("payload: ",i),t.next=9,Object(b["b"])(i);case 9:l=t.sent,o=l.data,c=o.message,f=o.success,f?a.dialogs[1].isVisible=!0:(a.dialogs[2].message=c,a.dialogs[2].isVisible=!0);case 12:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return o()(u.a.mark((function a(){var n,r,s,i,l;return u.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:console.log("payload: ",e),n=t,r=-1,s=g(n.dialogs),a.prev=4,s.s();case 6:if((i=s.n()).done){a.next=22;break}if(l=i.value,r++,l.title!==e){a.next=20;break}a.t0=e,a.next="Create User"===a.t0?13:"Success"===a.t0?16:18;break;case 13:return a.next=15,n.save();case 15:return a.abrupt("break",18);case 16:return t.$router.push("/user-landing"),a.abrupt("break",18);case 18:return n.dialogs[r].isVisible=!1,a.abrupt("break",22);case 20:a.next=6;break;case 22:a.next=27;break;case 24:a.prev=24,a.t1=a["catch"](4),s.e(a.t1);case 27:return a.prev=27,s.f(),a.finish(27);case 30:case"end":return a.stop()}}),a,null,[[4,24,27,30]])})))()},userTypeAction:function(e){var t=this;2==e.value.value?t.form.qSelects[2].visible=!1:t.form.qSelects[2].visible=!0}},created:function(){var e=this;e.form.clearQInputs(),e.form.clearQSelects(),e.form.qSelects[1].list=this.$store.getters["schoolStore/schools"].map((function(e){return y(y({},e),{},{type:e.schoolName})}));var t=this.$store.getters["authenticationStore/IdentityModel"];Object.keys(t).length<=0?e.form.qSelects[0].list=[{value:1,label:"Member",type:"Member"},{value:2,label:"School Admin",type:"Admin"},{value:3,label:"Referal",type:"Referal"}]:"Admin"==t.userType&&"CEO"==t.designationId?e.form.qSelects[0].list=[{value:1,label:"Member",type:"Member"},{value:2,label:"Admin",type:"Admin"}]:(e.form.qSelects[1].visible=!1,e.form.qSelects[2].list=this.$store.getters["staffStore/staffs"].map((function(e){return y(y({},e),{},{type:e.type})})),e.form.qSelects[0].list=[{value:1,label:"Member",type:"Member"}])}},q=k,w=a("2877"),O=a("24e8"),x=a("eebe"),D=a.n(x),A=Object(w["a"])(q,n,r,!1,null,null,null);t["default"]=A.exports;D()(A,"components",{QDialog:O["a"]})}}]);