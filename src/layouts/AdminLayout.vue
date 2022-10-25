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

import { loadClassRooms } from "../pages/administrators/classroom/utils";
import { loadStaffs } from "../pages/administrators/staff/utils";
import { loadStudents } from "../pages/administrators/student/utils";
import { loadSubjects } from "../pages/administrators/subject/utils";
import { loadAssessments } from "../pages/administrators/assessment/utils";
import { loadSchools } from "../pages/administrators/school/utils";
import MainMenuBar from "../components/Menus/main-menu-bar.vue";
import searchDialog from "../components/Searches/search-list.vue";
import { checkResultsAnalysisSubscription, menuList } from "../pages/administrators/utils";

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
    async checkResultSubscritpion(){
      var context = this;
      var user = this.$store.getters["authenticationStore/IdentityModel"]
      const { result, success } = await checkResultsAnalysisSubscription(user.schoolId);
      this.$store.commit("administratorStore/SetIsResultsAnalysisSubscription", result)
      const landingMenu = context.menuList.map((row)=> {
          return {
            ...row
          }
        })
      landingMenu.shift();

      if(!success){
        let index = -1;
        let i = 0;
        for(i = 0; i < landingMenu.length; i++){
          if(landingMenu[i].title == "Student Results"){
            index = i;
            break;
          }
        }
        if(index != -1){
          landingMenu.splice(index, 1);
        }

        index = -1;
        for(i = 0; i < context.menuList.length; i++){
          if(context.menuList[i].title == "Student Results"){
            index = i;
            break;
          }
        }
        if(index != -1){
          context.menuList.splice(index, 1);
        }
      }

      this.$store.commit("administratorStore/SetMainMenuList", landingMenu)
    }
  },
  async created(){
    console.log("seen 2");
    window.addEventListener("resize", this.onResize);
    var context = this;
    this.$store.commit("authenticationStore/setActiveRoute", "adminLanding");
    
    if(window.innerWidth < 700) context.rightDrawerOpen = true;
    this.$store.commit('authenticationStore/setIsMobile', context.rightDrawerOpen);

      const schools = await loadSchools();
      this.$store.commit('schoolStore/SetSchools', schools.result);

       var user = this.$store.getters["authenticationStore/IdentityModel"]
        for(const school of schools.result){
          if(school.id === user.schoolId){
            context.schoolName =  school.schoolName;
            this.$store.commit('schoolStore/SetUserSchool', school);
            break;
          }
        }

       if(user.userType == "Admin" && user.designationId !== "CEO"){
          const classRooms = await loadClassRooms(user.schoolId);
          this.$store.commit('classRoomStore/SetClassRooms', classRooms.result);
          const staffs = await loadStaffs(user.schoolId);
          this.$store.commit('staffStore/SetStaffs', staffs.result);
          const students = await loadStudents(user.schoolId);
          this.$store.commit('studentStore/SetStudents', students.result);
          const subjects = await loadSubjects(user.schoolId);
          this.$store.commit('subjectStore/SetSubjects', subjects.result);
          const assessments = await loadAssessments(user.schoolId);
          this.$store.commit('assessmentStore/SetAssessments', assessments.result);
          context.checkResultSubscritpion();
       }

  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
}
</script>