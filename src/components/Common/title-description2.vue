<template>
    <div class="row q-pa-sm bg-primary">
         <div class="col-12 text-h4 text-accent text-center q-pa-sm">{{ title }}</div>
         <p class="col-12 q-pa-sm text-center">{{ description }}</p>

        <!-- <q-card class="col-12 q-pa-sm flex flex-center">
          <div class="text-h4 text-accent text-center q-pa-sm">{{ title }}</div>
        </q-card>
        <q-card class="col-12 flex flex-center q-pa-sm">
            <p class="q-pa-sm text-center">{{ description }}</p>
        </q-card> -->
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