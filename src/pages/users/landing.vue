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
                title: "Results", 
                description: "View your results",
                image: "/statics/images/about_1.jpg",
              },
              {
                title: "Assessments", 
                description: "Submit your assessments like test, project or home work",
                image: "/statics/images/about_2.jpg",
              },
              {
                title: "Past Questions", 
                description: "Read or download examination past questions",
                image: "/statics/images/about_3.jpg",
              },
            ]
          }
        }
    }
</script>

<style>
</style>