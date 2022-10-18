<template>
  <div>
    <div>
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
          
          <!-- <q-tab-panel name="offplatformpayment">
            <offPlatformPayment-app
            :category="category"
            :amount="amount"
            :categoryBankName="selectedCategoryBankDetails.categoryBankName"
            :categoryAccountName="selectedCategoryBankDetails.categoryAccountName"
            :categoryAccountNumber="selectedCategoryBankDetails.categoryAccountNumber"></offPlatformPayment-app>
          </q-tab-panel> -->

          <!-- <q-tab-panel name="onplatformpayment">
            <onPlatformPayment-app></onPlatformPayment-app>

          </q-tab-panel> -->

        </q-tab-panels>

      </q-card>

    </div>
  </div>
</template>

<script>

export default {
    data(){
        return {
            data: "offplatformpayment",
        }
    }
}