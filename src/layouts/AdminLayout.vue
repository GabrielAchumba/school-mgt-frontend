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
        menuList: [
            {
                name: "showPage",
                title: "Home", 
                description: "Landing Page",
                image: "/statics/images/staffs.jpg",
                to: "/admin"
              },
             /*  {
                name: "showPage",
                title: "School", 
                description: "Create and management schools",
                image: "/statics/images/staffs.jpg",
                to: "/school-landing"
              }, */
              {
                name: "showPage",
                title: "Staff", 
                description: "The types of employees of the schools",
                image: "/statics/images/staffs.jpg",
                to: "/staff-landing"
              },
              {
                name: "showPage",
                title: "Users", 
                description: "The employees of the schools",
                image: "/statics/images/staffs.jpg",
                to: "/user-landing"
              },
              {
                name: "showPage",
                title: "Class Rooms", 
                description: "The school's class rooms",
                image: "/statics/images/classroom.jpg",
                to: "/classroom-landing"
              },
              {
                name: "showPage",
                title: "Subjects", 
                description: "Subjects that students learn in the school",
                image: "/statics/images/subjects.jpg",
                to: "/subject-landing"
              },
              {
                name: "showPage",
                title: "Student", 
                description: "Students in the school",
                image: "/statics/images/students.jpg",
                to: "/student-landing"
              },
              {
                name: "showPage",
                title: "Assessment", 
                description: "Student's assessment in the school",
                image: "/statics/images/assessment.jpg",
                to: "/assessment-landing"
              },
              {
                name: "showPage",
                title: "Student Results", 
                description: "Student's results in the school",
                image: "/statics/images/results.jpg",
                to: "/result-landing"
              },
              {
                name: "showPage",
                title: "Subscription", 
                description: "The shool management subscription plans",
                image: "/statics/images/lesson.jpg",
                to: "/subscription-landing"
              },
              {
                name: "showPage",
                title: "File Management", 
                description: "Managing teachers lesson notes, past questions and answers, and other office files",
                image: "/statics/images/lesson.jpg",
                to: "/admin"
              },
              {
                name: "showPage",
                title: "Schools Payments", 
                description: "All Payments made by schools you refered to Newway",
                image: "/statics/images/staffs.jpg",
                to: "/school-all-payment-landing"
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

      const schools = await loadSchools();
      this.$store.commit('schoolStore/SetSchools', schools.result);
      console.log(schools)

       var user = this.$store.getters["authenticationStore/IdentityModel"]
       console.log(user)
        for(const school of schools.result){
          if(school.id === user.schoolId){
            context.schoolName =  school.schoolName;
            this.$store.commit('schoolStore/SetUserSchool', school);
            console.log("context.schoolName: ", context.schoolName)
            break;
          }
        }

       if(user.userType == "Admin" && user.designationId !== "CEO"){
          const classRooms = await loadClassRooms(user.schoolId);
          this.$store.commit('classRoomStore/SetClassRooms', classRooms.result);
          console.log("classRooms: ", classRooms.result)
          const staffs = await loadStaffs(user.schoolId);
          this.$store.commit('staffStore/SetStaffs', staffs.result);
          console.log("staffs: ", staffs.result)
          const students = await loadStudents(user.schoolId);
          this.$store.commit('studentStore/SetStudents', students.result);
          console.log("students: ", students.result)
          const subjects = await loadSubjects(user.schoolId);
          this.$store.commit('subjectStore/SetSubjects', subjects.result);
          console.log("subjects: ", subjects.result)
          const assessments = await loadAssessments(user.schoolId);
          this.$store.commit('assessmentStore/SetAssessments', assessments.result);
          console.log("assessments: ", assessments.result)
       }

  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
}
</script>