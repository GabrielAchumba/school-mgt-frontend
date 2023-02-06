<template>
  <div class="bg-primary">
       <CardList 
       :cardList="cardListCopy"
       @showPage="showPage($event)"/>
  </div>
</template>

<script>
  import CardList from "../../../components/Cards/CardList3.vue"

    export default {
        components:{
          CardList,
        },
        data () {
          return {
            cardListCopy:[],
            cardList: [
              {
                name: "showPage",
                title: "Questions & Answers", 
                description: "Create questions and anwser options for any subject",
                image: "/statics/images/examination.jpg",
                to: "exam-question-landing",
                isTorpa: false,
              },
              {
                name: "showPage",
                title: "Take Cont. Ass.", 
                description: "Access your readiness",
                image: "/statics/images/examinations2.jpg",
                to: "take-exam-question",
                isTorpa: false,
              },
              {
                name: "showPage",
                title: "Torpa CBT.", 
                description: "Access your readiness",
                image: "/statics/images/examinations2.jpg",
                to: "take-exam-question",
                isTorpa: true,
              },
            ],
          }
        },
        methods:{
            showPage(payload){
                this.$store.commit("authenticationStore/setIsTorpa", payload.isTorpa)
                this.$router.push(payload.to)
            },
          setBackRoute(){
              var user = this.$store.getters["authenticationStore/IdentityModel"];
              let backRoute= "";
              if(user.schoolId === "CEO")backRoute='/super-admin';
              else  backRoute = '/admin';
              this.$store.commit("authenticationStore/setBackRoute", backRoute);
          }
        },
        created(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            if(user.schoolId === "CEO"){
              context.cardListCopy = [...context.cardList]
              for(let i = 0; i < context.cardListCopy.length; i++){
                context.cardListCopy[i].to = `/super-admin-${context.cardListCopy[i].to}`
              }
            }else if(user.userType === "Student"){
              if(user.confirmed){
                context.cardListCopy = [...context.cardList]
                for(let i = 0; i < context.cardListCopy.length; i++){
                    context.cardListCopy[i].to = `/student-${context.cardListCopy[i].to}`
                }        
              }else{
                context.cardListCopy = [context.cardList[2]]
                for(let i = 0; i < context.cardListCopy.length; i++){
                    context.cardListCopy[i].to = `/student-${context.cardListCopy[i].to}`
                }
              }     
            }else if(user.userType === "Admin"){
              if(user.confirmed){
                context.cardListCopy = [...context.cardList]
                for(let i = 0; i < context.cardListCopy.length; i++){
                    context.cardListCopy[i].to = `/${context.cardListCopy[i].to}`
                }        
              }else{
                context.cardListCopy = [context.cardList[2]]
                for(let i = 0; i < context.cardListCopy.length; i++){
                    context.cardListCopy[i].to = `/${context.cardListCopy[i].to}`
                }
              }     
            }
            this.$store.commit("authenticationStore/setIsError", false);
            this.$store.commit("authenticationStore/setErrorMessages", "");
            context.setBackRoute();
            this.$store.commit("authenticationStore/setPageTitle", "CBT Practice")
        }
    }
</script>

<style>
</style>