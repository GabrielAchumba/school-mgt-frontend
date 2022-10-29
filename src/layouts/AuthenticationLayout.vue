<template>
  <q-layout view="hHh lpR fFf">
  
     <q-header 
     class="q-pa-none bg-accent text-primary">
        <q-toolbar>
          <q-btn 
          v-if="this.$router.history.current.fullPath=='/school-landing'"
          flat dense round icon="create" @click="create"/>
          <q-btn flat dense round @click="create" avatar>
          <q-avatar 
            class="bg-primary text-accent"
            size="md">
            <img src='/statics/newway.jpg'>
            </q-avatar>
        </q-btn>
       <!--  <img src='/statics/newway.jpg' width=100 height=40> -->
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

    <q-page-container style="height: 100vh;">
      <router-view/>
    </q-page-container>


  </q-layout>
</template>

<script>
import { colors } from 'quasar'
const { getBrand, setBrand } = colors
import { loadSchools } from "../pages/administrators/school/utils";
export default {
  //name: 'AdminLayout',
  computed: {
        theme_color(){
          return this.$store.getters['authenticationStore/theme_color'];
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
        { name: "login_register", tabIndex: "login_register", label: "Sign In"},
        { name: "school-landing", tabIndex: "schools", label: "Schools" },
      ]
    }
  },
  methods:{
    initializeLogo(){
      var context = this;
      setBrand('primary', context.primaryColor);
      setBrand('accent', context.secondaryColor);
      setBrand('secondary', context.tertiaryColor);
    },
    create(){
            const routename = this.$store.getters["authenticationStore/createURL"];
            this.$router.push(routename);
    },
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
    var context = this;
    context.initializeLogo();
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