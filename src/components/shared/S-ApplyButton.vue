<template>
  <q-card-actions align="right">
    <q-btn
      :style="myStyle"
      class="bg-positive text-white"
      :type="type"
      :disable="isDisable"
      no-caps
      dense
    >
      <div v-if="iconName">
        <q-icon
          v-if="iconPosition == 'left'"
          left
          :name="iconName"
          color="white"
        />
        <q-icon v-else right :name="iconName" color="white" />
      </div>
      <slot>Apply</slot>
    </q-btn>
  </q-card-actions>
</template>



<script>
export default {
  props: {
    type: {
      default: "button",
      type: String,
    },
    width: {
      default: "100",
      type: String,
    },
    height: {
      default: "35",
      type: String,
    },
    isDisable : {
      default: false,
      type: Boolean,
    },
    color: {
      default: "posituve",
      type: String,
    },
    textColor: {
      default: "light-page",
      type: String,
    },
    enableFullWidth: {
      default: false,
      type: Boolean,
    },
    iconName: {
      default: "",
      type: String,
    },
    iconPosition: {
      default: "left",
      type: String,
    },
  },
  computed: {
    myStyle() {
      let data = {
        height: this.height + "px",
        width: this.width + "px",
      };
      if (this.enableFullWidth) {
        data = {
          height: this.height + "px",
        };
      }
      return data;
    },
  },
};
</script>
