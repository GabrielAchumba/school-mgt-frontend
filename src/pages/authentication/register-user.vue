<template>
  <div class="row">
    <div v-if="!isMobile"
          class="col-6">
          <TorpaLandingPage/>
    </div>
    <div class="col">
        <register/>
    </div>
  </div>
</template>

<script>
import register from 'pages/authentication/register.vue' 
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
          register,
          TorpaLandingPage
  },
}
</script>