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

import MessageBox from "../../../components/dialogs/MessageBox.vue";
import Form from "../../../components/Forms/Form.vue";
import { put } from "../../../store/modules/services";
import *  as gcpServices from "../../../store/modules/gcp-services";
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
            selectedUser: {},
            form: form,
            dialogs: dialogs,
            imageUrl: "",
            fileName: "",
            originalFileName: "",
            fileUrl: "",
            isNewPicture: false,
        }
    },
    methods:{
        Update(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Update User"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            var context = this;
            context.setRoutes();
            /* var user = this.$store.getters["authenticationStore/IdentityModel"];
            if(user.schoolId === "CEO")this.$router.push('/super-admin-user-landing')
            else  this.$router.push('/user-landing') */
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
            if(context.fileUrl === "") context.isNewPicture = false;
            this.$store.commit("authenticationStore/setShowSpinner", false);
            console.log("fileUrl: ", context.fileUrl)

        },
        async save(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            
            var url = `user/${context.selectedUser.id}`;
            var schoolId = context.selectedUser.schoolId;

            const payload = {
                url,
                req: {
                    ...context.selectedUser,
                    firstName: context.form.qInputs[0].name,
                    lastName: context.form.qInputs[1].name,
                    userName: context.form.qInputs[2].name,
                    fileUrl: context.fileUrl,
                    fileName: context.fileName,
                    originalFileName: context.originalFileName,
                    schoolId,
                }
            }

            console.log("payload: ", payload)
            this.$store.commit("authenticationStore/setShowSpinner", true);
            var response = await put(payload)
            this.$store.commit("authenticationStore/setShowSpinner", false);

            const { 
                data : {
                    message,
                    success,
                }
            } = response
            if(success){
                if(user.userType !== "Admin"){
                    this.$store.commit("authenticationStore/setIdentityModel", payload.req);
                }
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
                        case "Update User":
                            await context.uploadPicSave();
                            break;
                        case "Success":
                            context.setRoutes();
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        setRoutes(){
              var user = this.$store.getters["authenticationStore/IdentityModel"];
              let backRoute= "";
              if(user.schoolId === "CEO"){
                backRoute='/super-admin-user-landing';
              }
              else {
                  console.log("User 2: ", user)
                switch(user.userType){
                  case "Admin":
                    backRoute = '/user-landing';
                    break;
                  case "Student":
                    backRoute = '/student';
                    break;
                  case "Member":
                    backRoute = '/member';
                    break;
                }
                
              } 

              this.$router.push(backRoute);
        }
    },
    created(){
        var context =  this;
        context.selectedUser = this.$store.getters["userStore/selectedUser"];

        context.form.qInputs[0].name = context.selectedUser.firstName;
        context.form.qInputs[1].name = context.selectedUser.lastName;
        context.form.qInputs[2].name = context.selectedUser.userName;
        context.fileUrl = context.selectedUser.fileUrl;
        context.form.qFiles[0].showPreview = true;
        context.form.qFiles[0].imagePreview = context.selectedUser.fileUrl;

        this.$store.commit("authenticationStore/setPageTitle", "Update User");  

    }
}
</script>