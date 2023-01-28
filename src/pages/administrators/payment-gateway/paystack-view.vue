<template>
    <div class="q-pa-md">
        <Form
        v-if="!showSpinner"
        :formData="form"
        @Pay="Pay($event)"
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
import { post, get } from "../../../store/modules/services";
import { form, dialogs } from "./view-models/paystack-view-model";

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
            fileUrl: "",
            fileName: "",
            originalFileName: "",
            isNewPicture: false,
        }
    },
    methods:{
        Pay(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Pay"){
                    context.dialogs[i].isVisible = true;
                    context.form.qBtns[1].btnDisabled = true;
                    break;
                }
            }
        },
        Cancel(){
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            if(user.schoolId === "CEO")this.$router.push('/super-admin-user-landing')
            else  this.$router.push('/user-landing')
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
            context.form.qBtns[0].btnDisabled = false;
            context.form.qBtns[1].btnDisabled = false;
        },
        async makePayment(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            
            var url = `user/create`;
            var schoolId = user.schoolId;
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
                    designationId: context.form.qSelects[0].value,
                    userType: "Member",
                    schoolId,
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
                        case "Pay":
                            await context.makePayment();
                            context.form.qBtns[1].btnDisabled = false;
                            break;
                        case "Success":
                            var user = this.$store.getters["authenticationStore/IdentityModel"];
                            if(user.schoolId === "CEO")this.$router.push('/super-admin-user-landing')
                            else  this.$router.push('/user-landing')
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        async loadBanks(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            
            var url = `payment/banks`;
            var schoolId = user.schoolId;
            if(Object.keys(user).length <= 0){
                schoolId = "CEO";
            }
            else if(user.userType == "Admin" && user.designationId !== "CEO"){
                schoolId = user.schoolId;
            }
            const payload = {
                url,
                req: {}
            }

            console.log("payload: ", payload)
            var response = await get(payload)
            console.log("response: ", response)
             const { 
                data : {
                    message,
                    success,
                    data: result,
                }
            } = response
            if(success){
                context.form.qSelects[1].list = result.map((row) => {
                return {
                    ...row,
                    type: row.name,
                    value: row.name,
                    label: row.name,
                    } 
                })
            }

        },
    },
    async created(){
       var context = this;
       context.form.clearQInputs();
       context.form.clearQSelects();
        await context.loadBanks();
        this.$store.commit("authenticationStore/setPageTitle", "Make Payment");  
    }
}
</script>