<template>
    <div class="row q-pa-sm bg-primary">
        <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
          <div class="text-h4 text-accent text-left q-pa-sm">{{ title }}</div>
        </q-card>
        <q-card class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm">
            <p class="q-pa-sm" style="white-space: pre-line">{{ description }}</p>
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
  },
}
</script>