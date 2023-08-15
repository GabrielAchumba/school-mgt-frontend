<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      :value="value"
      :model-value="value"
      @update:model-value="(e) => $emit('update:value', e)"
      :rules="[(val) => !!val || `${label} is required`]"
      clearable
      v-select-all
      :label="label"
      type="textarea"
      :readonly="readonly"
      class="col"
    >
    </q-input>
  </div>
</template>

<script>
export default {
  props: ["label", "value", "readonly"],

  directives: {
    selectAll: {
      inserted(el) {
        let input = el.querySelector(".q-field__native");
        input.addEventListener("focus", () => {
          if (input.value.length) {
            input.select();
          }
        });
      },
    },
  },
};
</script>

<style>
</style>