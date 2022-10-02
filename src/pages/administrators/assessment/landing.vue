<template>
  <div>
    <Table
    :table_VM="tableVM"
    @createAssessment="createAssessment($event)"
    @updateAssessment="updateAssessment($event)"
    @deleteAssessment="deleteAssessment($event)"/>

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
                selectedAssessment: {},
                title: "Students",
                columns: [
                    { name: "type", label: "Type of Assessment", field: "", align: "left" },
                    { name: "actions", label: "Actions", field: "", align: "left" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createAssessment",
                updateItem: "updateAssessment",
                deleteItem: "deleteAssessment",
                createItemUrl: "/create-assessment",
                updateItemUrl: "/update-assessment",
                },
                dialogs:[
                { title: "Delete Assessment", isVisible: false, message: "Do you want to delete a Assessment",
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
         createAssessment(){
             var context = this;
             console.log(context.tableVM.createItemUrl)
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateAssessment(selectedAssessment){
             var context = this;
             this.$store.commit('AssessmentStore/SetSelectedAssessment', selectedAssessment)
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
            
            var url = `assessment/${context.selectedAssessment.id}`;
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
                            await context.loadAssessmentf()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async loadAssessmentf(){
            var context = this;
        var url = "assessment";
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
            this.$store.commit('AssessmentStore/SetAssessments', result)
            }else{
                context.isFetchTableDialog = true;
                context.message = message;
            }

            }
        },
        async created() {
            var context = this;
            await context.loadAssessmentf()
      }
    }
</script>