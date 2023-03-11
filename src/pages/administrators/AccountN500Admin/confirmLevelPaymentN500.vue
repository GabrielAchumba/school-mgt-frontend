<template>
  <div>
      <confirmLevelPayment
      :Cycles="Cycles"
      :categoryLevelXQualifiedNotComfirmed="categoryLevelXQualifiedNotComfirmed"
      :columns="columns"
      :SelectedLevelUrl="SelectedLevelUrl"
      :url="url"
      :categoryIndex="categoryIndex"/>
  </div>
</template>

<script>
  import confirmLevelPayment from "../../../components/AccountAdmin/confirmLevelPayment.vue"
  import { categoryn500Controller } from '../../../store/modules/backendRoutes'
    export default {
      computed: {
        categoryLevelXQualifiedNotComfirmed(){
            return this.$store.getters['categoryStore/categoryLevelXQualifiedNotComfirmed'];
        },
      },
      components:{
        confirmLevelPayment
      },
      data () {
    return {
            Cycles:[],
            url: `${categoryn500Controller}/getcompletedlevelxcategories`,
            SelectedLevelUrl: "SelectedLevelN500",
            Contribution: "500",
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
            categoryIndex: 1,
            }
        },
        async created() {
          var context = this;
          var response = await this.$store.dispatch('dashboardStore/GetCyclesWithLevelsByUserId')

          const { 
                data : {
                  data: result,
                  message,
                  success,
                }
          } = response

          if(success){
            context.Cycles = result[0].children.map((row) => {
              return {
                ...row,
                type: row.label,
                name: row.label,
              }
            })
            //this.$store.commit('dashboardStore/GetCyclesWithLevelsByUserId', result)
          }else{
              context.message = message;
          }
      }
    }
</script>
