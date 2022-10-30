<template>
    <div class="q-pa-sm">
        <div
        v-for="news in newses" 
        :key="news.title" >
            <TitleDescriptionImage 
            v-if="isFileUrl(news.fileUrl)"
            :title="news.title"
            :description="news.description"
            :imageUrl="news.fileUrl"
            :imageTitle="news.imageTitle"
            :imageDescription="news.imageDescription"/>
            <TitleDescription
            v-else
            :title="news.title"
            :description="news.description"/>
        </div>
    </div>
</template>

<script>
import TitleDescription from "../../components/Common/title-description.vue";
import TitleDescriptionImage from "../../components/Common/title-description-image.vue";
import { newses } from "../test-data/news";
export default {
    computed:{
        newses(){
            return this.$store.getters["NewsStore/newses"]
        }
    },
    components:{
        TitleDescription,
        TitleDescriptionImage,
    },
    methods:{
        isFileUrl(fileUrl){
            if(fileUrl === "" || fileUrl == undefined) return false;
            else return true;
        }
    }
}
</script>
