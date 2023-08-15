<template>
  <div class="row q-mb-xs">
    <!-- <q-input
      :value="value"
      :model-value="value"
      @update:model-value="(e) => $emit('update:value', e)"
      :rules="[(val) => !!val || `${label} is required`]"
      :label="label"
      color="purple-5"
      style="width: 100%"
      clearable
      outlined
    >
      <template v-slot:prepend>
        <q-icon color="grey-5" name="email" />
      </template>
    </q-input> -->
    
    <q-input 
      v-for="qInput in formData.qInputs" 
      :key="qInput.label"
      :rules="[(val) => !!val || `${qInput.label} is required`]"
      :label="qInput.label"
      v-model="qInput.name"
      :type="qInput.type"
      color="positive"
      style="width: 100%"
      clearable
      outlined
    >
      <template v-slot:prepend>
        <q-icon color="positive" name="email" />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
 /*  props: ["label", "value", "disable"], */
  props:{
        formData: {
            type: Object,
            default: () => {
              return {
                qInputs: [
                    {label: "Email", name: "", placeholder: "Your name", type: "email"},
                ]
              }
            }
        },
    value: {
        type: String,
        default: ""
    },
    label: {
        type: String,
        default: ""
    },
    disable: {
        type: Boolean,
        default: false
    },
  },
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
  data(){
    return {
      txt: ""
    }
  },
  methods:{
    emitValue(payload){
      console.log(payload)
      //val => $emit('updatevalue', e)
    }
  }
};
</script>

