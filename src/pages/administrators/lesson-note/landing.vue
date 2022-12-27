<template>
  <div>
    <Table
    v-if="!showSpinner"
    :table_VM="tableVM"
    @createLessonNote="createLessonNote($event)"
    @updateLessonNote="updateLessonNote($event)"
    @deleteLessonNote="deleteLessonNote($event)"/>
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
            selectedLessonNote: {},
            tableVM: {
                title: "Lesson Notes",
                columns: [
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "title", label: "Title", field: "", align: "left", type: "text" }, 
                ],
                rows: [],
                separator: "cell",
                createItem: "createLessonNote",
                updateItem: "updateLessonNote",
                deleteItem: "deleteLessonNote",
                createItemUrl: "/create-lesson-note",
                updateItemUrl: "/update-lesson-note",
                },
                dialogs:[
                { title: "Delete Lesson Note", isVisible: false, message: "Do you want to delete lesson note",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Lesson note deleted successfully!",
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
         createLessonNote(){
             var context = this;
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateLessonNote(selectedLessonNote){
             var context = this;
             this.$store.commit('lessonNoteStore/SetSelectedLessonNote', selectedLessonNote)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteLessonNote(selectedLessonNote){
             var context = this;
             context.selectedLessonNote = selectedLessonNote;
             console.log(context.selectedLessonNote)
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
            var url = `lessonnote/${context.selectedLessonNote.id}/${user.schoolId}`;
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
                        case "Delete Lesson Note":
                            await context.delete();
                            break;
                        case "Success":
                            await context.loadLessonNotes()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async loadLessonNotes(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
        var url = `lessonnote/${user.schoolId}`;

        this.$store.commit("authenticationStore/setShowSpinner", true);
        var response = await get({
          url
        })
        this.$store.commit("authenticationStore/setShowSpinner", false);

        const { 
                data : {
                    data: lessNotes,
                    message,
                    success,
                }
            } = response

            if(success){
            context.tableVM.rows = lessNotes.map((row) => {
                return {
                    title: row.title,
                }
            })
            this.$store.commit('lessonNoteStore/SetLessonNotes', context.tableVM.rows)
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
                context.tableVM.createItemUrl = "/super-admin-create-lesson-note";
                context.tableVM.updateItemUrl = "/super-admin-update-lesson-note";
            }
            await context.loadLessonNotes()
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
            this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setActiveRoute", "lessonnotes");
      }
    }
</script>