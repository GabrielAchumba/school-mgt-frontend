<template>
  <div>
    <div v-if="!showSpinner" class="row">

      <div class="col-12 q-pa-sm text-center">
        <div class="col text-h6 text-center">
          Contact Data
        </div>
      </div>

      <Form
      v-if="!isAdmin"
      class="col-12 q-pa-sm"
      :formData="form"
      @onFileSelected="onFileSelected($event)"/>

      <div class="col-12 q-pa-sm text-center">
        <q-input class="q-pa-sm" outlined v-model="ContactDTO.phoneNumber" label="Phone Number *" lazy-rules />
        <q-input class="q-pa-sm" outlined v-model="ContactDTO.email" label="Email Address " lazy-rules />
        <q-input class="q-pa-sm" outlined v-model="ContactDTO.residentialCity" label="Residential City" lazy-rules />
        <q-input class="q-pa-sm" outlined v-model="ContactDTO.residentialState" label="Residential State" lazy-rules />
        <q-input class="q-pa-sm" outlined type="textarea" v-model="ContactDTO.address" label="Address" lazy-rules />
      </div>

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

      <StatusBar class="col-12 text-center q-pa-sm"
      :savingStatus="savingStatus"
      :message="message"
      :saveComplete="saveComplete"
      :saveError="saveError"
      @updateStatusBar="updateStatusBar"/>

      <div class="col-12 text-center q-pa-sm">
        <q-btn
          label="Update"
          style="width:95%"
          type="button"
          size="md"
          no-caps
          class="q-ma-sm bg-accent text-primary"
          @click="updateData"
        />
      </div>
  </div>
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

    <q-dialog v-model="isUpdateDialog">
      <MessageBox
      title="Update Contact"
      message="Do you want to update your contact?"
      okayEvent="uploadAndUpdate"
      cancelEvent="cancelUpdate"
      @cancelUpdate="cancelUpdate($event)"
      @uploadAndUpdate="uploadAndUpdate($event)"
      >
      </MessageBox>
    </q-dialog>

 </div>
</template>

