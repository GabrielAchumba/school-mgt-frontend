<template>
  <div>
    <Table
    v-if="!showSpinner"
    :table_VM="tableVM"
    :tableRows="tableVM.rows"
    @createStaff="createStaff($event)"
    @updateStaff="updateStaff($event)"
    @deleteStaff="deleteStaff($event)"/>
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
  import { remove } from "../../../store/modules/services";
  import { loadStaffs } from "./utils";
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
                selectedStaff: {},
                title: "Types of Users",
                columns: [
                    { name: "sn", label: "SN", field: "", align: "left", type: "text" },
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "type", label: "Type of User", field: "", align: "left", type: "text" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createStaff",
                updateItem: "updateStaff",
                deleteItem: "deleteStaff",
                createItemUrl: "/create-staff",
                updateItemUrl: "/update-staff",
                importURL: "/import-staff",
                },
                dialogs:[
                { title: "Delete Type of User", isVisible: false, message: "Do you want to delete a type of user",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Type of user deleted successfully!",
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
         createStaff(){
             var context = this;
             console.log(context.tableVM.createItemUrl)
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateStaff(selectedStaff){
             var context = this;
             this.$store.commit('staffStore/SetSelectedStaff', selectedStaff)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteStaff(selectedStaff){
             var context = this;
             context.selectedStaff = selectedStaff;
             console.log(context.selectedStaff)
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
            var url = `staff/${context.selectedStaff.id}/${user.schoolId}`;
            const payload = {
                url,
            }

            console.log("payload: ", payload)
            this.$store.commit("authenticationStore/setShowSpinner", true);
            var response = await remove(payload)
            this.$store.commit("authenticationStore/setShowSpinner", false);

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
                        case "Delete Type of User":
                            await context.delete();
                            break;
                        case "Success":
                            await context._loadStaff()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async _loadStaff(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            this.$store.commit("authenticationStore/setShowSpinner", true);
        const { result, message } = await loadStaffs(user.schoolId);
        this.$store.commit("authenticationStore/setShowSpinner", false);
        console.log("result: ", result)
        this.$store.commit('staffStore/SetStaffs', result)
        context.tableVM.rows = result.map((row, i) => {
            return {
                sn: i+1,
                ...row
            }
        });

            if(result.length === 0){
                context.isFetchTableDialog = true;
                context.message = message;
            }

            },
          setBackRoute(){
              var user = this.$store.getters["authenticationStore/IdentityModel"];
              let backRoute= "";
              if(user.schoolId === "CEO")backRoute='/super-admin';
              else  backRoute = '/admin';
              this.$store.commit("authenticationStore/setBackRoute", backRoute);
          }
        },
        async created() {
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            if(user.schoolId === "CEO"){
                context.tableVM.createItemUrl = "/super-admin-create-staff";
                context.tableVM.updateItemUrl = "/super-admin-update-staff";
                context.tableVM.importURL = "/super-admin-import-staff";
            }
            await context._loadStaff()
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
            this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setActiveRoute", "staff");
            this.$store.commit("authenticationStore/setImportURL", context.tableVM.importURL);
            this.$store.commit("authenticationStore/setIsError", false);
            this.$store.commit("authenticationStore/setErrorMessages", "");
            context.setBackRoute();
            this.$store.commit("authenticationStore/setPageTitle", "Designations");
      }
    }
</script>