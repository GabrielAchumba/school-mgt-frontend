<template>
  <div class="bg-primary">

      <div class="row text-center flex flex-center">
          <div class="col-12" style="height:10px">     
          </div>  
    </div>

    <div class="row text-center flex flex-center">
      <q-card class="col-12 q-pa-md q-ma-none"
      :style="'width:' + cardWidth"> 

              <q-card-section class="bg-accent text-primary">
                <div class="row">
                   <p class="text-subtitle2">{{ table_VM.title }}</p>
                   <q-space/>
                    <q-btn 
                        label="Create"
                        class="bg-accent text-primary" 
                        no-shadows
                        @click="createItem"
                        size=md no-caps />
                </div>
              </q-card-section>

              <q-card-section
              :style="'width:' + cardWidth">
                <q-table 
                :style="'width:' + tableWidth"
                :data="table_VM.rows"
                :columns="table_VM.columns" 
                row-key="name" 
                binary-state-sort
                :separator="table_VM.separator"
                >


          <template v-slot:body="props">
              <q-tr 
              :props="props">
                <q-td key="actions" :props="props">
                    <div class="row q-pa-md">
                        <q-icon 
                        name="update"
                        @click="updateItem(props.row)"
                        size="20px"/>

                        <q-space />

                        <q-icon 
                        name="delete" 
                        @click="deleteItem(props.row)"
                        size="20px" />
                    </div>
                </q-td>

                <q-td 
                v-for="column in removekeys()" :key="column.name"
                :props="props">{{ props.row[column.name] }}</q-td>
              </q-tr>
            </template>
        </q-table>

        </q-card-section>

      </q-card>
    </div>

  </div>
</template>

<script>
    import { tableVM } from "./TableVM.js"
    export default {
        props: {
            table_VM:{
                type: Object,
                default: tableVM,
            },
        },
        data(){
          return {
            tableWidth: window.innerWidth < 700 ? `${window.innerWidth * 0.6}px`: "auto",
            cardWidth: window.innerWidth < 700 ? `${window.innerWidth * 0.7}px`: "auto",
          }
        },
        methods: {
            removekeys(){
              var context = this;
              var columnsNew = []
              for(const column of context.table_VM.columns){
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
          createItem(){
              var context = this;
              this.$emit(context.table_VM.createItem);
          },
          updateItem(selectedItem){
            var context = this;
            this.$emit(context.table_VM.updateItem, selectedItem);
          },
          deleteItem(){
            var context = this
            this.$emit(context.table_VM.deleteItem);
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