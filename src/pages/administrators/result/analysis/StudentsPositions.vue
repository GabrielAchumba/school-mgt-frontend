<template>
    <div class="q-pa-sm bg-primary text-accent">
        <div class="row">
             <q-toolbar class="col-12 bg-accent text-primary">
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
             </q-toolbar>
        </div>

        <div class="row q-pa-sm">
            <div class="col-12">
                <Table
                :table_VM="tableVM"
                :tableRows="tableVM.rows"
                :isResponsive="isResponsive"
                :isHeader="isHeader"/>
            </div>

            <!-- <div v-show="!isTable" id="myDiv" class="col-12 q-pa-sm"></div> -->
        </div>

       <q-dialog 
            v-model="dialogs[0].isVisible">
            <Form
                style="width:400px;"
                :formData="form"
                @Compute="Compute($event)"
                @showClassRoomDialog="showClassRoomDialog($event)"
                @showStudentsDialog="showStudentsDialog($event)"
                @showSubjectsDialog="showSubjectsDialog($event)"
                @CancelFormDialog="CancelFormDialog($event)"/>
        </q-dialog>


       <q-dialog 
            v-model="dialogs[1].isVisible">
            <Form
                style="width:400px;"
                :formData="studentsForm"
                @closeStudentsDialog="closeStudentsDialog($event)"
                @onToggle="onToggleStudentsForm($event)"/>
        </q-dialog>


       <q-dialog 
            v-model="dialogs[2].isVisible">
            <Form
                style="width:400px;"
                :formData="subjectsForm"
                @closeSubjectsDialog="closeSubjectsDialog($event)"/>
        </q-dialog>

        <q-dialog 
            v-model="dialogs[3].isVisible">
            <Form
                style="width:400px;"
                :formData="chartForm"
                @Plot="Plot($event)"/>
        </q-dialog>

        <q-dialog 
            v-model="dialogs[4].isVisible">
            <Form
                style="width:400px;"
                :formData="classRoomsForm"
                @closeClassRoomsDialog="closeClassRoomsDialog($event)"/>
        </q-dialog>
        
    </div>
</template>

<script>

