<template>
  <div>
      <div class=" bg-primary">

<div class="row text-center flex flex-center q-pb-lg">

<div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
 <div class="q-pa-md" style="font-family: Lato;">
  
  <q-card class="q-pa-sm q-gutter-sm"> 

          <q-card-section class="bg-accent text-primary">
            <div class="row">
              <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                <div class="text-subtitle2">Un-comfirmed Accounts</div>
              </div>
            </div>
          </q-card-section>

           <q-card-section>
             <q-table 
             title="Payments" 
             :data="uncomfirmedAccounts" 
             :columns="columns"
             row-key="name" 
             binary-state-sort
             :separator="separator"
             >


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

    </q-card-section>

      </q-card>
      
  </div>


</div>
</div>

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
