<template>
  <div>
    <div class="row q-pa-none">
      <q-card style="min-width: 350px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">
            <q-avatar
              color="transparent"
              :text-color="iconColor"
              :icon="iconName"
            />
            {{ title }}
          </div>
          <q-space />
          <q-btn
            flat round dense
            icon="close"
            @click="closeDialogBox"
          />
        </q-card-section>
        <!-- <q-separator /> -->
        <q-card-section >
          <p>{{ info }}</p>
        </q-card-section>
        <!-- <q-separator /> -->
        <q-card-actions align="right">
          <s-apply-button :flat="true" text-color="white" @click.native="submitAction">{{ closeButtonLabel }}</s-apply-button>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import mixin_Input from "src/mixins/Mixin-Input";

export default {
  name: "messageDialog",
  mixins: [mixin_Input],
  props: {
    title: {
      type: String,
      require: true,
    },
    info: {
      type: String,
      require: true,
    },
    iconName: {
      default: "warning",
      type: String,
    },
    iconColor: {
      default: "green",
      type: String,
    },
    closeButtonLabel: {
      type: String,
      default: "Okay",
    }
  },
  methods:{
    closeDialogBox(){
      var context = this;
      this.$emit("close", context.title); 
    },
    submitAction(){
      var context = this;
      console.log("submitAction")
      this.$emit("submitAction", context.title); 
    }
  }
}
</script>
