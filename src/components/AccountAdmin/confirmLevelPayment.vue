<template>
  <div>
      <div class="bg-primary">

<div class="row text-center flex flex-center q-pb-lg">

<div class="col-md-3 col-lg-3 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">

    <q-tree
      :nodes="Cycles"
      node-key="label"
      @update:selected="selectNode"
      :selected="selected"
    />
</div>

<div class="col-md-9 col-lg-9 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
 <div class="q-pa-md" style="font-family: Lato;">
  
  <q-card class="q-pa-sm q-gutter-sm"> 

          <q-card-section class="bg-accent text-primary">
            <div class="row">
              <div class="col-12">
                <div class="text-subtitle2">Qualified {{ levelX }}, Category NGN{{Contribution}}.00 Members (Please Pay and Comfirm Them)</div>
              </div>
            </div>
          </q-card-section>

           <q-card-section>
             <q-table 
             title="Contributors" 
             :data="categoryLevelXQualifiedNotComfirmed" 
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

            <q-td key="confirmLevel" :props="props">

             <q-btn 
              icon="update"
              class="bg-accent text-primary"
              no-shadows
              @click="updateLevel(props.row)" 
              size=sm no-caps>
              <q-tooltip>
                Update Level
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

  <q-dialog v-model="isFetchTreeViewDialog">
    <MessageBox
    title="Error"
    :message="`${message}.`"
    okayEvent="treeViewOkayEvent"
    cancelEvent="treeViewCancelEvent"
    @treeViewOkayEvent="treeViewOkayEvent($event)"
    @treeViewCancelEvent="treeViewCancelEvent($event)"
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
            Contribution: {
                type: String,
                default: "",
            },
            url: {
                type: String,
                default: "",
            },
            SelectedLevelUrl: {
                type: String,
                default: "",
            },
            columns: {
                type: Array,
                default: [],
            },
            categoryLevelXQualifiedNotComfirmed: {
                type: Array,
                default: [],
            },
            Cycles: {
                type: Array,
                default: [],
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
            isFetchTreeViewDialog: false,
            message: "",
            }
        },
        methods: {
          removekeys(columns){
              var columnsNew = []
              for(const column of columns){
                  if(column.name != "confirmLevel"){
                      columnsNew.push(column);
                  }
              }

              return columnsNew;
          },
          treeViewOkayEvent(){
            var context = this;
            context.isFetchTreeViewDialog = false
          },
          treeViewCancelEvent(){
            var context = this;
            context.isFetchTreeViewDialog = false
          },
          updateLevel(selectedQualifiedLevel){
              var context = this;
             this.$store.commit('cashOutStore/GetSelectedStreamLevel', {
                 SelectedLevelUrl: context.SelectedLevelUrl,
                 selectedQualifiedLevel
             });
          },
          async selectNode (levelName) {
            var context = this;
            
            if(levelName !== null){
              var strs = levelName.split("-")
              var levelIndex = 1;
              if(strs.length == 2) levelIndex = Number(strs[1])
              context.selected = levelName;
              switch(levelIndex){
                case 1:
                  context.levelX = "Level-One";
                  break;
                case 2:
                  context.levelX = "Level-Two";
                  break;
                case 3:
                  context.levelX = "Level-Three";
                  break;
                case 4:
                  context.levelX = "Level-Four";
                  break;
                case 5:
                  context.levelX = "Level-Five";
                  break;
                case 6:
                  context.levelX = "Level-Six";
                  break;
                case 3:
                  context.levelX = "Level-Seven";
                  break;
              }
              var response = await this.$store.dispatch('cashOutStore/GetCompletedLevelXCategory', {
                  url: context.url,
                  levelIndex
                  }) 
              
              const { 
              data : {
                      data: result,
                      message,
                      success,
                    }
              } = response
              
              if(success){
                this.$store.commit('cashOutStore/GetCompletedLevelXCategory', {
                table: result,
                levelIndex
                })
              }
             
            }
            return;
          }
        },
    }
</script>
