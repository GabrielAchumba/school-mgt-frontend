(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[106],{"1cb1":function(e,t,s){"use strict";var n=s("aa23"),r=s.n(n);r.a},7102:function(e,t,s){},7138:function(e,t,s){"use strict";var n=s("7102"),r=s.n(n);r.a},7677:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-layout",{staticClass:"bg-primary",attrs:{view:"hHh lpR fFf"}},[s("q-header",[s("SocialMedia"),s("MainNavbar")],1),s("q-page-container",{staticStyle:{height:"100vh"}},[e.showSpinner?e._e():s("router-view",{staticClass:"bg-primary",on:{linkClick:function(t){return e.linkClick(t)}}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showSpinner,expression:"showSpinner"}],staticClass:"q-gutter-md row"},[s("div",{staticClass:"col-12 q-pa-sm absolute-center flex flex-center"},[s("q-spinner",{attrs:{color:"accent",size:"3em",thickness:10}})],1)])],1)],1)},r=[],i=s("c47a"),o=s.n(i),a=s("fa84"),c=s.n(a),u=s("967e"),l=s.n(u),m=(s("6d67"),s("456d"),s("8a81"),s("d25f"),s("9986"),s("8e6e"),s("bc78")),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"q-pa-none bg-accent text-primary"},[s("q-bar",{staticClass:"bg-accent text-primary"},[s("IconLabel",{staticClass:"q-pa-sm",attrs:{icon:e.phoneIcon,caption:e.phoneNumber}}),s("IconLabel",{staticClass:"q-pa-sm",attrs:{icon:e.emailIcon,caption:e.email}}),s("q-space"),s("p",{staticClass:"q-pa-sm q-ma-sm text-caption"},[e._v(e._s(e.selectedSchool.schoolName))]),s("q-space"),s("q-icon",{staticClass:"q-pa-md",attrs:{name:e.facebookIcon,size:"sm"}}),s("q-icon",{staticClass:"q-pa-md",attrs:{name:e.twitterIcon,size:"sm"}}),s("q-icon",{staticClass:"q-pa-md",attrs:{name:e.linkedInIcon,size:"sm"}})],1),e.isSchoolRoute?s("q-bar",{staticClass:"bg-accent text-primary"},[s("q-btn",{staticClass:"text-primary bg-accent",attrs:{flat:"",dense:"",round:"",icon:"create"},on:{click:e.create}})],1):e._e()],1)},d=[],h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bg-accent text-primary"},[s("p",{staticClass:"q-pa-sm q-ma-sm text-caption"},[e._v(e._s(e.caption))])])},f=[],g={props:{icon:{type:String,default:""},caption:{type:String,default:""}}},b=g,v=s("2877"),y=s("0016"),S=s("eebe"),w=s.n(S),q=Object(v["a"])(b,h,f,!1,null,null,null),C=q.exports;w()(q,"components",{QIcon:y["a"]});var O={computed:{isSchoolRoute:function(){return this.$store.getters["authenticationStore/isSchoolRoute"]},selectedSchool:function(){return console.log("selectedSchool: ",this.$store.getters["schoolStore/selectedSchool"]),this.$store.getters["schoolStore/selectedSchool"]},email:function(){return this.$store.getters["ContactStore/officialEmail"]},phoneNumber:function(){return this.$store.getters["ContactStore/officialPhoneNumber1"]}},components:{IconLabel:C},props:{phoneIcon:{type:String,default:"phone"},emailIcon:{type:String,default:"email"},facebookIcon:{type:String,default:"facebook"},twitterIcon:{type:String,default:"twitter"},linkedInIcon:{type:String,default:"linkedin"}},methods:{create:function(){var e=this.$store.getters["authenticationStore/createURL"];this.$router.push(e)}}},x=O,I=s("d847"),L=s("2c91"),k=s("9c40"),$=Object(v["a"])(x,p,d,!1,null,null,null),j=$.exports;w()($,"components",{QBar:I["a"],QSpace:L["a"],QIcon:y["a"],QBtn:k["a"]});var E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"q-pa-none bg-red text-accent"},[s("q-toolbar",{staticClass:"bg-primary text-accent"},[s("img",{staticStyle:{height:"50px",width:"50px"},attrs:{src:e.selectedLogo.fileUrl}}),s("q-space"),s("q-tabs",{attrs:{shrink:""},model:{value:e.selected_tab,callback:function(t){e.selected_tab=t},expression:"selected_tab"}},[e.rightDrawerOpen?s("div",[s("q-btn",{staticClass:"text-accent bg-primary",attrs:{icon:e.rightMenuIcon,flat:"",dense:""}},[s("q-menu",{attrs:{fit:""}},[s("q-list",{staticClass:"text-accent text-caption bg-primary",staticStyle:{width:"200px"},attrs:{dense:""}},e._l(e.menuList,(function(t){return s("q-item",{key:t.name,staticClass:"bg-primary text-accent",attrs:{clickable:""},on:{click:function(s){return e.scrollToElement(t.name)}}},[s("q-item-section",[e._v("\n                  "+e._s(t.label)+"\n                  ")])],1)})),1)],1)],1)],1):e._l(e.menuList,(function(t){return s("q-tab",{key:t.name,staticClass:"q-mr-sm q-py-xs text-accent",attrs:{label:t.label},on:{click:function(s){return e.scrollToElement(t.name)}}})}))],2)],1)],1)},_=[],N={computed:{menuList:function(){return this.$store.getters["authenticationStore/menuList"]},selectedLogo:function(){return this.$store.getters["LogoStore/selectedLogo"]}},components:{IconLabel:C},data:function(){return{rightDrawerOpen:window.innerWidth<700,selected_tab:"home",rightMenuIcon:"menu"}},methods:{scrollToElement:function(e){var t=this;t.selected_tab=e,this.$router.push("".concat(e));var s="/school-landing"==this.$router.history.current.fullPath;console.log("isSchoolRoute: ",s),this.$store.commit("authenticationStore/setIsSchoolRoute",s)}}},P=N,T=(s("1cb1"),s("65c6")),Q=s("429b"),M=s("4e73"),B=s("1c1c"),R=s("66e5"),U=s("4074"),z=s("7460"),F=Object(v["a"])(P,E,_,!1,null,"3d5442cd",null),V=F.exports;w()(F,"components",{QToolbar:T["a"],QSpace:L["a"],QTabs:Q["a"],QBtn:k["a"],QMenu:M["a"],QList:B["a"],QItem:R["a"],QItemSection:U["a"],QTab:z["a"]});var A=s("2898"),D=s("a229"),W=s("ce65"),H=s("04a5"),J=s("8e16"),Y=s("7ac8"),G=function(){var e=c()(l.a.mark((function e(t){var s,n;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s="aboutus/files/".concat(t),e.next=3,Object(Y["a"])({url:s});case 3:return n=e.sent,e.abrupt("return",{result:n.data,message:""});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=c()(l.a.mark((function e(t){var s,n;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s="contact/files/".concat(t),e.next=3,Object(Y["a"])({url:s});case 3:return n=e.sent,e.abrupt("return",{result:n.data,message:""});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=s("86fd");function Z(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function ee(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(s),!0).forEach((function(t){o()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):Z(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}m["a"].getBrand;var te=m["a"].setBrand,se={components:{SocialMedia:j,MainNavbar:V},data:function(){return{showSpinner:!0,image:"/statics/images/Neway_Logo.jpg"}},methods:{initializeLogo:function(e){te("primary",e.primaryColor),te("accent",e.tertiaryColor),te("secondary",e.secondaryColor)},branding:function(e){var t=this;return c()(l.a.mark((function s(){var n,r,i,o,a,c,u,m,p,d,h,f,g,b,v,y;return l.a.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return n=e.schoolId,r=t,i="+234",o=e.address,a=t.$store.getters["authenticationStore/IdentityModel"],a&&console.log("user: ",a),s.next=8,Object(A["a"])(n);case 8:return c=s.sent,0===c.result.length&&c.result.push({fileUrl:"/statics/newway.jpg",primaryColor:"#FFFFFF",secondaryColor:"#FF0000",tertiaryColor:"#056608",createdBy:"CEO"}),t.$store.commit("LogoStore/SetSelectedLogo",c.result[0]),r.initializeLogo(c.result[0]),s.next=14,Object(D["a"])(n);case 14:return u=s.sent,m=[],0===u.result.length?m.result.push({title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptate molestias atque libero laboriosam fugiat, nostrum eveniet ea deserunt. Itaque nesciunt consequatur earum rerum esse cumque accusamus cum consequuntur perferendis?\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptate molestias atque libero laboriosam fugiat, nostrum eveniet ea deserunt. Itaque nesciunt consequatur earum rerum esse cumque accusamus cum consequuntur perferendis?\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptate molestias atque libero laboriosam fugiat, nostrum eveniet ea deserunt. Itaque nesciunt consequatur earum rerum esse cumque accusamus cum consequuntur perferendis?\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptate molestias atque libero laboriosam fugiat, nostrum eveniet ea deserunt. Itaque nesciunt consequatur earum rerum esse cumque accusamus cum consequuntur perferendis?\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptate molestias atque libero laboriosam fugiat, nostrum eveniet ea deserunt. Itaque nesciunt consequatur earum rerum esse cumque accusamus cum consequuntur perferendis?",fileUrl:"/statics/images/results.jpg",imageTitle:"Lorem ipsum dolor sit",fileType:"image",imageDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",createdBy:"CEO",isVideo:!1,isImage:!0,isAudio:!1}):m=u.result.map((function(e){var t=!1,s=!1,n=!1;return"video"===e.fileType?t=!0:"audio"===e.fileType?n=!0:s=!0,ee(ee({},e),{},{isVideo:t,isImage:s,isAudio:n})})),t.$store.commit("NewsStore/SetNewses",m),s.next=20,Object(W["a"])(n);case 20:return p=s.sent,0===p.result.length&&p.result.push({title:"Our Mission",description:"To define the pace of business technology by the development of solutions that create synergies for maximum productivity",fileUrl:"/statics/images/results.jpg",createdBy:"CEO"}),t.$store.commit("MissionStore/SetSelectedMission",p.result[0]),s.next=25,Object(H["a"])(n);case 25:return d=s.sent,0===d.result.length&&d.result.push({title:"Our Vision",description:"To become a leader in fit-for-purpose and innovative technologies that deliver our clients’ business goals timely and efficiently",fileUrl:"/statics/images/results.jpg",createdBy:"CEO"}),t.$store.commit("VisionStore/SetSelectedVision",d.result[0]),s.next=30,K(n);case 30:return h=s.sent,0===h.result.length&&h.result.push({title:"We’d Love To Help You",description:"Please feel free to get in touch with us. We'd love to hear your thoughts & answer any questions you may have!",createdBy:"CEO",officialEmail:"nsglobe2022@gmail.com",officialPhoneNumber1:"07032488605",officialPhoneNumber2:"08062716049"}),f={title:h.result[0].title,description:h.result[0].description,list:[{title:"Visit us on",description:o,icon:"location_on"},{title:"Call us on",description:"(".concat(i,")").concat(h.result[0].officialPhoneNumber1,",  \n                        (").concat(i,")").concat(h.result[0].officialPhoneNumber2),icon:"phone"},{title:"Mail us @",description:h.result[0].officialEmail,icon:"email"}]},t.$store.commit("ContactStore/SetOfficialEmail",h.result[0].officialEmail),t.$store.commit("ContactStore/SetOfficialPhoneNumber1","(".concat(i,")").concat(h.result[0].officialPhoneNumber1)),t.$store.commit("ContactStore/SetSelectedContact",f),s.next=38,Object(X["a"])(n);case 38:return g=s.sent,0===g.result.length&&g.result.push({title:"Our Core Value",description:"To define the pace of business technology by the development of solutions that create synergies for maximum productivity",fileUrl:"/statics/images/results.jpg",createdBy:"CEO"}),t.$store.commit("CoreValueStore/SetSelectedCoreValue",g.result[0]),s.next=43,G(n);case 43:return b=s.sent,0===b.result.length&&b.result.push({title:"Unlimited/limitless progression and possibilities with us",description:"Syncware Limited is made up of vastly experienced and creative minds; driven by its organized aspirations to improve the experience that software and information technologies provide for businesses in the energy and related industries around the globe. Syncware Limited is a company incorporated by energy, software and corporate professionals. Our key aim is to provide integrated and cutting-edge technologies that can make a difference.\n\n\n                        We are a company that believes in developing technologies that synchronizes our innovative ideas with real-time client-based requirements to produce IT solutions that put the client ahead of the pack. We first listen, originate, strategize and then creatively develop fit-for-purpose technologies that set the pace while offering our clients limitless possibilities to perform and sustain elevated productivity standards over time.\n                        \n                        \n                        Syncware Limited is a synergy of proven, tested and synthetic expression of creative thinking built into its operational processes, procedures and practices for software/IT solution development and deployment. Our uniqueness in terms of people culture and organization defines our competitive advantage in business.",createdBy:"CEO"}),v=ee(ee({},b.result[0]),{},{list:[ee({},p.result[0]),ee({},d.result[0]),ee({},g.result[0])]}),t.$store.commit("AboutUsStore/SetSelectedAboutUs",v),s.next=49,Object(J["a"])(n);case 49:y=s.sent,0===y.result.length&&y.result.push({title:"WELCOME TO TORPA",description:"... that puts the feature of your child in your hands",fileUrl:"/statics/images/staffs.jpg",createdBy:"CEO"}),t.$store.commit("CarouselStore/SetCarousels",y.result),t.$store.commit("authenticationStore/setMenuList",!0);case 53:case"end":return s.stop()}}),s)})))()},linkClick:function(e){var t=this;this.$store.commit("componentsStore/setTableRow",e),this.$store.commit("schoolStore/SetSelectedSchool",e);var s={schoolId:"CEO",address:"Plot 156 Tom Inko-Tariah Avenue, Rumuogba Estate, Port Harcourt, Rivers State, Nigeria"};void 0!=e.schoolName&&(s.schoolId=e.id,s.address=e.address),t.branding(s),this.$router.push("/")}},created:function(){var e=this;return c()(l.a.mark((function t(){var s;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e,s.showSpinner=!0,console.log("context.showSpinner: ",s.showSpinner),t.next=5,s.branding({schoolId:"CEO",address:"Plot 156 Tom Inko-Tariah Avenue, Rumuogba Estate, Port Harcourt, Rivers State, Nigeria"});case 5:s.showSpinner=!1,console.log("context.showSpinner: ",s.showSpinner);case 7:case"end":return t.stop()}}),t)})))()}},ne=se,re=(s("7138"),s("4d5a")),ie=s("e359"),oe=s("09e3"),ae=s("0d59"),ce=Object(v["a"])(ne,n,r,!1,null,null,null);t["default"]=ce.exports;w()(ce,"components",{QLayout:re["a"],QHeader:ie["a"],QPageContainer:oe["a"],QSpinner:ae["a"]})},aa23:function(e,t,s){}}]);