<template>
    <div>
         <q-toolbar class="row bg-primary text-accent">
            <div class="q-pa-sm text-caption text-left">
                <q-btn  
                    flat
                    :size="size" 
                    class="text-capitalize"
                    >
                    <q-avatar round size="70px">
                        <img :src="fileUrl">
                    </q-avatar>
                </q-btn>
            </div>
            <q-space/>
            <div class="q-pa-sm text-left" @click="viewChat"> 
                <span>
                    <p  class="q-pa-none q-ma-none text-left">{{ title }}</p>
                    <p class="text-caption text-left">{{ description }}</p>
                </span>
            </div>
            <q-space/>
            <div class="q-pa-sm text-right"> 
                <span>
                    <p  class="q-pa-none q-ma-none text-caption text-right">{{ date }}</p>
                    <p class="text-caption text-center bg-accent text-primary">{{ noUnreadMessages }}</p>
                </span>
            </div>
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
            default: "",
        },
        description: {
            type: String,
            default: "",
        },
        date: {
            type: String,
            default: "January 5, 2022",
        },
        noUnreadMessages: {
            type: String,
            default: "",
        },
        selectedRow: {
            type: Object,
            default: () => {}
        }
    },
    data(){
        return {
            dense: false,
            size: "md",
        }
    },
    methods:{
        viewChat(){
            var context = this;
            this.$emit("viewChat", context.selectedRow)
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