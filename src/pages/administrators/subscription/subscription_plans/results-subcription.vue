<template>
    <div class="q-pa-sm">
        <span>
            <div class="row no-wrap">
                <p class="q-ma-sm text-left">Results</p>
                <q-space/>
                <q-icon
                    v-if="isMobile"
                    class="q-pa-sm text-accent"
                    :name="qBtn.icon"
                    @click="showStudentsDialog"
                    size="30px">
                        <q-tooltip>
                        {{ qBtn.label }}
                        </q-tooltip>
                    </q-icon>
                <q-btn class="q-ma-sm bg-accent text-primary"
                    v-else
                    :label="qBtn.label"
                    type="button"
                    size="md"
                    :icon="qBtn.icon"
                    no-caps
                    @click="showStudentsDialog"
                    />
            </div>
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

            <q-dialog 
                v-model="dialog.isVisible">
                <Form
                style="width:400px;"
                :formData="studentsForm"
                @closeStudentsDialog="closeStudentsDialog($event)"/>
        </q-dialog>
    </div>
</template>

<script>
import { qSelect, qBtn, dialog, studentsForm } from "./view_models/results-subcription";
import Form from "../../../../components/Forms/Form.vue";
export default {
    components:{
        Form,
    },
    props:{
        isUpdate: {
            type: Boolean,
            default: false,
        }
    },
    data(){
        return {
            qSelect: qSelect,
            qBtn: qBtn,
            dialog: dialog,
            studentsForm: studentsForm,
            isMobile: false,
        }
    },
    methods:{
        showStudentsDialog(){
            var context =  this;
            context.dialog.isVisible = true;
            console.log("context.dialog.isVisible: ", context.dialog.isVisible)
        },
        closeStudentsDialog(){
            var context =  this;
            context.dialog.isVisible = false;
            context.onStudentsSelected();
        },
        onQSelectItemValueChanged(){
            var context =  this;
            console.log("qSelect: ", context.qSelect)
            let selectedItem = context.qSelect.list.find(o => o.value === context.qSelect.value.value);
            this.$emit("onResultScriptionValueChange", {
                qSelect: selectedItem,
            })
        },
        onStudentsSelected(){
            var context = this;
            this.$emit("onStudentsSelected", {
                studentsForm: context.studentsForm,
            })
        },
        initializeData(){
            var context = this;
            context.studentsForm.GroupedCheckBoxes[0].list = this.$store.getters["studentStore/students"].map((row) => {
                return {
                    ...row,
                    label: `${row.firstName} ${row.lastName}`, 
                    value: row.id,
                }
            })

            context.studentsForm.GroupedCheckBoxes[0].group = this.$store.getters["studentStore/students"].map((row) => {
                return row.id
            })

            context.onStudentsSelected();
        },
        onResize(e) {
            const width = window.innerWidth;
            var context = this;
            if(width < 700) context.isMobile = true;
            else context.isMobile = false;
        },
    },
    created(){
        var context = this;
        window.addEventListener("resize", this.onResize);
        context.initializeData();
        console.log("isUpdate: ", context.isUpdate);
    },
    destroyed() {
        window.removeEventListener("resize", this.onResize);
    },
}
</script>