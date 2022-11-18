<template>
    <div class="q-pa-md">
        <Form
        v-if="!showSpinner"
        :formData="form"
        @Update="Update($event)"
        @Cancel="Cancel($event)"/>
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
import { put } from "../../../store/modules/services";
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
            selectedStudent: {},
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
                if(dialog.title == "Update Student"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            this.$router.push('/student-landing')
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
            
            var url = `user/${context.selectedStudent.id}`;
            const payload = {
                url,
                req: {
                    firstName: context.form.qInputs[0].name,
                    lastName: context.form.qInputs[1].name,
                    userName: context.form.qInputs[2].name,
                    designationId: context.form.qSelects[0].value,
                    levelId: context.form.qSelects[1].value,
                    classRoomId: context.form.qSelects[2].value,
                    userType: "Student",
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
        async okDialog(payload){
            console.log("payload: ", payload)
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Update Student":
                            await context.save();
                            break;
                        case "Success":
                            this.$router.push("/student-landing");
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
        context.selectedStudent = this.$store.getters["studentStore/selectedStudent"];
        console.log("selectedStudent: ", context.selectedStudent)
        context.form.qInputs[0].name = context.selectedStudent.firstName;
        context.form.qInputs[1].name = context.selectedStudent.lastName;
        context.form.qInputs[2].name = context.selectedStudent.userName;


        context.form.qSelects[0].list = this.$store.getters["staffStore/staffs"].map((row) => {
            return {
                ...row,
                type: row.type,
                value: row.id,
                label: row.type,
            }
        })
        context.form.qSelects[0].value = context.selectedStudent.designationId;

        context.form.qSelects[1].list = this.$store.getters["levelStore/levels"].map((row) => {
            return {
                ...row,
                type: row.type,
                value: row.id,
                label: row.type,
            }
        })
        context.form.qSelects[1].value = context.selectedStudent.levelId;

        context.form.qSelects[2].list = this.$store.getters["classRoomStore/classRooms"].map((row) => {
            return {
                ...row,
                type: row.type,
                value: row.id,
                label: row.type,
            }
        })
        context.form.qSelects[2].value = context.selectedStudent.classRoomId;
    }
}
</script>