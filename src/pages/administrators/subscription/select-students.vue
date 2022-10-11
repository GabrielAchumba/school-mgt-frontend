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
                     }, 
                     {
                         value: 2,
                         type: "180 Days",
                         label: "180 Days",
                     }, 
                     {
                         value: 3,
                         type: "360 Days",
                         label: "360 Days"
                     }], actionName: "typeOfInstructor", 
            visible: true },
            qBtn: { label: "Make Payment", name: "makePayment"},
            GroupedCheckBox: {label: "", value: "", list: [], group: []},
        }
    },
    methods: {
        onQSelectItemValueChanged(_qSelect){
            console.log("_qSelect: ", _qSelect);
        },
        ClickAction(actionName){
            console.log("actionName: ", actionName);
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

            console.log("context.GroupedCheckBox.list: ", context.GroupedCheckBox.list)

        }
    },
    async created(){
        var context = this;
        await context._loadSubjects();
    }
}
</script>