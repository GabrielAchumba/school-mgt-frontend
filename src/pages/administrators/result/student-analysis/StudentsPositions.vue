<template>
    <div class="q-pa-sm">
        <div class="row">
             <q-toolbar class="col-12 bg-accent text-primary">
                <q-btn  
                    icon="edit"
                    flat
                    class="text-capitalize"
                    @click="ShowResultConfiDialog">
                </q-btn>
                <q-space></q-space>
                <p class="q-pa-sm text-primary">{{ studentFullName }}</p>
                <q-space></q-space>
                <q-btn 
                    flat
                    class="text-capitalize"
                    icon="bar_chart"
                    @click="showChartConfigDialog">
                </q-btn>
             </q-toolbar>
        </div>

        <div class="row q-pa-sm">
            <div class="col-12">
                <Table
                :table_VM="tableVM"
                :isResponsive="isResponsive"
                :isHeader="isHeader"/>
            </div>

            <!-- <div v-show="!isTable" id="myDiv" class="col-12 q-pa-sm"></div> -->
        </div>
<!-- 
       <q-dialog 
            v-for="dialog in dialogs" 
            :key="dialog.title"
            v-model="dialog.isVisible">
            <Form
                v-if="isForm"
                style="width:400px;"
                :formData="form"
                @Compute="Compute($event)"
                @typeOfInstructor="typeOfInstructor($event)"
                @onStudentSelected="onStudentSelected($event)"
                @showTeachersDialog="showTeachersDialog($event)"
                @showStudentsDialog="showStudentsDialog($event)"
                @showSubjectsDialog="showSubjectsDialog($event)"/>

            <Form
                v-if="isTeachersForm"
                style="width:400px;"
                :formData="teachersForm"
                @closeTeachersDialog="closeTeachersDialog($event)"/>

            <Form
                v-if="isStudentsForm"
                style="width:400px;"
                :formData="studentsForm"
                @closeStudentsDialog="closeStudentsDialog($event)"/>

            <Form
                v-if="isSubjectsForm"
                style="width:400px;"
                :formData="subjectsForm"
                @closeSubjectsDialog="closeSubjectsDialog($event)"/>

            <Form
                v-if="isChartForm"
                :formData="chartForm"
                @Plot="Plot($event)"/>
        </q-dialog>
 -->

       <q-dialog 
            v-model="dialogs[0].isVisible">
            <Form
                style="width:400px;"
                :formData="form"
                @Compute="Compute($event)"
                @typeOfInstructor="typeOfInstructor($event)"
                @onStudentSelected="onStudentSelected($event)"
                @showTeachersDialog="showTeachersDialog($event)"
                @showStudentsDialog="showStudentsDialog($event)"
                @showSubjectsDialog="showSubjectsDialog($event)"
                @CancelFormDialog="CancelFormDialog($event)"/>
        </q-dialog>



       <q-dialog 
            v-model="dialogs[1].isVisible">
            <Form
                style="width:400px;"
                :formData="teachersForm"
                @closeTeachersDialog="closeTeachersDialog($event)"/>
        </q-dialog>


       <q-dialog 
            v-model="dialogs[2].isVisible">
            <Form
                style="width:400px;"
                :formData="studentsForm"
                @closeStudentsDialog="closeStudentsDialog($event)"/>
        </q-dialog>


       <q-dialog 
            v-model="dialogs[3].isVisible">
            <Form
                style="width:400px;"
                :formData="subjectsForm"
                @closeSubjectsDialog="closeSubjectsDialog($event)"/>
        </q-dialog>

        <q-dialog 
            v-model="dialogs[4].isVisible">
            <Form
                style="width:400px;"
                :formData="chartForm"
                @Plot="Plot($event)"/>
        </q-dialog>
        
    </div>
</template>

<script>

