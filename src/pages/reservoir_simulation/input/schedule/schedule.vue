<template>
    <div class="q-pa-md">
        <Form
        :formData="typeOfScheduleForm"
        :isFormTitle="isTypeOfScheduleForm"
        @selectTypeOfSchedule="selectTypeOfSchedule($event)"/>
        <Form
        v-if="isConstant"
        :formData="constantTimeStepForm"
        @ApplyConstantTimeStep="ApplyConstantTimeStep($event)"/>
        <Form
        v-if="isArray"
        :formData="arrayTimeStepForm"
        @ApplyDurationArray="ApplyDurationArray($event)"/>
    </div>
</template>

<script>

import Form from "../../../../components/Forms/Form.vue";
import { typeOfScheduleForm, constantTimeStepForm, arrayTimeStepForm } from "./scheduleVM"

export default {
    components:{
        Form
    },
    data(){
        return {
            isTypeOfScheduleForm: false,
            isConstant: true,
            isArray: false,
            selectedSchedule: {},
            typeOfScheduleForm: typeOfScheduleForm,
            constantTimeStepForm: constantTimeStepForm,
            arrayTimeStepForm: arrayTimeStepForm,
            timeStepArray: [],
        }
    },
    methods:{
        Cancel(){
            this.$router.push('/olasim')
        },
        ApplyConstantTimeStep(){
            var context = this;
            const payload = {
               typeOfSchedule: context.selectedSchedule.type,
               timeStep: Number(context.constantTimeStepForm.qInputs[0].name),
               duration: Number(context.constantTimeStepForm.qInputs[1].name),
            }

            this.$store.commit("simulationStore/setConstantSchedule", payload);
            //this.$router.push("/olasim")

        },
        ApplyDurationArray(){
            var context = this;
            const payload = {
               typeOfSchedule: context.selectedSchedule.type,
               table: [...context.arrayTimeStepForm.tables[0].rows],
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setScheduleArray", payload);
            //this.$router.push("/olasim")
        },
        selectTypeOfSchedule(payload){
            var context = this
            context.selectedSchedule = context.typeOfScheduleForm.qSelects[0].list[payload.value];
            context.isConstant = false;
            context.isArray = false;
            switch(payload.value){
                case 0:
                    context.isConstant = true;
                    break;
                case 1:
                    context.isArray = true;
                    break;
            }
        },
    },
    created(){
        var context = this;
        context.constantTimeStepForm.clearQInputs();
        const schedule = this.$store.getters["simulationStore/schedule"]

        context.arrayTimeStepForm.tables = []
        context.timeStepArray = []

        const cols = []
        cols.push({ name: "sn", label: "SN", field: "", align: "left", type: "" })
        cols.push({ name: "time", label: "Time (days)", field: "", align: "left", type: "" })
        
        
        for(let j = 0; j < 20; j++){
            context.timeStepArray.push({
                sn: j+1,
                time: "",
            })
        }

        context.arrayTimeStepForm.tables.push({
            title: "",
            columns: [...cols],
            rows: [...context.timeStepArray],
            separator: "cell",
        })
        
        context.typeOfScheduleForm.qSelects[0].value = 0
        context.selectTypeOfSchedule({value: 0})

        switch(schedule.typeOfPVT){
            case "Constant":
                context.isConstant = true;
                context.typeOfScheduleForm.qSelects[0].value = 0
                context.selectTypeOfSchedule({value: 0})
                context.constantTimeStepForm.qInputs[0].name = schedule.timeStep.toString()
                context.constantTimeStepForm.qInputs[1].name = schedule.duration.toString()
                break;
            case "Array":
                context.isArray = true;
                context.typeOfScheduleForm.qSelects[0].value = 1
                context.selectTypeOfSchedule({value: 1})
                break;
        }

    }
}
</script>