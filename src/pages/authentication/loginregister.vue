<template>
  <div class="row bg-primary">
    <div v-if="!isMobile"
          class="col-6 bg-primary">
          <TorpaLandingPage/>
    </div>
    <div class="col bg-primary">
        <login/>
    </div>
  </div>
</template>

<script>
import login from 'pages/authentication/login.vue'
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
          login,
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