import MessageBox from "../../../../components/dialogs/MessageBox";
import Form from "../../../../components/Forms/Form.vue";
import { post, get } from "../../../../store/modules/services";
import { loadUsersByCategory } from "../../user/utils";
import { createStudentsPositionReport } from "../utils";
import Table from "../../../../components/Tables/Table.vue";
import Chart from "../../../../components/Charts/Chart.vue";
import Plotly from 'plotly.js-dist'
import { form, subjectsForm, studentsForm,
 chartForm, tableVM, dialogs, classRoomsForm } from "./view_models/StudentsPositions-view-models";

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
            isClassRoomsForm: false,
            isHeader: false,
            isResponsive: false,
            isExpanded: true,
            isTable: true,
            form: {...form },
            chartForm: chartForm,
            tableVM: tableVM,
            layout: {},
            seriesCollection: [],
            dialogs: dialogs,
            studentFullName: "",
            subjectsForm: subjectsForm,
            studentsForm: studentsForm,
            classRoomsForm: classRoomsForm,
            isChartForm: false,
            studentIds: [],
        }
    },
    methods:{
        CancelFormDialog(){
            var context = this;
            context.dialogFailureOrScuess("Configure Result Analysis", false);
        },
        showStudentsDialog(){
            var context = this;
            context.dialogFailureOrScuess("Students", true);
        },
        showSubjectsDialog(){
            var context = this;
            context.dialogFailureOrScuess("Subjects", true);
        },
        showClassRoomDialog(){
            var context = this;
            context.dialogFailureOrScuess("Class Rooms", true);
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
        async closeClassRoomsDialog(){
            var context = this;
            await context.fetchStudents();
            context.dialogFailureOrScuess("Configure Result Analysis", true);
        },
        ShowResultConfiDialog(){
            var context = this;
            context.dialogFailureOrScuess("Configure Result Analysis", true);
        },
        onToggleStudentsForm(payload){
            var context = this;
            console.log("onToggleStudentsForm called",payload)
            if(payload === "Disagreed"){
              context.studentsForm.GroupedCheckBoxes[0].group = [];
            }else{
              context.studentsForm.GroupedCheckBoxes[0].group = this.$store.getters["studentStore/students"].map((row) => {
                    return row.id
                })
            }
        },
        async Compute(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            let studentIds = context.studentIds;
            if(user.userType === "Student") studentIds = context.studentIds;
            
            var url = `result/summarizedstudentspositions2`;
            const payload = {
                url,
                req: {
                    subjectIds: context.subjectsForm.GroupedCheckBoxes[0].group,
                    studentIds,
                    classRoomIds: context.classRoomsForm.GroupedCheckBoxes[0].group,
                    levelId: context.form.qSelects[0].value,
                    sessionId: context.form.qSelects[1].value,
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
                console.log("result: ", result)
                const { columns, rows } = createStudentsPositionReport(result);
                context.isExpanded = true;
                context.tableVM.columns = columns;
                context.tableVM.rows = rows.map((row) => {
                    let newRow = {...row }
                    newRow.isActive = false;
                    if(user.userType === "Student"){
                        if(user.userName == row.userName) newRow.isActive = true
                    }   
       
                    return newRow;
                })
                console.log("context.tableVM.rows: ",  context.tableVM.rows)
                 this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
                this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
                this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
                context.isTable = true;
                context.configurePlotData();
            }

            context.dialogFailureOrScuess("Configure Result Analysis", false)
        },
        async fetchStudents(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            console.log("user: ", user)
            let i = 0;
            let classRoomIds = context.classRoomsForm.GroupedCheckBoxes[0].group;
            const schoolId = user.schoolId;
            let levelId = context.form.qSelects[i].value;
            i++;
            let sessionId = context.form.qSelects[i].value;
            let url = `user/selectedstudents`;
            if(user.userType === "Student"){
                classRoomIds = [user.classRoomId]
            }
            
            var payload = {
                url,
                req: {
                    schoolId,
                    sessionId,
                    levelId,
                    classRoomIds
                }
            }
            //console.log("payload: ", payload)
            var response = await post(payload)
            //console.log("response: ", response)

            const { 
                data : {
                    data: result,
                    message,
                    success,
                }
            } = response

            if(success){
                context.studentIds = [];
                for(const item of result){
                     context.studentIds.push(item.id);
                } 
                console.log("context.studentIds: ", context.studentIds) 
            }

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
        async loadConfigData(){
            var context =  this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]

            context.form.qSelects[0].list = this.$store.getters["levelStore/levels"];
            if(context.form.qSelects[0].list.length > 0){
                if(user.userType === "Student"){
                    context.form.qSelects[0].value = user.levelId;
                }else{
                    context.form.qSelects[0].value = context.form.qSelects[0].list[0].id;
                }
            }

            context.form.qSelects[1].list = this.$store.getters["sessionStore/sessions"];
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

            context.classRoomsForm.GroupedCheckBoxes[0].list = this.$store.getters["classRoomStore/classRooms"].map((row) => {
                return {
                    ...row,
                    label: row.type, 
                    value: row.id,
                }
            })

            if(user.userType === "Student"){
                context.classRoomsForm.GroupedCheckBoxes[0].group = [user.classRoomId];
                context.studentFullName = user.firstName + " " + user.lastName;
            }

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
            var selectedYId = context.chartForm.qSelects[1].value
            let yListItem = context.chartForm.qSelects[1].list.find(o => o.value === selectedYId);

            context.tableVM.rows.sort((a, b) => parseFloat(b[yListItem.name]) - parseFloat(a[yListItem.name]));
            
            var xValues = context.tableVM.rows.map((row) => {
                return `${row[xListItem.name]} (${row["userName"]})`
            })

            
            var yValues = context.tableVM.rows.map((row) => {
                return row[yListItem.name]
            })

            context.layout = { 
                title: `${yListItem.type}`, //`${xListItem.type} VERSUS ${yListItem.type}`,
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
            this.$store.commit("chartStore/setTitle", "")
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
            console.log("seen")
            context.RefreshPlot();
        }
    }, */
    async created(){
        var context = this;
        //Students
        console.log("form.qBtns: ", form.qBtns)
        context.form.qBtns = [];
        for(const qBtn of form.qBtns){
            if(qBtn.label !== "Students"){
                context.form.qBtns.push(qBtn)
            }
        }
        

        await context.loadConfigData();
        await context.ShowResultConfiDialog();
        this.$store.commit("authenticationStore/setActiveRoute", "studentspositionsanalysis");
        this.$store.commit("authenticationStore/setIsError", false);
        this.$store.commit("authenticationStore/setErrorMessages", "");
        this.$store.commit("authenticationStore/setPageTitle", "Results Computation-POS"); 
        
    }
}
</script>