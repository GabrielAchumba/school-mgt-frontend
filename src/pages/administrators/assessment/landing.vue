<template>
  <div>
    <Table
    v-if="!showSpinner"
    :table_VM="tableVM"
    :tableRows="tableVM.rows"
    @dataImport="dataImport($event)"
    @createAssessment="createAssessment($event)"
    @updateAssessment="updateAssessment($event)"
    @deleteAssessment="deleteAssessment($event)"/>
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
  import { get, remove } from "../../../store/modules/services"
  import { loadSubjects } from "../subject/utils";
  import { splitAssessment } from "./utils";
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
            tableVM: {
                selectedAssessment: {},
                title: "Assessments",
                columns: [
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "assessment", label: "Assessment", field: "", align: "left", type: "text" },
                    { name: "subject", label: "Subject", field: "", align: "left", type: "text" },
                    { name: "percentage", label: "Percentage", field: "", align: "left", type: "number" },    
                ],
                rows: [],
                separator: "cell",
                createItem: "createAssessment",
                updateItem: "updateAssessment",
                deleteItem: "deleteAssessment",
                dataImport: "dataImport",
                createItemUrl: "/create-assessment",
                updateItemUrl: "/update-assessment",
                importURL: "/import-assessments"
                },
                dialogs:[
                { title: "Delete Assessment", isVisible: false, message: "Do you want to delete an Assessment",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Assessment deleted successfully!",
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
        dataImport(){
            var context = this;
            this.$router.push(context.tableVM.importURL);
        },
         createAssessment(){
            var context = this;
            this.$router.push(context.tableVM.createItemUrl);
          },
          updateAssessment(selectedAssessment){
             var context = this;
             this.$store.commit('assessmentStore/SetSelectedAssessment', selectedAssessment)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteAssessment(selectedAssessment){
             var context = this;
             context.selectedAssessment = selectedAssessment;
             console.log(context.selectedAssessment)
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
            
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            var url = `assessment/${context.selectedAssessment.id}/${user.schoolId}`;
            const payload = {
                url,
            }

            console.log("payload: ", payload)
            var response = await remove(payload)

            const { 
                data : {
                    message,
                    success,
                }
            } = response
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
                        case "Delete Assessment":
                            await context.delete();
                            break;
                        case "Success":
                            await context.loadAssessments()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async loadAssessments(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
        var url = `assessment/${user.schoolId}`;

        this.$store.commit("authenticationStore/setShowSpinner", true);
        var response = await get({
          url
        })
        this.$store.commit("authenticationStore/setShowSpinner", false);

        const { 
                data : {
                    data: assessments,
                    message,
                    success,
                }
            } = response

            if(success){
            context.tableVM.rows = assessments.map((row) => {
                const { assessmentName, subjectName } = splitAssessment(row.type);
                return {
                    ...row,
                    assessment: assessmentName,
                    subject: subjectName,
                }
            })
            this.$store.commit('assessmentStore/SetAssessments', context.tableVM.rows)
            }else{
                context.isFetchTableDialog = true;
                context.message = message;
            }

            },
          setBackRoute(){
              var user = this.$store.getters["authenticationStore/IdentityModel"];
              let backRoute= "";
              if(user.schoolId === "CEO")backRoute='/super-admin';
              else  backRoute = '/admin';
              this.$store.commit("authenticationStore/setBackRoute", backRoute);
          }
        },
        async created() {
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            if(user.schoolId === "CEO"){
                context.tableVM.createItemUrl = "/super-admin-create-assessment";
                context.tableVM.updateItemUrl = "/super-admin-update-assessment";
            }
            await context.loadAssessments()
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
            this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setActiveRoute", "assessments");
            this.$store.commit("authenticationStore/setImportURL", context.tableVM.importURL);
            this.$store.commit("authenticationStore/setIsError", false);
            this.$store.commit("authenticationStore/setErrorMessages", "");
            context.setBackRoute();
      }
    }
</script>