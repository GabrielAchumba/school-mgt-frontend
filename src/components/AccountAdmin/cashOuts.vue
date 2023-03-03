<template>
  <div>
      <div class="bg-primary">

<div class="row text-center flex flex-center q-pb-lg">

<div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
 <div class="q-pa-md" style="font-family: Lato;">
  
  <q-card class="q-pa-sm q-gutter-sm"> 

          <q-card-section class="bg-accent text-primary">
            <div class="row">
              <div class="col-12">
                <div class="text-subtitle2">{{ title }}</div>
              </div>
            </div>
          </q-card-section>

           <q-card-section>
             <q-table 
             title="Cash-Out" 
             :data="cashOuts" 
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

            <q-td key="actions" :props="props">
             <q-btn 
              icon="update"
              class="bg-accent text-primary"
              no-shadows
              @click="viewCashOut(props.row)" 
              size=sm no-caps>
              <q-tooltip>
                View CashOut
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
          title: {
              type: String,
              default: "Paid Category N500 Levels"
          },
          columns: {
              type: Array,
              default: []
          },
          cashOuts: {
              type: Array,
              default: []
          },
          viewCashOutUrl: {
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
            levelX: "",
            selected: null,
            loading1: false,
            isFetchTableDialog: false,
            message: "",
            }
        },
        methods: {
          removekeys(columns){
              var columnsNew = []
              for(const column of columns){
                  if(column.name != "actions"){
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
          viewCashOut(selectedCashOut){
              var context = this;
            this.$store.commit('cashOutStore/SetSelectedCashOut',{
                selectedCashOut,
                viewCashOutUrl: context.viewCashOutUrl,
            })
          },
        },
    }
</script>
