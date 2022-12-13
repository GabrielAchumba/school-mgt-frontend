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
import { dialogs } from "./view_models/import-answers-view-model";
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
                {variableTitle: "Answer", variableName: "answer"},
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
                if(dialog.title == "Create Answers"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            if(user.schoolId === "CEO")this.$router.push('/super-admin-exam-answer-landing')
            else  this.$router.push('/exam-answer-landing')
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
        async viewQuestions(_subjectId, _levelId, levelType, subjectType){
            var context = this;
             var user = this.$store.getters["authenticationStore/IdentityModel"]
            let rows = [];

            const payload = {
                url: "examquestion/findAll",
                req: {
                    subjectId: _subjectId,
                    levelId: _levelId,
                    schoolId: user.schoolId,
                }
            }

            try{
                console.log("payload: ", payload)
                 const response = await post(payload);
                 rows = response.data.map((row) => {
                     return {
                         ...row,
                         question: row.question,
                         subject: subjectType,
                         level: levelType,
                     }
                 })
                 console.log("rows: ", rows)

            }catch{
                console.log("error fetching questions of a specific subject")
            }

            return rows;
        

        },
        async createAnswers(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"];

            const { result: subjects } = await loadSubjects(user.schoolId);
            const { result: levels } = await loadLevels(user.schoolId);

            console.log("subjects: ", subjects)
            console.log("levels: ", levels)

            let answers = [];
            let questions = [];
            let check = false;
            let answerOptions = [];
            let i = -1;
            console.log("context.tableRows; ", context.tableRows)
            for(const row of context.tableRows) {
                i++;
                const newRow = {}
                answerOptions = [];
                for (const appVariable of context.appVariables){
                     newRow[`${appVariable.variableName}`] = row[`${appVariable.variableTitle}`];
                }

                newRow.schoolId = user.schoolId;
                newRow.createdBy = user.id;
                //console.log("newRow: ", newRow)

                check = false;
                let subjectType = "";
                for(const subject of subjects){
                    if(subject.type === newRow["subject"]){
                        newRow.subjectId = subject.id;
                        subjectType = subject.type;
                        check = true;
                        break;
                    }
                }

                if(check == false){
                    continue;
                }

                check = false;
                let levelType = "";
                for(const level of levels){
                    if(level.type === newRow["level"]){
                        newRow.levelId = level.id;
                        levelType = level.type;
                        check = true;
                        break;
                    }
                }

                if(check == false){
                    continue;
                }

                if(i === 0){
                    questions = await context.viewQuestions(newRow.subjectId, newRow.levelId, levelType, subjectType);
                    console.log("questions: ", questions)
                }

                if(questions.length > 0){
                    let question = questions.find(o => o.question === newRow.question);
                    const options= [{id: 0, value: "A"}, {id: 1, value: "B"}, {id: 2, value: "C"}, 
                    {id: 3, value: "D"}, {id: 4, value: "E"}];
                    let j = -1;

                    newRow.questionId = question._id;

                    if(question.answerOptions.length > 5){
                        continue;
                    }
                    for(const answerOption  of  question.answerOptions){
                        j++;
                        if( answerOption.answer === newRow.answer){
                            newRow.answerId = answerOption._id;
                            newRow.answerOption = options[j].value;
                            break;
                        }
                    }
                   
                }


                answers.push(newRow)
            }


            console.log("answers: ", answers)
            var url = `examanswer/createmany`;
            const payload = {
                url,
                req: answers
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
                        case "Create Answers":
                            await context.createAnswers();
                            break;
                        case "Success":
                            var user = this.$store.getters["authenticationStore/IdentityModel"];
                            if(user.schoolId === "CEO")this.$router.push('/super-admin-exam-answer-landing')
                            else  this.$router.push('/exam-answer-landing')
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