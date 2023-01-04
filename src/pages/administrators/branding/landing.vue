<template>
  <div class="bg-primary">
       <CardList 
       :cardList="cardList"
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
            cardList: [
              {
                name: "showPage",
                title: "Landing Page", 
                description: "Customize the images and texts of your landing page",
                image: "/statics/images/home.jpg",
                to: "home-landing"
              },
              {
                name: "showPage",
                title: "News & Events", 
                description: "Post up to date news and events about your organization",
                image: "/statics/images/news.jpg",
                to: "news-landing"
              },
              {
                name: "showPage",
                title: "Logo", 
                description: "Create and update logo and brand colors",
                image: "/statics/images/logo.jpg",
                to: "logo-landing"
              },
              {
                name: "showPage",
                title: "Vision", 
                description: "State the vision of your organization and also upadate it any time",
                image: "/statics/images/vision.jpg",
                to: "vision-landing"
              },
              {
                name: "showPage",
                title: "Mission", 
                description: "State the mission of your organization and also upadate it any time",
                image: "/statics/images/mission.jpg",
                to: "mission-landing"
              },
              {
                name: "showPage",
                title: "Core Value", 
                description: "These are the characteristics of your organization",
                image: "/statics/images/core_values.jpg",
                to: "core-value-landing"
              },
              {
                name: "showPage",
                title: "About Us", 
                description: "Describe in detail things about your organization",
                image: "/statics/images/about_us.jpg",
                to: "about-us-landing"
              },
              {
                name: "showPage",
                title: "Contact", 
                description: "The contact of your organization such as official line, address, etc.",
                image: "/statics/images/contact.jpg",
                to: "contact-landing"
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