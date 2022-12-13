<template>
  <div>
    <Cards
    v-if="!showSpinner"
    :cardList="cardList"
    @updateItem="updateItem($event)"/>
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
  import Cards from "../../../components/Cards/CardList2.vue";
  import MessageBox from "../../../components/dialogs/MessageBox.vue";
  import { get, remove } from "../../../store/modules/gcp-services";
  import { loadStories } from "./utils";

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
        Cards,
        MessageBox
      },
        data () {
    return {
            cardList: [],
            tableVM: {
                selectedFileModel: {},
                title: "Stories",
                columns: [
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "message", label: "Message", field: "", align: "left", type: "text" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createStory",
                updateItem: "updateItem",
                deleteItem: "deleteStory",
                createItemUrl: "/create-story",
                updateItemUrl: "/update-story",
                },
                dialogs:[
                { title: "Delete Story", isVisible: false, message: "Do you want to delete a story",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Story deleted successfully!",
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
         createFileModel(){
             var context = this;
             console.log(context.tableVM.createItemUrl)
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateItem(selectedFileModel){
             var context = this;
             this.$store.commit('FileModelStore/SetSelectedFileModel', selectedFileModel)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteFileModel(selectedFileModel){
             var context = this;
             context.selectedFileModel = selectedFileModel;
             console.log(context.selectedFileModel)
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
            var url = `filemanagement/${context.selectedFileModel.id}/${user.schoolId}`;
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
                        case "Delete FileModel":
                            await context.delete();
                            break;
                        case "Success":
                            await context._loadFileModels()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async _loadStories(){

                var context = this;
                var user = this.$store.getters["authenticationStore/IdentityModel"]
                this.$store.commit("authenticationStore/setShowSpinner", true);
                const { result, message } = await loadStories(user.schoolId)
                this.$store.commit("authenticationStore/setShowSpinner", false);
                this.$store.commit('storyStore/SetStories', result)
                context.tableVM.rows = result;
                context.cardList = result.map((row, i) => {
                    let  description = row.description;
                    if(description.length > 300){
                        description = row.description.substr(1, 3000);
                    }

                return {
                    id: i+1,
                    ...row,
                    name: "showPage",
                    title: row.title, 
                    description,
                    createdDate: (new Date(row.createdAt)).toDateString(),
                    qBtns: [
                            {label: "View", name: "View"},
                        ],
                    }
            })

            console.log("context.cardList: ", context.cardList);
            this.$store.commit('resultStore/SetResults', result)
            this.$store.commit('componentsStore/setCardItems', context.cardList)

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
                context.tableVM.createItemUrl = "/super-admin-create-story";
                context.tableVM.updateItemUrl = "/super-admin-update-story";
                //context.tableVM.importURL = "/super-admin-import-exam-answers";
            }
            await context._loadStories()
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
            this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
            //this.$store.commit("authenticationStore/setActiveRoute", "fileModels");
      }
    }
</script>