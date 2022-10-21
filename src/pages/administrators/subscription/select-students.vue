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
                @change="onGroupCheckBoxModelChanged"
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
           <makepayment/>
    </div>
</div>

</template>

<script>
import { loadStudents } from '../student/utils';
import makepayment from "./make-payment.vue";
import { selectStudentsForm } from "./view_models/select-students-view-model"

export default {
    components: {
        makepayment,
    },
    data(){
        return {
            nStudents: 0,
            visible: true,
            qSelect: { label: "", value: "", 
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
            selectedSubscriptionPlan: {},
            selectStudentsForm: selectStudentsForm,
        }
    },
    methods: {
        onGroupCheckBoxModelChanged(val){
            var context = this;
            console.log("val: ", val)
            console.log("GroupedCheckBox.group: ", context.GroupedCheckBox.group);
            context.CalculateNumberOfStudents()
            context.SetTotalAmountViewProps();

            console.log("totalAmount: ", context.totalAmount);
            console.log("totalAmountTitle: ", context.totalAmountTitle);
            console.log("totalAmountDescription: ", context.totalAmountDescription);

        },
        updateTotalAmountViewProps(){
            var context = this;
            this.$store.commit("subscriptionStore/SetTotalAmount", context.totalAmount)
            this.$store.commit("subscriptionStore/SetTotalAmountTitle", context.totalAmountTitle)
            this.$store.commit("subscriptionStore/SetTotalAmountDescription", context.totalAmountDescription)
        },
        onQSelectItemValueChanged(_qSelect){
            var context = this;
            console.log("_qSelect: ", _qSelect)
            this.$store.commit("subscriptionStore/SetSelectedSubscriptionPlan", _qSelect)
            context.CalculateNumberOfStudents()
            context.SetTotalAmountViewProps();

            console.log("totalAmount: ", context.totalAmount);
            console.log("totalAmountTitle: ", context.totalAmountTitle);
            console.log("totalAmountDescription: ", context.totalAmountDescription);
        },
        ClickAction(actionName){
            var context = this;
            console.log("actionName: ", actionName);
            context.CalculateNumberOfStudents()
            context.SetTotalAmountViewProps();
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

            context.selectedSubscriptionPlan = this.$store.getters["subscriptionStore/selectedSubscriptionPlan"]
            context.qSelect.value = context.selectedSubscriptionPlan.label

            context.CalculateNumberOfStudents()
            context.SetTotalAmountViewProps()

            console.log("totalAmount: ", context.totalAmount);
            console.log("totalAmountTitle: ", context.totalAmountTitle);
            console.log("totalAmountDescription: ", context.totalAmountDescription);
            

        },
        SetTotalAmountViewProps(){
            var context = this;
            context.totalAmount = context.selectedSubscriptionPlan.amount * context.nStudents;
            context.totalAmountTitle = `${context.selectedSubscriptionPlan.label} Subscription Plan Total Amount`
            context.totalAmountDescription = `The total amount to be paid for ${context.nStudents} students is ₦${context.totalAmount}`
            context.updateTotalAmountViewProps();
        },
        CalculateNumberOfStudents(){
            var context = this;
            for(const item of context.GroupedCheckBox.group){
                if(item.value === 1){
                    context.nStudents = context.GroupedCheckBox.list.length - 1;
                    return;
                }
            }
            
            context.nStudents = context.GroupedCheckBox.group.length;
        }
    },
    async created(){
        var context = this;
        await context._loadSubjects();
//https://meet.google.com/hrv-ikbt-uim
    }
}
</script>