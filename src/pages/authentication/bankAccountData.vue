<template>
  <q-layout>
   <q-page-container v-if="!showSpinner">
     <q-page class="flex flex-center bg-primary">
       <q-card
          class="personal-data-form"
          v-bind:style="
          $q.platform.is.mobile ? { width: '90%', height: '95%' } : { width: '90%' , height: '100%' }
          "
        >

   <q-card-section class="bg-accent text-primary">
    <div class="row no-wrap items-center">
      <div class="col text-h6 ellipsis">
        Bank Account Details
      </div>
    </div>
  </q-card-section>

   <q-card-section>
      <q-form class="q-gutter-md">

      <div class="col-12 q-pa-sm">
        <span>
          <p class="q-ma-none">Bank Name</p>
          <q-select
              class="q-ma-none"
              color="accent" 
              outlined label-color="accent"
              option-disable="inactive"
              v-model="BankAccountDTO.bankName"
              :options="banks"
              option-value="name"
              :option-label="'type'"
              name="type"
              emit-value
              map-options>
            </q-select>
        </span>
      </div>
      <q-input outlined v-model="BankAccountDTO.accountName" label="Account Name *" lazy-rules />
      <q-input outlined v-model="BankAccountDTO.accountNumber" label="Account Number *" lazy-rules />

      <div 
            class="row q-pa-sm">

              <StatusBar class="col-12 text-center q-pa-sm"
              :savingStatus="savingStatus"
              :message="message"
              :saveComplete="saveComplete"
              :saveError="saveError"
              @updateStatusBar="updateStatusBar"/>

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
                  @click="updateData"
                />
              </div>
      </div>

    </q-form>
   </q-card-section>
        
  </q-card>

<q-dialog v-model="isUpdateDialog">
  <MessageBox
  title="Update"
  message="Do you want to update bank details?"
  okayEvent="update"
  cancelEvent="cancelUpdate"
  @cancelUpdate="cancelUpdate($event)"
  @update="update($event)"
  >
  </MessageBox>
</q-dialog>

<q-dialog v-model="isUpdateSuccessDialog">
  <MessageBox
  title="Success"
  message="Bank details updated successfully!"
  okayEvent="UpdateSuccessOkay"
  cancelEvent="UpdateSuccessCancel"
  @UpdateSuccessCancel="UpdateSuccessCancel($event)"
  @UpdateSuccessOkay="UpdateSuccessOkay($event)"
  >
  </MessageBox>
</q-dialog>

  <q-dialog v-model="isUpdateFailureDialog">
    <MessageBox
    title="Error"
    :message="`${message}.`"
    okayEvent="UpdateFailureOkay"
    cancelEvent="UpdateFailureCancel"
    @UpdateFailureCancel="UpdateFailureCancel($event)"
    @UpdateFailureOkay="UpdateFailureOkay($event)"
    >
    </MessageBox>
  </q-dialog>

     </q-page>
   </q-page-container>
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
 </q-layout>
</template>


<script>
    import MessageBox from "../../components/dialogs/MessageBox.vue"
  import StatusBar from "../../components/StatusBar/StatusBar.vue";
    import { get, put } from "../../store/modules/services" 
    import { paymentGatewayController, userController } from "../../store/modules/backendRoutes"
    export default {
      computed: {
        selectedBankDetail(){
          return this.$store.getters['clientStore/selectedBankDetail'];
        },
        isAdmin(){
          return this.$store.getters['clientStore/isAdmin'];
        },
        IdentityModel() {
            return this.$store.getters['authenticationStore/IdentityModel'];
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
      StatusBar,
    },
    data () {
    return {
        BankAccountDTO: {
          bankName: "",
          accountName: "",
          accountNumber: "",
          bVN: ""
        },
        isUpdateDialog: false,
        isUpdateSuccessDialog: false,
        isUpdateFailureDialog: false,
        message: "",
        banks: [],
        savingStatus: "",
        saveComplete: false,
        saveError: false,
        minutes: 0,
        seconds: 0,
      }
    },
    props: {
        theme_color: {
        type: String,
        default: 'rgb(0, 163, 82)'
        }
    },
    methods: {
      updateData(){
        var context = this;
        context.isUpdateDialog = true;
      },
      cancel(){
        var context = this;
        context.isUpdateDialog = false;
        if(context.isAdmin == true){
          this.$router.push('/bankDetails');
          this.$store.commit('clientStore/isAdminUpdate', false) 
        }else{
          this.$router.push('/user-home');
        }
      },
      async update(){
        var context = this;
        context.savingStatus = "";
        context.saveComplete = false;
        context.saveError = false;
         /* if (context.BankAccountDTO.bankName === "") {
          alert("Enter your bank name");
          return;
        }

         if (context.BankAccountDTO.accountName === "") {
          alert("Enter your account name");
          return;
        }

         if (context.BankAccountDTO.accountNumber === "") {
          alert("Enter your account number");
          return;
        } */

        if(context.isAdmin == false){
          context.BankAccountDTO.contributorId = context.IdentityModel.id;
        }

        const payload = {
          url: `${userController}/updatebankaccountdata/` + context.BankAccountDTO.contributorId,
          req: context.BankAccountDTO
        }

        context.saveComplete = true;
        context.savingStatus = "Updating...";
        context.saveError = false
        try{
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
              context.saveComplete = false;
              context.savingStatus = "Updated";
              context.saveError = false;
              context.isUpdateSuccessDialog = true;
            }else{
              context.saveComplete = false;
              context.savingStatus = "";
              context.saveError = true;
              context.isUpdateFailureDialog = true;
            }

        }catch(e){
              context.saveComplete = false;
              context.savingStatus = "";
              context.saveError = true;
              context.isUpdateFailureDialog = true;

        }
      },
      cancelUpdate(){
        var context = this;
        context.isUpdateDialog = false;
      },
      UpdateSuccessOkay(){
        var context = this;
        context.isUpdateSuccessDialog = false;
        if(context.isAdmin == true){
          this.$router.push('/bankDetails');
          this.$store.commit('clientStore/isAdminUpdate', false)  
        }
      },
      UpdateSuccessCancel(){
        var context = this;
        context.isUpdateSuccessDialog = false;
        if(context.isAdmin == true){
          this.$router.push('/bankDetails');
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
      async getBanks(){
       
        var context = this;
        const payload = {
          url: `${paymentGatewayController}/getbanks`
        }

        var response = await get(payload)
            const { 
            data : {
                data: result,
                success,
                message,
            }
        } = response

        console.log("response: ", response)
        if(success){
          context.banks = result.map((row) => {
            return {
              ...row,
              type: row.name
            }
          })
        }

      },
      async getUser(){
        var context = this;
        if(context.isAdmin == true){
          context.BankAccountDTO = {...context.selectedBankDetail}
        }else{
          const payload = {
            url: `${userController}/${context.IdentityModel.id}`,
            req: {}
          }
          
          var response = await get(payload)
          
          const { 
              data : {
                data: contributor,
                success,
                    }
              } = response
              console.log("response: response")
          if(success){
            context.BankAccountDTO = {...contributor}
          }
        }
      },
      updateStatusBar(payload){
        var context = this;
        context.minutes = payload.minutes
        context.seconds = payload.seconds
      },
    },
    async created(){
        var context = this;
        this.$store.commit("authenticationStore/setShowSpinner", true);
        await context.getBanks();
        await context.getUser();
        this.$store.commit("authenticationStore/setShowSpinner", false);
      }
    }
</script>

<style>
.personal-data-form {
  position: absolute;
}
</style>