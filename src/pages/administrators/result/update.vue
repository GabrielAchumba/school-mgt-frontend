<template>
    <div class="q-pa-md">
        <Form
        :formData="form"
        @Update="Update($event)"
        @Cancel="Cancel($event)"
        @deleteResult="deleteResult($event)"
        @typeOfInstructor="typeOfInstructor($event)"
        @getClassRoomsByLevelId="getClassRoomsByLevelId"
        @getContinuousAssessmentBySubjectId="getContinuousAssessmentBySubjectId"/>
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
import { put, remove } from "../../../store/modules/services";
import { loadUsersByCategory } from "../user/utils";
import { form, dialogs } from "./view_models/update-view-model";

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
            selectedResult: {},
            form: form,
            dialogs: dialogs,
        }
    },
    methods:{
        deleteResult(){
             var context = this
             context.dialogs[3].isVisible = true;
        },
        Update(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Update Result"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            if(user.schoolId === "CEO")this.$router.push('/super-admin-results')
            else this.$router.push('/results')
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
             var user = this.$store.getters["authenticationStore/IdentityModel"]
            
            var url = `result/${context.selectedResult.id}`;
            const payload = {
                url,
                req: {
                    score: Number(context.form.qInputs[0].name),
                    scoreMax: Number(context.form.qInputs[1].name),
                    sessionId: context.form.qSelects[0].value,
                    levelId: context.form.qSelects[1].value,
                    classRoomId: context.form.qSelects[2].value,
                    subjectId: context.form.qSelects[3].value,
                    studentId: context.form.qSelects[4].value,
                    designationId: context.form.qSelects[5].value,
                    teacherId: context.form.qSelects[6].value,
                    assessmentId: context.form.qSelects[7].value,
                    updatedAt: context.form.qDates[0].name,
                    schoolId: user.schoolId,
                }
            }

            console.log("payload: ", payload)
            this.$store.commit("authenticationStore/setShowSpinner", true);
            var response = await put(payload)
            this.$store.commit("authenticationStore/setShowSpinner", false);

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

        async delete(){
            var context = this;
            
            var url = `result/${context.selectedResult.id}`;
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
                context.dialogs[4].isVisible = true;
            }else{
                context.dialogs[5].message = message;
                context.dialogs[5].isVisible = true;
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
                         case "Delete Result":
                            await context.delete();
                            break;
                        case "Update Result":
                            await context.save();
                            break;
                        case "Update Success":
                            var user = this.$store.getters["authenticationStore/IdentityModel"];
                            if(user.schoolId === "CEO")this.$router.push('/super-admin-results')
                            else this.$router.push('/results')
                            break;
                        case "Delete Success":
                            var user = this.$store.getters["authenticationStore/IdentityModel"];
                            if(user.schoolId === "CEO")this.$router.push('/super-admin-results')
                            else this.$router.push('/results')
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async typeOfInstructor(payload){
            var context = this;
             var user = this.$store.getters["authenticationStore/IdentityModel"]
            const teachers = await loadUsersByCategory(payload.value, user.schoolId);
            this.$store.commit('userStore/SetTeachers', teachers.result);
            context.form.qSelects[6].list = teachers.result.map((row) => {
                return {
                    ...row,
                    type: `${row.firstName} ${row.lastName}`,
                    value: row.id,
                    lable: `${row.firstName} ${row.lastName}`,
                }
            }) 
        },
        getClassRoomsByLevelId(payload){
            console.log("leveId: ", payload.value)
            var context = this;
            const classRooms = this.$store.getters["classRoomStore/classRooms"];
            context.form.qSelects[2].list = [];
            for(const classRoom of classRooms){
                if(classRoom.levelId === payload.value){
                    context.form.qSelects[2].list.push({
                        ...classRoom,
                        type: classRoom.type,
                        value: classRoom.id,
                        label: classRoom.type,
                    })
                }
            }
            console.log("classRooms: ", context.form.qSelects[2].list)
        },
        getContinuousAssessmentBySubjectId(payload){
            var context = this;
            const assessments = this.$store.getters["assessmentStore/assessments"];
            context.form.qSelects[7].list = [];
            for(const assessment of assessments){
                if(assessment.subjectId === payload.value){
                    context.form.qSelects[7].list.push({
                        ...assessment,
                        type: assessment.type,
                        value: assessment.id,
                        label: assessment.type,
                    })
                }
            }
        },
        async loadSelectedResult(){
            var context =  this;
            context.selectedResult = this.$store.getters["resultStore/selectedResult"];
            console.log("context.selectedResult: ", context.selectedResult);
            context.form.qSelects[0].list = this.$store.getters["sessionStore/sessions"].map((row) => {
                return {
                    ...row,
                    type: row.type,
                    value: row.id,
                    label: row.type,
                }
            })
            context.form.qSelects[1].list = this.$store.getters["levelStore/levels"].map((row) => {
                return {
                    ...row,
                    type: row.type,
                    value: row.id,
                    label: row.type,
                }
            })

            context.getClassRoomsByLevelId({value: context.selectedResult.levelId})

            context.form.qSelects[3].list = this.$store.getters["subjectStore/subjects"].map((row) => {
                return {
                    ...row,
                    type: row.type,
                    value: row.id,
                    label: row.type,
                }
            })
            context.form.qSelects[4].list = this.$store.getters["studentStore/students"].map((row) => {
                return {
                    ...row,
                    type: `${row.firstName} ${row.lastName}`,
                    value: row.id,
                    label: `${row.firstName} ${row.lastName}`,
                }
            })
            context.form.qSelects[5].list = this.$store.getters["staffStore/staffs"].map((row) => {
                return {
                    ...row,
                    type: row.type,
                    value: row.id,
                    label: row.type,
                }
            })
            await context.typeOfInstructor({
                value: context.selectedResult.designationId,
            })

            context.getContinuousAssessmentBySubjectId({value: context.selectedResult.subjectId})
            

            context.form.qInputs[0].name = context.selectedResult.score;
            context.form.qInputs[1].name = context.selectedResult.scoreMax;

            context.form.qSelects[0].value = context.selectedResult.sessionId;
            context.form.qSelects[1].value = context.selectedResult.levelId;
            context.form.qSelects[2].value = context.selectedResult.classRoomId;
            context.form.qSelects[3].value = context.selectedResult.subjectId;
            context.form.qSelects[4].value = context.selectedResult.studentId;
            context.form.qSelects[5].value = context.selectedResult.designationId;
            context.form.qSelects[6].value = context.selectedResult.teacherId;
            context.form.qSelects[7].value = context.selectedResult.assessmentId;
            
            

         /*     { label: "Session", value: "", type: "text", list: [], actionName: "session", visible: true },
        { label: "Level", value: "", type: "text", list: [], actionName: "level", visible: true },
        { label: "Class Room", value: "", type: "text", list: [], actionName: "classRoom", visible: true },
        { label: "Subject", value: "", type: "text", list: [], actionName: "subject", visible: true },
        { label: "Student", value: "", type: "text", list: [], actionName: "student", visible: true },
        { label: "Type of Instructor", value: "", type: "text", list: [], actionName: "typeOfInstructor", visible: true },
        { label: "Instructor Full Name", value: "", type: "text", list: [], actionName: "instructor", visible: true },
        { label: "Type of Assessment", value: "", type: "text", list: [], actionName: "instructor", visible: true }, */

            console.log("sessions: ", context.form.qSelects[0].list)
            console.log("levels: ", context.form.qSelects[1].list)
            console.log("classRooms: ", context.form.qSelects[2].list)
            console.log("subjects: ", context.form.qSelects[3].list)
            console.log("students: ", context.form.qSelects[4].list)
            console.log("designations: ", context.form.qSelects[5].list)
            console.log("teachers: ", context.form.qSelects[6].list)
            console.log("assessments: ", context.form.qSelects[7].list)

            const dateObj = new Date(context.selectedResult.createdAt);
            var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
            var date = ('0' + dateObj.getDate()).slice(-2);
            var year = dateObj.getFullYear();
            context.form.qDates[0].name = year + '/' + month + '/' + date;
        }
    },
    async created(){
        var context =  this;
        await context.loadSelectedResult();
        this.$store.commit("authenticationStore/setPageTitle", "Update Result"); 
    }
}
</script>