<template>
    <div class="q-pa-md">
        <Form
        :formData="typeOfPermeabilityDistributionForm"
        :isFormTitle="isTypeOfPermeabilityDistributionFormTitle"
        @selectTypeOfPermeabilityDistribution="selectTypeOfPermeabilityDistribution($event)"
        @selectTypeOfDirectionAction="selectTypeOfDirectionAction($event)"/>
        <Form
        v-if="isConstant"
        :formData="constantPermeabilityForm"
        @ApplyConstantPermeability="ApplyConstantPermeability($event)"/>
        <div 
        v-if="isArray"
        class="col-12">
         <Form
        v-if="isXArray"
        :formData="arrayXPermeabilityDistributionForm"
        @ApplyXPermeabilityDistributionForm="ApplyXPermeabilityDistributionForm($event)"/>
         <Form
        v-if="isYArray"
        :formData="arrayYPermeabilityDistributionForm"
        @ApplyYPermeabilityDistributionForm="ApplyYPermeabilityDistributionForm($event)"/>
         <Form
        v-if="isZArray"
        :formData="arrayZPermeabilityDistributionForm"
        @ApplyZPermeabilityDistributionForm="ApplyZPermeabilityDistributionForm($event)"/>
        </div>
    </div>
</template>

<script>

import Form from "../../../../components/Forms/Form.vue";
import { typeOfPermeabilityDistributionForm, constantPermeabilityForm, arrayXPermeabilityDistributionForm,
    arrayYPermeabilityDistributionForm, arrayZPermeabilityDistributionForm } from "./permeabilityVM"

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
            isTypeOfPermeabilityDistributionFormTitle: false,
            selectedPermeabiliting: {},
            selectedDirection: {},
            typeOfPermeabilityDistributionForm: typeOfPermeabilityDistributionForm,
            constantPermeabilityForm: constantPermeabilityForm,
            arrayXPermeabilityDistributionForm: arrayXPermeabilityDistributionForm,
            arrayYPermeabilityDistributionForm: arrayYPermeabilityDistributionForm,
            arrayZPermeabilityDistributionForm: arrayZPermeabilityDistributionForm,
            permeabilityXArray: [],
            permeabilityYArray: [],
            permeabilityZArray: [],
        }
    },
    methods:{
        Cancel(){
            this.$router.push('/olasim')
        },
        ApplyConstantPermeability(){
            var context = this;
            const payload = {
               typeOfPermeability: context.selectedPermeabiliting.type,
               permeabilityX: Number(context.constantPermeabilityForm.qInputs[0].name),
               permeabilityY: Number(context.constantPermeabilityForm.qInputs[1].name),
               permeabilityZ: Number(context.constantPermeabilityForm.qInputs[2].name),
            }

            this.$store.commit("simulationStore/setConstantPermeability", payload);
            //this.$router.push("/olasim")

        },
        ApplyXPermeabilityDistributionForm(){
            var context = this;
            const payload = {
               typeOfPermeability: context.selectedPermeabiliting.type,
               permeabilityXArray: [...context.arrayXPermeabilityDistributionForm.tables[0].rows],
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setXArrayPermeability", payload);
            //this.$router.push("/olasim")
        },
        ApplyYPermeabilityDistributionForm(){
            var context = this;
            const payload = {
               typeOfPermeability: context.selectedPermeabiliting.type,
               permeabilityYArray: [...context.arrayYPermeabilityDistributionForm.tables[0].rows],
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setYArrayPermeability", payload);
            //this.$router.push("/olasim")
        },
        ApplyZPermeabilityDistributionForm(){
            var context = this;
            const payload = {
               typeOfPermeability: context.selectedPermeabiliting.type,
               permeabilityZArray: [...context.arrayZPermeabilityDistributionForm.tables[0].rows],
            }

            console.log("payload: ", payload)
            this.$store.commit("simulationStore/setZArrayPermeability", payload);
            //this.$router.push("/olasim")
        },
        selectTypeOfPermeabilityDistribution(payload){
            var context = this
            context.selectedPermeabiliting = context.typeOfPermeabilityDistributionForm.qSelects[0].list[payload.value];
            context.isConstant = false;
            context.isArray = false;
            switch(payload.value){
                case 0:
                    context.isConstant = true;
                    context.typeOfPermeabilityDistributionForm.qSelects[1].visible = false
                    break;
                case 1:
                    context.isArray = true;
                    context.typeOfPermeabilityDistributionForm.qSelects[1].visible = true
                    break;
            }
        },
        selectTypeOfDirectionAction(payload){
            var context = this
            context.selectedDirection = context.typeOfPermeabilityDistributionForm.qSelects[1].list[payload.value];
            const rock = this.$store.getters["simulationStore/rock"]
            context.isXArray = false;
            context.isYArray = false;
            context.isZArray = false;
            console.log("rock.permeability.permeabilityXArray: ", rock.permeability.permeabilityXArray)
            switch(payload.value){
                case 0:
                    context.isXArray = true;
                    if(rock.permeability.permeabilityXArray.length > 0){
                        context.arrayXPermeabilityDistributionForm.tables[0].rows = rock.permeability.permeabilityXArray.map((row) => {
                            return {...row}
                        })
                    }
                    break;
                case 1:
                    context.isYArray = true;
                    if(rock.permeability.permeabilityYArray.length > 0){
                        context.arrayYPermeabilityDistributionForm.tables[0].rows = rock.permeability.permeabilityYArray.map((row) => {
                            return {...row}
                        })
                    }
                    break;
                case 2:
                    context.isZArray = true;
                    if(rock.permeability.permeabilityZArray.length > 0){
                        context.arrayZPermeabilityDistributionForm.tables[0].rows = rock.permeability.permeabilityZArray.map((row) => {
                            return {...row}
                        })
                    }
                    break;
            }
        }
    },
    created(){
        var context = this;
        context.constantPermeabilityForm.clearQInputs();
        const geometry = this.$store.getters["simulationStore/geometry"]
        const rock = this.$store.getters["simulationStore/rock"]
        const nx = geometry.dimensions.nx
        const ny = geometry.dimensions.ny

        context.arrayXPermeabilityDistributionForm.tables = []
        context.arrayYPermeabilityDistributionForm.tables = []
        context.arrayZPermeabilityDistributionForm.tables = []
        context.permeabilityXArray = []
        context.permeabilityYArray = []
        context.permeabilityZArray = []
        const cols = []
        cols.push({ name: "ji", label: "(j,i)", field: "", align: "left", type: "" })
        for(let i = 0; i < nx; i++){
            cols.push({
                name: `${i+1}`, label: `${i+1}`, field: "", align: "left", type: "", isText: true
            })
        }
        for(let j = 0; j < ny; j++){
            const row = {}
            row["ji"] = j+1
            for(let i = 0; i < nx; i++){
                row[`${i+1}`] = ""
            }
            context.permeabilityXArray.push({...row})
            context.permeabilityYArray.push({...row})
            context.permeabilityZArray.push({...row})
        }

        context.arrayXPermeabilityDistributionForm.tables.push({
            title: "",
            columns: [...cols],
            rows: [...context.permeabilityXArray],
            separator: "cell",
        })
        
        context.arrayYPermeabilityDistributionForm.tables.push({
            title: "",
            columns: [...cols],
            rows: [...context.permeabilityYArray],
            separator: "cell",
        })

        context.arrayZPermeabilityDistributionForm.tables.push({
            title: "",
            columns: [...cols],
            rows: [...context.permeabilityZArray],
            separator: "cell",
        })


/*         context.typeOfPermeabilityDistributionForm.qSelects[0].value = 0
        context.selectTypeOfPermeabilityDistribution({value: 0})
        context.typeOfPermeabilityDistributionForm.qSelects[1].value = 0
        context.selectTypeOfDirectionAction({value: 0}) */

        console.log("rock.permeability.typeOfPermeability: ", rock.permeability.typeOfPermeability)
        switch(rock.permeability.typeOfPermeability){
            case "Constant":
                context.isConstant = true;
                context.typeOfPermeabilityDistributionForm.qSelects[0].value = 0
                context.typeOfPermeabilityDistributionForm.qSelects[1].visible = false
                context.selectTypeOfPermeabilityDistribution({value: 0})
                context.constantPermeabilityForm.qInputs[0].name = rock.permeability.permeabilityX.toString()
                context.constantPermeabilityForm.qInputs[1].name = rock.permeability.permeabilityY.toString()
                context.constantPermeabilityForm.qInputs[2].name = rock.permeability.permeabilityZ.toString()
                break;
            case "Array":
                context.isArray = true;
                context.typeOfPermeabilityDistributionForm.qSelects[0].value = 1
                context.typeOfPermeabilityDistributionForm.qSelects[1].visible = true
                context.selectTypeOfPermeabilityDistribution({value: 1})
                context.isXArray = true;
                context.typeOfPermeabilityDistributionForm.qSelects[1].value = 0
                context.selectTypeOfDirectionAction({value: 0})
                break;
        }

    }
}
</script>