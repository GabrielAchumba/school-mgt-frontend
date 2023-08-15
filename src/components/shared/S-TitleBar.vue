<template>
    <div class="row q-pa-none">
         <q-bar 
            class="col-12 bg-positive text-primary"
            style="height:50px;">
            <q-btn 
            v-if="backRoute.isBackArrow"
            class="bg-positive text-primary" 
            icon-right="arrow_back" 
            :label="backRoute.name" 
            flat
            no-caps
            @click="backRouteAction(backRoute.route)"
            size="md"/>
            <q-space/>
            <div class="text-primary text-center text-h6">{{ title }}</div>
            <q-space/>
            <q-btn 
            v-if="isCloseForm"
            dense flat icon="close" class="bg-positive text-primary" @click="closeFormDialog"/>
        </q-bar>

    </div>
</template>

<script>

export default {
    props:{
        title:{
            type: String,
            default: ""
        },
        isCloseForm:{
            type: Boolean,
            default: false
        },
        backRoute: {
          type: Object,
          default: () => {
            return { name: "", route: ""}
          }  
        }
    },
    methods:{
        closeFormDialog(){
            this.$emit("closeFormDialog")
        },
        backRouteAction(route){
            this.$router.push(route);
        }
    }

}
</script>

