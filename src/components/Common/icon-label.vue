<template>
    <div class="bg-accent text-primary">
         <!--  <q-icon
          class="q-pa-sm text-accent"
          :name="icon"
          size="sm">
          </q-icon> -->
          <p class="q-pa-sm q-ma-sm text-caption">{{ caption }}</p>
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