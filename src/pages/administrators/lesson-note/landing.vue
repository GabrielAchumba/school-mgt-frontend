<template>
  <div>
      <q-scroll-area style="height: 80vh; max-width: 100%;">
      <div v-if="!showSpinner"
      class="q-pa-sm">
        <div v-if="setIsResponsive">
        <div 
        class="row">
            <LevelSelector 
            v-show="!isLesson"
            class="col-12"
            :qSelect="selectors_vm.qSelectLevel"
            @onLevelValueChange="onLevelValueChange($event)"/>
            <SubjectSelector 
            v-show="!isLesson"
            class="col-12"
            :qSelect="selectors_vm.qSelectSubject"
            @onSubjectValueChange="onSubjectValueChange($event)"/>
            <Form
            v-show="!isLesson"
            class="col-12"
                :formData="lessonNotesForm"
                @readNote="GetSelectedLessonNote($event)"
                @editNote="editNote($event)"
                @deleteNote="deleteNote($event)"
                @qListTemplateAction="filterLessonNotes($event)"
                @qListAddItemAction="createLessonNote($event)"/>
            <div
            v-show="isLesson"
            class="col-12"
            v-for="noteSection in noteSections" 
            :key="noteSection.title" >
                <TitleDescriptionImage 
                v-if="isFileUrl(noteSection.fileUrl)"
                :title="noteSection.title"
                :description="noteSection.description"
                :imageUrl="noteSection.fileUrl"
                :imageTitle="noteSection.imageTitle"
                :imageDescription="noteSection.imageDescription"
                :isVideo="noteSection.isVideo"
                :isImage="noteSection.isImage"
                :isAudio="noteSection.isAudio"/>
                <Title
                v-if="noteSection.isTitle"
                :title="noteSection.title"/>
                <TitleDescription
                v-else
                :title="noteSection.title"
                :description="noteSection.description"/>
            </div>
            <div 
             v-show="isLesson"
            class="col-12 q-pa-sm">
                <q-space />
                <div class="text-right">
                <q-btn class="q-ma-sm bg-accent text-primary"
                label="Done"
                type="button"
                size="sm"
                no-caps
                @click="IslessonAction"
                />
                </div>
            </div>
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
            @onSubjectValueChange="onSubjectValueChange($event)"
            @qListTemplateAction="filterLessonNotes($event)"/>
            <Form
                class="col-12"
                :formData="lessonNotesForm"
                @readNote="GetSelectedLessonNote($event)"
                @editNote="editNote($event)"
                @deleteNote="deleteNote($event)"
                @qListTemplateAction="filterLessonNotes($event)"
                @qListAddItemAction="createLessonNote($event)"/>
            </div>
        </template>

        <template v-slot:after>
             <q-scroll-area style="height: 100vh; max-width: 100%;">
            <div
            v-for="noteSection in noteSections" 
            :key="noteSection.title" >
                <TitleDescriptionImage 
                :title="noteSection.title"
                :description="noteSection.description"
                :imageUrl="noteSection.fileUrl"
                :imageTitle="noteSection.imageTitle"
                :imageDescription="noteSection.imageDescription"
                :isVideo="noteSection.isVideo"
                :isImage="noteSection.isImage"
                :isAudio="noteSection.isAudio"/>
                <!-- <Title
                v-if="noteSection.isTitle"
                :title="noteSection.title"/>
                <TitleDescription
                v-if="!isFileUrl(noteSection.fileUrl)"
                :title="noteSection.title"
                :description="noteSection.description"/> -->
            </div>
             </q-scroll-area>
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
        </q-scroll-area>
  </div>
</template>

