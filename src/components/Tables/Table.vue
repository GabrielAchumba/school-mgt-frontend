<template>
  <div class="bg-primary">

    <q-table 
      :data="table_VM.rows"
      :title="table_VM.title"
      :columns="table_VM.columns" 
      row-key="name" 
      binary-state-sort
      :separator="table_VM.separator"
      :filter="filter"
      :filter-method="customFilter"  
      :loading="loading"
      :wrap-cells="autoWidth"
      class="screenwide q-ma-sm bg-primary"
      bordered
      >

         <template v-slot:top-left>
            <q-input borderless dense debounce="300" v-model="search" placeholder="Search" class="col">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
        </template>

        <template v-slot:top-right>
            <q-icon 
              class="col"
              name="delete" 
              @click="deleteAllItems"
              size="20px">
              <q-tooltip>
                Delete Selected Rows
              </q-tooltip>
            </q-icon>
             <q-icon 
              class="col"
              name="add" 
              @click="createItem"
              size="20px">
              <q-tooltip>
                Add Row Item
              </q-tooltip>
            </q-icon>
            <q-icon 
              class="col"
              name="import_contacts" 
              @click="dataImport"
              size="20px">
              <q-tooltip>
                Import Rows
              </q-tooltip>
            </q-icon>
              <q-toggle
                v-model="qToggleModel"
                color="accent"
                false-value="Disagreed"
                true-value="Agreed"
                @input="onToggleAllTableRows"
              />
        </template>

          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
                class="bg-accent text-primary"
              >
                {{ col.label }}
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body="props">

              <q-tr 
              v-if="props.row.isActive"
              :props="props">
                <q-td key="sn" :props="props">
                   {{ props.row.sn}}
                </q-td>

                <q-td key="actions" :props="props">
                    <div class="row q-pa-md text-center">
                       <q-toggle
                          v-model="checkBoxModels[props.row.sn-1]"
                          color="accent"
                          false-value="Disagreed"
                          true-value="Agreed"
                        />
                        <q-icon 
                        name="edit"
                        @click="updateItem(props.row)"
                        size="sm"/>
                        <q-icon 
                        name="delete" 
                        @click="deleteItem(props.row)"
                        size="sm" />
                    </div>
                </q-td>

                <!-- <q-td key="route" :props="props">
                    <a href="#" @click="linkClick(props.row)">{{ props.row['route']}}</a>
                </q-td> -->

                <q-td 
                class="bg-accent text-primary"
                v-for="column in removekeys()" :key="column.name"
                :props="props">{{ props.row[column.name] }}</q-td>
              </q-tr>

              <q-tr 
              v-else
              :props="props">
                <q-td key="sn" :props="props">
                   {{ props.row.sn}}
                </q-td>
                <q-td key="actions" :props="props">
                    <div class="row q-pa-sm text-center">
                        <q-toggle
                          v-model="checkBoxModels[props.row.sn-1]"
                          color="accent"
                          false-value="Disagreed"
                          true-value="Agreed"
                        />
                        <q-icon 
                        name="edit"
                        @click="updateItem(props.row)"
                        size="sm"/>
                        <q-icon 
                        name="delete" 
                        @click="deleteItem(props.row)"
                        size="sm" />
                    </div>
                </q-td>

                <!-- <q-td key="route" :props="props">
                    <a href="#" @click="linkClick(props.row)">{{ props.row['route']}}</a>
                </q-td> -->

                <q-td 
                v-for="column in removekeys()" :key="column.name"
                :props="props">{{ props.row[column.name] }}</q-td>
              </q-tr>
          </template>
    </q-table>

  </div>
</template>

