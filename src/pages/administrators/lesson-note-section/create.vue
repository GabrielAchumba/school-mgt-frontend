<template>
    <div class="q-pa-md">
        <Form
        v-if="!showSpinner"
        :formData="form"
        @Create="Create($event)"
        @Cancel="Cancel($event)"
        @onFileSelected="onFileSelected($event)"
        @onSubject="onSubject($event)"
        @onLevel="onLevel($event)"/>
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
import { post, uploadFile } from "../../../store/modules/gcp-services";
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
            doesFileExists: false,
            fileName: "",
            originalFileName: "",
            fileType: "",
            selectedLevel: null,
            selectedSubject: null,
        }
    },
    methods:{
        Create(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Create Lesson Note Section"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            if(user.schoolId === "CEO")this.$router.push('/super-admin-lesson-note-section-landing')
            else  this.$router.push('/lesson-note-section-landing')
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
                    context.fileType = fileType;
                    context.form.qFiles[0].fileType = fileType;
					reader.readAsDataURL(context.form.qFiles[0].selectedFile);
                }
                else if (/\.(pdf|doc)$/i.test(context.form.qFiles[0].selectedFile.name)) {
                    fileType = "image"
                    context.fileType = fileType;
                    context.form.qFiles[0].fileType = fileType;
					reader.readAsDataURL(context.form.qFiles[0].selectedFile);
				}else if (/\.(ogg|mp4|webm)$/i.test(context.form.qFiles[0].selectedFile.name)) {
                    fileType = "video";
                    context.fileType = fileType;
                    context.form.qFiles[0].fileType = fileType;
                    reader.readAsDataURL(context.form.qFiles[0].selectedFile);
                }
                else{
                    alert("Wrong file format. Only supports .jpg, .jpeg, .png, .gif, .mp4, .ogg, .webm, .pdf or .doc")
                }
            }
            
            
        },
        onLevel(payload){
            let selectedItem = payload.list.find(o => o.id === payload.value);
            var context = this;
            context.selectedLevel = selectedItem;
            console.log("selectedLevel: ", context.selectedLevel)
            context.form.qSelects[1].value = "";
            context.form.qSelects[2].value = "";
        },
        async onSubject(payload){
            let selectedItem = payload.list.find(o => o.id === payload.value);
            var context = this;
            context.selectedSubject = selectedItem;
            console.log("selectedSubject: ", context.selectedSubject)
            context.form.qSelects[2].value = "";
            await context.FetchLessonNotes();
        },
        async FetchLessonNotes(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            //this.$store.commit("authenticationStore/setShowSpinner", true);
            console.log("context.selectedSubject: ", context.selectedSubject)
            console.log("context.selectedLevel: ", context.selectedLevel);

            if(context.selectedSubject && context.selectedLevel){

                const payload = {
                    url: "lessonnote/notes",
                    req: {
                        subjectId: context.selectedSubject.id,
                        levelId: context.selectedLevel.id,
                        schoolId: user.schoolId,
                    }
                }

                try{
                    console.log("payload: ", payload)
                    const response = await post(payload);
                    console.log("response.data: ", response.data);
                    context.form.qSelects[2].list = response.data
                    .map((row) => {
                        return {
                            ...row,
                            type: row.title,
                            label: row.type, 
                            value: row.id,
                        }
                    })

                    

                    //this.$store.commit("authenticationStore/setShowSpinner", false);
                    
                }catch{
                    //this.$store.commit("authenticationStore/setShowSpinner", false);
                }
            }

        },
        async uploadFile(){
            var context = this;
            const formData = new FormData();
            console.log("selectedFile: ", context.form.qFiles[0].selectedFile)
            formData.append('file', context.form.qFiles[0].selectedFile);
            
            var url = `lessonnotesection/upload`;
            const payload = {
                url,
                req: formData,
            }

            console.log("payload: ", payload)
            //uploadFile
            this.$store.commit("authenticationStore/setShowSpinner", true);
            var response = await post(payload)
            context.fileUrl = response.data.url;
            context.fileName = response.data.fileName;
            context.originalFileName = response.data.originalFileName;
            this.$store.commit("authenticationStore/setShowSpinner", false);
            console.log("fileUrl: ", context.fileUrl)

        },
        async checkFileExistance(){
            var context = this;
            
            var url = `lessonnotesection/checkfile`;
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            const payload = {
                url,
                req: {
                    sectionTitle: context.form.qEditors[0].name,
                    lessonNoteId: context.form.qSelects[2].value,
                    createdBy: user.id,
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
            
            var url = `lessonnotesection/create`;
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            const payload = {
                url,
                req: {
                    fileType: context.fileType,
                    sectionTitle: context.form.qEditors[0].name,
                    content: `${context.form.qEditors[1].name}`,
                    schoolId: user.schoolId,
                    fileUrl: context.fileUrl,
                    fileName: context.fileName,
                    originalFileName: context.originalFileName,
                    createdBy: user.id,
                    lessonNoteId: context.form.qSelects[2].value,
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
                if(context.form.qFiles[0].selectedFile !== null){
                    await context.uploadFile();
                }
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
                        case "Create Lesson Note Section":
                            await context.uploadAndSaveFileUr();
                            break;
                        case "Success":
                            var user = this.$store.getters["authenticationStore/IdentityModel"];
                            if(user.schoolId === "CEO")this.$router.push('/super-admin-lesson-note-section-landing')
                            else  this.$router.push('/lesson-note-section-landing')
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
        this.$store.commit("authenticationStore/setBackRoute", '/lesson-note-section-landing');
        //context.form.clearQInputs();
        console.log("form.qEditors: ", form.qEditors)
        context.form.clearQFiles();
        context.form.qSelects[0].list = this.$store.getters["levelStore/levels"];
        context.form.qSelects[1].list = this.$store.getters["subjectStore/subjects"];
        for(let i = 0; i < context.form.qSelects.length; i++){
            context.form.qSelects[i].value = "";
        }
    }
}
</script>