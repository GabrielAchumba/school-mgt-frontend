<template>
    <div>
        <Form
        :formData="wellsForm"
        :isFormTitle="isWellsFormTitle"
        @qListAddItemAction="addWell($event)"
        @closeWellDialog="closeWellDialog($event)"
        @createWell="createWell($event)"
        @applyWells="applyWells($event)"
        @editWell="editWell($event)"
        @deleteWell="deleteWell($event)"/>

        <q-dialog 
            v-model="dialog.isVisible">
            <Form
            :formData="dialog.form"
            @selectI="selectI($event)"
            @selectJ="selectJ($event)"
            @selectK="selectK($event)"
            @closeWellDialog="closeWellDialog($event)"
            @createWell="createWell($event)"
            @wellType="wellType($event)"
            @wellControl="wellControl($event)"/>
        </q-dialog>

        <q-dialog 
            v-model="perforationIntervalDialog.isVisible">
            <Form
            :formData="perforationIntervalDialog.form"
            @closePerforationIntervalDialog="closePerforationIntervalDialog($event)"
            @createPerforationInterval="createPerforationInterval($event)"/>
        </q-dialog>
    </div>
</template>

<script>
import Form from "../../../../components/Forms/Form.vue"
import { wellsForm } from "./wellsVM";

export default {
    components:{
        Form
    },
    data(){
        return {
            wellsForm: wellsForm,
            isWellsFormTitle: true,
            dialog: {
                title: "",
                isVisible: false,
                form: {
                    title: "Well",
                    isFormTitle: true,
                    qSelects: [
                        {
                            label: "I",
                            visible: true,
                            value: "",
                            actionName: "selectI",
                            list: []
                        },
                        {
                            label: "J",
                            visible: true,
                            value: "",
                            actionName: "selectJ",
                            list: []
                        },
                        {
                            label: "K",
                            visible: true,
                            value: "",
                            actionName: "selectK",
                            list: []
                        },
                        {
                            label: "Well Type",
                            visible: true,
                            value: "",
                            actionName: "wellType",
                            list: [
                                {
                                    id: "Gas Producer",
                                    type: "Gas Producer",
                                    value: "Gas Producer",
                                    name: "Gas Producer",
                                },
                                {
                                    id: "Oil Producer",
                                    type: "Oil Producer",
                                    value: "Oil Producer",
                                    name: "Oil Producer",
                                },
                                {
                                    id: "Gas Injector",
                                    type: "Gas Injector",
                                    value: "Gas Injector",
                                    name: "Gas Injector",
                                },
                                {
                                    id: "Water Injector",
                                    type: "Water Injector",
                                    value: "Water Injector",
                                    name: "Water Injector",
                                }
                            ]
                        },
                        {
                            label: "Well Control",
                            visible: true,
                            value: "",
                            actionName: "wellControl",
                            list: [
                                {
                                    id: "Constant Rate",
                                    type: "Constant Rate",
                                    value: "Constant Rate",
                                    name: "Constant Rate",
                                },
                                {
                                    id: "Constant BHP",
                                    type: "Constant BHP",
                                    value: "Constant BHP",
                                    name: "Constant BHP",
                                },
                            ]
                        },
                    ],
                    qInputs: [
                        { label: "Well Name", name: "", type: "text",
                        Template: {
                            sn: 0,
                            iconName: "",
                            visible: false,
                        }},
                        { label: "Flow Rate", name: "0", type: "text",
                        Template: {
                            sn: 0,
                            iconName: "",
                            visible: false,
                        }},
                        { label: "Sandface Pressure (psia)", name: "0", type: "text",
                        Template: {
                            sn: 0,
                            iconName: "",
                            visible: false,
                        }},
                        { label: "Wellbore Radius (psia)", name: "0", type: "text",
                        Template: {
                            sn: 0,
                            iconName: "",
                            visible: false,
                        }},
                    ],
                    qBtns: [
                        {label: "Close", name: "closeWellDialog", icon: "close"},
                        {label: "Add", name: "createWell", icon: "close"},
                    ],
                   /*  qLists: [
                        {
                            label: "Perforation Intervals",
                            isAddVisible: true,
                            items: [],
                            isMenuListVisible: true,
                            qBtns: [
                                { name: "editPerforationInterval", label: "Edit Perforation Interval" },
                                { name: "deletePerforationInterval", label: "Delete Perforation Interval" }
                            ]
                        }
                    ] */
                }
            },
            perforationIntervalDialog: {
                title: "",
                isVisible: false,
                form: {
                    title: "Well",
                    isFormTitle: true,
                    qInputs: [
                        { label: "Perforation Interval", name: "", type: "text",
                        Template: {
                            sn: 0,
                            iconName: "",
                            visible: false,
                        }},
                    ],
                    qBtns: [
                        {label: "Close", name: "closePerforationIntervalDialog", icon: "close"},
                        {label: "Add", name: "createPerforationInterval", icon: "add"},
                    ],
                }
            },
            selectedWell:{},
        }
    },
    methods:{
        addWell(payload){
            var context = this;
            context.dialog.form.qBtns[1].label = "Add"
            context.dialog.isVisible = true;
        },
        selectI(payload){
            console.log("payload: ", payload)
        },
        selectJ(payload){
            console.log("payload: ", payload)
        },
        selectK(payload){
            console.log("payload: ", payload)
        },
        wellType(payload){
            console.log("payload: ", payload)
        },
        wellControl(payload){
            console.log("payload: ", payload)
        },
        editWell(payload){
            var context = this;
            context.selectedWell = payload;
            console.log("payload: ", payload)
            context.dialog.form.qSelects[0].value = payload.i
            context.dialog.form.qSelects[1].value = payload.j
            context.dialog.form.qSelects[2].value = payload.k
            context.dialog.form.qSelects[3].value = payload.wellType
            context.dialog.form.qSelects[4].value = payload.wellCondition
            context.dialog.form.qInputs[0].name = payload.name
            context.dialog.form.qInputs[1].name = payload.rate.toString()
            context.dialog.form.qInputs[2].name = payload.bottomHolePressureDatumDepth.toString()
            context.dialog.form.qInputs[3].name = payload.wellBoreRadius.toString()
            context.dialog.form.qBtns[1].label = "Update"
            context.dialog.isVisible = true;
        },
        deleteWell(payload){
            var context = this;
            console.log("payload: ", payload)
            let index = 0;
            for (let i = 0; i < context.wellsForm.qLists[0].items.length; i++){
                if(context.wellsForm.qLists[0].items[i].wellID === payload.wellID){
                    index = i;
                    context.wellsForm.qLists[0].items.splice(i, 1)
                    break;
                }
            }
        },
        closeWellDialog(payload){
            var context = this;
            context.dialog.isVisible = false;
        },
        createWell(payload){
            console.log("payload: ", payload)
            var context = this;
            if(context.dialog.form.qBtns[1].label === "Add"){
                const wellID = Date.now().toString()
                context.wellsForm.qLists[0].items.push({
                    wellID: wellID,
                    letter: context.dialog.form.qInputs[0].name.charAt(0),
                    name: context.dialog.form.qInputs[0].name,
                    address: "",
                    i: context.dialog.form.qSelects[0].value,
                    j: context.dialog.form.qSelects[1].value,
                    k: context.dialog.form.qSelects[2].value,
                    wellType: context.dialog.form.qSelects[3].value,
                    wellCondition: context.dialog.form.qSelects[4].value,
                    rate: Number(context.dialog.form.qInputs[1].name),
                    bottomHolePressureDatumDepth: Number(context.dialog.form.qInputs[2].name),
                    wellBoreRadius: Number(context.dialog.form.qInputs[3].name),
                    perforationIntervals: [
                        { segmentLength: 0 }
                    ],
                })
            }else{
                for (let i = 0; i < context.wellsForm.qLists[0].items.length; i++){
                    if(context.wellsForm.qLists[0].items[i].wellID === context.selectedWell.wellID){
                        context.wellsForm.qLists[0].items[i].name = context.dialog.form.qInputs[0].name
                        context.wellsForm.qLists[0].items[i].rate = Number(context.dialog.form.qInputs[1].name)
                        context.wellsForm.qLists[0].items[i].bottomHolePressureDatumDepth = Number(context.dialog.form.qInputs[2].name)
                        context.wellsForm.qLists[0].items[i].wellBoreRadius = Number(context.dialog.form.qInputs[3].name)
                        context.wellsForm.qLists[0].items[i].i = context.dialog.form.qSelects[0].value
                        context.wellsForm.qLists[0].items[i].j = context.dialog.form.qSelects[1].value
                        context.wellsForm.qLists[0].items[i].k = context.dialog.form.qSelects[2].value
                        context.wellsForm.qLists[0].items[i].wellType = context.dialog.form.qSelects[3].value
                        context.wellsForm.qLists[0].items[i].wellCondition = context.dialog.form.qSelects[4].value
                        break;
                    }
                }
            }
            context.dialog.isVisible = false;
        },
        closePerforationIntervalDialog(payload){
            console.log("payload: ", payload)
        },
        createPerforationInterval(payload){
            console.log("payload: ", payload)
        },
        applyWells(){
            var context = this;
            const payload = {
               list: [...context.wellsForm.qLists[0].items],
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setWells", payload);
            //this.$router.push("/olasim")
        }
    },
    created(){
        var context = this;
        const geometry = this.$store.getters["simulationStore/geometry"]
        const wells = this.$store.getters["simulationStore/wells"]
        const nx = geometry.dimensions.nx
        const ny = geometry.dimensions.ny
        const nz = geometry.dimensions.nz
        let i = 0;
        for(i = 0; i < nx; i++){
            context.dialog.form.qSelects[0].list.push({
                id: i+1,
                type: i+1,
                value: i+1,
                name: i+1,
            })
        }

        for(i = 0; i < ny; i++){
            context.dialog.form.qSelects[1].list.push({
                id: i+1,
                type: i+1,
                value: i+1,
                name: i+1,
            })
        }

        for(i = 0; i < nz; i++){
            context.dialog.form.qSelects[2].list.push({
                id: i+1,
                type: i+1,
                value: i+1,
                name: i+1,
            })
        }

        context.wellsForm.qLists[0].items = wells.map((row) => {
            console.log("row: ", row)
            return { ...row}
        })
    }
}
</script>
