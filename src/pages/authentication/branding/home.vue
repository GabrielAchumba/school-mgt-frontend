<template>
  <div>
   <Carousel/>
  </div>
</template>

<script>
import Carousel from "../../../components/Carousel/carousel.vue";
import { loadCarousels } from "../../administrators/branding/home/utils";
export default {
  components:{
    Carousel,
  },
  async created(){
      const selectedSchool = this.$store.getters["schoolStore/selectedSchool"];
      console.log("selectedSchool: ", selectedSchool)
      const carousels = await loadCarousels(selectedSchool.id);
      this.$store.commit('CarouselStore/SetCarousels', carousels.result);
  }
}
</script>

<style>
   
</style>