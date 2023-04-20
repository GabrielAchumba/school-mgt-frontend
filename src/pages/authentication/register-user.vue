<template>
  <div class="row bg-primary" style="height: 95vh;">
    <TorpaLandingPage class="col-sm-0 col-xs-0 col-md-6 col-lg-g col-xl-6 bg-primary"/>
     <Register class="col-sm-12 col-xs-12 col-md-6 col-lg-g col-xl-6 bg-primary"/>

    <!-- <div v-if="!isMobile"
          class="col-6 bg-primary">
          <TorpaLandingPage/>
    </div>
    <div class="col bg-primary">
        <Register/>
    </div> -->

  </div>
</template>

<script>
import Register from 'pages/authentication/register.vue' 
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
          Register,
          TorpaLandingPage
  },
}
</script>