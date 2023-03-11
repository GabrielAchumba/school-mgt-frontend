<template>
  <q-layout view="hHh lpR fFf" class="bg-primary">
     <q-header>
         <MainNavbar
         :productGroups="productGroups"
         :serviceGroups="serviceGroups"/>
         <q-separator/>
     </q-header>

     <q-page-container>
      <router-view
      class="bg-primary"
      />
    </q-page-container>
  </q-layout>
</template>

<script>
import { colors } from 'quasar'
const { setBrand } = colors
import MainNavbar from "../components/Common/main-navbar.vue";
export default {
    computed:{
        setIsResponsive(){
            const width = window.innerWidth;
            if(width < 700) return true;
            else return false;
        },
    },
    components:{
        MainNavbar,
    },
    data(){
        return {
            productGroups: [
                {
                title: "Input Deck",
                    products: [
                        {
                            title: "Dimensions",
                            name: "/input/dimensions",
                        },
                        {
                            title: "Gridding",
                            name: "/input/gridding",
                        },
                        {
                            title: "Rock Porosity",
                            name: "/input/rock/porosity",
                        },
                        {
                            title: "Rock Permeability",
                            name: "/input/rock/permeability",
                        },
                        {
                            title: "PVT",
                            name: "/input/pvt",
                        },
                        {
                            title: "Wells",
                            name: "/input/wells",
                        },
                        {
                            title: "Initialization",
                            name: "/input/initialization",
                        },
                        {
                            title: "Boundaries",
                            name: "/input/boundaries",
                        },
                        {
                            title: "Schedule",
                            name: "/input/schedule",
                        }
                    ]
                },
            ],
            serviceGroups:[
                {
                title: "Output",
                services: [
                        {
                            title: "Pressure Distribution",
                            name: "/output/pressuredistribution",
                        },
                        {
                            title: "Saturation Distribution",
                            name: "/output/saturationdistribution",
                        },
                        {
                            title: "Well Production",
                            name: "/output/wellproduction",
                        },
                        {
                            title: "Reservoir Production",
                            name: "",
                        },
                    ]
                },
            ]

            
        }
    },
    methods:{
        initializeLogo(){
            setBrand('primary', '#000000');
            setBrand('accent', '#00FFFF');
            setBrand('secondary', '#FFCC00');
        },
    },
    created(){
        this.$store.commit("authenticationStore/setReservoirSimulationList")
    }
}

</script>
<style>
#layout {
 background-image: url("/statics/images/Neway_Logo.png");
 background-color: #cccccc;
}

</style>