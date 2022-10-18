<template>
  <div>
    <Table
    :table_VM="tableVM"
    @createUser="createUser($event)"
    @updateUser="updateUser($event)"
    @deleteUser="deleteUser($event)"/>

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
                    { name: "actions", label: "Actions", field: "", align: "left" },
                    { name: "firstName", label: "First Name", field: "", align: "left" },
                    { name: "lastName", label: "Last Name", field: "", align: "left" },
                    { name: "designation", label: "Designation", field: "", align: "left" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createUser",
                updateItem: "updateUser",
                deleteItem: "deleteUser",
                createItemUrl: "/create-user",
                updateItemUrl: "/update-user",
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
                            await context._loadUser()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async _loadUser(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            const { result, message } = await loadUsers(user.schoolId);
            this.$store.commit('userStore/SetUsers', result)
            context.tableVM.rows = result;

            if(result.length === 0){
                context.isFetchTableDialog = true;
                context.message = message;
            }

            }
        },
        async created() {
            var context = this;
            await context._loadUser()
      }
    }
</script>