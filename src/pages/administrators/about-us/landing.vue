<template>
  <div>
    <Table
    :table_VM="tableVM"
    @createAboutUs="createAboutUs($event)"
    @updateAboutUs="updateAboutUs($event)"
    @deleteAboutUs="deleteAboutUs($event)"/>
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
  import { get, remove } from "../../../store/modules/gcp-services";
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
                selectedAboutUs: {},
                title: "About Us",
                columns: [
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "title", label: "Title", field: "", align: "left", type: "text" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createAboutUs",
                updateItem: "updateAboutUs",
                deleteItem: "deleteAboutUs",
                createItemUrl: "/create-about-us",
                updateItemUrl: "/update-about-us",
                },
                dialogs:[
                { title: "Delete About Us", isVisible: false, message: "Do you want to delete about us",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "About us deleted successfully!",
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
         createAboutUs(){
             var context = this;
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateAboutUs(selectedAboutUs){
             var context = this;
             this.$store.commit('AboutUsStore/SetSelectedAboutUs', selectedAboutUs)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteAboutUs(selectedAboutUs){
             var context = this;
             context.selectedAboutUs = selectedAboutUs;
             console.log(context.selectedAboutUs)
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
            var url = `aboutus/${context.selectedAboutUs.id}/${user.schoolId}`;
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
                        case "Delete About Us":
                            await context.delete();
                            break;
                        case "Success":
                            await context.loadAboutUs()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async loadAboutUs(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            this.$store.commit("authenticationStore/setShowSpinner", true);
            var url = `aboutus/files/${user.schoolId}`;
            var response = await get({
            url
            })
            this.$store.commit("authenticationStore/setShowSpinner", false);

            context.tableVM.rows = response.data;
            this.$store.commit('AboutUsStore/SetAboutUses', response.data)

        

        

        }
        },
        async created() {
            var context = this;
            await context.loadAboutUs()
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
            this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
            //this.$store.commit("authenticationStore/setActiveRoute", "aboutUs");
      }
    }
</script>