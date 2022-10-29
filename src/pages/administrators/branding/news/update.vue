<template>
    <div class="q-pa-md">
        <Form
        :formData="form"
        @Update="Update($event)"
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

import MessageBox from "../../../../components/dialogs/MessageBox.vue"
import Form from "../../../../components/Forms/Form.vue";
import { post, uploadNews } from "../../../../store/modules/gcp-services";
import { form, dialogs } from "./view_models/update-view-model";

export default {
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
            selectedNews: {},
        }
    },
    methods:{
        Update(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Update News"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            this.$router.push('/news-landing')
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
            
            context.NewsUrl = response.data;
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
            
            var url = `news/${context.selectedNews.id}`;
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            const payload = {
                url,
                req: {
                    title: context.form.qInputs[0].name,
                    description: context.form.qInputs[1].name,
                    imageTitle: context.form.qInputs[2].name,
                    imageDescription: context.form.qInputs[3].name,
                    schoolId: user.schoolId,
                    fileUrl: context.NewsUrl,
                    createdBy: user.id,
                }
            }

            console.log("payload: ", payload)
            var response = await put(payload)


            if(response.status === 201 || response.status == 200){
                context.dialogs[1].isVisible = true;
            }else{
                context.dialogs[2].message = "Error while saving news";
                context.dialogs[2].isVisible = true;
            }

        },
        async uploadAndSaveNewsUr(){
            var context = this;
            await context.checkNewsExistance();
            if(context.doesNewsExists === true){
                await context.uploadNews();
                await context.save();
            }else{
                alert("News does not exists")
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
                        case "Create News":
                            await context.uploadAndSaveNewsUr();
                            break;
                        case "Success":
                            this.$router.push("/news-landing");
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
        context.selectedNews = this.$store.getters["NewsStore/selectedNews"];
        context.NewsUrl = context.selectedNews.fileUrl;
        context.form.qImages[0].imageUrl = context.selectedNews.fileUrl;
        context.form.qInputs[0].name = context.selectedNews.title;
        context.form.qInputs[1].name = context.selectedNews.description;
        context.form.qInputs[2].name = context.selectedNews.imageTitle;
        context.form.qInputs[3].name = context.selectedNews.imageDescription;
    }
}
</script>