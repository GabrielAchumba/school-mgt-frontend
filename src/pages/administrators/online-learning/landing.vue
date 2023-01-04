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
            cardList: [
              {
                name: "showPage",
                title: "Notes", 
                description: "Initiate lesson note for any subject",
                image: "/statics/images/single_student_result.jpg",
                to: "lesson-note-landing"
              },
              {
                name: "showPage",
                title: "Note Sections", 
                description: "Prepare sections for any lesson note",
                image: "/statics/images/single_student_result.jpg",
                to: "lesson-note-section-landing"
              },
              {
                name: "showPage",
                title: "Student Feedback", 
                description: "Question or feedback from student",
                image: "/statics/images/single_student_result.jpg",
                to: "ca-question-landing"
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