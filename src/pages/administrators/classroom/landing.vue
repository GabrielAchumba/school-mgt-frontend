<template>
  <div>
    <Table
    v-if="!showSpinner"
    :table_VM="tableVM"
    :tableRows="tableVM.rows"
    @createClassRoom="createClassRoom($event)"
    @updateClassRoom="updateClassRoom($event)"
    @deleteClassRoom="deleteClassRoom($event)"/>
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
  import { get, remove } from "../../../store/modules/services";
  import { loadClassRooms } from "./utils";

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
                selectedClassRoom: {},
                title: "Class Rooms",
                columns: [
                    { name: "sn", label: "SN", field: "", align: "left", type: "text" },
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "type", label: "Class Room", field: "", align: "left", type: "text" },
                    { name: "level", label: "Level", field: "", align: "left", type: "text" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createClassRoom",
                updateItem: "updateClassRoom",
                deleteItem: "deleteClassRoom",
                createItemUrl: "/create-class-room",
                updateItemUrl: "/update-class-room",
                importURL: "/import-class-rooms",
                },
                dialogs:[
                { title: "Delete ClassRoom", isVisible: false, message: "Do you want to delete a Class Room",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "ClassRoom deleted successfully!",
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
         createClassRoom(){
             var context = this;
             console.log(context.tableVM.createItemUrl)
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateClassRoom(selectedClassRoom){
             var context = this;
             this.$store.commit('classRoomStore/SetSelectedClassRoom', selectedClassRoom)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteClassRoom(selectedClassRoom){
             var context = this;
             context.selectedClassRoom = selectedClassRoom;
             console.log(context.selectedClassRoom)
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
            var url = `classroom/${context.selectedClassRoom.id}/${user.schoolId}`;
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
                        case "Delete ClassRoom":
                            await context.delete();
                            break;
                        case "Success":
                            await context._loadClassRooms()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async _loadClassRooms(){

                var context = this;
                var user = this.$store.getters["authenticationStore/IdentityModel"]
                this.$store.commit("authenticationStore/setShowSpinner", true);
                const { result, message } = await loadClassRooms(user.schoolId)
                this.$store.commit("authenticationStore/setShowSpinner", false);
                this.$store.commit('classRoomStore/SetClassRooms', result)
                context.tableVM.rows = result.map((row, i) => {
                    let selectedItem = this.$store.getters["levelStore/levels"].find(o => o.id === row.levelId);
                    const level= selectedItem.type;
                    return {
                        sn: i+1,
                        ...row,
                        level,
                    }
                })

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
                context.tableVM.createItemUrl = "/super-admin-create-class-room";
                context.tableVM.updateItemUrl = "/super-admin-update-class-room";
            }
            await context._loadClassRooms()
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
            this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setActiveRoute", "classrooms");
            this.$store.commit("authenticationStore/setImportURL", context.tableVM.importURL);
            this.$store.commit("authenticationStore/setIsError", false);
            this.$store.commit("authenticationStore/setErrorMessages", "");
            context.setBackRoute();
            this.$store.commit("authenticationStore/setPageTitle", "Class Rooms");  
      }
    }
</script>