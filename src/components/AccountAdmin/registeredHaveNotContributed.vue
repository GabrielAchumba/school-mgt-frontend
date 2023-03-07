<template>
  <div class="row bg-primary">
    <div class="col-12 q-pa-none bg-accent text-primary text-center" style="height: 50px;">
      <div class="text-center text-h6">Registered {{ categoryTitle }}. Have Not Paid</div>
    </div>

    <div class="col-12 q-pa-sm bg-primary text-center">
      <q-table 
      title="Payments" 
      :data="contributorsHavNotCoontriuted" 
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
        data(){
          return {
            autoWidth: true,
            loading: false,
          }
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
