<template>
  <div class="bg-primary">
       <CardList 
       :cardList="cardList"
       @showPage="showPage($event)"/>
  </div>
</template>

<script>
  import CardList from "../../../components/Cards/CardList.vue";

    export default {
        components:{
          CardList,
        },
        data () {
          return {
            cardList: [
              {
                name: "showPage",
                title: "Create Subscription", 
                description: "Creat Subscription for plans for all Torpa's non-free features",
                image: "/statics/images/staffs.jpg",
                to: "/create-subscription"
              },
              {
                name: "showPage",
                title: "Uphdate Subscription", 
                description: "Update Subscription for your existing plans or add new features",
                image: "/statics/images/staffs.jpg",
                to: "/update-subscription"
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