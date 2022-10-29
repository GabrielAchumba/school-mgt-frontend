<template>
    <div class="row q-pa-sm">
        <q-card class="col-lg-12 col-md-12">
          <div class="text-h3 flex fex-center">{{ title }}</div>
          <div class="text-h5 flex fex-center">{{ description }}</div>
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