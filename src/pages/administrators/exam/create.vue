<template>
    <div>
        <div class="row q-pa-sm">
            <q-card class="col-12 q-pa-sm">
                <q-bar class="q-pa-sm row bg-accent">
                    <div class="text-h6 text-primary">Exam Question</div>
                    <q-space />
                </q-bar>

                <q-card-section class="bg-primary text-accent">
                    <div class="row">
                        <!-- <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 q-pa-sm">
                            <span>
                                <p class="q-ma-none">{{ exam_vm.qSelect.label }}</p>
                                <div class="row no-wrap">
                                <q-toggle
                                    class="q-ma-none col-12"
                                    :label="exam_vm.qToggle.label"
                                    v-model="exam_vm.qToggle.name"
                                    color="accent"
                                    :false-value="toggleFalse"
                                    :true-value="toggleTrue"
                                    @input="onToggle"
                                />
                            </div>
                            </span>
                        </div> -->
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-pa-sm">
                            <span>
                                <p class="q-ma-none">{{ exam_vm.qSelectSubject.label }}</p>
                                <div class="row no-wrap">
                                <q-select
                                    class="q-ma-none col-12"
                                    color="accent" 
                                    outlined label-color="accent"
                                    option-disable="inactive"
                                    v-model="exam_vm.qSelectSubject.value"
                                    :options="exam_vm.qSelectSubject.list"
                                    option-value="id"
                                    :option-label="'type'"
                                    :name="exam_vm.qSelectSubject.value"
                                    emit-value
                                    map-options
                                    >
                                </q-select>
                            </div>
                            </span>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-pa-sm">
                            <span>
                                <p class="q-ma-none">{{ exam_vm.qSelectLevel.label }}</p>
                                <div class="row no-wrap">
                                <q-select
                                    class="q-ma-none col-12"
                                    color="accent" 
                                    outlined label-color="accent"
                                    option-disable="inactive"
                                    v-model="exam_vm.qSelectLevel.value"
                                    :options="exam_vm.qSelectLevel.list"
                                    option-value="id"
                                    :option-label="'type'"
                                    :name="exam_vm.qSelectLevel.value"
                                    emit-value
                                    map-options
                                    >
                                </q-select>
                            </div>
                            </span>
                        </div>
                        <!-- <q-btn class="col-1" outline dense flat icon="add" @click="onAddExamQuestionSession"/>
                        <q-btn class="col-1" outline dense flat icon="refresh" @click="clearExamQuestionSessions"/> -->
                    </div>
                </q-card-section>

                <q-separator />

                <q-list bordered>
                        <q-item v-for="examQuestionSession in exam_vm.examQuestionSessions" :key="examQuestionSession.id" class="q-my-sm" clickable>
                            <Form
                            v-if="examQuestionSession.isImage"
                            class="col-12 q-pa-sm"
                            :formData="examQuestionSession"
                            :examQuestionSession="examQuestionSession"
                            @onRemoveImage="onRemoveImage($event)"
                            @onClearImage="onClearImage($event)"
                            @onFileSelected="onFileSelected($event)"
                            @onFileSelected2="onFileSelected2(examQuestionSession)"/>
                            <Form
                            v-else
                            class="col-12 q-pa-sm"
                            :formData="examQuestionSession"
                            :examQuestionSession="examQuestionSession"
                            @onRemoveParagraph="onRemoveParagraph($event)"
                            @onClearParagraph="onClearParagraph($event)"/>
                        </q-item>
                </q-list>
            </q-card>
            <q-card class="col-12 q-pa-sm">
                <q-bar class="q-pa-sm row bg-accent">
                    <div class="text-h6 text-primary">Answer Options</div>
                    <q-space />
                </q-bar>
                <q-card-section class="bg-primary text-accent">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 q-pa-sm">
                            <span>
                                <p class="q-ma-none">{{ exam_vm.qSelectAnswerOption.label }}</p>
                                <div class="row no-wrap">
                                <q-select
                                    class="q-ma-none col-12"
                                    color="accent" 
                                    outlined label-color="accent"
                                    option-disable="inactive"
                                    v-model="exam_vm.qSelectAnswerOption.value"
                                    :options="exam_vm.qSelectAnswerOption.list"
                                    option-value="id"
                                    :option-label="'type'"
                                    :name="exam_vm.qSelectAnswerOption.value"
                                    emit-value
                                    map-options
                                    >
                                </q-select>
                            </div>
                            </span>
                        </div>
                        <q-space/>
                        <q-btn class="col-1" outline dense flat icon="add" @click="onAddAnswerOption"/>
                        <q-btn class="col-1" outline dense flat>{{ exam_vm.answerOptions.length }}</q-btn>
                        <q-btn class="col-1" outline dense flat icon="refresh" @click="clearAnswerOptions"/>
                    </div>
                </q-card-section>
                
                <q-separator />
                <q-list bordered>
                        <q-item v-for="answerOption in exam_vm.answerOptions" :key="answerOption.id" class="q-my-sm" clickable>
                            <Form
                            v-if="answerOption.isImage"
                            class="col-12 q-pa-sm"
                            :formData="answerOption"
                            @onRemoveImage="onRemoveImageAnswerOption($event)"
                            @onClearImage="onClearImageAnswerOption($event)"
                            @onFileSelected="onFileSelectedAnswerOption($event)"
                            @onFileSelected2="onFileSelectedAnswerOption2(answerOption)"/>
                            <Form
                            v-else
                            class="col-12 q-pa-sm"
                            :formData="answerOption"
                            @onRemoveParagraph="onRemoveParagraphAnswerOption($event)"
                            @onClearParagraph="onClearParagraphAnswerOption($event)"/>
                        </q-item>
                </q-list>
            </q-card>
        </div>
        <div 
        class="row q-pa-sm">
            <q-space />
            <q-btn class="q-ma-sm bg-accent text-primary"
            label="Cancel"
            type="button"
            size="md"
            icon="close"
            no-caps
            @click="Cancel"
            />
            <q-btn class="q-ma-sm bg-accent text-primary"
            label="Create"
            type="button"
            size="md"
            icon="save"
            no-caps
            @click="Create"
            />
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
import Form from "../../../components/Forms/Form.vue";
import MessageBox from "../../../components/dialogs/MessageBox.vue";
import { exam_vm, dialogs } from "./view_models/create-view-model";
import { post, uploadCoreValue } from "../../../store/modules/gcp-services"

