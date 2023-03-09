<template>
  <div class="row bg-primary">
    <div class="col-12 q-pa-none bg-accent text-primary text-center" style="height: 50px;">
      <div class="text-center text-h6">Registered Contributors</div>
    </div>

    <div class="col-12 q-pa-sm bg-primary text-center">
      <q-table 
      :data="personalDataList"
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
            <q-td 
            v-for="column in removekeys(columns)" :key="column.name"
            :props="props">{{ props.row[column.name] }}</q-td>
        
            <q-td key="actions" :props="props">
             <q-btn 
              icon="update"
              class="bg-accent text-primary" 
              no-shadows
              @click="createCategory(props.row)" 
              size=sm no-caps>
              <q-tooltip>
                Create Category
              </q-tooltip>
              </q-btn>
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
            createCategoryUrl:{
                type: String,
                default: "",
            },
            personalDataList:{
                type: Array,
                default: [],
            },
            columns:{
                type: Array,
                default: [],
            },
            isFetchTableDialog:{
                type: Boolean,
                default: false,
            },
            message:{
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
            tableWidth: window.innerWidth < 700 ? `${window.innerWidth * 0.6}px`: "auto",
            cardWidth: window.innerWidth < 700 ? `${window.innerWidth * 0.7}px`: "auto",
            autoWidth: true,
            loading: false,
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
          createCategory(selectedPersonalData){
              var context = this;
              this.$store.commit('categoryStore/isAdminUpdate', true)
              this.$store.commit('categoryStore/SetSelectedPersonalData', selectedPersonalData)
              console.log("context.createCategoryUrl: ", context.createCategoryUrl)
              this.$router.push(`/${context.createCategoryUrl}`);
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
      created(){
        var context = this;
        console.log("context.createCategoryUrl; ", context.createCategoryUrl)
      }
    }
</script>
