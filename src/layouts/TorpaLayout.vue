<template>
  <q-layout view="hHh lpR fFf" class="bg-primary">
     <q-header>
        <Address
        v-if="!setIsResponsive"
        :location="address.location"
        :officeAddress="address.officeAddress"
        :email="address.email"
        :emailAddress="address.emailAddress"/>
        <q-separator/>
         <!-- <SocialMedia/> -->
         <MainNavbar/>
         <q-separator/>
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
import Address from "../components/Home/Address.vue";
import { loadLogos } from "../pages/administrators/branding/logo/utils";
import { loadNewses } from "../pages/administrators/branding/news/utils";
import { loadMissions } from "../pages/administrators/branding/mission/utils";
import { loadVisions } from "../pages/administrators/branding/vision/utils";
import { loadCarousels } from "../pages/administrators/branding/home/utils";
import { loadAboutUses } from "../pages/administrators/about-us/utils";
import { loadContacts } from "../pages/administrators/contact/utils";
import { loadCoreValues } from "../pages/administrators/branding/core-value/utils";
export default {
    computed:{
        address(){
        return this.$store.getters["ContactStore/address"];
        },
        setIsResponsive(){
            const width = window.innerWidth;
            if(width < 700) return true;
            else return false;
        },
    },
    components:{
        SocialMedia,
        MainNavbar,
        Address,
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
        async branding(school){
                var schoolId = school.schoolId;
                var context = this;
                let countryCode = "+234";
                let officialAddress = school.address;
              
                var user = this.$store.getters["authenticationStore/IdentityModel"]
                if(user){
                    console.log("user: ", user)
                }

                

                const torpaLogo = await loadLogos(schoolId);
                if(torpaLogo.result.length === 0){
                    torpaLogo.result.push({fileUrl: "/statics/newway.jpg", primaryColor: "#FFFFFF",
                        secondaryColor: "#FF0000", tertiaryColor: "#056608", createdBy: "CEO"})
                }
                this.$store.commit('LogoStore/SetSelectedLogo', torpaLogo.result[0]);
                context.initializeLogo(torpaLogo.result[0]);

                const newses = await loadNewses(schoolId);
                let news = []
                if(newses.result.length === 0){
                    news.result.push({
                        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptate molestias atque libero laboriosam fugiat, nostrum eveniet ea deserunt. Itaque nesciunt consequatur earum rerum esse cumque accusamus cum consequuntur perferendis?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptate molestias atque libero laboriosam fugiat, nostrum eveniet ea deserunt. Itaque nesciunt consequatur earum rerum esse cumque accusamus cum consequuntur perferendis?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptate molestias atque libero laboriosam fugiat, nostrum eveniet ea deserunt. Itaque nesciunt consequatur earum rerum esse cumque accusamus cum consequuntur perferendis?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptate molestias atque libero laboriosam fugiat, nostrum eveniet ea deserunt. Itaque nesciunt consequatur earum rerum esse cumque accusamus cum consequuntur perferendis?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptate molestias atque libero laboriosam fugiat, nostrum eveniet ea deserunt. Itaque nesciunt consequatur earum rerum esse cumque accusamus cum consequuntur perferendis?`,
                        fileUrl: "/statics/images/results.jpg",
                        imageTitle: "Lorem ipsum dolor sit",
                        fileType: "image",
                        imageDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        createdBy: "CEO",
                        isVideo: false,
                        isImage: true,
                        isAudio: false,
                    })
                }else{
                    news = newses.result.map((row) => {
                        let isVideo = false;
                        let isImage = false;
                        let isAudio = false;
                        
                        if(row.fileType === "video"){
                            isVideo = true;
                        }else if(row.fileType === "audio"){
                            isAudio = true;
                        }else{
                            isImage = true;
                        }
                        return {
                            ...row,
                            isVideo,
                            isImage,
                            isAudio
                        }
                    })
                }
                
                this.$store.commit('NewsStore/SetNewses', news);

                const mission = await loadMissions(schoolId);
                if(mission.result.length === 0){
                    mission.result.push({
                    title: "Our Mission",
                    description: `To define the pace of business technology by the development of solutions that create synergies for maximum productivity`,
                    fileUrl: "/statics/images/results.jpg",
                    createdBy: "CEO"
        })
                }
                this.$store.commit('MissionStore/SetSelectedMission', mission.result[0]);

                const vision = await loadVisions(schoolId);
                if(vision.result.length === 0){
                    vision.result.push({
                        title: "Our Vision",
                        description: `To become a leader in fit-for-purpose and innovative technologies that deliver our clients’ business goals timely and efficiently`,
                        fileUrl: "/statics/images/results.jpg",
                        createdBy: "CEO",
                    })
                }
                this.$store.commit('VisionStore/SetSelectedVision', vision.result[0]);

                let contactCommon = await loadContacts(schoolId);
                if(contactCommon.result.length === 0){
                    contactCommon.result.push({
                        title: "We’d Love To Help You",
                        description: `Please feel free to get in touch with us. We'd love to hear your thoughts & answer any questions you may have!`,
                        createdBy: "CEO",
                        officialEmail: "nsglobe2022@gmail.com",
                        officialPhoneNumber1: "07032488605",
                        officialPhoneNumber2: "08062716049",
                    })
                }
                const contact = { 
                    title: "",
                    description: `<h5 style="text-align: center;"><span style="font-family: Roboto, -apple-system, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><b>${contactCommon.result[0].title}</b></span></h5><h6 style="text-align: center;">${contactCommon.result[0].description}</h6>`,
                    list: [
                    {
                        title: "Visit us on",
                        description: officialAddress,
                        icon: "location_on",
                    },
                    {
                        title: "Call us on",
                        description: `(${countryCode})${contactCommon.result[0].officialPhoneNumber1},  
                        (${countryCode})${contactCommon.result[0].officialPhoneNumber2}`,
                        icon: "phone",
                    },
                    {
                        title: "Mail us @",
                        description: contactCommon.result[0].officialEmail,
                        icon: "email",
                    }
                ]
                }

                const address =  {
                    location: contact.list[0].icon,
                    officeAddress: contact.list[0].description,
                    email: contact.list[2].icon,
                    emailAddress: contact.list[2].description,
                }

                this.$store.commit('ContactStore/SetOfficialEmail', contactCommon.result[0].officialEmail);
                this.$store.commit('ContactStore/SetOfficialPhoneNumber1', `(${countryCode})${contactCommon.result[0].officialPhoneNumber1}`);
                this.$store.commit('ContactStore/SetSelectedContact', contact);
                this.$store.commit('ContactStore/SetAddress', address);

                const corevalue = await loadCoreValues(schoolId);
                if(corevalue.result.length === 0){
                    corevalue.result.push({
                        title: "Our Core Value",
                        description: `To define the pace of business technology by the development of solutions that create synergies for maximum productivity`,
                        fileUrl: "/statics/images/results.jpg",
                        createdBy: "CEO"
                    })
                }
                this.$store.commit('CoreValueStore/SetSelectedCoreValue', corevalue.result[0]);
                
                const aboutusCommon = await loadAboutUses(schoolId);
                if(aboutusCommon.result.length === 0){
                    aboutusCommon.result.push({
                        title: "Unlimited/limitless progression and possibilities with us",
                        description: `Syncware Limited is made up of vastly experienced and creative minds; driven by its organized aspirations to improve the experience that software and information technologies provide for businesses in the energy and related industries around the globe. Syncware Limited is a company incorporated by energy, software and corporate professionals. Our key aim is to provide integrated and cutting-edge technologies that can make a difference.


                        We are a company that believes in developing technologies that synchronizes our innovative ideas with real-time client-based requirements to produce IT solutions that put the client ahead of the pack. We first listen, originate, strategize and then creatively develop fit-for-purpose technologies that set the pace while offering our clients limitless possibilities to perform and sustain elevated productivity standards over time.
                        
                        
                        Syncware Limited is a synergy of proven, tested and synthetic expression of creative thinking built into its operational processes, procedures and practices for software/IT solution development and deployment. Our uniqueness in terms of people culture and organization defines our competitive advantage in business.`,
                        createdBy: "CEO"
                    })
                }
                const aboutUs = {
                    title: "",
                   /*  ...aboutusCommon.result[0], */
                    description: `<h5 style="text-align: center;"><span style="font-family: Roboto, -apple-system, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;"><b>${aboutusCommon.result[0].title}</b></span></h5><p style="text-align: left;">${aboutusCommon.result[0].description}</p>`,
                    list: [{...mission.result[0]}, {...vision.result[0]}, {...corevalue.result[0]}],
                }
                this.$store.commit('AboutUsStore/SetSelectedAboutUs', aboutUs);
                
                const carousels = await loadCarousels(schoolId);
                if(carousels.result.length === 0){
                    carousels.result.push({
                        title: "WELCOME TO TORPA", 
                        description: "... that puts the feature of your child in your hands", 
                        fileUrl: "/statics/images/staffs.jpg",
                        createdBy: "CEO",
                    })
                }
                this.$store.commit('CarouselStore/SetCarousels', carousels.result);
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
        await context.branding({
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