<template>
    <div class="q-pa-sm">
        <span>
            <p class="q-ma-sm text-left">{{ qSelect.label }}</p>
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
import { qSelectLevel } from "./view_models/selectors-view-model";
export default {
    props:{
        isUpdate: {
            type: Boolean,
            default: false,
        },
        qSelect:{
            type: Object,
            default: () => qSelectLevel,
        }
    },
    methods:{
        onQSelectItemValueChanged(){
            var context =  this;
            console.log("context.qSelect.list: ", context.qSelect.list)
            console.log("context.qSelect: ", context.qSelect)
            let selectedItem = context.qSelect.list.find(o => o.value === context.qSelect.value);
            this.$emit("onLevelValueChange", {
                qSelect: selectedItem,
            })
        },
    },
}
</script>