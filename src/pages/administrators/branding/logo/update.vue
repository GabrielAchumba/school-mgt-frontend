<template>
    <div class="q-pa-md">
        <Form
        v-if="!showSpinner"
        :formData="form"
        @Update="Update($event)"
        @Cancel="Cancel($event)"
        @onFileSelected="onFileSelected($event)"/>
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

import MessageBox from "../../../../components/dialogs/MessageBox.vue"
import Form from "../../../../components/Forms/Form.vue";
import { post, uploadLogo } from "../../../../store/modules/gcp-services";
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
            form: form,
            dialogs: dialogs,
            LogoUrl: "",
            doesLogoExists: false,
            selectedLogo: {},
        }
    },
    methods:{
        Update(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Update Logo"){
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
            context.form.qFiles[0].selectedFile = payload.selectedFile;
            let reader  = new FileReader();

            reader.addEventListener("load", function () {
            context.form.qFiles[0].showPreview = true;
            context.form.qFiles[0].imagePreview = reader.result;
            }.bind(context), false);

            if(context.form.qFiles[0].selectedFile){
                if (/\.(jpe?g|png|gif)$/i.test(context.form.qFiles[0].selectedFile.name)) {
						reader.readAsDataURL(context.form.qFiles[0].selectedFile);
				}else{
                    alert("Wrong image format. Only supports .jpg, .jpeg, .png and .gif")
                }
            }
            
            
        },
        async uploadLogo(){
            var context = this;
            const formData = new FormData();
            console.log("selectedFile: ", context.form.qFiles[0].selectedFile)
            formData.append('file', context.form.qFiles[0].selectedFile);
            
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
            
            var url = `logo/${context.selectedLogo.id}`;
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
            var response = await put(payload)


            if(response.status === 201 || response.status == 200){
                context.dialogs[1].isVisible = true;
            }else{
                context.dialogs[2].message = "Error while saving the Logo";
                context.dialogs[2].isVisible = true;
            }

        },
        async uploadAndSaveLogoUr(){
            var context = this;
            this.$store.commit("authenticationStore/setShowSpinner", true);
            await context.uploadLogo();
            await context.save();
            this.$store.commit("authenticationStore/setShowSpinner", false);
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
        var context =  this;
        context.selectedLogo = this.$store.getters["LogoStore/selectedLogo"];
        context.LogoUrl = context.selectedLogo.fileUrl;
        context.form.qFiles[0].showPreview = true;
        context.form.qFiles[0].imagePreview = context.selectedLogo.fileUrl;
        context.form.qColors[0].name = context.selectedLogo.primaryColor;
        context.form.qColors[1].name = context.selectedLogo.secondaryColor;
        context.form.qColors[2].name = context.selectedLogo.tertiaryColor;
        console.log("context.form: ", context.form)
    }
}
</script>