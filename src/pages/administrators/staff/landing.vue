<template>
  <div>
    <Table
    :table_VM="tableVM"
    @createStaff="createStaff($event)"
    @updateStaff="updateStaff($event)"/>
  </div>
</template>

<script>
  import Table from "../../../components/Tables/Table.vue";
  import MessageBox from "../../../components/dialogs/MessageBox.vue";
  import { get } from "../../../store/modules/services"
    export default {
      components:{
        Table,
        MessageBox
      },
        data () {
    return {
            tableVM: {
                title: "Employees",
                columns: [
                    { name: "type", label: "Type of Staff", field: "", align: "left" },
                    { name: "actions", label: "Actions", field: "", align: "left" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createStaff",
                updateItem: "updateStaff",
                deleteItem: "deleteStaff",
                createItemUrl: "/create-staff",
                updateItemUrl: "/update-staff",
                },
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
        },
        async created() {
            var context = this;
        var url = "staff";
        var response = await get({
          url
        })

        const { 
              data : {
                data: result,
                message,
                success,
              }
        } = response

        if(success){
          context.tableVM.rows = result;
          this.$store.commit('staffStore/SetStaffs', result)
        }else{
            context.isFetchTableDialog = true;
            context.message = message;
        }

      }
    }
</script>