<template>
  <q-layout view="hHh lpR fFf" class="bg-primary">

     <q-header class="q-pa-none bg-primary">
       <MainMenuBar
       :menuList="menuList"
       @logoutUser="logoutUser($event)"/>
    </q-header>

    <q-page-container style="height: 100vh;">

      <router-view />
    </q-page-container>

     <q-dialog v-model="globalSearchDialog">
        <searchDialog/>
    </q-dialog>

  </q-layout>
</template>

<script>

import MainMenuBar from "../components/Menus/main-menu-bar.vue";
import searchDialog from "../components/Searches/search-list.vue";
import { menuList } from "../pages/superadministrators/utils";

export default {
  name: 'SuperAdminLayout',
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
    }
  },
  methods:{
    showSelectedRouters(){
      if(this.$router.history.current.fullPath != "/super-admin"){
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
    initializeLayoutData(){
        var context =  this;
        var landingMainMenu = context.menuList.map((row) => {
            return {
                ...row
            }
        })

        landingMainMenu.shift();
        this.$store.commit("administratorStore/SetSuperAdminMainMenuList", landingMainMenu);
    }
  },
  async created(){
    window.addEventListener("resize", this.onResize);
    var context = this;
    this.$store.commit("authenticationStore/setActiveRoute", "superAdminLanding");
    
    if(window.innerWidth < 700) context.rightDrawerOpen = true;
    this.$store.commit('authenticationStore/setIsMobile', context.rightDrawerOpen);
    context.initializeLayoutData();

  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
}
</script>