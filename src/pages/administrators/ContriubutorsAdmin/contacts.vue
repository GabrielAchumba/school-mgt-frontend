<template>
  <div class="row bg-primary">
    <div class="col-12 q-pa-none bg-accent text-primary text-center" style="height: 50px;">
      <div class="text-center text-h6">Contributors' Contacts</div>
    </div>

    <div class="col-12 q-pa-sm bg-primary text-center">
      <q-table 
             :data="contacts"
             :columns="columns" 
             row-key="name" 
             binary-state-sort
            :separator="separator"
            :loading="loading"
            :wrap-cells="autoWidth"
            bordered>
        <template v-slot:body="props">
            <q-tr 
            v-if ="!props.row.isPaid"
            :props="props">
              <q-td key="fullname" :props="props">{{ props.row.fullname }}</q-td>
              <q-td key="address" :props="props">{{ props.row.address }}</q-td>
              <q-td key="residentialCity" :props="props">{{ props.row.residentialCity }}</q-td>
              <q-td key="residentialState" :props="props">{{ props.row.residentialState }}</q-td>
              <q-td key="email" :props="props">{{ props.row.email }}</q-td>
              <q-td key="phoneNumber" :props="props">{{ props.row.phoneNumber }}</q-td>
              <q-td key="actions" :props="props">
              <q-btn 
                icon="update"
                class="bg-accent text-primary"
                no-shadows
                @click="update(props.row)" 
                size=sm no-caps>
                <q-tooltip>
                  Update Contact
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
    import MessageBox from "../../../components/dialogs/MessageBox.vue"
    export default {
        computed: {
          IdentityModel(){
            return this.$store.getters['authenticationStore/IdentityModel'];
        },
        contacts(){
            return this.$store.getters['clientStore/contacts'];
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
              { name: "fullname", label: "Full Name", field: "", align: "left" },
              { name: "address", label: "Address", field: "", align: "left" },
              { name: "residentialCity", label: "Residential City", field: "", align: "left" },
              { name: "residentialState", label: "ResidentialState", field: "", align: "left" },
              { name: "email", label: "Email", field: "", align: "left" },
              { name: "phoneNumber", label: "PhoneNumber", field: "", align: "left" },
              { name: "actions", label: "Actions", field: "", align: "left" },
            ],
            message: "",
            isFetchContributorsDialog: false,
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
          update(selectedContact){
              this.$store.commit('clientStore/isAdminUpdate', true)
              this.$store.commit('clientStore/updateSelectedContact', selectedContact)
              this.$router.push('/contact');
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
        var response = await this.$store.dispatch('clientStore/GetContacts')

        const { 
              data : {
                data: result,
                message,
                success,
              }
        } = response

        if(success){
          this.$store.commit('clientStore/GetContacts', result)
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
