<template>
    <div class="q-pa-md">
        <Form
        v-if="!showSpinner"
        :formData="form"
        @Update="Update($event)"
        @Cancel="Cancel($event)"
        @userTypeAction="subjectAction($event)"/>
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

import MessageBox from "../../../components/dialogs/MessageBox.vue";
import Form from "../../../components/Forms/Form.vue";
import { put } from "../../../store/modules/gcp-services";
import { form, dialogs } from "./view_models/update-view-model";
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
        }
    },
    components:{
        MessageBox,
        Form
    },
    data(){
        return {
            selectedLessonNote: {},
            form: form,
            dialogs: dialogs,
        }
    },
    methods:{
        Update(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Update Lesson Note"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            if(user.schoolId === "CEO")this.$router.push('/super-admin-lesson-note-landing')
            else  this.$router.push('/lesson-note-landing')
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
        async save(){
            var context = this;
            
            var url = `lessonnote/${context.selectedLessonNote.id}`;
            var user = this.$store.getters["authenticationStore/IdentityModel"]

            const payload = {
                url,
                req: {
                    createdBy: user.id,
                    schoolId: user.schoolId,
                    title: context.form.qEditors[0].name,
                    levelId: context.form.qSelects[0].value,
                    subjectId: context.form.qSelects[1].value,
                }
            }

            console.log("payload: ", payload)
            this.$store.commit("authenticationStore/setShowSpinner", true);
            var response = await put(payload)
            this.$store.commit("authenticationStore/setShowSpinner", false);
            
            if(response.data){
                context.dialogs[1].isVisible = true;
            }else{
                context.dialogs[2].message = message;
                context.dialogs[2].isVisible = true;
            }

        },
        subjectAction(){

        },
        async okDialog(payload){
            console.log("payload: ", payload)
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Update Lesson Note":
                            await context.save();
                            break;
                        case "Success":
                            var user = this.$store.getters["authenticationStore/IdentityModel"];
                            if(user.schoolId === "CEO")this.$router.push('/super-admin-lesson-note-landing')
                            else  this.$router.push('/lesson-note-landing')
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        }
    },
    created(){
        var context =  this;
        context.selectedLessonNote = this.$store.getters["lessonNoteStore/selectedLessonNote"];
        context.form.qInputs[0].name = context.selectedLessonNote.title;
        context.form.qSelects[0].list = this.$store.getters["levelStore/levels"];
        context.form.qSelects[1].list = this.$store.getters["subjectStore/subjects"];
        context.form.qSelects[0].value = context.selectedLessonNote.levelId;
        context.form.qSelects[1].value = context.selectedLessonNote.subjectId;
        this.$store.commit("authenticationStore/setPageTitle", "Update Note")
    }
}
</script>