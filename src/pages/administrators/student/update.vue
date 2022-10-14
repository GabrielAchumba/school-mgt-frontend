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
import { form, dialogs } from "./view_models/update-view-model";

export default {
    components:{
        MessageBox,
        Form
    },
    data(){
        return {
            selectedStudent: {},
            form: form,
            dialogs: dialogs,
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
        console.log("selectedStudent: ", context.selectedStudent)
        context.form.qInputs[0].firstName = context.selectedStudent.firstName;
        context.form.qInputs[1].lastName = context.selectedStudent.lastName;
        context.form.qSelects[0].value =  context.selectedStudent.subscriptionType;
        var birthDay = context.selectedStudent.birthDay > 9 ? toString(context.selectedStudent.birthDay) : `0${context.selectedStudent.birthDay}`;
        var birthMonth = context.selectedStudent.birthMonth > 9 ? toString(context.selectedStudent.birthMonth) : `0${context.selectedStudent.birthMonth}`;
        context.form.qDates[0].name = `${context.selectedStudent.birthYear}/${birthMonth}/${birthDay}`;
    }
}
</script>