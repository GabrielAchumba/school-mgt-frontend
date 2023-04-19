<template>
    <div class="q-pa-md">
        <Form
        v-if="!showSpinner"
        :formData="form"
        @Update="Update($event)"
        @Cancel="Cancel($event)"/>
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

        <q-dialog v-model="gCPUploadVisibility">
            <GCPUpload
            :url="fileExistsUrl"
            @CancelFileUpload="CancelFileUpload"
            @OkayFileUpload="OkayFileUpload"/>
        </q-dialog>
    </div>
</template>

<script>

import MessageBox from "../../../components/dialogs/MessageBox.vue";
import GCPUpload from "../../../components/FileIO/GCP-Upload.vue";
import Form from "../../../components/Forms/Form.vue";
import { post } from "../../../store/modules/services";
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
        Form,
        GCPUpload
    },
    data(){
        return {
            form: form,
            dialogs: dialogs,
            selectedLand: {},
            gCPUploadVisibility: false,
            fileExistsUrl: "file/isFileExists",
            fileCategory: "LANDS",
            fileData: {},
            userId: "",
        }
    },
    methods:{
        CancelFileUpload(){
            var context = this;
            context.gCPUploadVisibility = false;
        },
        OkayFileUpload(payload){
            var context = this;
            context.fileData = payload;
            context.gCPUploadVisibility = true;
        },
        Update(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Update Land For Sale"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            this.$router.push('/vendor-landing')
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
        async save(){
            var context = this;

            var url = `land/${context.selectedLand.id}`;
            let payload = {
                url,
                req: {
                    title: context.form.qInputs[0].name,
                    PartialAddress: context.form.qInputs[1].name,
                    wholePlot: context.form.qSelects[0].value,
                    fractionPlot: context.form.qSelects[1].value, 
                }
            }

           /*  Title            string `json:"title"`
	Description      string `json:"description"`
	FileUrl          string `json:"fileUrl"`
	FileName         string `json:"fileName"`
	OriginalFileName string `json:"originalFileName"` */

            console.log("payload: ", payload)
            this.$store.commit("authenticationStore/setShowSpinner", true);
            var response = await post(payload)

            const { 
                data : {
                    message,
                    success,
                }
            } = response
            context.dialogs[0].isVisible = false;
            if(success){
                payload = {
                    url: `file/create`,
                    req: {
                        ...context.fileData,
                        fileCategory: context.fileCategory,
                        categoryId: context.selectedLand.id,
                    }
                }
                var response = await post(payload)
                context.dialogs[1].isVisible = true;
                this.$store.commit("authenticationStore/setShowSpinner", false);
            }else{
                context.dialogs[2].message = message;
                context.dialogs[2].isVisible = true;
                this.$store.commit("authenticationStore/setShowSpinner", false);
            }

        },
        async okDialog(payload){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Update Land For Sale":
                            await context.save();
                            break;
                        case "Success":
                            this.$router.push('/vendor-landing')
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
        context.form.clearQSelects();
        this.$store.commit("authenticationStore/setPageTitle", "Update Land");  
        context.selectedLand = this.$store.getters["authenticationStore/selectedLand"];
        context.form.qInputs[0].name = context.selectedLand.title
        context.form.qInputs[1].name = context.selectedLand.PartialAddress
        context.form.qSelects[0].name = context.selectedLand.wholePlot
        context.form.qSelects[1].name = context.selectedLand.fractionPlot
        const user = this.$store.getters["authenticationStore/IdentityModel"];
        context.userId = user.id;
        context.fileExistsUrl = `file/${context.userId}/${context.selectedLand.id}`
    }
}
</script>