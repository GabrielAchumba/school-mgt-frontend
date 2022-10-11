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
            selectedStudent: {},
            form: {
                title: "Update Student",
                qSelects: [
                    { label: "Type of SubscriptionType *", value: "", type: "text", 
                     list: [{
                         value: 1,
                         type: "90 Days",
                         label: "90 Days",
                     }, 
                     {
                         value: 2,
                         type: "180 Days",
                         label: "180 Days",
                     }, 
                     {
                         value: 3,
                         type: "360 Days",
                         label: "360 Days"
                     }], actionName: "subscriptionType",
                     visible: true },
                ],
                qInputs: [
                    { label: "First Name", name: "", type: "text"},
                    { label: "Last Name", name: "", type: "text"},
                ],
                qBtns: [
                    {label: "Cancel", name: "Cancel"},
                    {label: "Update", name: "Update"},
                ],
                qDates: [
                    {label: "Date of Birth", name: "2019/02/01"},
                ],
                GroupedCheckBoxes: [],
            },
            dialogs:[
                { title: "Update Student", isVisible: false, message: "Do you want to update a Student",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Student updated successfully!",
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
                if(dialog.title == "Update Student"){
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
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            
            var url = `student/${context.selectedStudent.id}`;
            const arr = context.form.qDates[0].name.split("/") 
            const payload = {
                url,
                req: {
                    firstName: context.form.qInputs[0].name,
                    lastName: context.form.qInputs[1].name,
                    birthYear: Number(arr[0]),
                    birthMonth: Number(arr[1]),
                    birthDay: Number(arr[1]),
                    subscriptionType: context.form.qSelects[0].value.value,
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
                        case "Update Student":
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
    },
    created(){
        var context =  this;
        context.selectedStudent = this.$store.getters["studentStore/selectedStudent"];
        context.form.qInputs[0].firstName = context.selectedStudent.firstName;
        context.form.qInputs[1].lastName = context.selectedStudent.lastName;
        var birthDay = context.selectedStudent.birthDay > 9 ? toString(context.selectedStudent.birthDay) : `0${context.selectedStudent.birthDay}`;
        var birthMonth = context.selectedStudent.birthMonth > 9 ? toString(context.selectedStudent.birthMonth) : `0${context.selectedStudent.birthMonth}`;
        context.form.qDates[0].name = `${context.selectedStudent.birthYear}/${birthMonth}/${birthDay}`;
    }
}
</script>