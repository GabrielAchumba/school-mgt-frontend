<template>
    <div>
        <div 
        v-if="!showSpinner"
        class="row q-pa-none flex flex-center">
             <q-card class="col-12">
                <q-bar class="bg-accent text-primary">
                    <div class="text-h6 text-primary text-center">{{ title }}</div>
                </q-bar>

                <q-separator v-if="visibile" />

                 <q-card-section 
                 v-if="visibile"
                 class="bg-primary text-accent">
                   <q-form class="q-pa-sm">
                       <ReadWorksheet
                        v-for="qSelect in form.qSelects" 
                      :key="qSelect.label"
                      :qSelect="qSelect"
                      @onFileSelected="onFileSelected($event)"
                      @onQSelectItemValueChanged="onWorksheetChanged($event)"/>
                   </q-form>
                 </q-card-section>

                  <q-separator v-if="visibile" />

                 <q-card-section 
                 v-if="visibile"
                 class="bg-primary text-accent">
                   <q-form class="q-pa-sm">
                       <MapVariables
                      :applicationColumns="applicationColumns"
                      :worksheetColumns="worksheetColumns"
                      :dataTypes="dataTypes"
                      @onApplicationColumnChanged="onApplicationColumnChanged($event)"
                      @onWorksheetColumnChanged="onWorksheetColumnChanged($event)"
                      @onDataTypeChanged="onDataTypeChanged($event)"
                      @onToggle="onToggle($event)"/>
                   </q-form>
                 </q-card-section>

                 <q-card-section 
                 v-else
                 class="bg-primary text-accent q-pa-sm">
                    <Table
                    :table_VM="tableVM"/>
                 </q-card-section>

                 <q-separator />

                 <q-card-actions align="right">
                   <div 
                   v-if="setIsResponsive"
                   class="row q-pa-sm">
                      <q-space />
                      <q-icon
                        class="q-pa-md text-accent"
                        v-for="qBtn in form.qBtns" 
                        :key="qBtn.label" 
                        :name="qBtn.icon"
                        @click="ClickAction(qBtn.name)"
                        size="30px">
                          <q-tooltip>
                            {{ qBtn.label }}
                          </q-tooltip>
                        </q-icon>
                  </div>
                   <div 
                   v-else
                   class="row q-pa-sm">
                      <q-space />
                      <q-btn class="q-ma-sm bg-accent text-primary"
                        v-for="qBtn in form.qBtns" 
                        :key="qBtn.label"
                        :label="qBtn.label"
                        type="button"
                        size="md"
                        :icon="qBtn.icon"
                        no-caps
                        @click="ClickAction(qBtn.name)"
                      />
                  </div>
                </q-card-actions>

            </q-card>
        </div>
        <div 
        v-show="showSpinner"
        class="q-gutter-md row">
            <div class="col-12 q-pa-sm absolute-center flex flex-center">
                <q-spinner
                    color="accent"
                    size="8em"
                    :thickness="10"
                />
            </div>
        </div>
    </div>
</template>

<script>
//import xlsx from "xlsx";
import * as xlsx from 'xlsx/xlsx.mjs';
import { form } from "./excel-import-main-vm";
import ReadWorksheet from "./read-worksheet.vue";
import MapVariables from "./mapVariables.vue";
import Table from "../../Tables/Table.vue";