<script>
    import { tableVM } from "./TableVM.js";
    import CardList from "../Cards/Card4Table.vue";
    import Search from "../Searches/Search.vue";
    export default {
        computed:{
          isMobile(){
            return this.$store.getters["authenticationStore/isMobile"];
          },
          cardItems(){
            return this.$store.getters["componentsStore/cardItems"];
          },
          rows(){ 
            return this.$store.getters["authenticationStore/newRows"];;
          },
          setIsResponsive(){
            console.log("setIsResponsive called")
            if(window.innerWidth < 700) return true
            else return false;
          },
          filter() {
            var context = this;
            return {
              search: context.search,     
            }
          }
        },
        components:{
          CardList,
          Search,
        },
        props: {
            isResponsive:{
              type: Boolean,
              default: false
            },
            table_VM:{
                type: Object,
                default: tableVM,
            },
            isHeader:{
              type:Boolean,
              default: true
            },
            tableRows:{
              type: Array,
              default: []
            }
        },
        data(){
          return {
            autoWidth: true,
            qToggleModel: "Disagreed",
            tableWidth: window.innerWidth < 700 ? `${window.innerWidth * 0.6}px`: "100%",
            cardWidth: window.innerWidth < 700 ? `${window.innerWidth * 0.7}px`: "100%",
            loading: false,
            rowCount: 10,
            windowResize: false,  
            search: '',
            checkBoxModels: [],
          }
        },
        methods: {
          customFilter(rows, terms){
            // rows contain the entire data
            // terms contains whatever you have as filter
            
            //console.log(terms,rows)
            
            var lowerSearch = terms.search ? terms.search.toLowerCase() : ""

            const filteredRows = rows.filter(
              (row, i) =>{
              
              //Gather search condition    

              
              //Assume true in case there is no search 
              let s1 = true
              
              //If search term exists, convert to lower case and see which rows contain it
              if(lowerSearch != ""){
                s1 = false
                //Get the values
                let s1_values = Object.values(row)
                //Convert to lowercase
                let s1_lower = s1_values.map(x => x.toString().toLowerCase())
              
                for (let val = 0; val<s1_lower.length; val++){
                  if (s1_lower[val].includes(lowerSearch)){
                    s1 = true
                    break
                  }
                }
              }

              return s1

              })

            return filteredRows
          },
            linkClick(row){
              this.$emit("linkClick", row)
            },
            removekeys(){
              var context = this;
              var columnsNew = []
              for(const column of context.table_VM.columns){
                  if(column.name != "actions" 
                  && column.name != "route"  
                  && column.name != "sn"){
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
          deleteItem(selectedItem){
            var context = this
            this.$emit(context.table_VM.deleteItem, selectedItem);
          },
          deleteAllItems(){
            var context = this;
            this.$emit("deleteAllItems", context.checkBoxModels);
          },
          dataImport(){
            var context = this;
            console.log('context.table_VM.dataImport: ', context.table_VM.dataImport)
            this.$emit(context.table_VM.dataImport);
          },
          onResize(e) {
            const width = window.innerWidth;
            var context = this;
            if(width < 700) {
              context.tableWidth = `${width * 0.6}px`;
              context.cardWidth = `${width * 0.7}px`;
              context.windowResize = true;
              console.log("windowResize: ", context.windowResize)
            }else{
              context.tableWidth = "100%"
              context.cardWidth = "100%"
              context.windowResize = false;
              console.log("windowResize: ", context.windowResize)
            }
          },
          onToggleAllTableRows(event){
            var context = this;
            console.log("event: ", event)
            for(let i = 0; i < context.checkBoxModels.length; i++){
              context.checkBoxModels[i] = event;
            }
          },

      },
      watch: {
          tableRows: function(val) {
              //console.log("val: ", val)
              if (val) {
                var context = this;
                context.checkBoxModels = [];
                context.checkBoxModels = context.rows.map((row) => {
                  return "Disagreed";
                })
              }
          }
      },
      mounted() {
        window.addEventListener("resize", this.onResize);
      },
      unmounted() {
        window.removeEventListener("resize", this.onResize);
      },
      created(){
        var context = this
        context.checkBoxModels = context.table_VM.rows.map((row) => {
          return "Disagreed";
        })
      }
    }
</script>

<style scoped>

.screenwide{
  max-width: 100% !important
}
	

/* .screenwide .q-table{
  max-width: 100% !important
}
	 */
</style>