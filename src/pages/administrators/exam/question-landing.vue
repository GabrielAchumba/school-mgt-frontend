<template>
  <div class="q-pa-sm">
      <q-scroll-area style="height: 80vh; max-width: 100%;">
    <div v-if="setIsResponsive">
      <div 
      class="row">
          <LevelSelector 
          v-show="!isQuestions"
          class="col-12"
          :qSelect="exam_vm.qSelectLevel"
          @onLevelValueChange="onLevelValueChange($event)"/>
          <SubjectSelector 
          v-show="!isQuestions"
          class="col-12"
          :qSelect="exam_vm.qSelectSubject"
          @onSubjectValueChange="onSubjectValueChange($event)"/>
          <Form
          v-show="!isQuestions"
          class="col-12"
            :formData="questionsForms"
            @viewQuestions="viewQuestions($event)"
            @qListTemplateAction="filterPastQuestions($event)"/>
          <Form
          v-show="isQuestions"
          class="col-12"
            :formData="selectedQuestionsForms"
            @updateExam="updateExam($event)"
            @deleteExam="deleteExam($event)"
            @qListAddItemAction="createExam($event)"
            @isQuestionsAction="isQuestionsAction($event)"/>
      </div>
    </div>
    <div v-else>
    <q-resize-observer @resize="onResize" :debounce="0" />

    <q-splitter
      id="photos"
      v-model="splitterModel"
      :limits="[0, 100]"
      :style="splitterStyle"
      before-class="overflow-hidden"
      after-class="overflow-hidden"
    >

      <template v-slot:before>
        <div class="row">
          <LevelSelector class="col-12"
          :qSelect="exam_vm.qSelectLevel"
          @onLevelValueChange="onLevelValueChange($event)"/>
          <SubjectSelector class="col-12"
          :qSelect="exam_vm.qSelectSubject"
          @onSubjectValueChange="onSubjectValueChange($event)"/>
          <Form
            class="col-12"
            :formData="questionsForms"
            @viewQuestions="viewQuestions($event)"
            @qListTemplateAction="filterPastQuestions($event)"
            @qListAddItemAction="createExam($event)"/>
        </div>
      </template>

      <template v-slot:after>
          <Table
            class="col-12"
            :table_VM="tableVM"
            :tableRows="tableVM.rows"
            @dataImport="dataImport($event)"
            @createExam="createExam($event)"
            @updateExam="updateExam($event)"
            @deleteExam="deleteExam($event)"
            @deleteAllItems="deleteQuestions($event)"/>
      </template>

    </q-splitter>
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
        </q-scroll-area>
  </div>
</template>

