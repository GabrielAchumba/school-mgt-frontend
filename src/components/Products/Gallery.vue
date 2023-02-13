<template>
    <div class="row">
        <q-btn flat
        @click="backAction"
        icon="navigate_before"
        class="col"></q-btn>
        <div class="col-3"
            v-for="(paginatedPage) in paginatedPages" :key="paginatedPage.sn">
            <q-card class="my-card">
                <q-img :src="paginatedPage.fileUrl">
                </q-img>
            </q-card>

        </div>
        <q-btn flat
        @click="nextAction"
        icon="navigate_next"
        class="col"></q-btn>
    </div>
</template>

<script>
export default {
    props:{
        pages:{
            type: Array,
            default:[
                {
                    sn: 0,
                    fileUrl: "/statics/images/mobile/Ads landing.png",
                },
                {
                    sn: 1,
                    fileUrl: "/statics/images/mobile/CBT.jpeg",
                },
                {
                    sn: 2,
                    fileUrl: "/statics/images/mobile/torpa admin landing 1.jpeg",
                },
                {
                    sn: 3,
                    fileUrl: "/statics/images/mobile/torpa admin landing 2.jpeg",
                },
                {
                    sn: 4,
                    fileUrl: "/statics/images/mobile/student report card.jpeg",
                },
                {
                    sn: 5,
                    fileUrl: "/statics/images/mobile/student report plot.jpeg",
                },
                {
                    sn: 6,
                    fileUrl: "/statics/images/mobile/students positions.png",
                },
                {
                    sn: 7,
                    fileUrl: "/statics/images/mobile/subjects.jpeg",
                },
                {
                    sn: 8,
                    fileUrl: "/statics/images/mobile/lesson note 2.jpeg",
                }
            ]
        }
    },
    data () {
        return {
            startIndex: -1,
            endIndex: -1,
            paginatedPages:[
                {}
            ],
            pagesPerView: 3,
        }
    },
    methods:{
        nextAction(){
            var context = this;
            context.startIndex++;
            context.paginatedPages = [];
            let counter = 0;
            for(let i = context.startIndex; i < context.pages.length; i++){
                counter++;
                if(counter > context.pagesPerView) break;
                context.paginatedPages.push(context.pages[i])
            }
        },
        backAction(){
            var context = this;
            const count = context.paginatedPages.length
            context.endIndex = context.paginatedPages[count-1].sn;
            context.endIndex--;
            context.startIndex = context.endIndex - 3;
            if(context.startIndex < 0) context.startIndex = 0;
            context.paginatedPages = [];
            let counter = 0;
            for(let i = context.startIndex; i <= context.endIndex; i++){
                counter++;
                if(counter > context.pagesPerView) break;
                context.paginatedPages.push(context.pages[i])
            }
        }
    },
    created(){
        var context = this;
        context.nextAction();
    }
}
</script>

<style>
   .my-card {
       width: 100%;
       max-width: 250px;
   }
</style>