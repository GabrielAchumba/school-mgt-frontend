<template>
    <div class="q-pa-sm">
         <q-toolbar class="bg-primary text-accent">
                 <div class="col q-pa-sm">
                    <span>
                        <h5 class="q-pa-none q-ma-none">{{ productLogo.title }}</h5>
                        <p>{{ productLogo.description }}</p>
                    </span>
                 </div>
                 <q-space/>
                 <div class="col q-pa-sm text-right">
                    <img :src="productLogo.fileUrl"
                    style="height:100px; width:100px;">
                 </div>
             
         </q-toolbar>

    </div>
</template>

<script>
export default {
    computed:{
        productLogo(){
            return this.$store.getters["productStore/logo"];
        }
    },

}
</script>
