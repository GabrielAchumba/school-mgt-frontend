<template>
    <div class="q-pa-md">
        <Form
        :formData="form"
        @Create="Create($event)"
        @Cancel="Cancel($event)"
        @onFileSelected="onFileSelected($event)"/>
        
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

import MessageBox from "../../../../components/dialogs/MessageBox.vue";
import Form from "../../../../components/Forms/Form.vue";
import { post, uploadCoreValue } from "../../../../store/modules/gcp-services";
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
            CoreValueUrl: "",
            doesCoreValueExists: false,
        }
    },
    methods:{
        Create(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Create Core Value"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            this.$router.push('/core-value-landing')
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
        onFileSelected(payload){
            var context = this;
            console.log("payload: ", payload)
            context.form.qFiles[0].selectedFile = payload.selectedFile;
            
            
        },
        async uploadCoreValue(){
            var context = this;
            const formData = new FormData();
            console.log("selectedFile: ", context.form.qFiles[0].selectedFile)
            formData.append('file', context.form.qFiles[0].selectedFile);
            
            var url = `corevalue/upload`;
            const payload = {
                url,
                req: formData,
            }

            console.log("payload: ", payload)
            //uploadLogo
            var response = await post(payload)
            
            context.CoreValueUrl = response.data;
            console.log("CoreValueUrl: ", context.CoreValueUrl)

        },
        async checkCoreValueExistance(){
            var context = this;
            
            var url = `corevalue/checkfile`;
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            const payload = {
                url,
                req: {
                    schoolId: user.schoolId,
                }
            }

            console.log("payload: ", payload)
            var response = await post(payload)
            console.log("response: ", response)
            
            context.doesLogoExists = response.data;
            console.log("doesLogoExists: ", context.doesLogoExists)

        },
         async save(){
            var context = this;
            
            var url = `corevalue/create`;
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            const payload = {
                url,
                req: {
                    title: context.form.qInputs[0].name,
                    description: context.form.qInputs[1].name,
                    fileUrl: context.CoreValueUrl,
                    schoolId: user.schoolId,
                    createdBy: user.id,
                }
            }

            console.log("payload: ", payload)
            var response = await post(payload)


            if(response.status === 201 || response.status == 200){
                context.dialogs[1].isVisible = true;
            }else{
                context.dialogs[2].message = "Error while saving core value";
                context.dialogs[2].isVisible = true;
            }

        },
        async uploadAndSaveCoreValueUr(){
            var context = this;
            await context.checkCoreValueExistance();
            if(context.doesLogoExists === false){
                await context.uploadCoreValue();
                await context.save();
            }else{
                alert("Core value already exists")
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
                        case "Create Core Value":
                            await context.uploadAndSaveCoreValueUr();
                            break;
                        case "Success":
                            this.$router.push("/core-value-landing");
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