<template>
  <div>
      <div class="row bg-primary text-accent">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 q-pa-sm">
            <span>
                <p class="q-ma-none">{{ exam_vm.qSelectSubject.label }}</p>
                <div class="row no-wrap">
                <q-select
                    class="q-ma-none col-12 bg-accent text-primary"
                    color="accent" 
                    outlined label-color="accent"
                    option-disable="inactive"
                    v-model="selectedSubject"
                    :options="exam_vm.qSelectSubject.list"
                    option-value="id"
                    :option-label="'type'"
                    :name="exam_vm.qSelectSubject.value"
                    emit-value
                    map-options
                    >
                </q-select>
            </div>
            </span>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 q-pa-sm">
            <span>
                <p class="q-ma-none">{{ exam_vm.qSelectLevel.label }}</p>
                <div class="row no-wrap">
                <q-select
                    class="q-ma-none col-12 bg-accent text-primary"
                    color="accent" 
                    outlined label-color="accent"
                    option-disable="inactive"
                    v-model="selectedLevel"
                    :options="exam_vm.qSelectLevel.list"
                    option-value="id"
                    :option-label="'type'"
                    :name="exam_vm.qSelectLevel.value"
                    emit-value
                    map-options
                    >
                </q-select>
            </div>
            </span>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 q-pa-sm bg-primary text-accent">
            <span><p class="q-ma-none">{{ exam_vm.qDate.label }}</p>
            <q-input 
            class="q-ma-none bg-accent"
            filled 
            v-model="exam_vm.qDate.name" mask="date" :rules="['date']">
            <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="exam_vm.qDate.name">
                    <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                </q-date>
                </q-popup-proxy>
            </q-icon>
            </template>
        </q-input></span>
        </div>
        <q-space/>
        <q-btn class="col-2" outline dense flat icon="table_view" @click="viewQuestions"/>
    </div>
    <Table
    v-if="!showSpinner"
    :table_VM="tableVM"
    @createExam="createExam($event)"
    @updateExam="updateExam($event)"
    @deleteExam="deleteExam($event)"/>
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
  import Table from "../../../components/Tables/Table.vue";
  import MessageBox from "../../../components/dialogs/MessageBox.vue";
  import { remove, post } from "../../../store/modules/gcp-services";
  import { exam_vm, dialogs } from "./view_models/create-view-model";
  import { loadExams } from "./utils";
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
        Table,
        MessageBox
      },
        data () {
    return {
            selectedSubject: null,
            selectedLevel: null,
            exam_vm: exam_vm,
            selectedExam: {},
            tableVM: {
                title: "Exams",
                columns: [
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "question", label: "Question", field: "", align: "left", type: "text"},
                    { name: "subject", label: "Subject", field: "", align: "left", type: "text"},
                    { name: "level", label: "Level", field: "", align: "left", type: "text"},
                ],
                rows: [],
                separator: "cell",
                createItem: "createExam",
                updateItem: "updateExam",
                deleteItem: "deleteExam",
                createItemUrl: "/create-exam-question",
                updateItemUrl: "/update-exam-question",
                importURL: "/import-exam-questions",
                },
                dialogs:[
                { title: "Delete Exam", isVisible: false, message: "Do you want to delete a exam",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Exam deleted successfully!",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Failure", isVisible: false, message: "",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
            ]
            }
        },
        methods: {
          okayEvent(){
            var context = this;
            context.isFetchTableDialog = false
          },
          cancelEvent(){
            var context = this;
            context.isFetchTableDialog = false
          },
         createExam(){
             var context = this;
             console.log(context.tableVM.createItemUrl)
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateExam(selectedExam){
             var context = this;
             this.$store.commit('examStore/SetSelectedExam', selectedExam)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteExam(selectedExam){
             var context = this;
             context.selectedExam = selectedExam;
             console.log(context.selectedExam)
             context.dialogs[0].isVisible = true;
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
        async delete(){
            var context = this;
            
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            var url = `examquestion/${context.selectedExam._id}`;
            const payload = {
                url,
            }

            var response = await remove(payload)

            context.dialogs[0].isVisible = false;
            context.dialogs[1].isVisible = true;

        },
        async okDialog(payload){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Delete Exam":
                            await context.delete();
                            break;
                        case "Success":
                            await context.viewQuestions()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        initializeData(){

            var context = this;

            //objArray.sort((a, b) => a.DepartmentName.toLowerCase().localeCompare(b.DepartmentName.toLowerCase()))

            context.exam_vm.qSelectSubject.list = this.$store.getters["subjectStore/subjects"]
            .sort((a, b) => a.type.toLowerCase().localeCompare(b.type.toLowerCase()))
            .map((row) => {
                return {
                    ...row,
                    label: row.type, 
                    value: row.id,
                }
            })


            context.exam_vm.qSelectLevel.list = this.$store.getters["levelStore/levels"]
            .sort((a, b) => a.type.toLowerCase().localeCompare(b.type.toLowerCase()))
            .map((row) => {
                return {
                    ...row,
                    label: row.type, 
                    value: row.id,
                }
            })
            this.$store.commit("authenticationStore/setShowSpinner", false);
        },
        async viewQuestions(){
            var context = this;
             var user = this.$store.getters["authenticationStore/IdentityModel"]
            this.$store.commit("authenticationStore/setShowSpinner", true);
            let rows = [];
            let subjectItem = context.exam_vm.qSelectSubject.list.find(o => o.value === context.selectedSubject);
            let levelItem = context.exam_vm.qSelectLevel.list.find(o => o.value === context.selectedLevel);
            const myArray = context.exam_vm.qDate.name.split("/")


            const payload = {
                url: "examquestion/findAll",
                req: {
                    subjectId: subjectItem.value,
                    levelId: levelItem.value,
                    schoolId: user.schoolId,
                    examYear: Number(myArray[0]),
                    examMonth: Number(myArray[1]),
                    examDay: Number(myArray[2])
                }
            }

            try{
                console.log("payload: ", payload)
                 const response = await post(payload);
                 console.log("result: ", response.data)
                 rows = response.data.map((row) => {
                     return {
                         ...row,
                         question: row.question,
                         subject: subjectItem.type,
                         level: levelItem.type,
                     }
                 })

                 console.log("rows: ", rows)
                this.$store.commit('examStore/SetExams', rows);
                context.tableVM.rows = rows;
                this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
                this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
                this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
                this.$store.commit("authenticationStore/setShowSpinner", false);
            }catch{
                this.$store.commit("authenticationStore/setShowSpinner", false);
            }
        

        }
    },
    async created() {
        var context = this;
        var user = this.$store.getters["authenticationStore/IdentityModel"]
        if(user.schoolId === "CEO"){
            context.tableVM.createItemUrl = "/super-admin-create-exam-question";
            context.tableVM.updateItemUrl = "/super-admin-update-exam-question";
            context.tableVM.importURL = "/super-admin-import-exam-questions";
        }
        this.$store.commit("authenticationStore/setActiveColumns", []);
        this.$store.commit("authenticationStore/setActiveRows", []);
        this.$store.commit("authenticationStore/setNewRows", []);
        context.initializeData()
        this.$store.commit("authenticationStore/setActiveRoute", "exam");
        this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
        this.$store.commit("authenticationStore/setImportURL", context.tableVM.importURL);
    }
    }
</script>