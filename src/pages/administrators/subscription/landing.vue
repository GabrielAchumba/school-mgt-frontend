<template>
  <div class="bg-primary">
       <CardList 
       :cardList="cardList"
       @showPage="showPage($event)"/>
  </div>
</template>

<script>
  import CardList from "../../../components/Cards/CardList3.vue";

    export default {
        components:{
          CardList,
        },
        data () {
          return {
            cardList: [
              {
                name: "showPage",
                title: "Create", 
                description: "Creat Subscription for plans for all Torpa's non-free features",
                image: "/statics/images/staffs.jpg",
                to: "/create-subscription"
              },
              {
                name: "showPage",
                title: "Update", 
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
            },
          setBackRoute(){
              var user = this.$store.getters["authenticationStore/IdentityModel"];
              let backRoute= "";
              if(user.schoolId === "CEO")backRoute='/super-admin';
              else  backRoute = '/admin';
              this.$store.commit("authenticationStore/setBackRoute", backRoute);
          }
        },
        created(){
          var context = this;
          this.$store.commit("authenticationStore/setIsError", false);
          this.$store.commit("authenticationStore/setErrorMessages", "");
          context.setBackRoute();

        }
    }
</script>

<style>
</style>