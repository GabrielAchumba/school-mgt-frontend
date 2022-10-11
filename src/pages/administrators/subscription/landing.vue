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
                title: "90 Days", 
                description: "This plan is for 90 days",
                image: "/statics/images/view results.jpg",
                to: "/select-students"
              },
              {
                name: "showPage",
                title: "180 Days", 
                description: "This plan is for 180 days",
                image: "/statics/images/view results.jpg",
                to: "/select-students"
              },
              {
                name: "showPage",
                title: "360 Days", 
                description: "This plan is for 360 days",
                image: "/statics/images/view results.jpg",
                to: "/select-students"
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