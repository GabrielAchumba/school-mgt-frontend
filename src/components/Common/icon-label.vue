<template>
    <div class="row q-pa-sm bg-accent text-primary">
        <div class="col-lg-12 col-md-12 col-sm-6 col-xs-6 q-pa-sm">
          <q-icon
          class="q-pa-md text-accent"
          :name="icon"
          size="sm">
          </q-icon>
          <p class="q-pa-sm">{{ caption }}</p>
        </div>
    </div>
</template>

<script>
export default {
  props:{
    icon: {
      type: String,
      default: "",
    },
    caption: {
      type: String,
      default: "",
    },
  },
}
</script>