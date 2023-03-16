<template>
    <div class="q-pa-md">
        <Form
        :formData="typeOfPVTProfileForm"
        :isFormTitle="isTypeOfPVTProfileFormTitle"
        @selectTypeOfPVTProfile="selectTypeOfPVTProfile($event)"
        @selectTypeOfFluidAction="selectTypeOfFluidAction($event)"/>
        <Form
        v-if="isConstant"
        :formData="constantPVTForm"
        @ApplyConstantPVT="ApplyConstantPVT($event)"/>
        <div 
        v-if="isArray"
        class="col-12">
         <Form
        v-if="isOilArray"
        :formData="arrayOilPVTProfileForm"
        @ApplyOilPVTTableForm="ApplyOilPVTTableForm($event)"/>
         <Form
        v-if="isWaterArray"
        :formData="arrayWaterPVTProfileForm"
        @ApplyWaterPVTTableForm="ApplyWaterPVTTableForm($event)"/>
         <Form
        v-if="isGasArray"
        :formData="arrayGasPVTProfileForm"
        @ApplyGasPVTTableForm="ApplyGasPVTTableForm($event)"/>
        </div>
    </div>
</template>

<script>

import Form from "../../../../components/Forms/Form.vue";
import { typeOfPVTProfileForm, constantPVTForm, arrayOilPVTProfileForm,
    arrayWaterPVTProfileForm, arrayGasPVTProfileForm } from "./pvtVM"

