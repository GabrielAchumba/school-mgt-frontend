<template>
    <div class="q-pa-md">
        <Form
        :formData="form"
        @Update="Update($event)"
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
import { put } from "../../../store/modules/services";

export default {
    components:{
        MessageBox,
        Form
    },
    data(){
        return {
            selectedAssessment: {},
            form: {
                title: "Update Type of Assessment",
                qSelects: [],
                qInputs: [
                    { label: "Type of Assessment", name: "", type: "text"},
                    { label: "Overall Score (%)", name: "", type: "text"}
                ],
                qBtns: [
                    {label: "Cancel", name: "Cancel"},
                    {label: "Update", name: "Update"},
                ],
                qDates: [],
                GroupedCheckBoxes: [],
            },
            dialogs:[
                { title: "Update Assessment", isVisible: false, message: "Do you want to update an Assessment",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Assessment updated successfully!",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Failure", isVisible: false, message: "",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
            ]
        }
    },
    methods:{
        Update(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Update Assessment"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            this.$router.push('/assessment-landing')
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
            
            var url = `assessment/${context.selectedAssessment.id}`;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            const payload = {
                url,
                req: {
                    type: context.form.qInputs[0].name,
                    percentage: Number(context.form.qInputs[1].name),
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
        async okDialog(payload){
            console.log("payload: ", payload)
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Update Assessment":
                            await context.save();
                            break;
                        case "Success":
                            this.$router.push("/assessment-landing");
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        }
    },
    created(){
        var context =  this;
        context.selectedAssessment = this.$store.getters["assessmentStore/selectedAssessment"];
        context.form.qInputs[0].name = context.selectedAssessment.type;
        context.form.qInputs[1].name = context.selectedAssessment.percentage;
    }
}
</script>