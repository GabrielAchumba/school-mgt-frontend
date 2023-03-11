<template>
  <div>

    <q-table 
      :data="table_VM.rows"
      :title="table_VM.title"
      :columns="table_VM.columns" 
      row-key="name" 
      binary-state-sort
      :rows-per-page-options="[]"
      :separator="table_VM.separator"
      :filter="filter"
      :filter-method="customFilter"  
      :loading="loading"
      :wrap-cells="autoWidth"
      class="screenwide q-ma-sm"
      bordered
      >
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
              :props="props">
                <q-td 
                v-for="column in fixedkeys()" :key="column.name"
                :props="props">
                   {{ props.row[column.name]}}
                </q-td>

                <q-td 
                v-for="column in removekeys()" :key="column.name"
                :props="props">
                {{ props.row[column.name] }}
                 <q-popup-edit v-model="props.row[column.name]" auto-save buttons v-slot="scope">
                    <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
                </q-popup-edit>
                </q-td>
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
                default: () => {
                    return []
                },
            },
            isHeader:{
              type:Boolean,
              default: true
            },
            tableRows:{
              type: Array,
              default: () => {
                  return []
              }
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
            fixedkeys(){
              var context = this;
              var columnsNew = []
              for(const column of context.table_VM.columns){
                  if(column.name === "actions" 
                  || column.name === "route"  
                  || column.name === "sn"
                  || column.name === "ij"){
                      columnsNew.push(column);
                  }
              }

              return columnsNew;
          },
            removekeys(){
              var context = this;
              var columnsNew = []
              for(const column of context.table_VM.columns){
                  if(column.name != "actions" 
                  && column.name != "route"  
                  && column.name != "sn"
                  && column.name != "ij"){
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