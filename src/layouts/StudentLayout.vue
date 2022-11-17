<template>
  <q-layout view="hHh lpR fFf" class="bg-primary">

     <q-header class="q-pa-none bg-primary">
       <MainMenuBar
       :menuList="menuList"
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
import { loadClassRooms } from "../pages/administrators/classroom/utils";
import { loadStaffs } from "../pages/administrators/staff/utils";
import { loadStudents } from "../pages/administrators/student/utils";
import { loadSubjects } from "../pages/administrators/subject/utils";
import { loadAssessments } from "../pages/administrators/assessment/utils";
import { loadSchools } from "../pages/administrators/school/utils";
import MainMenuBar from "../components/Menus/main-menu-bar.vue";
import searchDialog from "../components/Searches/search-list.vue";
import { checkResultsAnalysisSubscription, menuListForStudents } from "../pages/administrators/utils";
import { loadLogos } from "../pages/administrators/branding/logo/utils";

export default {
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
      menuList: menuListForStudents,
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
      if(context.checkSubscription.isResultsAnalysis == false){
        let index = -1;
        let i = 0;
        for(i = 0; i < context.landingMenu.length; i++){
          if(context.landingMenu[i].title == "Student Results"){
            index = i;
            break;
          }
        }
        if(index != -1){
          context.landingMenu.splice(index, 1);
        }

        index = -1;
        for(i = 0; i < context.contextMenuList.length; i++){
          if(context.contextMenuList[i].title == "Student Results"){
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
      if(context.checkSubscription.isFileManagement == false){
        let index = -1;
        let i = 0;
        for(i = 0; i < context.landingMenu.length; i++){
          if(context.landingMenu[i].title == "File Management"){
            index = i;
            break;
          }
        }
        if(index != -1){
          context.landingMenu.splice(index, 1);
        }

        index = -1;
        for(i = 0; i < context.contextMenuList.length; i++){
          if(context.contextMenuList[i].title == "File Management"){
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
      if(context.checkSubscription.isAdvertizement == false){
        let index = -1;
        let i = 0;
        for(i = 0; i < context.landingMenu.length; i++){
          if(context.landingMenu[i].title == "Advertisement"){
            index = i;
            break;
          }
        }
        if(index != -1){
          context.landingMenu.splice(index, 1);
        }

        index = -1;
        for(i = 0; i < context.contextMenuList.length; i++){
          if(context.contextMenuList[i].title == "Advertisement"){
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

      context.contextMenuList = context.menuList.map((row)=> {
          return {
            ...row
          }
        })
      context.landingMenu = context.menuList.map((row)=> {
          return {
            ...row
          }
        })
      context.landingMenu.shift();

      context.verifyResultsAnalysisSubscription();
      context.verifyFileManagementSubscription();
      context.verifyAdevertizementSubscription();

      context.menuList = context.contextMenuList.map((row) => {
        return {
          ...row,
        }
      })
      console.log("context.landingMenu: ", context.landingMenu)
      this.$store.commit("administratorStore/SetMainMenuList", context.landingMenu)
    },
    initializeLogo(logo){
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

       if(user.userType == "Student"){
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
          context.checkSubscritpion();
       }

       context.showSpinner = false;

  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
}
</script>

<style lang="sass">
    .main_line
      font-size: 75px;
      letter-spacing: 5px;
      line-height: 60px;
      font-weight: 600;

    .custom-caption
      text-align: center;
      padding: 12px;
      color: white;

    .animation_1
      -webkit-animation: bounceIn 1s ease-in 800ms both;
      animation: bounceIn 1s ease-in 800ms both;

    .animation_2
      -webkit-animation: flipInX 2s ease-in-out 800ms both;
      animation: flipInX 1s ease-in-out 800ms both;

    .animation_3
      -webkit-animation: lightSpeedIn 1s ease-in 800ms both;
      animation: lightSpeedIn 1s ease-in 800ms both;

    .description
      padding: 10px
      background-color: black
      color: white
      box-shadow: 1px 1px 2px #e6e6e6

    .my-header
      width: 200px
      top: 0
      height: 45px
      color: black
      background-color: rgba(255,255,255, 0.8)
      text-transform: uppercase
      text-align: center
      font-size: 17px
      margin: 20px 0 0 68px
      padding: 25px

    .my-text
      width: 100%
      top: 0
      height: 90px
      color: white
      text-align: center
      font-size: 15px
      margin: 79px 0 0 0
      padding: 20px
      line-height: normal
      font-family: Georgia, serif
      font-style: italic

    .my-button-container
      width: 100%

    .my-button
      text-decoration: none
      text-transform: uppercase
      margin: 0 0 20px 0
      text-align: center
      padding: 7px 14px
      background-color: #000
      color: #fff
      text-transform: uppercase
      box-shadow: 0 0 1px #000
      transition-delay: 0.2s

    .my-button:hover
      box-shadow: 0 0 5px #000

    .box-shadow:hover
      box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12) !important;

    .my-card
      width: 350px
      max-width: 350px
      margin-top: 10px

    .team-header
      width: 100%
      top: 0
      height: 45px
      color: white
      text-transform: uppercase
      text-align: center
      font-size: 17px
      margin: 60px 0 0 0
      padding: 12px

    .team-text
      width: 100%
      top: 0
      height: 90px
      color: white
      text-align: center
      font-size: 15px
      margin: 100px 0 0 0
      padding: 20px
      line-height: normal
      font-family: Georgia, serif
      font-style: italic
    
    .quote
      background: url(/statics/images/parallax.jpg);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-repeat: no-repeat;
    
    .pricing
      background: url(/statics/images/pricing.jpg);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-repeat: no-repeat;
    
    .contact_us
      background: url(/statics/images/contact_us.jpg);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-repeat: no-repeat;
    
    .custom_tab
      width: 130px;
</style>