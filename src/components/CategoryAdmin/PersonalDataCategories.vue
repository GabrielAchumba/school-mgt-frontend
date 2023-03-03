<template>
  <div>
      <div class="bg-primary">

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
             title="Contributors" 
             :data="personalDataList"
             :columns="columns" 
             row-key="name" 
             binary-state-sort
             :separator="separator"
             >


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
