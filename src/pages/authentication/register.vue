<template>
    <div class="q-pa-md">
        <Form
        :formData="form"
        @Create="Create($event)"
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

import MessageBox from "../../components/dialogs/MessageBox.vue";
import Form from "../../components/Forms/Form.vue";
import { post } from "../../store/modules/services";
import { form, dialogs } from "./view_models/register-view-model";

export default {
    components:{
        MessageBox,
        Form
    },
    data(){
        return {
            form: form,
            dialogs:dialogs
        }
    },
    methods:{
        Create(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Create User"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            this.$router.push('/')
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
            
            var url = `user/create-admin`;
            var schoolId = context.form.qSelects[1].value;
            if(context.form.qSelects[0].value.type === "Referal"){
              schoolId = "CEO";
            }
            const payload = {
                url,
                req: {
                    firstName: context.form.qInputs[0].name,
                    lastName: context.form.qInputs[1].name,
                    userName: context.form.qInputs[2].name,
                    password: context.form.qInputs[3].name,
                    phoneNumber: context.form.qInputs[4].name,
                    userType: context.form.qSelects[0].value.type,
                    countryCode: context.form.qSelects[2].value.code,
                    schoolId,
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
                        case "Create User":
                            await context.save();
                            break;
                        case "Success":
                            this.$router.push("/");
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
      userTypeAction(payload){
            var context = this;
            console.log("payload: ", payload)
            if(payload.value.value === 1){
                context.form.qSelects[1].visible = false;
            }else{
                context.form.qSelects[1].visible = true;
            }
      }
    },
    created(){
       var context = this;
       context.form.qSelects[1].list = this.$store.getters["schoolStore/schools"].map((row) => {
           return {
               ...row,
               type: row.schoolName
           }
       })
    }
}
</script>