<template>
  <div class="row q-mb-sm">
    <q-select
      v-for="item in formData.qSelects"
      :key="item.label"
      options-dense
      :outlined="item.outlined"
      :borderless="item.borderless"
      :dense="item.dense"
      emit-value
      map-options
      v-model="item.value"
      :options="item.options"
      :label="item.label"
      color="positive"
      :readonly="item.readOnly"
      :disable="item.disable"
      option-value="id"
      :option-label="'type'"
      name="type"
      @input="onQSelectItemValueChanged(item)"
      option-disable="inactive"            
      class="col"
      :rules="[
        (val) =>
        item.shouldValidate === false ||
          (val !== null && (val.length === undefined || val.length > 0)) ||
          validationMessage,
      ]"
    >
    </q-select>
</div>
</template>
<script>
export default {
  // props: ["label", "value", "options"]
  props: {
    formData: {
        type: Object,
        default: () => {
          return {
            qSelects: [
                {
                  shouldValidate: true, 
                  outlined: true, 
                  dense: false, 
                  borderless: false,
                  readOnly: false,
                  disable: false,
                  label: "",
                  value: "",
                  options: []
                },
            ]
          }
        }
    },
    validationMessage: {
      type: String,
      default: ""
    }
  },
  methods:{ 
    onQSelectItemValueChanged(qSelect){
            this.$emit("onQSelectItemValueChanged", qSelect);
          },
  }
};
</script>
