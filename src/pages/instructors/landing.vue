<template>
  <div class="bg-primary">
       <CardList 
       v-if="cardList.length > 0"
       :cardList="cardList"
       @showPage="showPage($event)"/>
       <div
       v-else
       class="flex flex-center text-h4 text-accent">
        {{ notConfirmed }}
       </div>
  </div>
</template>

<script>
  import CardList from "../../components/Cards/CardList3.vue";
  

    export default {
      computed:{
        cardList(){
          return this.$store.getters["administratorStore/mainMenuList"]
        }
      },
      components:{
        CardList,
      },
      data(){
        return {
          notConfirmed: "No Confirmed. Contact your administrator"
        }
      },
      methods:{
          showPage(payload){
              this.$router.push(payload.to)
          },
          setRoutes(){
              var user = this.$store.getters["authenticationStore/IdentityModel"];
              this.$store.commit("userStore/SetSelectedUser", user);
              let backRoute= "";
              let updateUserRoute = "/update-user";
              if(user.schoolId === "CEO"){
                backRoute='/super-admin';
                updateUserRoute = '/super-admin-update-user';
              }
              else {
                switch(user.userType){
                  case "Admin":
                    backRoute = '/admin';
                    updateUserRoute = '/update-user';
                    break;
                  case "Student":
                    backRoute = '/student';
                    updateUserRoute = '/student-update-user';
                    break;
                  case "Member":
                    backRoute = '/member';
                    updateUserRoute = '/member-update-user';
                    break;
                }
                
              } 
              this.$store.commit("authenticationStore/setBackRoute", backRoute);
              this.$store.commit("authenticationStore/setUpdateUserRoute", updateUserRoute);
          }
      },
      created(){
        var context = this;
        this.$store.commit("authenticationStore/setIsError", false);
        this.$store.commit("authenticationStore/setErrorMessages", "");
        context.setRoutes();
        this.$store.commit("authenticationStore/setPageTitle", "TORPA - NSG School App");
      }
    }
</script>

<style>
</style>