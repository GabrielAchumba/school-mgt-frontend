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
                title: "Logo", 
                description: "Create and update logo and brand colors",
                image: "/statics/images/staffs.jpg",
                to: "/logo-landing"
              },
              {
                name: "showPage",
                title: "Vision", 
                description: "State the vision of your organization and also upadate it any time",
                image: "/statics/images/staffs.jpg",
                to: "/vision-landing"
              },
              {
                name: "showPage",
                title: "Mission", 
                description: "State the mission of your organization and also upadate it any time",
                image: "/statics/images/staffs.jpg",
                to: "/mission-landing"
              },
              {
                name: "showPage",
                title: "Landing Page", 
                description: "Customize the images and texts of your landing page",
                image: "/statics/images/staffs.jpg",
                to: "/home-landing"
              },
              {
                name: "showPage",
                title: "News & Events", 
                description: "Post up to date news and events about your organization",
                image: "/statics/images/staffs.jpg",
                to: "/news-landing"
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