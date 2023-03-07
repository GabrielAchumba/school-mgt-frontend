<template>
  <div class="row bg-primary">
    <div class="col-12 q-pa-none bg-accent text-primary text-center" style="height: 50px;">
      <div class="text-center text-h6">Frequently Asked Questions</div>
    </div>

    <div class="col-12 q-pa-sm bg-primary text-center">
      <q-table 
      title="Relevant Information" 
      :data="fAQs" 
      :columns="columns" 
      row-key="name" 
      binary-state-sort
      :loading="loading"
      :wrap-cells="autoWidth"
      bordered>
        <template v-slot:body="props">
            <q-tr 
            v-if ="!props.row.isPaid"
            :props="props">
              <q-td key="question" :props="props">{{ props.row.question }}</q-td>
              <q-td key="answer" :props="props">{{ props.row.answer }}</q-td>
            </q-tr>
          </template>
      </q-table>
    </div>
  </div>
</template>


<script>
  export default {
      computed: {
        fAQs(){
            return this.$store.getters['dashboardStore/fAQs'];
        }
      },
    data() {
      return {
        columns: [
              { name: "question", label: "Question", field: "", align: "left" },
              { name: "answer", label: "Answer", field: "", align: "left" }
        ],
        autoWidth: true,
        loading: false,
      }
    },
    methods: {
      
    },
    created() {

    }
  }
</script>

<style scoped>

</style>
