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

  </q-layout>
</template>

<script>
import { colors } from 'quasar'
const { getBrand, setBrand } = colors
import { loadClassRooms } from "../pages/administrators/classroom/utils";
import { loadStaffs } from "../pages/administrators/staff/utils";
import { loadStudents } from "../pages/administrators/student/utils";
import { loadSubjects } from "../pages/administrators/subject/utils";
import { loadAssessments } from "../pages/administrators/assessment/utils";
import { loadGrades } from "../pages/administrators/grade/utils";
import { loadLevels } from "../pages/administrators/level/utils";
import { loadSessions } from "../pages/administrators/session/utils";
import { loadSchools } from "../pages/administrators/school/utils";
import MainMenuBar from "../components/Menus/main-menu-bar.vue";
import { checkResultsAnalysisSubscription, instructorMenuList, torpaFeatures } from "../pages/administrators/utils";
import { loadLogos } from "../pages/administrators/branding/logo/utils";

export default {
  name: 'AdminLayout',
  computed: {
        IdentityModel() {
            return this.$store.getters['studentStore/selectedStudent'];
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
  },
  data () {
    return {
      schoolName: "",
      leftDrawerOpen: true,
      showAccountDetails: false,
      rightMenuIcon: "menu",
      navs: [],
      rightDrawerOpen: window.innerWidth < 700 ? true : false,
      menuList: instructorMenuList,
      contextMenuList: [],
      landingMenu: [],
      checkSubscription: {},
      showSpinner: false,
    }
  },
  methods:{
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
      var user = this.$store.getters["authenticationStore/IdentityModel"]
      if(context.checkSubscription.isResultsAnalysis == false ||
        user.confirmed == false){
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
       var user = this.$store.getters["authenticationStore/IdentityModel"]
      if(context.checkSubscription.isFileManagement == false ||
        user.confirmed == false){
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
       var user = this.$store.getters["authenticationStore/IdentityModel"]
      if(context.checkSubscription.isAdvertizement == false ||
        user.confirmed == false){
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
       var user = this.$store.getters["authenticationStore/IdentityModel"]
      if(context.checkSubscription.isExamQuiz == false ||
        user.confirmed == false){
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
       var user = this.$store.getters["authenticationStore/IdentityModel"]
      if(context.checkSubscription.isLibraryManagement == false ||
        user.confirmed == false){
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
       var user = this.$store.getters["authenticationStore/IdentityModel"]
      if(context.checkSubscription.isOnlineLearning == false ||
        user.confirmed == false){
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
      const { result } = await checkResultsAnalysisSubscription(user.schoolId);
      context.checkSubscription = {...result}
      this.$store.commit("administratorStore/SetIsSubscription", result)

      console.log("context.menuList: ", context.menuList)
      var listOfMenuItems = [];
      for(const mItem of context.menuList){
        let _mItem = {...mItem};
        _mItem.to = `/${mItem.to}`
        if(_mItem.isFree){

        }else if(user.confirmed == true)listOfMenuItems.push({..._mItem})
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

      context.verifyResultsAnalysisSubscription();
      context.verifyFileManagementSubscription();
      context.verifyAdevertizementSubscription();
      context.verifyExamQuizSubscription();
      context.verifyLibraryManagementSubscription();
      context.verifyOnlineLearningSubscription();
      context.verifySocialize();

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
    async branding(schoolId){
            var context = this;
            const torpaLogo = await loadLogos(schoolId);
            if(torpaLogo.result.length === 0){
                    torpaLogo.result.push({fileUrl: "/statics/newway.jpg", primaryColor: "#FFFFFF",
                        secondaryColor: "#FF0000", tertiaryColor: "#056608", createdBy: "CEO"})
            }
            this.$store.commit('LogoStore/SetSelectedLogo', torpaLogo.result[0]);
            context.initializeLogo(torpaLogo.result[0]);
    },
  },
  async created(){
    
    var context = this;
    context.showSpinner = true;
    window.addEventListener("resize", this.onResize);
  
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
            context.branding(user.schoolId);
            break;
          }
        }

      // if(user.userType == "Admin" && user.designationId !== "CEO"){
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
          const grades = await loadGrades(user.schoolId);
          this.$store.commit('gradeStore/SetGrades', grades.result);
          const levels = await loadLevels(user.schoolId);
          this.$store.commit('levelStore/SetLevels', levels.result);
          const sessions = await loadSessions(user.schoolId);
          this.$store.commit('sessionStore/SetSessions', sessions.result);
          this.$store.commit('userStore/setUnComfirmedUsers', [])
          context.checkSubscritpion();
       //}

       context.showSpinner = false;

  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
}
</script>