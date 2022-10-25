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
        computed:{
            cardList(){
                return this.$store.getters["administratorStore/superAdminMainMenuList"];
            }
        },
        components:{
          CardList,
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