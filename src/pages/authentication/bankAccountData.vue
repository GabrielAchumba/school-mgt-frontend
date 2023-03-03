<template>
  <q-layout>
   <q-page-container>
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
      <q-input outlined v-model="BankAccountDTO.bankName" label="Bank Name *" lazy-rules />
      <q-input outlined v-model="BankAccountDTO.accountName" label="Account Name *" lazy-rules />
      <q-input outlined v-model="BankAccountDTO.accountNumber" label="Account Number *" lazy-rules />

      <div class="row">
        <div class="col-6 text-left">
          <q-btn
            label="Cancel"
            type="button"
            size="sm"
            no-caps
            class="text-primary bg-accent"
            @click="cancel"
          />
        </div>
        <div class="col-6 text-right">
          <q-btn
            label="Update"
            type="button"
            size="sm"
            no-caps
            class="text-primary bg-accent"
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
 </q-layout>
</template>


<script>
    import MessageBox from "../../components/dialogs/MessageBox.vue"
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
      },
    components:{
      MessageBox,
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
         if (context.BankAccountDTO.bankName === "") {
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
        }

        if(context.isAdmin == false){
          context.BankAccountDTO.contributorId = context.IdentityModel.id;
        }
        var response = await this.$store.dispatch('clientStore/UpdateBankAccountData', context.BankAccountDTO)

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
            }else{
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
      }
    },
    async created(){
        var context = this;
        if(context.isAdmin == true){
          context.BankAccountDTO = {...context.selectedBankDetail}
        }else{
          var response = await this.$store.dispatch('clientStore/GetContributor', context.IdentityModel.id)
          const { 
              data : {
                data: contributor,
                success,
                    }
              } = response
          if(success){
            context.BankAccountDTO = {...contributor}
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