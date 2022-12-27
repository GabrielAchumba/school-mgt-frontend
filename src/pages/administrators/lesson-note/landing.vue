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
            <Form
            class="col-12"
                :formData="lessonNotesForm"
                @linkClick="GetSelectedLessonNote($event)"/>
            <div
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
                <TitleDescription
                v-else
                :title="noteSection.title"
                :description="noteSection.description"/>
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
            @onSubjectValueChange="onSubjectValueChange($event)"/>
            <Form
                class="col-12"
                :formData="lessonNotesForm"
                @linkClick="GetSelectedLessonNote($event)"/>
            </div>
        </template>

        <template v-slot:after>
             <q-scroll-area style="height: 100vh; max-width: 100%;">
            <div
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
                <TitleDescription
                v-else
                :title="noteSection.title"
                :description="noteSection.description"/>
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
        TitleDescriptionImage
      },
    data () {
    return {
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
         createLessonNote(){
             var context = this;
              this.$router.push(context.tableVM.createItemUrl);
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
        },
        async onSubjectValueChange(payload){
            console.log("selectedSubject: ", payload)
            var context = this;
            context.selectedSubject = payload.qSelect;
            await context.FetchLessonNotes();
        },
        async GetSelectedLessonNote(selectedLessonNote){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            this.$store.commit("authenticationStore/setShowSpinner", true);

            context.noteSections = [];
            context.noteSections.push({
                title: selectedLessonNote.title, 
                description: "", 
                fileUrl: "", 
                imageTitle: "", 
                imageDescription: "",
                isVideo: false, 
                isImage: false, 
                isAudio: false,
                isPdf: false,
            })

            try{

                const payload = {
                    url: `lessonnotesection/findAll`,
                    req: {
                        lessonNoteId: selectedLessonNote._id,
                        schoolId: user.schoolId,              
                    }
                }
                
                const response = await post(payload);
                console.log("response: ", response)
                let i = 0;
                for(const item of response.data){
                    i++;
                    context.noteSections.push({
                        title: item.sectionTitle, 
                        description: item.content, 
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
                        console.log("fileExtension: ", fileExtension)
                        switch(fileExtension){
                            case "pdf":
                                context.noteSections[i].isPdf = true;
                                break;
                            case "mp4":
                                context.noteSections[i].isVideo = true;
                                break;
                            case "mp3":
                                context.noteSections[i].isAudio = true;
                                break;
                            case "png":
                                context.noteSections[i].isImage = true;
                                break;
                            case "jpeg":
                                context.noteSections[i].isImage = true;
                                break;
                            case "jpg":
                                context.noteSections[i].isImage = true;
                                break;
                        }
                    }
                }

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
                    })

                    //this.$store.commit("authenticationStore/setShowSpinner", false);
                    
                }catch{
                    //this.$store.commit("authenticationStore/setShowSpinner", false);
                }
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
      }
    }
</script>