<template>
  <div>
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
  import { remove } from "../../../store/modules/services";
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
            tableVM: {
                selectedExam: {},
                title: "Exams",
                columns: [
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "type", label: "Type of Exam", field: "", align: "left", type: "text"},
                ],
                rows: [],
                separator: "cell",
                createItem: "createExam",
                updateItem: "updateExam",
                deleteItem: "deleteExam",
                createItemUrl: "/create-exam",
                updateItemUrl: "/update-exam",
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
            var url = `exam/${context.selectedExam.id}/${user.schoolId}`;
            const payload = {
                url,
            }

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
                            await context._loadExamf()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async _loadExams(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            this.$store.commit("authenticationStore/setShowSpinner", true);
            let rows = [];
            let _message = "";
            try{
                 const { result, message } = await loadExams(user.schoolId);
                 rows = result;
                 _message = message;
            }catch{
                this.$store.commit("authenticationStore/setShowSpinner", false);
            }
           
            this.$store.commit("authenticationStore/setShowSpinner", false);
            this.$store.commit('examStore/SetExams', rows);
            context.tableVM.rows = rows;
            if(rows.length === 0){
                context.isFetchTableDialog = true;
                context.message = _message;
            }

            }
        },
        async created() {
            var context = this;
            await context._loadExams()
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
            this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setActiveRoute", "exam");
      }
    }
</script>