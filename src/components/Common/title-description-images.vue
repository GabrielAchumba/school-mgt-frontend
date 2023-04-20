<template>
    <div class="row q-pa-none bg-primary">
            <div class="col-12 pagination">
                <a href="#"
                @click="back">&laquo;</a>
                <div
                v-for="page in pages" 
                :key="page.sn">
                    <a v-if="page.isActive"
                        href="#"
                        class="bg-accent text-primary"
                        @click="paginationAction(page)">{{ page.sn }}
                    </a>
                    <a v-else
                        href="#"
                        @click="paginationAction(page)">{{ page.sn }}
                    </a>
                </div>
                <a href="#"
                    @click="next">&raquo;</a>
            </div>
             <q-input class="q-ma-none bg-primary text-accent col-12"
                outlined 
                bordered
                v-model="filterModel" 
                type="text" >
                <template v-slot:prepend>
                    <q-icon 
                    v-if="isCreateVisible"
                    name="add" 
                    @click="createInfo"/>
                </template>
                <template  
                    v-slot:append>
                    <q-icon name="search" 
                    class="bg-primary text-accent"
                    @click="filterLands"/>
                </template>
            </q-input>

        <div 
            v-for="info in infos"
            :key="info.title"
            class="col-12 q-pa-sm">
            <div class="row bg-primary text-accent q-pa-sm no-wrap">
                    <div class="q-pa-sm text-caption text-left">
                        <q-btn  
                            flat
                            :size="size" 
                            class="text-capitalize"
                            >
                            <q-avatar round size="50px" class="bg-accent text-primary text-center">
                                <img 
                                v-if="info.userPictureUrl"
                                :src="info.userPictureUrl">
                                <p v-else class="q-pa-sm text-center">{{info.fullName.charAt(0) }}</p>
                            </q-avatar>
                        </q-btn>
                    </div>

                    <q-space/>

                    <div class="q-pa-sm text-left"> 
                        <span>
                            <p  class="q-pa-none q-ma-none text-left"><b>{{ info.phoneNumber }}</b></p>
                            <p class="text-left">{{ info.date }}</p>
                        </span>
                    </div>
                <!-- </q-toolbar> -->

            </div>
            <div class="row">
                <div class="col q-pa-sm">
                    <q-btn flat
                    @click="backAction(info)"
                    icon="navigate_before"/>
                </div>
                <div class="col-12 q-pa-sm">
                    <p class="q-pa-sm" v-html="info.title"></p>
                    <div
                    v-for="file in info.files"
                    :key="file.title"
                    class="q-pa-none text-center">
                        <span v-show="file.isImage" class="img">
                            <q-img 
                            :src="file.imageUrl"
                            spinner-color="accent"
                            class="rounded-borders">
                            </q-img>
                            <p class="q-pa-sm" v-html="file.title"></p>
                            <p class="q-pa-sm" v-html="file.description"></p>
                        </span>

                        <span v-show="file.isVideo" class="video">
                            <video 
                            v-bind:src="file.imageUrl" 
                            controls 
                            autoplay controlsList="nodownload" oncontextmenu="return false;"/>
                            <p class="q-pa-sm" v-html="file.title"></p>
                            <p class="q-pa-sm" v-html="file.description"></p>
                        </span>
                    </div>
                </div>
                <div class="col q-pa-sm">
                    <q-btn flat
                    @click="nextAction(info)"
                    icon="navigate_next"/>
                </div>
            </div>
            <div class="row">
                <div class="col-12 q-pa-sm">
                    <q-space/>
                    <q-btn flat
                    v-if="isUpdateVisible"
                    @click="updateInfoAction(info)"
                    icon="update"/>
                    <q-btn flat
                    v-if="isDeleteVisible"
                    @click="deleteInfoAction(info)"
                    icon="update"/>
                    <q-space/>
                </div>
            </div>
        </div>
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
        title: {
        type: String,
        default: "",
        },
        infos: {
            type: Array,
            default: () => []
        },
        filterModel:{
            type: String,
            default: "",
        },
        isCreateVisible:{
            type: Boolean,
            default: true
        },
        isUpdateVisible:{
            type: Boolean,
            default: true
        },
        isDeleteVisible:{
            type: Boolean,
            default: true
        },
        pages:{
            type: Array,
            default: () => []
        }
    },
    data(){
        return{
                startIndex: -1,
                endIndex: -1,
                paginatedPages:[
                    {}
                ],
                pagesPerView: 1,
        }
    },
    methods:{
        backAction(info){
            var context = this;
            const count = context.paginatedPages.length
            context.pagesPerView = 1; //context.setIsResponsive === true ? 1 : 3;
            context.endIndex = context.paginatedPages[count-1].sn;
            context.endIndex--;
            context.startIndex = context.endIndex - 3;
            if(context.startIndex < 0) context.startIndex = 0;
            context.paginatedPages = [];
            let counter = 0;
            for(let i = context.startIndex; i <= context.endIndex; i++){
                counter++;
                if(counter > context.pagesPerView) break;
                context.paginatedPages.push(info.files[i])
            }
        },
        nextAction(info){
                var context = this;
                context.startIndex++;
                context.paginatedPages = [];
                let counter = 0;
                context.pagesPerView = 1; //context.setIsResponsive === true ? 1 : 3;
                for(let i = context.startIndex; i < info.files.length; i++){
                    counter++;
                    if(counter > context.pagesPerView) break;
                    context.paginatedPages.push(info.files[i])
                }

        },
        back(){
            var context = this;
            this.$emit("back", {
                filter: context.filterModel
            }); 

        },
        next(){
            var context = this;
            this.$emit("next", {
                filter: context.filterModel
            }); 

        },
        paginationAction(page){
            var context = this;
            this.$emit("paginationAction", {
                page,
                filter: context.filterModel
            });
        },
        filterLands(){
            var context = this;
            this.$emit("filterLands", context.filterModel);
        },
        updateInfoAction(info){
            this.$emit("updateInfoAction", info);

        },
        deleteInfoAction(info){
            this.$emit("deleteInfoAction", info);

        },
        createInfo(){
            this.$emit("createInfo");

        },
    },
    created(){
        var context = this;
        if(context.infos.length > 0){
            context.nextAction(context.infos[0]);
        }
        
    }
}
</script>

<style scoped>
img {
    max-width: 70%;
    max-height: 90%;
}

video{
		max-width: 90%;
    max-height: 90%;
}
</style>