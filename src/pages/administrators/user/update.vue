<template>
    <div class="q-pa-md">
        <Form
        :formData="form"
        @Update="Update($event)"
        @Cancel="Cancel($event)"
        @userTypeAction="userTypeAction($event)"/>

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
            selectedUser: {},
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
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            
            var url = `user/${context.selectedUser.id}`;
            var schoolId = context.selectedUser.schoolId;

            const userType = context.form.qSelects[0].value.label;
            const payload = {
                url,
                req: {
                    firstName: context.form.qInputs[0].name,
                    lastName: context.form.qInputs[1].name,
                    userName: context.form.qInputs[2].name,
                    designationId: userType === "Parent/Gaurdian" ? "Parent" : context.form.qSelects[2].value,
                    userType: context.form.qSelects[0].value.label,
                    schoolId,
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
        },
        userTypeAction(payload){
            var context = this;
            if(payload.value.value == 2){
                context.form.qSelects[2].visible = false;
            }else{
                context.form.qSelects[2].visible = true;
            }
        }
    },
    created(){
        var context =  this;
        context.selectedUser = this.$store.getters["userStore/selectedUser"];
        context.form.qInputs[0].name = context.selectedUser.firstName;
        context.form.qInputs[1].name = context.selectedUser.lastName;
        context.form.qInputs[2].name = context.selectedUser.userName;

       

      var user = this.$store.getters["authenticationStore/IdentityModel"]
      context.form.qSelects[0].list = [
        {
            value: 1,
            label: "Member",
            type: "Member",
        },
        {
            value: 2,
            label: "Parent/Gaurdian",
            type: "Parent",
        }]

    context.form.qSelects[2].list = this.$store.getters["staffStore/staffs"].map((row) => {
        return {
            ...row,
            type: row.type
        }
    }) 

    }
}
</script>