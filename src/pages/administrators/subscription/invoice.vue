<template>
    <div class="q-pa-sm">
        <q-bar class="q-pa-sm bg-accent flex flex-center">
            <div class="text-h6 text-primary text-center">Subscritption Configuration</div>
        </q-bar>
        <div class="q-pa-sm flex flex-center">{{ customerCopy }} </div>
        <div class="q-pa-sm flex flex-center text-accent bg-primary">
            <strong>{{ appName }}</strong>
        </div>
        <div class="q-pa-sm flex flex-center"> {{ companyAddress }}</div>
        <hr/>
        <q-list>
             <q-item>
                <q-item-section>{{ receiptNo.variable }}</q-item-section>
                <q-item-section>{{ receiptNo.value }}</q-item-section>
            </q-item>
            <q-item>
                <q-item-section>{{ resultSubscription.variable }}</q-item-section>
                <q-item-section>{{ resultSubscription.value }}</q-item-section>
            </q-item>
            <q-item>
                <q-item-section>{{ examsAndQuizSubscription.variable }}</q-item-section>
                <q-item-section>{{ examsAndQuizSubscription.value }}</q-item-section>
            </q-item>
             <q-item>
                <q-item-section>{{ fileManagementSubscription.variable }}</q-item-section>
                <q-item-section>{{ fileManagementSubscription.value }}</q-item-section>
            </q-item>
            <q-item>
                <q-item-section>{{ appCustomizationSubscription.variable }}</q-item-section>
                <q-item-section>{{ appCustomizationSubscription.value }}</q-item-section>
            </q-item>
            <q-item>
                <q-item-section>{{ onLineLearningSubscription.variable }}</q-item-section>
                <q-item-section>{{ onLineLearningSubscription.value }}</q-item-section>
            </q-item>
             <hr>
            <q-item>
                <q-item-section>{{ allSubscriptions.variable }}</q-item-section>
                <q-item-section>{{ allSubscriptions.value }}</q-item-section>
                 <hr>
            </q-item>
            <q-item>
                 <hr>
                <q-item-section>{{ paymentStatus.variable }}</q-item-section>
                <q-item-section>{{ paymentStatus.value }}</q-item-section>
                 <hr>
            </q-item>
            <q-item>
                 <hr>
                <q-item-section>{{ paymentMessage.variable }}</q-item-section>
                <q-item-section>{{ paymentMessage.value }}</q-item-section>
                 <hr>
            </q-item>
        </q-list>
         <hr/>
         <div class="q-pa-sm flex flex-center">Thanks, call again! </div>
    </div>
</template>

<script>
export default {
    computed:{
        receiptNo(){
            return this.$store.getters["subscriptionStore/receiptNo"]
        },
        resultSubscription(){
            return this.$store.getters["subscriptionStore/resultSubscription"]
        },
        examsAndQuizSubscription(){
            return this.$store.getters["subscriptionStore/examsAndQuizSubscription"]
        },
        fileManagementSubscription(){
            return this.$store.getters["subscriptionStore/fileManagementSubscription"]
        },
        appCustomizationSubscription(){
            return this.$store.getters["subscriptionStore/appCustomizationSubscription"]
        },
        onLineLearningSubscription(){
            return this.$store.getters["subscriptionStore/onLineLearningSubscription"]
        },
        allSubscriptions(){
            return this.$store.getters["subscriptionStore/allSubscriptions"]
        },
        paymentStatus(){
            return this.$store.getters["subscriptionStore/paymentStatus"]
        },
        paymentMessage(){
            return this.$store.getters["subscriptionStore/paymentMessage"]
        }
    },
    data(){
        return {
            customerCopy: "*** CUSTOMER'S COPY ***",
            appName: "TORPA",
            companyAddress: `#156 Tom Inko-Tariah Avenue, Rumuogba Estate,
                                PortHarcourt, Rivers State`,
        }
    }
}
</script>
