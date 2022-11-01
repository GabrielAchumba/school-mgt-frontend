<template>
  <div>
    <Table
    :table_VM="tableVM"
    @createSchool="createSchool($event)"
    @linkClick="linkClick($event)"/>
    <div 
      v-show="showSpinner"
      class="q-gutter-md row">
        <div class="col-12 q-pa-sm absolute-center flex flex-center">
            <q-spinner
                color="accent"
                size="3em"
                :thickness="10"
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
    export default {
      computed:{
          showSpinner(){
            return this.$store.getters["authenticationStore/showSpinner"];
        }
      },
      components:{
        Table,
        MessageBox
      },
        data () {
    return {
            tableVM: {
                selectedSchool: {},
                title: "Schools",
                columns: [
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "route", label: "School Website", field: "", align: "left", type: "text" },
                    { name: "schoolName", label: "School", field: "", align: "left", type: "text" },
                    { name: "address", label: "Address", field: "", align: "left", type: "text" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createSchool",
                updateItem: "updateSchool",
                deleteItem: "deleteSchool",
                createItemUrl: "/create-school",
                updateItemUrl: "/update-school",
                },
                dialogs:[
                { title: "Delete School", isVisible: false, message: "Do you want to delete a School",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "School deleted successfully!",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Failure", isVisible: false, message: "",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
            ]
            }
        },
        methods: {
            linkClick(selectedSchool){
                this.$emit("linkClick", selectedSchool)
            },
          okayEvent(){
            var context = this;
            context.isFetchTableDialog = false
          },
          cancelEvent(){
            var context = this;
            context.isFetchTableDialog = false
          },
         createSchool(){
             var context = this;
             console.log(context.tableVM.createItemUrl)
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateSchool(selectedSchool){
             var context = this;
             this.$store.commit('schoolStore/SetSelectedSchool', selectedSchool)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteSchool(selectedSchool){
             var context = this;
             context.selectedSchool = selectedSchool;
             console.log(context.selectedSchool)
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
            
            var url = `school/${context.selectedSchool.id}`;
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
                        case "Delete School":
                            await context.delete();
                            break;
                        case "Success":
                            await context.loadSchools()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async loadSchools(){
            var context = this;
        var url = "school";
        this.$store.commit("authenticationStore/setShowSpinner", true);
        var response = await get({
          url
        })
        this.$store.commit("authenticationStore/setShowSpinner", false);

        const { 
                data : {
                    data: result,
                    message,
                    success,
                }
            } = response

            if(success){
            context.tableVM.rows = result.map((row) => {
                return {
                    ...row,
                    route: row.schoolName.replace(/\s+/g,"_")
                }
            });
            this.$store.commit('schoolStore/SetSchools', result)
            }else{
                context.isFetchTableDialog = true;
                context.message = message;
            }

            }
        },
        async created() {
            var context = this;
            await context.loadSchools()
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
            this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
      }
    }
</script>