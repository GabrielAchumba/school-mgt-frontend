<template>
  <div>
    <div class="row q-pa-none">
      <q-card style="min-width: 350px;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">
            <q-avatar color="transparent" text-color="blue" icon="refresh" />
            Reset Confirmation
          </div>
          <q-space />
          <q-btn flat round dense icon="close" @click="$emit('close')" />
        </q-card-section>
        <!-- <q-separator /> -->
        <q-card-section class="text-left">
          <p>{{ info }}</p>
        </q-card-section>
        <!-- <q-separator /> -->
        <q-card-actions align="right">
          <div class="row">
            <s-cancel-button text-color="white" @click="$emit('close')">
              <div>
                <q-avatar
                  color="transparent"
                  text-color="white"
                  icon="close"
                  size="sm"
                />
                Close
              </div>
            </s-cancel-button>

            <s-save-button text-color="white" @click="$emit('reset')">
              <div>
                <q-avatar
                  color="transparent"
                  text-color="white"
                  icon="refresh"
                  size="sm"
                />
                Reset
              </div>
            </s-save-button>
          </div>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import mixin_Input from "src/mixins/Mixin-Input";

export default {
  name: "resetDialog",
  mixins: [mixin_Input],
  props: {
    info: {
      type: String,
      require: true,
    },
  },
}
</script>
