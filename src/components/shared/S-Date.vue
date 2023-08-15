<template>
  <div class="q-mb-sm">
    <q-input outlined readonly :label="label" :dense="dense" v-model="date">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date today-btn v-model="date" :mask="dateFormat">
              <div class="row items-center justify-end">
                <q-btn
                  @click="SetDate"
                  v-close-popup
                  label="Ok"
                  color="primary"
                  flat
                />
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    dateFormat: {
      type: String,
      default: "DD/MM/YYYY",
    },
    dense: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    SetDate() {
      this.$emit("update:date", this.date);
    },
  },
};
</script>
