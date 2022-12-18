<template>
    <div class="q-pa-md">

      <div class="row"
       v-if="!showSpinner">
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 q-pa-sm">
            <span>
                <p class="q-ma-none">{{ exam_vm.qSelectSubject.label }}</p>
                <div class="row no-wrap">
                <q-select
                    class="q-ma-none col-12"
                    color="accent" 
                    outlined label-color="accent"
                    option-disable="inactive"
                    v-model="selectedSubject"
                    :options="exam_vm.qSelectSubject.list"
                    option-value="id"
                    :option-label="'type'"
                    :name="exam_vm.qSelectSubject.value"
                    emit-value
                    map-options
                    >
                </q-select>
            </div>
            </span>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 q-pa-sm">
            <span>
                <p class="q-ma-none">{{ exam_vm.qSelectLevel.label }}</p>
                <div class="row no-wrap">
                <q-select
                    class="q-ma-none col-12"
                    color="accent" 
                    outlined label-color="accent"
                    option-disable="inactive"
                    v-model="selectedLevel"
                    :options="exam_vm.qSelectLevel.list"
                    option-value="id"
                    :option-label="'type'"
                    :name="exam_vm.qSelectLevel.value"
                    emit-value
                    map-options
                    >
                </q-select>
            </div>
            </span>
        </div>


        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 q-pa-sm">
            <span><p class="q-ma-none">{{ exam_vm.qDate.label }}</p>
            <q-input 
            class="q-ma-none"
            filled 
            v-model="exam_vm.qDate.name" mask="date" :rules="['date']">
            <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="exam_vm.qDate.name">
                    <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="accent" flat />
                    </div>
                </q-date>
                </q-popup-proxy>
            </q-icon>
            </template>
        </q-input></span>
        </div>
    </div>
        <Form
        v-if="!showSpinner"
        :formData="form"
        @Start="Start($event)"
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

import Form from "../../../components/Forms/Form.vue";
import  MessageBox from "../../../components/dialogs/MessageBox.vue";
import  { form, dialogs } from "./view_models/exam-rules-view-model";
import { post } from "../../../store/modules/gcp-services";
import { exam_vm } from "./view_models/create-view-model";

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
        Form,
        MessageBox,
    },
    data(){
        return {
            form: form,
            dialogs: dialogs,
            selectedSubject: null,
            selectedLevel: null,
            exam_vm: exam_vm,
        }
    },
    methods:{
        Start(){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title == "Start Examination"){
                    context.dialogs[i].isVisible = true;
                    break;
                }
            }
        },
        Cancel(){
            var user = this.$store.getters["authenticationStore/IdentityModel"];
            if(user.schoolId === "CEO")this.$router.push('/super-admin-exam-landing')
            else  this.$router.push('/exam-landing')
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
        async startExamination(){
            var context = this;
            await context.viewQuestions();
            this.$router.push('/start-exam')
        },
        async okDialog(payload){
            const context = this;
            var i = -1;
            for(const dialog of context.dialogs){
                i++;
                if(dialog.title === payload){
                    switch(payload){
                        case "Start Examination":
                            await context.startExamination();
                            break;
                    }
                    context.dialogs[i].isVisible = false;
                    break;
                }
            }
        },
        initializeData(){

            var context = this;

            //objArray.sort((a, b) => a.DepartmentName.toLowerCase().localeCompare(b.DepartmentName.toLowerCase()))

            context.exam_vm.qSelectSubject.list = this.$store.getters["subjectStore/subjects"]
            .sort((a, b) => a.type.toLowerCase().localeCompare(b.type.toLowerCase()))
            .map((row) => {
                return {
                    ...row,
                    label: row.type, 
                    value: row.id,
                }
            })


            context.exam_vm.qSelectLevel.list = this.$store.getters["levelStore/levels"]
            .sort((a, b) => a.type.toLowerCase().localeCompare(b.type.toLowerCase()))
            .map((row) => {
                return {
                    ...row,
                    label: row.type, 
                    value: row.id,
                }
            })
            this.$store.commit("authenticationStore/setShowSpinner", false);
        },
        async viewQuestions(){
            var context = this;
             var user = this.$store.getters["authenticationStore/IdentityModel"]
            this.$store.commit("authenticationStore/setShowSpinner", true);
            let subjectItem = context.exam_vm.qSelectSubject.list.find(o => o.value === context.selectedSubject);
            let levelItem = context.exam_vm.qSelectLevel.list.find(o => o.value === context.selectedLevel);
            console.log("subjectItem: ", subjectItem)
            console.log("levelItem: ", levelItem)

            this.$store.commit("examStore/setSubjectName", subjectItem.type);
            this.$store.commit("examStore/setLevelName", levelItem.type);
            
            const myArray = context.exam_vm.qDate.name.split("/")

            const payload = {
                url: "examquestion/findAll",
                req: {
                    subjectId: subjectItem.value,
                    levelId: levelItem.value,
                    schoolId: user.schoolId,
                    examYear: Number(myArray[0]),
                    examMonth: Number(myArray[1]),
                    examDay: Number(myArray[2])
                }
            }

            this.$store.commit("examStore/setYear", payload.req.examYear);

            try{
                 const response = await post(payload);
                const questions = response.data.map((row) => {
                     return {
                         ...row,
                         question: row.question,
                         subject: subjectItem.type,
                         level: levelItem.type,
                     }
                 })

                console.log("questions: ", questions);
                this.$store.commit("examStore/SetQuestions", questions);
                this.$store.commit("authenticationStore/setShowSpinner", false);
                
            }catch{
                this.$store.commit("authenticationStore/setShowSpinner", false);
            }
        

        }

    },
    created(){
        var context = this;
        context.initializeData()
    }
}
</script>
