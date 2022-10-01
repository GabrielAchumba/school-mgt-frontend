<template>
  <div class="bg-primary">
        <div class="row bg-primary">
            <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
              <h5 class="text-center text-accent">About Us
                <br>
                <span class="text-center text-accent text-h6">COMMUNITY INITIATIVE PROJECT<br><i>...an excellent community</i></span>
              </h5>
            </div>
        </div>

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
                title: "MISSION", 
                description: "Striving for excellence in ordinary people and affecting all aspects of life and living",
                image: "/statics/images/about_1.jpg",
              },
              {
                title: "VISION", 
                description: "A community of ordinary people striving for excellence by collaboration",
                image: "/statics/images/about_2.jpg",
              },
              {
                title: "VALUES", 
                description: "Integrity, Transparency, Inter-dependent, Trust",
                image: "/statics/images/about_3.jpg",
              },
            ]
          }
        }
    }
</script>

<style>
</style>
