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
                image: "/statics/images/examination.jpg",
                to: "exam-question-landing"
              },
              {
                name: "showPage",
                title: "Answers", 
                description: "Create accurate answers for any questions created",
                image: "/statics/images/examinations3.jpg",
                to: "exam-answer-landing"
              },
              {
                name: "showPage",
                title: "Take Exam", 
                description: "State the mission of your organization and also upadate it any time",
                image: "/statics/images/examinations2.jpg",
                to: "take-exam-question"
              },
            ],
          }
        },
        methods:{
            showPage(payload){
                this.$router.push(payload.to)
            }
        },
        created(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            if(user.schoolId === "CEO"){
                for(let i = 0; i < context.cardList.length; i++){
                  context.cardList[i].to = `/super-admin-${context.cardList[i].to}`
                }
            }else{
              for(let i = 0; i < context.cardList.length; i++){
                  context.cardList[i].to = `/${context.cardList[i].to}`
                }
            }
            this.$store.commit("authenticationStore/setIsError", false);
            this.$store.commit("authenticationStore/setErrorMessages", "");
        }
    }
</script>

<style>
</style>