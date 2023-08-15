<template>
  <div class="row q-mb-lg">
    <q-input 
      v-for="qInput in formData.qInputs" 
      :key="qInput.label"
      :rules="[(val) => !!val || `${qInput.label} is required`]"
      :label="qInput.label"
      v-model="qInput.name"
      :type="qInputType"
      color="positive"
      style="width: 100%"
      clearable
      outlined
    >
      <template v-slot:prepend>
        <q-icon color="positive" name="lock" />
      </template>
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click.stop="ispassword"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props:{
        formData: {
            type: Object,
            default: () => {
              return {
                qInputs: [
                    {label: "Password", name: "", placeholder: "Your password", type: "password"},
                ]
              }
            }
        },
  },
  data() {
    return {
      isPwd: true,
      qInputType: "password"
    };
  },
  methods: {
    ispassword() {
      if (this.isPwd) {
        this.isPwd = false;
        this.qInputType = "text";
      } else {
        this.isPwd = true;
        this.qInputType = "password";
      }
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
};
</script>
