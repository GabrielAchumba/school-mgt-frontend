<template>
    <div class="q-pa-sm">
        <!-- <TorpaLanding/> -->
        <TitleDescription
            :title="aboutUs.title"
            :description="aboutUs.description"/>
        <Cards 
        :cardList="aboutUs.list"/>
    </div>
</template>

<script>
import Cards from "../../components/Cards/Cards.vue"
import TorpaLanding from "./landing2.vue";
import TitleDescription from "../../components/Common/title-description2.vue";

export default {
    computed:{
      aboutUs(){
        return this.$store.getters["AboutUsStore/selectedAboutUs"]
      }
    },
    components:{
        TorpaLanding,
        TitleDescription,
        Cards,
    },
}
</script>