<script>
  import MessageBox from "../../components/dialogs/MessageBox.vue"
  import Form from "../../components/Form/Form.vue";
  import StatusBar from "../../components/StatusBar/StatusBar.vue";
  import *  as gcphttp from "../../store/modules/gcp-services";
  import { userController } from "../../store/modules/backendRoutes";
  import { get, put } from "../../store/modules/services";

    export default {
      computed: {
        selectedContact(){
          return this.$store.getters['clientStore/selectedContact'];
        },
        isAdmin(){
          return this.$store.getters['clientStore/isAdmin'];
        },
        IdentityModel() {
            return this.$store.getters['authenticationStore/IdentityModel'];
        },
        PhotoDto(){
          return this.$store.getters['clientStore/PhotoDto'];
        },
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
        Form,
        StatusBar
      },
      data () {
    return {
        fileUrl: "",
        fileName: "",
        originalFileName: "",
        fileUploadError: "No Error",
          ContactDTO:{
            phoneNumber:"",
            email:"",
            address:"",
            residentialCity:"",
            residentialState:""
          },
          isUpdateDialog: false,
          isUpdateSuccessDialog: false,
          isUpdateFailureDialog: false,
          message: "",
          savingStatus: "",
          SelectedFile: null,
          files: null,
          isUploadFileDialog: false,
          isUploadFileSuccessDialog: false,
          isUploadFileFailureDialog: false,
          saveError: false,
          saveComplete: false,
          count: 0,
          minutes: 0,
          seconds: 0,
          form: {
                title: "User Photo",
                qSelects: [],
                qInputs: [],
                qFiles: [
                    { label: "Picture (1MB Maximum)", name: "", type: "file",
                    selectedFile: null,
                    showPreview: false,
                imagePreview: '',
                    files: [],
                    Template: {
                        sn: 0,
                        iconName: "",
                        visible: false,
                    }}
                ],
                qColors: [],
                qBtns: [],
                qDates: [],
                GroupedCheckBoxes: [],
                clearQInputs(){
                    var i = 0;
                    for (i = 0; i < this.qInputs.length; i++){
                        this.qInputs[i].name = "";
                    }
                },
                clearQFiles(){
                    var i = 0;
                    for (i = 0; i < this.qFiles.length; i++){
                        this.qFiles[i].name = "";
                    }
                },
            }
          }
        },
        props: {
            theme_color: {
            type: String,
            default: 'rgb(0, 163, 82)'
            }
        },
        methods: {
      onFileSelected(payload){
            var context = this;
            context.isUploadFileDialog = false;
            context.form.qFiles[0].selectedFile = payload.selectedFile;
            let reader  = new FileReader();
            reader.addEventListener("load", function () {
            context.form.qFiles[0].showPreview = true;
            context.form.qFiles[0].imagePreview = reader.result;
            context.isUploadFileDialog = true;
            }.bind(context), false);
            if(context.form.qFiles[0].selectedFile){
                if (/\.(jpe?g|png|gif)$/i.test(context.form.qFiles[0].selectedFile.name)) {
						reader.readAsDataURL(context.form.qFiles[0].selectedFile);
          }else{
                      alert("Wrong image format. Only supports .jpg, .jpeg, .png and .gif")
                  }
              }
              
              
          },
          UploadAction(){
            var context =  this;
            context.isUploadFileDialog = true;
          },
          cancelUploadFile(){
            var context =  this;
            context.isUploadFileDialog = false;
          },
        async uploadPicture(){
            var context = this;
            const formData = new FormData();
            console.log("selectedFile: ", context.form.qFiles[0].selectedFile)
            formData.append('file', context.form.qFiles[0].selectedFile);
            
            var url = `gcp/upload`;
            const payload = {
                url,
                req: formData,
            }
            console.log("payload: ", payload)
            try{
              var response = await gcphttp.post(payload)
              context.fileUrl = response.data.url;
              context.fileName = response.data.fileName;
              context.originalFileName = response.data.originalFileName;
              context.fileUploadError = response.data.error;
              if(context.fileUploadError !== "No Error"){
                context.saveError = false;
                context.message = context.fileUploadError;
              }
              console.log("fileUrl: ", context.fileUrl)

            }catch(e){
              context.saveError = true;
              context.saveComplete = false;
              context.fileUploadError = "File upload error";
              context.message = context.fileUploadError;
              context.savingStatus = ""
            }
        },
        async uploadAndUpdate(){
            var context = this;
            context.saveError = false;
            context.saveComplete = false;
            context.savingStatus = "Updating..."
            if(context.form.qFiles[0].imagePreview && context.isUploadFileDialog === true){
              await context.uploadPicture();
            }
      
            if(context.fileUploadError === "No Error") {
              await context.update();
            }else{
              context.message = "File upload error. Please try again";
            }
            
        },
          cancelUploadFileSuccess(){
            var context = this;
            context.isUploadFileSuccessDialog = false;
          },
          okayUploadFileSucess(){
            var context = this;
            context.isUploadFileSuccessDialog = false;
          },
          cancelUploadFileFailure(){
            var context = this;
            context.isUploadFileFailureDialog = false;
          },
          okayUploadFileFailure(){
            var context = this;
            context.isUploadFileFailureDialog = false;
          },
          updateData(){
            var context = this;
            context.isUpdateDialog = true;
          },
          cancel(){
              var context = this;
              context.isUpdateDialog = false;
              if(context.isAdmin == true){
                this.$router.push('/contacts');
                this.$store.commit('clientStore/isAdminUpdate', false) 
              }else{
                this.$router.push('/user-home');
              }
            },
    async update(){
        var context = this;

        if(context.isAdmin == false){
          context.ContactDTO.contributorId = context.IdentityModel.id;
        }

        /* if (context.ContactDTO.phoneNumber === "") {
          alert("Enter your phone number without +234");
          return;
        }

        if (context.ContactDTO.residentialCity === "") {
          alert("Enter your residential city");
          return;
        }

        if (context.ContactDTO.residentialState === "") {
          alert("Enter your residential state");
          return;
        } */

        if(context.fileUrl != "" && 
        context.fileUrl != undefined){
          context.ContactDTO.base64String = context.fileUrl
        }

        const payload = {
          url: `${userController}/updatecontactdto/${context.ContactDTO.contributorId}`,
          req: context.ContactDTO
        }

        var response = await put(payload)

         const { 
          data : {
            data: result,
            message,
            success,
                }
          } = response

          context.isUpdateDialog = false;
          context.message = message;
            if(success){
              context.isUpdateSuccessDialog = true;
              context.saveError = false;
              context.saveComplete = false;
              context.savingStatus = "Updated successfully"
              this.$store.commit('authenticationStore/AddUserPhoto', result)
            }else{
              context.saveComplete = false;
              context.saveError = true;
              context.isUpdateFailureDialog = true;
            }
      },
      cancelUpdate(){
        var context = this;
        context.isUpdateDialog = false;
         context.saveError = false;
        context.saveComplete = false;
        context.savingStatus = ""
      },
      UpdateSuccessOkay(){
        var context = this;
        context.isUpdateSuccessDialog = false;
        if(context.isAdmin == true){
          this.$router.push('/contacts');
          this.$store.commit('clientStore/isAdminUpdate', false)  
        }
      },
      UpdateSuccessCancel(){
        var context = this;
        context.isUpdateSuccessDialog = false;
        if(context.isAdmin == true){
          this.$router.push('/contacts');
          this.$store.commit('clientStore/isAdminUpdate', false)
        }
      },
      UpdateFailureOkay(){
        var context = this;
        context.isUpdateFailureDialog = false;
      },
      UpdateFailureCancel(){
        var context = this;
        context.isUpdateFailureDialog = false;
      },
      updateStatusBar(payload){
        var context = this;
        context.minutes = payload.minutes
        context.seconds = payload.seconds
      },
      /* renderTimer(){
        var context = this;
        context.count += 1;
        context.minutes = Math.floor(context.count / 60).toString().padStart(2, "0");
        context.seconds = (context.count % 60).toString().padStart(2, "0");
      } */
    },
    /* mounted() {
      var context =  this;
      setInterval(() => { context.renderTimer() }, 1000);
      if(context.saveComplete === false){
        context.count = 0;
      }
    }, */
    async created(){
    var context = this;
    if(context.isAdmin == true){
      context.ContactDTO = {...context.selectedContact}
    }else{
      const payload = {
        url: `${userController}/${context.IdentityModel.id}`,
        req:{}
      }
      this.$store.commit("authenticationStore/setShowSpinner", true);
      var response = await get(payload)
      this.$store.commit("authenticationStore/setShowSpinner", false);
      console.log("response: ", response)
      const { 
              data : {
                data: contributor,
                success,
                    }
              } = response
        if(success){
          context.ContactDTO = {...contributor}
          context.form.qFiles[0].showPreview = true;
          context.form.qFiles[0].imagePreview = context.ContactDTO.base64String;
        }

      
    }
  }
}
</script>

<style>
.personal-data-form {
  position: absolute;
}
</style>
