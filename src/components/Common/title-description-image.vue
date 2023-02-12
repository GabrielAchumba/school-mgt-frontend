<template>
    <div class="row q-pa-none bg-primary">
        <p class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm" v-html="title"></p>
        <p class="q-pa-sm" v-html="description"></p>


      <div 
        v-if="isImage"
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm img flex flex-center">
            <q-img 
            :src="imageUrl"
            v-show="isImage"
            spinner-color="accent"
            class="rounded-borders">
              <div class="absolute-bottom">
                <div class="text-h6">{{ imageTitle }}</div>
                <div class="text-subtitle2">{{ imageDescription }}</div>
              </div>
            </q-img>
        </div>

        <div 
        v-if="isVideo"
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm video flex flex-center">
            <video 
            v-bind:src="imageUrl" 
            controls 
            autoplay controlsList="nodownload" oncontextmenu="return false;"
            v-show="isVideo"/>
        </div>

        <div 
        v-if="isAudio"
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm video flex flex-center">
            <video 
            v-bind:src="imageUrl" 
            controls 
            autoplay controlsList="nodownload" oncontextmenu="return false;"
            v-show="isAudio"/>
        </div>

         <div 
        v-if="isPdf"
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm video flex flex-center">
            <embed 
            :src="imageUrl" 
            controls 
            v-show="isPdf"/>
        </div>
    </div>
</template>

<script>
export default {
  //Gab*012022
  props:{
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    imageTitle:{
      type: String,
      default: "",
    },
    imageDescription:{
      type: String,
      default: "",
    },
    isVideo:{
      type: Boolean,
      default: false,
    },
    isImage:{
      type: Boolean,
      default: true,
    },
    isAudio:{
      type: Boolean,
      default: false,
    },
    isPdf:{
      type: Boolean,
      default: false,
    },
  },
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