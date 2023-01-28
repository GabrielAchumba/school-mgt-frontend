<template>
  <div  class="q-pa-md">
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-accent"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="offplatformpayment" label="Off-Platform Payment" class="bg-accent text-primary" />
        <q-tab name="onplatformpayment" label="On-Platform Payment" class="bg-accent text-primary" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        
        <q-tab-panel name="offplatformpayment">
          <OffPlatformPayment
          @getPaymentResponse="getPaymentResponse($event)"/>
        </q-tab-panel>

        <q-tab-panel name="onplatformpayment">
          <PaystackView/>
        </q-tab-panel>

      </q-tab-panels>

    </q-card>
  </div>
</template>

<script>
import OffPlatformPayment from "./offPlatformPayment.vue"
import OnPlatformPayment from "./onPlatformPayment.vue"
import PaystackView from "../payment-gateway/paystack-view.vue"
export default {
    components: {
            OffPlatformPayment,
            OnPlatformPayment,
            PaystackView
        },
  data () {
    return {
      tab: 'offplatformpayment',
    }
  },
  methods:{
    getPaymentResponse(payload){
      this.$emit("getPaymentResponse", payload);
    }
  }
}
</script>