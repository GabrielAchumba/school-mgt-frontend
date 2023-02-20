<template>
    <div class="q-pa-sm">
        <TitleDescription
            :title="title"
            :description="content"/>
    </div>
</template>

<script>
import TitleDescription from "../Common/title-description2.vue";
export default {
    components:{
        TitleDescription,
    },
    props:{
        title: {
            type: String,
            default: "",
        },
        content: {
            type: String,
            default:  "",
        }
    }
}
</script>