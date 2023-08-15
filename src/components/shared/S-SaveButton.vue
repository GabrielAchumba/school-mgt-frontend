<template>
  <q-card-actions>
    <q-btn
      :style="myStyle"
      class="bg-positive text-accent"
      :disable="isDisable"
      :type="type"
      no-caps
    >
      <div v-if="iconName">
        <q-icon
          v-if="iconPosition == 'left'"
          left
          :name="iconName"
          color="accent"
        />
        <q-icon v-else right :name="iconName" color="accent" />
      </div>
      <slot>Save</slot>
    </q-btn>
  </q-card-actions>
</template>

<script>
export default {
  props: {
    type: {
      default: "submit",
      type: String,
    },
    isDisable: {
      default: false,
      type: Boolean,
    },
    width: {
      default: "100",
      type: String,
    },
    height: {
      default: "35",
      type: String,
    },
    disable: {
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
          width: "100%"
        };
      }
      return data;
    },
  },
};
</script>
