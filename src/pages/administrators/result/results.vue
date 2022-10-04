<template>
  <div>
    <Table
    :table_VM="tableVM"
    @createResult="createResult($event)"
    @updateResult="updateResult($event)"
    @deleteResult="deleteResult($event)"/>

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
      components:{
        Table,
        MessageBox
      },
        data () {
    return {
            tableVM: {
                selectedResult: {},
                title: "Results",
                columns: [
                    { name: "actions", label: "Actions", field: "", align: "left" },
                    { name: "studentFullName", label: "Full Name", field: "", align: "left" },
                    { name: "score", label: "Score", field: "", align: "left" },
                    { name: "scoreMax", label: "Maximum Score", field: "", align: "left" },
                    { name: "subjectFullName", label: "Subject", field: "", align: "left" },
                    { name: "teacherFullName", label: "Teacher", field: "", align: "left" },
                    { name: "classRoomFullName", label: "Class", field: "", align: "left" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createResult",
                updateItem: "updateResult",
                deleteItem: "deleteResult",
                createItemUrl: "/create-result",
                updateItemUrl: "/update-result",
                },
                dialogs:[
                { title: "Delete Result", isVisible: false, message: "Do you want to delete a Result",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Result deleted successfully!",
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
         createResult(){
             var context = this;
             console.log(context.tableVM.createItemUrl)
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateResult(selectedResult){
             var context = this;
             this.$store.commit('ResultStore/SetSelectedResult', selectedResult)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteResult(selectedResult){
             var context = this;
             context.selectedResult = selectedResult;
             console.log(context.selectedResult)
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
            
            var url = `result/${context.selectedResult.id}`;
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
                        case "Delete Result":
                            await context.delete();
                            break;
                        case "Success":
                            await context.loadResultf()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async loadResultf(){
            var context = this;
        var url = "result";
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

            if(success){
            context.tableVM.rows = result;
            this.$store.commit('resultStore/SetResults', result)
            }else{
                context.isFetchTableDialog = true;
                context.message = message;
            }

            }
        },
        async created() {
            var context = this;
            await context.loadResultf()
      }
    }
</script>