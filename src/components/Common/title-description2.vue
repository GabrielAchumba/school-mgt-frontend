<template>
    <div class="row q-pa-none bg-primary">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm" v-html="title"></div>
        <p class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-sm" v-html="description"></p>
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