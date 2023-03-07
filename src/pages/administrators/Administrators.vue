<template>

   <div class="row bg-primary">
    <div class="col-12 q-pa-none bg-accent text-primary text-center" style="height: 50px;">
      <div class="text-center text-h6">Administrators</div>
    </div>

    <div class="col-12 q-pa-sm bg-primary text-center">
      <q-table 
      :data="Administrators"
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
              @click="RegisterAdministrator"
              size="20px">
              <q-tooltip>
                Register Administrator
              </q-tooltip>
            </q-icon>
      </template>

      <template v-slot:body="props">
          <q-tr 
          v-if ="!props.row.isPaid"
          :props="props">
            <q-td key="firstName" :props="props">{{ props.row.firstName }}</q-td>
            <q-td key="lastName" :props="props">{{ props.row.lastName }}</q-td>
            <q-td key="userName" :props="props">{{ props.row.userName }}</q-td>
            <q-td key="actions" :props="props">

             <q-btn 
              icon="update"
              class="bg-accent text-primary"
              no-shadows
              @click="update(props.row)" 
              size=sm no-caps>
              <q-tooltip>
                Update Administrator
              </q-tooltip>
              </q-btn>
            </q-td>
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
    import MessageBox from "../../components/dialogs/MessageBox.vue"
    export default {
        computed: {
        Administrators(){
            return this.$store.getters['administratorStore/Administrators'];
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
            autoWidth: true,
            loading: false,
            columns: [
              { name: "firstName", label: "First Name", field: "", align: "left" },
              { name: "lastName", label: "Last Name", field: "", align: "left" },
              { name: "userName", label: "Username", field: "", align: "left" },
              { name: "actions", label: "Actions", field: "actions", align: "left" },
            ],
            isFetchContributorsDialog: false,
            message: "",
            }
        },
        props: {
          separator: {
            type: String,
            default: "cell",
          },
        },
        methods: {
         RegisterAdministrator(){
              this.$store.commit('administratorStore/UpdateIsSuperAdmin', true)
              this.$router.push('/register-administrator');
          },
          okayEvent(){
            var context = this;
            context.isFetchContributorsDialog = false
          },
          cancelEvent(){
            var context = this;
            context.isFetchContributorsDialog = false
          },
          update(SelectedAdmin){
              this.$store.commit('administratorStore/UpdateIsSuperAdmin', true) 
              this.$store.commit('administratorStore/UpdateSelectedAdmin', SelectedAdmin)
              this.$router.push('/update-administrator');
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
        var response = await this.$store.dispatch('administratorStore/GetAdministrators')

        const { 
              data : {
                data: result,
                message,
                success,
              }
        } = response

        if(success){
          this.$store.commit('administratorStore/GetAdministrators', result)
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

<style >
.table {
  min-width: 300px;
}
</style>
