<template>
    <div class="q-pa-md">
        <Form
        :formData="form"
        @onRemove="onRemove($event)"/>
    </div>
</template>

<script>

import Form from "../../../components/Forms/Form.vue";
import { form } from "./view_models/create-view-model";

export default {
    components:{
        Form
    },
    data(){
        return {
            form: form,
            dialogs: dialogs,
            doesMissionExists: false,
        }
    },
    methods:{
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
        async uploadMission(){
            var context = this;
            const formData = new FormData();
            console.log("selectedFile: ", context.form.qFiles[0].selectedFile)
            formData.append('file', context.form.qFiles[0].selectedFile);
            
            var url = `mission/upload`;
            const payload = {
                url,
                req: formData,
            }

            console.log("payload: ", payload)
            //uploadLogo
            var response = await post(payload)
            
            context.MissionUrl = response.data;
            console.log("MissionUrl: ", context.MissionUrl)

        },
        async checkMissionExistance(){
            var context = this;
            
            var url = `mission/checkfile`;
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
            
            var url = `mission/create`;
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            const payload = {
                url,
                req: {
                    title: context.form.qInputs[0].name,
                    description: context.form.qInputs[1].name,
                    fileUrl: context.MissionUrl,
                    schoolId: user.schoolId,
                    createdBy: user.id,
                }
            }

            console.log("payload: ", payload)
            var response = await post(payload)


            if(response.status === 201 || response.status == 200){
                context.dialogs[1].isVisible = true;
            }else{
                context.dialogs[2].message = "Error while saving mission";
                context.dialogs[2].isVisible = true;
            }

        },
        async uploadAndSaveMissionUr(){
            var context = this;
            this.$store.commit("authenticationStore/setShowSpinner", true);
            await context.checkMissionExistance();
            if(context.doesLogoExists === false){
                await context.uploadMission();
                await context.save();
            }else{
                alert("Mission already exists")
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
                        case "Create Mission":
                            await context.uploadAndSaveMissionUr();
                            break;
                        case "Success":
                            this.$router.push("/mission-landing");
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
        context.form.clearQFiles();
    }
}
</script>