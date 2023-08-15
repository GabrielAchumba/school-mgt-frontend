<template>
    <div class="q-pa-md">
        <Form
        v-if="!showSpinner"
        :formData="form"
        :rightDrawerOpen="rightDrawerOpen"
        @Create="Create($event)"
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
import { post } from "../../../store/modules/services";
import { loadReferals } from "../user/utils";
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
        },
        style(){
          var context = this;
          console.log("style")
          console.log("context.rightDrawerOpen: ", context.rightDrawerOpen)
          if(context.rightDrawerOpen){
            return "width: 100%; height: 100vh;"
          }else{
            return "width: 40%"
          }
        },
    },
    components:{
        MessageBox,
        Form
    },
    props:{    
        rightDrawerOpen:{
          type: Boolean,
          default: false
        }
    },
    data(){
        return {
            form: form,
            dialogs:dialogs,
        }
    },
    methods:{
        Create(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Create School"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            this.$router.push('/register')
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
            
            var url = `school/create`;
            const payload = {
                url,
                req: {
                    schoolName: context.form.qInputs[0].name,
                    address: context.form.qInputs[1].name,
                    //referedBy: context.form.qSelects[0].value,
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
                        case "Create School":
                            await context.save();
                            break;
                        case "Success":
                            this.$router.push("/register");
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        }
    },
    async created(){
        var context = this;
        context.form.clearQInputs();
        context.form.clearQSelects();
        /* const { result } = await loadReferals()
        console.log("referals: ", result)
        context.form.qSelects[0].list = result.map((row) => {
            return {
                ...row,
                value: row.id,
                type: `${row.firstName} ${row.lastName} (${row.userName})`
            }
        })

        if(context.form.qSelects[0].list.length > 0){
            const row = result[0];
            context.form.qSelects[0].list.unshift({
                ...row,
                id: "CEO",
                value: "CEO",
                type: `Nobody`
            })
        } */
    }
}
</script>