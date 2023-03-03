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
        Next of Kin Data
      </div>
    </div>
  </q-card-section>

   <q-card-section>
      <q-form class="q-gutter-md">
      <q-input outlined v-model="NextOfKinDTO.nOKNames" label="Full Name *" lazy-rules />
      <q-input outlined v-model="NextOfKinDTO.nOKPhoneNumber" label="Phone Number *" lazy-rules />
      <q-input outlined v-model="NextOfKinDTO.nOKRelationship" label="Relationship *" lazy-rules />
      <q-input outlined type="textarea" v-model="NextOfKinDTO.nOKAddress" label="Address" lazy-rules />

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
  message="Do you want to update next of kins?"
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
  message="Next of kins updated successfully!"
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
        selectedNextOfKin(){
          return this.$store.getters['clientStore/selectedNextOfKin'];
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
            NextOfKinDTO:{
              nOKNames:"",
              nOKAddress:"",
              nOKPhoneNumber:"",
              nOKRelationship:""
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
                this.$router.push('/nextOfKins');
                this.$store.commit('clientStore/isAdminUpdate', false) 
              }else{
                this.$router.push('/user-home');
              }
            },
          async update(){
        var context = this;

        if(context.isAdmin == false){
          context.NextOfKinDTO.contributorId = context.IdentityModel.id;
        }

         if (context.NextOfKinDTO.nOKNames === "") {
          alert("Enter next of kin full name");
          return;
        }
         if (context.NextOfKinDTO.nOKPhoneNumber === "") {
          alert("Enter next of kin phone number without +234");
          return;
        }

         if (context.NextOfKinDTO.nOKRelationship === "") {
          alert("Enter next of kin relationship");
          return;
        }

        var response = await this.$store.dispatch('clientStore/UpdateNextOfKinDTO', context.NextOfKinDTO)

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
          this.$router.push('/nextOfKins');
          this.$store.commit('clientStore/isAdminUpdate', false)  
        }
      },
      UpdateSuccessCancel(){
        var context = this;
        context.isUpdateSuccessDialog = false;
        if(context.isAdmin == true){
          this.$router.push('/nextOfKins');
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
      context.NextOfKinDTO = {...context.selectedNextOfKin}
    }else{
        var response = await this.$store.dispatch('clientStore/GetContributor', context.IdentityModel.id)
          const { 
              data : {
                data: contributor,
                success,
                    }
              } = response
          if(success){
            context.NextOfKinDTO = {...contributor}
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