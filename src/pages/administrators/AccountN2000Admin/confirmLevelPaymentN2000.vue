<template>
  <div>
      <confirmLevelPayment
      :Cycles="Cycles"
      :categoryLevelXQualifiedNotComfirmed="categoryLevelXQualifiedNotComfirmed"
      :columns="columns"
      :SelectedLevelUrl="SelectedLevelUrl"
      :url="url"/>
  </div>
</template>

<script>
  import confirmLevelPayment from "../../../components/AccountAdmin/confirmLevelPayment.vue"
  import { cashoutn2000Controller } from '../../../store/modules/backendRoutes'
    export default {
        computed: {
        Cycles(){
            return this.$store.getters['dashboardStore/Cycles'];
        },
        categoryLevelXQualifiedNotComfirmed(){
            return this.$store.getters['cashOutStore/categoryLevelXQualifiedNotComfirmed'];
        },
      },
      components:{
        confirmLevelPayment
      },
      data () {
    return {
            url: `${cashoutn2000Controller}/getcompletedlevelxcategories`,
            SelectedLevelUrl: "SelectedLevelN2000",
            Contribution: "2000",
            levelX: "",
            selected: null,
            columns: [
              { name: "fullName", label: "Full Name", field: "", align: "left" },
              { name: "entryDate", label: "Entry Date", field: "", align: "left" },
              { name: "nLevelXRoomOneChildren", label: "No. Level Downliners", field: "", align: "left" },
              { name: "bankName", label: "Bank Name", field: "", align: "left" },
              { name: "accountName", label: "Account Name", field: "", align: "left" },
              { name: "accountNumber", label: "Account Number", field: "", align: "left" },
              { name: "confirmLevel", label: "Comfirm Level Payment", field: "actions", align: "left" }
            ],
            message: "",
            }
        },
        async created() {
        var response = await this.$store.dispatch('dashboardStore/GetCyclesWithLevelsByUserId')

        const { 
              data : {
                data: result,
                message,
                success,
              }
        } = response

        if(success){
          this.$store.commit('dashboardStore/GetCyclesWithLevelsByUserId', result)
        }else{
            var context = this;
            context.message = message;
        }
      }
    }
</script>
