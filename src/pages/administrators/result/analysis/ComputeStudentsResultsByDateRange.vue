<template>
    <div class="q-pa-sm">
        <div class="row">
             <q-toolbar class="col-12 bg-accent">
                <q-btn  
                    icon="edit"
                    flat
                    class="text-capitalize">
                     <q-menu fit>
                            <Form
                            style="width:400px;"
                            :formData="form"
                            @Compute="Compute($event)"
                            @typeOfInstructor="typeOfInstructor($event)"/>
                        </q-menu>
                </q-btn>
                <q-space></q-space>
                <q-btn
                    v-if="isExpanded"  
                    flat
                    class="text-capitalize"
                    icon="bar_chart">
                     <q-menu fit>
                         <Form
                            :formData="chartForm"
                            @Plot="Plot($event)"/>
                     </q-menu>
                        </q-btn>
             </q-toolbar>
        </div>

        <div class="row q-pa-sm">
            <div v-if="isTable" class="col-12">
                <Table
                :table_VM="tableVM"
                :isResponsive="isResponsive"
                :isHeader="isHeader"/>
            </div>

            <div v-show="!isTable" id="myDiv" class="col-12 q-pa-sm"></div>
        </div>

       <!--  <div class="row" style="height:70vh;"> 
            <div id="myDiv"  class="col-12 q-pa-sm"></div>
        </div> -->

        
    </div>
</template>

<script>

import MessageBox from "../../../../components/dialogs/MessageBox";
import Form from "../../../../components/Forms/Form.vue";
import { post } from "../../../../store/modules/services";
import { loadUsersByCategory } from "../../user/utils";
import { createResultSummaryReport } from "../utils";
import Table from "../../../../components/Tables/Table.vue";
import Chart from "../../../../components/Charts/Chart.vue";
import Plotly from 'plotly.js-dist'
import { form, chartForm, tableVM } from "./view_models/ComputeStudentsResultsByDateRange-view-model";

export default {
    components:{
        MessageBox,
        Form,
        Table,
        Chart
    },
    data(){
        return {
            isHeader: false,
            isResponsive: false,
            isExpanded: true,
            isTable: true,
            form: form,
            chartForm: chartForm,
            tableVM: tableVM,
            layout: {},
            seriesCollection: []
        }
    },
    methods:{
        async Compute(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            
            var url = `result/summarizedresult`;
            const payload = {
                url,
                req: {
                    startDate: context.form.qDates[0].name,
                    endDate: context.form.qDates[1].name,
                    subjectIds: context.form.GroupedCheckBoxes[0].group,
                    teacherId: context.form.qSelects[3].value,
                    studentId: context.form.qSelects[1].value,
                    classroomId: context.form.qSelects[0].value,
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
                const { columns, rows } = createResultSummaryReport(result);
                context.isExpanded = true;
                context.tableVM.columns = columns;
                context.tableVM.rows = rows;
                context.isTable = true;
                context.configurePlotData();
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
        async typeOfInstructor(payload){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            const teachers = await loadUsersByCategory(payload.value, user.schoolId);
            this.$store.commit('userStore/SetTeachers', teachers.result);
            context.form.qSelects[3].list = teachers.result.map((row) => {
                return {
                    ...row,
                    type: `${row.firstName} ${row.lastName}`
                }
            })
            
            if(context.form.qSelects[3].list.length > 0){
                context.form.qSelects[3].value = context.form.qSelects[3].list[0].id;
            }
        },
        async loadConfigData(){
            var context =  this;
            context.form.qSelects[0].list = this.$store.getters["classRoomStore/classRooms"];
            if(context.form.qSelects[0].list.length > 0){
                context.form.qSelects[0].value = context.form.qSelects[0].list[0].id;
            }
 
            context.form.qSelects[1].list = this.$store.getters["studentStore/students"].map((row) => {
                return {
                    ...row,
                    type: `${row.firstName} ${row.lastName}`
                }
            })
            if(context.form.qSelects[1].list.length > 0){
                context.form.qSelects[1].value = context.form.qSelects[1].list[0].id;
            }

            context.form.qSelects[2].list = this.$store.getters["staffStore/staffs"];
            if(context.form.qSelects[2].list.length > 0){
                await context.typeOfInstructor({
                    value: context.form.qSelects[2].list[0].id
                })
            }

            context.form.GroupedCheckBoxes[0].list = this.$store.getters["subjectStore/subjects"].map((row) => {
                return {
                    ...row,
                    label: row.type, 
                    value: row.id,
                }
            })
        },
        Plot(){
            var context = this;
            context.isTable = false;
            if(context.isTable === false){
                context.RefreshPlot();
            }
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
            
            Plotly.newPlot('myDiv', context.seriesCollection, context.layout);

            context.isTable = false;
        }
    },
    mounted(){
        var context = this;
        if(context.isTable === false){
            context.RefreshPlot();
        }
    },
    async created(){
        var context = this;
        await context.loadConfigData();
        
    }
}
</script>