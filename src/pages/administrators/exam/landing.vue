<template>
  <div class="bg-primary">
       <CardList 
       :cardList="cardList"
       @showPage="showPage($event)"/>
  </div>
</template>

<script>
  import CardList from "../../../components/Cards/CardList.vue"

    export default {
        components:{
          CardList,
        },
        data () {
          return {
            cardList: [
              {
                name: "showPage",
                title: "Questions", 
                description: "Create questions and anwser options for any subject",
                image: "/statics/images/staffs.jpg",
                to: "/exam-question-landing"
              },
              {
                name: "showPage",
                title: "Answers", 
                description: "Create accurate answers for any questions created",
                image: "/statics/images/staffs.jpg",
                to: "/exam-answer-landing"
              },
              {
                name: "showPage",
                title: "Take Exam", 
                description: "State the mission of your organization and also upadate it any time",
                image: "/statics/images/staffs.jpg",
                to: "/take-exam"
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