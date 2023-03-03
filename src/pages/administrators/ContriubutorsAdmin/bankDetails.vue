<template>

   <div class="bg-primary">
     <div>

      <div class="row">
          <div class="col-12" style="height:10px">     
          </div>  
      </div>

<div class="row text-center flex flex-center q-pb-lg">

<div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
 <div class="q-pa-md" style="font-family: Lato;">
  
  <q-card class="q-pa-sm q-gutter-sm" 
  :style="'width:' + cardWidth"> 

          <q-card-section class="bg-accent text-primary">
            <div class="row">
              <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                <div class="text-subtitle2">Registered Contributors</div>
              </div>
            </div>
          </q-card-section>

           <q-card-section
           :style="'width:' + cardWidth">
             <q-table 
             :style="'width:' + tableWidth"
             title="Contributors' Bank Details"  
             :data="bankDetails"
             :columns="columns" 
             row-key="name" 
             binary-state-sort
             :separator="separator"
             virtual-scroll
             >


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

    </q-card-section>

      </q-card>
      
  </div>


</div>
</div>

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
        var response = await this.$store.dispatch('clientStore/GetBankDetails')

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
