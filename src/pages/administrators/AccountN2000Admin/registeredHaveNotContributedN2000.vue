<template>
  <div>
    <registeredHaveNotContributed
    :columns="columns"
    :contributorsHavNotCoontriuted="contributorsHavNotCoontriuted"
    :isFetchTableDialog="isFetchTableDialog"
    :message="message"
    :categoryTitle="categoryTitle"/>
  </div>
</template>

<script>
  import registeredHaveNotContributed from "../../../components/AccountAdmin/registeredHaveNotContributed.vue"
  import { accountn2000Controller } from '../../../store/modules/backendRoutes'
  import { get } from "../../../store/modules/services";
    export default {
        computed: {
        contributorsHavNotCoontriuted(){
            return this.$store.getters['accountStore/contributorsHavNotCoontriuted'];
        },
      },
      components:{
        registeredHaveNotContributed
      },
      data () {
    return {
            columns: [
              { name: "fullName", label: "Full Name", field: "", align: "left" },
              { name: "actions", label: "Make Payment", field: "actions", align: "left" }
            ],
            categoryTitle:"Category N2000",
            isFetchTableDialog: false,
            message: "",
            }
        },
        async created() {
        var context = this;
        var url = `${accountn2000Controller}/registeredhavenotcontributed`;
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
          this.$store.commit('accountStore/RegisteredHaveNotContributed', result)
        }else{
            var context = this;
            context.isFetchTableDialog = true;
            context.message = message;
        }

      }
    }
</script>
