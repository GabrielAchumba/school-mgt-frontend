<template>
    <div class="q-pa-sm">
        <ExcelImport
        :title="title"
        :applicationColumns="applicationColumns"
        @saveTable="Create($event)"/>
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
import ExcelImport from "../../../components/DataImport/ExcelImport/excel-import-main.vue";
import { post } from "../../../store/modules/gcp-services";
import { dialogs } from "./view_models/import-view-model";
import { loadSubjects } from "../subject/utils";
import { loadLevels } from "../level/utils";

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
        ExcelImport,
        MessageBox,
    },
    data(){
        return {
            title: "Import Questions",
            appVariables: [
                {variableTitle: "Subject", variableName: "subject"},
                {variableTitle: "Level", variableName: "level"},
                {variableTitle: "Question", variableName: "question"},
                {variableTitle: "Option A", variableName: "optionA"},
                {variableTitle: "Option B", variableName: "optionB"},
                {variableTitle: "Option C", variableName: "optionC"},
                {variableTitle: "Option D", variableName: "optionD"},
                {variableTitle: "Option E", variableName: "optionE"},
                {variableTitle: "Option F", variableName: "optionF"},
                {variableTitle: "Option G", variableName: "optionG"},
                {variableTitle: "Examination Date", variableName: "examinationDate"}
            ],
            applicationColumns: [],
            dialogs: dialogs,
            tableRows: [],
        }
    },
    methods:{
        Create(tableRows){
            const context = this;
            context.tableRows = tableRows;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Create Questions"){
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
        setWorkSheetColumns(){
            var context = this;
            const qSelect = { label: "", value: "", type: "text", 
                            list: [], actionName: "referedByAction", visible: true }

            qSelect.list = context.appVariables.map((row) => {
                return {
                    type: row.variableTitle,
                    value: row.variableTitle,
                    label: row.variableTitle,
                    variableName: row.variableName,
                }
            })
            for(let i = 0; i < context.appVariables.length; i++){
                context.applicationColumns.push({...qSelect})
                context.applicationColumns[i].id = `Application Column ${i+1}`;
                context.applicationColumns[i].value =  context.applicationColumns[i].list[i].value;
                context.applicationColumns[i].sn = i;
            }

            console.log("applicationColumns: ", context.applicationColumns);
        },
        async createQuestions(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"];

            const { result: subjects } = await loadSubjects(user.schoolId);
            const { result: levels } = await loadLevels(user.schoolId);

            console.log("subjects: ", subjects)
            console.log("levels: ", levels)

            let questions = [];
            let check = false;
            let answerOptions = [];
            console.log("context.tableRows; ", context.tableRows)
            for(const row of context.tableRows) {
                const newRow = {}
                answerOptions = [];
                const columns = Object.keys(row);
                for (const column of columns){
                    if(`${column}` === "Question" || `${column}` === "Subject" ||
                    `${column}` === "Level"){
                        const field = `${column}`
                        let appVariable = context.appVariables.find(o => o.variableTitle === column);
                        newRow[`${appVariable.variableName}`] = `${row[field]}`;
                    }else if(`${column}` === "Examination Date"){
                        const yearMonthDay = row[`${column}`].split("/")
                        newRow.examYear = Number(yearMonthDay[0]);
                        newRow.examMonth = Number(yearMonthDay[1]);
                        newRow.examDay = Number(yearMonthDay[2]);
                    }else{
                        const field = `${column}`
                        answerOptions.push({
                            answer: `${row[field]}`,
                            cloudImageUrl: "",
                            cloudImageName: "",
                            originalImageName: "",
                        })
                    }
                }

                newRow.schoolId = user.schoolId;
                newRow.createdBy = user.id;
                newRow.cloudImageUrl = "";
                newRow.cloudImageName = "";
                newRow.originalImageName = "";
                newRow.answerOptions = answerOptions;


                check = false;
                for(const subject of subjects){
                    if(subject.type === newRow["subject"]){
                        newRow.subjectId = subject.id;
                        console.log("subject seen")
                        check = true;
                        break;
                    }
                }

                if(check == false){
                    continue;
                }

                check = false;
                for(const level of levels){
                    if(level.type === newRow["level"]){
                        newRow.levelId = level.id;
                        console.log("level seen")
                        check = true;
                        break;
                    }
                }

                if(check == false){
                    continue;
                }


                questions.push(newRow)
            }


            console.log("questions: ", questions)
            var url = `examquestion/createmany`;
            const payload = {
                url,
                req: questions
            }
            this.$store.commit("authenticationStore/setShowSpinner", true);
            var response = await post(payload)
            this.$store.commit("authenticationStore/setShowSpinner", false);

            console.log("response: ", response);

            context.dialogs[0].isVisible = false;
            if(response.data){
                context.dialogs[1].isVisible = true;
            }else{
                context.dialogs[2].isVisible = true;
            }
        },
        async okDialog(payload){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Create Questions":
                            await context.createQuestions();
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
        }
    },
    created(){
        var context = this;
        context.setWorkSheetColumns();
    }
}
</script>