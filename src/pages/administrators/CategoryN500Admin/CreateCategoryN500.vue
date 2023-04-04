<template>
<div>
  <CreateCategory
  v-if="!showSpinner"
  :url="url"
  :Message="message"
  :isPersonalDataFailureDialog="isPersonalDataFailureDialog"
  :contributor="contributor"
  :selectedPersonalData="selectedPersonalData"
  :IdentityModel="IdentityModel"
  :isAdmin="isAdmin"
  :title="title"
  :isParentUser="isParentUser"
  :directParentUserName="parentUserName"/>
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

</div>
</template>

<script>
  import CreateCategory from "../../../components/CategoryAdmin/CreateCategory.vue"
  import { categoryn500Controller, userController } from '../../../store/modules/backendRoutes'
  import { get } from "../../../store/modules/services";
  import MessageBox from "../../../components/dialogs/MessageBox.vue";

    export default {
        computed: {
        IdentityModel(){
            return this.$store.getters['authenticationStore/IdentityModel'];
        },
        selectedPersonalData(){
          return this.$store.getters['categoryStore/selectedPersonalData'];
        },
        contributor(){
          return this.$store.getters['clientStore/contributor'];
        },
        isAdmin(){
          return this.$store.getters['categoryStore/isAdmin'];
        },
        DirectDownliner(){
          return this.$store.getters['dashboardStore/DirectDownliner'];
        },
        isParentUser(){
          return this.$store.getters['dashboardStore/isParentUser'];
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
        CreateCategory,
        MessageBox
      },
        data () {
    return {
        parentUserName: "",
        isCreateDialog: false,
        isCreateSuccessDialog: false,
        isCreateFailureDialog: false,
        isPersonalDataFailureDialog: false,
        message: "",
        url: `${categoryn500Controller}/createcategory`,
        title: "Create CategoryN500",
            }
        },
        async created(){
            
            var context =  this;
            if(context.isAdmin == false){
              const payload = {
                url:`${userController}/${context.IdentityModel.id}`,
                req: {}
              }

              this.$store.commit("authenticationStore/setShowSpinner", true);
              var response = await get(payload)
              this.$store.commit("authenticationStore/setShowSpinner", false);

              const { 
              data : {
                data: result,
                message,
                success,
                    }
              } = response
            
              if(success){
                this.$store.commit('clientStore/GetContributor', result)
              }else{
                context.isPersonalDataFailureDialog = true;
                context.message = message
              }

            }
            if(context.isParentUser == true){
              context.parentUserName = context.DirectDownliner.username
            }

        }
    }
</script>