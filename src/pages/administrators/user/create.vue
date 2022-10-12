<template>
    <div class="q-pa-md">
        <Form
        :formData="form"
        @Create="Create($event)"
        @Cancel="Cancel($event)"
        @userTypeAction="userTypeAction($event)"/>

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

export default {
    components:{
        MessageBox,
        Form
    },
    data(){
        return {
            form: {
                title: "Create User",
                qSelects: [
                     { label: "User Type *", value: "", type: "text", 
                     list: [
                         {
                             value: 1,
                             label: "Member",
                             type: "Member",
                         },
                         {
                             value: 2,
                             label: "Admin",
                             type: "Admin",
                         }], actionName: "userTypeAction", visible: true },
                     { label: "School Name *", value: "", type: "text", 
                     list: [], actionName: "schoolNameAction", visible: true },
                     { label: "Designation *", value: "", type: "text", 
                     list: [], actionName: "designationAction", visible: true },
                ],
                qInputs: [
                    { label: "First Name *", name: "", type: "text"},
                    { label: "Last Name *", name: "", type: "text"},
                    { label: "User Name *", name: "", type: "text"},
                    { label: "Password *", name: "", type: "text"},
                    { label: "Country Code *", name: "", type: "text"},
                    { label: "PhoneNumber *", name: "", type: "text"},
                    /* { label: "Email", name: "", type: "text"}, */
                ],
                qBtns: [
                    {label: "Cancel", name: "Cancel"},
                    {label: "Create", name: "Create"},
                ],
                qDates: [],
                GroupedCheckBoxes: [],
            },
            dialogs:[
                { title: "Create User", isVisible: false, message: "Do you want to create a user",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Success", isVisible: false, message: "User created successfully!",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
                { title: "Failure", isVisible: false, message: "",
                okayEvent: "okDialog", cancelEvent: "cancelDialog" },
            ]
        }
    },
    methods:{
        Create(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Create User"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            this.$router.push('/user-landing')
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
            
            var url = `user/create`;
            var schoolId = context.form.qSelects[1].value;
            if(Object.keys(user).length <= 0){
                schoolId = "CEO";
            }
            else if(user.userType == "Admin" && user.designationId !== "CEO"){
                schoolId = user.schoolId;
            }
            const payload = {
                url,
                req: {
                    firstName: context.form.qInputs[0].name,
                    lastName: context.form.qInputs[1].name,
                    userName: context.form.qInputs[2].name,
                    password: context.form.qInputs[3].name,
                    countryCode: context.form.qInputs[4].name,
                    phoneNumber: context.form.qInputs[5].name,
                    email: context.form.qInputs[6].name,
                    designationId: context.form.qSelects[2].value,
                    userType: context.form.qSelects[0].value.label,
                    schoolId,
                }
            }

            console.log("payload: ", payload)
            var response = await post(payload)

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
                        case "Create User":
                            await context.save();
                            break;
                        case "Success":
                            this.$router.push("/user-landing");
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        userTypeAction(payload){
            var context = this;
            if(payload.value.value == 2){
                context.form.qSelects[2].visible = false;
            }else{
                context.form.qSelects[2].visible = true;
            }
        }
    },
    created(){
       var context = this;
       context.form.qSelects[1].list = this.$store.getters["schoolStore/schools"].map((row) => {
           return {
               ...row,
               type: row.schoolName
           }
       })

       var user = this.$store.getters["authenticationStore/IdentityModel"]
       if(Object.keys(user).length <= 0){
           context.form.qSelects[0].list = [
                {
                    value: 1,
                    label: "Member",
                    type: "Member",
                },
                {
                    value: 2,
                    label: "School Admin",
                    type: "Admin",
                },
                {
                    value: 3,
                    label: "Referal",
                    type: "Referal",
                }]
       }
       else if(user.userType == "Admin" && user.designationId == "CEO"){
           context.form.qSelects[0].list = [
                {
                    value: 1,
                    label: "Member",
                    type: "Member",
                },
                {
                    value: 2,
                    label: "Admin",
                    type: "Admin",
                }]
       }else{
           context.form.qSelects[1].visible = false;
           context.form.qSelects[2].list = this.$store.getters["staffStore/staffs"].map((row) => {
                return {
                    ...row,
                    type: row.type
                }
            }) 
           context.form.qSelects[0].list = [
                         {
                             value: 1,
                             label: "Member",
                             type: "Member",
                         }]
       }
    }
}
</script>