<template>
  <div class="bg-primary">
       <CardList 
       :cardList="cardList"/>
  </div>
</template>

<script>
  import CardList from "../../components/Cards/CardList.vue"
    export default {
        components:{
          CardList
        },
        data () {
          return {
            cardList: [
              {
                title: "Staff", 
                description: "The employees of the schools",
                image: "/statics/images/about_1.jpg",
              },
              {
                title: "Class Rooms", 
                description: "The school's class rooms",
                image: "/statics/images/about_2.jpg",
              },
              {
                title: "Subjects", 
                description: "Subjects that students learn in the school",
                image: "/statics/images/about_3.jpg",
              },
            ]
          }
        }
    }
</script>

<style>
</style>