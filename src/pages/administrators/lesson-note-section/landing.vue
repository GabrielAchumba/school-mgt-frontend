<template>
  <div>
    <Table
    v-if="!showSpinner"
    :table_VM="tableVM"
    @createItem="createItem($event)"
    @updateItem="updateItem($event)"
    @deleteItem="deleteItem($event)"/>
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
  import { get, remove } from "../../../store/modules/gcp-services";
  import { loadLessonNoteSections } from "./utils";

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
            cardList: [],
            selectedLessonNoteSection: {},
            tableVM: {
                title: "Lesson Note Sections",
                columns: [
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "type", label: "Type of Class Room", field: "", align: "left", type: "text" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createItem",
                updateItem: "updateItem",
                deleteItem: "deleteItem",
                createItemUrl: "/create-lesson-note-section",
                updateItemUrl: "/update-lesson-note-section",
                },
                dialogs:[
                { title: "Delete Lesson Note Section", isVisible: false, message: "Do you want to delete lesson note section",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Lesson note section deleted successfully!",
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
         createItem(){
             var context = this;
             console.log(context.tableVM.createItemUrl)
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateItem(selectedLessonNoteSection){
             var context = this;
             this.$store.commit('lessonNoteSectionStore/SetSelectedLessonNoteSection', selectedLessonNoteSection)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteItem(selectedLessonNoteSection){
             var context = this;
             context.selectedLessonNoteSection = selectedLessonNoteSection;
             console.log(context.selectedLessonNoteSection)
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
            var url = `lessonnotesection/${context.selectedLessonNoteSection.id}/${user.schoolId}`;
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
                        case "Delete Lesson Note Section":
                            await context.delete();
                            break;
                        case "Success":
                            await context._loadLessonNoteSections()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async _loadLessonNoteSections(){

                var context = this;
                var user = this.$store.getters["authenticationStore/IdentityModel"]
                this.$store.commit("authenticationStore/setShowSpinner", true);
                const { result, message } = await loadLessonNoteSections(user.schoolId)
                this.$store.commit("authenticationStore/setShowSpinner", false);
                this.$store.commit('lessonNoteSectionStore/SetLessonNoteSections', result)
                context.tableVM.rows = result;
                context.cardList = result.map((row, i) => {
                    let  description = row.description;
                    if(description.length > 300){
                        description = row.description.substr(1, 3000);
                    }

                return {
                    id: i+1,
                    ...row,
                    name: "showPage",
                    title: row.title, 
                    description,
                    createdDate: (new Date(row.createdAt)).toDateString(),
                    qBtns: [
                            {label: "View", name: "View"},
                        ],
                    }
            })

            console.log("context.cardList: ", context.cardList);
            this.$store.commit('resultStore/SetResults', result)
            this.$store.commit('componentsStore/setCardItems', context.cardList)

                if(result.length === 0){
                    context.isFetchTableDialog = true;
                    context.message = message;
                }

            }
        },
        async created() {
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            if(user.schoolId === "CEO"){
                context.tableVM.createItemUrl = "/super-admin-create-lesson-note-section";
                context.tableVM.updateItemUrl = "/super-admin-update-lesson-note-section";
                //context.tableVM.importURL = "/super-admin-import-exam-answers";
            }
            await context._loadLessonNoteSections()
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
            this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
            //this.$store.commit("authenticationStore/setActiveRoute", "fileModels");
      }
    }
</script>