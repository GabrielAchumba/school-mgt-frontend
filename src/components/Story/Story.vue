<template>
    <div class="q-pa-md">
        <q-card>
            <StoryHeader
            :fileUrl="story.friendImage"
            :title="story.friendFullName"
            :description="story.createdDate"/>
            <Gallery :pages="story.galleries"/>
            <Message :content="story.content"/>
        </q-card>
    </div>
</template>

<script>
import StoryHeader from "./Head.vue";
import Gallery from "./Gallery.vue";
import Message from "./Message.vue";
export default {
    components:{
        StoryHeader,
        Gallery,
        Message,
    },
    props:{
        story: {
            type: Object,
            default: () => {
                return {
                    friendImage: "",
                    friendFullName: "",
                    createdDate: "",
                    galleries: () => {
                        return []
                    }
                }
            }
        }
    }
}
</script>
