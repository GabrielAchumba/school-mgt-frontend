<template>
   <div class="row bg-primary">
    <div class="col-12 q-pa-none bg-accent text-primary text-center" style="height: 50px;">
      <div class="text-center text-h6">Contributors' Bank Details</div>
    </div>

    <div class="col-12 q-pa-sm bg-primary text-center">
      <q-table  
             :data="bankDetails"
             :columns="columns" 
             row-key="name" 
             binary-state-sort
            :separator="separator"
            :loading="loading"
            :wrap-cells="autoWidth"
            bordered>
         <template v-slot:body="props">
          <q-tr 
          v-if ="!props.row.isPaid"
          :props="props">
            <q-td key="fullname" :props="props">{{ props.row.fullname }}</q-td>
            <q-td key="bankName" :props="props">{{ props.row.bankName }}</q-td>
            <q-td key="accountName" :props="props">{{ props.row.accountName }}</q-td>
            <q-td key="accountNumber" :props="props">{{ props.row.accountNumber }}</q-td>
            <q-td key="actions" :props="props">

             <q-btn 
              icon="update"
              class="bg-accent text-primary"
              no-shadows
              @click="update(props.row)" 
              size=sm no-caps>
              <q-tooltip>
                Update Bank Details
              </q-tooltip>
              </q-btn>
            </q-td>
          </q-tr>
        </template>
    </q-table>
    </div>

  <q-dialog v-model="isFetchContributorsDialog">
  <MessageBox
  title="Error"
  :message="`${message}.`"
  okayEvent="okayEvent"
  cancelEvent="cancelEvent"
  @okayEvent="okayEvent($event)"
  @cancelEvent="cancelEvent($event)"
  >
  </MessageBox>
</q-dialog>

</div>

</template>

<script>
    import MessageBox from "../../../components/dialogs/MessageBox.vue"
    import { userController } from "../../../store/modules/backendRoutes";
    import { get } from "../../../store/modules/services";
    
    export default {
        computed: {
          IdentityModel(){
            return this.$store.getters['authenticationStore/IdentityModel'];
        },
        bankDetails(){
            return this.$store.getters['clientStore/bankDetails'];
        }
      },
      components:{
        MessageBox,
      },
        data () {
    return {
            tableWidth: window.innerWidth < 700 ? `${window.innerWidth * 0.6}px`: "auto",
            cardWidth: window.innerWidth < 700 ? `${window.innerWidth * 0.7}px`: "auto",
            selected: null,
            loading1: false,
            autoWidth: true,
            loading: false,
            columns: [
              { name: "fullname", label: "Full Name", field: "", align: "left" },
              { name: "bankName", label: "Bank Name", field: "", align: "left" },
              { name: "accountName", label: "Account Name", field: "", align: "left" },
              { name: "accountNumber", label: "Account Number", field: "", align: "left" },
              { name: "actions", label: "Actions", field: "actions", align: "left" },
            ],
            isFetchContributorsDialog: false,
            message: "",
            }
        },
        props: {
          separator: {
            type: String,
            default: "cell",
          },
        },
        methods: {
          okayEvent(){
            var context = this;
            context.isFetchContributorsDialog = false
          },
          cancelEvent(){
            var context = this;
            context.isFetchContributorsDialog = false
          },
          update(selectedBankDetail){
              this.$store.commit('clientStore/isAdminUpdate', true)
              this.$store.commit('clientStore/updateSelectedBankDetail', selectedBankDetail)
              this.$router.push('/bankDetail');
          },
          showSelectedContributor(row){

          },
          onResize(e) {
            const width = window.innerWidth;
            var content = this;
            if(width < 700) {
              content.tableWidth = `${width * 0.6}px`;
              content.cardWidth = `${width * 0.7}px`;
            }else{
              content.tableWidth = "auto"
              content.cardWidth = "auto"
            }
          },

        },
        async created() {
        const payload = {
          url: `${userController}/getbankdetails`,
          req: {}
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
          this.$store.commit('clientStore/GetBankDetails', result)
        }else{
            var context = this;
            context.isFetchContributorsDialog = true;
            context.message = message;
        }

      },
      mounted() {
        window.addEventListener("resize", this.onResize);
      },
      unmounted() {
        window.removeEventListener("resize", this.onResize);
      },
    }
</script>

<style >
.table {
  min-width: 300px;
}
</style>
