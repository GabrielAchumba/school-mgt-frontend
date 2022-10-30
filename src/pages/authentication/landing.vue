<template>
  <div>
   <Carousel/>
  </div>
</template>

<script>
import { colors } from 'quasar'
const { getBrand, setBrand } = colors
import Carousel from "../../components/Carousel/carousel.vue";
import { loadLogos } from "../administrators/branding/logo/utils";
export default {
  components:{
    Carousel,
  },
  methods:{
    initializeLogo(logo){
      setBrand('primary', logo.primaryColor);
      setBrand('accent', logo.tertiaryColor);
      setBrand('secondary', logo.secondaryColor);
    },
    async branding(){
        var context = this;
        selectedSchool = this.$store.getters["componentsStore/tableRow"];
        let torpaLogo = {};
        if(selectedSchool.schoolName === undefined){
          torpaLogo = await loadLogos("CEO");
        }else{
          torpaLogo = await loadLogos(selectedSchool.id);
        }
        
        console.log("logo: ", torpaLogo.result[0]);
        this.$store.commit('LogoStore/SetSelectedLogo', torpaLogo.result[0]);
        context.initializeLogo(torpaLogo.result[0])
    },
  }
}
</script>

<style>
   
</style>