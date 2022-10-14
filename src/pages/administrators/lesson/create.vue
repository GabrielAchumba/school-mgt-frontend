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
import { form, dialogs } from "./view_models/create-view-model";

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
        Create(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Create Lesson"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            this.$router.push('/lesson-landing')
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
            
            var url = `lesson/create`;
            const payload = {
                url,
                req: {
                    type: context.form.qInputs[0].name,
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
                        case "Create Lesson":
                            await context.save();
                            break;
                        case "Success":
                            this.$router.push("/lesson-landing");
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