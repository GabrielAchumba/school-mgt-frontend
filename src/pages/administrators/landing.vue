<template>
  <div class="bg-primary">
       <CardList 
       :cardList="cardList"
       @showPage="showPage($event)"/>
  </div>
</template>

<script>
  import CardList from "../../components/Cards/CardList.vue";

    export default {
        components:{
          CardList,
        },
        data () {
          return {
            cardList: [
              {
                name: "showPage",
                title: "Users", 
                description: "The employees of the schools",
                image: "/statics/images/staffs.jpg",
                to: "/user-landing"
              },
            /*   {
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
                title: "Assessment", 
                description: "Student's assessment in the school",
                image: "/statics/images/assessment.jpg",
                to: "/assessment-landing"
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
            ],
          }
        },
        methods:{
            showPage(payload){
                this.$router.push(payload.to)
            }
        }
    }
</script>

<style>
</style>