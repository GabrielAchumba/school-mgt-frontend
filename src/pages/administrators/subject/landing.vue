<template>
  <div>
      <div v-if="!showSpinner">
        <Form
        v-if="setIsResponsive"
        :formData="form"
        @updateListItem="updateListItem($event)"
        @deleteListItem="deleteListItem($event)"
        @qListTemplateAction="filterSubjects($event)"
        @qListAddItemAction="createSubject($event)"/>

        <Table
        v-else
        :table_VM="tableVM"
        :tableRows="tableVM.rows"
        @createSubject="createSubject($event)"
        @updateSubject="updateSubject($event)"
        @deleteSubject="deleteSubject($event)"/>
      </div>

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
  import { remove } from "../../../store/modules/services";
  import { loadSubjects } from "./utils";
  import { form } from "./view_models/landing-view-model";
  import { customFilter } from "../../../components/Utils/searchListUtil";
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
        },
        setIsResponsive(){
            const width = window.innerWidth;
            if(width < 700) return true;
            else return false;
          },
      },
      components:{
        Table,
        MessageBox,
        Form
      },
    data () {
        return {
            title: "Subjects",
            form:form,
            tableVM: {
                selectedSubject: {},
                title: "Subjects",
                columns: [
                    { name: "sn", label: "SN", field: "", align: "left", type: "text"},
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "type", label: "Type of Subject", field: "", align: "left", type: "text"},
                ],
                rows: [],
                separator: "cell",
                createItem: "createSubject",
                updateItem: "updateSubject",
                deleteItem: "deleteSubject",
                createItemUrl: "/create-subject",
                updateItemUrl: "/update-subject",
                importURL: "/import-subjects",
                },
                dialogs:[
                { title: "Delete Subject", isVisible: false, message: "Do you want to delete a Subject",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Subject deleted successfully!",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Failure", isVisible: false, message: "",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
            ]
            }
        },
        methods: {
            linkClick(selectedSchool){
                
            },
        filterSubjects(payload){
            var context = this;
            switch(payload.label){
                case "Subjects":
                    context.form.qLists[0].items = customFilter(payload.originalItems, payload.listBoxSearchModel);
                    break;
            }
        },
          okayEvent(){
            var context = this;
            context.isFetchTableDialog = false
          },
          cancelEvent(){
            var context = this;
            context.isFetchTableDialog = false
          },
         createSubject(){
             var context = this;
             console.log(context.tableVM.createItemUrl)
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateSubject(selectedSubject){
             var context = this;
             this.$store.commit('subjectStore/SetSelectedSubject', selectedSubject)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          updateListItem(selectedSubject){
             var context = this;
             console.log("selectedSubject: ", selectedSubject)
             this.$store.commit('subjectStore/SetSelectedSubject', selectedSubject)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteSubject(selectedSubject){
             var context = this;
             context.selectedSubject = selectedSubject;
             console.log(context.selectedSubject)
             context.dialogs[0].isVisible = true;
          },
          deleteListItem(selectedSubject){
             var context = this;
             context.selectedSubject = selectedSubject;
             console.log(context.selectedSubject)
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
            var url = `subject/${context.selectedSubject.id}/${user.schoolId}`;
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
                        case "Delete Subject":
                            await context.delete();
                            break;
                        case "Success":
                            await context._loadSubjects()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async _loadSubjects(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            this.$store.commit("authenticationStore/setShowSpinner", true);
            const { result, message } = await loadSubjects(user.schoolId);
            this.$store.commit("authenticationStore/setShowSpinner", false);
            this.$store.commit('subjectStore/SetSubjects', result);
            context.tableVM.rows = result.map((row, i) => {
                return {
                    sn: i+1,
                    ...row,
                }
            })

            context.form.qLists = [];
            const items = result.map((row) => {
                return {
                    id: row.id,
                    name: row.type,
                    address: "",
                    route: "/subject-landing",
                    letter: row.type.charAt(0)
                }
            });

            console.log("items: ", items) 

            context.form.title = context.title;
            context.form.qLists.push({
                label: context.title,
                items: [...items],
                originalItems: [...items],
                qBtns: [
                    {label: "Edit", name: "updateListItem", icon: "update"},
                    {label: "Delete", name: "deleteListItem", icon: "delete"},
                ],
                isAddVisible: true,
                isMenuListVisible: true,
            })
            console.log("context.form.qLists: ", context.form.qLists)

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
                context.tableVM.createItemUrl = "/super-admin-create-subject";
                context.tableVM.updateItemUrl = "/super-admin-update-subject";
                context.tableVM.importURL = "/super-admin-import-subjects";
            }
            await context._loadSubjects()
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
            this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setActiveRoute", "subject");
            this.$store.commit("authenticationStore/setImportURL", context.tableVM.importURL);
            this.$store.commit("authenticationStore/setIsError", false);
            this.$store.commit("authenticationStore/setErrorMessages", "");
            context.setBackRoute();
            this.$store.commit("authenticationStore/setPageTitle", "Subjects");  
      }
    }
</script>