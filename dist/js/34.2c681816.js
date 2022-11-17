(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{"0065":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[n("Form",{attrs:{formData:e.form},on:{Update:function(t){return e.Update(t)},Cancel:function(t){return e.Cancel(t)},onFileSelected:function(t){return e.onFileSelected(t)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[n("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[n("q-spinner",{attrs:{color:"accent",size:"3em",thickness:10}})],1)]),e._l(e.dialogs,(function(t){return n("q-dialog",{key:t.title,model:{value:t.isVisible,callback:function(n){e.$set(t,"isVisible",n)},expression:"dialog.isVisible"}},[n("MessageBox",{attrs:{title:t.title,message:t.message,okayEvent:t.okayEvent,cancelEvent:t.cancelEvent},on:{cancelDialog:function(t){return e.cancelDialog(t)},okDialog:function(t){return e.okDialog(t)}}})],1)}))],2)},i=[],a=(n("23bf"),n("06db"),n("8a81"),n("1c4c"),n("5df3"),n("cadf"),n("ac6a"),n("fa84")),r=n.n(a),l=n("967e"),o=n.n(l),c=(n("7f7f"),n("9bff")),u=n("9437"),f=n("7ac8"),d={title:"Update News",qSelects:[],qInputs:[{label:"Title",name:"",type:"text",selectedFile:null,files:[],Template:{sn:0,iconName:"",visible:!1}},{label:"Description",name:"",type:"text",selectedFile:null,files:[],Template:{sn:0,iconName:"",visible:!1}},{label:"Image Title",name:"",type:"text",selectedFile:null,files:[],Template:{sn:2,iconName:"",visible:!1}},{label:"Image Description",name:"",type:"text",selectedFile:null,files:[],Template:{sn:3,iconName:"",visible:!1}}],qFiles:[{label:"News File (Max Size: 7MB)",name:"",type:"file",selectedFile:null,showPreview:!1,imagePreview:"",showVideoPreview:!1,fileType:"image",files:[],Template:{sn:0,iconName:"",visible:!1}}],qColors:[],qBtns:[{label:"Cancel",name:"Cancel",icon:"close"},{label:"Update",name:"Update",icon:"update"}],qDates:[],GroupedCheckBoxes:[],clearQFiles:function(){var e=0;for(e=0;e<this.qFiles.length;e++)this.qFiles[e].name=""},clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""}},p=[{title:"Update News",isVisible:!1,message:"Do you want to update news",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Success",isVisible:!1,message:"News updated successfully!",okayEvent:"okDialog",cancelEvent:"cancelDialog"},{title:"Failure",isVisible:!1,message:"",okayEvent:"okDialog",cancelEvent:"cancelDialog"}];function m(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=w(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var s=0,i=function(){};return{s:i,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){l=!0,a=e},f:function(){try{r||null==n.return||n.return()}finally{if(l)throw a}}}}function w(e,t){if(e){if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}var v={computed:{showSpinner:function(){return this.$store.getters["authenticationStore/showSpinner"]}},components:{MessageBox:c["a"],Form:u["a"]},data:function(){return{form:d,dialogs:p,NewsUrl:"",doesNewsExists:!1,selectedNews:{}}},methods:{Update:function(){var e,t=this,n=-1,s=m(t.dialogs);try{for(s.s();!(e=s.n()).done;){var i=e.value;if(n++,"Update News"==i.title){t.dialogs[n].isVisible=!0;break}}}catch(a){s.e(a)}finally{s.f()}},Cancel:function(){this.$router.push("/news-landing")},cancelDialog:function(e){var t,n=this,s=-1,i=m(n.dialogs);try{for(i.s();!(t=i.n()).done;){var a=t.value;if(s++,a.title===e){n.dialogs[s].isVisible=!1;break}}}catch(r){i.e(r)}finally{i.f()}},onFileSelected:function(e){var t=this;t.form.qFiles[0].selectedFile=e.selectedFile;var n=new FileReader,s="image";n.addEventListener("load",function(){t.form.qFiles[0].showPreview=!1,t.form.qFiles[0].showVideoPreview=!1,"video"===s?(t.form.qFiles[0].showVideoPreview=!0,t.form.qFiles[0].imagePreview=n.result):(t.form.qFiles[0].showPreview=!0,t.form.qFiles[0].imagePreview=n.result)}.bind(t),!1),t.form.qFiles[0].selectedFile&&(/\.(jpe?g|png|gif)$/i.test(t.form.qFiles[0].selectedFile.name)?(s="image",t.form.qFiles[0].fileType=s,n.readAsDataURL(t.form.qFiles[0].selectedFile)):/\.(ogg|mp4|webm)$/i.test(t.form.qFiles[0].selectedFile.name)?(s="video",t.form.qFiles[0].fileType=s,n.readAsDataURL(t.form.qFiles[0].selectedFile)):alert("Wrong image format. Only supports .jpg, .jpeg, .png, .gif, .mp4, .ogg, or .webm"))},uploadNews:function(){var e=this;return r()(o.a.mark((function t(){var n,s,i,a,r;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,s=new FormData,console.log("selectedFile: ",n.form.qFiles[0].selectedFile),s.append("file",n.form.qFiles[0].selectedFile),i="news/upload",a={url:i,req:s},console.log("payload: ",a),t.next=9,Object(f["b"])(a);case 9:r=t.sent,n.NewsUrl=r.data,console.log("NewsUrl: ",n.NewsUrl);case 12:case"end":return t.stop()}}),t)})))()},checkNewsExistance:function(){var e=this;return r()(o.a.mark((function t(){var n,s,i,a,r;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,s="news/checkfile",i=e.$store.getters["authenticationStore/IdentityModel"],a={url:s,req:{schoolId:i.schoolId}},console.log("payload: ",a),t.next=7,Object(f["b"])(a);case 7:r=t.sent,console.log("response: ",r),n.doesNewsExists=r.data,console.log("doesNewsExists: ",n.doesNewsExists);case 11:case"end":return t.stop()}}),t)})))()},save:function(){var e=this;return r()(o.a.mark((function t(){var n,s,i,a,r;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,s="news/".concat(n.selectedNews.id),i=e.$store.getters["authenticationStore/IdentityModel"],a={url:s,req:{title:n.form.qInputs[0].name,description:n.form.qInputs[1].name,imageTitle:n.form.qInputs[2].name,imageDescription:n.form.qInputs[3].name,fileType:n.form.qFiles[0].fileType,schoolId:i.schoolId,fileUrl:n.NewsUrl,createdBy:i.id}},console.log("payload: ",a),t.next=7,put(a);case 7:r=t.sent,201===r.status||200==r.status?n.dialogs[1].isVisible=!0:(n.dialogs[2].message="Error while saving news",n.dialogs[2].isVisible=!0);case 9:case"end":return t.stop()}}),t)})))()},uploadAndSaveNewsUr:function(){var e=this;return r()(o.a.mark((function t(){var n;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,e.$store.commit("authenticationStore/setShowSpinner",!0),t.next=4,n.uploadNews();case 4:return t.next=6,n.save();case 6:e.$store.commit("authenticationStore/setShowSpinner",!1);case 7:case"end":return t.stop()}}),t)})))()},okDialog:function(e){var t=this;return r()(o.a.mark((function n(){var s,i,a,r,l;return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("payload: ",e),s=t,i=-1,a=m(s.dialogs),n.prev=4,a.s();case 6:if((r=a.n()).done){n.next=22;break}if(l=r.value,i++,l.title!==e){n.next=20;break}n.t0=e,n.next="Create News"===n.t0?13:"Success"===n.t0?16:18;break;case 13:return n.next=15,s.uploadAndSaveNewsUr();case 15:return n.abrupt("break",18);case 16:return t.$router.push("/news-landing"),n.abrupt("break",18);case 18:return s.dialogs[i].isVisible=!1,n.abrupt("break",22);case 20:n.next=6;break;case 22:n.next=27;break;case 24:n.prev=24,n.t1=n["catch"](4),a.e(n.t1);case 27:return n.prev=27,a.f(),n.finish(27);case 30:case"end":return n.stop()}}),n,null,[[4,24,27,30]])})))()}},created:function(){var e=this;e.selectedNews=this.$store.getters["NewsStore/selectedNews"],e.NewsUrl=e.selectedNews.fileUrl,e.form.qFiles[0].showPreview=!0,e.form.qFiles[0].imagePreview=e.selectedNews.fileUrl,e.form.qFiles[0].fileType=e.selectedNews.fileType,e.form.qInputs[0].name=e.selectedNews.title,e.form.qInputs[1].name=e.selectedNews.description,e.form.qInputs[2].name=e.selectedNews.imageTitle,e.form.qInputs[3].name=e.selectedNews.imageDescription}},h=v,b=n("2877"),y=n("0d59"),F=n("24e8"),q=n("eebe"),N=n.n(q),x=Object(b["a"])(h,s,i,!1,null,null,null);t["default"]=x.exports;N()(x,"components",{QSpinner:y["a"],QDialog:F["a"]})}}]);