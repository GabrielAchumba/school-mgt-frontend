<template>
    <div class="row">
        <q-btn flat
        @click="backAction"
        icon="navigate_before"
        class="col"></q-btn>
        <div class="col-xl-3 col-lg-3  col-md-3 col-xs-9 col-sm-9 text-center q-pa-sm"
            v-for="(paginatedPage) in paginatedPages" :key="paginatedPage.sn">
            <q-card class="my-card">
                <q-img :src="paginatedPage.fileUrl"
                  height="100%"
                  width="100%">
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
    computed:{
        setIsResponsive(){
            const width = window.innerWidth;
            if(width < 900) return true;
            else return false;
        },
        pages(){
            return this.$store.getters["productStore/gallery"];
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
       max-width: 300px;
       height: 500px;
   }
</style>