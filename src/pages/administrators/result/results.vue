<template>
  <div>
    <Table
    :table_VM="tableVM"
    :isResponsive="isResponsive"
    @createResult="createResult($event)"
    @updateResult="updateResult($event)"/>

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
    export default {
      components:{
        Table,
        MessageBox
      },
        data () {
    return {
            isResponsive: true,
            tableVM: {
                selectedResult: {},
                title: "Results",
                columns: [
                    { name: "actions", label: "Action", field: "", align: "left" },
                    { name: "studentFullName", label: "Full Name", field: "", align: "left" },
                    { name: "score", label: "Score", field: "", align: "left" },
                    { name: "scoreMax", label: "Maximum Score", field: "", align: "left" },
                    { name: "subjectFullName", label: "Subject", field: "", align: "left" },
                    { name: "teacherFullName", label: "Teacher", field: "", align: "left" },
                    { name: "classRoomFullName", label: "Class", field: "", align: "left" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createResult",
                updateItem: "updateResult",
                deleteItem: "deleteResult",
                createItemUrl: "/create-result",
                updateItemUrl: "/update-result",
                },
            dialogs:[],
            cardList: [],
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
         createResult(){
             var context = this;
             console.log(context.tableVM.createItemUrl) 
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateResult(selectedResult){
             var context = this;
             this.$store.commit('resultStore/SetSelectedResult', selectedResult)
            this.$router.push(context.tableVM.updateItemUrl);
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
        async okDialog(payload){
            console.log("payload: ", payload)
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Success":
                            await context.loadResultf()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async loadResultf(){
            var context = this;
        var url = "result";
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
            context.tableVM.cardList = result.map((row, i) => {
                return {
                    id: i+1,
                    ...row,
                    name: "showPage",
                    title: row.studentFullName, 
                    description: `${row.studentFullName} score in ${row.subjectFullName} is
                                ${row.score}/${row.scoreMax}. The class room is ${row.classRoomFullName}
                                and the instructor's name is ${row.teacherFullName}`,
                    createdDate: `${row.createdDay}/${row.createdMonth}/${row.createdYear}`,
                    qBtns: [
                            {label: "View", name: "View"},
                        ],
                    }
            })
            console.log("cardList: ", context.tableVM.cardList)
            this.$store.commit('resultStore/SetResults', result)
            this.$store.commit('componentsStore/setCardItems', context.tableVM.cardList)
            }else{
                context.isFetchTableDialog = true;
                context.message = message;
            }

            }
        },
        async created() {
            var context = this;
            await context.loadResultf()
      }
    }
</script>