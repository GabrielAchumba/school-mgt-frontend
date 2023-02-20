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
                title: "Stories", 
                description: "View and create stories for friends and colleagues",
                image: "/statics/images/single_student_result.jpg",
                to: "stories-landing"
              },
              {
                name: "showPage",
                title: "Chats", 
                description: "View and chat friends and colleagues",
                image: "/statics/images/results.jpg",
                to: "chats-landing"
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
            this.$store.commit("authenticationStore/setPageTitle", "Socialize"); 
        }
    }
</script>

<style>
</style>