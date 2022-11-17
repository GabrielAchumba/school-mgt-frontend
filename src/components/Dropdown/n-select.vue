<template>
    <div class="row">
        <div
            class="col-12 q-pa-sm">
            <q-select
            class="q-ma-none"
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
            @input="onQSelectItemValueChanged(qSelect)"
            >
            </q-select>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        qSelect: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    methods:{
        onQSelectItemValueChanged(qSelect){
            this.$emit("onQSelectItemValueChanged", qSelect);
        },
    }
}
</script>

<style lang="scss" scoped>

    input[type="file"] {
    display: none;
    }
    .custom-file-upload {
        border: 1px solid #ccc;
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
    }
    
</style>
