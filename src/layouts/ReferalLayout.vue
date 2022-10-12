<template>
  <q-layout view="hHh lpR fFf" class="bg-primary">

     <q-header class="q-py-sm bg-primary text-accent" :style="'border-bottom: 2px solid '+ theme_color">
        <q-toolbar>
          <!-- <q-btn
            v-go-back.single
            v-once
            class="text-accent bg-primary q-pa-sm"
            icon="arrow_back"
            flat
          /> -->
         <img src='/statics/newway.jpg' width=100 height=40>
        <q-space ></q-space>
      <q-tabs shrink>

        <q-btn
          @click="toggleButton" 
          avatar>
            <q-avatar
            v-if="getIsUserPhoto()" 
            class="bg-primary text-accent">
  	        <q-img
                  :src="IdentityModel.base64String"
                />
  	      </q-avatar>
          <q-avatar
            v-else
            class="bg-accent text-primary">
  	        {{ IdentityModel.firstName.charAt(0) }}
  	      </q-avatar>
          <q-menu
            fit>
                      <q-list dense class="text-accent text-caption bg-primary">
                        <q-item
                            class="bg-primary text-accent">
                            <q-item-section avatar>
                            <div class="row text-center flex flex-center q-pb-lg">
                              <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                              <div 
                              class="q-pa-md" style="font-family: Lato;" 
                              avatar>
                                <q-avatar 
                                v-if="getIsUserPhoto()" 
                                class="bg-primary text-accent">
                                   <q-img
                                      :src="IdentityModel.base64String"
                                    />
                                  </q-avatar>
                                  <q-avatar 
                                  v-else
                                  class="bg-accent text-primary">
                                    {{ IdentityModel.firstName.charAt(0) }}
                                  </q-avatar>
                              </div>
                              <div 
                              class="q-pa-md" style="font-family: Lato;">
                                <p class="bg-primary text-accent">
                                    {{ IdentityModel.firstName }} {{ IdentityModel.lastName }}
                                  </p>
                              </div>
                              </div>
                            </div>
                            </q-item-section>
                        </q-item>

                            <q-item
                            class="bg-primary accent-white">
                            <q-item-section avatar>
                            <div class="row text-center flex flex-center q-pb-lg">
                              <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                                <q-btn 
                                  class="q-mr-md bg-accent text-primary" 
                                  size="12px" 
                                  :style="'min-height:auto; padding:1px;'" 
                                  dense icon="color_lens"
                                  @click="logoutUser">
                                      Logout
                                    </q-btn>
                              </div>
                              </div>
                            </q-item-section>
                            </q-item>
                      </q-list>
            </q-menu>
        </q-btn>

        <div>
          <q-btn
            v-if="this.$router.history.current.fullPath != '/admin'"
            :icon="rightMenuIcon"
            flat
            dense
            class="text-accent bg-primary">
            <q-menu fit>
              <q-list dense class="text-accent text-caption bg-primary">
                <q-item
                v-for="(menuItem) in menuList" :key="menuItem.title" 
                class="bg-primary text-accent"
                clickable
                  @click="scrollToElement(menuItem.to)">
                      <q-item-section>
                      {{ menuItem.title}}
                      </q-item-section>
                  </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-tabs> 
        
      </q-toolbar>
    </q-header>

    <q-page-container>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { loadClassRooms } from "../pages/administrators/classroom/utils";
import { loadStaffs } from "../pages/administrators/staff/utils";
import { loadStudents } from "../pages/administrators/student/utils";
import { loadSubjects } from "../pages/administrators/subject/utils";
import { loadAssessments } from "../pages/administrators/assessment/utils";
import { loadSchools } from "../pages/administrators/school/utils";

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
      },
  components: {

  },
  data () {
    return {
      leftDrawerOpen: true,
      showAccountDetails: false,
      rightMenuIcon: "menu",
      navs: [],
      rightDrawerOpen: window.innerWidth < 700 ? true : false,
        menuList: [
            {
                name: "showPage",
                title: "Home", 
                description: "Landing Page",
                image: "/statics/images/staffs.jpg",
                to: "/referal"
              },
              {
                name: "showPage",
                title: "Schools Payments", 
                description: "Current Payments made by schools you refered to Newway",
                image: "/statics/images/staffs.jpg",
                to: "/school-current-payment-landing"
              },
        ],
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
  },
  async created(){
    window.addEventListener("resize", this.onResize);
    var context = this;
    
    if(window.innerWidth < 700) context.rightDrawerOpen = true;
    this.$store.commit('authenticationStore/setIsMobile', context.rightDrawerOpen);


  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
}
</script>