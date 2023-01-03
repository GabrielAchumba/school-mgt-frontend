<template>
  <div>
    <Table
    v-if="!showSpinner"
    :table_VM="tableVM"
    :tableRows="tableVM.rows"
    @createLevel="createLevel($event)"
    @updateLevel="updateLevel($event)"
    @deleteLevel="deleteLevel($event)"
    @deleteAllItems="deleteLevels($event)"/>
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
  import { remove, post } from "../../../store/modules/services";
  import { loadLevels } from "./utils";
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
                selectedLevel: {},
                title: "Levels",
                columns: [
                    { name: "sn", label: "SN", field: "", align: "left", type: "text"},
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "type", label: "Type of Level", field: "", align: "left", type: "text"},
                ],
                rows: [],
                separator: "cell",
                createItem: "createLevel",
                updateItem: "updateLevel",
                deleteItem: "deleteLevel",
                createItemUrl: "/create-level",
                updateItemUrl: "/update-level",
                importURL: "/import-levels",
                },
                dialogs:[
                { title: "Delete Level", isVisible: false, message: "Do you want to delete a level",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Level deleted successfully!",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Failure", isVisible: false, message: "",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Delete Levels", isVisible: false, message: "Do you want to delete levels",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Delete Success", isVisible: false, message: "Levels deleted successfully!",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Delete Failure", isVisible: false, message: "",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                ],
                ids: [],
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
         createLevel(){
             var context = this;
             console.log(context.tableVM.createItemUrl)
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateLevel(selectedLevel){
             var context = this;
             this.$store.commit('levelStore/SetSelectedLevel', selectedLevel)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteLevel(selectedLevel){
             var context = this;
             context.selectedLevel = selectedLevel;
             console.log(context.selectedLevel)
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
        deleteLevels(checkBoxModels){
            console.log("checkBoxModels: ", checkBoxModels)
            var context = this;
            context.ids = [];
            let i = -1;
            for(const checkBoxModel of checkBoxModels){
                i++;
                if(checkBoxModel === "Agreed") context.ids.push(context.tableVM.rows[i].id)
            }
            console.log("context.ids: ", context.ids);
            //context.dialogs[3].isVisible = true;
        },
        async delete(){
            var context = this;
            
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            var url = `level/${context.selectedLevel.id}/${user.schoolId}`;
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
        async deleteAll(){
            var context = this;
            
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            var url = `level/deletemany`;
            const payload = {
                url,
                req: {
                    ids: context.ids,
                    schoolId: user.schoolId,
                }
            }

            var response = await post(payload)

            const { 
                data : {
                    message,
                    success,
                }
            } = response
            if(success){
                context.dialogs[4].isVisible = true;
            }else{
                context.dialogs[5].message = message;
                context.dialogs[5].isVisible = true;
            }

        },
        async okDialog(payload){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Delete Level":
                            await context.delete();
                            break;
                        case "Success":
                            await context._loadLevels()
                            break;
                        case "Delete Levels":
                            await context.deleteAll();
                            break;
                        case "Delete Success":
                            await context._loadLevels()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async _loadLevels(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            this.$store.commit("authenticationStore/setShowSpinner", true);
            const { result, message } = await loadLevels(user.schoolId);
            this.$store.commit("authenticationStore/setShowSpinner", false);
            this.$store.commit('levelStore/SetLevels', result);
            context.tableVM.rows = result.map((row, i) => {
                return {
                    sn: i+1,
                    ...row,
                    route: "/level-landing"
                }
            })
            console.log("context.tableVM.rows: ", context.tableVM.rows)
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
                context.tableVM.createItemUrl = "/super-admin-create-level";
                context.tableVM.updateItemUrl = "/super-admin-update-level";
                //context.tableVM.importURL = "/super-admin-import-exam-answers";
            }
            await context._loadLevels()
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
            this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setActiveRoute", "level");
            this.$store.commit("authenticationStore/setImportURL", context.tableVM.importURL);
            this.$store.commit("authenticationStore/setIsError", false);
            this.$store.commit("authenticationStore/setErrorMessages", "");
      }
    }
</script>