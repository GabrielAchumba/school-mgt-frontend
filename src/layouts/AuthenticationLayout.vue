<template>
  <q-layout view="hHh lpR fFf" class="bg-accent">
  
     <q-header 
     class="q-pa-none bg-accent text-primary"  
     style="border-bottom: 2px solid #FFFFFF"
     height-hint="58">
        <q-toolbar>
        <img src='/statics/newway.jpg' width=100 height=40>
         <q-space />
      <q-tabs v-model="selected_tab" shrink>

        <div v-if="rightDrawerOpen">
          <q-btn
            @click="toggleMobilePhoneMenu"
            :icon="rightMenuIcon"
            flat
            dense
            class="text-primary bg-accent">
            <q-menu fit>
              <q-list dense class="text-accent text-caption bg-primary">
                <q-item
                v-for="(menuItem) in menuList" :key="menuItem.name" 
                class="bg-primary text-accent"
                clickable
                  @click="scrollToElement(menuItem.name)">
                      <q-item-section>
                      {{ menuItem.label}}
                      </q-item-section>
                  </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>

        <q-tab 
        v-else
         v-for="(menuItem) in menuList" :key="menuItem.name"
        :style= getTabHeaderStyle(menuItem.tabIndex)
        class="q-mr-sm q-py-xs text-primary" 
        @click="scrollToElement(menuItem.name);" 
        :label="menuItem.label" />
       </q-tabs>
        
      </q-toolbar>
    </q-header>

    <q-page-container style="height: 100vh; background-color: #056608;">
      <router-view/>
    </q-page-container>


  </q-layout>
</template>

<script>
import { loadSchools } from "../pages/administrators/school/utils";
export default {
  //name: 'AdminLayout',
  computed: {
        theme_color(){
          return this.$store.getters['authenticationStore/theme_color'];
        },
      },
  data () {
    return {
      rightMenuIcon: "menu",
      rightDrawerOpen: window.innerWidth < 700 ? true : false,
      leftDrawerOpen: true,
      showAccountDetails: false,
      showMobilePhoneMenu: false,
      selected_tab: 'home',
      menuList: [
        { name: "/", tabIndex: "home", label: "Home" },
        { name: "login_register", tabIndex: "login_register", label: "Login/Register"},
        { name: "school-landing", tabIndex: "schools", label: "School" },
      ]
    }
  },
  methods:{
    onResize(e) {
      const width = window.innerWidth;
      var content = this;
      content.rightDrawerOpen = false
      if(width < 700) content.rightDrawerOpen = true;
    },
    toggleMobilePhoneMenu(){
      var context = this;

      /* if(context.showMobilePhoneMenu == false){
        //context.showMobilePhoneMenu = true;
        //context.rightMenuIcon = "close";
      }else{
        context.showMobilePhoneMenu = false;
        context.rightMenuIcon = "menu"
        https://arcane-inlet-68126.herokuapp.com/
      } */
    },
    getTabHeaderStyle(tabIndex){
      var context =  this;
      if(context.selected_tab == tabIndex){
        return `[{backgroundColor: ${context.theme_color}}]`
      }
      return `[{}]`
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

      var context = this;
      context.selected_tab =  routename;
      this.$router.push(`${routename}`);

    }
  },
  async created() {
    window.addEventListener("resize", this.onResize);

    const schools = await loadSchools();
    this.$store.commit('schoolStore/SetSchools', schools.result);

  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
}
</script>

<style>
</style>