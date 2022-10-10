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
                title: "Create Student",
                qSelects: [
                    { label: "Type of SubscriptionType *", value: "", type: "text", 
                     list: ["30 Days", "180 Days", "360 Days"], actionName: "subscriptionType" },
                ],
                qInputs: [
                    { label: "First Name *", name: "", type: "text"},
                    { label: "Last Name *", name: "", type: "text"},
                ],
                qBtns: [
                    {label: "Cancel", name: "Cancel"},
                    {label: "Create", name: "Create"},
                ],
                qDates: [
                     {label: "Date of Birth", name: "2019/02/01"},
                ],
                GroupedCheckBoxes: [],
            },
            dialogs:[
                { title: "Create Student", isVisible: false, message: "Do you want to create a Student",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Student created successfully!",
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
                if(dialog.title == "Create Student"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            this.$router.push('/student-landing')
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
            
            var url = `student/create`;
            const arr = context.form.qDates[0].name.split("/") 
            const payload = {
                url,
                req: {
                    firstName: context.form.qInputs[0].name,
                    lastName: context.form.qInputs[1].name,
                    birthYear: Number(arr[0]),
                    birthMonth: Number(arr[1]),
                    birthDay: Number(arr[1]),
                    subscriptionType: context.form.qSelects[0].value,
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
                        case "Create Student":
                            await context.save();
                            break;
                        case "Success":
                            this.$router.push("/student-landing");
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        }
    }
}
</script>