<template>
    <div class="q-pa-md">
        <Form
        :formData="typeOfPorosityDistributionForm"
        :isFormTitle="isTypeOfPorosityDistributionFormTitle"
        @selectTypeOfPorosityDistribution="selectTypeOfPorosityDistribution($event)"/>
        <Form
        v-if="isConstant"
        :formData="constantPorosityForm"
        @ApplyConstantPorosity="ApplyConstantPorosity($event)"/>
        <Form
        v-if="isArray"
        :formData="arrayPorosityDistributionForm"
        @ApplyPorosityDistributionForm="ApplyPorosityDistributionForm($event)"/>
    </div>
</template>

<script>

import Form from "../../../../components/Forms/Form.vue";
import { typeOfPorosityDistributionForm, constantPorosityForm,
arrayPorosityDistributionForm } from "./porosityVM"

export default {
    components:{
        Form
    },
    data(){
        return {
            isConstant: true,
            isArray: false,
            isTypeOfPorosityDistributionFormTitle: false,
            selectedPorositing: {},
            typeOfPorosityDistributionForm: typeOfPorosityDistributionForm,
            constantPorosityForm: constantPorosityForm,
            arrayPorosityDistributionForm: arrayPorosityDistributionForm,
            porosityArray: [],
        }
    },
    methods:{
        Cancel(){
            this.$router.push('/olasim')
        },
        ApplyConstantPorosity(){
            var context = this;
            const payload = {
               typeOfPorositing: context.selectedPorositing.type,
               porosity: Number(context.constantPorosityForm.qInputs[0].name),
            }

            this.$store.commit("simulationStore/setConstantPorositing", payload);
            //this.$router.push("/olasim")

        },
        ApplyPorosityDistributionForm(){
            var context = this;
            const payload = {
               typeOfPorositing: context.selectedPorositing.type,
               porosity2D: [...context.arrayPorosityDistributionForm.tables[0].rows],
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setArrayPorositing", payload);
            //this.$router.push("/olasim")
        },
        selectTypeOfPorosityDistribution(payload){
            var context = this
            context.selectedPorositing = context.typeOfPorosityDistributionForm.qSelects[0].list[payload.value];
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
        context.constantPorosityForm.clearQInputs();
        context.typeOfPorosityDistributionForm.qSelects[0].value = 0
        context.selectTypeOfPorosityDistribution({value: 0})
        const geometry = this.$store.getters["simulationStore/geometry"]
        const rock = this.$store.getters["simulationStore/rock"]
        const nx = geometry.dimensions.nx
        const ny = geometry.dimensions.ny

        context.arrayPorosityDistributionForm.tables = []
        context.porosityArray = []
        const cols = []
        cols.push({ name: "ij", label: "(i,j)", field: "", align: "left", type: "", width: "10px" })
        for(let j = 0; j < ny; j++){
            cols.push({
                name: `${j+1}`, label: `${j+1}`, field: "", align: "left", type: ""
            })
        }
        console.log("cols: ", cols)
        for(let j = 0; j < nx; j++){
            const row = {}
            row["ij"] = j+1
            for(let i = 0; i < ny; i++){
                row[`${i+1}`] = ""
            }
            context.porosityArray.push({...row})
        }
        console.log("context.porosityArray: ", context.porosityArray)

        context.arrayPorosityDistributionForm.tables.push({
            title: "",
            columns: [...cols],
            rows: [...context.porosityArray],
            separator: "cell",
        })

        switch(rock.porosity.typeOfPorositing){
            case "Constant":
                context.isConstant = true;
                context.typeOfPorosityDistributionForm.qSelects[0].value = 0
                context.selectTypeOfPorosityDistribution({value: 0})
                context.constantPorosityForm.qInputs[0].name = rock.porosity.porosity.toString()
                break;
            case "Array":
                context.isArray = true;
                context.typeOfPorosityDistributionForm.qSelects[0].value = 1
                context.selectTypeOfPorosityDistribution({value: 1})
                context.arrayPorosityDistributionForm.tables[0].rows = rock.porosity.porosity2D.map((row) => {
                    return {...row}
                })
                break;
        }

    }
}
</script>