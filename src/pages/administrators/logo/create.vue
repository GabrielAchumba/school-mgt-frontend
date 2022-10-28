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
import { post, uploadLogo } from "../../../store/modules/gcp-services";
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
            LogoUrl: "",
            doesLogoExists: false,
        }
    },
    methods:{
        Create(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Create Logo"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            this.$router.push('/logo-landing')
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
            context.form.qFiles[0].selectedLogo = payload.selectedFile;
            
            
        },
        async uploadLogo(){
            var context = this;
            const formData = new FormData();
            console.log("selectedFile: ", context.form.qFiles[0].selectedFile)
            formData.append('Logo', context.form.qFiles[0].selectedFile);
            
            var url = `logo/upload`;
            const payload = {
                url,
                req: formData,
            }

            console.log("payload: ", payload)
            //uploadLogo
            var response = await post(payload)
            
            context.LogoUrl = response.data;
            console.log("LogoUrl: ", context.LogoUrl)

        },
        async checkLogoExistance(){
            var context = this;
            
            var url = `logo/checkfile`;
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
            
            var url = `logo/create`;
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            const payload = {
                url,
                req: {
                    primaryColor: context.form.qColors[0].name,
                    secondaryColor: context.form.qColors[1].name,
                    tertiaryColor: context.form.qColors[2].name,
                    schoolId: user.schoolId,
                    fileUrl: context.LogoUrl,
                    createdBy: user.id,
                }
            }

            console.log("payload: ", payload)
            var response = await post(payload)


            if(response.status === 201 || response.status == 200){
                context.dialogs[1].isVisible = true;
            }else{
                context.dialogs[2].message = "Error while saving the Logo";
                context.dialogs[2].isVisible = true;
            }

        },
        async uploadAndSaveLogoUr(){
            var context = this;
            await context.checkLogoExistance();
            if(context.doesLogoExists === false){
                await context.uploadLogo();
                await context.save();
            }else{
                alert("Logo already exists")
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
                        case "Create Logo":
                            await context.uploadAndSaveLogoUr();
                            break;
                        case "Success":
                            this.$router.push("/logo-landing");
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
        context.form.clearQFiles();
        context.form.clearQColors();
    }
}
</script>