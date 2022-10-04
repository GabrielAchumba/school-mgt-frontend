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
            selectedUser: {},
            form: {
                title: "Update User",
                qSelects: [],
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
            },
            dialogs:[
                { title: "Update User", isVisible: false, message: "Do you want to update a user",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "User updated successfully!",
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
                if(dialog.title == "Update User"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            this.$router.push('/user-landing')
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
            
            var url = `user/${context.selectedUser.id}`;
            const arr = context.form.qDates[0].name.split("/") 
            const payload = {
                url,
                req: {
                    firstName: context.form.qInputs[0].name,
                    lastName: context.form.qInputs[1].name,
                    birthYear: Number(arr[0]),
                    birthMonth: Number(arr[1]),
                    birthDay: Number(arr[1]),
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
                        case "Update User":
                            await context.save();
                            break;
                        case "Success":
                            this.$router.push("/user-landing");
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
        context.selectedUser = this.$store.getters["userStore/selectedUser"];
        context.form.qInputs[0].firstName = context.selectedUser.firstName;
        context.form.qInputs[1].lastName = context.selectedUser.lastName;
        var birthDay = context.selectedUser.birthDay > 9 ? toString(context.selectedUser.birthDay) : `0${context.selectedUser.birthDay}`;
        var birthMonth = context.selectedUser.birthMonth > 9 ? toString(context.selectedUser.birthMonth) : `0${context.selectedUser.birthMonth}`;
        context.form.qDates[0].name = `${context.selectedUser.birthMonth}/birthMonth/birthDay`;
    }
}
</script>