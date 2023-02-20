<template>
    <div class="row">
        <q-btn flat
        @click="backAction"
        icon="navigate_before"
        class="col"></q-btn>
        <div class="col-xl-3 col-lg-3  col-md-3 col-xs-10 col-sm-10 text-center q-pa-sm"
            v-for="(paginatedPage) in paginatedPages" :key="paginatedPage.sn">
            <q-card class="my-card">
                <img 
                    v-if="paginatedPage.isImage"
                    :src="paginatedPage.fileUrl"
                    height="100%"
                    width="100%"
                    class="my-img"/>

                 <!-- <div 
                    v-if="paginatedPage.isVideo"
                    class="q-pa-sm video flex flex-center"> -->
                    <video 
                    class="q-pa-sm video"
                    v-bind:src="paginatedPage.fileUrl" 
                    controls 
                    autoplay controlsList="nodownload" oncontextmenu="return false;"
                    v-show="paginatedPage.isVideo"/>
               <!--  </div> -->

                <div 
                    v-if="paginatedPage.isAudio"
                    class="q-pa-sm video flex flex-center">
                    <video 
                    v-bind:src="paginatedPage.fileUrl" 
                    controls 
                    autoplay controlsList="nodownload" oncontextmenu="return false;"
                    v-show="paginatedPage.isAudio"/>
                </div>
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
    computed:{
        setIsResponsive(){
            const width = window.innerWidth;
            if(width < 900) return true;
            else return false;
        },
    },
    props:{
        pages:{
            type: Array,
            default: () => {
                return [
                    {
                        sn: 0,
                        fileUrl: "/statics/images/mobile/auth.jpeg",
                        isImage: false,
                        isVideo: false,
                        isAudio: false,
                    },
                    {
                        sn: 1,
                        fileUrl: "/statics/images/mobile/Ads landing.jpeg",
                        isImage: false,
                        isVideo: false,
                        isAudio: false,
                    },
                    {
                        sn: 2,
                        fileUrl: "/statics/images/mobile/CBT.jpeg",
                        isImage: false,
                        isVideo: false,
                        isAudio: false,
                    },
                    {
                        sn: 3,
                        fileUrl: "/statics/images/mobile/torpa admin landing 1.jpeg",
                        isImage: false,
                        isVideo: false,
                        isAudio: false,
                    },
                    {
                        sn: 4,
                        fileUrl: "/statics/images/mobile/torpa admin landing 2.jpeg",
                        isImage: false,
                        isVideo: false,
                        isAudio: false,
                    },
                    {
                        sn: 5,
                        fileUrl: "/statics/images/mobile/student report card.jpeg",
                        isImage: false,
                        isVideo: false,
                        isAudio: false,
                    },
                    {
                        sn: 6,
                        fileUrl: "/statics/images/mobile/student report plot.jpeg",
                        isImage: false,
                        isVideo: false,
                        isAudio: false,
                    },
                    {
                        sn: 7,
                        fileUrl: "/statics/images/mobile/students positions.jpeg",
                        isImage: false,
                        isVideo: false,
                        isAudio: false,
                    },
                    {
                        sn: 8,
                        fileUrl: "/statics/images/mobile/subjects.jpeg",
                        isImage: false,
                        isVideo: false,
                        isAudio: false,
                    },
                    {
                        sn: 9,
                        fileUrl: "/statics/images/mobile/lesson note 2.jpeg",
                        isImage: false,
                        isVideo: false,
                        isAudio: false,
                    }
                ]
            }
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
            if(context.startIndex >= context.pages.length) context.startIndex = context.pages.length - 1;
            
            context.paginatedPages = [];
            let counter = 0;
            context.pagesPerView = context.setIsResponsive === true ? 1 : 3;
            for(let i = context.startIndex; i < context.pages.length; i++){
                counter++;
                if(counter > context.pagesPerView) break;
                context.paginatedPages.push(context.pages[i])
            }
        },
        backAction(){
            var context = this;
            const count = context.paginatedPages.length
            context.pagesPerView = context.setIsResponsive === true ? 1 : 3;
            context.endIndex = context.paginatedPages[count-1].sn;
            context.endIndex--;
            context.startIndex = context.endIndex - 3;
            if(context.startIndex < 0) context.startIndex = 0;
            if(context.endIndex < 0) context.endIndex = 0;
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
       /* max-width: 300px; */
       height: 300px;
   }
   .my-img {
       object-fit:fill;
   }

   video{
        /* max-width: 90%; 
        max-height: 100%;*/
        height: 100%;
        width: 100%;
    }
</style>