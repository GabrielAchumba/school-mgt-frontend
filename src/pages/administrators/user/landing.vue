<template>
  <div>
    <Table
    v-if="!showSpinner"
    :table_VM="tableVM"
    :tableRows="tableVM.rows"
    @createUser="createUser($event)"
    @updateUser="updateUser($event)"
    @deleteUser="deleteUser($event)"/>
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
  import { loadUsers } from "./utils";
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
                selectedUser: {},
                title: "Users",
                columns: [
                    { name: "sn", label: "SN", field: "", align: "left", type: "text" },
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "firstName", label: "First Name", field: "", align: "left", type: "text" },
                    { name: "lastName", label: "Last Name", field: "", align: "left", type: "text" },
                    { name: "userType", label: "User Type", field: "", align: "left", type: "text" },
                    { name: "designation", label: "Designation", field: "", align: "left", type: "text" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createUser",
                updateItem: "updateUser",
                deleteItem: "deleteUser",
                createItemUrl: "/create-user",
                updateItemUrl: "/update-user",
                importURL: "/import-users",
                },
                dialogs:[
                { title: "Delete User", isVisible: false, message: "Do you want to delete a user",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "User deleted successfully!",
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
         createUser(){
             var context = this;
             console.log(context.tableVM.createItemUrl)
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateUser(selectedUser){
             var context = this;
             console.log("selectedUser: ", selectedUser)
             this.$store.commit('userStore/SetSelectedUser', selectedUser)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteUser(selectedUser){
             var context = this;
             context.selectedUser = selectedUser;
             console.log(context.selectedUser)
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
            var url = `user/${context.selectedUser.id}/${user.schoolId}`;
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
                        case "Delete User":
                            await context.delete();
                            break;
                        case "Success":
                            await context._loadUsers()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async _loadUsers(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            this.$store.commit("authenticationStore/setShowSpinner", true);
            const { result, message } = await loadUsers(user.schoolId);
            this.$store.commit("authenticationStore/setShowSpinner", false);
            this.$store.commit('userStore/SetUsers', result)
            context.tableVM.rows = result.map((row, i) => {
                return {
                    sn: i+1,
                    ...row
                }
            })
            console.log("result: ", result)

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
                context.tableVM.createItemUrl = "/super-admin-create-user";
                context.tableVM.updateItemUrl = "/super-admin-update-user";
                context.tableVM.importURL = "/super-admin-import-users";
            }
            await context._loadUsers()
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
            this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setActiveRoute", "user");
            this.$store.commit("authenticationStore/setImportURL", context.tableVM.importURL);
            this.$store.commit("authenticationStore/setIsError", false);
            this.$store.commit("authenticationStore/setErrorMessages", "");
            context.setBackRoute();
            this.$store.commit("authenticationStore/setPageTitle", "Users");  

      }
    }
</script>