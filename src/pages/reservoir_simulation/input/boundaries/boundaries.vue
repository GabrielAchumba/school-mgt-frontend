<template>
    <div class="q-pa-md">
        <Form
        :formData="typeOfBoundariesDistributionForm"
        :isFormTitle="isTypeOfBoundariesDistributionFormTitle"
        @selectTypeOfBoundariesDistribution="selectTypeOfBoundariesDistribution($event)"
        @selectTypeOfDirectionAction="selectTypeOfDirectionAction($event)"/>
        <Form
        v-if="isConstant"
        :formData="constantBoundariesForm"
        @ApplyConstantBoundaries="ApplyConstantBoundaries($event)"/>
        <div 
        v-if="isArray"
        class="col-12">
         <Form
        v-if="isWestArray"
        :formData="arrayWestBoundaryDistributionForm"
        @ApplyWestBoundaries="ApplyWestBoundaries($event)"
        @OpenWestBoundaryCondition="OpenWestBoundaryCondition($event)"/>
         <Form
        v-if="isEastArray"
        :formData="arrayEastBoundaryDistributionForm"
        @ApplyEastBoundaries="ApplyEastBoundaries($event)"
        @OpenEastBoundaryCondition="OpenEastBoundaryCondition($event)"/>
        <Form
        v-if="isSouthArray"
        :formData="arraySouthBoundaryDistributionForm"
        @ApplySouthBoundaries="ApplySouthBoundaries($event)"
        @OpenSouthBoundaryCondition="OpenSouthBoundaryCondition($event)"/>
        <Form
        v-if="isNorthArray"
        :formData="arrayNorthBoundaryDistributionForm"
        @ApplyNorthBoundaries="ApplyNorthBoundaries($event)"
        @OpenNorthBoundaryCondition="OpenNorthBoundaryCondition($event)"/>
        <Form
        v-if="isTopArray"
        :formData="arrayTopBoundaryDistributionForm"
        @ApplyTopBoundaries="ApplyTopBoundaries($event)"
        @OpenTopBoundaryCondition="OpenTopBoundaryCondition($event)"/>
        <Form
        v-if="isBottomArray"
        :formData="arrayBottomBoundaryDistributionForm"
        @ApplyBottomBoundaries="ApplyBottomBoundaries($event)"
        @OpenBottomBoundaryCondition="OpenBottomBoundaryCondition($event)"/>
        </div>

        <q-dialog 
            v-model="dialog.isVisible">
            <Form
            v-if="isWestArray"
            :formData="dialog.form"
            @selectBoundaryCondition="selectWestBoundaryCondition($event)"
            @CloseWestBoundaryCondition="CloseWestBoundaryCondition($event)"/>

            <Form
            v-if="isEastArray"
            :formData="dialog.form"
            @selectBoundaryCondition="selectEastBoundaryCondition($event)"
            @CloseEastBoundaryCondition="CloseEastBoundaryCondition($event)"/>

            <Form
            v-if="isSouthArray"
            :formData="dialog.form"
            @selectBoundaryCondition="selectSouthBoundaryCondition($event)"
            @CloseSouthBoundaryCondition="CloseSouthBoundaryCondition($event)"/>

            <Form
            v-if="isNorthArray"
            :formData="dialog.form"
            @selectBoundaryCondition="selectNorthBoundaryCondition($event)"
            @CloseNorthBoundaryCondition="CloseNorthBoundaryCondition($event)"/>

            <Form
            v-if="isTopArray"
            :formData="dialog.form"
            @selectBoundaryCondition="selectTopBoundaryCondition($event)"
            @CloseTopBoundaryCondition="CloseTopBoundaryCondition($event)"/>

            <Form
            v-if="isBottomArray"
            :formData="dialog.form"
            @selectBoundaryCondition="selectBottomBoundaryCondition($event)"
            @CloseBottomBoundaryCondition="CloseBottomBoundaryCondition($event)"/>
        </q-dialog>
    </div>
</template>

<script>

