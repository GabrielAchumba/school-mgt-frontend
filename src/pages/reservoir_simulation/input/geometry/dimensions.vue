<template>
    <div class="q-pa-md">
        <Form
        :formData="form"
        @Apply="Apply($event)"/>
    </div>
</template>

<script>

import Form from "../../../../components/Forms/Form.vue";
import { form } from "./dimensionsVM"

export default {
    components:{
        Form
    },
    data(){
        return {
            form: form,
        }
    },
    methods:{
        Cancel(){
            this.$router.push('/olasim')
        },
        Apply(){
            var context = this;
            const payload = {
               nx: Number(context.form.qInputs[0].name),
               ny: Number(context.form.qInputs[1].name),
               nz: 1, //Number(context.form.qInputs[2].name),
            }

            this.$store.commit("simulationStore/setDimensions", payload);
            //this.$router.push("/olasim")

        },
    },
    created(){
        var context = this;
        context.form.clearQInputs();
        const geometry = this.$store.getters["simulationStore/geometry"]
        context.form.qInputs[0].name = geometry.dimensions.nx.toString()
        context.form.qInputs[1].name = geometry.dimensions.ny.toString()
        //context.form.qInputs[2].name = "1"; //geometry.dimensions.nz.toString()
    }
}
</script>