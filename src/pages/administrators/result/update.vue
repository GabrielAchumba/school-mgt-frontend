<template>
    <div class="q-pa-md">
        <Form
        :formData="form"
        @Update="Update($event)"
        @Cancel="Cancel($event)"
        @deleteResult="deleteResult($event)"
        @typeOfInstructor="typeOfInstructor($event)"/>

        <q-dialog 
            v-for="dialog in dialogs" 
            :key="dialog.title"
            v-model="dialog.isVisible">
            <MessageBox
            :title="dialog.title"
            :message="dialog.message"
            :okayEvent="dialog.okayEvent"
            :cancelEvent="dialog.cancelEvent"
            @cancelDialog="cancelDialog($event)"
            @okDialog="okDialog($event)"
            >
            </MessageBox>
        </q-dialog>
    </div>
</template>

<script>

import MessageBox from "../../../components/dialogs/MessageBox.vue";
import Form from "../../../components/Forms/Form.vue";
import { put, remove } from "../../../store/modules/services";
import { loadUsersByCategory } from "../user/utils";

export default {
    components:{
        MessageBox,
        Form
    },
    data(){
        return {
            selectedResult: {},
            form: {
                title: "Update Result",
                qSelects: [
                    { label: "Class Room", value: "", type: "text", list: [], actionName: "classRoom", visible: true },
                    { label: "Subject", value: "", type: "text", list: [], actionName: "subject", visible: true },
                    { label: "Student", value: "", type: "text", list: [], actionName: "student", visible: true },
                    { label: "Type of Instructor", value: "", type: "text", list: [], actionName: "typeOfInstructor", visible: true },
                    { label: "Instructor Full Name", value: "", type: "text", list: [], actionName: "instructor", visible: true },
                    { label: "Type of Assessment", value: "", type: "text", list: [], actionName: "instructor", visible: true },
                ],
                qInputs: [
                    { label: "Score", name: "", type: "text"},
                    { label: "Maximum Score", name: "", type: "text"}
                ],
                qBtns: [
                    {label: "Cancel", name: "Cancel"},
                    {label: "Delete", name: "deleteResult"},
                    {label: "Update", name: "Update"},
                ],
                qDates: [
                    {label: "Updated At", name: "2019/02/01"},
                ],
                GroupedCheckBoxes: [],
            },
            dialogs:[
                { title: "Update Result", isVisible: false, message: "Do you want to update a Result",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Update Success", isVisible: false, message: "Result updated successfully!",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Update Failure", isVisible: false, message: "",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Delete Result", isVisible: false, message: "Do you want to delete a Result",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Delete Success", isVisible: false, message: "Result deleted successfully!",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Delete Failure", isVisible: false, message: "",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
            ]
        }
    },
    methods:{
        deleteResult(){
             var context = this
             context.dialogs[3].isVisible = true;
        },
        Update(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Update Result"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            this.$router.push('/results')
        },
        cancelDialog(payload){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async save(){
            var context = this;
             var user = this.$store.getters["authenticationStore/IdentityModel"]
            
            var url = `result/${context.selectedResult.id}`;
            const payload = {
                url,
                req: {
                    score: Number(context.form.qInputs[0].name),
                    scoreMax: Number(context.form.qInputs[1].name),
                    classRoomId: context.form.qSelects[0].value,
                    subjectId: context.form.qSelects[1].value,
                    studentId: context.form.qSelects[2].value,
                    designationId: context.form.qSelects[3].value,
                    teacherId: context.form.qSelects[4].value,
                    assessmentId: context.form.qSelects[5].value,
                    updatedAt: context.form.qDates[0].name,
                    schoolId: user.schoolId,
                }
            }

            console.log("payload: ", payload)
            var response = await put(payload)

            const { 
                data : {
                    message,
                    success,
                }
            } = response
            if(success){
                context.dialogs[1].isVisible = true;
            }else{
                context.dialogs[2].message = message;
                context.dialogs[2].isVisible = true;
            }

        },

        async delete(){
            var context = this;
            
            var url = `result/${context.selectedResult.id}`;
            const payload = {
                url,
            }

            console.log("payload: ", payload)
            var response = await remove(payload)

            const { 
                data : {
                    message,
                    success,
                }
            } = response
            if(success){
                context.dialogs[4].isVisible = true;
            }else{
                context.dialogs[5].message = message;
                context.dialogs[5].isVisible = true;
            }

        },
        async okDialog(payload){
            console.log("payload: ", payload)
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                         case "Delete Result":
                            await context.delete();
                            break;
                        case "Update Result":
                            await context.save();
                            break;
                        case "Update Success":
                            this.$router.push("/results");
                            break;
                        case "Delete Success":
                            this.$router.push("/results");
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async typeOfInstructor(payload){
            var context = this;
             var user = this.$store.getters["authenticationStore/IdentityModel"]
            const teachers = await loadUsersByCategory(payload.value, user.schoolId);
            this.$store.commit('userStore/SetTeachers', teachers.result);
            context.form.qSelects[4].list = teachers.result.map((row) => {
                return {
                    ...row,
                    type: `${row.firstName} ${row.lastName}`
                }
            }) 
        },
        async loadSelectedResult(){
            var context =  this;
            context.selectedResult = this.$store.getters["resultStore/selectedResult"];
            console.log("context.selectedResult: ", context.selectedResult);
            context.form.qSelects[0].list = this.$store.getters["classRoomStore/classRooms"];
            context.form.qSelects[1].list = this.$store.getters["subjectStore/subjects"];
            context.form.qSelects[2].list = this.$store.getters["studentStore/students"].map((row) => {
                return {
                    ...row,
                    type: `${row.firstName} ${row.lastName}`
                }
            })
            context.form.qSelects[3].list = this.$store.getters["staffStore/staffs"];
            await context.typeOfInstructor({
                value: context.selectedResult.designationId,
            })
            context.form.qSelects[5].list = this.$store.getters["assessmentStore/assessments"];

            context.form.qInputs[0].name = context.selectedResult.score;
            context.form.qInputs[1].name = context.selectedResult.scoreMax;

            context.form.qSelects[0].value = context.selectedResult.classRoomId;
            context.form.qSelects[1].value = context.selectedResult.subjectId;
            context.form.qSelects[2].value = context.selectedResult.studentId;
            context.form.qSelects[3].value = context.selectedResult.designationId;
            context.form.qSelects[4].value = context.selectedResult.teacherId;
            context.form.qSelects[5].value = context.selectedResult.assessmentId;

            const dateObj = new Date(context.selectedResult.createdAt);
            var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
            var date = ('0' + dateObj.getDate()).slice(-2);
            var year = dateObj.getFullYear();
            context.form.qDates[0].name = year + '/' + month + '/' + date;
        }
    },
    async created(){
        var context =  this;
        await context.loadSelectedResult();
    }
}
</script>