<template>
    <div class="q-pa-md">
        <Form
        v-if="!showSpinner"
        :formData="form"
        @Create="Create($event)"
        @Cancel="Cancel($event)"
        @userTypeAction="userTypeAction($event)"
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

import MessageBox from "../../../components/dialogs/MessageBox.vue";
import Form from "../../../components/Forms/Form.vue";
import *  as gcpServices from "../../../store/modules/gcp-services";
import { post } from "../../../store/modules/services";
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
            fileUrl: "",
            fileName: "",
            originalFileName: "",
            isNewPicture: false,
        }
    },
    methods:{
        Create(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Create User"){
                    context.dialogs[i].isVisible = true;
                    context.form.qBtns[1].btnDisabled = true;
                    break;
                }
            }
        },
        Cancel(){
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            if(user.schoolId === "CEO")this.$router.push('/super-admin-user-landing')
            else  this.$router.push('/user-landing')
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
        onFileSelected(payload){
            var context = this;
            context.form.qFiles[0].selectedFile = payload.selectedFile;
            let reader  = new FileReader();
            let fileType = "image";

            reader.addEventListener("load", function () {

                 context.form.qFiles[0].showPreview = false;
                  context.form.qFiles[0].showVideoPreview = false;
                  context.isNewPicture = true;

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
                }
                else if (/\.(pdf|doc)$/i.test(context.form.qFiles[0].selectedFile.name)) {
                    fileType = "image"
                    context.form.qFiles[0].fileType = fileType;
					reader.readAsDataURL(context.form.qFiles[0].selectedFile);
				}else if (/\.(ogg|mp4|webm)$/i.test(context.form.qFiles[0].selectedFile.name)) {
                    fileType = "video";
                    context.form.qFiles[0].fileType = fileType;
                    reader.readAsDataURL(context.form.qFiles[0].selectedFile);
                }
                else{
                    alert("Wrong file format. Only supports .jpg, .jpeg, .png, .gif, .mp4, .ogg, .webm, .pdf or .doc")
                }
            }
            
            
        },
        async uploadFile(){
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
            //uploadFile
            this.$store.commit("authenticationStore/setShowSpinner", true);
            var response = await gcpServices.post(payload)
            context.fileUrl = response.data.url;
            context.fileName = response.data.fileName;
            context.originalFileName = response.data.originalFileName;
            this.$store.commit("authenticationStore/setShowSpinner", false);
            console.log("fileUrl: ", context.fileUrl)

        },
        async save(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            
            var url = `user/create`;
            var schoolId = user.schoolId;
            if(Object.keys(user).length <= 0){
                schoolId = "CEO";
            }
            else if(user.userType == "Admin" && user.designationId !== "CEO"){
                schoolId = user.schoolId;
            }
            const payload = {
                url,
                req: {
                    firstName: context.form.qInputs[0].name,
                    lastName: context.form.qInputs[1].name,
                    userName: context.form.qInputs[2].name,
                    password: context.form.qInputs[3].name,
                    designationId: context.form.qSelects[0].value,
                    userType: "Member",
                    schoolId,
                }
            }

            console.log("payload: ", payload)
            this.$store.commit("authenticationStore/setShowSpinner", true);
            var response = await post(payload)
            this.$store.commit("authenticationStore/setShowSpinner", false);

            const { 
                data : {
                    message,
                    success,
                }
            } = response
            if(success){
                context.dialogs[1].isVisible = true;
            }else{
                context.dialogs[2].message = message;
                context.dialogs[2].isVisible = true;
            }

        },
        async uploadPicSave(){
            var context = this;
            if(context.isNewPicture){
                await context.uploadFile();
            }
            await context.save();
        },
        async okDialog(payload){
            console.log("payload: ", payload)
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Create User":
                            await context.uploadPicSave();
                            context.form.qBtns[1].btnDisabled = false;
                            break;
                        case "Success":
                            var user = this.$store.getters["authenticationStore/IdentityModel"];
                            if(user.schoolId === "CEO")this.$router.push('/super-admin-user-landing')
                            else  this.$router.push('/user-landing')
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
    },
    created(){
       var context = this;
       context.form.clearQInputs();
       context.form.clearQSelects();

       context.form.qSelects[0].list = this.$store.getters["staffStore/staffs"].map((row) => {
            return {
                ...row,
                type: row.type
            }
        })
        this.$store.commit("authenticationStore/setPageTitle", "Create User");  
    }
}
</script>