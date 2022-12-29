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
            tableVM: {
                selectedContinuousAssessment: {},
                title: "Continuous Assessment",
                columns: [
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "title", label: "Title", field: "", align: "left", type: "text" }, 
                ],
                rows: [],
                separator: "cell",
                createItem: "createItem",
                updateItem: "updateItem",
                deleteItem: "deleteItem",
                createItemUrl: "/create-ca",
                updateItemUrl: "/update-ca",
                },
                dialogs:[
                { title: "Delete Continuous Assessment", isVisible: false, message: "Do you want to delete continuous assessment",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Continuous assessment deleted successfully!",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Failure", isVisible: false, message: "",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                ],
                isFetchTableDialog: false,
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
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateItem(selectedContinuousAssessment){
             var context = this;
             this.$store.commit('cAStore/SetSelectedCA', selectedContinuousAssessment)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteItem(selectedContinuousAssessment){
             var context = this;
             context.selectedContinuousAssessment = selectedContinuousAssessment;
             console.log(context.selectedContinuousAssessment)
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
            var url = `ca/${context.selectedContinuousAssessment.id}/${user.schoolId}`;
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
                        case "Delete Continuous Assessment":
                            await context.delete();
                            break;
                        case "Success":
                            await context.loadContinuousAssessments()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async loadContinuousAssessments(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
        var url = `ca/${user.schoolId}`;

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
                context.tableVM.createItemUrl = "/super-admin-create-ca";
                context.tableVM.updateItemUrl = "/super-admin-update-ca";
            }
            await context.loadContinuousAssessments()
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
            this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setActiveRoute", "cas");
            this.$store.commit("authenticationStore/setIsError", false);
            this.$store.commit("authenticationStore/setErrorMessages", "");
      }
    }
</script>