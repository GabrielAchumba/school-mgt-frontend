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

import MessageBox from "../../components/dialogs/MessageBox.vue";
import Form from "../../components/Forms/Form.vue";
import { put } from "../../store/modules/services";
import { form, dialogs } from "./view_models/update-referal-view.model";

export default {
    components:{
        MessageBox,
        Form
    },
    data(){
        return {
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
                if(dialog.title == "Update Referal"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            this.$router.push('/referal')
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
            
            var url = `user/update-referal/${user.id}`;
            const payload = {
                url,
                req: {
                    firstName: context.form.qInputs[0].name,
                    lastName: context.form.qInputs[1].name,
                    userName: context.form.qInputs[2].name,
                    phoneNumber: context.form.qInputs[3].name,
                    countryCode: context.form.qSelects[0].value.code,
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
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Update Referal":
                            await context.save();
                            break;
                        case "Success":
                            this.$router.push("/referal");
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
    },
    created(){
        var context = this;
        var user = this.$store.getters["authenticationStore/IdentityModel"]
        console.log("user: ", user)
        context.form.qInputs[0].name = user.firstName;
        context.form.qInputs[1].name = user.lastName;
        context.form.qInputs[2].name = user.userName;
        context.form.qInputs[3].name = user.phoneNumber;
    }
}
</script>