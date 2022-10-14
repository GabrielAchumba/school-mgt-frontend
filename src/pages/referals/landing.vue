<template>
  <div class="bg-primary">
       <CardList 
       :cardList="cardList"
       @showPage="showPage($event)"/>
  </div>
</template>

<script>
  import CardList from "../../components/Cards/CardList.vue";

    export default {
        components:{
          CardList,
        },
        data () {
          return {
            cardList: [
              {
                name: "showPage",
                title: "Profile", 
                description: "Update your profile",
                image: "/statics/images/staffs.jpg",
                to: "/update-referal"
              },
              {
                name: "showPage",
                title: "Schools", 
                description: "The schools that came to us by you",
                image: "/statics/images/staffs.jpg",
                to: "/referal-schools"
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