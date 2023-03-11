<template>
    <div class="q-pa-md">
        <Form
        :formData="typeOfInitializationForm"
        :isFormTitle="isTypeOfInitializationFormTitle"
        @selectInitializationForm="selectInitializationForm($event)"
        @selectVariableAction="selectVariableAction($event)"/>
        <Form
        v-if="isConstant"
        :formData="constantInitializationForm"
        @ApplyConstantInitialization="ApplyConstantInitialization($event)"/>
        <div 
        v-if="isArray"
        class="col-12">
         <Form
        v-if="isPressureArray"
        :formData="arrayPressureForm"
        @ApplyPressureDistribution="ApplyPressureDistribution($event)"/>
        <Form
        v-if="isOilSaturationArray"
        :formData="arrayOilSaturationForm"
        @ApplyOilSaturationDistribution="ApplyOilSaturationDistribution($event)"/>
        <Form
        v-if="isWaterSaturationArray"
        :formData="arrayWaterSaturationForm"
        @ApplyWaterSaturationDistribution="ApplyWaterSaturationDistribution($event)"/>
        <Form
        v-if="isGasSaturationArray"
        :formData="arrayGasSaturationForm"
        @ApplyGasSaturationDistribution="ApplyGasSaturationDistribution($event)"/>
        </div>
    </div>
</template>

<script>

import Form from "../../../../components/Forms/Form.vue";
import { typeOfInitializationForm, constantInitializationForm, arrayPressureForm,
    arrayOilSaturationForm, arrayWaterSaturationForm, arrayGasSaturationForm } from "./initializationVM"

