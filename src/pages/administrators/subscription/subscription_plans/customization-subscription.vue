<template>
    <div class="q-pa-sm">
        <span>
            <p class="q-ma-sm text-left">Customize App</p>
            <q-select
                class="col-7 q-ma-none"
                color="accent" 
                outlined label-color="accent"
                option-disable="inactive"
                v-model="qSelect.value"
                :options="qSelect.list"
                option-value="id"
                :option-label="'type'"
                name="type"
                emit-value
                map-options
                @input="onQSelectItemValueChanged"
                >
            </q-select>
        </span>
    </div>
</template>

<script>
import { qSelect } from "./view_models/customization-subscription";
export default {
    data(){
        return {
            qSelect: qSelect,
        }
    },
    methods:{
        onQSelectItemValueChanged(){
            var context =  this;
            let selectedItem = context.qSelect.list.find(o => o.value === context.qSelect.value.value);
            this.$emit("onCustomizationScriptionValueChange", {
                qSelect: selectedItem,
            })
        },
    },
}
</script>