<template>
  <div class="row bg-primary">

   <div class="col-12 q-ma-none bg-accent text-primary text-center" style="height: 50px;">
      <div class="text-center text-h6">Un-comfirmed Accounts</div>
   </div>

    <div class="col-12 q-pa-sm bg-primary text-center">
      <q-table 
              :data="uncomfirmedAccounts" 
              :columns="columns"
              row-key="name" 
              binary-state-sort
              :separator="separator"
              :loading="loading"
              :wrap-cells="autoWidth"
              bordered>

        <template v-slot:body="props">
            <q-tr 
            :props="props">
              
              <q-td 
              v-for="column in removekeys(columns)" :key="column.name"
              :props="props">{{ props.row[column.name] }}</q-td>
              <q-td key="comfirmPayment" :props="props">

                <q-btn 
                class="bg-accent text-primary"
                label="Comfirm Payment" 
                @click="comfirmpayment(props.row)" 
                size=sm no-caps></q-btn>
              </q-td>
            </q-tr>
          </template>
      </q-table>
    </div>

   <q-dialog v-model="isFetchTableDialog">
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
  import MessageBox from "../dialogs/MessageBox.vue"

    export default {
      components:{
        MessageBox
      },
      props:{
          uncomfirmedAccounts: {
              type: Array,
              default: [],
          },
          columns: {
              type: Array,
              default: [],
          },
          comfirmPaymentUrl: {
              type: String,
              default: "",
          },
          separator: {
            type: String,
            default: "cell",
          },
      },
      data () {
    return {
            isFetchTableDialog: false,
            message: "",
            autoWidth: true,
            loading: false,
            }
        },
        methods: {
          removekeys(columns){
              var columnsNew = []
              for(const column of columns){
                  if(column.name != "comfirmPayment"){
                      columnsNew.push(column);
                  }
              }

              return columnsNew;
          },
          okayEvent(){
            var context = this;
            context.isFetchTableDialog = false
          },
          cancelEvent(){
            var context = this;
            context.isFetchTableDialog = false
          },
          comfirmpayment(tableRow){
              var context = this;
              this.$store.commit('accountStore/SetSelectedAccount', {
                  comfirmPaymentUrl: context.comfirmPaymentUrl,
                  SelectedAccount: tableRow,
                })
          }

        },
    }
</script>
