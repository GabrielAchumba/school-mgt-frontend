<template>
    <div>
        

            <div class="q-pa-md">
                <q-card class="column full-height">
          
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Personal Data</div>
          </q-card-section>

          <q-card-section>
                <div class="row">
                    <div class="col-12">
                        <q-input v-model="userName" label="User Name" style="width: 500px"></q-input>
                    </div>     
                </div>

                <div class="row">
                    <div class="col-12" style="height:10px">     
                    </div>  
                </div>

                <div class="row">
                    <div class="col-12">
                        <q-input v-model="password" label="Password"></q-input>
                    </div>    
                </div>

                

          </q-card-section>
          
          <q-card-actions align="right">
            <q-btn  label="Login" color="primary"  @click="login" size=md no-caps></q-btn>
            <q-btn  label="Register" color="primary"  @click="register" size=md no-caps></q-btn>
            <q-btn  label="Cancel" color="primary"  @click="cancel" size=md no-caps></q-btn>

          </q-card-actions>
        </q-card>
                
            </div>


       <!--  <div class="row">
            <div class="col-12" height="10"></div>   
        </div>  -->
        
    </div>
</template>

<script>

export default {
    computed: {
      
      },
      components: {
          
        },
      data () {
    return {
            userName:"",
            password:""
            }
        },
      methods: {
          login(){
            var context = this;

          this.$store.dispatch('authenticationStore/Login', {
                userName: context.userName,
                password: context.password
                });

               
      },
      cancel(){
        this.$store.commit('authenticationStore/hideLoginDialog');
      },
      register(){
        this.$store.commit('clientStore/ShowPersonalDataDialog');
      }
    }
}
</script>

<style scoped>

</style>