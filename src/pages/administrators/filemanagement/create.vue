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

import MessageBox from "../../../components/dialogs/MessageBox.vue";
import Form from "../../../components/Forms/Form.vue";
import { post, uploadFile } from "../../../store/modules/gcp-services";
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
            fileUrl: "",
            doesFileExists: false,
        }
    },
    methods:{
        Create(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Create File"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            this.$router.push('/FileModel-landing')
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
            context.form.qInputs[2].selectedFile = payload.selectedFile;
            
            
        },
        async uploadFile(){
            var context = this;
            const formData = new FormData();
            console.log("selectedFile: ", context.form.qInputs[2].selectedFile)
            formData.append('file', context.form.qInputs[2].selectedFile);
            
            var url = `filemanagement/upload`;
            const payload = {
                url,
                req: formData,
            }

            console.log("payload: ", payload)
            //uploadFile
            var response = await post(payload)
            
            context.fileUrl = response.data;
            console.log("fileUrl: ", context.fileUrl)

        },
        async checkFileExistance(){
            var context = this;
            
            var url = `filemanagement/checkfile`;
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            const payload = {
                url,
                req: {
                    title: context.form.qInputs[0].name,
                    description: context.form.qInputs[1].name,
                    schoolId: user.schoolId,
                }
            }

            console.log("payload: ", payload)
            var response = await post(payload)
            console.log("response: ", response)
            
            context.doesFileExists = response.data;
            console.log("doesFileExists: ", context.doesFileExists)

        },
         async save(){
            var context = this;
            
            var url = `filemanagement/create`;
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            const payload = {
                url,
                req: {
                    title: context.form.qInputs[0].name,
                    description: context.form.qInputs[1].name,
                    schoolId: user.schoolId,
                    fileUrl: context.fileUrl,
                    createdBy: user.id,
                }
            }

            console.log("payload: ", payload)
            var response = await post(payload)


            if(response.status === 201 || response.status == 200){
                context.dialogs[1].isVisible = true;
            }else{
                context.dialogs[2].message = "Error while saving the file";
                context.dialogs[2].isVisible = true;
            }

        },
        async uploadAndSaveFileUr(){
            var context = this;
            await context.checkFileExistance();
            if(context.doesFileExists === false){
                await context.uploadFile();
                await context.save();
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
                        case "Create File":
                            await context.uploadAndSaveFileUr();
                            break;
                        case "Success":
                            this.$router.push("/FileModel-landing");
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