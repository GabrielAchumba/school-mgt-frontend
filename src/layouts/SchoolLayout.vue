<template>
  <q-layout view="hHh lpR fFf">
     <q-header>
         <SocialMedia/>
         <MainNavbar/>
     </q-header>

     <q-page-container style="height: 100vh;">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import SocialMedia from "../components/Common/social-medial.vue";
import MainNavbar from "../components/Common/main-navbar.vue";
import { loadLogos } from "../pages/administrators/branding/logo/utils";
import { loadNewses } from "../pages/administrators/branding/news/utils";
import { loadMissions } from "../pages/administrators/branding/mission/utils";
import { loadVisions } from "../pages/administrators/branding/vision/utils";
import { loadCarousels } from "../pages/administrators/branding/home/utils";
import { loadAboutUses } from "../pages/administrators/about-us/utils";
import { loadContacts } from "../pages/administrators/contact/utils";
import { loadCoreValues } from "../pages/administrators/branding/core-value/utils";
export default {
    components:{
        SocialMedia,
        MainNavbar,
    },
    async created(){
        const schoolId = "CEO";
        const torpaLogo = await loadLogos(schoolId);
        this.$store.commit('LogoStore/SetSelectedLogo', torpaLogo.result[0]);
        const newses = await loadNewses(schoolId);
        this.$store.commit('NewsStore/SetNewss', newses.result);

        const mission = await loadMissions(schoolId);
        this.$store.commit('MissionStore/SetSelectedMission', mission.result[0]);
        const vision = await loadVisions(schoolId);
        this.$store.commit('VisionStore/SetSelectedVision', vision.result[0]);

        const contact = await loadContacts(schoolId);
        console.log("contact: ", contact)
        this.$store.commit('ContactStore/SetSelectedContact', contact.result[0]);
        const corevalue = await loadCoreValues(schoolId);
        this.$store.commit('CoreValueStore/SetSelectedCoreValue', corevalue.result[0]);
        const aboutusCommon = await loadAboutUses(schoolId);
        const aboutUs = {
            ...aboutusCommon.result[0],
            list: [{...mission.result[0]}, {...vision.result[0]}, {...corevalue.result[0]}],
        }
        
        this.$store.commit('AboutUsStore/SetSelectedAboutUs', aboutUs);
        const carousels = await loadCarousels(schoolId);
        this.$store.commit('CarouselStore/SetCarousels', carousels.result);
        this.$store.commit("authenticationStore/setMenuList", true)
    }
}

</script>