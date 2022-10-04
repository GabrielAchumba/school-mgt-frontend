<template>
    <div class="q-pa-md">
        <Form
        :formData="form"
        @Create="Create($event)"
        @Cancel="Cancel($event)"/>

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
import { post } from "../../../store/modules/services";

export default {
    components:{
        MessageBox,
        Form
    },
    data(){
        return {
            form: {
                title: "Create Result",
                qSelects: [
                    { label: "Class Room", value: "", type: "text", list: [] },
                    { label: "Subject", value: "", type: "text", list: [] },
                    { label: "Student", value: "", type: "text", list: [] },
                    { label: "Teacher", value: "", type: "text", list: [] },
                ],
                qInputs: [
                    { label: "Score", name: "", type: "text"},
                    { label: "Maximum Score", name: "", type: "text"}
                ],
                qBtns: [
                    {label: "Cancel", name: "Cancel"},
                    {label: "Create", name: "Create"},
                ],
                qDates: [],
            },
            dialogs:[
                { title: "Create Result", isVisible: false, message: "Do you want to create a Result",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Result created successfully!",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Failure", isVisible: false, message: "",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
            ]
        }
    },
    methods:{
        Create(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Create Result"){
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
            
            var url = `result/create`;
            const payload = {
                url,
                req: {
                    score: Number(context.form.qInputs[0].name),
                    scoreMax: Number(context.form.qInputs[1].name),
                    classRoomId: context.form.qSelects[0].value,
                    subjectId: context.form.qSelects[1].value,
                    studentId: context.form.qSelects[2].value,
                    teacherId: context.form.qSelects[3].value,
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
                context.dialogs[1].isVisible = true;
            }else{
                context.dialogs[2].message = message;
                context.dialogs[2].isVisible = true;
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
                        case "Create Result":
                            await context.save();
                            break;
                        case "Success":
                            this.$router.push("/results");
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        }
    },
    created(){
        var context = this;
        context.form.qSelects[0].list = this.$store.getters["classRoomStore/classRooms"];
        context.form.qSelects[1].list = this.$store.getters["subjectStore/subjects"];
        context.form.qSelects[2].list = this.$store.getters["studentStore/students"].map((row) => {
            return {
                ...row,
                type: `${row.firstName} ${row.lastName}`
            }
        })
        context.form.qSelects[3].list = this.$store.getters["userStore/teachers"].map((row) => {
            return {
                ...row,
                type: `${row.firstName} ${row.lastName}`
            }
        }) 
    }
}
</script>