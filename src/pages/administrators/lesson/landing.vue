<template>
  <div>
    <Table
    :table_VM="tableVM"
    @createLesson="createLesson($event)"
    @updateLesson="updateLesson($event)"
    @deleteLesson="deleteLesson($event)"/>

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
                selectedLesson: {},
                title: "Employees",
                columns: [
                    { name: "type", label: "Type of Lesson", field: "", align: "left" },
                    { name: "actions", label: "Actions", field: "", align: "left" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createLesson",
                updateItem: "updateLesson",
                deleteItem: "deleteLesson",
                createItemUrl: "/create-lesson",
                updateItemUrl: "/update-lesson",
                },
                dialogs:[
                { title: "Delete Lesson", isVisible: false, message: "Do you want to delete a Lesson",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Lesson deleted successfully!",
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
         createLesson(){
             var context = this;
             console.log(context.tableVM.createItemUrl)
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateLesson(selectedLesson){
             var context = this;
             this.$store.commit('LessonStore/SetSelectedLesson', selectedLesson)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteLesson(selectedLesson){
             var context = this;
             context.selectedLesson = selectedLesson;
             console.log(context.selectedLesson)
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
            
            var url = `lesson/${context.selectedLesson.id}`;
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
                        case "Delete Lesson":
                            await context.delete();
                            break;
                        case "Success":
                            await context.loadLessons()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async loadLessons(){
            var context = this;
        var url = "lesson";
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
            this.$store.commit('LessonStore/SetLessons', result)
            }else{
                context.isFetchTableDialog = true;
                context.message = message;
            }

            }
        },
        async created() {
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            if(user.schoolId === "CEO"){
                context.tableVM.createItemUrl = "/super-admin-create-lesson";
                context.tableVM.updateItemUrl = "/super-admin-update-lesson";
                //context.tableVM.importURL = "/super-admin-import-exam-answers";
            }
            await context.loadLessons()
            this.$store.commit("authenticationStore/setIsError", false);
            this.$store.commit("authenticationStore/setErrorMessages", "");
      }
    }
</script>