<template>
    <div class="q-pa-sm">
        <ExcelImport
        :title="title"
        :applicationColumns="applicationColumns"/>
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
import { post } from "../../../store/modules/services";
import { dialogs } from "./view_models/import-view-model";
import { loadSubjects } from "../subject/utils";
import { loadClassRooms } from "../classroom/utils";
import { loadStudents } from "../student/utils";
import { loadStaffs } from "../staff/utils";
import { loadUsers } from "../user/utils";
import { loadAssessments } from "../assessment/utils";

export default {
    components:{
        ExcelImport,
        MessageBox,
    },
    data(){
        return {
            title: "Import Results",
            appVariables: [{variableTitle: "Class Room", variableName: "type"}],
            applicationColumns: [
                {variableTitle: "Score", variableName: "score"},
                {variableTitle: "Maximum Score", variableName: "scoreMax"},
                {variableTitle: "Class Room", variableName: "classRoom"},
                {variableTitle: "Subject", variableName: "subject"},
                {variableTitle: "Student's Full Name", variableName: "student"},
                {variableTitle: "Student's Username", variableName: "studentUserName"},
                {variableTitle: "Type of Instructor", variableName: "designation"},
                {variableTitle: "Instructor's Full Name", variableName: "teacher"},
                {variableTitle: "Instructor's Username", variableName: "instructorUserName"},
                {variableTitle: "Type of Assessment", variableName: "assessment"},
                {variableTitle: "Assessment Date", variableName: "createdAt"}],
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
                if(dialog.title == "Create Results"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            this.$router.push('/results')
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
        async createResults(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"];

            const { result: subjects } = await loadSubjects(user.schoolId);
            const { result: classrooms } = await loadClassRooms(user.schoolId);
            const { result: students } = await loadStudents(user.schoolId);
            const { result: staffs } = await loadStaffs(user.schoolId);
            const { result: assessments } = await loadAssessments(user.schoolId);
            const { result: users } = await loadUsers(user.schoolId);


            let results = [];
            for(const row of context.tableRows) {
                const newRow = {}
                for (const appVariable of context.appVariables){
                   newRow[`${appVariable.variableName}`] = row[`${appVariable.variableTitle}`];
                }

                newRow.schoolId = user.schoolId;

                let check = false;
                for(const subject of subjects){
                    for(const assessment of assessments){
                        if(subject.type === newRow["subject"] &&
                        assessment.type === newRow["assessment"]){
                            newRow.subjectId = subject.id;
                            newRow.assessmentId = assessment.id;
                            check = true;
                            break;
                        }
                    }
                }

                if(check == false){
                    alert(`There is no subject or course name as ${newRow["subject"]}
                                                or
                        There is no assessment name as ${newRow["assessment"]}`)
                    return;
                }

                check = false;
                for(const classroom of classrooms){
                    if(classroom.type === newRow["classroom"]){
                        newRow.classroomId = classroom.id;
                        check = true;
                        break;
                    }
                }

                if(check == false){
                    alert(`There is no class name as ${newRow["classroom"]}`)
                    return;
                }

                check = false;
                for(const staff of staffs){
                    if(staff.type === newRow["designation"]){
                        newRow.designationId = staff.id;
                        check = true;
                        break;
                    }
                }

                if(check == false){
                    alert(`There is no type of staff as ${newRow["designation"]}`)
                    return;
                }

                check = false;
                for(const student of students){
                    if(student.userName === newRow["studentUserName"]){
                        newRow.studentId = student.id;
                        check = true;
                        break;
                    }
                }

                if(check == false){
                    alert(`There is no student username as ${newRow["studentUserName"]}`)
                    return;
                }

                check = false;
                for(const user of users){
                    if(user.userName === newRow["instructorUserName"]){
                        newRow.teacherId = user.id;
                        check = true;
                        break;
                    }
                }

                if(check == false){
                    alert(`There is no instructor username as ${newRow["instructorUserName"]}`)
                    return;
                }

                results.push(newRow)
            }

            console.log("results: ", results)
            var url = `result/createmany`;
            const payload = {
                url,
                req: results
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
                        case "Create Results":
                            await context.createResults();
                            break;
                        case "Success":
                            this.$router.push("/results");
                            break;
                    }
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
        }
    },
    created(){
        var context = this;
        context.setWorkSheetColumns();
    }
}
</script>
