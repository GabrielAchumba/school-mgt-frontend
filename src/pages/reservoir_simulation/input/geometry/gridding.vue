<template>
    <div class="q-pa-md">
        <Form
        :formData="typeOfGriddingForm"
        :isFormTitle="isTypeOfGriddingFormTitle"
        @selectTypeOfGriddingAction="selectTypeOfGriddingAction($event)"
        @selectTypeOfDimensionAction="selectTypeOfDimensionAction($event)"/>
        <Form
        v-if="isConstant"
        :formData="constGriddingForm"
        @ApplyConstGriddingForm="ApplyConstGriddingForm($event)"/>
        <div 
        v-if="isArray"
        class="col-12">
        <Form
        v-if="isXArray"
        :formData="rangeXGriddingForm"
        @ApplyXGriddingByArrayForm="ApplyXGriddingByArrayForm($event)"/>
        <Form
        v-if="isYArray"
        :formData="rangeYGriddingForm"
        @ApplyYGriddingByArrayForm="ApplyYGriddingByArrayForm($event)"/>
        <Form
        v-if="isZArray"
        :formData="rangeZGriddingForm"
        @ApplyZGriddingByArrayForm="ApplyZGriddingByArrayForm($event)"/>
        </div>
    </div>
</template>

<script>

import Form from "../../../../components/Forms/Form.vue";
import { constGriddingForm, typeOfGriddingForm, rangeXGriddingForm, 
rangeYGriddingForm, rangeZGriddingForm } from "./griddingVM"