<script>
import Form from "../../../components/Forms/Form.vue";
import Table from "../../../components/Tables/Table.vue";
import  MessageBox from "../../../components/dialogs/MessageBox.vue";
import { qSelectLevel } from "./view_models/selectors-view-model";
import LevelSelector from "./level-selector.vue";
import SubjectSelector from "./subject-selector.vue";
import  { form, dialogs, questionsForms, selectedQuestionsForms } from "./view_models/exam-rules-view-model";
import { post } from "../../../store/modules/gcp-services";
import { exam_vm } from "./view_models/create-view-model";
import { customFilter } from "../../../components/Utils/searchListUtil";

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
        },
        splitterStyle(){
            var context = this;
            return {
            height: `100vh`,
            width: `${context.width}px`,
            }
        },
        setIsResponsive(){
            const width = window.innerWidth;
            if(width < 700) return true;
            else return false;
        }
    },
    components:{
        Form,
        MessageBox,
        LevelSelector,
        SubjectSelector,
        Table,
    },
    data(){
        return {
            isQuestions: false,
            width: 400, 
            splitterModel: 30, // start at 30%,
            isMobile: false,
            form: form,
            selectedSubject: null,
            selectedLevel: null,
            exam_vm: exam_vm,
            questionsForms: questionsForms,
            selectedQuestionsForms: selectedQuestionsForms,
            selectedPastQuestions: {},
            selectedExam: {},
            tableVM: {
                title: "Examination",
                columns: [
                    { name: "sn", label: "SN", field: "", align: "left", type: "text"},
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "question", label: "Question", field: "", align: "left", type: "text"},
                    { name: "subject", label: "Subject", field: "", align: "left", type: "text"},
                    { name: "level", label: "Level", field: "", align: "left", type: "text"},
                ],
                rows: [],
                separator: "cell",
                dataImport: "dataImport",
                createItem: "createExam",
                updateItem: "updateExam",
                deleteItem: "deleteExam",
                createItemUrl: "/create-exam-question",
                updateItemUrl: "/update-exam-question",
                importURL: "/import-exam-questions",
            },
            dialogs:[
                { title: "Delete Exam", isVisible: false, message: "Do you want to delete a exam",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Exam deleted successfully!",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Failure", isVisible: false, message: "",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Delete Questions", isVisible: false, message: "Do you want to delete questions",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Delete Success", isVisible: false, message: "Questions deleted successfully!",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Delete Failure", isVisible: false, message: "",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
            ],
            ids: [],
        }
    },
    methods:{
        isQuestionsAction(){
            var context = this;
            context.isQuestions = context.isQuestions === true ? false : true;

        },
        dataImport(){
            var context = this;
            console.log(context.tableVM.importURL)
            this.$router.push(context.tableVM.importURL);
        },
        createExam(){
            var context = this;
            console.log(context.tableVM.createItemUrl)
            this.$router.push(context.tableVM.createItemUrl);
        },
        updateExam(selectedExam){
            var context = this;
            this.$store.commit('examStore/SetSelectedExam', selectedExam)
            this.$router.push(context.tableVM.updateItemUrl);
        },
        deleteExam(selectedExam){
            var context = this;
            context.selectedExam = selectedExam;
            console.log(context.selectedExam)
            context.dialogs[0].isVisible = true;
        },
        clearData(){
            var context = this;
            context.questionsForms.qLists = [];
            context.tableVM.rows = [];
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
        },
        async onLevelValueChange(payload){
            console.log("selectedLevel: ", payload)
            var context = this;
            context.selectedLevel = payload.qSelect;
           context.exam_vm.qSelectSubject.value = "";
           context.clearData();
           
        },
        async onSubjectValueChange(payload){
            console.log("selectedSubject: ", payload)
            var context = this;
            context.selectedSubject = payload.qSelect;
            context.clearData();
            await context.FetchExamQuestions();
        },
        Cancel(){
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            if(user.schoolId === "CEO")this.$router.push('/super-admin-exam-landing')
            else  this.$router.push('/exam-landing')
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
        async startExamination(){
            var context = this;
            await context.viewQuestions();
            this.$router.push('/start-exam')
        },
        selectPastQuestions(payload){
            const context = this;
            context.selectedPastQuestions = payload;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Start Examination"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        deleteQuestions(checkBoxModels){
            var context = this;
            context.ids = [];
            let i = -1;
            for(const checkBoxModel of checkBoxModels){
                i++;
                if(checkBoxModel === "Agreed") context.ids.push(context.tableVM.rows[i]._id)
            }
            console.log("context.ids: ", context.ids);
            context.dialogs[3].isVisible = true;
        },
        async deleteAll(){
            var context = this;
            
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            var url = `examquestion/deletemany`;
            const payload = {
                url,
                req: {
                    ids: context.ids,
                    schoolId: user.schoolId,
                }
            }

            console.log("payload: ", payload)
            var response = await post(payload)
            console.log("response: ", response)
            context.dialogs[3].isVisible = false;

            if(response.status === 201){
                context.dialogs[4].isVisible = true;
            }else{
                context.dialogs[5].message = "Could not complete the deleting process. Error occured while deleting questions";
                context.dialogs[5].isVisible = true;
            }

        },
        async okDialog(payload){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Start Examination":
                            await context.startExamination();
                            break;
                        case "Delete Questions":
                            await context.deleteAll();
                            break;
                        case  "Delete Success":
                            context.dialogs[i].isVisible = false;
                            await context.viewQuestions(context.selectedPastQuestions)
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        initializeData(){

            var context = this;

            //objArray.sort((a, b) => a.DepartmentName.toLowerCase().localeCompare(b.DepartmentName.toLowerCase()))
            context.questionsForms.qLists = [];

            const subjects = this.$store.getters["subjectStore/subjects"];
            context.exam_vm.qSelectSubject.list = subjects
            .sort((a, b) => a.type.toLowerCase().localeCompare(b.type.toLowerCase()))
            .map((row) => {
                return {
                    ...row,
                    label: row.type, 
                    value: row.id,
                }
            })
            context.exam_vm.qSelectSubject.value = "";

            const levels = this.$store.getters["levelStore/levels"];
            context.exam_vm.qSelectLevel.list = levels
            .sort((a, b) => a.type.toLowerCase().localeCompare(b.type.toLowerCase()))
            .map((row) => {
                return {
                    ...row,
                    label: row.type, 
                    value: row.id,
                }
            })
            context.exam_vm.qSelectLevel.value = "";
            this.$store.commit("authenticationStore/setShowSpinner", false);
            console.log("context.exam_vm: ", context.exam_vm)
        },
        async FetchExamQuestions(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            //this.$store.commit("authenticationStore/setShowSpinner", true);
            console.log("context.selectedSubject: ", context.selectedSubject)
            console.log("context.selectedLevel: ", context.selectedLevel);

            if(context.selectedSubject && context.selectedLevel){

                const payload = {
                    url: "examquestion/findAll",
                    req: {
                        subjectId: context.selectedSubject.value,
                        levelId: context.selectedLevel.value,
                        schoolId: user.schoolId,
                    }
                }

                try{
                    console.log("payload: ", payload)
                    const response = await post(payload);
                    console.log("response.data: ", response.data);

                    context.questionsForms.qLists = [];
                    const items = response.data.map((row) => {
                        return {
                            name: `${context.selectedSubject.type} ${row.examYear}`,
                            address: "",
                            route: "/exam-rules",
                            letter: `${row.examYear}`,   //context.selectedSubject.type.charAt(0),
                            subjectId: row.subjectId,
                            levelId: row.levelId,
                            schoolId: row.schoolId,
                            createdAt: row.createdAt,
                            examDay: row.examDay,
                            examMonth: row.examMonth,
                            examYear: row.examYear,

                        }
                    });

                    //console.log("items: ", items) 

                    context.questionsForms.qLists.push({
                        label: "Past Questions",
                        items: [...items],
                        originalItems: [...items],
                        qBtns: [
                            {label: "View", name: "viewQuestions", icon: "view"},
                        ]
                    })
                    
                }catch{
                    //this.$store.commit("authenticationStore/setShowSpinner", false);
                }
            }

        },
        filterPastQuestions(payload){
            var context = this;
            switch(payload.label){
                case "Past Questions":
                    context.questionsForms.qLists[0].items = customFilter(payload.originalItems, payload.listBoxSearchModel);
                    break;
            }
        },
        async viewQuestions(data){
            var context = this;
            context.selectedPastQuestions = data;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            this.$store.commit("authenticationStore/setShowSpinner", true);
            context.tableVM.title = `${context.selectedLevel.type} ${data.name}`;

            const payload = {
                url: "examquestion/selectedPastQuestions",
                req: {
                    subjectId: context.selectedSubject.value,
                    levelId: context.selectedLevel.value,
                    schoolId: user.schoolId,
                    examYear: data.examYear,
                    examMonth: data.examMonth,
                    examDay: data.examDay,
                }
            }

            this.$store.commit("examStore/setYear", payload.req.examYear);

            try{
                 const response = await post(payload);
                 //console.log("result: ", response.data)
                 context.tableVM.rows = response.data.map((row, i) => {
                     return {
                         sn: i+1,
                         ...row,
                         question: row.question,
                         subject: context.selectedSubject.type,
                         level: context.selectedLevel.type,
                         route: "/exam-question-landing"
                     }
                 })

                 //console.log("context.tableVM.rows: ", context.tableVM.rows)

                 context.selectedQuestionsForms.qLists = [];
                 //style="overflow-wrap: break-word"
                    const items = response.data.map((row, i) => {
                        return {
                            ...row,
                            name: `<blockquote>${row.question}</blockquote>`,
                            address: "",
                            route: "",
                            letter: `${i+1}`,
                            label: i,

                        }
                    });

                    console.log("items: ", items) 
                    context.selectedQuestionsForms.title = context.tableVM.title;
                    context.selectedQuestionsForms.qLists.push({
                        label: context.tableVM.title,
                        items: [...items],
                        originalItems: [...items],
                        qBtns: [
                            {label: "Edit", name: "updateExam", icon: "update"},
                            {label: "Delete", name: "deleteExam", icon: "delete"},
                        ]
                    })
                
                this.$store.commit('examStore/SetExams', context.tableVM.rows);
                this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
                this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
                this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
                this.$store.commit("authenticationStore/setShowSpinner", false);
                context.isQuestions = true;
                
            }catch{
                this.$store.commit("authenticationStore/setShowSpinner", false);
            }
        

        },
        onResize (info) {
        var context = this;
        context.width = info.width;
        },
        onResizePage(e) {
                const width = window.innerWidth;
                var context = this;
                if(width < 700) context.isMobile = true;
                else context.isMobile = false;
        },
    },
    created(){
        var context = this;
        window.addEventListener("resize", context.onResizePage);
        var user = this.$store.getters["authenticationStore/IdentityModel"]
        if(user.schoolId === "CEO"){
            context.tableVM.createItemUrl = "/super-admin-create-exam-question";
            context.tableVM.updateItemUrl = "/super-admin-update-exam-question";
            context.tableVM.importURL = "/super-admin-import-exam-questions";
        }
        this.$store.commit("authenticationStore/setActiveColumns", []);
        this.$store.commit("authenticationStore/setActiveRows", []);
        this.$store.commit("authenticationStore/setNewRows", []);
        context.initializeData()
        this.$store.commit("authenticationStore/setActiveRoute", "exam");
        this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
        this.$store.commit("authenticationStore/setImportURL", context.tableVM.importURL);
        this.$store.commit("authenticationStore/setIsError", false);
        this.$store.commit("authenticationStore/setErrorMessages", "");
        this.$store.commit("authenticationStore/setPageTitle", "Past Questions")
    }
    
}
</script>