export default {
    components:{
        Form
    },
    data(){
        return {
            isTypeOfPVTProfileFormTitle: false,
            isConstant: true,
            isArray: false,
            isOilArray: false,
            isWaterArray: false,
            isGasArray: false,
            selectedPVT: {},
            selectedFluidType: {},
            typeOfPVTProfileForm: typeOfPVTProfileForm,
            constantPVTForm: constantPVTForm,
            arrayOilPVTProfileForm: arrayOilPVTProfileForm,
            arrayWaterPVTProfileForm: arrayWaterPVTProfileForm,
            arrayGasPVTProfileForm: arrayGasPVTProfileForm,
            oilPVTArray: [],
            waterPVTArray: [],
            gasPVTArray: [],
        }
    },
    methods:{
        Cancel(){
            this.$router.push('/olasim')
        },
        ApplyConstantPVT(){
            var context = this;
            const payload = {
               typeOfPVT: context.selectedPVT.type,
               pressure: Number(context.constantPVTForm.qInputs[0].name),
               oilFVF: Number(context.constantPVTForm.qInputs[1].name),
               oilViscosity: Number(context.constantPVTForm.qInputs[2].name),
               solutionGOR: Number(context.constantPVTForm.qInputs[3].name),
               waterFVF: Number(context.constantPVTForm.qInputs[4].name),
               waterViscosity: Number(context.constantPVTForm.qInputs[5].name),
               gasFVF: Number(context.constantPVTForm.qInputs[6].name),
               gasViscosity: Number(context.constantPVTForm.qInputs[7].name),
            }

            this.$store.commit("simulationStore/setConstantPVT", payload);
            //this.$router.push("/olasim")

        },
        ApplyOilPVTTableForm(){
            var context = this;
            const payload = {
               typeOfPVT: context.selectedPVT.type,
               oilPVT: [...context.arrayOilPVTProfileForm.tables[0].rows],
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setArrayOilPVT", payload);
            //this.$router.push("/olasim")
        },
        ApplyWaterPVTTableForm(){
            var context = this;
            const payload = {
               typeOfPVT: context.selectedPVT.type,
               waterPVT: [...context.arrayWaterPVTProfileForm.tables[0].rows],
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setArrayWaterPVT", payload);
            //this.$router.push("/olasim")
        },
        ApplyGasPVTTableForm(){
            var context = this;
            const payload = {
               typeOfPVT: context.selectedPVT.type,
               gasPVT: [...context.arrayGasPVTProfileForm.tables[0].rows],
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setArrayGasPVT", payload);
            //this.$router.push("/olasim")
        },
        selectTypeOfPVTProfile(payload){
            var context = this
            context.selectedPVT = context.typeOfPVTProfileForm.qSelects[0].list[payload.value];
            context.isConstant = false;
            context.isArray = false;
            switch(payload.value){
                case 0:
                    context.isConstant = true;
                    context.typeOfPVTProfileForm.qSelects[1].visible = false
                    break;
                case 1:
                    context.isArray = true;
                    context.typeOfPVTProfileForm.qSelects[1].visible = true
                    break;
            }
        },
        selectTypeOfFluidAction(payload){
            var context = this
            context.selectedFluidType = context.typeOfPVTProfileForm.qSelects[1].list[payload.value];
            const pvt = this.$store.getters["simulationStore/pvt"]
            context.isOilArray = false;
            context.isWaterArray = false;
            context.isGasArray = false;
            switch(payload.value){
                case 0:
                    context.isOilArray = true;
                    if(pvt.oil.table.length > 0){
                        context.arrayOilPVTProfileForm.tables[0].rows = pvt.oil.table.map((row) => {
                            return {...row}
                        })
                    }
                    break;
                case 1:
                    context.isWaterArray = true;
                    if(pvt.gas.table.length > 0){
                        context.arrayWaterPVTProfileForm.tables[0].rows = pvt.gas.table.map((row) => {
                            return {...row}
                        })
                    }
                    break;
                case 2:
                    context.isGasArray = true;
                    if(pvt.water.table.length > 0){
                        context.arrayGasPVTProfileForm.tables[0].rows = pvt.water.table.map((row) => {
                            return {...row}
                        })
                    }
                    break;
            }
        }
    },
    created(){
        var context = this;
        context.constantPVTForm.clearQInputs();
        const pvt = this.$store.getters["simulationStore/pvt"]

        context.arrayOilPVTProfileForm.tables = []
        context.arrayWaterPVTProfileForm.tables = []
        context.arrayGasPVTProfileForm.tables = []
        context.oilPVTArray = []
        context.waterPVTArray = []
        context.gasPVTArray = []
        const colsOil = []
        colsOil.push({ name: "sn", label: "SN", field: "", align: "left", type: "" })
        colsOil.push({ name: "pressure", label: "Pressure (psia)", field: "", align: "left", type: "", isText: true })
        colsOil.push({ name: "solutionGOR", label: "Solution GOR", field: "", align: "left", type: "", isText: true })
        colsOil.push({ name: "oilFVF", label: "Oil FVF (rb/stb)", field: "", align: "left", type: "", isText: true })
        colsOil.push({ name: "oilViscosity", label: "Oil Viscosity (cp)", field: "", align: "left", type: "", isText: true })

        const colsWater = []
        colsWater.push({ name: "sn", label: "SN", field: "", align: "left", type: "" })
        colsWater.push({ name: "pressure", label: "Pressure (psia)", field: "", align: "left", type: "", isText: true })
        colsWater.push({ name: "wterFVF", label: "Water FVF (rb/stb)", field: "", align: "left", type: "", isText: true })
        colsWater.push({ name: "waterViscosity", label: "Water Viscosity (cp)", field: "", align: "left", type: "", isText: true })

        const colsGas = []
        colsGas.push({ name: "sn", label: "SN", field: "", align: "left", type: "" })
        colsGas.push({ name: "pressure", label: "Pressure (psia)", field: "", align: "left", type: "", isText: true })
        colsGas.push({ name: "gasFVF", label: "Gas FVF (rb/scf)", field: "", align: "left", type: "", isText: true })
        colsGas.push({ name: "gasViscosity", label: "Gas Viscosity (cp)", field: "", align: "left", type: "", isText: true })
        
        
        for(let j = 0; j < 20; j++){
            context.oilPVTArray.push({
                sn: j+1,
                pressure: "",
                solutionGOR: "",
                oilFVF: "",
                oilViscosity: "",
            })
            context.waterPVTArray.push({
                sn: j+1,
                pressure: "",
                wterFVF: "",
                waterViscosity: "",
            })
            context.gasPVTArray.push({
                sn: j+1,
                pressure: "",
                gasFVF: "",
                gasViscosity: "",
            })
        }

        context.arrayOilPVTProfileForm.tables.push({
            title: "",
            columns: [...colsOil],
            rows: [...context.oilPVTArray],
            separator: "cell",
        })
        
        context.arrayWaterPVTProfileForm.tables.push({
            title: "",
            columns: [...colsWater],
            rows: [...context.waterPVTArray],
            separator: "cell",
        })

        context.arrayGasPVTProfileForm.tables.push({
            title: "",
            columns: [...colsGas],
            rows: [...context.gasPVTArray],
            separator: "cell",
        })

       /*  context.typeOfPVTProfileForm.qSelects[0].value = 0
        context.selectTypeOfPVTProfile({value: 0})
        context.typeOfPVTProfileForm.qSelects[1].value = 0
        context.selectTypeOfFluidAction({value: 0}) */

        switch(pvt.typeOfPVT){
            case "Constant":
                context.isConstant = true;
                context.typeOfPVTProfileForm.qSelects[0].value = 0
                context.typeOfPVTProfileForm.qSelects[1].visible = false
                context.selectTypeOfPVTProfile({value: 0})
                context.constantPVTForm.qInputs[0].name = pvt.oil.pressure.toString()
                context.constantPVTForm.qInputs[1].name = pvt.oil.fVF.toString()
                context.constantPVTForm.qInputs[2].name = pvt.oil.viscosity.toString()
                context.constantPVTForm.qInputs[3].name = pvt.oil.solutionGOR.toString()
                context.constantPVTForm.qInputs[4].name = pvt.water.fVF.toString()
                context.constantPVTForm.qInputs[5].name = pvt.water.viscosity.toString()
                context.constantPVTForm.qInputs[6].name = pvt.gas.fVF.toString()
                context.constantPVTForm.qInputs[7].name = pvt.gas.viscosity.toString()
                break;
            case "Array":
                context.isArray = true;
                context.typeOfPVTProfileForm.qSelects[0].value = 1
                context.typeOfPVTProfileForm.qSelects[1].visible = true
                context.selectTypeOfPVTProfile({value: 1})
                context.isOilArray = true;
                context.typeOfPVTProfileForm.qSelects[1].value = 0
                context.selectTypeOfFluidAction({value: 0})
                break;
        }

    }
}
</script>