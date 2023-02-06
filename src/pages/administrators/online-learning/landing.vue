<template>
  <div>
       <CardList 
       :cardList="cardList"
       @showPage="showPage($event)"/>
  </div>
</template>

<script>
  import CardList from "../../../components/Cards/CardList3.vue";
  import MessageBox from "../../../components/dialogs/MessageBox.vue";

    export default {
        components:{
          CardList,
          MessageBox,
        },
        data () {
          return {
            cardListCopy: [],
            cardList: [
              {
                name: "showPage",
                title: "Notes", 
                description: "Initiate lesson note for any subject",
                image: "/statics/images/single_student_result.jpg",
                to: "lesson-note-landing",
                isTorpa: false,
              },
              {
                name: "showPage",
                title: "Note Sections", 
                description: "Prepare sections for any lesson note",
                image: "/statics/images/single_student_result.jpg",
                to: "lesson-note-section-landing",
                isTorpa: false,
              },
              {
                name: "showPage",
                title: "Student Feedback", 
                description: "Question or feedback from student",
                image: "/statics/images/single_student_result.jpg",
                to: "ca-question-landing",
                isTorpa: false,
              },
              {
                name: "showPage",
                title: "Torpa Lesson Notes", 
                description: "Initiate lesson note for any subject",
                image: "/statics/images/single_student_result.jpg",
                to: "lesson-note-landing",
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

            console.log("context.cardList: ", context.cardList)
            this.$store.commit("authenticationStore/setIsError", false);
            this.$store.commit("authenticationStore/setErrorMessages", "");
            context.setBackRoute();
            this.$store.commit("authenticationStore/setPageTitle", "Lesson Notes")
        }
    }
</script>

<style>
</style>