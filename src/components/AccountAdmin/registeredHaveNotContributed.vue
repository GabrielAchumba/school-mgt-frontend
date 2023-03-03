<template>
  <div>
      <div class="bg-primary">

<div class="row text-center flex flex-center q-pb-lg">

<div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
 <div class="q-pa-md" style="font-family: Lato;">
  
  <q-card class="q-pa-sm q-gutter-sm"> 

          <q-card-section class="bg-accent text-primary">
            <div class="row">
              <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                <div class="text-subtitle2">Registered {{ categoryTitle }}. Have Not Paid</div>
              </div>
            </div>
          </q-card-section>

           <q-card-section>
             <q-table 
             title="Payments" 
             :data="contributorsHavNotCoontriuted" 
             :columns="columns"
             row-key="name" 
             binary-state-sort
             :separator="separator"
             >


      <template v-slot:body="props">
          <q-tr 
          v-if ="!props.row.isPaid"
          :props="props">
            <q-td key="fullName" :props="props">{{ props.row.fullName }}</q-td>
            <q-td key="actions" :props="props">

              <q-btn 
               class="bg-accent text-primary"
               label="Make Payment" 
               @click="makepayment(props.row)" 
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
      props: {
          categoryTitle: {
              type: String,
              default: "",
          },
          columns: {
              type: Array,
              default: [],
          },
          contributorsHavNotCoontriuted: {
              type: Array,
              default: [],
          },
          isFetchTableDialog: {
              type: Boolean,
              default: false,
          },
          message: {
              type: String,
              default: "",
          },
          separator: {
            type: String,
            default: "cell",
          },
        },
        methods: {
          okayEvent(){
            var context = this;
            context.isFetchTableDialog = false
          },
          cancelEvent(){
            var context = this;
            context.isFetchTableDialog = false
          },
          makepayment(tableRow){
              this.$store.commit('accountStore/isAdminUpdate', true)
              this.$store.commit('accountStore/setUnContributedUser', tableRow)
              this.$store.commit('accountStore/updateHasNotPaid', true)
              this.$router.push('/contribute');
          }

        }
    }
</script>