export default {
    components: {
        Form,
        MessageBox,
    },
    data(){
        return {
            toggleTrue: true,
            toggleFalse: false,
            exam_vm: exam_vm,
            dialogs: dialogs,
            selectedFile: null,
            selectedFileAnswerOption: null,
            questionImageUrls: [],
            answerOptionsImageUrls: [],
            anyFormDataQuestion: false,
            anyFormDataAnswerOptions: false,
        }
    },
    methods:{
        Create(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Create Examination Question"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            if(user.schoolId === "CEO")this.$router.push('/super-admin-exam-question-landing')
            else  this.$router.push('/exam-question-landing')
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
        checkFormData(){
            var context = this;
            context.anyFormDataQuestion = false;
            context.anyFormDataAnswerOptions = false;

            for(const examQuestionSession of context.exam_vm.examQuestionSessions){
                if(examQuestionSession.qFiles.length > 0){
                    context.anyFormDataQuestion = true;
                    break;
                }
            }

            for(const answerOption of context.exam_vm.answerOptions){
                if(answerOption.qFiles.length > 0){
                    context.anyFormDataAnswerOptions = true;
                    break;
                }
            }

        },
        async uploadQuestionImages(){
            console.log("uploadQuestionImages started")
            var context = this;
            const formData = new FormData();
            for(let i = 0; i < context.exam_vm.examQuestionSessions.length; i++){
                formData.append('files', context.exam_vm.examQuestionSessions[i].qFiles[0].selectedFile);
            }
            
            var url = `examquestion/upload`;
            const payload = {
                url,
                req: formData,
            }

            console.log("payload: ", payload)
            var response = await post(payload)
            
            context.questionImageUrls = response.data;
            console.log("questionImageUrls: ", context.questionImageUrls)
            console.log("uploadQuestionImages completed")

        },
        async uploadAnswerOptionsImages(){
            console.log("uploadAnswerOptionsImages started")
            var context = this;
            const formData = new FormData();
            for(let i = 0; i < context.exam_vm.answerOptions.length; i++){
                formData.append('files', context.exam_vm.answerOptions[i].qFiles[0].selectedFile);
            }
            
            var url = `examquestion/upload`;
            const payload = {
                url,
                req: formData,
            }

            console.log("payload: ", payload)
            var response = await post(payload)
            
            context.answerOptionsImageUrls = response.data;
            console.log("answerOptionsImageUrls: ", context.answerOptionsImageUrls)
            console.log("uploadAnswerOptionsImages completed")

        },
        async save(){
            console.log("save started")
            var context = this;
            
            var url = `examquestion/create`;
            var user = this.$store.getters["authenticationStore/IdentityModel"];

            console.log("context.exam_vm.examQuestionSessions: ", context.exam_vm.examQuestionSessions)
            console.log("context.exam_vm.qSelectAnswerOptions: ", context.exam_vm.answerOptions)

            const payload = {
                url,
                req: {
                    subjectId: context.exam_vm.qSelectSubject.value,
                    levelId: context.exam_vm.qSelectLevel.value,
                    question: context.exam_vm.examQuestionSessions[0].qInputs[0].name,
                    cloudImageUrl: context.questionImageUrls.length > 0 ? context.questionImageUrls[0].url : "",
                    cloudImageName: context.questionImageUrls.length > 0 ? context.questionImageUrls[0].fileName : "",
                    originalImageName: context.questionImageUrls.length > 0 ? context.questionImageUrls[0].originalFileName : "",

                    /* questionSession: context.exam_vm.examQuestionSessions.map((row, i) => {

                        const ans = row.isImage ? {
                            question: row.qInputs[0].name,
                            cloudImageUrl: questionImageUrls[i].url,
                            cloudImageName: questionImageUrls[i].fileName,
                            originalImageName: questionImageUrls[i].originalFileName,
                        }:{
                            question: row.qInputs[0].name,
                        }
                        return ans;
                    })[0], */

                    answerOptions: context.exam_vm.answerOptions.map((row, i) => {

                        const ans = row.isImage ? {
                            answer: row.qInputs[0].name,
                            cloudImageUrl: context.answerOptionsImageUrls[i].url,
                            cloudImageName: context.answerOptionsImageUrls[i].fileName,
                            originalImageName: context.answerOptionsImageUrls[i].originalFileName,
                        }:{
                            answer: row.qInputs[0].name,
                        }
                        return ans;
                    }),
                    schoolId: user.schoolId,
                    createdBy: user.id,
                }
            }

            console.log("payload: ", payload)
            var response = await post(payload)

            context.dialogs[0].isVisible = false;
            if(response.data){
                context.dialogs[1].isVisible = true;
            }else{
                context.dialogs[2].message = "Error while saving examination question";
                context.dialogs[2].isVisible = true;
            }

            console.log("save completed")

        },
        async CreateAction(){
            var context = this;
            context.checkFormData();
            if(context.anyFormDataQuestion){
                await context.uploadQuestionImages();
            }
            
            if(context.anyFormDataAnswerOptions){
                await context.uploadAnswerOptionsImages();
            }
            
            await context.save();

        },
        async okDialog(payload){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Create Examination Question":
                            await context.CreateAction();
                            break;
                        case "Success":
                            var user = this.$store.getters["authenticationStore/IdentityModel"];
                            if(user.schoolId === "CEO")this.$router.push('/super-admin-exam-question-landing')
                            else  this.$router.push('/exam-question-landing')
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        onFileSelected(payload){
            var context = this;
            context.selectedFile = payload.selectedFile; 
        },
        onFileSelected2(examQuestionSession){
            var context = this;
            const selectedIndex = examQuestionSession.id - 1;
            context.exam_vm.examQuestionSessions[selectedIndex].qFiles[0].selectedFile = context.selectedFile;
            let reader  = new FileReader();

            reader.addEventListener("load", function () {
                console.log("load")
                context.exam_vm.examQuestionSessions[selectedIndex].qFiles[0].showPreview = false;
                context.exam_vm.examQuestionSessions[selectedIndex].qFiles[0].imagePreview = reader.result;
                context.exam_vm.examQuestionSessions[selectedIndex].qImages[0].imageUrl = reader.result;
            }.bind(context), false);

            if(context.exam_vm.examQuestionSessions[selectedIndex].qFiles[0].selectedFile){
                if (/\.(jpe?g|png|gif)$/i.test(context.exam_vm.examQuestionSessions[selectedIndex].qFiles[0].selectedFile.name)) {
						reader.readAsDataURL(context.exam_vm.examQuestionSessions[selectedIndex].qFiles[0].selectedFile);
				}else{
                    alert("Wrong image format. Only supports .jpg, .jpeg, .png and .gif")
                }
            }
        },
        onFileSelectedAnswerOption(payload){
            var context = this;
            context.selectedFileAnswerOption = payload.selectedFile; 
        },
        onFileSelectedAnswerOption2(answerOption){
            var context = this;
            const selectedIndex = answerOption.id - 1;
            context.exam_vm.answerOptions[selectedIndex].qFiles[0].selectedFile = context.selectedFileAnswerOption;
            let reader  = new FileReader();

            reader.addEventListener("load", function () {
                context.exam_vm.answerOptions[selectedIndex].qFiles[0].showPreview = false;
                context.exam_vm.answerOptions[selectedIndex].qFiles[0].imagePreview = reader.result;
                context.exam_vm.answerOptions[selectedIndex].qImages[0].imageUrl = reader.result;
            }.bind(context), false);

            if(context.exam_vm.answerOptions[selectedIndex].qFiles[0].selectedFile){
                if (/\.(jpe?g|png|gif)$/i.test(context.exam_vm.answerOptions[selectedIndex].qFiles[0].selectedFile.name)) {
						reader.readAsDataURL(context.exam_vm.answerOptions[selectedIndex].qFiles[0].selectedFile);
				}else{
                    alert("Wrong image format. Only supports .jpg, .jpeg, .png and .gif")
                }
            }
        },
        onToggle(payload){
            var context = this;
            console.log("Payload: ", payload)
            if(payload === true){
                let check = false;
                let i = -1;
                for(const examQuestionSession of context.exam_vm.examQuestionSessions){
                    i++;
                    if(examQuestionSession.isImage === true){
                        check = true;
                        break;
                    }
                }
                console.log("i: ", i)
                if(check) context.exam_vm.examQuestionSessions.splice(i,1)
                context.exam_vm.qSelect.value = "Image";
                context.onAddExamQuestionSessionInternal();
            }
            //context.exam_vm.qSelect.value = "Paragraph";

        },
        onAddExamQuestionSession(){
            var context = this;
            context.exam_vm.qSelect.value = "Image";
            context.onAddExamQuestionSessionInternal();
        },
        onAddExamQuestionSessionInternal(){
            var context = this;
            context.exam_vm.examQuestionSessions = [];
            if(context.exam_vm.qSelect.value == "Paragraph"){
                const form = {
                    id: 1,
                    title: "",
                    isImage: false,
                    qSelects: [],
                    qInputs: [
                        { label: "Question", name: "", type: "textarea",
                        Template: {
                            sn: 0,
                            iconName: "",
                            visible: false,
                        }},
                    ],
                    qFiles: [],
                    qBtns: [
                        {label: "Clear", name: "onClearParagraph", icon: "clear"},
                        {label: "Remove", name: "onRemoveParagraph", icon: "remove"},
                    ],
                    qDates: [],
                    GroupedCheckBoxes: [],
                    clearQInputs(){
                        var i = 0;
                        for (i = 0; i < this.qInputs.length; i++){
                            this.qInputs[i].name = "";
                        }
                    },
                }
                context.exam_vm.examQuestionSessions.push(form);
            }else{
                const form = {
                    id: 1,
                    title: "",
                    isImage: true,
                    qSelects: [],
                    qInputs: [
                        { label: "Question", name: "", type: "textarea",
                        Template: {
                            sn: 0,
                            iconName: "",
                            visible: false,
                        }},
                    ],
                    qFiles: [
                        { label: "Image", name: "", type: "file",
                        selectedFile: null,
                        showPreview: false,
                        imagePreview: '',
                        files: [],
                        Template: {
                            sn: 0,
                            iconName: "",
                            visible: false,
                        }}
                    ],
                    qImages:[
                        {label:"Image Preview", imageUrl: ""}
                    ],
                    qBtns: [
                        {label: "Clear", name: "onClearImage", icon: "clear"},
                        {label: "Remove", name: "onRemoveImage", icon: "remove"},
                    ],
                    qDates: [],
                    GroupedCheckBoxes: [],
                    clearQFiles(){
                        var i = 0;
                        for (i = 0; i < this.qFiles.length; i++){
                            this.qFiles[i].name = "";
                            this.qFiles[i].selectedFile = null;
                            this.qFiles[i].showPreview = false;
                            this.qFiles[i].imagePreview = '';
                        }
                    },
                    clearQImages(){
                        var i = 0;
                        for (i = 0; i < this.qImages.length; i++){
                            this.qImages[i].imageUrl = '';
                        }
                    },
                    clearQInputs(){
                        var i = 0;
                        for (i = 0; i < this.qInputs.length; i++){
                            this.qInputs[i].name = "";
                        }
                    },
                }
                context.exam_vm.examQuestionSessions.push(form);
            }  
        },
        onAddAnswerOption(){
            var context = this;
            if(context.exam_vm.qSelectAnswerOption.value == "Paragraph"){
                const form = {
                    id: context.exam_vm.answerOptions.length + 1,
                    title: "",
                    isImage: false,
                    qSelects: [],
                    qInputs: [
                        { label: "Answer", name: "", type: "text",
                        Template: {
                            sn: 0,
                            iconName: "",
                            visible: false,
                        }},
                    ],
                    qFiles: [],
                    qBtns: [
                        {label: "Clear", name: "onClearParagraph", icon: "clear"},
                        {label: "Remove", name: "onRemoveParagraph", icon: "remove"},
                    ],
                    qDates: [],
                    GroupedCheckBoxes: [],
                    clearQInputs(){
                        var i = 0;
                        for (i = 0; i < this.qInputs.length; i++){
                            this.qInputs[i].name = "";
                        }
                    },
                }
                context.exam_vm.answerOptions.push(form);
            }else{
                const form = {
                    id: context.exam_vm.answerOptions.length + 1,
                    title: "",
                    isImage: true,
                    qSelects: [],
                    qInputs: [
                        { label: "Answer", name: "", type: "text",
                        Template: {
                            sn: 0,
                            iconName: "",
                            visible: false,
                        }},
                    ],
                    qFiles: [
                        { label: "Image", name: "", type: "file",
                        selectedFile: null,
                        showPreview: false,
                        imagePreview: '',
                        files: [],
                        Template: {
                            sn: 0,
                            iconName: "",
                            visible: false,
                        }}
                    ],
                    qImages:[
                        {label:"Image Preview", imageUrl: ""}
                    ],
                    qBtns: [
                        {label: "Clear", name: "onClearImage", icon: "clear"},
                        {label: "Remove", name: "onRemoveImage", icon: "remove"},
                    ],
                    qDates: [],
                    GroupedCheckBoxes: [],
                    clearQFiles(){
                        var i = 0;
                        for (i = 0; i < this.qFiles.length; i++){
                            this.qFiles[i].name = "";
                            this.qFiles[i].selectedFile = null;
                            this.qFiles[i].showPreview = false;
                            this.qFiles[i].imagePreview = '';
                        }
                    },
                    clearQImages(){
                        var i = 0;
                        for (i = 0; i < this.qImages.length; i++){
                            this.qImages[i].imageUrl = '';
                        }
                    },
                    clearQInputs(){
                        var i = 0;
                        for (i = 0; i < this.qInputs.length; i++){
                            this.qInputs[i].name = "";
                        }
                    },
                }
                context.exam_vm.answerOptions.push(form);
            }  
        },
        onRemove(examQuestionSession){
            var context = this;
            context.exam_vm.examQuestionSessions.splice(examQuestionSession.id-1, 1);
            var i = 0;
            for(i = 0; i < context.exam_vm.examQuestionSessions.length; i++){
                context.exam_vm.examQuestionSessions[i].id = i+1;
            }
        },
        onRemoveAnswerOption(answerOption){
            var context = this;
            context.exam_vm.answerOptions.splice(answerOption.id-1, 1);
            var i = 0;
            for(i = 0; i < context.exam_vm.answerOptions.length; i++){
                context.exam_vm.answerOptions[i].id = i+1;
            }
        },
        clearExamQuestionSessions(){
            var context = this;
            context.exam_vm.examQuestionSessions = [];
        },
        clearAnswerOptions(){
            var context = this;
            context.exam_vm.answerOptions = [];
        },
        onRemoveParagraph(examQuestionSession){
            var context = this;
            context.onRemove(examQuestionSession);
        },
        onClearParagraph(examQuestionSession){
            var context = this;
            var i = 0;
            for(i = 0; i < context.exam_vm.examQuestionSessions.length; i++){
                if(context.exam_vm.examQuestionSessions[i].id === examQuestionSession.id){
                    context.exam_vm.examQuestionSessions[i].clearQInputs();
                }
            }
        },
        onRemoveImage(examQuestionSession){
            var context = this;
            context.onRemove(examQuestionSession);
        },
        onClearImage(examQuestionSession){
            var context = this;
            var i = 0;
            for(i = 0; i < context.exam_vm.examQuestionSessions.length; i++){
                if(context.exam_vm.examQuestionSessions[i].id === examQuestionSession.id){
                    context.exam_vm.examQuestionSessions[i].clearQInputs();
                    context.exam_vm.examQuestionSessions[i].clearQFiles();
                    context.exam_vm.examQuestionSessions[i].clearQImages();
                }
            }
        },
        onRemoveParagraphAnswerOption(answerOption){
            var context = this;
            context.onRemoveAnswerOption(answerOption);
        },
        onClearParagraphAnswerOption(answerOption){
            var context = this;
            var i = 0;
            for(i = 0; i < context.exam_vm.answerOptions.length; i++){
                if(context.exam_vm.answerOptions[i].id === answerOption.id){
                    context.exam_vm.answerOptions[i].clearQInputs();
                }
            }
        },
        onRemoveImageAnswerOption(answerOption){
            var context = this;
            context.onRemoveAnswerOption(answerOption);
        },
        onClearImageAnswerOption(answerOption){
            var context = this;
            var i = 0;
            for(i = 0; i < context.exam_vm.answerOptions.length; i++){
                if(context.exam_vm.answerOptions[i].id === answerOption.id){
                    context.exam_vm.answerOptions[i].clearQInputs();
                    context.exam_vm.answerOptions[i].clearQFiles();
                    context.exam_vm.answerOptions[i].clearQImages();
                }
            }
        },
        initializeData(){

            const context = this;
            const list = ["Paragraph", "Image"];
            context.exam_vm.qSelect.list = list.map((row) => {
                return {
                    id: row,
                    value: row,
                    label: row,
                    type: row,
                    dataType: row,
                }
            })

            context.exam_vm.qSelectAnswerOption.list = list.map((row) => {
                return {
                    id: row,
                    value: row,
                    label: row,
                    type: row,
                    dataType: row,
                }
            })

            context.exam_vm.qSelectSubject.list = this.$store.getters["subjectStore/subjects"].map((row) => {
                return {
                    ...row,
                    label: row.type, 
                    value: row.id,
                }
            })

            context.exam_vm.qSelectLevel.list = this.$store.getters["levelStore/levels"].map((row) => {
                return {
                    ...row,
                    label: row.type, 
                    value: row.id,
                }
            })

            context.exam_vm.examQuestionSessions = [];
            context.exam_vm.answerOptions = [];
            context.onAddExamQuestionSession();
        }
    },
    created(){
        var context = this;
        context.initializeData();        
    }
}
</script>