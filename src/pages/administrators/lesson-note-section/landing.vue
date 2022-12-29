<template>
  <div>
    
      <div v-if="!showSpinner"
      class="q-pa-sm">
        <div v-if="setIsResponsive">
        <div 
        class="row">
            <LevelSelector class="col-12"
            :qSelect="selectors_vm.qSelectLevel"
            @onLevelValueChange="onLevelValueChange($event)"/>
            <SubjectSelector class="col-12"
            :qSelect="selectors_vm.qSelectSubject"
            @onSubjectValueChange="onSubjectValueChange($event)"/>
            <LevelSelector class="col-12"
            :qSelect="selectors_vm.qSelectLessonNotes"
            @onLevelValueChange="onLessonNoteValueChange($event)"/>
            <Form
            class="col-12"
                :formData="lessonNoteSectionsForm"
                @linkClick="GetSelectedLessonNoteSection($event)"
                @qListTemplateAction="filterLessonNoteSections($event)"/>
            <TitleDescriptionImage 
            class="col-12"
            v-if="isFileUrl(noteSection.fileUrl)"
            :title="noteSection.title"
            :description="noteSection.description"
            :imageUrl="noteSection.fileUrl"
            :imageTitle="noteSection.imageTitle"
            :imageDescription="noteSection.imageDescription"
            :isVideo="noteSection.isVideo"
            :isImage="noteSection.isImage"
            :isAudio="noteSection.isAudio"/>
            <TitleDescription
            class="col-12"
            v-else
            :title="noteSection.title"
            :description="noteSection.description"/>
        </div>
        </div>
        <div v-else>
        <q-resize-observer @resize="onResize" :debounce="0" />

        <q-splitter
        id="photos"
        v-model="splitterModel"
        :limits="[0, 100]"
        :style="splitterStyle"
        before-class="overflow-hidden"
        after-class="overflow-hidden"
        >

        <template v-slot:before>
            <div class="row">
            <LevelSelector class="col-12"
            :qSelect="selectors_vm.qSelectLevel"
            @onLevelValueChange="onLevelValueChange($event)"/>
            <SubjectSelector class="col-12"
            :qSelect="selectors_vm.qSelectSubject"
            @onSubjectValueChange="onSubjectValueChange($event)"/>
            <LevelSelector class="col-12"
            :qSelect="selectors_vm.qSelectLessonNotes"
            @onLevelValueChange="onLessonNoteValueChange($event)"/>
            <Form
                class="col-12"
                :formData="lessonNoteSectionsForm"
                @linkClick="GetSelectedLessonNoteSection($event)"
                @qListTemplateAction="filterLessonNoteSections($event)"/>
            </div>
        </template>

        <template v-slot:after>
            <TitleDescriptionImage 
            class="col-12"
            v-if="isFileUrl(noteSection.fileUrl)"
            :title="noteSection.title"
            :description="noteSection.description"
            :imageUrl="noteSection.fileUrl"
            :imageTitle="noteSection.imageTitle"
            :imageDescription="noteSection.imageDescription"
            :isVideo="noteSection.isVideo"
            :isImage="noteSection.isImage"
            :isAudio="noteSection.isAudio"/>
            <TitleDescription
            class="col-12"
            v-else
            :title="noteSection.title"
            :description="noteSection.description"/>
        </template>

        </q-splitter>
        </div>
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
    import TitleDescription from "../../../components/Common/title-description.vue";
    import TitleDescriptionImage from "../../../components/Common/title-description-image.vue";
   import Table from "../../../components/Tables/Table.vue";
   import Form from "../../../components/Forms/Form.vue";
  import MessageBox from "../../../components/dialogs/MessageBox.vue";
  import LevelSelector from "../exam/level-selector.vue";
  import SubjectSelector from "../exam/subject-selector.vue";
  import { post, get, remove } from "../../../store/modules/gcp-services";
  import { loadLessonNoteSections } from "./utils";
  import { lessonNoteSectionsForm, selectors_vm, selectedLessonNoteSectionForm } from "./view_models/landing-view-model";

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
        splitterStyle(){
            var context = this;
            return {
            height: `100vh`,
            width: `${context.width}px`,
            }
        },
        setIsResponsive(){
            const width = window.innerWidth;
            if(width < 700) return true;
            else return false;
        }
      },
      components:{
        Table,
        MessageBox,
        Form,
        LevelSelector,
        SubjectSelector,
        TitleDescription,
        TitleDescriptionImage
      },
        data () {
    return {
            width: 400, 
            splitterModel: 30, // start at 30%,
            isMobile: false,
            cardList: [],
            selectedLessonNoteSection: {},
            lessonNoteSectionsForm: lessonNoteSectionsForm,
            selectedLessonNoteSectionForm: selectedLessonNoteSectionForm,
            selectors_vm: selectors_vm,
            tableVM: {
                title: "Lesson Note Sections",
                columns: [
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "type", label: "Type of Class Room", field: "", align: "left", type: "text" },
                ],
                rows: [],
                separator: "cell",
                createItem: "createItem",
                updateItem: "updateItem",
                deleteItem: "deleteItem",
                createItemUrl: "/create-lesson-note-section",
                updateItemUrl: "/update-lesson-note-section",
                },
                dialogs:[
                { title: "Delete Lesson Note Section", isVisible: false, message: "Do you want to delete lesson note section",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Lesson note section deleted successfully!",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Failure", isVisible: false, message: "",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                ],
                selectedLevel: null,
                selectedSubject: null,
                selectedLessonNote: null,
                noteSection: {
                    title: "", 
                    description: "", 
                    fileUrl: "", 
                    imageTitle: "", 
                    imageDescription: "",
                    isVideo: false, 
                    isImage: false, 
                    isAudio: false,
                    isPdf: false,
                },
            }
        },
        methods: {
            isFileUrl(fileUrl){
                if(fileUrl === "" || fileUrl == undefined) return false;
                else return true;
            },
            getFileExtension(fileUrl){
                const arr = fileUrl.split(".")
                return arr[1];
            },
            onResize (info) {
                var context = this;
                context.width = info.width;
            },
          okayEvent(){
            var context = this;
            context.isFetchTableDialog = false
          },
          cancelEvent(){
            var context = this;
            context.isFetchTableDialog = false
          },
         createItem(){
             var context = this;
             console.log(context.tableVM.createItemUrl)
              this.$router.push(context.tableVM.createItemUrl);
          },
          updateItem(selectedLessonNoteSection){
             var context = this;
             this.$store.commit('lessonNoteSectionStore/SetSelectedLessonNoteSection', selectedLessonNoteSection)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteItem(selectedLessonNoteSection){
             var context = this;
             context.selectedLessonNoteSection = selectedLessonNoteSection;
             console.log(context.selectedLessonNoteSection)
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
            var url = `lessonnotesection/${context.selectedLessonNoteSection.id}/${user.schoolId}`;
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
                        case "Delete Lesson Note Section":
                            await context.delete();
                            break;
                        case "Success":
                            await context._loadLessonNoteSections()
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        onLevelValueChange(payload){
            console.log("selectedLevel: ", payload)
            var context = this;
            context.selectedLevel = payload.qSelect;
            context.selectors_vm.qSelectSubject.value = "";
            context.selectors_vm.qSelectLessonNotes.value = "";
            context.selectors_vm.qSelectLessonNotes.list = [];
            context.lessonNoteSectionsForm.qLists = [];
        },
        async onSubjectValueChange(payload){
            console.log("selectedSubject: ", payload)
            var context = this;
            context.selectedSubject = payload.qSelect;
            context.selectors_vm.qSelectLessonNotes.value = "";
            context.selectors_vm.qSelectLessonNotes.list = [];
            context.lessonNoteSectionsForm.qLists = [];
            await context.FetchLessonNotes();
        },
        async FetchLessonNotes(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            //this.$store.commit("authenticationStore/setShowSpinner", true);
            //console.log("context.selectedSubject: ", context.selectedSubject)
            //console.log("context.selectedLevel: ", context.selectedLevel);

            if(context.selectedSubject && context.selectedLevel){

                const payload = {
                    url: "lessonnote/notes",
                    req: {
                        subjectId: context.selectedSubject.value,
                        levelId: context.selectedLevel.value,
                        schoolId: user.schoolId,
                    }
                }

                try{
                    const response = await post(payload);
                    console.log("response.data: ", response.data);
                    context.selectors_vm.qSelectLessonNotes.list = response.data
                    .map((row) => {
                        return {
                            id: row._id,
                            type: row.title, 
                            label: row.title, 
                            value: row._id,
                        }
                    })

                    

                    //this.$store.commit("authenticationStore/setShowSpinner", false);
                    
                }catch{
                    //this.$store.commit("authenticationStore/setShowSpinner", false);
                }
            }

        },
        async onLessonNoteValueChange(payload){
            console.log("selectedLessonNote: ", payload)
            var context = this;
            context.selectedLessonNote = payload.qSelect;
            context.lessonNoteSectionsForm.qLists = [];
            await context.FetchLessonNoteSections();
        },
        GetSelectedLessonNoteSection(selectedLessonNoteSection){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            this.$store.commit("authenticationStore/setShowSpinner", true);
            try{
                
                context.noteSection.title = selectedLessonNoteSection.sectionTitle
                context.noteSection.description = selectedLessonNoteSection.content
                context.noteSection.fileUrl = selectedLessonNoteSection.fileUrl
                context.noteSection.isVideo = false
                context.noteSection.isImage = false
                context.noteSection.isAudio = false
                context.noteSection.isPdf = false
                if(context.isFileUrl(selectedLessonNoteSection.originalFileName)){
                    const fileExtension = context.getFileExtension(selectedLessonNoteSection.originalFileName)
                    switch(fileExtension){
                        case "pdf":
                            context.noteSection.isPdf = true;
                            break;
                        case "mp4":
                            context.noteSection.isVideo = true;
                            break;
                        case "mp3":
                            context.noteSection.isAudio = true;
                            break;
                        case "png":
                            context.noteSection.isImage = true;
                            break;
                        case "jpeg":
                            context.noteSection.isImage = true;
                            break;
                        case "jpg":
                            context.noteSection.isImage = true;
                            break;
                    }
                }

                this.$store.commit("authenticationStore/setShowSpinner", false);
                
            }catch{
                this.$store.commit("authenticationStore/setShowSpinner", false);
            }
        },
        async FetchLessonNoteSections(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            //this.$store.commit("authenticationStore/setShowSpinner", true);

            if(context.selectedLessonNote){

                const payload = {
                    url: "lessonnotesection/findAll",
                    req: {
                        lessonNoteId: context.selectedLessonNote.value,
                        schoolId: user.schoolId,
                    }
                }

                try{
                    const response = await post(payload);
                    console.log("response.data: ", response.data);

                    context.lessonNoteSectionsForm.qLists = [];
                    const items = response.data.map((row) => {
                        return {
                            ...row,
                            name: row.sectionTitle,
                            address: "",
                            route: "/lesson-note-section-landing",
                            letter: row.sectionTitle.charAt(0),
                        }
                    });

                    console.log("items: ", items) 

                    context.lessonNoteSectionsForm.qLists.push({
                        label: "Note Sections",
                        items: [...items],
                        originalItems: [...items],
                    })

                    //this.$store.commit("authenticationStore/setShowSpinner", false);
                    
                }catch{
                    //this.$store.commit("authenticationStore/setShowSpinner", false);
                }
            }

        },
        filterLessonNoteSections(payload){
            var context = this;
            console.log("payload: ", payload)
            switch(payload.label){
                case "Note Sections":
                    console.log("payload.originalItems: ", payload.originalItems)
                    console.log("payload.listBoxSearchModel: ", payload.listBoxSearchModel)
                    context.lessonNoteSectionsForm.qLists[0].items = customFilter(payload.originalItems, payload.listBoxSearchModel);
                    console.log("context.lessonNoteSectionsForm.qLists.items: ", context.lessonNoteSectionsForm.qLists[0].items)
                    break;
            }
        },
        initializeSelectors(){
                var context = this;
                context.selectors_vm.qSelectSubject.list = this.$store.getters["subjectStore/subjects"]
                .sort((a, b) => a.type.toLowerCase().localeCompare(b.type.toLowerCase()))
                .map((row) => {
                    return {
                        ...row,
                        label: row.type, 
                        value: row.id,
                    }
                })


                context.selectors_vm.qSelectLevel.list = this.$store.getters["levelStore/levels"]
                .sort((a, b) => a.type.toLowerCase().localeCompare(b.type.toLowerCase()))
                .map((row) => {
                    return {
                        ...row,
                        label: row.type, 
                        value: row.id,
                    }
                })
            }
        },
        async created() {
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            if(user.schoolId === "CEO"){
                context.tableVM.createItemUrl = "/super-admin-create-lesson-note-section";
                context.tableVM.updateItemUrl = "/super-admin-update-lesson-note-section";
                //context.tableVM.importURL = "/super-admin-import-exam-answers";
            }
            context.initializeSelectors();
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
            this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setIsError", false);
            this.$store.commit("authenticationStore/setErrorMessages", "");
            //this.$store.commit("authenticationStore/setActiveRoute", "fileModels");
      }
    }
</script>