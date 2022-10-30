<template>
    <div class="row q-pa-sm bg-primary">
        <q-card class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
          <div class="text-h5 text-accent flex flex-center q-pa-sm">{{ title }}</div>
          <p class="q-pa-sm flex flex-center">{{ description }}</p>
        </q-card>

        <q-card class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-sm">
            <q-img 
            :src="imageUrl"
            spinner-color="accent"
            class="rounded-borders">
              <div class="absolute-bottom">
                <div class="text-h6">{{ imageTitle }}</div>
                <div class="text-subtitle2">{{ imageDescription }}</div>
              </div>
            </q-img>
        </q-card>
    </div>
</template>

<script>
export default {
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
    }
  },
}
</script>