<script>
    import TitleDescription from "../../../components/Common/title-description.vue";
    import Title from "../../../components/Common/title-description2.vue";
    import TitleDescriptionImage from "../../../components/Common/title-description-image.vue";
  import Table from "../../../components/Tables/Table.vue";
  import Form from "../../../components/Forms/Form.vue";
  import MessageBox from "../../../components/dialogs/MessageBox.vue";
  import LevelSelector from "../exam/level-selector.vue";
  import SubjectSelector from "../exam/subject-selector.vue";
  import { post, remove, get } from "../../../store/modules/gcp-services"
  import { lessonNotesForm, selectors_vm, selectedLessonNoteForm } from "./view_models/landing-view-model";
  import { splitAssessment } from "./utils";
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
        TitleDescriptionImage,
        Title,
      },
    data () {
    return {
            isLesson: false,
            width: 400, 
            splitterModel: 30, // start at 30%,
            isMobile: false,
            selectedLessonNote: {},
            lessonNotesForm: lessonNotesForm,
            selectors_vm: selectors_vm,
            tableVM: {
                title: "Lesson Notes",
                columns: [
                    { name: "actions", label: "Actions", field: "", align: "left", type: "" },
                    { name: "title", label: "Title", field: "", align: "left", type: "text" }, 
                ],
                rows: [],
                separator: "cell",
                createItem: "createLessonNote",
                updateItem: "updateLessonNote",
                deleteItem: "deleteLessonNote",
                createItemUrl: "/create-lesson-note",
                updateItemUrl: "/update-lesson-note",
                },
                dialogs:[
                { title: "Delete Lesson Note", isVisible: false, message: "Do you want to delete lesson note",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "Lesson note deleted successfully!",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Failure", isVisible: false, message: "",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                ],
                selectedLevel: null,
                selectedSubject: null,
                selectedLessonNoteForm: selectedLessonNoteForm,
                noteSections: [],
            }
        },
        methods: {
            IslessonAction(){
                var context = this;
                context.isLesson = context.isLesson === true ? false : true;
            },
            isFileUrl(fileUrl){
                let check = true;
                if(fileUrl === "" || fileUrl == undefined) check = false;
                console.log("check: ", check)
                return check;
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
         createLessonNote(){
             var context = this;
              this.$router.push(context.tableVM.createItemUrl);
          },
          editNote(selectedLessonNote){
             var context = this;
             this.$store.commit('lessonNoteStore/SetSelectedLessonNote', selectedLessonNote)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          updateLessonNote(selectedLessonNote){
             var context = this;
             this.$store.commit('lessonNoteStore/SetSelectedLessonNote', selectedLessonNote)
            this.$router.push(context.tableVM.updateItemUrl);
          },
          deleteLessonNote(selectedLessonNote){
             var context = this;
             context.selectedLessonNote = selectedLessonNote;
             console.log(context.selectedLessonNote)
             context.dialogs[0].isVisible = true;
          },
          deleteNote(selectedLessonNote){
             var context = this;
             context.selectedLessonNote = selectedLessonNote;
             console.log(context.selectedLessonNote)
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
            var url = `lessonnote/${context.selectedLessonNote.id}/${user.schoolId}`;
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
                        case "Delete Lesson Note":
                            await context.delete();
                            break;
                        case "Success":
                            await context.loadLessonNotes()
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
            context.lessonNotesForm.qLists = [];
            context.noteSections = []
        },
        async onSubjectValueChange(payload){
            console.log("selectedSubject: ", payload)
            var context = this;
            context.selectedSubject = payload.qSelect;
            context.noteSections = []
            await context.FetchLessonNotes();
        },
        async GetSelectedLessonNote(selectedLessonNote){
            console.log("selectedLessonNote: ", selectedLessonNote)
            console.log()
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            this.$store.commit("authenticationStore/setShowSpinner", true);

            try{

                const payload = {
                    url: `lessonnotesection/findAll`,
                    req: {
                        lessonNoteId: selectedLessonNote._id,
                        schoolId: user.schoolId,              
                    }
                }
                
                const response = await post(payload);
                let description = "";
                let title = "";
                console.log("response: ", response)
                let noteSections = [];
                noteSections.push({
                    title: selectedLessonNote.title, 
                    description: "", 
                    fileUrl: "", 
                    imageTitle: "", 
                    imageDescription: "",
                    isVideo: false, 
                    isImage: false, 
                    isAudio: false,
                    isPdf: false,
                    isTitle: true,
                })
                let i = 0;
                for(const item of response.data){
                    i++;
                    title = item.sectionTitle;
                    title = title.replace("<pre","<p");
                    title = title.replace("</pre>","");
                    description =  item.content;
                    description=description.replace("<pre>","");
                    description=description.replace("</pre>","</p>");
                    description=title + description;

                    console.log("description: ", description)

                    noteSections.push({
                        title: "", 
                        description: description, 
                        fileUrl: item.fileUrl,
                        imageTitle: "", 
                        imageDescription: "",
                        isVideo: false, 
                        isImage: false, 
                        isAudio: false,
                        isPdf: false,
                    })

                    if(context.isFileUrl(item.originalFileName)){
                        const fileExtension = context.getFileExtension(item.originalFileName)
                        switch(fileExtension){
                            case "pdf":
                                noteSections[i].isPdf = true;
                                break;
                            case "mp4":
                                noteSections[i].isVideo = true;
                                break;
                            case "mp3":
                                noteSections[i].isAudio = true;
                                break;
                            case "png":
                                noteSections[i].isImage = true;
                                break;
                            case "jpeg":
                                noteSections[i].isImage = true;
                                break;
                            case "jpg":
                                noteSections[i].isImage = true;
                                break;
                        }
                    }
                }

                context.isLesson = true;
                context.noteSections = [...noteSections]

                console.log("context.noteSections: ", context.noteSections)

                this.$store.commit("authenticationStore/setShowSpinner", false);
                
            }catch{
                this.$store.commit("authenticationStore/setShowSpinner", false);
            }
        },
        async FetchLessonNotes(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            //this.$store.commit("authenticationStore/setShowSpinner", true);
            console.log("context.selectedSubject: ", context.selectedSubject)
            console.log("context.selectedLevel: ", context.selectedLevel);

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

                    context.lessonNotesForm.qLists = [];
                    const items = response.data.map((row) => {
                        return {
                            ...row,
                            name: row.title,
                            address: "",
                            route: "/lesson-note-landing",
                            letter: row.title.charAt(0),
                        }
                    });

                    console.log("items: ", items) 

                    context.lessonNotesForm.qLists.push({
                        label: "Notes",
                        items: [...items],
                        originalItems: [...items],
                        qBtns: [
                            {label: "Read", name: "readNote", icon: "view"},
                            {label: "Edit", name: "editNote", icon: "update"},
                            {label: "Delete", name: "deleteNote", icon: "delete"},
                        ]
                    })

                    //this.$store.commit("authenticationStore/setShowSpinner", false);
                    
                }catch{
                    //this.$store.commit("authenticationStore/setShowSpinner", false);
                }
            }

        },
        filterLessonNotes(payload){
            var context = this;
            console.log("payload: ", payload)
            switch(payload.label){
                case "Notes":
                    console.log("payload.originalItems: ", payload.originalItems)
                    console.log("payload.listBoxSearchModel: ", payload.listBoxSearchModel)
                    context.lessonNotesForm.qLists[0].items = customFilter(payload.originalItems, payload.listBoxSearchModel);
                    console.log("context.lessonNotesForm.qLists.items: ", context.lessonNotesForm.qLists[0].items)
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
                context.noteSections = []
            } 
        },
        created() {
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            if(user.schoolId === "CEO"){
                context.tableVM.createItemUrl = "/super-admin-create-lesson-note";
                context.tableVM.updateItemUrl = "/super-admin-update-lesson-note";
            }
            context.initializeSelectors();
            this.$store.commit("authenticationStore/setCreateURL", context.tableVM.createItemUrl);
            this.$store.commit("authenticationStore/setActiveColumns", context.tableVM.columns);
            this.$store.commit("authenticationStore/setActiveRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setNewRows", context.tableVM.rows);
            this.$store.commit("authenticationStore/setActiveRoute", "lessonnotes");
            this.$store.commit("authenticationStore/setIsError", false);
            this.$store.commit("authenticationStore/setErrorMessages", "");
      }
    }
</script>