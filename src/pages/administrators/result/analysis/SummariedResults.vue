<template>
    <div class="q-pa-sm">
        <div class="row q-pa-sm">
            <q-expansion-item
            class="col-12"
            v-model="isExpanded"
            label="Configure and Compute Results"
            dense
            dense-toggle
            expand-separator>
            <Form
            :formData="form"
            @Close="Close($event)"
            @Compute="Compute($event)"
            @typeOfInstructor="typeOfInstructor($event)"/>
            </q-expansion-item>
        </div>

        <div class="row q-pa-sm">
            <Table
            :table_VM="tableVM"
            :isResponsive="isResponsive"/>
        </div>
    </div>
</template>

<script>

import MessageBox from "../../../../components/dialogs/MessageBox";
import Form from "../../../../components/Forms/Form.vue";
import { post } from "../../../../store/modules/services";
import { loadUsersByCategory } from "../../user/utils"

export default {
    components:{
        MessageBox,
        Form
    },
    data(){
        return {
            isResponsive: true,
            isExpanded: false,
            form: { 
                title: "Summarized Result",
                qSelects: [
                    { label: "Class Room", value: "", type: "text", list: [], actionName: "classRoom" },
                    { label: "Student", value: "", type: "text", list: [], actionName: "student" },
                    { label: "Type of Instructor", value: "", type: "text", list: [], actionName: "typeOfInstructor" },
                    { label: "Instructor Full Name", value: "", type: "text", list: [], actionName: "instructor" },
                ],
                qInputs: [],
                qBtns: [
                    {label: "Close", name: "Close"},
                    {label: "Compute", name: "Compute"},
                ],
                qDates: [
                     {label: "Start Date", name: "2019/02/01"},
                     {label: "End Date", name: "2019/02/01"},
                ],
                GroupedCheckBox: { 
                    isGroupedCheckBox: true, 
                    isExpanded: true, 
                    list:[], 
                    group: [],
                    label: "Subjects",
                },
            },
            tableVM: {
                selectedResult: {},
                title: "Results",
                columns: [
                    { name: "actions", label: "Action", field: "", align: "left" },
                    { name: "studentFullName", label: "Full Name", field: "", align: "left" },
                    { name: "score", label: "Score", field: "", align: "left" },
                    { name: "scoreMax", label: "Maximum Score", field: "", align: "left" },
                    { name: "subjectFullName", label: "Subject", field: "", align: "left" },
                    { name: "teacherFullName", label: "Teacher", field: "", align: "left" },
                    { name: "classRoomFullName", label: "Class", field: "", align: "left" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createResult",
                updateItem: "updateResult",
                deleteItem: "deleteResult",
                createItemUrl: "/create-result",
                updateItemUrl: "/update-result",
                },
        }
    },
    methods:{
        Close(){
            var context = this;
            context.isExpanded = false;
        },
        async Compute(){
            var context = this;
            
            var url = `result/summarizedresult`;
            const payload = {
                url,
                req: {
                    startDate: context.form.qDates[0].name,
                    endDate: context.form.qDates[1].name,
                    subjectIds: context.form.GroupedCheckBox.group,
                    teacherId: context.form.qSelects[3].value,
                    studentId: context.form.qSelects[1].value,
                    classroomId: context.form.qSelects[0].value,
                }
            }

            console.log("payload: ", payload)
            var response = await post(payload)

            const { 
                data : {
                    message,
                    success,
                }
            } = response
            if(success){
                
            }
        },
        async typeOfInstructor(payload){
            var context = this;
            const teachers = await loadUsersByCategory(payload.value);
            this.$store.commit('userStore/SetTeachers', teachers.result);
            context.form.qSelects[3].list = teachers.result.map((row) => {
                return {
                    ...row,
                    type: `${row.firstName} ${row.lastName}`
                }
            })
            
            if(context.form.qSelects[3].list.length > 0){
                context.form.qSelects[3].value = context.form.qSelects[3].list[0].id;
            }
        },
        async loadConfigData(){
            var context =  this;
            context.form.qSelects[0].list = this.$store.getters["classRoomStore/classRooms"];
            if(context.form.qSelects[0].list.length > 0){
                context.form.qSelects[0].value = context.form.qSelects[0].list[0].id;
            }
 
            context.form.qSelects[1].list = this.$store.getters["studentStore/students"].map((row) => {
                return {
                    ...row,
                    type: `${row.firstName} ${row.lastName}`
                }
            })
            if(context.form.qSelects[1].list.length > 0){
                context.form.qSelects[1].value = context.form.qSelects[1].list[0].id;
            }

            context.form.qSelects[2].list = this.$store.getters["staffStore/staffs"];
            if(context.form.qSelects[2].list.length > 0){
                await context.typeOfInstructor({
                    value: context.form.qSelects[2].list[0].id,
                })
            }

            context.form.GroupedCheckBox.list = this.$store.getters["subjectStore/subjects"].map((row) => {
                return {
                    ...row,
                    label: row.type, 
                    value: row.id,
                }
            })

            console.log("subjects: ", context.form.GroupedCheckBox.list);
        }
    },
    async created(){
        var context = this;
        await context.loadConfigData();
    }
}
</script>