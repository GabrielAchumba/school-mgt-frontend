<template>
  <div class="row">
    <span class="col">
      <p class="q-ma-none">{{ qInput.label }}</p>
    <q-input
      outlined
      :readonly="qInput.readonly"
      v-model="qInput.name"
      :dense="qInput.dense"
      :rules="[(val) => !!val || `${qInput.label} is required`]"
      clearable
      v-select-all
      :type="qInput.type"
      class="q-ma-none"
      :disable="qInput.disable"
    >
    <template v-slot:prepend>
        <q-icon color="positive" :name="qInput.prependIcon" />
      </template>

      <template v-slot:append>
        <q-icon
          v-if="qInput.appendIcon==='password'"
          :name="passwordIcon"
          class="text-positive"
          @click.stop="ispassword"
        />
        <q-icon 
        v-else
        :name="qInput.appendIcon" 
        class="bg-primary text-accent"
        @click="qInputTemplateAction(qInput)"/>
      </template>
    </q-input>
    <div v-if="qInput.linkName || qInput.postInfo">
      <slot :name="qInput.label"></slot>
    </div>
    </span>
  </div>
</template>

<script>
export default {
  props:{
    qInput: {
        type: Object,
        default: () => {
          return {label: "Password", name: "", placeholder: "Your password", type: "password"}
        }
    },
  },
  data(){
    return {
      passwordIcon: "visibility_off",
      isPwd: true,
    }
  },
  methods:{
    qInputTemplateAction(payload){
      this.$emit("qInputTemplateAction", payload)
    },
    ispassword() {
      if (this.isPwd===true) {
        this.isPwd = false;
        this.passwordIcon = "visibility";
        this.qInput.type = "text";
      } else {
        this.isPwd = true;
        this.passwordIcon = "visibility_off";
        this.qInput.type = "password";
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

<style>
</style>