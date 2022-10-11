<template>
<div class="row text-center flex full-Width">
    <div class="col-4 q-ma-sm q-pa-sm">
        <q-card>
        <p class="q-pa-sm">Full Names of Students</p>
        <hr>
        <q-scroll-area
        style="height: 500px;">
            <q-option-group
            class="full-Width text-left"
                :options="GroupedCheckBox.list"
                type="checkbox"
                v-model="GroupedCheckBox.group"
            />
        </q-scroll-area>
        </q-card>
    </div>

    <div class="col-6 q-ma-sm q-pa-sm">
           <span><p class="q-ma-none text-left">Subscription Plan</p>
            <q-select
                class="col-7 q-ma-none"
                color="accent" 
                outlined label-color="accent"
                option-disable="inactive"
                v-model="qSelect.value"
                :options="qSelect.list"
                option-value="id"
                :option-label="'type'"
                name="type"
                emit-value
                map-options
                @input="onQSelectItemValueChanged(qSelect)"
                >
            </q-select>
           </span>
           <div class="text-right">
               <q-btn class="q-ma-sm bg-accent text-primary"
                    :label="qBtn.label"
                    type="button"
                    size="md"
                    no-caps
                    @click="ClickAction(qBtn.name)"
                />
           </div>
    </div>
</div>

</template>

<script>
import { loadStudents } from '../student/utils';

export default {
    data(){
        return {
            visible: true,
            qSelect: { label: "Type of Instructor", value: "", 
                    type: "", list: [{
                         value: 1,
                         type: "90 Days",
                         label: "90 Days",
                         amount: 1000,
                     }, 
                     {
                         value: 2,
                         type: "180 Days",
                         label: "180 Days",
                         amount: 1800,
                     }, 
                     {
                         value: 3,
                         type: "360 Days",
                         label: "360 Days",
                         amount: 2500,
                     }], actionName: "typeOfInstructor", 
            visible: true },
            qBtn: { label: "Make Payment", name: "makePayment"},
            GroupedCheckBox: {label: "", value: "", list: [], group: []},
            totalAmount: 0,
            totalAmountTitle: "",
            totalAmountDescription: "",
        }
    },
    methods: {
        updateTotalAmountViewProps(){
            var context = this;
            this.$store.commit("subscriptionStore/SetTotalAmount", context.totalAmount)
            this.$store.commit("subscriptionStore/SetTotalAmountTitle", context.totalAmountTitle)
            this.$store.commit("subscriptionStore/totalAmountDescription", context.totalAmountDescription)
        },
        onQSelectItemValueChanged(_qSelect){
            var context = this;
            this.$store.commit("subscriptionStore/SetSelectedSubscriptionPlan", _qSelect)
            context.updateTotalAmountViewProps();
        },
        ClickAction(actionName){
            var context = this;
            console.log("actionName: ", actionName);
            context.updateTotalAmountViewProps();
            this.$router.push('/total-amount')
        },
        async _loadSubjects(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            const { result } = await loadStudents(user.schoolId);
            this.$store.commit('subjectStore/SetSubjects', result);
            context.GroupedCheckBox.list = result.map((row) => {
                return {
                    ...row,
                    value: row.id,
                    label: `${row.firstName}  ${row.lastName}`,
                }
            })

            context.GroupedCheckBox.list.unshift({
                    value: 1,
                    label: "All Students",
            })

            const selectedSubscriptionPlan = this.$store.getters["subscriptionStore/selectedSubscriptionPlan"]
            context.GroupedCheckBox.value = selectedSubscriptionPlan.value

            context.totalAmount = selectedSubscriptionPlan.amount * (context.GroupedCheckBox.list.length - 1);
            totalAmountTitle = "Total Subscription Amount"
            //totalAmountDescription

        }
    },
    async created(){
        var context = this;
        await context._loadSubjects();

    }
}
</script>