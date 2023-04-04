<template>
<q-layout>
   <q-page-container> 
     <q-page class="flex flex-center bg-primary">
       <q-card
          class="personal-data-form"
          v-bind:style="
          $q.platform.is.mobile ? { width: '90%', height: '95%' } : { width: '90%' , height: '95%' }
          "
        >

   <q-card-section>
    <div class="row bg-accent text-primary text-center q-pa-sm">
      <div class="col-12 q-pa-sm text-center">
        <p>{{ title }}</p>
        <p v-if="saveComplete">Saving.. {{ minutes }} minutes: {{ seconds }} seconds</p>
        <p v-if="saveError" class="text-secondary"> {{ message }} </p>
      </div>
    </div>
  </q-card-section>

  <q-card-section v-if="isAdmin">
      <q-form class="q-gutter-md">
        <q-input outlined v-model="selectedPersonalData.firstName" label="First Name *" lazy-rules readonly />
        <q-input outlined v-model="selectedPersonalData.lastName" label="Last Name *" lazy-rules readonly />
        <q-input outlined v-model="parentUserName" label="Referal Username *" lazy-rules />

        <div class="row q-pa-sm">
                <div class="col-12 text-center q-pa-sm">
                  <q-btn
                  label="Cancel"
                  style="width:95%"
                  type="button"
                  size="md"
                  no-caps
                  class="q-ma-sm bg-accent text-primary"
                  @click="cancel"
                  />
                </div>

                <div class="col-12 text-center q-pa-sm">
                  <q-btn
                    label="Update"
                    style="width:95%"
                    type="button"
                    size="md"
                    no-caps
                    class="q-ma-sm bg-accent text-primary"
                    @click="create"
                  />
                </div>
        </div>

      </q-form>
  </q-card-section>

   <q-card-section v-else>
      <q-form class="q-gutter-md">
        <q-input outlined v-model="contributor.firstName" label="First Name *" lazy-rules readonly />
        <q-input outlined v-model="contributor.lastName" label="Last Name *" lazy-rules readonly />
        <q-input 
        v-if="isParentUser"
        outlined v-model="directParentUserName" label="Referal Username *" lazy-rules readonly />
        <q-input 
        v-else
        outlined v-model="parentUserName" label="Referal Username *" lazy-rules />
        <p class="text-secondary">{{ parentUserNameMessage }}</p>

        <div class="row q-pa-sm">
                <div class="col-12 text-center q-pa-sm">
                  <q-btn
                  label="Cancel"
                  style="width:95%"
                  type="button"
                  size="md"
                  no-caps
                  class="q-ma-sm bg-accent text-primary"
                  @click="cancel"
                  />
                </div>

                <div class="col-12 text-center q-pa-sm">
                  <q-btn
                    label="Update"
                    style="width:95%"
                    type="button"
                    size="md"
                    no-caps
                    class="q-ma-sm bg-accent text-primary"
                    @click="create"
                  />
                </div>
        </div>
      </q-form>
  </q-card-section>

       </q-card>
     </q-page>
   </q-page-container>

    <q-dialog v-model="isCreateDialog">
    <MessageBox
    title="Create Category"
    message="Do you want to create category?"
    okayEvent="saveCategory"
    cancelEvent="cancelCreate"
    @cancelCreate="cancelCreate($event)"
    @saveCategory="saveCategory($event)"
    >
    </MessageBox>
  </q-dialog>

  <q-dialog v-model="isCreateSuccessDialog">
    <MessageBox
    title="Success"
    message="Your creation was successful!"
    okayEvent="CreateSuccessOkay"
    cancelEvent="CreateSuccessCancel"
    @CreateSuccessCancel="CreateSuccessCancel($event)"
    @CreateSuccessOkay="CreateSuccessOkay($event)"
    >
    </MessageBox>
  </q-dialog>

  <q-dialog v-model="isCreateFailureDialog">
    <MessageBox
    title="Error"
    :message="`${message}.`"
    okayEvent="CreateFailureOkay"
    cancelEvent="CreateFailureCancel"
    @CreateFailureCancel="CreateFailureCancel($event)"
    @CreateFailureOkay="CreateFailureOkay($event)"
    >
    </MessageBox>
  </q-dialog>

  <q-dialog v-model="isPersonalDataFailureDialog">
    <MessageBox
    title="Error"
    :message="`${Message}.`"
    okayEvent="GetPersonalDataFailureOkay"
    cancelEvent="GetPersonalDataFailureCancel"
    @GetPersonalDataFailureOkay="GetPersonalDataFailureOkay($event)"
    @GetPersonalDataFailureCancel="GetPersonalDataFailureCancel($event)"
    >
    </MessageBox>
  </q-dialog>
