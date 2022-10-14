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
          <q-tab @click="changeTab('login')"
          name="login" label="Sign In" />
          <q-tab @click="changeTab('register')"
          name="register" label="Register" />
        </q-tabs>

        <!-- <q-separator /> -->

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="login" class="bg-primary">
            <login/>
          </q-tab-panel>

          <q-tab-panel name="register" class="bg-primary">
            <register/>
          </q-tab-panel>
        </q-tab-panels>

      </q-card>

    </div>
  </div>
</template>

<script>
import login from 'pages/authentication/login.vue'
import register from 'pages/authentication/register.vue' 
export default {
  components: {
          login,
          register
  },
  data(){
    return {
      tab: "login",
    }
  },
  methods: {
    changeTab(tabname){
      console.log(tabname)
      this.$store.commit('authenticationStore/changeTab', tabname)
    }
  }
}
</script>