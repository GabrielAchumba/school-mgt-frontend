<template>

   <div class="bg-primary">
     <div>

      <div class="row text-center flex flex-center q-pb-lg">
        <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
           <q-btn 
               class="bg-accent text-primary"
               label="Register Administrator" 
               @click="RegisterAdministrator" 
               size=sm no-caps></q-btn>
            </div>
      </div>

      <div class="row">
          <div class="col-12" style="height:10px">     
          </div>  
    </div>

<div class="row text-center flex flex-center q-pb-lg">

<div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
 <div class="q-pa-md" style="font-family: Lato;">
  
  <q-card class="q-pa-sm q-gutter-sm" 
  :style="'width:' + cardWidth"> 

          <q-card-section class="bg-accent text-primary">
            <div class="row">
              <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                <div class="text-subtitle2">Registered Contributors</div>
              </div>
            </div>
          </q-card-section>

           <q-card-section
           :style="'width:' + cardWidth">
             <q-table 
             :style="'width:' + tableWidth"
             title="Administrators"  
             :data="Administrators"
             :columns="columns" 
             row-key="name" 
             binary-state-sort
             :separator="separator"
             virtual-scroll
             >


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

    </q-card-section>

      </q-card>
      
  </div>


</div>
</div>

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
