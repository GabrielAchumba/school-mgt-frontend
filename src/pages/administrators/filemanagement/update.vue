<template>
    <div class="q-pa-md">
        <Form
        v-if="!showSpinner"
        :formData="form"
        @Update="Update($event)"
        @Cancel="Cancel($event)"
        @view="view($event)"/>
        <!-- <div>
            <q-img
            :src="imageUrl"/>
        </div> -->
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
import { put, get } from "../../../store/modules/gcp-services";
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
            selectedFileModel: {},
            form: form,
            dialogs: dialogs,
            imageUrl: "",
        }
    },
    methods:{
        Update2(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Update FileModel"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            this.$router.push('/filemanagement-landing')
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
        view(){

        },
        async view2(){
            var context = this;
            var url = `filemanagement/readPDF`;
            const payload = {
                url,
            }

            //this.$store.commit("authenticationStore/setShowSpinner", true);
            console.log("response.data")
            var response = await get(payload)
            context.imageUrl = `data:application/pdf;base64,${response.data}`;
            //context.imageUrl = `data:application/png;base64,${response.data}`;
            context.form.qLinks[0].href = context.imageUrl
            console.log("imageUrl: ",  context.imageUrl)

            //this.$store.commit("authenticationStore/setShowSpinner", false);


        },
        async save(){
            var context = this;
            var user = this.$store.getters["authenticationStore/IdentityModel"]

            var url = `FileModel/${context.selectedFileModel.id}`;
            const payload = {
                url,
                req: {
                    type: context.form.qInputs[0].name,
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
                        case "Update FileModel":
                            await context.save();
                            break;
                        case "Success":
                            this.$router.push("/FileModel-landing");
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        }
    },
    async created(){
        var context =  this;
        context.selectedFileModel = this.$store.getters["FileModelStore/selectedFileModel"];
        context.form.qParagraphs[0].name = context.selectedFileModel.title;
        context.form.qParagraphs[1].name = context.selectedFileModel.description;
        context.form.qLinks[0].href = context.selectedFileModel.fileUrl;
        //await context.view2();

/*         Reading: 1666901164365Gabriel Achumba Document.docx
Reading: 1666904273104Cover Letter.doc
Reading: 1666934899016Gabriel Achumba LinkedIn Profile.pdf
Reading: 1666971808795Screenshot from 2022-10-21 06-18-42.png
Reading: 1666976682560lhdi.png
Reading: 1667071515432Gabriel Achumba LinkedIn Profile.pdf
Reading: 16671157596532.jpg
Reading: 1667119336948about_2.jpg
Reading: 1667120602826about_1.jpg
Reading: 1667120677712about_3.jpg
Reading: 1667120796589ForexTrading.png
Reading: 1667123697668InteriorDecorations.png
Reading: 1667123799349contact_us.jpg
Reading: 1667124740098image_311.jpg
Reading: 1667125288900image_311.jpg
Reading: 1667125692003image_311.jpg
Reading: 1667126300135contact_us.jpg
Reading: 1667145997233cpi.png
Reading: 16671461288601.jpg
Reading: 16671462154813.jpg
Reading: 16671463774606.jpg
Reading: 1667147421589Apex Technical Reference Manual 2022.pdf
Reading: 1667224356540y2mate.com - Firebase Auth Tutorial 24  What next_1080pFHR.mp4
Reading: 1667225506582y2mate.com - Firebase Auth Tutorial 24  What next_1080pFHR.mp4
Reading: 1667304468586Cover Letter.doc
Reading: 1667305479586y2mate.com - Firebase Auth Tutorial 24  What next_1080pFHR.mp4
Reading: 1667346976545contact_us.jpg
Reading: 1667346978453contact_us.jpg
Reading: 1667347980728about_1.jpg
Reading: 1667556638912Gabriel Achumba LinkedIn Profile.pdf
Reading: 1667556906589cpi.png
Reading: 1667557269537y2mate.com - Firebase Auth Tutorial 24  What next_1080pFHR.mp4
Reading: 1667557315809y2mate.com - Firebase Auth Tutorial 24  What next_1080pFHR.mp4 */
    }
}
</script>