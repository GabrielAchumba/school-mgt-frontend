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
import { post, uploadCarousel } from "../../../../store/modules/gcp-services";
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
            CarouselUrl: "",
            doesCarouselExists: false,
            selectedCarousel: {},
        }
    },
    methods:{
        Update(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Update Home Page"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            this.$router.push('/home-landing')
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
        async uploadCarousel(){
            var context = this;
            const formData = new FormData();
            console.log("selectedFile: ", context.form.qFiles[0].selectedFile)
            formData.append('file', context.form.qFiles[0].selectedFile);
            
            var url = `carousel/upload`;
            const payload = {
                url,
                req: formData,
            }

            console.log("payload: ", payload)
            //uploadCarousel
            var response = await post(payload)
            
            context.CarouselUrl = response.data;
            console.log("CarouselUrl: ", context.CarouselUrl)

        },
        async checkCarouselExistance(){
            var context = this;
            
            var url = `Carousel/checkfile`;
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            const payload = {
                url,
                req: {
                    title: context.form.qInputs[0].name,
                    schoolId: user.schoolId,
                }
            }

            console.log("payload: ", payload)
            var response = await post(payload)
            console.log("response: ", response)
            
            context.doesCarouselExists = response.data;
            console.log("doesCarouselExists: ", context.doesCarouselExists)

        },
         async save(){
            var context = this;
            
            var url = `carousel/${context.selectedCarousel.id}`;
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            const payload = {
                url,
                req: {
                    title: context.form.qInputs[0].name,
                    description: context.form.qInputs[1].name,
                    schoolId: user.schoolId,
                    fileUrl: context.CarouselUrl,
                    createdBy: user.id,
                }
            }

            console.log("payload: ", payload)
            var response = await put(payload)


            if(response.status === 201 || response.status == 200){
                context.dialogs[1].isVisible = true;
            }else{
                context.dialogs[2].message = "Error while saving home page";
                context.dialogs[2].isVisible = true;
            }

        },
        async uploadAndSaveCarouselUr(){
            var context = this;
            await context.checkCarouselExistance();
            if(context.doesCarouselExists === true){
                await context.uploadCarousel();
                await context.save();
            }else{
                alert("Home page does not exists")
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
                        case "Update Home Page":
                            await context.uploadAndSaveCarouselUr();
                            break;
                        case "Success":
                            this.$router.push("/home-landing");
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
        context.selectedCarousel = this.$store.getters["CarouselStore/selectedCarousel"];
        context.CarouselUrl = context.selectedCarousel.fileUrl;
        context.form.qImages[0].imageUrl = context.selectedCarousel.fileUrl;
        context.form.qInputs[0].name = context.selectedCarousel.title;
        context.form.qInputs[1].name = context.selectedCarousel.description;
    }
}
</script>