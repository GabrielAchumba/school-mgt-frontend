<template>
<div class="row">
    <q-bar 
    v-if="isQbar"
    class="col-12 bg-accent text-primary">
        <q-btn  
            icon="arrow_back"
            flat
            class="text-capitalize"
            @click="goBack">
        </q-btn>
        <q-space></q-space>
        <p class="q-pa-sm text-primary">{{ title }}</p>
        <q-space></q-space>
        <q-btn  
            icon="refresh"
            flat
            class="text-capitalize"
            @click="refreshPlot">
        </q-btn>
    </q-bar>
    <div id="myDiv" class="col-12 q-pa-sm"></div>
</div>
</template>

<script>
import Plotly from 'plotly.js-dist'
import { printableRoutes } from "../Menus/printable-routes";
export default {
    computed: {
        layout(){
            return this.$store.getters['chartStore/layout'];
        },
        seriesCollection(){
            return this.$store.getters['chartStore/seriesCollection'];
        },
        title(){
            return this.$store.getters['chartStore/title'];
        },
        isQbar(){
            return this.$store.getters['chartStore/isQbar'];
        },
        activeRoute(){
            const activeRoute = this.$store.getters["authenticationStore/activeRoute"];
            return  printableRoutes[activeRoute].route == undefined ? "/admin" : printableRoutes[activeRoute].route;
        }
    },
    methods:{
        createChart() {
            var context = this;
            console.log("context.seriesCollection: ", context.seriesCollection)
            console.log("context.layout: ", context.layout)
            const seriesCollection = context.seriesCollection.map((row) => {
                return {...row};
            })
            const layout = {...context.layout }
            const config = {
                displayModeBar: false, // this is the line that hides the bar.
            };
            Plotly.newPlot('myDiv', seriesCollection, layout, config);
        },
        goBack(){
            var context = this;
            console.log("context.activeRoute: ", context.activeRoute)
            this.$router.push(context.activeRoute)
        },
        refreshPlot(){
            var context = this;
            context.createChart();
        }
    },
    mounted() {
        var context = this;
        context.createChart();
    }
}
</script>