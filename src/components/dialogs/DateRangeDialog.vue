<template>
  <div>
    <div class="row q-pa-none">
      <q-card style="min-width: 350px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">
            {{ title }}
          </div>
          <q-space />
          <q-btn flat round dense icon="close" @click="$emit('close')" />
        </q-card-section>
        <!-- <q-separator /> -->
        <q-card-section class="text-left">
          <div>
            <s-date
              label="Acquisiton Date"
              v-model:date="acquisitonDate"
              @update:date="acquisitonDate = $event"
              dateFormat="YYYY/MM/DD"
            />
            <s-date
              label="Valid From"
              v-model:date="validFrom"
              @update:date="updateFromDate"
              dateFormat="YYYY/MM/DD"
            />
            <q-toggle
              label="Set Data Expiration Date"
              v-model="isExpirationDate"
            />
            <s-date-boundary
              v-if="isExpirationDate == true"
              label="Valid To"
              v-model:date="validTo"
              @update:date="validTo = $event"
              :dateFrom="validFrom"
            />
            <s-text-area-input
              label="Comments"
              v-model:value="comments"
              @update:value="comments = $event"
            />
          </div>
        </q-card-section>
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

            <s-save-button text-color="white" @click="saveAction">
              <div>
                <q-avatar
                  color="transparent"
                  text-color="white"
                  icon="save"
                  size="sm"
                />
                Save
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
import STextAreaInput from "../shared/S-TextAreaInput.vue";

export default {
  name: "dateRangeDialog",
  mixins: [mixin_Input],
  props: {
    title: {
      type: String,
      default: "Date Range Dialog",
    },
  },
  data() {
    return {
      acquisitonDate: "2010/4/3",
      validFrom: "2010/4/3",
      validTo: "2010/4/1",
      isExpirationDate: true,
      comments: "",
    };
  },
  computed: {},
  methods: {
    updateFromDate(e) {
      this.validFrom = e;
      if (this.isExpirationDate == true) {
        this.validTo = e;
      }
    },
    reverseDate(date) {
      let fn = date.split("/");
      let obj = "";
      if (fn.length > 1) {
        obj = `${fn[2]}/${fn[1]}/${fn[0]}`;
      }
      return obj;
    },
    padLeadingZeros(num, size) {
      var s = num + "";
      while (s.length < size) s = "0" + s;
      return s;
    },
    saveAction() {
      if (this.isExpirationDate == false) {
        this.validTo = "";
      }
      let result = {
        isExpirationDate: this.isExpirationDate,
        validFrom: this.reverseDate(this.validFrom),
        validTo: this.reverseDate(this.validTo),
        acquisitonDate: this.reverseDate(this.acquisitonDate),
        comments: this.comments,
      }

     // console.log("result :", result);

      this.$emit("save", result);
    },
  },
  mounted() {
    const today = new Date();
    const day = this.padLeadingZeros(today.getDate(), 2);
    const month = this.padLeadingZeros(today.getMonth() + 1, 2);
    const year = today.getFullYear();
    this.validFrom = `${year}/${month}/${day}`;
    this.validTo = this.validFrom;
    this.acquisitonDate = this.validFrom;
  },
}
</script>
