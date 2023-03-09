<template>
  <div class="row bg-primary">
    <div class="col-12 q-pa-none bg-accent text-primary text-center" style="height: 50px;">
      <div class="text-center text-h6">{{ title }}</div>
    </div>

    <div class="col-12 q-pa-sm bg-primary text-center">
      <q-table 
        :data="Categories"
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
            message: {
                type: String,
                default: "Failed to fetch data.",
            },
            isFetchTableDialog: {
                type: Boolean,
                default: false,
            },
            columns:{
                type: Array,
                default: [],
            },
            Categories:{
                type: Array,
                default: [],
            },
            title:{
                type: String,
                default: ""
            },
            separator: {
            type: String,
            default: "cell",
          },
        },
        data(){
          return {
            tableWidth: window.innerWidth < 700 ? `${window.innerWidth * 0.6}px`: "auto",
            cardWidth: window.innerWidth < 700 ? `${window.innerWidth * 0.7}px`: "auto",
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
      mounted() {
        window.addEventListener("resize", this.onResize);
      },
      unmounted() {
        window.removeEventListener("resize", this.onResize);
      },
    }
</script>
