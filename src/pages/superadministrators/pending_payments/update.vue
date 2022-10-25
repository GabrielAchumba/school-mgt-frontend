<template>
    <div class="q-pa-md">
        <Form
        :formData="form"
        @Update="Update($event)"
        @Cancel="Cancel($event)"/>

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
import { put, post } from "../../../store/modules/services";
import { form, dialogs } from "./view_models/update-view-model";

export default {
    components:{
        MessageBox,
        Form
    },
    data(){
        return {
            selectedPendingPayment: {},
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
                if(dialog.title == "Generate Tokens"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            this.$router.push('/pending-payment-landing')
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
        async approvePayment(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]

            var url = `payment/${context.selectedPendingPayment.id}`;
            const payload = {
                url,
                req: {
                    schoolId: context.selectedPendingPayment.schoolId,
                }
            }

            console.log("payload: ", payload)
            var response = await put(payload)

            const { 
                data : {
                    message,
                    success,
                }
            } = response

        },
        async generateTokens(){
            var context = this;

            var url = `student/generatetokens`;
            const payload = {
                url,
                req: {
                    studentIds: context.selectedPendingPayment.studentIds,
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
        async verifyPaymentGenertaeTokens(){
            var context = this;
            await context.approvePayment();
            await context.generateTokens();
        },
        async okDialog(payload){
            console.log("payload: ", payload)
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Generate Tokens":
                            await context.verifyPaymentGenertaeTokens();
                            break;
                        case "Success":
                            this.$router.push("/pending-payment-landing");
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
        context.selectedPendingPayment = this.$store.getters["subscriptionStore/selectedPendingPayment"];
        context.form.qParagraphs[0].name = context.selectedPendingPayment.accountNamePaidFrom;
        context.form.qParagraphs[1].name = context.selectedPendingPayment.bankNamePaidFrom;
        context.form.qParagraphs[2].name = context.selectedPendingPayment.accountNumberPaidFrom;
        context.form.qParagraphs[3].name = context.selectedPendingPayment.allSubscriptions.value;
        context.form.qParagraphs[4].name = context.selectedPendingPayment.fileName;

        context.form.qImages[0].imageUrl = context.selectedPendingPayment.base64String;
    }
}
</script>