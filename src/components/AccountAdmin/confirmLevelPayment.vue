<template>
  <div class="row bg-primary">

    <div class="col-12 q-pa-sm text-center">
      <q-select
          class="q-ma-none"
          color="accent" 
          outlined label-color="accent"
          option-disable="inactive"
          v-model="selected"
          :options="Cycles"
          option-value="name"
          :option-label="'type'"
          name="type"
          emit-value
          map-options
          @input="selectNode(selected)"
          >
      </q-select>
    </div>

    <div class="col-12 q-pa-sm bg-primary text-center">
      <q-table 
        :data="categoryLevelXQualifiedNotComfirmed" 
        :columns="columns" 
        row-key="name" 
        binary-state-sort
        :separator="separator"
        :loading="loading"
        :wrap-cells="autoWidth"
        class="q-pa-sm bg-primary"
        bordered>


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
            categoryIndex:{
              type: Number,
              default: 1,
            }
        },
      data () {
    return {
            levelX: "",
            selected: null,
            isFetchTreeViewDialog: false,
            message: "",
            autoWidth: true,
            loading: false,
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
              console.log("levelIndex: ", levelIndex)
              console.log("context.categoryIndex: ", context.categoryIndex)
              var response = await this.$store.dispatch('categoryStore/GetCompletedLevelXCategory', {
                  url: context.url,
                  levelIndex,
                  categoryIndex: context.categoryIndex,
                  }) 
              
              const { 
              data : {
                      data: result,
                      message,
                      success,
                    }
              } = response
              
              console.log("result: ", result)
              if(success){
                this.$store.commit('categoryStore/GetCompletedLevelXCategory', {
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
