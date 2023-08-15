<template>
  <q-card-actions align="right">
    <q-btn
      :style="myStyle"
      :color="color"
      :text-color="textColor"
      :type="type"
      :disable="isDisable"
      no-caps
      dense
      :flat="flat"
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
      <slot>Cancel</slot>
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
      default: "red",
      type: String,
    },
    textColor: {
      default: "#14A9C1",
      type: String,
    },
    enableFullWidth: {
      default: false,
      type: Boolean,
    },
    flat: {
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
