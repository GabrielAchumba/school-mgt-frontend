<template>
  <div class="row bg-primary" style="height: 95vh;">
    <div v-if="!isMobile"
          class="col-sm-0 col-xs-0 col-md-6 col-xl-6 col-lg-6 bg-primary">
          <TorpaLandingPage/>
    </div>
    <div class="col-sm-12 col-xs-12 col-md-6 col-xl-6 col-lg-6 bg-primary">
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