export default {
    computed:{
        setIsResponsive(){
            const width = window.innerWidth;
            if(width < 700) return true;
            else return false;
        },
        showSpinner(){
            return this.$store.getters["authenticationStore/showSpinner"];
        },
        spinnerSize(){
            return this.$store.getters["authenticationStore/spinnerSize"];
        },
        spinnerThickness(){
            return this.$store.getters["authenticationStore/spinnerThickness"];
        },
        workSheetsNames(){
            return this.$store.getters["authenticationStore/workSheetsNames"];
        },
        workSheetsData(){
            return this.$store.getters["authenticationStore/workSheetsData"];
        }
    },
    components:{
        ReadWorksheet,
        MapVariables,
        Table
    },
    props:{
        title: {
            type: String,
            default: ""
        },
        applicationColumns: {
            type: Array,
            default: () => {
                return [{
                     isToggle: true,
                    qToggle: { name: true, label: ""}
                }]
            }
        },
    },
    data(){
        return {
            visibile: true,
            selectedWorkSheetData: {},
            dataTypes: [],
            worksheetColumns: [],
            form: form,
            tableVM: {
                selectedStaff: {},
                title: "Employees",
                columns: [],
                columnsOriginal: [],
                rows: [],
                separator: "cell",
                /* createItem: "createStaff",
                updateItem: "updateStaff",
                deleteItem: "deleteStaff",
                createItemUrl: "/create-staff",
                updateItemUrl: "/update-staff",
                importURL: "/import-staff", */
                },
        }
    },
    methods:{
        onWorksheetChanged(qSelect){
            var context = this;
            context.setWorkSheetColumns(qSelect.value.sheetData);
        },
        onApplicationColumnChanged(qSelect){
            var context = this;
            context.applicationColumns[qSelect.sn].value = qSelect.value.value;
        },
        onWorksheetColumnChanged(qSelect){
            var context = this;
            context.worksheetColumns[qSelect.sn].value = qSelect.value.value;
        },
        onDataTypeChanged(qSelect){
            var context = this;
            context.dataTypes[qSelect.sn].value = qSelect.value.value;
        },
        onToggle(payload){
            var context = this;
            context.tableVM.columnsOriginal[payload.qSelect.sn].data.qToggle.name = payload.evt;
        },
        ClickAction(actionName){
            var context = this;
            context.setTableData();
            switch(actionName){
                case "Preview":
                    if(context.visibile === true){
                        context.visibile = false;
                    }else{
                        context.visibile = true;
                    }
                    break;
                case "Save":
                    context.saveTable();
                    break;
            }

        },
        saveTable(){
            var context = this;
            this.$emit("saveTable", context.tableVM.rows);
        },
        setTableData(){
            var context = this;
            context.tableVM.rows = [];
            for(const selectedWorkSheetRow of context.selectedWorkSheetData){
                const tableRow = context.setTableRow(selectedWorkSheetRow);
                let newRow = {};
                for(const column of context.tableVM.columnsOriginal){
                    if(column.data.qToggle.name === true){
                        newRow[column.name] = tableRow[column.name]
                    }
                }
                context.tableVM.rows.push({...newRow});
            }

            if(context.tableVM.rows.length > 0){
                const keys = Object.keys(context.tableVM.rows[0]);
                context.tableVM.columns = keys.map((row) => {
                    return { name: `${row}`, label: `${row.toUpperCase()}`, field: "", align: "left", type: "" }
                })

                this.$store.commit('authenticationStore/setNewRows', context.tableVM.rows)
            }

        },
        setTableRow(selectedWorkSheetRow){
            var context = this;
            const tableRow = {};
            let i = -1;
            for(const applicationColumn of context.applicationColumns){
                i++;
                switch(context.dataTypes[i].value){
                    case "text":
                        tableRow[`${applicationColumn.value}`] = selectedWorkSheetRow[context.worksheetColumns[i].value];
                        break;
                    case "number":
                        tableRow[`${applicationColumn.value}`] = selectedWorkSheetRow[context.worksheetColumns[i].value];
                        break;
                    case "date":
                        let day =  10;
                        let month = 10;
                        let year = 1994;
                        if (selectedWorkSheetRow[context.worksheetColumns[i].value] instanceof Date) {
                            const date = selectedWorkSheetRow[context.worksheetColumns[i].value];

                            day = date.getDate();
                            month = date.getMonth() + 1;
                            year = date.getFullYear();
                        }


                        tableRow[`${applicationColumn.value}`] =  `${year}/${month}/${day}`;
                        break;
                    case "boolean":
                        tableRow[`${applicationColumn.value}`] =  selectedWorkSheetRow[context.worksheetColumns[i].value];
                        break;
                }
            }


            return tableRow;
        },
        setWorkSheetColumns(selectedWorkSheetData){
            var context = this;
            context.selectedWorkSheetData = selectedWorkSheetData;
            
            if(Object.keys(selectedWorkSheetData).length > 0){
                const selectedWorkSheetDataColumns = Object.keys(selectedWorkSheetData["0"])
                const qSelect = { label: "", value: "", type: "text", 
                                list: [], actionName: "referedByAction", visible: true,
                                isToggle: false,
                                qToggle: { name: true, label: ""}}

                qSelect.list = selectedWorkSheetDataColumns.map((row) => {
                    return {
                        type: row,
                        value: row,
                        label: row,
                    }
                })
              
                const nRows = context.applicationColumns.length;
                context.worksheetColumns = [];
                for(let i = 0; i < nRows; i++){
                    context.worksheetColumns.push({...qSelect})
                    context.worksheetColumns[i].id = i;
                    context.worksheetColumns[i].value =  context.worksheetColumns[i].list[0].value;
                    context.worksheetColumns[i].sn = i;
                }
                
            }
        },
        setDataTypes(){
            var context = this;
            const dataTypes = ["text", "number", "date", "boolean"];
            const qSelect = { label: "", value: "", type: "text", 
                            list: [], actionName: "referedByAction", visible: true,
                            isToggle: false,
                            qToggle: { name: true, label: ""} }

            qSelect.list = dataTypes.map((row) => {
                return {
                    type: row,
                    value: row,
                    label: row,
                }
            })

            const nRows = context.applicationColumns.length;
            for(let i = 0; i < nRows; i++){
                context.dataTypes.push({...qSelect})
                context.dataTypes[i].id = `Data Type ${i+1}`;
                context.dataTypes[i].value =  context.dataTypes[i].list[0].value;
                context.dataTypes[i].sn = i;
            }
        },
        onFileSelected(payload){
            var context = this;
            let workSheetsNames = [];
            let workSheetsData = [];
            let reader  = new FileReader();
            this.$store.commit("authenticationStore/setShowSpinner", true);

            reader.onload = ev => {
                
                try {
                    const data =  ev.target.result;
                    const XLSX = xlsx;
                    const workbook = XLSX.read(data, {
                        type: "binary",
                        cellDates: true,
                        cellNF: false,
                        cellText: false
                    });

                    var nCount = workbook.SheetNames.length;
                    var i = 0;
                    var j = 0;
                    workSheetsNames = [];
                    workSheetsData = [];

                    for(j = 0; j < nCount; j++){

                        var wsname = workbook.SheetNames[j];
                        workSheetsNames.push(wsname);
                        var ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname], {defval:""});


                        const excellist = [];
          
                        for (i = 0; i < ws.length; i++) {
                            excellist.push(ws[i]);
                        }
                        workSheetsData.push(excellist);

                    }
     
                    context.setImportFormData(workSheetsNames, workSheetsData);
                    context.filesReadingCompleted(workSheetsNames, workSheetsData);
                } catch (e) {
                    console.log("e: ", e)
                    alert("Read failure!");
                    context.filesReadingCompleted(workSheetsNames, workSheetsData);
                }
            }

            if(payload.selectedFile){
                if (/\.(xls|xlsx)$/i.test(payload.selectedFile.name)) {
                    //readAsDataURL
                    //readAsBinaryString
						reader.readAsBinaryString(payload.selectedFile);
				}else{
                    alert("Wrong Microsoft Excel Format. Only supports .xls and .xlsx")
                }
            }
            
            
        },
        setImportFormData(workSheetsNames, workSheetsData){
            var context = this;
            if(workSheetsNames.length > 0){
            context.form.qSelects[0].list = workSheetsNames.map((row, index) => {
                return {
                    type: row,
                    value: row,
                    sheetData: workSheetsData[index]
                }
            })
            }
        },
        filesReadingCompleted(workSheetsNames, workSheetsData){
            this.$store.commit("authenticationStore/setImportedData", {
                workSheetsNames, 
                workSheetsData
            });
            this.$store.commit("authenticationStore/setShowSpinner", false);
        }
    },
    created(){
        var context = this;
        context.form.clearQSelects();
        context.setImportFormData(context.workSheetsNames, context.workSheetsData);
        context.setDataTypes();
        context.applicationColumns = context.applicationColumns.map((row) => {
            return {
                ...row, 
                isToggle: true,
                qToggle: { name: true, label: ""},
            }
        })
        context.worksheetColumns = context.applicationColumns.map((row, index) => {
            return {
                ...row,
                isToggle: false,
                i: `Worksheet Column ${index+1}`
            }
        })

        context.tableVM.columnsOriginal = context.applicationColumns.map((row) => {
                    return { data: {...row}, name: `${row.value}`, label: `${row.value.toUpperCase()}`, field: "", align: "left", type: "" }
                })


    }
}
</script>

<style lang="scss" scoped>

    input[type="file"] {
    display: none;
    }
    .custom-file-upload {
        border: 1px solid #ccc;
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
    }
    
</style>
