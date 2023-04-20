<template>
  <div class="row bg-primary">
     <TorpaLandingPage class="col-sm-0 col-xs-0 col-md-6 col-lg-g col-xl-6 bg-primary"/>
     <Login class="col-sm-12 col-xs-12 col-md-6 col-lg-g col-xl-6 bg-primary"/>
    
    <!-- <div v-if="!isMobile"
          class="col-6 bg-primary">
          <TorpaLandingPage/>
    </div>
    <div class="col bg-primary">
        <Login/>
    </div> -->

  </div>
</template>

<script>
import Login from 'pages/authentication/login.vue'
import TorpaLandingPage from "./landing.vue";
// v-if="$q.platform.is.mobile"
//v-if="!isMobile"

export default {
  computed:{
    isMobile(){
    const width = window.innerWidth;
      if(width < 700) return true;
      else return false;
    },
  },
  components: {
          Login,
          TorpaLandingPage
  },
  data(){
    return {
      previewImage: '/statics/newway.jpg',
      //:style="{ 'background-image': `url(${previewImage})` }"
    }
  }
}
</script>