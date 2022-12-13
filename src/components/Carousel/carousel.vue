<template>
   <div
   class="full-width text-secondary">
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
          style="height:100vh;"
        >
          <q-carousel-slide 
          v-for="carousel in carousels" 
          :key="carousel.title" 
          class="q-pa-none" 
          :name="carousel.title" 
          :img-src="carousel.fileUrl">
            <div class="full-height full-width flex flex-center" style="background-color: rgba(0, 0, 0, 0.68) !important;">
            <div class="custom-caption">
              <div class="text-h2 main_line animation_2" style="font-size:40px;">{{ carousel.title }}</div><br><br><br>
              <div class="text-h4 animation_1">{{ carousel.description }}</div><br><br><br>
            </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
       </div>
</template>

<script>
export default {
  computed: {
        carousels(){
          return this.$store.getters['CarouselStore/Carousels'];
        }
      },
  data () {
    return {
      slide: 1
    }
  },
}
</script>

<style>
   
</style>