<template>
 <div class="q-pa-sm">

    <q-table 
    :data="rows"
    :columns="columns" 
    row-key="name" 
    binary-state-sort
    separator="cell"
    :filter="filter"
    :loading="loading"
    class="screenwide"
    style="height: 60%"
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
                v-for="column in columns" :key="column.name"
                :props="props">{{ props.row[column.name] }}</q-td>
              </q-tr>
            </template>
    </q-table>

    <div class="text-right">
        <q-btn class="q-ma-sm bg-accent text-primary"
        label="Done"
        type="button"
        size="md"
        no-caps
        @click="Done"
    />
    </div>

 </div>
</template>

<script>
import { post } from "../../../store/modules/services";
export default {
  data(){
      return {
        rows: [],
        columns: [
            { name: "studentFullName", label: "Student Full Name", field: "", align: "left" },
            { name: "token", label: "Token", field: "", align: "left" },
        ],
        loading: false,
        filter: '',
      }
  },
  methods: {
      async GenerateToken(){
          console.log("GenerateToken called");

            const paymentResponse = this.$store.getters['subscriptionStore/paymentResponse'];
            var paydata = {
                message: context.state.paymentResponse.message,
                reference: context.state.paymentResponse.reference,
                status: context.state.paymentResponse.status,
                trans: context.state.paymentResponse.trans,
                transactions: context.state.paymentResponse.transaction,
                trxref: context.state.paymentResponse.trxref,
                isPaid: this.$store.getters['subscriptionStore/isPaymentSuccessful'],
                totalAmount: this.$store.getters['subscriptionStore/totalAmount'],
            }  
            
            var user = this.$store.getters["authenticationStore/IdentityModel"]
            var url = `payment/${user.schoolId}`;
            var response = await post({
                url,
                req:paydata
                })

            const { 
                data : {
                    data: result,
                    success,
                    message,
                }
            } = response


            console.log("message: ", message);
      },
      Done(){
          this.$router.push('/admin')
      }
  },
  async created(){
      var context = this;
      await context.GenerateToken();
  }
};
</script>