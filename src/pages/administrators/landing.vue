<template>
  <div class="bg-primary">
       <CardList 
       :cardList="cardList"
       @showPage="showPage($event)"/>
  </div>
</template>

<script>
  import CardList from "../../components/Cards/CardList.vue";
  import MessageBox from "../../components/dialogs/MessageBox.vue";

    export default {
        components:{
          CardList,
          MessageBox,
        },
        data () {
          return {
            cardList: [
              {
                name: "showPage",
                title: "Staff", 
                description: "The employees of the schools",
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
                title: "Lesson Notes", 
                description: "Student's lesson notes in the school",
                image: "/statics/images/lesson.jpg",
                to: "/lesson-landing"
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