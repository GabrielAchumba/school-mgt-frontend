<template>
  <div>
    <Table
    :table_VM="tableVM"
    @createStudent="createStudent($event)"
    @updateStudent="updateStudent($event)"
    @deleteStudent="deleteStudent($event)"/>

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
  import { loadStudents } from "./utils";
    export default {
      components:{
        Table,
        MessageBox
      },
        data () {
    return {
            tableVM: {
                selectedStudent: {},
                title: "Students",
                columns: [
                    { name: "actions", label: "Actions", field: "", align: "left" },
                    { name: "firstName", label: "First Name", field: "", align: "left" },
                    { name: "lastName", label: "Last Name", field: "", align: "left" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createStudent",
                updateItem: "updateStudent",
                deleteItem: "deleteStudent",
                createItemUrl: "/create-student",
                updateItemUrl: "/update-student",
                },
                dialogs:[
                { title: "Delete Student", isVisible: false, message: "Do you want to delete a Student",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Student deleted successfully!",
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
         createStudent(){
             var context = this;
             console.log(context.tableVM.createItemUrl)
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateStudent(selectedStudent){
             var context = this;
             this.$store.commit('studentStore/SetSelectedStudent', selectedStudent)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteStudent(selectedStudent){
             var context = this;
             context.selectedStudent = selectedStudent;
             console.log(context.selectedStudent)
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
            
            var url = `student/${context.selectedStudent.id}`;
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
                        case "Delete Student":
                            await context.delete();
                            break;
                        case "Success":
                            await context._loadStudentf()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async _loadStudentf(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            const { result, message } = await loadStudents(user.schoolId);
            this.$store.commit('studentStore/SetStudents', result)
            context.tableVM.rows = result;

            if(result.length === 0){
                context.isFetchTableDialog = true;
                context.message = message;
            }

            }
        },
        async created() {
            var context = this;
            await context._loadStudentf()
      }
    }
</script>