</q-layout>


  


</template>

<script>
  import MessageBox from "../dialogs/MessageBox.vue"
  import { post } from "../../store/modules/services";
    export default {
      components:{
        MessageBox
      },
        data () {
    return {
        parentUserName: "",
        isCreateDialog: false,
        isCreateSuccessDialog: false,
        isCreateFailureDialog: false,
        count: 0,
        minutes: 0,
        seconds: 0,
        message: "",
        saveComplete: false,
        saveError: false,
        parentUserNameMessage: "",
            }
        },
        props: {
            directParentUserName: {
              type: String,
              default: "",
            },
            isParentUser: {
              type: Boolean,
              default: false,
            },
            url:{
                type: String,
                default: "",
            },
            Message:{
                type: String,
                default: "",
            },
            isPersonalDataFailureDialog:{
                type: Boolean,
                default: false,
            },
            contributor:{
                type: Object,
                default: {}
            },
            selectedPersonalData:{
                type: Object,
                default: {}
            },
            IdentityModel:{
                type: Object,
                default: {},
            },
            isAdmin:{
                type: Boolean,
                default: false,
            },
            title:{
                type: String,
                default: "",
            },
        },
        methods: {
          cancelCreateCategorySucess(){
            var context = this;
            context.isCreateSuccessDialog = false;
          },
          create(){
              var context = this;
              context.isCreateDialog = true;
            },
          cancel(){
            var context = this;
            context.isCreateDialog = false;
          },
            async saveCategory(){
                var context = this;
                context.saveError = false;
                context.parentUserNameMessage = ""
                var payload = {
                    parentUserName: context.isParentUser ? context.directParentUserName : context.parentUserName,
                    isAdmin: context.isAdmin,
                    contributor: context.contributor,
                    url: context.url,
                }

                console.log("payload 3: ", payload)
                let payload2 = {}
                if(payload.isAdmin == true){
                    this.$store.commit('categoryStore/SetPersonalData', payload) 
                    payload2 = context.selectedPersonalData;
                }else{
                    payload2 = {...payload.contributor };
                    payload2.contributorId = payload.contributor.id;
                    payload2.parentUserName = payload.parentUserName
                }

                if(payload2.parentUserName === ""){
                  context.parentUserNameMessage = "Referal username cannot be empty. If no referal, type admin as referal"
                  return;
                }

                context.saveComplete = true;
               var response = await post({
                 url: payload.url,
                 req: payload2,
               })
                
                console.log("response 2: ", response)
                const { 
                  data : {
                    data: result,
                    message,
                    success,
                        }
                  } = response

                  context.saveComplete = false;
                  
            
            context.isCreateDialog = false;
            context.message = message;
            
              console.log("success: ", success)
              if(success){
                context.isCreateSuccessDialog = true;
                context.saveError = false;
                console.log("context.isCreateSuccessDialog: ", context.isCreateSuccessDialog)
              }else{
                context.isCreateFailureDialog = true;
                context.saveError = true;
                console.log("context.isCreateFailureDialog: ", context.isCreateFailureDialog)
              }
            },
            cancelCreate(){
              var context = this;
              context.isCreateDialog = false;
            },
            CreateSuccessOkay(){
              var context = this;
              context.isCreateSuccessDialog = false;
              if(context.isParentUser){
                this.$store.commit('dashboardStore/UpdateIsParentUser', false)
                this.$router.push(`/user-dashboard`);
              }
            },
            CreateSuccessCancel(){
              var context = this;
              context.isCreateSuccessDialog = false;
              if(context.isParentUser){
                this.$store.commit('dashboardStore/UpdateIsParentUser', false)
                this.$router.push(`/user-dashboard`);
              }
            },
            CreateFailureOkay(){
              var context = this;
              context.isCreateFailureDialog = false;
            },
            CreateFailureCancel(){
              var context = this;
              context.isCreateFailureDialog = false;
            },
            GetPersonalDataFailureOkay(){
              var context = this;
              context.isPersonalDataFailureDialog = false;
            },
            GetPersonalDataFailureCancel(){
              var context = this;
              context.isPersonalDataFailureDialog = false;
            },
            renderTimer(){
              var context = this;
              context.count += 1;
              context.minutes = Math.floor(context.count / 60).toString().padStart(2, "0");
              context.seconds = (context.count % 60).toString().padStart(2, "0");
          }
        },
        mounted() {
            var context =  this;
          setInterval(() => { context.renderTimer() }, 1000);
          if(context.saveComplete === false){
            context.count = 0;
          }
        },
    }
</script>
