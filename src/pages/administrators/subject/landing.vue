<template>
  <div>
    <Table
    class="bg-accent"
    :table_VM="tableVM"
    @createSubject="createSubject($event)"
    @updateSubject="updateSubject($event)"
    @deleteSubject="deleteSubject($event)"/>

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
  import { loadSubjects } from "./utils";
    export default {
      components:{
        Table,
        MessageBox
      },
        data () {
    return {
            tableVM: {
                selectedSubject: {},
                title: "Subjects",
                columns: [
                    { name: "type", label: "Type of Subject", field: "", align: "left" },
                    { name: "actions", label: "Actions", field: "", align: "left" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createSubject",
                updateItem: "updateSubject",
                deleteItem: "deleteSubject",
                createItemUrl: "/create-subject",
                updateItemUrl: "/update-subject",
                },
                dialogs:[
                { title: "Delete Subject", isVisible: false, message: "Do you want to delete a Subject",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Subject deleted successfully!",
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
         createSubject(){
             var context = this;
             console.log(context.tableVM.createItemUrl)
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateSubject(selectedSubject){
             var context = this;
             this.$store.commit('subjectStore/SetSelectedSubject', selectedSubject)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteSubject(selectedSubject){
             var context = this;
             context.selectedSubject = selectedSubject;
             console.log(context.selectedSubject)
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
            var url = `subject/${context.selectedSubject.id}/${user.schoolId}`;
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
                        case "Delete Subject":
                            await context.delete();
                            break;
                        case "Success":
                            await context._loadSubjectf()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async _loadSubjectf(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            const { result, message } = await loadSubjects(user.schoolId);
            this.$store.commit('subjectStore/SetSubjects', result);
            context.tableVM.rows = result;
            if(result.length === 0){
                context.isFetchTableDialog = true;
                context.message = message;
            }

            }
        },
        async created() {
            var context = this;
            await context._loadSubjectf()
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl)
      }
    }
</script>