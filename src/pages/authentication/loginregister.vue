<template>
  <div class="row">
    <div v-if="!isMobile"
          class="col-6">
          <TorpaLandingPage/>
    </div>
    <div class="col">
        <login/>
    </div>
  </div>
</template>

<script>
import login from 'pages/authentication/login.vue'
import TorpaLandingPage from "./landing.vue";

export default {
  computed:{
    isMobile(){
    const width = window.innerWidth;
      if(width < 700) return true;
      else return false;
    },
  },
  components: {
          login,
          TorpaLandingPage
  },
}
</script>