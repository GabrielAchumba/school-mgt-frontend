<template>
    <div class="q-pa-md">
        <Form
        v-if="!showSpinner"
        :formData="form"
        @Create="Create($event)"
        @Cancel="Cancel($event)"/>
        <div 
        v-show="showSpinner"
        class="q-gutter-md row">
            <div class="col-12 q-pa-sm absolute-center flex flex-center">
                <q-spinner
                    color="accent"
                    :size="spinnerSize"
                    :thickness="spinnerThickness"
                />
            </div>
        </div>

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
import { post } from "../../../store/modules/gcp-services";
import { form, dialogs } from "./view_models/create-view-model";

export default {
    computed:{
        showSpinner(){
            return this.$store.getters["authenticationStore/showSpinner"];
        },
        spinnerSize(){
            return this.$store.getters["authenticationStore/spinnerSize"];
        },
        spinnerThickness(){
            return this.$store.getters["authenticationStore/spinnerThickness"];
        }
    },
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
                if(dialog.title == "Create Contact"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            if(user.schoolId === "CEO")this.$router.push('/super-admin-contact-landing')
            else  this.$router.push('/contact-landing')
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
            
            var url = `contact/create`;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            const payload = {
                url,
                req: {
                    title: context.form.qInputs[0].name,
                    description: context.form.qInputs[1].name,
                    officialEmail: context.form.qInputs[2].name,
                    officialPhoneNumber1: context.form.qInputs[3].name,
                    officialPhoneNumber2: context.form.qInputs[4].name,
                    schoolId: user.schoolId,
                }
            }

            console.log("payload: ", payload)
            this.$store.commit("authenticationStore/setShowSpinner", true);
            var response = await post(payload)
            this.$store.commit("authenticationStore/setShowSpinner", false);

            if(response.data){
                context.dialogs[1].isVisible = true;
            }else{
                context.dialogs[2].message = "Failed to create contact";
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
                        case "Create Contact":
                            await context.save();
                            break;
                        case "Success":
                            var user = this.$store.getters["authenticationStore/IdentityModel"];
                            if(user.schoolId === "CEO")this.$router.push('/super-admin-contact-landing')
                            else  this.$router.push('/contact-landing')
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
        context.form.clearQInputs();
    }
}
</script>