import Form from "../../../../components/Forms/Form.vue";
import { constantBoundariesForm, arrayWestBoundaryDistributionForm, arrayEastBoundaryDistributionForm,
    arraySouthBoundaryDistributionForm, arrayNorthBoundaryDistributionForm,
    arrayTopBoundaryDistributionForm, arrayBottomBoundaryDistributionForm,
    typeOfBoundariesDistributionForm } from "./boundariesVM"

export default {
    components:{
        Form
    },
    data(){
        return {
            isConstant: true,
            isArray: false,
            isWestArray: false,
            isEastArray: false,
            isSouthArray: false,
            isNorthArray: false,
            isTopArray: false,
            isBottomArray: false,
            isTypeOfBoundariesDistributionFormTitle: false,
            selectedBoundaries: {},
            selectedDirection: {},
            typeOfBoundariesDistributionForm: typeOfBoundariesDistributionForm,
            constantBoundariesForm: constantBoundariesForm,
            arrayWestBoundaryDistributionForm: arrayWestBoundaryDistributionForm,
            arrayEastBoundaryDistributionForm: arrayEastBoundaryDistributionForm,
            arraySouthBoundaryDistributionForm: arraySouthBoundaryDistributionForm,
            arrayNorthBoundaryDistributionForm: arrayNorthBoundaryDistributionForm,
            arrayTopBoundaryDistributionForm: arrayTopBoundaryDistributionForm,
            arrayBottomBoundaryDistributionForm: arrayBottomBoundaryDistributionForm,
            westArray: [],
            eastArray: [],
            southArray: [],
            northArray: [],
            topArray: [],
            bottomArray: [],
            dialog: {
                title: "",
                isVisible: false,
                form: {
                    title: "Boundary Condition",
                    isFormTitle: true,
                    qSelects: [
                        {
                            label: "Boundary Condition",
                            visible: true,
                            value: "",
                            actionName: "selectBoundaryCondition",
                            list: [
                                {
                                    id: 0,
                                    type: "Closed",
                                    value: "Closed",
                                },
                                {
                                    id: 1,
                                    type: "Constant Pressure",
                                    value: "Constant Pressure",
                                },
                                {
                                    id: 2,
                                    type: "Constant Gradient",
                                    value: "Constant Gradient",
                                },
                            ]
                        },
                    ],
                    qInputs: [
                        { label: "Boundary Value", name: "", type: "text",
                        Template: {
                            sn: 0,
                            iconName: "",
                            visible: false,
                        }},
                    ],
                    qBtns: [
                        {label: "Close", name: "CloseBoundaryCondition", icon: "close"},
                    ],
                }
            },
            row: 0,
            col: 0,
            selectedBC: {},
        }
    },
    methods:{
        CloseWestBoundaryCondition(){
            var context = this;
            switch(context.selectedBC.value){
                case 0:
                    context.arrayWestBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].boundaryCondition =
                    "Closed"
                    context.arrayWestBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].value =
                    0
                    break;
                case 1:
                    context.arrayWestBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].boundaryCondition =
                    "Constant Pressure"
                    context.arrayWestBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].value =
                    Number(context.dialog.form.qInputs[0].name)
                    break;
                case 2:
                    context.arrayWestBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].boundaryCondition =
                    "Constant Gradient"
                    context.arrayWestBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].value =
                    Number(context.dialog.form.qInputs[0].name)
                    break;
            }
            context.dialog.isVisible = false;
        },
        CloseEastBoundaryCondition(){
            var context = this;
            switch(context.selectedBC.value){
                case 0:
                    context.arrayEastBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].boundaryCondition =
                    "Closed"
                    context.arrayEastBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].value =
                    0
                    break;
                case 1:
                    context.arrayEastBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].boundaryCondition =
                    "Constant Pressure"
                    context.arrayEastBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].value =
                    Number(context.dialog.form.qInputs[0].name)
                    break;
                case 2:
                    context.arrayEastBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].boundaryCondition =
                    "Constant Gradient"
                    context.arrayEastBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].value =
                    Number(context.dialog.form.qInputs[0].name)
                    break;
            }
            context.dialog.isVisible = false;
        },
        CloseSouthBoundaryCondition(){
            var context = this;
            switch(context.selectedBC.value){
                case 0:
                    context.arraySouthBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].boundaryCondition =
                    "Closed"
                    context.arraySouthBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].value =
                    0
                    break;
                case 1:
                    context.arraySouthBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].boundaryCondition =
                    "Constant Pressure"
                    context.arraySouthBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].value =
                    Number(context.dialog.form.qInputs[0].name)
                    break;
                case 2:
                    context.arraySouthBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].boundaryCondition =
                    "Constant Gradient"
                    context.arraySouthBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].value =
                    Number(context.dialog.form.qInputs[0].name)
                    break;
            }
            context.dialog.isVisible = false;
        },
        CloseNorthBoundaryCondition(){
            var context = this;
            switch(context.selectedBC.value){
                case 0:
                    context.arrayNorthBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].boundaryCondition =
                    "Closed"
                    context.arrayNorthBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].value =
                    0
                    break;
                case 1:
                    context.arrayNorthBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].boundaryCondition =
                    "Constant Pressure"
                    context.arrayNorthBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].value =
                    Number(context.dialog.form.qInputs[0].name)
                    break;
                case 2:
                    context.arrayNorthBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].boundaryCondition =
                    "Constant Gradient"
                    context.arrayNorthBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].value =
                    Number(context.dialog.form.qInputs[0].name)
                    break;
            }
            context.dialog.isVisible = false;
        },
        CloseTopBoundaryCondition(){
            var context = this;
            switch(context.selectedBC.value){
                case 0:
                    context.arrayTopBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].boundaryCondition =
                    "Closed"
                    context.arrayTopBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].value =
                    0
                    break;
                case 1:
                    context.arrayTopBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].boundaryCondition =
                    "Constant Pressure"
                    context.arrayTopBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].value =
                    Number(context.dialog.form.qInputs[0].name)
                    break;
                case 2:
                    context.arrayTopBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].boundaryCondition =
                    "Constant Gradient"
                    context.arrayTopBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].value =
                    Number(context.dialog.form.qInputs[0].name)
                    break;
            }
            context.dialog.isVisible = false;
        },
        CloseBottomBoundaryCondition(){
            var context = this;
            switch(context.selectedBC.value){
                case 0:
                    context.arrayBottomBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].boundaryCondition =
                    "Closed"
                    context.arrayBottomBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].value =
                    0
                    break;
                case 1:
                    context.arrayBottomBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].boundaryCondition =
                    "Constant Pressure"
                    context.arrayBottomBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].value =
                    Number(context.dialog.form.qInputs[0].name)
                    break;
                case 2:
                    context.arrayBottomBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].boundaryCondition =
                    "Constant Gradient"
                    context.arrayBottomBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].value =
                    Number(context.dialog.form.qInputs[0].name)
                    break;
            }
            context.dialog.isVisible = false;
        },
        getRowColIndices(txt){
            var context = this
            const txt1 = txt.replace(/\s/g, '');
            const arr1 = txt1.split("(")
            const arr2 = arr1[1].split(")")
            const arr3 = arr2[0].split(",")
            context.row = Number(arr3[0])
            context.col = Number(arr3[1])
            
        },
        OpenWestBoundaryCondition(payload){
            var context = this;
            context.dialog.form.title = `(j, k) = ${payload.cellPosition}`
            context.dialog.form.qSelects[0].value = 0
            context.dialog.form.qSelects[0].actionName = "selectWestBoundaryCondition"
            context.dialog.form.qInputs[0].name = 0
            context.dialog.form.qBtns[0].name = "CloseWestBoundaryCondition"
            context.getRowColIndices(payload.cellPosition)
            context.dialog.isVisible = true;
        },
        OpenEastBoundaryCondition(payload){
            var context = this;
            context.dialog.form.title = `(j, k) = ${payload.cellPosition}`
            context.dialog.form.qSelects[0].value = 0
            context.dialog.form.qSelects[0].actionName = "selectEastBoundaryCondition"
            context.dialog.form.qInputs[0].name = 0
            context.dialog.form.qBtns[0].name = "CloseEastBoundaryCondition"
            context.getRowColIndices(payload.cellPosition)
            context.dialog.isVisible = true;
        },
        OpenSouthBoundaryCondition(payload){
            var context = this;
            context.dialog.form.title = `(i, k) = ${payload.cellPosition}`
            context.dialog.form.qSelects[0].value = 0
            context.dialog.form.qSelects[0].actionName = "selectSouthBoundaryCondition"
            context.dialog.form.qInputs[0].name = 0
            context.dialog.form.qBtns[0].name = "CloseSouthBoundaryCondition"
            context.getRowColIndices(payload.cellPosition)
            context.dialog.isVisible = true;
        },
        OpenNorthBoundaryCondition(payload){
            var context = this;
            context.dialog.form.title = `(i, k) = ${payload.cellPosition}`
            context.dialog.form.qSelects[0].value = 0
            context.dialog.form.qSelects[0].actionName = "selectNorthBoundaryCondition"
            context.dialog.form.qInputs[0].name = 0
            context.dialog.form.qBtns[0].name = "CloseNorthBoundaryCondition"
            context.getRowColIndices(payload.cellPosition)
            context.dialog.isVisible = true;
        },
        OpenTopBoundaryCondition(payload){
            var context = this;
            context.dialog.form.title = `(i, j) = ${payload.cellPosition}`
            context.dialog.form.qSelects[0].value = 0
            context.dialog.form.qSelects[0].actionName = "selectTopBoundaryCondition"
            context.dialog.form.qInputs[0].name = 0
            context.dialog.form.qBtns[0].name = "CloseTopBoundaryCondition"
            context.getRowColIndices(payload.cellPosition)
            context.dialog.isVisible = true;
        },
        OpenBottomBoundaryCondition(payload){
            var context = this;
            context.dialog.form.title = `(i, j) = ${payload.cellPosition}`
            context.dialog.form.qSelects[0].value = 0
            context.dialog.form.qSelects[0].actionName = "selectBottomBoundaryCondition"
            context.dialog.form.qInputs[0].name = 0
            context.dialog.form.qBtns[0].name = "CloseBottomBoundaryCondition"
            context.getRowColIndices(payload.cellPosition)
            context.dialog.isVisible = true;
        },
        selectWestBoundaryCondition(payload){
            var context = this
            context.selectedBC = {...payload}
            switch(payload.value){
                case 0:
                    context.arrayWestBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].background =
                    "q-ma-sm bg-black text-primary"
                    break;
                case 1:
                    context.arrayWestBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].background =
                    "q-ma-sm bg-red text-primary"
                    break;
                case 2:
                    context.arrayWestBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].background =
                    "q-ma-sm bg-blue text-primary"
                    break;
            }

        },
        selectEastBoundaryCondition(payload){
            var context = this
            context.selectedBC = {...payload}
            switch(payload.value){
                case 0:
                    context.arrayEastBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].background =
                    "q-ma-sm bg-black text-primary"
                    break;
                case 1:
                    context.arrayEastBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].background =
                    "q-ma-sm bg-red text-primary"
                    break;
                case 2:
                    context.arrayEastBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].background =
                    "q-ma-sm bg-blue text-primary"
                    break;
            }

        },
        selectSouthBoundaryCondition(payload){
            var context = this
            context.selectedBC = {...payload}
            switch(payload.value){
                case 0:
                    context.arraySouthBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].background =
                    "q-ma-sm bg-black text-primary"
                    break;
                case 1:
                    context.arraySouthBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].background =
                    "q-ma-sm bg-red text-primary"
                    break;
                case 2:
                    context.arraySouthBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].background =
                    "q-ma-sm bg-blue text-primary"
                    break;
            }

        },
        selectNorthBoundaryCondition(payload){
            var context = this
            context.selectedBC = {...payload}
            switch(payload.value){
                case 0:
                    context.arrayNorthBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].background =
                    "q-ma-sm bg-black text-primary"
                    break;
                case 1:
                    context.arrayNorthBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].background =
                    "q-ma-sm bg-red text-primary"
                    break;
                case 2:
                    context.arrayNorthBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].background =
                    "q-ma-sm bg-blue text-primary"
                    break;
            }

        },
        selectTopBoundaryCondition(payload){
            var context = this
            context.selectedBC = {...payload}
            switch(payload.value){
                case 0:
                    context.arrayTopBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].background =
                    "q-ma-sm bg-black text-primary"
                    break;
                case 1:
                    context.arrayTopBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].background =
                    "q-ma-sm bg-red text-primary"
                    break;
                case 2:
                    context.arrayTopBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].background =
                    "q-ma-sm bg-blue text-primary"
                    break;
            }

        },
        selectBottomBoundaryCondition(payload){
            var context = this
            context.selectedBC = {...payload}
            switch(payload.value){
                case 0:
                    context.arrayBottomBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].background =
                    "q-ma-sm bg-black text-primary"
                    break;
                case 1:
                    context.arrayBottomBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].background =
                    "q-ma-sm bg-red text-primary"
                    break;
                case 2:
                    context.arrayBottomBoundaryDistributionForm.tables[0].rows2[context.row-1][`${context.col}`].background =
                    "q-ma-sm bg-blue text-primary"
                    break;
            }

        },
        Cancel(){
            this.$router.push('/olasim')
        },
        ApplyConstantBoundaries(){
            var context = this;
            const payload = {
               typeOfBoundaries: context.selectedBoundaries.type,
               west: { boundaryondition: "closed", value: Number(context.constantPermeabilityForm.qInputs[0].name)},
               east: { boundaryondition: "closed", value: Number(context.constantPermeabilityForm.qInputs[0].name)},
               south: { boundaryondition: "closed", value: Number(context.constantPermeabilityForm.qInputs[0].name)},
               north: { boundaryondition: "closed", value: Number(context.constantPermeabilityForm.qInputs[0].name)},
               top: { boundaryondition: "closed", value: Number(context.constantPermeabilityForm.qInputs[0].name)},
               bottom: { boundaryondition: "closed", value: Number(context.constantPermeabilityForm.qInputs[0].name)},
            }

            this.$store.commit("simulationStore/setConstantBoundaries", payload);
            //this.$router.push("/olasim")

        },
        ApplyWestBoundaries(){
            var context = this;
            const payload = {
               typeOfBoundaries: context.selectedBoundaries.type,
               westArray: [...context.arrayWestBoundaryDistributionForm.tables[0].rows],
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setWestBoundaries", payload);
            //this.$router.push("/olasim")
        },
        ApplyEastBoundaries(){
            var context = this;
            const payload = {
               typeOfBoundaries: context.selectedBoundaries.type,
               eastArray: [...context.arrayEastBoundaryDistributionForm.tables[0].rows],
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setEastBoundaries", payload);
            //this.$router.push("/olasim")
        },
        ApplySouthBoundaries(){
            var context = this;
            const payload = {
               typeOfBoundaries: context.selectedBoundaries.type,
               southArray: [...context.arraySouthBoundaryDistributionForm.tables[0].rows],
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setSouthBoundaries", payload);
            //this.$router.push("/olasim")
        },
        ApplyNorthBoundaries(){
            var context = this;
            const payload = {
               typeOfBoundaries: context.selectedBoundaries.type,
               northArray: [...context.arrayNorthBoundaryDistributionForm.tables[0].rows],
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setNorthBoundaries", payload);
            //this.$router.push("/olasim")
        },
        ApplyTopBoundaries(){
            var context = this;
            const payload = {
               typeOfBoundaries: context.selectedBoundaries.type,
               topArray: [...context.arrayTopBoundaryDistributionForm.tables[0].rows],
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setTopBoundaries", payload);
            //this.$router.push("/olasim")
        },
        ApplyBottomBoundaries(){
            var context = this;
            const payload = {
               typeOfBoundaries: context.selectedBoundaries.type,
               bottomArray: [...context.arrayBottomBoundaryDistributionForm.tables[0].rows],
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setBottomBoundaries", payload);
            //this.$router.push("/olasim")
        },
        selectTypeOfBoundariesDistribution(payload){
            var context = this
            context.selectedBoundaries = context.typeOfBoundariesDistributionForm.qSelects[0].list[payload.value];
            context.isConstant = false;
            context.isArray = false;
            switch(payload.value){
                case 0:
                    context.isConstant = true;
                    context.typeOfBoundariesDistributionForm.qSelects[1].visible = false
                    break;
                case 1:
                    context.isArray = true;
                    context.typeOfBoundariesDistributionForm.qSelects[1].visible = true
                    break;
            }
        },
        selectTypeOfDirectionAction(payload){
            var context = this
            context.selectedDirection = context.typeOfBoundariesDistributionForm.qSelects[1].list[payload.value];
            const boundaries = this.$store.getters["simulationStore/boundaries"]
            context.isWestArray = false;
            context.isEastArray = false;
            context.isSouthArray = false;
            context.isNorthArray = false;
            context.isTopArray = false;
            context.isBottomArray = false;

            switch(payload.value){
                case 0:
                    context.isWestArray = true;
                    if(boundaries.westArray.length > 0){
                        context.arrayWestBoundaryDistributionForm.tables[0].rows = boundaries.westArray.map((row) => {
                            return {...row}
                        })
                    }
                    break;
                case 1:
                    context.isEastArray = true;
                    if(boundaries.eastArray.length > 0){
                        context.arrayEastBoundaryDistributionForm.tables[0].rows = boundaries.eastArray.map((row) => {
                            return {...row}
                        })
                    }
                    break;
                case 2:
                    context.isSouthArray = true;
                    if(boundaries.southArray.length > 0){
                        context.arraySouthBoundaryDistributionForm.tables[0].rows = boundaries.southArray.map((row) => {
                            return {...row}
                        })
                    }
                    break;
                case 3:
                    context.isNorthArray = true;
                    if(boundaries.northArray.length > 0){
                        context.arrayNorthBoundaryDistributionForm.tables[0].rows = boundaries.northArray.map((row) => {
                            return {...row}
                        })
                    }
                    break;
                case 4:
                    context.isTopArray = true;
                    if(boundaries.topArray.length > 0){
                        context.arrayTopBoundaryDistributionForm.tables[0].rows = boundaries.topArray.map((row) => {
                            return {...row}
                        })
                    }
                    break;
                case 5:
                    context.isBottomArray = true;
                    if(boundaries.bottomArray.length > 0){
                        context.arrayBottomBoundaryDistributionForm.tables[0].rows = boundaries.bottomArray.map((row) => {
                            return {...row}
                        })
                    }
                    break;
            }
        }
    },
    created(){
        var context = this;
        context.constantBoundariesForm.clearQInputs();
        const geometry = this.$store.getters["simulationStore/geometry"]
        const boundaries = this.$store.getters["simulationStore/boundaries"]
        const nx = geometry.dimensions.nx
        const ny = geometry.dimensions.ny
        const nz = geometry.dimensions.nz

        context.arrayWestBoundaryDistributionForm.tables = []
        context.arrayEastBoundaryDistributionForm.tables = []
        context.arraySouthBoundaryDistributionForm.tables = []
        context.arrayNorthBoundaryDistributionForm.tables = []
        context.arrayTopBoundaryDistributionForm.tables = []
        context.arrayBottomBoundaryDistributionForm.tables = []
        context.westArray = []
        context.eastArray = []
        context.southArray = []
        context.northArray = []
        context.topArray = []
        context.bottomArray = []
        const westActual = []
        const eastActual = []
        const southActual = []
        const northActual = []
        const topActual = []
        const bottomActual = []
        let i = 0;
        let j = 0;
        let k = 0;

        //==============West BC ================================//
        const colsWest = []
        colsWest.push({ name: "jk", label: "(j,k)", field: "", align: "left", type: "", width: "10px" })
        for(k = 0; k < nz; k++){
            colsWest.push({
                name: `${k+1}`, label: `${k+1}`, field: "", align: "left", type: "", isButton: true,
                actionName: "OpenWestBoundaryCondition"
            })
        }
        for(j = 0; j < ny; j++){
            const row = {}
            const row2 = {}
            row["jk"] = j+1
            for(k = 0; k < nz; k++){
                row[`${k+1}`] = `(${j+1} , ${k+1})`
                row2[`${k+1}`] = {boundaryCondition: "closed", value: 0, background: "q-ma-sm bg-black text-primary"}
            }
            context.westArray.push({...row})
            westActual.push({...row2})
            
        }

        context.arrayWestBoundaryDistributionForm.tables.push({
            title: "",
            columns: [...colsWest],
            rows: [...context.westArray],
            separator: "cell",
            rows2: [...westActual],
        })
    
    //==============East BC ================================//
        const colsEast = []
        colsEast.push({ name: "jk", label: "(j,k)", field: "", align: "left", type: "", width: "10px" })
        for(k = 0; k < nz; k++){
            colsEast.push({
                name: `${k+1}`, label: `${k+1}`, field: "", align: "left", type: "", isButton: true,
                actionName: "OpenEastBoundaryCondition"
            })
        }
        for(j = 0; j < ny; j++){
            const row = {}
            const row2 = {}
            row["jk"] = j+1
            for(k = 0; k < nz; k++){
                row[`${k+1}`] = `(${j+1} , ${k+1})`
                row2[`${k+1}`] = {boundaryCondition: "closed", value: 0, background: "q-ma-sm bg-black text-primary"}
            }
            context.eastArray.push({...row})
            eastActual.push({...row2})
        }

        context.arrayEastBoundaryDistributionForm.tables.push({
            title: "",
            columns: [...colsEast],
            rows: [...context.eastArray],
            separator: "cell",
            rows2: [...eastActual],
        })

        //==============South BC ================================//
        const colsSouth = []
        colsSouth.push({ name: "ik", label: "(i,k)", field: "", align: "left", type: "" })
        for(k = 0; k < nz; k++){
            colsSouth.push({
                name: `${k+1}`, label: `${k+1}`, field: "", align: "left", type: "", isButton: true,
                actionName: "OpenSouthBoundaryCondition"
            })
        }
        for(let i = 0; i < nx; i++){
            const row = {}
            const row2 = {}
            row["ik"] = i+1
            for(k = 0; k < nz; k++){
                row[`${k+1}`] = `(${i+1} , ${k+1})`
                row2[`${k+1}`] = {boundaryCondition: "closed", value: 0, background: "q-ma-sm bg-black text-primary"}
            }
            context.southArray.push({...row})
            southActual.push({...row2})
        }

        context.arraySouthBoundaryDistributionForm.tables.push({
            title: "",
            columns: [...colsSouth],
            rows: [...context.southArray],
            separator: "cell",
            rows2: [...southActual],
        })


    //==============North BC ================================//
        const colsNorth = []
        colsNorth.push({ name: "ik", label: "(i,k)", field: "", align: "left", type: "",
        actionName: "OpenNorthBoundaryCondition" })
        for(k = 0; k < nz; k++){
            colsNorth.push({
                name: `${k+1}`, label: `${k+1}`, field: "", align: "left", type: "", isButton: true
            })
        }
        for(i = 0; i < nx; i++){
            const row = {}
            const row2 = {}
            row["ik"] = i+1
            for(k = 0; k < nz; k++){
                row[`${k+1}`] = `(${i+1} , ${k+1})`
                row2[`${k+1}`] = {boundaryCondition: "closed", value: 0, background: "q-ma-sm bg-black text-primary"}
            }
            context.northArray.push({...row})
            northActual.push({...row2})
        }

        context.arrayNorthBoundaryDistributionForm.tables.push({
            title: "",
            columns: [...colsNorth],
            rows: [...context.northArray],
            separator: "cell",
            rows2: [...northActual],
        })


        //==============Top BC ================================//
        const colsTop = []
        colsTop.push({ name: "ij", label: "(i,j)", field: "", align: "left", type: "" })
        for(j = 0; j < ny; j++){
            colsTop.push({
                name: `${j+1}`, label: `${j+1}`, field: "", align: "left", type: "", isButton: true,
                actionName: "OpenTopBoundaryCondition"
            })
        }
        for(i = 0; i < nx; i++){
            const row = {}
            const row2 = {}
            row["ij"] = i+1
            for(j = 0; j < ny; j++){
                row[`${j+1}`] = `(${i+1} , ${j+1})`
                row2[`${j+1}`] = {boundaryCondition: "closed", value: 0, background: "q-ma-sm bg-black text-primary"}
            }
            context.topArray.push({...row})
            topActual.push({...row2})
        }

        context.arrayTopBoundaryDistributionForm.tables.push({
            title: "",
            columns: [...colsTop],
            rows: [...context.topArray],
            separator: "cell",
            rows2: [...topActual],
        })


        //==============Bottom BC ================================//
        const colsBottom = []
        colsBottom.push({ name: "ij", label: "(i,j)", field: "", align: "left", type: "" })
        for(j = 0; j < ny; j++){
            colsBottom.push({
                name: `${j+1}`, label: `${j+1}`, field: "", align: "left", type: "", isButton: true,
                actionName: "OpenBottomBoundaryCondition"
            })
        }
        for(i = 0; i < nx; i++){
            const row = {}
            const row2 = {}
            row["ij"] = i+1
            for(j = 0; j < ny; j++){
                row[`${j+1}`] = `(${i+1} , ${j+1})`
                row2[`${j+1}`] = {boundaryCondition: "closed", value: 0, background: "q-ma-sm bg-black text-primary"}
            }
            context.bottomArray.push({...row})
            bottomActual.push({...row2})
        }

        context.arrayBottomBoundaryDistributionForm.tables.push({
            title: "",
            columns: [...colsBottom],
            rows: [...context.bottomArray],
            separator: "cell",
            rows2: [...bottomActual],
        })



        /* context.typeOfBoundariesDistributionForm.qSelects[0].value = 0
        context.selectTypeOfBoundariesDistribution({value: 0})
        context.typeOfBoundariesDistributionForm.qSelects[1].value = 0
        context.selectTypeOfDirectionAction({value: 0}) */

        switch(boundaries.typeOfBoundaries){
            case "Constant":
                context.isConstant = true;
                context.typeOfBoundariesDistributionForm.qSelects[0].value = 0
                context.typeOfBoundariesDistributionForm.qSelects[1].visible = false
                context.selectTypeOfBoundariesDistribution({value: 0})
                context.constantBoundariesForm.qInputs[0].name = boundaries.west.value.toString()
                context.constantBoundariesForm.qInputs[1].name = boundaries.east.value.toString()
                context.constantBoundariesForm.qInputs[2].name = boundaries.south.value.toString()
                context.constantBoundariesForm.qInputs[3].name = boundaries.north.value.toString()
                context.constantBoundariesForm.qInputs[4].name = boundaries.top.value.toString()
                context.constantBoundariesForm.qInputs[5].name = boundaries.bottom.value.toString()
                break;
            case "Array":
                context.isArray = true;
                context.typeOfBoundariesDistributionForm.qSelects[0].value = 1
                context.typeOfBoundariesDistributionForm.qSelects[1].visible = true
                context.selectTypeOfBoundariesDistribution({value: 1})
                context.isWestArray = true;
                context.typeOfBoundariesDistributionForm.qSelects[1].value = 0
                context.selectTypeOfDirectionAction({value: 0})
                break;
        }

    }
}
</script>