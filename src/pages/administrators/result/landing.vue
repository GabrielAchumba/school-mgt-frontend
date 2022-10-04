<template>
  <div class="bg-primary">
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
                title: "Result Management", 
                description: "Create, update and delete results. Also view result report",
                image: "/statics/images/view results.jpg",
                to: "/results"
              },
              {
                name: "showPage",
                title: "Results Analysis", 
                description: "The statistics analysis of students results",
                image: "/statics/images/analyse results.jpg",
                to: "/results-analysis"
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