(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[125],{"2ea6":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md"},[a("Form",{attrs:{formData:e.form},on:{Update:function(t){return e.Update(t)},Cancel:function(t){return e.Cancel(t)},userTypeAction:function(t){return e.userTypeAction(t)}}}),e._l(e.dialogs,(function(t){return a("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(a){e.$set(t,"isVisible",a)},expression:"dialog.isVisible"}},[a("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},r=[],i=(a("d38f"),a("b7dd"),a("0012"),a("6212"),a("950c"),a("2bf3"),a("5b54"),a("549c")),o=a.n(i),s=a("52b5"),l=a.n(s),c=(a("1a43"),a("0588")),u=a("82f4"),f=a("5dc2"),m={title:"Update Referal",qSelects:[{label:"Country *",value:"",type:"text",code:"",list:[{value:1,label:"Nigeria",type:"Nigeria",code:"+234"}],actionName:"countryAction",visible:!0}],qInputs:[{label:"First Name *",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Last Name *",name:"",type:"text",Template:{sn:1,iconName:"",visible:!1}},{label:"User Name *",name:"",type:"text",Template:{sn:2,iconName:"",visible:!1}},{label:"PhoneNumber *",name:"",type:"text",Template:{sn:3,iconName:"",visible:!1}}],qBtns:[{label:"Cancel",name:"Cancel"},{label:"Update",name:"Update"}],qDates:[],GroupedCheckBoxes:[]},p=[{title:"Update Referal",isVisible:!1,message:"Do you want to update your profile",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"User updated successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function d(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=b(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(s)throw i}}}}function b(e,t){if(e){if("string"===typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var g={components:{MessageBox:c["a"],Form:u["a"]},data:function(){return{form:m,dialogs:p}},methods:{Update:function(){var e,t=this,a=-1,n=d(t.dialogs);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(a++,"Update Referal"==r.title){t.dialogs[a].isVisible=!0;break}}}catch(i){n.e(i)}finally{n.f()}},Cancel:function(){this.$router.push("/referal")},cancelDialog:function(e){var t,a=this,n=-1,r=d(a.dialogs);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(n++,i.title===e){a.dialogs[n].isVisible=!1;break}}}catch(o){r.e(o)}finally{r.f()}},save:function(){var e=this;return o()(l.a.mark((function t(){var a,n,r,i,o,s,c,u;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,n=e.$store.getters["authenticationStore/IdentityModel"],r="user/update-referal/".concat(n.id),i={url:r,req:{firstName:a.form.qInputs[0].name,lastName:a.form.qInputs[1].name,userName:a.form.qInputs[2].name,phoneNumber:a.form.qInputs[3].name,countryCode:a.form.qSelects[0].value.code}},console.log("payload: ",i),t.next=7,Object(f["c"])(i);case 7:o=t.sent,s=o.data,c=s.message,u=s.success,u?a.dialogs[1].isVisible=!0:(a.dialogs[2].message=c,a.dialogs[2].isVisible=!0);case 10:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return o()(l.a.mark((function a(){var n,r,i,o,s;return l.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=t,r=-1,i=d(n.dialogs),a.prev=3,i.s();case 5:if((o=i.n()).done){a.next=21;break}if(s=o.value,r++,s.title!==e){a.next=19;break}a.t0=e,a.next="Update Referal"===a.t0?12:"Success"===a.t0?15:17;break;case 12:return a.next=14,n.save();case 14:return a.abrupt("break",17);case 15:return t.$router.push("/referal"),a.abrupt("break",17);case 17:return n.dialogs[r].isVisible=!1,a.abrupt("break",21);case 19:a.next=5;break;case 21:a.next=26;break;case 23:a.prev=23,a.t1=a["catch"](3),i.e(a.t1);case 26:return a.prev=26,i.f(),a.finish(26);case 29:case"end":return a.stop()}}),a,null,[[3,23,26,29]])})))()}},created:function(){var e=this,t=this.$store.getters["authenticationStore/IdentityModel"];console.log("user: ",t),e.form.qInputs[0].name=t.firstName,e.form.qInputs[1].name=t.lastName,e.form.qInputs[2].name=t.userName,e.form.qInputs[3].name=t.phoneNumber}},y=g,h=a("a6c2"),k=a("ec6d"),x=a("63c1"),N=a.n(x),w=Object(h["a"])(y,n,r,!1,null,null,null);t["default"]=w.exports;N()(w,"components",{QDialog:k["a"]})}}]);