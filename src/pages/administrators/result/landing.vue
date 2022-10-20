<template>
  <div class="bg-accent">
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
                title: "Single Student Results Analysis", 
                description: "The statistics analysis of a student results",
                image: "/statics/images/analyse results.jpg",
                to: "/single-student-results-analysis"
              },
              {
                name: "showPage",
                title: "Positions of Students", 
                description: "The statistics analysis of position of students results",
                image: "/statics/images/analyse results.jpg",
                to: "/students-positions-analysis"
              },
              {
                name: "showPage",
                title: "Multiple Students Results Analysis", 
                description: "The statistics analysis of multiple students results",
                image: "/statics/images/analyse results.jpg",
                to: "/summarized-students-result"
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