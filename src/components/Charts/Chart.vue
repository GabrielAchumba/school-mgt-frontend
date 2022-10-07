<template>
<q-layout>
   <q-page-container>
     <q-page class="flex flex-center bg-primary">
            <div class="row" style="height:100vh;"> 
                <div id="myDiv"  class="col-12 q-pa-sm">
                </div>
            </div>
     </q-page>
   </q-page-container>
</q-layout>
</template>

<script>
import Plotly from 'plotly.js-dist'
export default {
    computed: {
        layout(){
            return this.$store.getters['chartStore/layout'];
        },
        seriesCollection(){
            return this.$store.getters['chartStore/seriesCollection'];
        },
    },
    methods:{
        createChart() {
            var context = this;
            Plotly.newPlot('myDiv', context.seriesCollection, context.layout);
        },
    },
    mounted() {
        var context = this;
        context.createChart();
    }
}
</script>