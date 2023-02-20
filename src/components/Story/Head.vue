<template>
    <div>
         <q-toolbar class="bg-primary text-accent">
            <div class="q-pa-sm text-caption text-left">
                <q-btn  
                    flat
                    :size="size" 
                    class="text-capitalize"
                    >
                    <span><q-avatar round size="70px">
                        <img :src="fileUrl">
                    </q-avatar></span>
                <span>
                    <p  class="q-pa-none q-ma-none">{{ title }}</p>
                    <p class="text-caption">{{ description }}</p>
                </span>
                </q-btn>
            </div>
            <q-space/>
         </q-toolbar>

    </div>
</template>

<script>
export default {
    props:{
        fileUrl: {
            type: String,
            default: "/statics/images/TorpaLogo.png",
        },
        title: {
            type: String,
            default: "Gabriel Achumba",
        },
        description: {
            type: String,
            default: "January 5, 2022",
        },
    },
    data(){
        return {
            dense: false,
            size: "md",
        }
    }
}
</script>

<style scoped>
.col1 img {
    width:100%;
    height:100%;
    object-fit: contain;
}
</style>