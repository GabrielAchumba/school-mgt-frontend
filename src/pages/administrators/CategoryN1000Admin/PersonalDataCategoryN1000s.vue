<template>
  <div>
    <PersonalDataCategories
    :personalDataList="personalDataList"
    :columns="columns"
    :isFetchTableDialog="isFetchTableDialog"
    :message="message"
    :createCategoryUrl="createCategoryUrl"/>
  </div>
</template>

<script>
    import PersonalDataCategories from "../../../components/CategoryAdmin/PersonalDataCategories.vue"
    import { categoryn1000Controller } from '../../../store/modules/backendRoutes'
    import { get } from "../../../store/modules/services";
    export default {
        computed: {
        personalDataList(){
            return this.$store.getters['categoryStore/personalDataList'];
        }
      },
      components:{
        PersonalDataCategories
      },
        data () {
    return {
            columns: [
              { name: "firstName", label: "First Name", field: "", align: "left" },
              { name: "lastName", label: "Last Name", field: "", align: "left" },
              { name: "actions", label: "Actions", field: "actions", align: "left" },
            ],
            isFetchTableDialog: false,
            message: "",
            createCategoryUrl: "createCategoryN1000",
            }
        },
        async created() {
          var url = `${categoryn1000Controller}/getpersonaldataList`
          const payload = {
            url
          }
          var response = await get(payload)

         const { 
              data : {
                data: result,
                message,
                success,
              }
        } = response

        if(success){
          this.$store.commit('categoryStore/GetPersonalDataList', result)
        }else{
            var context = this;
            context.isFetchTableDialog = true;
            context.message = message;
        }

      }
    }
</script>
