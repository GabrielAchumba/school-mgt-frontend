<template>
    <div class="q-pa-md">
        <Form
        v-if="!showSpinner"
        :formData="form"
        @Update="Update($event)"
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
import { put } from "../../../store/modules/gcp-services";
import { form, dialogs } from "./view_models/update-view-model";

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
            selectedAboutUs: {},
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
                if(dialog.title == "Update About Us"){
                    context.dialogs[i].isVisible = true;
                    context.form.qBtns[1].btnDisabled = true;
                    break;
                }
            }
        },
        Cancel(){
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            if(user.schoolId === "CEO")this.$router.push('/super-admin-about-us-landing')
            else  this.$router.push('/about-us-landing')
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
            context.form.qBtns[0].btnDisabled = false;
            context.form.qBtns[1].btnDisabled = false;
        },
        async save(){
            var context = this;
            
            var url = `aboutus/${context.selectedAboutUs._id}`;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            const payload = {
                url,
                req: {
                    title: context.form.qInputs[0].name,
                    description: context.form.qInputs[1].name,
                    schoolId: user.schoolId,
                    createdBy: user.id,
                }
            }

            console.log("payload: ", payload)
            this.$store.commit("authenticationStore/setShowSpinner", true);
            var response = await put(payload)
            this.$store.commit("authenticationStore/setShowSpinner", false);

            if(response.data){
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
                        case "Update About Us":
                            await context.save();
                            context.form.qBtns[1].btnDisabled = false;
                            break;
                        case "Success":
                            var user = this.$store.getters["authenticationStore/IdentityModel"];
                            if(user.schoolId === "CEO")this.$router.push('/super-admin-about-us-landing')
                            else  this.$router.push('/about-us-landing')
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        setBackRoute(){
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            let backRoute= "";
            if(user.schoolId === "CEO")backRoute='/super-admin-about-us-landing';
            else  backRoute = '/about-us-landing';
             this.$store.commit("authenticationStore/setBackRoute", backRoute);
        }
    },
    created(){
        var context =  this;
        context.selectedAboutUs = this.$store.getters["AboutUsStore/selectedAboutUs"];
        context.form.qInputs[0].name = context.selectedAboutUs.title;
        context.form.qInputs[1].name = context.selectedAboutUs.description;
        context.setBackRoute();
    }
}
</script>