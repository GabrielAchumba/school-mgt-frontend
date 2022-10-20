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
              <div class="text-h2 main_line animation_2" style="font-size:40px;">WELCOME TO <span :style="'color:'+theme_color">TORPA</span></div><br><br><br>
              <div class="text-h4 animation_1">... that puts the feature of your child in your hands</div><br><br><br>
<!-- <div class="animation_2">
<q-btn size="md" :style="'background:'+ theme_color +'; color: white'" label="READ MORE"/>
</div> -->
            </div>
</div>
          </q-carousel-slide>
          <q-carousel-slide class="q-pa-none" :name="2" img-src="/statics/images/subjects.jpg">
<div class="full-height full-width flex flex-center" style="background-color: rgba(0, 0, 0, 0.68) !important;">
            <div class="custom-caption">
    	      <div class="text-h2 main_line animation_2" style="font-size:40px;"><span :style="'color:'+theme_color">TORPA</span> FOR EXCELLENCE</div><br><br><br>
              <div class="text-h4 animation_1">We must remain transparent, sincere and trustwothy,<br>one to another for the growth of the child</div><br><br><br>
            </div>
</div>
          </q-carousel-slide>
          <q-carousel-slide class="q-pa-none" :name="3" img-src="/statics/images/students.jpg">
<div class="full-height full-width flex flex-center" style="background-color: rgba(0, 0, 0, 0.68) !important;">
            <div class="custom-caption">
    	      <div class="text-h2 main_line animation_2" style="font-size:40px;">PATH TO EXCELLENCE <span :style="'color:'+theme_color">WITH TORPA</span></div><br><br><br>
              <div class="text-h4 animation_1">follow the leaders and it's idea structure <br> unto having a fulfilled Life of excellence.</div><br><br><br>
            </div>
</div>
          </q-carousel-slide>
                    <q-carousel-slide class="q-pa-none" :name="4" img-src="/statics/images/assessment.jpg">
<div class="full-height full-width flex flex-center" style="background-color: rgba(0, 0, 0, 0.68) !important;">
            <div class="custom-caption">
              <div class="text-h2 main_line animation_2" style="font-size:40px;">SKILLS AND SOCIAL <span :style="'color:'+theme_color">RESPONSIBILITY BY TORPA</span></div><br><br><br>
              <div class="text-h4 animation_1">a community of individual collaborators for societal impact.</div><br><br><br>
            </div>
</div>
          </q-carousel-slide>

           <q-carousel-slide class="q-pa-none" :name="5" img-src="/statics/images/results.jpg">
<div class="full-height full-width flex flex-center" style="background-color: rgba(0, 0, 0, 0.68) !important;">
            <div class="custom-caption">
              <div class="text-h2 main_line animation_2" style="font-size:40px;">WE LOVE YOU <span :style="'color:'+theme_color">FROM ALL OF US IN TORPA</span></div><br><br><br>
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