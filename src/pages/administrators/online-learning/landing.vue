<template>
  <div>
       <CardList 
       :cardList="cardList"
       @showPage="showPage($event)"/>
  </div>
</template>

<script>
  import CardList from "../../../components/Cards/CardList.vue";
  import MessageBox from "../../../components/dialogs/MessageBox.vue";

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
                title: "Lesson Notes", 
                description: "Create and upadte lesson note for any subject",
                image: "/statics/images/single_student_result.jpg",
                to: "lesson-note-landing"
              },
              {
                name: "showPage",
                title: "Continuous Assessments", 
                description: "Create and update continuous assessments for any subject",
                image: "/statics/images/results.jpg",
                to: "ca-landing"
              },
              {
                name: "showPage",
                title: "Lesson Note Sections", 
                description: "Create and upadte lesson sections for any lesson note",
                image: "/statics/images/single_student_result.jpg",
                to: "lesson-note-section-landing"
              },
              {
                name: "showPage",
                title: "Continuous Assessment Questions", 
                description: "Create and upadte questions for a selected continuous assessment",
                image: "/statics/images/single_student_result.jpg",
                to: "ca-question-landing"
              },
              {
                name: "showPage",
                title: "Continuous Assessment Answers", 
                description: "Create and upadte answers of the continuous assessment questions created",
                image: "/statics/images/single_student_result.jpg",
                to: "ca-answer-landing"
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
            }if(user.userType === "Student"){
                for(let i = 0; i < context.cardList.length; i++){
                  context.cardList[i].to = `/student-${context.cardList[i].to}`
                }
            }else{
              for(let i = 0; i < context.cardList.length; i++){
                  context.cardList[i].to = `/${context.cardList[i].to}`
                }
            }

            console.log("context.cardList: ", context.cardList)
            this.$store.commit("authenticationStore/setIsError", false);
            this.$store.commit("authenticationStore/setErrorMessages", "");
        }
    }
</script>

<style>
</style>