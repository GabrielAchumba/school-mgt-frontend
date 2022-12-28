<template>
  <div class="q-pa-sm">
    <div v-if="isMobile">
      <div 
      class="row">
          <LevelSelector class="col-12"
          :qSelect="exam_vm.qSelectLevel"
          @onLevelValueChange="onLevelValueChange($event)"/>
          <SubjectSelector class="col-12"
          :qSelect="exam_vm.qSelectSubject"
          @onSubjectValueChange="onSubjectValueChange($event)"/>
          <Form
          class="col-12"
            :formData="questionsForms"
            @linkClick="selectPastQuestions($event)"
            @qListTemplateAction="filterPastQuestions($event)"/>
          <Form
            class="col-12"
            :formData="form"
            @Cancel="Cancel($event)"/>
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
            @linkClick="selectPastQuestions($event)"
            @qListTemplateAction="filterPastQuestions($event)"/>
        </div>
      </template>

      <template v-slot:after>
        <Form
        :formData="form"
        @Start="Start($event)"
        @Cancel="Cancel($event)"/>
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
  </div>
</template>

<script>
import Form from "../../../components/Forms/Form.vue";
import  MessageBox from "../../../components/dialogs/MessageBox.vue";
import { qSelectLevel } from "./view_models/selectors-view-model";
import LevelSelector from "./level-selector.vue";
import SubjectSelector from "./subject-selector.vue";
import  { form, dialogs, questionsForms } from "./view_models/exam-rules-view-model";
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
        }
    },
    components:{
        Form,
        MessageBox,
        LevelSelector,
        SubjectSelector,
    },
    data(){
        return {
            width: 400, 
            splitterModel: 30, // start at 30%,
            isMobile: false,
            form: form,
            dialogs: dialogs,
            selectedSubject: null,
            selectedLevel: null,
            exam_vm: exam_vm,
            questionsForms: questionsForms,
            selectedPastQuestions: {},
        }
    },
    methods:{
        async onLevelValueChange(payload){
            console.log("selectedLevel: ", payload)
            var context = this;
            context.selectedLevel = payload.qSelect;
            context.exam_vm.qSelectSubject.value = "";
            context.questionsForms.qLists = [];
            await context.FetchExamQuestions();
        },
        async onSubjectValueChange(payload){
            console.log("selectedSubject: ", payload)
            var context = this;
            context.selectedSubject = payload.qSelect;
            context.questionsForms.qLists = [];
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

            context.exam_vm.qSelectSubject.list = this.$store.getters["subjectStore/subjects"]
            .sort((a, b) => a.type.toLowerCase().localeCompare(b.type.toLowerCase()))
            .map((row) => {
                return {
                    ...row,
                    label: row.type, 
                    value: row.id,
                }
            })
            context.exam_vm.qSelectSubject.value = "";


            context.exam_vm.qSelectLevel.list = this.$store.getters["levelStore/levels"]
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
                    const response = await post(payload);
                    console.log("response.data: ", response.data);

                    context.questionsForms.qLists = [];
                    const items = response.data.map((row) => {
                        return {
                            name: `${context.selectedSubject.type}_${row.date}`,
                            address: "",
                            route: "/exam-rules",
                            letter: context.selectedSubject.type.charAt(0),
                            subjectId: row.subjectId,
                            levelId: row.levelId,
                            schoolId: row.schoolId,
                            createdAt: row.createdAt,
                            examDay: row.examDay,
                            examMonth: row.examMonth,
                            examYear: row.examYear,

                        }
                    });

                    console.log("items: ", items) 

                    context.questionsForms.qLists.push({
                        label: "Past Questions",
                        items: [...items],
                        originalItems: [...items],
                    })

                    //this.$store.commit("authenticationStore/setShowSpinner", false);
                    
                }catch{
                    //this.$store.commit("authenticationStore/setShowSpinner", false);
                }
            }

        },
        filterPastQuestions(payload){
            var context = this;
            console.log("payload: ", payload)
            switch(payload.label){
                case "Past Questions":
                    console.log("payload.originalItems: ", payload.originalItems)
                    console.log("payload.listBoxSearchModel: ", payload.listBoxSearchModel)
                    context.questionsForms.qLists[0].items = customFilter(payload.originalItems, payload.listBoxSearchModel);
                    console.log("context.questionsForms.qLists.items: ", context.questionsForms.qLists[0].items)
                    break;
            }
        },
        async viewQuestions(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            this.$store.commit("authenticationStore/setShowSpinner", true);

            const payload = {
                url: "examquestion/selectedPastQuestions",
                req: {
                    subjectId: context.selectedSubject.value,
                    levelId: context.selectedLevel.value,
                    schoolId: user.schoolId,
                    examYear: context.selectedPastQuestions.examYear,
                    examMonth: context.selectedPastQuestions.examMonth,
                    examDay: context.selectedPastQuestions.examDay,
                }
            }

            this.$store.commit("examStore/setYear", payload.req.examYear);

            try{
                 const response = await post(payload);
                const questions = response.data.map((row) => {
                     return {
                         ...row,
                         question: row.question,
                         subject: context.selectedSubject.type,
                         level: context.selectedLevel.type,
                     }
                 })

                console.log("questions: ", questions);
                this.$store.commit("examStore/SetQuestions", questions);
                this.$store.commit("authenticationStore/setShowSpinner", false);
                
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
        context.initializeData()
    }
    
}
</script>
