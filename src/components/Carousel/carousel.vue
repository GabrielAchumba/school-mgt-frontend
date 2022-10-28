<template>
   <div
   class="full-height full-width text-primary">
    <q-carousel
          animated
          v-model="slide"
          arrows
          swipeable
          navigation
          infinite
          autoplay
          control-color="white"
          transition-prev="slide-right"
          transition-next="slide-left"
          class="full-height"
        >
          <q-carousel-slide class="q-pa-none" :name="1" img-src="/statics/images/staffs.jpg">
            <div class="full-height full-width flex flex-center" style="background-color: rgba(0, 0, 0, 0.68) !important;">
            <div class="custom-caption">
              <div class="text-h2 main_line animation_2" style="font-size:40px;">WELCOME TO TORPA</div><br><br><br>
              <div class="text-h4 animation_1">... that puts the feature of your child in your hands</div><br><br><br>
            </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
       </div>
</template>

<script>
export default {
  // v-bind:style="{ width: '100%', height: '100%' }"
  computed: {
        theme_color(){
          return this.$store.getters['authenticationStore/theme_color'];
        }
      },
  data () {
    return {
      slide: 1
    }
  },
  created(){
    //this.$store.dispatch('authenticationStore/LoadList');
    
  }
}
</script>

<style scoped>
   
</style>