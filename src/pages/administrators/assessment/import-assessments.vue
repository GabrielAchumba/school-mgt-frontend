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
import { loadSubjects } from "../subject/utils";
import { post } from "../../../store/modules/services";
import { splitAssessment } from "./utils";
import { dialogs } from "./view_models/import-view-model";

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
            title: "Import Assessments",
            appVariables: [{variableTitle: "Type of Assessment", variableName: "type" },
            {variableTitle: "Overall Score (%)", variableName: "percentage" }],
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
                if(dialog.title == "Create Assessments"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            if(user.schoolId === "CEO")this.$router.push('/super-admin-assessment-landing')
            else  this.$router.push('/assessment-landing')
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
                    variableName:row.variableName,
                }
            })
            for(let i = 0; i < context.appVariables.length; i++){
                context.applicationColumns.push({...qSelect})
                context.applicationColumns[i].id = `Application Column ${i+1}`;
                context.applicationColumns[i].value =  context.applicationColumns[i].list[i].value;
                context.applicationColumns[i].sn = i;
            }
        },
        async createAssessments(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            const { result } = await loadSubjects(user.schoolId);
            //var assessments = context.tableRows.map((row) =>
            let assessments = [];
            for(const row of context.tableRows) {
                const newRow = {}
                let selectedSubject = undefined
                for (const appVariable of context.appVariables){
                   newRow[`${appVariable.variableName}`] = row[`${appVariable.variableTitle}`];
                   if(appVariable.variableTitle === "Type of Assessment"){
                       const { assessmentName, subjectName } = splitAssessment(newRow[`${appVariable.variableName}`]);
                       newRow.name = assessmentName;
                       selectedSubject = result.find(o => o.type === subjectName);
                   }
                }

                if(selectedSubject === undefined){
                    continue;
                }

                newRow.subjectId = selectedSubject.id;
                newRow.schoolId = user.schoolId;
                assessments.push(newRow)
            }

            console.log("assessments: ", assessments)
            var url = `assessment/createmany`;
            const payload = {
                url,
                req: assessments
            }
            this.$store.commit("authenticationStore/setShowSpinner", true);
            var response = await post(payload)
            this.$store.commit("authenticationStore/setShowSpinner", false);

            const { 
                data : {
                    message,
                    success,
                }
            } = response
            context.dialogs[0].isVisible = false;
            if(success){
                context.dialogs[1].isVisible = true;
            }else{
                context.dialogs[2].message = message;
                context.dialogs[2].isVisible = true;
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
                        case "Create Assessments":
                            await context.createAssessments();
                            break;
                        case "Success":
                            var user = this.$store.getters["authenticationStore/IdentityModel"];
                            if(user.schoolId === "CEO")this.$router.push('/super-admin-assessment-landing')
                            else  this.$router.push('/assessment-landing')
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
        this.$store.commit("authenticationStore/setIsError", false);
        this.$store.commit("authenticationStore/setErrorMessages", "");
        this.$store.commit("authenticationStore/setPageTitle", "Import Assessments");  
    }
}
</script>
