<template>
  <div  class="row bg-primary">
    <div class="col-12 q-pa-none bg-accent text-primary text-center" style="height: 50px;">
      <div class="text-center text-h6">Registered Contributors</div>
    </div>

    <div class="col-12 q-pa-sm bg-primary text-center">
      <q-table 
      :data="RegisteredContributors"
      :columns="columns" 
      row-key="name" 
      binary-state-sort
      :separator="separator"
      :loading="loading"
      :wrap-cells="autoWidth"
      bordered>

      <template v-slot:top-right>
             <q-icon 
              class="col"
              name="add" 
              @click="RegisterContributor"
              size="20px">
              <q-tooltip>
                Register Contributor
              </q-tooltip>
            </q-icon>
      </template>

      <template v-slot:body="props">
          <q-tr 
          v-if ="!props.row.isPaid"
          :props="props">
            <q-td key="fullName" :props="props">{{ props.row.fullName }}</q-td>

          </q-tr>
        </template>
    </q-table>

    </div>

<q-dialog v-model="isFetchContributorsDialog">
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
    import MessageBox from "../../../components/dialogs/MessageBox.vue"
    export default {
        computed: {
          IdentityModel(){
            return this.$store.getters['authenticationStore/IdentityModel'];
        },
        RegisteredContributors(){
            return this.$store.getters['clientStore/RegisteredContributors'];
        }
      },
      components:{
        MessageBox,
      },
      data () {
    return {
            tableWidth: window.innerWidth < 700 ? `${window.innerWidth * 0.6}px`: "auto",
            cardWidth: window.innerWidth < 700 ? `${window.innerWidth * 0.7}px`: "auto",
            selected: null,
            loading1: false,
            columns: [
              { name: "fullName", label: "Full Name", field: "", align: "left" },
            ],
            isFetchContributorsDialog: false,
            message: "",
            autoWidth: true,
            loading: false,
            }
        },
        props: {
          separator: {
            type: String,
            default: "cell",
          },
        },
        methods: {
          okayEvent(){
            var context = this;
            context.isFetchContributorsDialog = false
          },
          cancelEvent(){
            var context = this;
            context.isFetchContributorsDialog = false
          },
          RegisterContributor(){
              this.$store.commit('clientStore/isAdminUpdate', true)
              this.$router.push('/register');
          },
          showSelectedContributor(row){

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
        async created() {
        var response = await this.$store.dispatch('clientStore/GetRegisteredContributors')

        const { 
              data : {
                data: result,
                message,
                success,
              }
        } = response

        if(success){
          this.$store.commit('clientStore/GetRegisteredContributors', result)
        }else{
            var context = this;
            context.isFetchContributorsDialog = true;
            context.message = message;
        } 
      },
      mounted() {
        window.addEventListener("resize", this.onResize);
      },
      unmounted() {
        window.removeEventListener("resize", this.onResize);
      },
    }
</script>
