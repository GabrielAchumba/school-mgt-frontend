<template>
<div>
  <CreateCategory
  :url="url"
  :Message="message"
  :isPersonalDataFailureDialog="isPersonalDataFailureDialog"
  :contributor="contributor"
  :selectedPersonalData="selectedPersonalData"
  :IdentityModel="IdentityModel"
  :isAdmin="isAdmin"
  :title="title"/>
</div>
</template>

<script>
  import CreateCategory from "../../../components/CategoryAdmin/CreateCategory.vue"
  import { categoryn10000Controller } from '../../../store/modules/backendRoutes'
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
      },
      components:{
        CreateCategory
      },
        data () {
    return {
        parentUserName: "",
        isCreateDialog: false,
        isCreateSuccessDialog: false,
        isCreateFailureDialog: false,
        isPersonalDataFailureDialog: false,
        message: "",
        url: `${categoryn10000Controller}/createcategory`,
        title: "Create CategoryN10000",
            }
        },
        async created(){
            
            var context =  this;
            if(context.isAdmin == false){
               var response = await this.$store.dispatch('clientStore/GetContributor', context.IdentityModel.id)

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

        }
    }
</script>