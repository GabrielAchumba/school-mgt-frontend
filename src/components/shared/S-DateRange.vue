<template>
  <div class="q-mb-sm">
    <q-input
      outlined
      readonly
      :label="label"
      :dense="dense"
      v-model="proxyDate"
    >
      <template v-slot:append
        ><div>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date
                :range="true"
                :mask="dateFormat"
                v-model="dateObject"
                today-btn
              >
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
        </div>
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
      type: Object,
      default: () => {},
      required: true,
    },
    dateFormat: {
      type: String,
      default: "D/M/YYYY",
    },
    dense: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      proxyDate: "",
      dateObject: {
        from: "01/01/2010",
        to: "01/07/2010",
      },
    };
  },
  methods: {
    SetDate() {
      this.setProxyDate();
      this.$emit("update:date", this.dateObject);
    },
    setProxyDate() {
      this.proxyDate = `From: ${this.dateObject.from} To: ${this.dateObject.to}`;
    },
  },
  mounted() {
    this.dateObject = { ...this.date };
    this.setProxyDate();
  },
}
</script>
