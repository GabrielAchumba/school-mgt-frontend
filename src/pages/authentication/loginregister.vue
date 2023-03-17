<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="bg-accent text-primary"
          active-color="primary"
          indicator-color="secondary"
          align="justify"
          narrow-indicator
          
        >
          <q-tab name="login" label="Login" />
          <q-tab name="register" label="Register" />
        </q-tabs>

        <!-- <q-separator /> -->

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="login" class="bg-primary">
            <Login/>

          </q-tab-panel>

          <q-tab-panel name="register" class="bg-primary">
            <PersonalData
            @showLoginPage="showLoginPage($event)"/>
          </q-tab-panel>
        </q-tab-panels>

      </q-card>

    </div>
  </div>
</template>

<script>
import Login from 'pages/authentication/login.vue'
import PersonalData from 'pages/authentication/personalData.vue' 
export default {
    components: {
            Login,
            PersonalData,
        },
  data () {
    return {
      tab: "login",
    }
  },
  methods:{
    showLoginPage(){
      var context = this
      context.tab = "login"

    }
  }
}
</script>