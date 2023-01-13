<template>
  <div>
    <Table
    v-if="!showSpinner"
    :table_VM="tableVM"
    :tableRows="tableVM.rows"
    @updateItem="updateItem($event)"
    @deleteLogo="deleteLogo($event)"/>
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
  import { loadLogos } from "./utils";

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
                selectedLogo: {},
                title: "Logos",
                columns: [
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "primaryColor", label: "Primary Color", field: "", align: "left", type: "text" },
                    { name: "secondaryColor", label: "Secondary Color", field: "", align: "left", type: "text" },
                    { name: "tertiaryColor", label: "Tertiary Color", field: "", align: "left", type: "text" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createLogo",
                updateItem: "updateItem",
                deleteItem: "deleteLogo",
                createItemUrl: "/create-logo",
                updateItemUrl: "/update-logo",
                },
                dialogs:[
                { title: "Delete Logo", isVisible: false, message: "Do you want to delete a logo",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Logo deleted successfully!",
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
         createLogo(){
             var context = this;
             console.log(context.tableVM.createItemUrl)
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateItem(selectedLogo){
             var context = this;
             this.$store.commit('LogoStore/SetSelectedLogo', selectedLogo)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteLogo(selectedLogo){
             var context = this;
             context.selectedLogo = selectedLogo;
             console.log(context.selectedLogo)
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
            var url = `logo/${context.selectedLogoModel.id}/${user.schoolId}`;
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
                        case "Delete Logo":
                            await context.delete();
                            break;
                        case "Success":
                            await context._loadLogos()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async _loadLogos(){

                var context = this;
                var user = this.$store.getters["authenticationStore/IdentityModel"]
                this.$store.commit("authenticationStore/setShowSpinner", true);
                const { result, message } = await loadLogos(user.schoolId)
                this.$store.commit("authenticationStore/setShowSpinner", false);
                this.$store.commit('LogoStore/SetLogos', result)
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
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            if(user.schoolId === "CEO"){
                context.tableVM.createItemUrl = "/super-admin-create-logo";
                context.tableVM.updateItemUrl = "/super-admin-update-logo";
            }
            await context._loadLogos()
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
            this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
            //this.$store.commit("authenticationStore/setActiveRoute", "LogoModels");
            this.$store.commit("authenticationStore/setIsError", false);
            this.$store.commit("authenticationStore/setErrorMessages", "");
      }
    }
</script>