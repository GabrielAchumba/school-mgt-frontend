(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{"0065":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[n("Form",{attrs:{formData:e.form},on:{Update:function(t){return e.Update(t)},Cancel:function(t){return e.Cancel(t)},onFileSelected:function(t){return e.onFileSelected(t)}}}),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},a=[],l=(n("23bf"),n("06db"),n("8a81"),n("1c4c"),n("5df3"),n("cadf"),n("ac6a"),n("fa84")),i=n.n(l),r=(n("7f7f"),n("967e")),o=n.n(r),c=n("9bff"),u=n("9437"),d=n("7ac8"),f={title:"Update News",qSelects:[],qInputs:[{label:"Title",name:"",type:"text",selectedFile:null,files:[],Template:{sn:0,iconName:"",visible:!1}},{label:"Description",name:"",type:"text",selectedFile:null,files:[],Template:{sn:0,iconName:"",visible:!1}},{label:"Image Title",name:"",type:"text",selectedFile:null,files:[],Template:{sn:2,iconName:"",visible:!1}},{label:"Image Description",name:"",type:"text",selectedFile:null,files:[],Template:{sn:3,iconName:"",visible:!1}}],qFiles:[{label:"News File",name:"",type:"file",selectedFile:null,files:[],Template:{sn:0,iconName:"",visible:!1}}],qImages:[{label:"News",name:"",type:"file",imageUrl:"",selectedFile:null,files:[],Template:{sn:0,iconName:"",visible:!1}}],qColors:[],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Update",name:"Update",icon:"update"}],qDates:[],GroupedCheckBoxes:[],clearQFiles:function(){var e=0;for(e=0;e<this.qFiles.length;e++)this.qFiles[e].name=""},clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""}},p=[{title:"Update News",isVisible:!1,message:"Do you want to update news",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"News updated successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function m(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=w(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var s=0,a=function(){};return{s:a,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,r=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){r=!0,l=e},f:function(){try{i||null==n.return||n.return()}finally{if(r)throw l}}}}function w(e,t){if(e){if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}var v={components:{MessageBox:c["a"],Form:u["a"]},data:function(){return{form:f,dialogs:p,NewsUrl:"",doesNewsExists:!1,selectedNews:{}}},methods:{Update:function(){var e,t=this,n=-1,s=m(t.dialogs);try{for(s.s();!(e=s.n()).done;){var a=e.value;if(n++,"Update News"==a.title){t.dialogs[n].isVisible=!0;break}}}catch(l){s.e(l)}finally{s.f()}},Cancel:function(){this.$router.push("/news-landing")},cancelDialog:function(e){var t,n=this,s=-1,a=m(n.dialogs);try{for(a.s();!(t=a.n()).done;){var l=t.value;if(s++,l.title===e){n.dialogs[s].isVisible=!1;break}}}catch(i){a.e(i)}finally{a.f()}},onFileSelected:function(e){var t=this;t.form.qFiles[0].selectedFile=e.selectedFile},uploadNews:function(){var e=this;return i()(o.a.mark((function t(){var n,s,a,l,i;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,s=new FormData,console.log("selectedFile: ",n.form.qFiles[0].selectedFile),s.append("file",n.form.qFiles[0].selectedFile),a="news/upload",l={url:a,req:s},console.log("payload: ",l),t.next=9,Object(d["b"])(l);case 9:i=t.sent,n.NewsUrl=i.data,console.log("NewsUrl: ",n.NewsUrl);case 12:case"end":return t.stop()}}),t)})))()},checkNewsExistance:function(){var e=this;return i()(o.a.mark((function t(){var n,s,a,l,i;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,s="news/checkfile",a=e.$store.getters["authenticationStore/IdentityModel"],l={url:s,req:{schoolId:a.schoolId}},console.log("payload: ",l),t.next=7,Object(d["b"])(l);case 7:i=t.sent,console.log("response: ",i),n.doesNewsExists=i.data,console.log("doesNewsExists: ",n.doesNewsExists);case 11:case"end":return t.stop()}}),t)})))()},save:function(){var e=this;return i()(o.a.mark((function t(){var n,s,a,l,i;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,s="news/".concat(n.selectedNews.id),a=e.$store.getters["authenticationStore/IdentityModel"],l={url:s,req:{title:n.form.qInputs[0].name,description:n.form.qInputs[1].name,imageTitle:n.form.qInputs[2].name,imageDescription:n.form.qInputs[3].name,schoolId:a.schoolId,fileUrl:n.NewsUrl,createdBy:a.id}},console.log("payload: ",l),t.next=7,put(l);case 7:i=t.sent,201===i.status||200==i.status?n.dialogs[1].isVisible=!0:(n.dialogs[2].message="Error while saving news",n.dialogs[2].isVisible=!0);case 9:case"end":return t.stop()}}),t)})))()},uploadAndSaveNewsUr:function(){var e=this;return i()(o.a.mark((function t(){var n;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,t.next=3,n.checkNewsExistance();case 3:if(!0!==n.doesNewsExists){t.next=10;break}return t.next=6,n.uploadNews();case 6:return t.next=8,n.save();case 8:t.next=11;break;case 10:alert("News title does not exists");case 11:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return i()(o.a.mark((function n(){var s,a,l,i,r;return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),s=t,a=-1,l=m(s.dialogs),n.prev=4,l.s();case 6:if((i=l.n()).done){n.next=22;break}if(r=i.value,a++,r.title!==e){n.next=20;break}n.t0=e,n.next="Create News"===n.t0?13:"Success"===n.t0?16:18;break;case 13:return n.next=15,s.uploadAndSaveNewsUr();case 15:return n.abrupt("break",18);case 16:return t.$router.push("/news-landing"),n.abrupt("break",18);case 18:return s.dialogs[a].isVisible=!1,n.abrupt("break",22);case 20:n.next=6;break;case 22:n.next=27;break;case 24:n.prev=24,n.t1=n["catch"](4),l.e(n.t1);case 27:return n.prev=27,l.f(),n.finish(27);case 30:case"end":return n.stop()}}),n,null,[[4,24,27,30]])})))()}},created:function(){var e=this;e.selectedNews=this.$store.getters["NewsStore/selectedNews"],e.NewsUrl=e.selectedNews.fileUrl,e.form.qImages[0].imageUrl=e.selectedNews.fileUrl,e.form.qInputs[0].name=e.selectedNews.title,e.form.qInputs[1].name=e.selectedNews.description,e.form.qInputs[2].name=e.selectedNews.imageTitle,e.form.qInputs[3].name=e.selectedNews.imageDescription}},b=v,h=n("2877"),N=n("24e8"),y=n("eebe"),x=n.n(y),k=Object(h["a"])(b,s,a,!1,null,null,null);t["default"]=k.exports;x()(k,"components",{QDialog:N["a"]})}}]);