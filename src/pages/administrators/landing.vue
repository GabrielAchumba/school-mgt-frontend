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
          return this.$store.getters["administratorStore/mainMenuList"]
        }
      },
      components:{
        CardList,
      },
      methods:{
          showPage(payload){
              this.$router.push(payload.to)
          },
      },
      created(){
        this.$store.commit("authenticationStore/setIsError", false);
        this.$store.commit("authenticationStore/setErrorMessages", "");
      }
    }
</script>

<style>
</style>