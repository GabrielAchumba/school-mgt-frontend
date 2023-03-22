<template>
    <div class="q-pa-sm">
        <TitleDescription
            :title="title"
            :description="description"/>
    </div>
</template>

<script>
import TitleDescription from "../Common/title-description2.vue";
export default {
    computed:{
        description(){
            return this.$store.getters["productStore/aboutUs"];
        }
    },
    components:{
        TitleDescription,
    },
    props:{
        title: {
            type: String,
            default: "",
        },
    },
}
</script>
