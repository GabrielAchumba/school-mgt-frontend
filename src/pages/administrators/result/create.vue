<template>
    <div class="q-pa-md">
        <Form
        v-if="!showSpinner"
        :formData="form"
        @Create="Create($event)"
        @Cancel="Cancel($event)"
        @typeOfInstructor="typeOfInstructor($event)"/>
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
import { post } from "../../../store/modules/services";
import { loadUsersByCategory } from "../user/utils"
import { form, dialogs } from "./view_models/create-view-model";

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
            form: form,
            dialogs: dialogs,
        }
    },
    methods:{
        Create(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Create Result"){
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
            
            var url = `result/create`;
            const payload = {
                url,
                req: {
                    score: Number(context.form.qInputs[0].name),
                    scoreMax: Number(context.form.qInputs[1].name),
                    classRoomId: context.form.qSelects[0].value,
                    subjectId: context.form.qSelects[1].value,
                    studentId: context.form.qSelects[2].value,
                    designationId: context.form.qSelects[3].value,
                    teacherId: context.form.qSelects[4].value,
                    assessmentId: context.form.qSelects[5].value,
                    levelId: context.form.qSelects[6].value,
                    sessionId: context.form.qSelects[7].value,
                    createdAt: context.form.qDates[0].name,
                    schoolId: user.schoolId,
                }
            }

            console.log("payload: ", payload)
            this.$store.commit("authenticationStore/setShowSpinner", true);
            var response = await post(payload)
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
        async okDialog(payload){
            console.log("payload: ", payload)
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Create Result":
                            await context.save();
                            break;
                        case "Success":
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
            context.form.qSelects[4].list = teachers.result.map((row) => {
                return {
                    ...row,
                    type: `${row.firstName} ${row.lastName}`,
                    value: row.id,
                    label: row.type,
                }
            }) 
        }
    },
    created(){
        var context = this;
        context.form.clearQInputs();
        context.form.clearQSelects();
        context.form.clearQDates();
        context.form.qSelects[0].list = this.$store.getters["classRoomStore/classRooms"].map((row) => {
            return {
                ...row,
                type: row.type,
                value: row.id,
                label: row.type,
            }
        })
        context.form.qSelects[1].list = this.$store.getters["subjectStore/subjects"].map((row) => {
            return {
                ...row,
                type: row.type,
                value: row.id,
                label: row.type,
            }
        })
        
        context.form.qSelects[2].list = this.$store.getters["studentStore/students"].map((row) => {
            return {
                ...row,
                type: `${row.firstName} ${row.lastName}`,
                value: row.id,
                label: `${row.firstName} ${row.lastName}`,
            }
        })
        context.form.qSelects[3].list = this.$store.getters["staffStore/staffs"].map((row) => {
            return {
                ...row,
                type: row.type,
                value: row.id,
                label: row.type,
            }
        })
        context.form.qSelects[5].list = this.$store.getters["assessmentStore/assessments"].map((row) => {
            return {
                ...row,
                type: row.type,
                value: row.id,
                label: row.type,
            }
        })
        context.form.qSelects[6].list = this.$store.getters["levelStore/levels"].map((row) => {
            return {
                ...row,
                type: row.type,
                value: row.id,
                label: row.type,
            }
        })
        context.form.qSelects[7].list = this.$store.getters["sessionStore/sessions"].map((row) => {
            return {
                ...row,
                type: row.type,
                value: row.id,
                label: row.type,
            }
        })
        this.$store.commit("authenticationStore/setPageTitle", "Create Result");  
    }
}
</script>