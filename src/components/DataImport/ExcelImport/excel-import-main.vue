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
                 <!-- <p ref="math" :key="num">I wrote $$e^{i\pi} + 1 = 0$$. Can you type it? </p> -->
                 <!-- <p ref="math">$${{mathExpression}}</p> -->
                 <!-- <vue-mathjax :formula="mathExpression"></vue-mathjax> -->
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
                    :table_VM="tableVM"
                    :tableRows="tableVM.rows"/>
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

        <q-dialog 
            v-model="dialogs[0].isVisible">
            <Form
                style="width:400px;"
                :formData="importMethodForm"
                @doneImportMethodSelection="doneImportMethodSelection($event)"
                @onImportMethodSelected="onImportMethodSelected($event)"/>
        </q-dialog>
    </div>
</template>

<script>
//import xlsx from "xlsx";
/* import MathLive from "mathlive";
import "mathlive/dist/mathlive.core.css";
import "mathlive/dist/mathlive.css"; */
//import MathLive from "mathlive/dist/vue-mathlive";
//import Vue from 'vue'
//import MathLive from "mathlive/dist/mathlive";
//var parse = require('ascii-math');
//import VueMathfield from "mathlive/dist/vue-mathlive.mjs";
//Vue.use(VueMathfield, MathLive);
import Form from "../../Forms/Form.vue";
import { MathJax } from 'mathjax-vue'
import { VueMathjax } from 'vue-mathjax'
import * as xlsx from 'xlsx/xlsx.mjs';
import { form } from "./excel-import-main-vm";
import { importMethodForm, dialogs } from "./import-method-view-model";
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
        Table,
        Form,
        MathJax,
        'vue-mathjax': VueMathjax,
    },
    props:{
        title: {
            type: String,
            default: ""
        },
        _applicationColumns: {
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
            mathExpression: "$$2^x.$$", // `$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$`,
            num: 16,
            applicationColumns:[{
                    isToggle: true,
                qToggle: { name: true, label: ""}
            }],
            visibile: true,
            selectedWorkSheetData: {},
            dataTypes: [],
            worksheetColumns: [],
            form: form,
            tableVM: {
                selectedStaff: {},
                title: "Imported Data",
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
            selectedFile: null,
            importMethodForm: importMethodForm,
            dialogs: dialogs,
            lines: [],
            selectedTextFileImportMethod: "Method 1",
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

                console.log("context.applicationColumns: ", context.applicationColumns)
                console.log("context.worksheetColumns: ", context.worksheetColumns)
                
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

            const nRows = context._applicationColumns.length;
            for(let i = 0; i < nRows; i++){
                context.dataTypes.push({...qSelect})
                context.dataTypes[i].id = `Data Type ${i+1}`;
                context.dataTypes[i].value =  context.dataTypes[i].list[0].value;
                context.dataTypes[i].sn = i;
            }

            console.log("context.dataTypes: ", context.dataTypes)
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
        onFileSelected(payload){
            var context = this;
            context.selectedFile = payload.selectedFile;
            if(context.selectedFile){
                if (/\.(xls|xlsx)$/i.test(context.selectedFile.name)) {
                    context.msExcelFileImportMethod();
                }else if (/\.(txt)$/i.test(context.selectedFile.name)) {
                    context.dialogFailureOrScuess("Text File Import Methods", true);
                }
            }
        },
        doneImportMethodSelection(payload){
            var context = this;
            context.dialogFailureOrScuess("Text File Import Methods", false);
            context.textFileImportMethod();
        },
        onImportMethodSelected(payload){
            var context = this;
            let selectedItem = payload.list.find(o => o.id === payload.value);
            context.selectedTextFileImportMethod = selectedItem.label;
            console.log("context.selectedTextFileImportMethod: ", context.selectedTextFileImportMethod)
        },
        msExcelFileImportMethod(){
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
            if(context.selectedFile){
                if (/\.(xls|xlsx)$/i.test(context.selectedFile.name)) {
                    //readAsDataURL
                    //readAsBinaryString
						reader.readAsBinaryString(context.selectedFile);
				}else{
                    alert("Wrong Microsoft Excel Format. Only supports .xls or .xlsx")
                }
            }
        },
        adjustLineOfTextFile(){
            //context.lines
            var context = this;
             const columns = [];
                let constantColumnsStartIndex = -1;
                for(let i = 1; i < context.lines.length; i++){
                    if(context.lines[i] === "#@ConstantColumns@#") {
                        constantColumnsStartIndex = i + 1;
                        break;
                    }
                    columns.push({
                        name: context.lines[i] == undefined ? "" : context.lines[i].replace('\t','')
                    }) 
                }

                //console.log("columns: ", columns)

                const constantColumns = [];
                let constantColumnsValuesStartIndex = -1;
                for(let i = constantColumnsStartIndex; i < context.lines.length; i++){
                    if(context.lines[i] === "#@ConstantColumnsValues@#") {
                        constantColumnsValuesStartIndex = i + 1;
                        break;
                    }
                    constantColumns.push({
                        name: context.lines[i] == undefined ? "" : context.lines[i].replace('\t','')
                    }) 
                }
                //console.log("constantColumns: ", constantColumns)

                const constantColumnsValues = [];
                let rowStartIndex = -1;
                for(let i = constantColumnsValuesStartIndex; i < context.lines.length; i++){
                    if(context.lines[i] === "#@Rows@#") {
                        rowStartIndex = i + 1;
                        break;
                    }
                    constantColumnsValues.push({
                        value: context.lines[i] == undefined ? "" : context.lines[i].replace('\t','')
                    }) 
                }
                //console.log("constantColumnsValues: ", constantColumnsValues)


                const nonConstantColumns = [];
                for(let i = 0; i < columns.length; i++){
                    let check = false;
                    for(let j = 0; j < constantColumns.length; j++){
                        if(columns[i].name === constantColumns[j].name){
                            check = true;
                            break;
                        }
                    }
                    if(!check){
                        nonConstantColumns.push({
                            name: columns[i].name
                        }) 
                    }
                }
                //console.log("nonConstantColumns: ", nonConstantColumns)
          
                const step = nonConstantColumns.length;
                let sn = 0;
                const options = ["A", "B", "C", "D", "E", "F", "G"];
                try {
                    for (let i = rowStartIndex; i < context.lines.length; i = i + step) {
                        let row = {}
                        sn++;
                        for(let j = 0; j < nonConstantColumns.length; j++){
                            //console.log("sn: ", sn)
                            let line =  context.lines[i + j].trim();
                            if(j === 0){
                                line = line.replace(`${sn}.`,'').trim();
                                context.lines[i + j] = line;
                            }else if(j === nonConstantColumns.length-1){
                                line = line.trim();
                                context.lines[i + j] = line;
                            }else{
                                line = line.replace(`${options[j-1]}.`,'').trim();
                                context.lines[i + j] = line;
                            }
                            //if(sn === 1) console.log("line: ", line)
                        }
                    }
                    
                }catch(e){
                    console.log("error: ", e)
                }
        },
        textFileImportMethod(){
            var context = this;
            let workSheetsNames = [];
            let workSheetsData = [];
            let readerText  = new FileReader();
            this.$store.commit("authenticationStore/setShowSpinner", true);
            
            readerText.addEventListener("load", function () {
                context.lines = readerText.result.split("\n");
                if(context.selectedTextFileImportMethod === "Method 2"){
                    context.adjustLineOfTextFile()
                }

                const excellist = [];

                const columns = [];
                let constantColumnsStartIndex = -1;
                for(let i = 1; i < context.lines.length; i++){
                    if(context.lines[i] === "#@ConstantColumns@#") {
                        constantColumnsStartIndex = i + 1;
                        break;
                    }
                    columns.push({
                        name: context.lines[i] == undefined ? "" : context.lines[i].replace('\t','')
                    }) 
                }

                //console.log("columns: ", columns)

                const constantColumns = [];
                let constantColumnsValuesStartIndex = -1;
                for(let i = constantColumnsStartIndex; i < context.lines.length; i++){
                    if(context.lines[i] === "#@ConstantColumnsValues@#") {
                        constantColumnsValuesStartIndex = i + 1;
                        break;
                    }
                    constantColumns.push({
                        name: context.lines[i] == undefined ? "" : context.lines[i].replace('\t','')
                    }) 
                }
                //console.log("constantColumns: ", constantColumns)

                const constantColumnsValues = [];
                let rowStartIndex = -1;
                for(let i = constantColumnsValuesStartIndex; i < context.lines.length; i++){
                    if(context.lines[i] === "#@Rows@#") {
                        rowStartIndex = i + 1;
                        break;
                    }
                    constantColumnsValues.push({
                        value: context.lines[i] == undefined ? "" : context.lines[i].replace('\t','')
                    }) 
                }
                //console.log("constantColumnsValues: ", constantColumnsValues)


                const nonConstantColumns = [];
                for(let i = 0; i < columns.length; i++){
                    let check = false;
                    for(let j = 0; j < constantColumns.length; j++){
                        if(columns[i].name === constantColumns[j].name){
                            check = true;
                            break;
                        }
                    }
                    if(!check){
                        nonConstantColumns.push({
                            name: columns[i].name
                        }) 
                    }
                }
                //console.log("nonConstantColumns: ", nonConstantColumns)
          
                const step = nonConstantColumns.length;
                for (let i = rowStartIndex; i < context.lines.length; i = i + step) {
                    let row = {}
                     for(let j = 0; j < constantColumns.length; j++){
                        row[constantColumns[j].name] = constantColumnsValues[j].value == undefined ? "" : constantColumnsValues[j].value.replace('\t','')
                    }

                    for(let j = 0; j < nonConstantColumns.length; j++){
                        row[nonConstantColumns[j].name] = context.lines[i + j] == undefined ? "" : context.lines[i + j].replace('\t','')
                    }
                    if(row[nonConstantColumns[0].name] !== "") excellist.push({...row});
                }
                workSheetsData.push(excellist);
                //console.log("workSheetsNames: ", workSheetsNames)
                //console.log("workSheetsData: ", workSheetsData)
                context.setImportFormData(workSheetsNames, workSheetsData);
                context.filesReadingCompleted(workSheetsNames, workSheetsData);
            }.bind(context), false);

            if(context.selectedFile){
                if (/\.(txt)$/i.test(context.selectedFile.name)) {
                    workSheetsNames = [];
                    workSheetsData = [];
                    workSheetsNames.push(context.selectedFile.name);
					readerText.readAsText(context.selectedFile);
				}else{
                    alert("Wrong file format. Only supports .txt")
                }
            }
        },
        setImportFormData(workSheetsNames, workSheetsData){
            //console.log("setImportFormData started")
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
            //console.log("context.applicationColumns: ", context.applicationColumns)
            //console.log("setImportFormData completed")
        },
        filesReadingCompleted(workSheetsNames, workSheetsData){
            var context = this;
            //console.log("filesReadingCompleted started")
            this.$store.commit("authenticationStore/setImportedData", {
                workSheetsNames, 
                workSheetsData
            });
            this.$store.commit("authenticationStore/setShowSpinner", false);
            //console.log("context.applicationColumns: ", context.applicationColumns)
            //console.log("filesReadingCompleted completed")
        },
        /* renderMath() {
            this.$nextTick(() => {
                MathLive.renderMathInElement(this.$refs.math);
            });
        }, */
        renderMath: function (event) {
        this.$nextTick(function(){
            MathLive.renderMathInElement("math");
        })
        }
    },
    mounted() {
        console.log("Hello This is created!");
         //this.renderMath();
    },
    created(){
        var context = this;
        context.form.clearQSelects();
        context.setImportFormData(context.workSheetsNames, context.workSheetsData);
        context.setDataTypes();
        context.applicationColumns = context._applicationColumns.map((row) => {
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

        const methods = ["Method 1", "Method 2"]
        context.importMethodForm.qSelects[0].list = methods.map((row, i) => {
            return {
                id: i,
                type: row,
                value: row,
                label: row
            }
        })
        console.log("importMethodForm: ", context.importMethodForm)
        if(context.importMethodForm.qSelects[0].list.length > 0){
           context.importMethodForm.qSelects[0].value = context.importMethodForm.qSelects[0].list[0].id;
        }

        //console.log("context.applicationColumns: ", context.applicationColumns)


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
