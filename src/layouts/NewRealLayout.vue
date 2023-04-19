<template>
  <q-layout view="hHh lpR fFf" class="bg-primary">
     <q-header>
         <!-- <SocialMedia/> -->
         <MainNavbar/>
     </q-header>

     <q-page-container style="height: 100vh;">
      <router-view
      class="bg-primary"
      v-if="!showSpinner"
      @linkClick="linkClick($event)"
      />
      <div 
      v-show="showSpinner"
      class="q-gutter-md row">
            <div class="col-12 q-pa-sm absolute-center flex flex-center">
                <q-spinner
                    color="accent"
                    size="3em"
                    :thickness="10"
                />
            </div>
        </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { colors } from 'quasar'
const { getBrand, setBrand } = colors
import SocialMedia from "../components/Common/social-medial.vue";
import MainNavbar from "../components/Common/main-navbar.vue";
export default {
    components:{
        SocialMedia,
        MainNavbar,
    },
    data(){
        return {
            showSpinner: true,
            image: "/statics/images/Neway_Logo.jpg"
            
        }
    },
    methods:{
        initializeLogo(logo){
            setBrand('primary', logo.primaryColor);
            setBrand('accent', logo.tertiaryColor);
            setBrand('secondary', logo.secondaryColor);

           /*  setBrand('primary', '#000000');
            setBrand('accent', '#00FFFF');
            setBrand('secondary', '#FFCC00'); */
        },
        branding(school){
                var context = this;
                let countryCode = "+234";
                let officialAddress = school.address;
              
                var user = this.$store.getters["authenticationStore/IdentityModel"]
                if(user){
                    console.log("user: ", user)
                }

                

                let torpaLogo = []
                torpaLogo.push({fileUrl: "/statics/logo.jpg", primaryColor: "#FFFFFF",
                    secondaryColor: "#FF0000", tertiaryColor: "#056608", createdBy: "CEO"})
                this.$store.commit('LogoStore/SetSelectedLogo', torpaLogo[0]);
                context.initializeLogo(torpaLogo[0]);

  

                let mission = []
                mission.push({
                    title: "Our Mission",
                    description: `To define the pace of business technology by the development of solutions that create synergies for maximum productivity`,
                    fileUrl: "/statics/images/results.jpg",
                    createdBy: "CEO"
                })
                this.$store.commit('MissionStore/SetSelectedMission', mission[0]);

                let vision = []
                vision.push({
                    title: "Our Vision",
                    description: `To become a leader in fit-for-purpose and innovative technologies that deliver our clients’ business goals timely and efficiently`,
                    fileUrl: "/statics/images/results.jpg",
                    createdBy: "CEO",
                })
                this.$store.commit('VisionStore/SetSelectedVision', vision[0]);

                let contactCommon = []
                contactCommon.push({
                    title: "We’d Love To Help You",
                    description: `Please feel free to get in touch with us. We'd love to hear your thoughts & answer any questions you may have!`,
                    createdBy: "CEO",
                    officialEmail: "nsglobe2022@gmail.com",
                    officialPhoneNumber1: "07032488605",
                    officialPhoneNumber2: "08062716049",
                })
                const contact = { 
                    title: contactCommon[0].title,
                    description: contactCommon[0].description,
                    list: [
                    {
                        title: "Visit us on",
                        description: officialAddress,
                        icon: "location_on",
                    },
                    {
                        title: "Call us on",
                        description: `(${countryCode})${contactCommon[0].officialPhoneNumber1},  
                        (${countryCode})${contactCommon[0].officialPhoneNumber2}`,
                        icon: "phone",
                    },
                    {
                        title: "Mail us @",
                        description: contactCommon[0].officialEmail,
                        icon: "email",
                    }
                ]
                }

                this.$store.commit('ContactStore/SetOfficialEmail', contactCommon[0].officialEmail);
                this.$store.commit('ContactStore/SetOfficialPhoneNumber1', `(${countryCode})${contactCommon[0].officialPhoneNumber1}`);
                this.$store.commit('ContactStore/SetSelectedContact', contact);

                let corevalue = []
                corevalue.push({
                    title: "Our Core Value",
                    description: `To define the pace of business technology by the development of solutions that create synergies for maximum productivity`,
                    fileUrl: "/statics/images/results.jpg",
                    createdBy: "CEO"
                })
                this.$store.commit('CoreValueStore/SetSelectedCoreValue', corevalue[0]);
                
                let aboutusCommon = []
                aboutusCommon.push({
                    title: "Unlimited/limitless progression and possibilities with us",
                    description: `Syncware Limited is made up of vastly experienced and creative minds; driven by its organized aspirations to improve the experience that software and information technologies provide for businesses in the energy and related industries around the globe. Syncware Limited is a company incorporated by energy, software and corporate professionals. Our key aim is to provide integrated and cutting-edge technologies that can make a difference.


                    We are a company that believes in developing technologies that synchronizes our innovative ideas with real-time client-based requirements to produce IT solutions that put the client ahead of the pack. We first listen, originate, strategize and then creatively develop fit-for-purpose technologies that set the pace while offering our clients limitless possibilities to perform and sustain elevated productivity standards over time.
                    
                    
                    Syncware Limited is a synergy of proven, tested and synthetic expression of creative thinking built into its operational processes, procedures and practices for software/IT solution development and deployment. Our uniqueness in terms of people culture and organization defines our competitive advantage in business.`,
                    createdBy: "CEO"
                })
                const aboutUs = {
                    ...aboutusCommon[0],
                    list: [{...mission[0]}, {...vision[0]}, {...corevalue[0]}],
                }
                this.$store.commit('AboutUsStore/SetSelectedAboutUs', aboutUs);
                
                let carousels = []
                carousels.push({
                    title: "WELCOME TO NEWREAL", 
                    description: "... that puts the feature of your child in your hands", 
                    fileUrl: "/statics/images/staffs.jpg",
                    createdBy: "CEO",
                })
                this.$store.commit('CarouselStore/SetCarousels', carousels);
                this.$store.commit("authenticationStore/setMenuList", true)

        },
        linkClick(payload){
            var context = this;
            this.$store.commit('componentsStore/setTableRow', payload);
            this.$store.commit('schoolStore/SetSelectedSchool', payload);
            let school = {
                schoolId: "CEO",
                address: "Plot 156 Tom Inko-Tariah Avenue, Rumuogba Estate, Port Harcourt, Rivers State, Nigeria",
            }
            if(payload.schoolName != undefined){
                school.schoolId = payload.id;
                school.address = payload.address;
            }
            context.branding(school);
            this.$router.push(`/`)
        }
    },
    async created(){
        var context = this;
        context.showSpinner = true;
        console.log("context.showSpinner: ", context.showSpinner);
        context.branding({
            schoolId: "CEO",
            address: "Plot 156 Tom Inko-Tariah Avenue, Rumuogba Estate, Port Harcourt, Rivers State, Nigeria",
        });

        context.showSpinner = false;
        console.log("context.showSpinner: ", context.showSpinner);
        // http://127.0.0.1/pgadmin4
        // http://localhost/pgadmin4/login?next=%2Fpgadmin4%2F
    }
}

</script>
<style>
#layout {
 background-image: url("/statics/images/Neway_Logo.jpg");
 background-color: #cccccc;
}

</style>