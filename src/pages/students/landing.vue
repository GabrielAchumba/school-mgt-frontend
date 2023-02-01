<template>
  <div class="bg-primary">
       <CardList 
       :cardList="cardList"
       @showPage="showPage($event)"/>
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
        methods:{
          showPage(payload){
              this.$router.push(payload.to)
          },
          setRoutes(){
              var user = this.$store.getters["authenticationStore/IdentityModel"];
              this.$store.commit("userStore/SetSelectedUser", user);

              /* const selectedUser = this.$store.getters["userStore/selectedUser"];
              console.log("selectedUser: ", selectedUser) */
        
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
                  case "Teacher":
                    backRoute = '/teacher';
                    updateUserRoute = '/teacher-update-user';
                    break;
                }
                
              } 
              this.$store.commit("authenticationStore/setBackRoute", backRoute);
              this.$store.commit("authenticationStore/setUpdateUserRoute", updateUserRoute);
          }
        },
        created(){
          var context = this;
          context.setRoutes();
          this.$store.commit("authenticationStore/setPageTitle", "TORPA - NSG School App");
        }
    }
</script>

<style>
</style>