export default {
    components:{
        Form
    },
    data(){
        return {
            isConstant: true,
            isArray: false,
            isXArray: false,
            isYArray: false,
            isZArray: false,
            isTypeOfGriddingFormTitle: false,
            selectedGridding: {},
            selectedDimenioning: {},
            constGriddingForm: constGriddingForm,
            typeOfGriddingForm: typeOfGriddingForm,
            rangeXGriddingForm: rangeXGriddingForm,
            rangeYGriddingForm: rangeYGriddingForm,
            rangeZGriddingForm: rangeZGriddingForm,
            dxArray: [],
            dyArray: [],
            dzArray: []
        }
    },
    methods:{
        Cancel(){
            this.$router.push('/olasim')
        },
        ApplyConstGriddingForm(){
            var context = this;
            const payload = {
               typeOfGridding: context.selectedGridding.type,
               dx: Number(context.constGriddingForm.qInputs[0].name),
               dy: Number(context.constGriddingForm.qInputs[1].name),
               dz: Number(context.constGriddingForm.qInputs[2].name),
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setConstantGridding", payload);
            //this.$router.push("/olasim")

        },
        ApplyXGriddingByArrayForm(){
            var context = this;
            const payload = {
               typeOfGridding: context.selectedGridding.type,
               dxVector: context.rangeXGriddingForm.tables[0].rows.map((row) => {
                   return Number(row.dx)
               }),
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setXGridding", payload);
            //this.$router.push("/olasim")
        },
        ApplyYGriddingByArrayForm(){
            var context = this;
            const payload = {
               typeOfGridding: context.selectedGridding.type,
               dyVector: context.rangeYGriddingForm.tables[0].rows.map((row) => {
                   return Number(row.dy)
               }),
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setYGridding", payload);
            //this.$router.push("/olasim")
        },
        ApplyZGriddingByArrayForm(){
            var context = this;
            const payload = {
               typeOfGridding: context.selectedGridding.type,
               dzVector: context.rangeZGriddingForm.tables[0].rows.map((row) => {
                   return Number(row.dz)
               }),
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setZGridding", payload);
            //this.$router.push("/olasim")
        },
        selectTypeOfGriddingAction(payload){
            var context = this
            context.selectedGridding = context.typeOfGriddingForm.qSelects[0].list[payload.value];
            context.isConstant = false;
            context.isArray = false;
            context.typeOfGriddingForm.qSelects[1].visible = false
            switch(payload.value){
                case 0:
                    context.isConstant = true;
                    break;
                case 1:
                    context.isArray = true;
                    context.typeOfGriddingForm.qSelects[1].visible = context.isArray
                    break;
            }
        },
        selectTypeOfDimensionAction(payload){
            var context = this
            context.selectedDimenioning = context.typeOfGriddingForm.qSelects[1].list[payload.value];
            context.isXArray = false;
            context.isYArray = false;
            context.isZArray = false;
            switch(payload.value){
                case 0:
                    context.isXArray = true;
                    break;
                case 1:
                    context.isYArray = true;
                    break;
                case 2:
                    context.isZArray = true;
                    break;
            }
        }
    },
    created(){
        var context = this;
        context.constGriddingForm.clearQInputs();
        context.typeOfGriddingForm.qSelects[0].value = 0
        context.typeOfGriddingForm.qSelects[1].value = 0
        context.selectTypeOfGriddingAction({value: 0})
        const geometry = this.$store.getters["simulationStore/geometry"]
        console.log("geometry: ", geometry)
        const nx = geometry.dimensions.nx
        const ny = geometry.dimensions.ny
        const nz = geometry.dimensions.nz

        context.rangeXGriddingForm.tables = []
        for(let i = 0; i < nx; i++){
            context.dxArray.push({
                sn: i+1,
                dx: ""
            })
        }

        context.rangeYGriddingForm.tables = []
        for(let i = 0; i < ny; i++){
            context.dyArray.push({
                sn: i+1,
                dy: ""
            })
        }

        context.rangeZGriddingForm.tables = []
        for(let i = 0; i < nz; i++){
            context.dzArray.push({
                sn: i+1,
                dz: ""
            })
        }

        context.rangeXGriddingForm.tables.push({
            title: "",
            columns: [
                { name: "sn", label: "SN", field: "", align: "left", type: "" },
                { name: "dx", label: "Dx (ft)", field: "", align: "left", type: "text", isText: true },
            ],
            rows: [...context.dxArray],
            separator: "cell",
        })

        context.rangeYGriddingForm.tables.push({
            title: "",
            columns: [
                { name: "sn", label: "SN", field: "", align: "left", type: "" },
                { name: "dy", label: "Dy (ft)", field: "", align: "left", type: "text", isText: true },
            ],
            rows: [...context.dyArray],
            separator: "cell",
        })

        context.rangeZGriddingForm.tables.push({
            title: "",
            columns: [
                { name: "sn", label: "SN", field: "", align: "left", type: "" },
                { name: "dz", label: "Dz (ft)", field: "", align: "left", type: "text", isText: true },
            ],
            rows: [...context.dzArray],
            separator: "cell",
        })


        switch(geometry.gridding.typeOfGridding){
            case "Constant":
                context.isConstant = true;
                context.typeOfGriddingForm.qSelects[0].value = 0
                context.selectTypeOfGriddingAction({value: 0})
                context.constGriddingForm.qInputs[0].name = geometry.gridding.dx.toString()
                context.constGriddingForm.qInputs[1].name = geometry.gridding.dy.toString()
                context.constGriddingForm.qInputs[2].name = geometry.gridding.dz.toString()
                break;
            case "Array":
                context.isArray = true;
                context.typeOfGriddingForm.qSelects[0].value = 1
                context.typeOfGriddingForm.qSelects[1].value = 0
                context.selectTypeOfGriddingAction({value: 1})
                context.isXArray = true;
                for(let i = 0; i < geometry.gridding.dxVector.length; i++){
                    context.rangeXGriddingForm.tables[0].rows[i].dx = geometry.gridding.dxVector[i].toString()
                }
                for(let i = 0; i < geometry.gridding.dyVector.length; i++){
                    context.rangeYGriddingForm.tables[0].rows[i].dy = geometry.gridding.dyVector[i].toString()
                }
                for(let i = 0; i < geometry.gridding.dzVector.length; i++){
                    context.rangeZGriddingForm.tables[0].rows[i].dz = geometry.gridding.dzVector[i].toString()
                }
                break;
        }

    }
}
</script>