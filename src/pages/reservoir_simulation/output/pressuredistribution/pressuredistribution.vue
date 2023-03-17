<template>
    <div class="row">
        <div class="col-4 q-pa-sm">
            <Form
            :formData="pressuredistributionForm"
            :isFormTitle="pressuredistributionForm.isTitleVisible"
            @viewPressureDistribution="viewPressureDistribution($event)"/>
        </div>
        <div class="col-8 q-pa-sm">
            <Table
            :table_VM="table_VM"
            :tableRows="tableRows"/>
        </div>
    </div>
</template>

<script>
import { pressuredistributionForm } from "./pressuredistributionVM";
import Form from "../../../../components/Forms/Form.vue";
import Table from "../../../../components/Tables/Table.vue";

export default {
    components:{
        Form,
        Table,
    },
    data(){
        return {
            pressuredistributionForm: pressuredistributionForm,
            ARRAY: "Array",
            table_VM: {},
            tableRows: [],
        }
    },
    methods:{
        isNumeric(n){
            return !isNaN(parseFloat(n)) && isFinite(n);
        },
        incrementing(step, duration) {
            let mat = []

            if (duration === step) {
                mat = [0, step]
            }else{
                let i = 0
                while (i < duration) {
                    mat.push(i)
                    i = i + step;
                }
            }
            return mat
        },
        createBackendSchedulePayload(schedule){
            var context = this;
            let cumulativeTime = []
            if(schedule.typeOfSchedule === context.ARRAY){
                for(let i = 0; i < schedule.table.length; i++){
                    if(context.isNumeric(schedule.table[i].time)){
                       cumulativeTime.push(Number(schedule.table[i].time)) 
                    }
                }
            }else{
                cumulativeTime = context.incrementing(schedule.timeStep, schedule.duration)
            }

            const _schedule = {
                typeOfSchedule: schedule.typeOfSchedule,
                cumulativeTime,

            }

            return _schedule;
        },
        viewPressureDistribution(payload){
            var context = this;
            console.log('payload: ', payload)
            context.loadPressureDistribution(payload.id)
        },
        loadPressureDistribution(selectedIndex){
            var context = this;
            const dp =  2;
            const geometry = this.$store.getters["simulationStore/geometry"]
            const PressureDistribution = this.$store.getters["simulationStore/spaceDistributions"][selectedIndex].PressureDistribution
            const nx = geometry.dimensions.nx;
            const ny = geometry.dimensions.ny;
            const nz = geometry.dimensions.nz;
            let counter = -1;
            const pressure3D = []
            for(let k = 0; k < nz; k++){
                const mat2D = []
                for(let j = 0; j < ny; j++){
                    const rowi = []
                    for(let i = 0; i < nx; i++){
                        counter++;
                        rowi.push(PressureDistribution[counter])
                    }
                    mat2D.push([...rowi])
                }
                pressure3D.push([...mat2D])
            }
            
            context.table_VM.tables = []
            const array = []
            const cols = []
            cols.push({ name: "ji", label: "(j,i)", field: "", align: "left", isText: true })
            for(let i = 0; i < nx; i++){
                cols.push({
                    name: `${i+1}`, label: `${i+1}`, field: "", align: "left", 
                    isText: true, actionName: "showTableCellDialog"
                })
            }
            
            for(let j = 0; j < ny; j++){
                const row = {}
                row["ji"] = j+1
                for(let i = 0; i < nx; i++){
                    row[`${i+1}`] = `${(pressure3D[0][j][i]).toFixed(dp)}`
                }
                array.push({...row})
            }

            context.table_VM = {
                title: "",
                columns: [...cols],
                rows: [...array],
                separator: "cell",
            }
        }
    },
    created(){
        var context = this;
        const schedule = context.createBackendSchedulePayload(this.$store.getters["simulationStore/schedule"])
        console.log("schedule: ", schedule)
        context.pressuredistributionForm.qLists[0].items = schedule.cumulativeTime.map((row, i) => {
            console.log("row: ", row)
            return {
                id: i,
                value: i,
                type: `${row}`,
                name: `${row}`,
            }
        })

        context.loadPressureDistribution(0)
    }
}
</script>
