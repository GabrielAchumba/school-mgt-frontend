<template>
  <q-layout view="hHh lpR fFf" class="bg-primary">

     <q-header class="q-pa-none bg-primary">
       <MainMenuBar
       :menuList="contextMenuList"
       @logoutUser="logoutUser($event)"/>
    </q-header>

    <q-page-container style="height: 100vh;">

      <router-view
      v-if="!showSpinner"/>
      <div 
      v-show="showSpinner"
      class="q-gutter-md row">
            <div class="col-12 q-pa-sm absolute-center flex flex-center">
                <q-spinner
                    color="accent"
                    size="3em"
                    :thickness="10"
                />
            </div>
        </div>
    </q-page-container>

     <q-dialog v-model="globalSearchDialog">
        <searchDialog/>
    </q-dialog>

  </q-layout>
</template>

<script>
import { colors } from 'quasar'
const { getBrand, setBrand } = colors
import MainMenuBar from "../components/Menus/main-menu-bar.vue";
import searchDialog from "../components/Searches/search-list.vue";
import {  menuList, torpaFeatures } from "../pages/administrators/utils";

export default {
  name: 'AdminLayout',
  computed: {
        IdentityModel() {
            return this.$store.getters['authenticationStore/IdentityModel'];
        },
        Loginstatus() {
          return this.$store.getters['authenticationStore/Loginstatus'];
        },
        theme_color(){
          return this.$store.getters['authenticationStore/theme_color'];
        },
        globalSearchDialog() {
            return this.$store.getters['authenticationStore/globalSearchDialog'];
        },
        primaryColor() {
            return this.$store.getters['administratorStore/primaryColor'];
        },
        secondaryColor() {
            return this.$store.getters['administratorStore/secondaryColor'];
        },
        tertiaryColor() {
            return this.$store.getters['administratorStore/tertiaryColor'];
        },
      },
  components: {
    MainMenuBar,
    searchDialog,
  },
  data () {
    return {
      schoolName: "",
      leftDrawerOpen: true,
      showAccountDetails: false,
      rightMenuIcon: "menu",
      navs: [],
      rightDrawerOpen: window.innerWidth < 700 ? true : false,
      menuList: menuList,
      contextMenuList: [],
      landingMenu: [],
      checkSubscription: {},
      showSpinner: false,
    }
  },
  methods:{
    showSelectedRouters(){
      console.log("this.$router: ", this.$router)
      if(this.$router.history.current.fullPath != "/admin"){
        return true;
      }
      return false;
    },
    getIsUserPhoto(){
      var context = this;
      if(context.IdentityModel.base64String != "" &&
      context.IdentityModel.base64String != undefined){
        return true
      }else{
        return false
      }
    },
    toggleButton(){
      var context = this;

      if(context.showAccountDetails == true){
        context.showAccountDetails = false;
      }else{
        context.showAccountDetails = true;
      }
    },
    logoutUser(){
      this.$store.dispatch('authenticationStore/Logout')
    },
    scrollToElement(routename){
      this.$router.push(`${routename}`);

    },
    onResize(e) {
      const width = window.innerWidth;
      var context = this;
      context.rightDrawerOpen = false
      if(width < 700) context.rightDrawerOpen = true;
      this.$store.commit('authenticationStore/setIsMobile', context.rightDrawerOpen);
    },
    verifyResultsAnalysisSubscription(){
      var context = this;
      context.checkSubscription.isResultsAnalysis = true;
      if(context.checkSubscription.isResultsAnalysis == false){
        let index = -1;
        let i = 0;
        for(i = 0; i < context.landingMenu.length; i++){
          if(context.landingMenu[i].title == torpaFeatures.cGPAComputation){
            index = i;
            break;
          }
        }
        if(index != -1){
          context.landingMenu.splice(index, 1);
        }

        index = -1;
        for(i = 0; i < context.contextMenuList.length; i++){
          if(context.contextMenuList[i].title == torpaFeatures.cGPAComputation){
            index = i;
            break;
          }
        }
        if(index != -1){
          context.contextMenuList.splice(index, 1);
        }
      }
    },
    verifyFileManagementSubscription(){
       var context = this;
       context.checkSubscription.isFileManagement = true;
      if(context.checkSubscription.isFileManagement == false){
        let index = -1;
        let i = 0;
        for(i = 0; i < context.landingMenu.length; i++){
          if(context.landingMenu[i].title == torpaFeatures.directories){
            index = i;
            break;
          }
        }
        if(index != -1){
          context.landingMenu.splice(index, 1);
        }

        index = -1;
        for(i = 0; i < context.contextMenuList.length; i++){
          if(context.contextMenuList[i].title == torpaFeatures.directories){
            index = i;
            break;
          }
        }
        if(index != -1){
          context.contextMenuList.splice(index, 1);
        }
      }
    },
    verifyAdevertizementSubscription(){
       var context = this;
       context.checkSubscription.isAdvertizement = true;
      if(context.checkSubscription.isAdvertizement == false){
        let index = -1;
        let i = 0;
        for(i = 0; i < context.landingMenu.length; i++){
          if(context.landingMenu[i].title == torpaFeatures.ads){
            index = i;
            break;
          }
        }
        if(index != -1){
          context.landingMenu.splice(index, 1);
        }

        index = -1;
        for(i = 0; i < context.contextMenuList.length; i++){
          if(context.contextMenuList[i].title == torpaFeatures.ads){
            index = i;
            break;
          }
        }
        if(index != -1){
          context.contextMenuList.splice(index, 1);
        }
      }
    },
    verifyExamQuizSubscription(){
       var context = this;
       context.checkSubscription.isExamQuiz = true;
      if(context.checkSubscription.isExamQuiz == false){
        let index = -1;
        let i = 0;
        for(i = 0; i < context.landingMenu.length; i++){
          if(context.landingMenu[i].title == torpaFeatures.cBTPractice){
            index = i;
            break;
          }
        }
        if(index != -1){
          context.landingMenu.splice(index, 1);
        }

        index = -1;
        for(i = 0; i < context.contextMenuList.length; i++){
          if(context.contextMenuList[i].title == torpaFeatures.cBTPractice){
            index = i;
            break;
          }
        }
        if(index != -1){
          context.contextMenuList.splice(index, 1);
        }
      }
    },
    verifyLibraryManagementSubscription(){
       var context = this;
       context.checkSubscription.isLibraryManagement = true;
      if(context.checkSubscription.isLibraryManagement == false){
        let index = -1;
        let i = 0;
        for(i = 0; i < context.landingMenu.length; i++){
          if(context.landingMenu[i].title == torpaFeatures.libraryMgt){
            index = i;
            break;
          }
        }
        if(index != -1){
          context.landingMenu.splice(index, 1);
        }

        index = -1;
        for(i = 0; i < context.contextMenuList.length; i++){
          if(context.contextMenuList[i].title == torpaFeatures.libraryMgt){
            index = i;
            break;
          }
        }
        if(index != -1){
          context.contextMenuList.splice(index, 1);
        }
      }
    },
    verifyOnlineLearningSubscription(){
       var context = this;
       context.checkSubscription.isOnlineLearning = true;
      if(context.checkSubscription.isOnlineLearning == false){
        let index = -1;
        let i = 0;
        for(i = 0; i < context.landingMenu.length; i++){
          if(context.landingMenu[i].title == torpaFeatures.onlineLearning){
            index = i;
            break;
          }
        }
        if(index != -1){
          context.landingMenu.splice(index, 1);
        }

        index = -1;
        for(i = 0; i < context.contextMenuList.length; i++){
          if(context.contextMenuList[i].title == torpaFeatures.onlineLearning){
            index = i;
            break;
          }
        }
        if(index != -1){
          context.contextMenuList.splice(index, 1);
        }
      }
    },
    verifySocialize(){
       var context = this;
       context.checkSubscription.isSocialize = true;
      if(context.checkSubscription.isSocialize == false){
        let index = -1;
        let i = 0;
        for(i = 0; i < context.landingMenu.length; i++){
          if(context.landingMenu[i].title == torpaFeatures.socialize){
            index = i;
            break;
          }
        }
        if(index != -1){
          context.landingMenu.splice(index, 1);
        }

        index = -1;
        for(i = 0; i < context.contextMenuList.length; i++){
          if(context.contextMenuList[i].title == torpaFeatures.socialize){
            index = i;
            break;
          }
        }
        if(index != -1){
          context.contextMenuList.splice(index, 1);
        }
      }
    },
    async checkSubscritpion(){
      var context = this;
      var user = this.$store.getters["authenticationStore/IdentityModel"]
      /* const { result } = await checkResultsAnalysisSubscription(user.schoolId);
      context.checkSubscription = {...result}
      this.$store.commit("administratorStore/SetIsSubscription", result) */

      console.log("context.menuList: ", context.menuList)
      var listOfMenuItems = [];
      for(const mItem of context.menuList){
        let _mItem = {...mItem};
        _mItem.to = `/${mItem.to}`
        listOfMenuItems.push({..._mItem})
      }

      context.contextMenuList = listOfMenuItems.map((row)=> {
          return {
            ...row
          }
        })
      context.landingMenu = listOfMenuItems.map((row)=> {
          return {
            ...row
          }
        })
      context.landingMenu.shift();

      /* context.verifyResultsAnalysisSubscription();
      context.verifyFileManagementSubscription();
      context.verifyAdevertizementSubscription();
      context.verifyExamQuizSubscription();
      context.verifyLibraryManagementSubscription();
      context.verifyOnlineLearningSubscription();
      context.verifySocialize(); */

      /* context.menuList = context.contextMenuList.map((row) => {
        return {
          ...row,
        }
      }) */

      this.$store.commit("administratorStore/SetMainMenuList", context.landingMenu)
    },
    initializeLogo(logo){
        /* setBrand('primary', '#000000');
        setBrand('accent', '#00FFFF');
        setBrand('secondary', '#FFCC00'); */

        setBrand('primary', logo.primaryColor);
        setBrand('accent', logo.tertiaryColor);
        setBrand('secondary', logo.secondaryColor);
    },
  },
  async created(){
    
    var context = this;
    context.showSpinner = true;
    window.addEventListener("resize", this.onResize);
  
    this.$store.commit("authenticationStore/setActiveRoute", "adminLanding");
    
    if(window.innerWidth < 700) context.rightDrawerOpen = true;
    this.$store.commit('authenticationStore/setIsMobile', context.rightDrawerOpen);
      context.checkSubscritpion();
       context.showSpinner = false;

  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
}
</script>