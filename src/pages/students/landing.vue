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
                title: "User Profile", 
                description: "Modify your profile data",
                image: "/statics/images/subjects.jpg",
                to: "/instructor"
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