import MessageBox from "../../../../components/dialogs/MessageBox";
import Form from "../../../../components/Forms/Form.vue";
import { post } from "../../../../store/modules/services";
import { loadUsersByCategory } from "../../user/utils";
import { createStudentsPositionReport } from "../utils";
import Table from "../../../../components/Tables/Table.vue";
import Chart from "../../../../components/Charts/Chart.vue";
import Plotly from 'plotly.js-dist'
import { form, subjectsForm, studentsForm, teachersForm,
 chartForm, tableVM, dialogs } from "./view_models/StudentsPositions-view-models";

export default {
    components:{
        MessageBox,
        Form,
        Table,
        Chart
    },
    data(){
        return {
            isForm: true,
            isSubjectsForm: false,
            isStudentsForm: false,
            isTeachersForm: false,
            isHeader: false,
            isResponsive: false,
            isExpanded: true,
            isTable: true,
            form: form,
            chartForm: chartForm,
            tableVM: tableVM,
            layout: {},
            seriesCollection: [],
            dialogs: dialogs,
            studentFullName: "",
            subjectsForm: subjectsForm,
            studentsForm: studentsForm,
            teachersForm: teachersForm,
            isChartForm: false,
        }
    },
    methods:{
        CancelFormDialog(){
            var context = this;
            context.dialogFailureOrScuess("Configure Result Analysis", false);
        },
        showTeachersDialog(){
            var context = this;
            context.dialogFailureOrScuess("Instructors", true);
        },
        showStudentsDialog(){
            var context = this;
            context.dialogFailureOrScuess("Students", true);
        },
        showSubjectsDialog(){
            var context = this;
            context.dialogFailureOrScuess("Subjects", true);
        },
        showChartConfigDialog(){
            var context = this;
            context.dialogFailureOrScuess("Configure Chart", true);
        },
        dialogFailureOrScuess(dialogTitle, isVisible){
          const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                 context.dialogs[i].isVisible = false;
                if(dialog.title == dialogTitle){
                    context.dialogs[i].isVisible = isVisible;
                }
            }
        },
        closeTeachersDialog(){
            var context = this;
            //context.dialogFailureOrScuess("Instructors", false);
            context.dialogFailureOrScuess("Configure Result Analysis", true);
        },
        closeStudentsDialog(){
            var context = this;
            //context.dialogFailureOrScuess("Students", false);
            context.dialogFailureOrScuess("Configure Result Analysis", true);
        },
        closeSubjectsDialog(){
            var context = this;
            //context.dialogFailureOrScuess("Subjects", false);
            context.dialogFailureOrScuess("Configure Result Analysis", true);
        },
        ShowResultConfiDialog(){
            var context = this;
            context.dialogFailureOrScuess("Configure Result Analysis", true);
        },
        async Compute(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            
            var url = `result/summarizedstudentspositions`;
            const payload = {
                url,
                req: {
                    startDate: context.form.qDates[0].name,
                    endDate: context.form.qDates[1].name,
                    subjectIds: context.subjectsForm.GroupedCheckBoxes[0].group,
                    teacherIds: context.teachersForm.GroupedCheckBoxes[0].group,
                    studentIds: context.studentsForm.GroupedCheckBoxes[0].group,
                    classroomId: context.form.qSelects[1].value,
                    schoolId: user.schoolId,
                }
            }

            var response = await post(payload)

            const { 
                data : {
                    data: result,
                    message,
                    success,
                }
            } = response
            if(success){
                const { columns, rows } = createStudentsPositionReport(result);
                context.isExpanded = true;
                context.tableVM.columns = columns;
                context.tableVM.rows = rows;
                 this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
                this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
                this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
                context.isTable = true;
                context.configurePlotData();
            }

            context.dialogFailureOrScuess("Configure Result Analysis", false)
        },
        configurePlotData(){
            var context = this;
            context.chartForm.qSelects[0].list = context.tableVM.columns.map((column, i) => {
                return {
                    id: i+1,
                    value: i+1,
                    type: column.label,
                    name: column.name,
                }
            })
            context.chartForm.qSelects[0].value = context.chartForm.qSelects[0].list[0].id;

            context.chartForm.qSelects[1].list = context.tableVM.columns.map((column, i) => {
                console.log("column.scoreMax: ", column.scoreMax)
                return {
                     id: i+1,
                    value: i+1,
                    type: column.label,
                    name: column.name,
                    scoreMax: column.scoreMax,
                }
            })
            context.chartForm.qSelects[1].value = context.chartForm.qSelects[1].list[1].id;
        },
        async typeOfInstructor(payload){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            const teachers = await loadUsersByCategory(payload.value, user.schoolId);
            this.$store.commit('userStore/SetTeachers', teachers.result);
            context.teachersForm.GroupedCheckBoxes[0].list = teachers.result.map((row) => {
                return {
                    ...row,
                    label: `${row.firstName} ${row.lastName}`, 
                    value: row.id,
                }
            })
        },
        async loadConfigData(){
            var context =  this;

            context.form.qSelects[0].list = this.$store.getters["staffStore/staffs"];
            if(context.form.qSelects[0].list.length > 0){
                await context.typeOfInstructor({
                    value: context.form.qSelects[0].list[0].id,
                })
            }

            context.form.qSelects[1].list = this.$store.getters["classRoomStore/classRooms"];
            console.log("classRooms: ", context.form.qSelects[1].list)
            if(context.form.qSelects[1].list.length > 0){
                context.form.qSelects[1].value = context.form.qSelects[1].list[0].id;
            }

            context.subjectsForm.GroupedCheckBoxes[0].list = this.$store.getters["subjectStore/subjects"].map((row) => {
                return {
                    ...row,
                    label: row.type, 
                    value: row.id,
                }
            })

            context.studentsForm.GroupedCheckBoxes[0].list = this.$store.getters["studentStore/students"].map((row) => {
                return {
                    ...row,
                    label: `${row.firstName} ${row.lastName}`, 
                    value: row.id,
                }
            })
        },
        Plot(){
            var context = this;
            context.RefreshPlot();
            context.dialogFailureOrScuess("Configure Chart", false)
        },
        RefreshPlot(){
            console.log("RefreshPlot called")
            var context = this;
            var selectedXId = context.chartForm.qSelects[0].value
            let xListItem = context.chartForm.qSelects[0].list.find(o => o.value === selectedXId);
            var xValues = context.tableVM.rows.map((row) => {
                return `${row[xListItem.name]} (${row["userName"]})`
            })
            console.log("xValues: ", xValues)

            var selectedYId = context.chartForm.qSelects[1].value
            let yListItem = context.chartForm.qSelects[1].list.find(o => o.value === selectedYId);
            var yValues = context.tableVM.rows.map((row) => {
                return row[yListItem.name]
            })

            context.layout = { 
                title: `${xListItem.type} vs ${yListItem.type}`,
                font: {
                    },
                    showlegend: true,
                    yaxis: {
                        title: `${yListItem.type}`,
                        zeroline: false,
                    },
                    bargap: 0.05
                };

            context.seriesCollection = [];

            context.seriesCollection.push({
            x: xValues,
            y: yValues,
            name: 'Scores',
            type: 'bar',
            marker: {
                    color: 'green',
                    line: {
                        width: 2.5
                    }
                }
            })
            
            this.$store.commit("chartStore/setSeriesCollection", context.seriesCollection)
            this.$store.commit("chartStore/setLayout", context.layout)
            //this.$store.commit("chartStore/setTitle", context.studentFullName)
            //Plotly.newPlot('myDiv', context.seriesCollection, context.layout);
            this.$router.push('/student-chart')

            context.isTable = false;
        }
    },
   /*  mounted(){
        var context = this;
        if(context.isTable === false){
            console.log("seen")
            context.RefreshPlot();
        }
    }, */
    async created(){
        var context = this;
        await context.loadConfigData();
        await context.ShowResultConfiDialog();
        this.$store.commit("authenticationStore/setActiveRoute", "studentpositionsanalysis");
        
    }
}
</script>