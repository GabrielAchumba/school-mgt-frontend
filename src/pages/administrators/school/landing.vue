<template>
  <div>
    <Form
        v-if="!showSpinner"
        :formData="form"
        @createSchool="createSchool($event)"
        @linkClick="linkClick($event)"/>
    <!-- <Table
    v-if="!showSpinner"
    :table_VM="tableVM"
    @createSchool="createSchool($event)"
    @linkClick="linkClick($event)"/> -->
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
    import Form from "../../../components/Forms/Form.vue";
  import MessageBox from "../../../components/dialogs/MessageBox.vue";
  import { get, remove } from "../../../store/modules/services"
  import { form } from "./view_models/landing-view-model";
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
        MessageBox,
        Form
      },
        data () {
    return {
        form:form,
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
            
            context.form.qLists = [];
            const items = result.map((row) => {
                return {
                    name: row.schoolName,
                    address: row.address,
                    route: row.schoolName.replace(/\s+/g,"_"),
                    letter: row.schoolName.charAt(0)
                }
            });

            console.log("items: ", items) 

            context.form.qLists.push({
                label: "Schools",
                items: [...items],
            })

            console.log("context.form: ", context.form)

            this.$store.commit('schoolStore/SetSchools', result)
            }else{
                context.isFetchTableDialog = true;
                context.message = message;
            }

            }
        },
        async created() {
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            if(user.schoolId === "CEO"){
                context.tableVM.createItemUrl = "/super-admin-create-school";
                context.tableVM.updateItemUrl = "/super-admin-update-school";
                //context.tableVM.importURL = "/super-admin-import-results";
            }
            await context.loadSchools()
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
            this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
      }
    }
</script>