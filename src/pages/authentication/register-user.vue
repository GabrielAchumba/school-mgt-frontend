<template>
  <div class="row bg-primary" style="height: 95vh;">
    <div v-if="!isMobile"
          class="col-6 bg-primary">
          <TorpaLandingPage/>
    </div>
    <div class="col bg-primary">
        <register/>
    </div>
  </div>
</template>

<script>
import register from 'pages/authentication/register.vue' 
import TorpaLandingPage from "./landing3.vue";

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