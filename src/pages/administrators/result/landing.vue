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
                title: "SSRA", 
                description: "The statistics analysis of a student results",
                image: "/statics/images/single_student_result.jpg",
                to: "single-student-results-analysis"
              },
              {
                name: "showPage",
                title: "POS", 
                description: "The statistics analysis of position of students results",
                image: "/statics/images/results.jpg",
                to: "students-positions-analysis"
              },
              {
                name: "showPage",
                title: "MSRA", 
                description: "The statistics analysis of multiple students results",
                image: "/statics/images/view results.jpg",
                to: "summarized-students-result"
              },
              
            ],
          }
        },
        methods:{
            showPage(payload){
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
            context.setBackRoute();
        }
    }
</script>

<style>
</style>