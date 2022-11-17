<template>
  <div>
    <Table
    v-if="!showSpinner"
    :table_VM="tableVM"
    :isResponsive="isResponsive"
    @createResult="createResult($event)"
    @updateResult="updateResult($event)"
    @deleteResult="deleteResult($event)"/>
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
            isResponsive: true,
            tableVM: {
                selectedResult: {},
                title: "Results",
                columns: [
                    { name: "actions", label: "Action", field: "", align: "left", type: "" },
                    { name: "studentFullName", label: "Full Name", field: "", align: "left", type: "text" },
                    { name: "score", label: "Score", field: "", align: "left", type: "number" },
                    { name: "scoreMax", label: "Maximum Score", field: "", align: "left", type: "number" },
                    { name: "subjectFullName", label: "Subject", field: "", align: "left", type: "text" },
                    { name: "assessmentFullName", label: "Assessment", field: "", align: "left", type: "text" },
                    { name: "createdDate", label: "Date of Creation", field: "", align: "left", type: "date" },
                    { name: "teacherFullName", label: "Teacher", field: "", align: "left", type: "text" },
                    { name: "classRoomFullName", label: "Class", field: "", align: "left", type: "text" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createResult",
                updateItem: "updateResult",
                deleteItem: "deleteResult",
                createItemUrl: "/create-result",
                updateItemUrl: "/update-result",
                importURL: "/import-results",
                },
            dialogs:[
                { title: "Delete Result", isVisible: false, message: "Do you want to delete result",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Delete Success", isVisible: false, message: "Result deleted successfully!",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Delete Failure", isVisible: false, message: "",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
            ],
            cardList: [],
            }
        },
        methods: {
            deleteResult(selectedResult){
             var context = this;
             context.selectedResult = selectedResult;
             context.dialogs[0].isVisible = true;
            },
          okayEvent(){
            var context = this;
            context.isFetchTableDialog = false
          },
          cancelEvent(){
            var context = this;
            context.isFetchTableDialog = false
          },
         createResult(){
             var context = this;
             console.log(context.tableVM.createItemUrl) 
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateResult(selectedResult){
             var context = this;
             this.$store.commit('resultStore/SetSelectedResult', selectedResult)
            this.$router.push(context.tableVM.updateItemUrl);
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
        async okDialog(payload){
            console.log("payload: ", payload)
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Success":
                            await context.loadResult()
                            break;
                        case "Delete Success":
                            this.$router.push("/results");
                            break;
                        case "Delete Result":
                            await context.delete();
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async delete(){
            var context = this;
            
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            var url = `result/${context.selectedResult.id}/${user.schoolId}`;
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
            context.dialogs[0].isVisible = true;
            if(success){
                context.dialogs[1].isVisible = true;
            }else{
                context.dialogs[2].message = message;
                context.dialogs[2].isVisible = true;
            }

        },
        async loadResult(){
            this.$store.commit("authenticationStore/setShowSpinner", true);
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"];
        var url = `result/${user.schoolId}`;
        var response = await get({
          url
        })
        this.$store.commit("authenticationStore/setShowSpinner", false);

        const { 
                data : {
                    data: result,
                    message,
                    success,
                }
            } = response

            if(success){
            context.tableVM.rows = result.map((row) => {
                return {
                    ...row,
                    createdDate: (new Date(row.createdAt)).toDateString()
                }
            })
            context.tableVM.cardList = result.map((row, i) => {
                return {
                    id: i+1,
                    ...row,
                    name: "showPage",
                    title: row.studentFullName, 
                    description: `${row.studentFullName} score in ${row.subjectFullName} is
                                ${row.score}/${row.scoreMax}. The class room is ${row.classRoomFullName}
                                and the instructor's name is ${row.teacherFullName}`,
                    createdDate: (new Date(row.createdAt)).toDateString(),
                    qBtns: [
                            {label: "View", name: "View"},
                        ],
                    }
            })
            console.log("cardList: ", context.tableVM.cardList)
            this.$store.commit('resultStore/SetResults', result)
            this.$store.commit('componentsStore/setCardItems', context.tableVM.cardList)
            }else{
                context.isFetchTableDialog = true;
                context.message = message;
            }

            }
        },
        async created() {
            var context = this;
            await context.loadResult()
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
            this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setActiveRoute", "results");
            this.$store.commit("authenticationStore/setImportURL", context.tableVM.importURL);
      }
    }
</script>