export default {
    components:{
        Form
    },
    data(){
        return {
            isConstant: true,
            isArray: false,
            isPressureArray: false,
            isOilSaturationArray: false,
            isWaterSaturationArray: false,
            isGasSaturationArray: false,
            isTypeOfInitializationFormTitle: false,
            selectedInitialization: {},
            selectedVariable: {},
            typeOfInitializationForm: typeOfInitializationForm,
            constantInitializationForm: constantInitializationForm,
            arrayPressureForm: arrayPressureForm,
            arrayOilSaturationForm: arrayOilSaturationForm,
            arrayWaterSaturationForm: arrayWaterSaturationForm,
            arrayGasSaturationForm: arrayGasSaturationForm,
            pressureArray: [],
            oilSaturationArray: [],
            waterSaturationArray: [],
            gasSaturationArray: [],
        }
    },
    methods:{
        Cancel(){
            this.$router.push('/olasim')
        },
        ApplyConstantInitialization(){
            var context = this;
            const payload = {
               typeOfInitialization: context.selectedInitialization.type,
               pressure: Number(context.constantInitializationForm.qInputs[0].name),
               oilSaturation: Number(context.constantInitializationForm.qInputs[1].name),
               waterSaturation: Number(context.constantInitializationForm.qInputs[2].name),
               gasSaturation: Number(context.constantInitializationForm.qInputs[3].name),
            }

            this.$store.commit("simulationStore/setConstantInitialization", payload);
            //this.$router.push("/olasim")

        },
        ApplyPressureDistribution(){
            var context = this;
            const payload = {
               typeOfInitialization: context.selectedInitialization.type,
               pressureArray: [...context.arrayPressureForm.tables[0].rows],
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setPressureInitialization", payload);
            //this.$router.push("/olasim")
        },
        ApplyOilSaturationDistribution(){
            var context = this;
            const payload = {
               typeOfInitialization: context.selectedInitialization.type,
               oilSaturationArray: [...context.arrayOilSaturationForm.tables[0].rows],
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setOilSaturationInitialization", payload);
            //this.$router.push("/olasim")
        },
        ApplyWaterSaturationDistribution(){
            var context = this;
            const payload = {
               typeOfInitialization: context.selectedInitialization.type,
               waterSaturationArray: [...context.arrayWaterSaturationForm.tables[0].rows],
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setWaterSaturationInitialization", payload);
            //this.$router.push("/olasim")
        },
        ApplyGasSaturationDistribution(){
            var context = this;
            const payload = {
               typeOfInitialization: context.selectedInitialization.type,
               gasSaturationArray: [...context.arrayGasSaturationForm.tables[0].rows],
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setGasSaturationInitialization", payload);
            //this.$router.push("/olasim")
        },
        selectInitializationForm(payload){
            var context = this
            context.selectedInitialization = context.typeOfInitializationForm.qSelects[0].list[payload.value];
            context.isConstant = false;
            context.isArray = false;
            switch(payload.value){
                case 0:
                    context.isConstant = true;
                    context.typeOfInitializationForm.qSelects[1].visible = false
                    break;
                case 1:
                    context.isArray = true;
                    context.typeOfInitializationForm.qSelects[1].visible = true
                    break;
            }
        },
        selectVariableAction(payload){
            var context = this
            context.selectedVariable = context.typeOfInitializationForm.qSelects[1].list[payload.value];
            const initialization = this.$store.getters["simulationStore/initialization"]
            context.isPressureArray = false;
            context.isOilSaturationArray = false;
            context.isWaterSaturationArray = false;
            context.isGasSaturationArray = false;
            switch(payload.value){
                case 0:
                    context.isPressureArray = true;
                    if(initialization.pressureArray.length > 0){
                        context.arrayPressureForm.tables[0].rows = initialization.pressureArray.map((row) => {
                            return {...row}
                        })
                    }
                    break;
                case 1:
                    context.isOilSaturationArray = true;
                    if(initialization.oilSaturationArray.length > 0){
                        context.arrayOilSaturationForm.tables[0].rows = initialization.oilSaturationArray.map((row) => {
                            return {...row}
                        })
                    }
                    break;
                case 2:
                    context.isWaterSaturationArray = true;
                    if(initialization.waterSaturationArray.length > 0){
                        context.arrayWaterSaturationForm.tables[0].rows = initialization.waterSaturationArray.map((row) => {
                            return {...row}
                        })
                    }
                    break;
                case 3:
                    context.isGasSaturationArray = true;
                    if(initialization.gasSaturationArray.length > 0){
                        context.arrayGasSaturationForm.tables[0].rows = initialization.gasSaturationArray.map((row) => {
                            return {...row}
                        })
                    }
                    break;
            }
        }
    },
    created(){
        var context = this;
        context.constantInitializationForm.clearQInputs();
        const geometry = this.$store.getters["simulationStore/geometry"]
        const initialization = this.$store.getters["simulationStore/initialization"]
        const nx = geometry.dimensions.nx
        const ny = geometry.dimensions.ny

        context.arrayPressureForm.tables = []
        context.arrayOilSaturationForm.tables = []
        context.arrayWaterSaturationForm.tables = []
        context.arrayGasSaturationForm.tables = []
        context.pressureArray = []
        context.oilSaturationArray = []
        context.waterSaturationArray = []
        context.gasSaturationArray = []
        const cols = []
        cols.push({ name: "ij", label: "(i,j)", field: "", align: "left", type: "" })
        for(let j = 0; j < ny; j++){
            cols.push({
                name: `${j+1}`, label: `${j+1}`, field: "", align: "left", type: ""
            })
        }
        for(let j = 0; j < nx; j++){
            const row = {}
            row["ij"] = j+1
            for(let i = 0; i < ny; i++){
                row[`${i+1}`] = ""
            }
            context.pressureArray.push({...row})
            context.oilSaturationArray.push({...row})
            context.waterSaturationArray.push({...row})
            context.gasSaturationArray.push({...row})
        }

        context.arrayPressureForm.tables.push({
            title: "",
            columns: [...cols],
            rows: [...context.pressureArray],
            separator: "cell",
        })
        
        context.arrayOilSaturationForm.tables.push({
            title: "",
            columns: [...cols],
            rows: [...context.oilSaturationArray],
            separator: "cell",
        })

        context.arrayWaterSaturationForm.tables.push({
            title: "",
            columns: [...cols],
            rows: [...context.waterSaturationArray],
            separator: "cell",
        })

        context.arrayGasSaturationForm.tables.push({
            title: "",
            columns: [...cols],
            rows: [...context.gasSaturationArray],
            separator: "cell",
        })

        context.typeOfInitializationForm.qSelects[0].value = 0
        context.selectInitializationForm({value: 0})
        context.typeOfInitializationForm.qSelects[1].value = 0
        context.selectVariableAction({value: 0})

        switch(initialization.typeOfInitialization){
            case "Constant":
                context.isConstant = true;
                context.typeOfInitializationForm.qSelects[0].value = 0
                context.typeOfInitializationForm.qSelects[1].visible = false
                context.selectInitializationForm({value: 0})
                context.constantInitializationForm.qInputs[0].name = initialization.pressure.toString()
                context.constantInitializationForm.qInputs[1].name = initialization.oilSaturation.toString()
                context.constantInitializationForm.qInputs[2].name = initialization.waterSaturation.toString()
                context.constantInitializationForm.qInputs[3].name = initialization.gasSaturation.toString()
                break;
            case "Array":
                context.isArray = true;
                context.typeOfInitializationForm.qSelects[0].value = 1
                context.typeOfInitializationForm.qSelects[1].visible = true
                context.selectInitializationForm({value: 1})
                context.pressureArray = true;
                context.typeOfInitializationForm.qSelects[1].value = 0
                context.selectVariableAction({value: 0})
                break;
        }

    }
}
</script>