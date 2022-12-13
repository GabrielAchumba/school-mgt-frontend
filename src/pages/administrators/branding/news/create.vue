<template>
    <div class="q-pa-md">
        <Form
        v-if="!showSpinner"
        :formData="form"
        @Create="Create($event)"
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

import MessageBox from "../../../../components/dialogs/MessageBox.vue";
import Form from "../../../../components/Forms/Form.vue";
import { post, uploadNews } from "../../../../store/modules/gcp-services";
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
            NewsUrl: "",
            doesNewsExists: false,
            fileName: "",
            originalFileName: "",
        }
    },
    methods:{
        Create(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Create News"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            if(user.schoolId === "CEO")this.$router.push('/super-admin-news-landing')
            else this.$router.push('/super-admin-news-landing')
            
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
            let fileType = "image";

            reader.addEventListener("load", function () {

                 context.form.qFiles[0].showPreview = false;
                  context.form.qFiles[0].showVideoPreview = false;

                if(fileType === "video"){
                     context.form.qFiles[0].showVideoPreview = true;
                    context.form.qFiles[0].imagePreview = reader.result;
                }else{
                    context.form.qFiles[0].showPreview = true;
                    context.form.qFiles[0].imagePreview = reader.result;
                }

            }.bind(context), false);

            if(context.form.qFiles[0].selectedFile){
                if (/\.(jpe?g|png|gif)$/i.test(context.form.qFiles[0].selectedFile.name)) {
                    fileType = "image"
                    context.form.qFiles[0].fileType = fileType;
					reader.readAsDataURL(context.form.qFiles[0].selectedFile);
				}else if (/\.(ogg|mp4|webm)$/i.test(context.form.qFiles[0].selectedFile.name)) {
                    fileType = "video";
                    context.form.qFiles[0].fileType = fileType;
                    reader.readAsDataURL(context.form.qFiles[0].selectedFile);
                }
                else{
                    alert("Wrong image format. Only supports .jpg, .jpeg, .png, .gif, .mp4, .ogg, or .webm")
                }
            }
            
            
        },
        async uploadNews(){
            var context = this;
            const formData = new FormData();
            console.log("selectedFile: ", context.form.qFiles[0].selectedFile)
            formData.append('file', context.form.qFiles[0].selectedFile);
            
            var url = `news/upload`;
            const payload = {
                url,
                req: formData,
            }

            console.log("payload: ", payload)
            //uploadNews
            var response = await post(payload)

            context.NewsUrl = response.data.url;
            context.fileName = response.data.fileName;
            context.originalFileName = response.data.originalFileName;
            
         
            console.log("NewsUrl: ", context.NewsUrl)

        },
        async checkNewsExistance(){
            var context = this;
            
            var url = `news/checkfile`;
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            const payload = {
                url,
                req: {
                    schoolId: user.schoolId,
                    title: context.form.qInputs[0].name,
                }
            }

            console.log("payload: ", payload)
            var response = await post(payload)
            console.log("response: ", response)
            
            context.doesNewsExists = response.data;
            console.log("doesNewsExists: ", context.doesNewsExists)

        },
         async save(){
            var context = this;
            
            var url = `news/create`;
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            const payload = {
                url,
                req: {
                    title: context.form.qInputs[0].name,
                    description: context.form.qInputs[1].name,
                    imageTitle: context.form.qInputs[2].name,
                    imageDescription: context.form.qInputs[3].name,
                    fileType: context.form.qFiles[0].fileType,
                    schoolId: user.schoolId,
                    fileUrl: context.NewsUrl,
                    fileName: context.fileName,
                    originalFileName: context.originalFileName,
                    createdBy: user.id,
                }
            }

            console.log("payload: ", payload)
            var response = await post(payload)


            if(response.status === 201 || response.status == 200){
                context.dialogs[1].isVisible = true;
            }else{
                context.dialogs[2].message = "Error while saving news";
                context.dialogs[2].isVisible = true;
            }

        },
        async uploadAndSaveNewsUr(){
            var context = this;
            this.$store.commit("authenticationStore/setShowSpinner", true);
            await context.checkNewsExistance();
            if(context.doesNewsExists === false){
                await context.uploadNews();
                await context.save();
            }else{
                alert("News title already exists")
            }
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
                        case "Create News":
                            await context.uploadAndSaveNewsUr();
                            break;
                        case "Success":
                            var user = this.$store.getters["authenticationStore/IdentityModel"];
                            if(user.schoolId === "CEO")this.$router.push('/super-admin-news-landing')
                            else this.$router.push('/super-admin-news-landing')
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
        context.form.clearQInputs();
    }
}
</script>