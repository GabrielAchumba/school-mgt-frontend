<template>
  <div class="bg-primary">

   <!--  <div 
    v-if="isHeader"
    class="row bg-primary bg-accent text-primary q-pa-sm q-ma-sm">
        <p class="text-subtitle2">{{ table_VM.title }}</p>
        <q-space></q-space>
        <Search/>
         <q-space></q-space>
        <q-btn 
        label="Create"
        class="bg-accent text-primary q-ma-sm" 
        no-shadows
        @click="createItem"
        size=md no-caps />  
    </div> -->

    <div 
      v-if="setIsResponsive()"
      class="row bg-primary q-pa-sm">
        <CardList 
        :cardList="cardItems"
        @updateItem="updateItem($event)"/>
    </div>

    <q-table 
      v-else
      :data="rows"
      :columns="table_VM.columns" 
      row-key="name" 
      binary-state-sort
      :separator="table_VM.separator"
      :filter="filter"
      :loading="loading"
      class="screenwide q-ma-sm bg-primary"
      bordered
      >

         <!--  <template v-slot:top>
              <q-space />
              <q-input outlined dense debounce="300" color="accent" v-model="filter">
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
              </q-input>
          </template> -->
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
                <q-td key="actions" :props="props">
                    <div class="row q-pa-md text-center">
                        <q-icon 
                        name="edit"
                        @click="updateItem(props.row)"
                        size="20px"/>
                        <q-icon 
                        name="delete" 
                        @click="deleteItem(props.row)"
                        size="20px" />
                    </div>
                </q-td>

                <q-td key="route" :props="props">
                    <a href="#" @click="linkClick(props.row)">{{ props.row['route']}}</a>
                </q-td>

                <q-td 
                class="bg-accent text-primary"
                v-for="column in removekeys()" :key="column.name"
                :props="props">{{ props.row[column.name] }}</q-td>
              </q-tr>

              <q-tr 
              v-else
              :props="props">
                <q-td key="actions" :props="props">
                    <div class="row q-pa-md text-center">
                        <q-icon 
                        name="edit"
                        @click="updateItem(props.row)"
                        size="20px"/>
                        <q-icon 
                        name="delete" 
                        @click="deleteItem(props.row)"
                        size="20px" />
                    </div>
                </q-td>

                <q-td key="route" :props="props">
                    <a href="#" @click="linkClick(props.row)">{{ props.row['route']}}</a>
                </q-td>

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
    import CardList from "../Cards/CardList2.vue";
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
            return this.$store.getters["authenticationStore/newRows"];
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
            }
        },
        data(){
          return {
            tableWidth: window.innerWidth < 700 ? `${window.innerWidth * 0.6}px`: "100%",
            cardWidth: window.innerWidth < 700 ? `${window.innerWidth * 0.7}px`: "100%",
            loading: false,
            filter: '',
            rowCount: 10,
          }
        },
        methods: {
            linkClick(row){
              this.$emit("linkClick", row)
            },
            setIsResponsive(){
              var context = this;
              if(context.isResponsive == false){
                return context.isResponsive;
              }else{
                return context.isMobile;
              }
            },
            removekeys(){
              var context = this;
              var columnsNew = []
              for(const column of context.table_VM.columns){
                  if(column.name != "actions" && column.name != "route"){
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
          onResize(e) {
            const width = window.innerWidth;
            var context = this;
            if(width < 700) {
              context.tableWidth = `${width * 0.6}px`;
              context.cardWidth = `${width * 0.7}px`;
            }else{
              context.tableWidth = "100%"
              context.cardWidth = "100%"
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

<style scoped>

.screenwide{
  max-width: 100% !important
}
	

/* .screenwide .q-table{
  max-width: 100% !important
}
	 */
</style>