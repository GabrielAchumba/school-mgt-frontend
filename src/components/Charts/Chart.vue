<template>
<q-layout>
   <q-page-container>
     <q-page class="flex flex-center bg-primary">
         <!-- <div id="myDiv"  class="q-pa-sm"></div> -->
            <div class="row" style="height:70vh;"> 
                <div id="myDiv"  class="col-12 q-pa-sm"></div>
            </div>
     </q-page>
   </q-page-container>
</q-layout>
</template>

<script>
import Plotly from 'plotly.js-dist'
export default {
    /* computed: {
        layout(){
            return this.$store.getters['chartStore/layout'];
        },
        seriesCollection(){
            return this.$store.getters['chartStore/seriesCollection'];
        },
    }, */
    props:{
        layout:{
            type: Object,
            default: {},
        },
        seriesCollection:{
            type: Array,
            default: [],
        }
    },
    methods:{
        createChart() {
            var context = this;
            console.log("context.seriesCollection: ", context.seriesCollection)
            console.log("context.layout: ", context.layout)
            Plotly.newPlot('myDiv', context.seriesCollection, context.layout);
            //newPlot
        },
    },
    mounted() {
        var context = this;
        context.createChart();
    }
}
</script>