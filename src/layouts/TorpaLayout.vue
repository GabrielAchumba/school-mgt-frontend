<template>
  <q-layout view="hHh lpR fFf">
     <q-header>
         <SocialMedia/>
         <MainNavbar/>
     </q-header>

     <q-page-container style="height: 100vh;">
      <router-view
      @linkClick="linkClick($event)"/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { colors } from 'quasar'
const { getBrand, setBrand } = colors
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
    methods:{
        initializeLogo(logo){
            setBrand('primary', logo.primaryColor);
            setBrand('accent', logo.tertiaryColor);
            setBrand('secondary', logo.secondaryColor);
        },
        async branding(schoolId){
                var context = this;
                const torpaLogo = await loadLogos(schoolId);
                this.$store.commit('LogoStore/SetSelectedLogo', torpaLogo.result[0]);
                context.initializeLogo(torpaLogo.result[0]);
                const newses = await loadNewses(schoolId);
                this.$store.commit('NewsStore/SetNewss', newses.result);

                const mission = await loadMissions(schoolId);
                this.$store.commit('MissionStore/SetSelectedMission', mission.result[0]);
                const vision = await loadVisions(schoolId);
                this.$store.commit('VisionStore/SetSelectedVision', vision.result[0]);

                const contact = await loadContacts(schoolId);
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

        },
        linkClick(payload){
            var context = this;
            this.$store.commit('componentsStore/setTableRow', payload);
            this.$store.commit('schoolStore/SetSelectedSchool', payload);
            let schoolId = "CEO";
            if(payload.schoolName != undefined){
                schoolId = payload.id
            }
            context.branding(schoolId);
            this.$router.push(`/`)
        }
    },
    async created(){
        var context = this;
        let schoolId = "CEO";
        await context.branding(schoolId);
    }
}

</script>