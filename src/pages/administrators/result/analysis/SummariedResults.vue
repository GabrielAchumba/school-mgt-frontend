<template>
    <div class="q-pa-sm bg-primary text-accent">
        <div 
        v-if="!showSpinner"
        class="row">
             <q-bar class="col-12 bg-accent text-primary">
                <q-btn  
                    icon="table_view"
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
             </q-bar>
        </div>



        <div 
        v-if="!showSpinner"
        class="row q-pa-sm">
            <div class="col-12 text-center">RESULT OF {{ selectedSessionName }}</div>
            <div class="col-6 text-left">NAME: {{ studentFullName }}</div>
            <div class="col-6 text-right">DATE: 12/12/2022</div>
            <div class="col-6 text-left">LEVEL: {{ selectedLevelName }}</div>
            <div class="col-6 text-right">CLASS: {{ selectedClassRoomName }}</div>
            <div class="col-6 text-left">POSITION: {{ studentPosition }}</div>
            <div class="col-6 text-right">Overall Score: {{ overallScore }}/{{overallScoreMax }}</div>
            <div class="col-12">
                <Table
                :table_VM="tableVM"
                :isResponsive="isResponsive"
                :isHeader="isHeader"/>
            </div>

            <!-- <div v-show="!isTable" id="myDiv" class="col-12 q-pa-sm"></div> -->
        </div>

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
                @showStudentsDialog="showStudentsDialog($event)"/>

            <Form
                v-if="isSubjectsForm"
                style="width:400px;"
                :formData="subjectsForm"
                @closeStudentsDialog="closeStudentsDialog($event)"/>

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
                @onSessionSelected="onSessionSelected($event)"
                @onLevelSelected="onLevelSelected($event)"
                @onClassRoomSelected="onClassRoomSelected($event)"
                @onStudentSelected="onStudentSelected($event)"
                @showSubjectsDialog="showSubjectsDialog($event)"
                @CancelFormDialog="CancelFormDialog($event)"/>
        </q-dialog>


       <q-dialog 
            v-model="dialogs[1].isVisible">
            <Form
                style="width:400px;"
                :formData="subjectsForm"
                @closeSubjectsDialog="closeSubjectsDialog($event)"/>
        </q-dialog>


       <q-dialog 
            v-model="dialogs[2].isVisible">
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
import { post, get } from "../../../../store/modules/services";
import { loadUsersByCategory } from "../../user/utils";
import { createResultSummaryReport, createStudentsPositionReport } from "../utils";
import Table from "../../../../components/Tables/Table.vue";
import Chart from "../../../../components/Charts/Chart.vue";
import Plotly from 'plotly.js-dist'
import { form, subjectsForm, chartForm, tableVM, dialogs } from "./view_models/SummariedResults-view-model";

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
        Table,
        Chart
    },
    data(){
        return {
            isForm: false,
            isSubjectsForm: false,
            isHeader: false,
            isResponsive: false,
            isExpanded: true,
            isTable: false,
            form: form,
            chartForm: chartForm,
            tableVM: tableVM,
            layout: {},
            seriesCollection: [],
            dialogs: dialogs,
            studentFullName: "",
            studentUsername: "",
            subjectsForm: subjectsForm,
            isChartForm: false,
            selectedClassRoomId: "",
            selectedLevelId: "",
            selectedSessionId: "",
            selectedClassRoomName: "",
            selectedLevelName: "",
            selectedSessionName: "",
            studentIds: [],
            classRoomIds: [],
            studentPosition: 0,
            overallScore: 0,
            overallScoreMax: 0,
        }
    },
    methods:{
        CancelFormDialog(){
            var context = this;
            context.dialogFailureOrScuess("Configure Result Analysis", false);
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
        closeSubjectsDialog(){
            var context = this;
            context.dialogFailureOrScuess("Configure Result Analysis", true);
        },
        ShowResultConfiDialog(){
            var context = this;
            context.dialogFailureOrScuess("Configure Result Analysis", true);
        },
        async Compute(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]

            await context.ComputePositions();
            
            var url = `result/summarizedresult2`;
            let studentId = context.form.qSelects[3].value;
            if(user.userType === "Student"){
                studentId = user.id;
            }

            const payload = {
                url,
                req: {
                    subjectIds: context.subjectsForm.GroupedCheckBoxes[0].group,
                    classRoomId: context.form.qSelects[2].value,
                    studentId,
                    levelId: context.form.qSelects[1].value,
                    sessionId: context.form.qSelects[0].value,
                    schoolId: user.schoolId,
                }
            }

            this.$store.commit("authenticationStore/setShowSpinner", true);
            var response = await post(payload)

            const { 
                data : {
                    data: result,
                    message,
                    success,
                }
            } = response
            if(success){
                const { columns, rows } = createResultSummaryReport(result);
                context.overallScoreMax = 100 * rows.length;
                context.tableVM.columns = columns;
                context.tableVM.rows = rows;
                this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
                this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
                this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
                context.isTable = true;
                context.configurePlotData();
            }

            this.$store.commit("authenticationStore/setShowSpinner", false);
            context.dialogFailureOrScuess("Configure Result Analysis", false)
        },
        async ComputePositions(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            
            var url = `result/summarizedstudentspositions2`;
            const payload = {
                url,
                req: {
                    subjectIds: context.subjectsForm.GroupedCheckBoxes[0].group,
                    studentIds: context.studentIds,
                    classRoomIds: context.classRoomIds,
                    levelId: context.form.qSelects[1].value,
                    sessionId: context.form.qSelects[0].value,
                    schoolId: user.schoolId,
                }
            }

            console.log("payload: ", payload)

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
                context.studentPosition = 0;
                console.log("rows: ", rows)
                console.log("studentFullName: ", context.studentFullName)
                console.log("studentUsername: ", context.studentUsername)
                for(const row of rows){
                    context.studentPosition++;
                    if(row.fullName.toUpperCase() === context.studentFullName &&
                    row.userName === context.studentUsername){
                        context.overallScore = Number(row.overallScore).toFixed(2);
                        break;
                    }
                }
                
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
        onStudentSelected(payload){
            console.log("payload: ", payload)
            var context = this;
            let selectedItem = payload.list.find(o => o.id === payload.value);
            context.studentFullName = selectedItem.type.toUpperCase();
            context.studentUsername = selectedItem.userName;
        },
        async fetchClassRooms(){
            var context = this;
            const selectedLevelId = context.selectedLevelId;
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            var url = `classroom/bylevel/${user.schoolId}/${selectedLevelId}`;
            var response = await get({
            url
            })
            const { 
                data : {
                    data: result,
                    message,
                    success,
                }
            } = response

            const i = 2;
            context.form.qSelects[i].list = [];
            context.form.qSelects[i].value = "";
            if(success){
                context.form.qSelects[i].list = result.map((row) => {
                    context.classRoomIds.push(row.id)
                    return {
                        ...row,
                        value: row.id,
                        label: row.type
                    }
                })
                if(context.form.qSelects[i].list.length > 0){
                    context.form.qSelects[i].value = context.form.qSelects[i].list[0].id;
                    context.selectedClassRoomName = context.form.qSelects[i].list[0].type.toUpperCase();
                    context.selectedClassRoomId = context.form.qSelects[i].value;
                }
            }
        },
        async fetchStudents(){
            var context = this;
            const selectedClassRoomId = context.selectedClassRoomId;
            const selectedLevelId = context.selectedLevelId;
            const selectedSessionId = context.selectedSessionId;
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            var url = `user/students/${user.schoolId}/${selectedSessionId}/${selectedLevelId}/${selectedClassRoomId}`;
            var response = await get({
            url
            })
            const { 
                data : {
                    data: result,
                    message,
                    success,
                }
            } = response

            const i = 3;
            context.form.qSelects[i].list = [];
            context.form.qSelects[i].value = "";
            if(success){
                context.studentIds = [];
                context.form.qSelects[i].list = result.map((row) => {
                    context.studentIds.push(row.id);
                    return {
                        ...row,
                        type: `${row.firstName} ${row.lastName}`,
                        value: row.id,
                        label:  `${row.firstName} ${row.lastName}`,
                        userName: row.userName,
                    }
                })
                console.log("context.form.qSelects[i].list: ", context.form.qSelects[i].list)

                
            }

        },
        onSessionSelected(payload){
            var context = this;
            context.selectedSessionId = payload.value;
            let selectedItem = payload.list.find(o => o.id === payload.value);
            context.selectedSessionName = selectedItem.type.toUpperCase();
        },
        async onLevelSelected(payload){
            var context = this;
            context.selectedLevelId = payload.value;
            let selectedItem = payload.list.find(o => o.id === payload.value);
            context.selectedLevelName = selectedItem.type.toUpperCase();
            await context.fetchClassRooms();
            await context.fetchStudents()
        },
        async onClassRoomSelected(payload){
            var context = this;
            context.selectedClassRoomId = payload.value;
            let selectedItem = payload.list.find(o => o.id === payload.value);
            context.selectedClassRoomName = selectedItem.type.toUpperCase();
            await context.fetchStudents()
        },
        async loadConfigData(){
            var context =  this;
            var user = this.$store.getters["authenticationStore/IdentityModel"];

            let i = 1;
            context.form.qSelects[i].list = this.$store.getters["levelStore/levels"].map((row) => {
                return {
                    ...row,
                    value: row.id,
                    label: row.type
                }
            })
            if(context.form.qSelects[i].list.length > 0){
                context.form.qSelects[i].value = context.form.qSelects[i].list[0].id;
                context.selectedLevelName = context.form.qSelects[i].list[0].type.toUpperCase();
                context.selectedLevelId = context.form.qSelects[i].value;
            }

            i = 0;
            context.form.qSelects[i].list = this.$store.getters["sessionStore/sessions"].map((row) => {
                return {
                    ...row,
                    value: row.id,
                    label: row.type
                }
            })
            if(context.form.qSelects[i].list.length > 0){
                context.form.qSelects[i].value = context.form.qSelects[i].list[0].id;
                context.selectedSessionName = context.form.qSelects[i].list[0].type.toUpperCase();
                context.selectedSessionId = context.form.qSelects[i].value;
            }

            context.subjectsForm.GroupedCheckBoxes[0].list = this.$store.getters["subjectStore/subjects"].map((row) => {
                return {
                    ...row,
                    label: row.type, 
                    value: row.id,
                }
            })

            i = 3;
            if(user.userType === "Student"){
                context.form.qSelects[i].visible = false;
                context.form.qSelects[i].value = user.id;
                context.studentFullName = (`${user.firstName} ${user.lastName}`).toUpperCase();
                context.studentUsername = user.userName;
            }
 
            await context.fetchClassRooms();

            await context.fetchStudents();

        },
        Plot(){
            var context = this;
            context.RefreshPlot();
            context.dialogFailureOrScuess("Configure Chart", false)
        },
        RefreshPlot(){
            var context = this;
            var selectedXId = context.chartForm.qSelects[0].value
            let xListItem = context.chartForm.qSelects[0].list.find(o => o.value === selectedXId);
            var xValues = context.tableVM.rows.map((row) => {
                return row[xListItem.name]
            })

            var selectedYId = context.chartForm.qSelects[1].value
            let yListItem = context.chartForm.qSelects[1].list.find(o => o.value === selectedYId);
            var yValues = context.tableVM.rows.map((row) => {
                return row[yListItem.name]
            })

            var y2Values = yValues.map((row) => {
                return yListItem.scoreMax - row;
            })


            context.layout = { 
                title: `${xListItem.type} vs ${yListItem.type}`,
                barmode: 'stack',
                font: {
                    //size: 18,
                    //family: 'Raleway, sans-serif'
                    },
                    showlegend: true,
                    /* xaxis: {
                        tickangle: -45
                    }, */
                    yaxis: {
                        title: `${yListItem.type}`,
                        zeroline: false,
                        //gridwidth: 2
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

            context.seriesCollection.push({
            x: xValues,
            y: y2Values,
            name: 'Maximum Score',
            type: 'bar',
            marker: {
                    color: 'orange',
                    line: {
                        width: 2.5
                    }
                }
            })
            
            this.$store.commit("chartStore/setSeriesCollection", context.seriesCollection)
            this.$store.commit("chartStore/setLayout", context.layout)
            this.$store.commit("chartStore/setTitle", context.studentFullName)
            //Plotly.newPlot('myDiv', context.seriesCollection, context.layout);
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            if(user.schoolId === "CEO")this.$router.push('/super-admin-chart')
            else if(user.userType === "Student")this.$router.push('/student-chart')
            else  this.$router.push('/chart')
            context.isTable = false;
            
        }
    },
   /*  mounted(){
        var context = this;
        if(context.isTable === false){
            context.RefreshPlot();
            context.isChartForm = false;
            context.isSubjectsForm = false;
            context.isForm = false;
            context.dialogFailureOrScuess("Configure Chart", false)
        }
    }, */
    async created(){
        var context = this;
        await context.loadConfigData();
        this.$store.commit("authenticationStore/setActiveRoute", "singlestudentresultsanalysis");
        //await context.ShowResultConfiDialog();
        
    }
}
</script>