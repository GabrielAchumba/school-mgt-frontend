<template>
  <div>
    <Table
    v-if="!showSpinner"
    :table_VM="tableVM"
    @updateItem="updateItem($event)"
    @deleteCoreValue="deleteCoreValue($event)"/>
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
  import Table from "../../../../components/Tables/Table.vue";
  import MessageBox from "../../../../components/dialogs/MessageBox.vue";
  import { get, remove } from "../../../../store/modules/gcp-services";
  import { loadCoreValues } from "./utils";

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
            tableVM: {
                selectedCoreValue: {},
                title: "CoreValues",
                columns: [
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "title", label: "Title", field: "", align: "left", type: "text" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createCoreValue",
                updateItem: "updateItem",
                deleteItem: "deleteCoreValue",
                createItemUrl: "/create-core-value",
                updateItemUrl: "/update-core-value",
                },
                dialogs:[
                { title: "Delete Core Value", isVisible: false, message: "Do you want to delete core value",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Core value deleted successfully!",
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
         createCoreValue(){
             var context = this;
             console.log(context.tableVM.createItemUrl)
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateItem(selectedCoreValue){
             var context = this;
             this.$store.commit('CoreValueStore/SetSelectedCoreValue', selectedCoreValue)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteCoreValue(selectedCoreValue){
             var context = this;
             context.selectedCoreValue = selectedCoreValue;
             console.log(context.selectedCoreValue)
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
            var url = `corevalue/${context.selectedCoreValueModel.id}/${user.schoolId}`;
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
                        case "Delete Core Value":
                            await context.delete();
                            break;
                        case "Success":
                            await context._loadCoreValues()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async _loadCoreValues(){

                var context = this;
                var user = this.$store.getters["authenticationStore/IdentityModel"]
                this.$store.commit("authenticationStore/setShowSpinner", true);
                const { result, message } = await loadCoreValues(user.schoolId)
                this.$store.commit("authenticationStore/setShowSpinner", false);
                this.$store.commit('CoreValueStore/SetCoreValues', result)
                context.tableVM.rows = result;
                
            this.$store.commit('resultStore/SetResults', result)

                if(result.length === 0){
                    context.isFetchTableDialog = true;
                    context.message = message;
                }

            }
        },
        async created() {
            var context = this;
            await context._loadCoreValues()
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
            this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
            //this.$store.commit("authenticationStore/setActiveRoute", "CoreValueModels");
      }
    }
</script>