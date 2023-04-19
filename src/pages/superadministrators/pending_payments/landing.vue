<template>
  <div>
    <Table
    :table_VM="tableVM"
    :tableRows="tableRows"
    @createPendingPayment="createPendingPayment($event)"
    @updatePendingPayment="updatePendingPayment($event)"
    @deletePendingPayment="deletePendingPayment($event)"/>

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
  import { get, remove } from "../../../store/modules/services";
  import { loadPendingPayments } from "./utils";

    export default {
      components:{
        Table,
        MessageBox
      },
        data () {
    return {
            tableVM: {
                selectedPendingPayment: {},
                title: "Pending Payments",
                columns: [
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "accountNamePaidFrom", label: "Account Name", field: "", align: "left", type: "text" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createPendingPayment",
                updateItem: "updatePendingPayment",
                deleteItem: "deletePendingPayment",
                createItemUrl: "/create-pending-payment",
                updateItemUrl: "/update-pending-payment",
                },
                tableRows: [],
                dialogs:[
                { title: "Delete PendingPayment", isVisible: false, message: "Do you want to delete a Class Room",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "PendingPayment deleted successfully!",
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
         createPendingPayment(){
          },
          updatePendingPayment(selectedPendingPayment){
             var context = this;
             this.$store.commit('subscriptionStore/SetSelectedPendingPayment', selectedPendingPayment)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deletePendingPayment(selectedPendingPayment){

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
            var url = `PendingPayment/${context.selectedPendingPayment.id}/${user.schoolId}`;
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
                        case "Delete PendingPayment":
                            await context.delete();
                            break;
                        case "Success":
                            await context._loadPendingPayments()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async _loadPendingPayments(){

                var context = this;
                var user = this.$store.getters["authenticationStore/IdentityModel"]
                const { result, message } = await loadPendingPayments(user.schoolId)
                //this.$store.commit('subscriptionStore/SetPendingPayments', result)
                context.tableVM.rows = result;

                if(result.length === 0){
                    context.isFetchTableDialog = true;
                    context.message = message;
                }

            }
        },
        async created() {
            var context = this;
            await context._loadPendingPayments()
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
            this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setActiveRoute", "PendingPayments");
      }
    }
</script>