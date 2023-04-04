<template>
  <div>
      <div class="bg-primary">

      <div class="row">
          <div class="col-12" style="height:10px">     
          </div>  
    </div>

<div class="row text-center flex flex-center q-pb-lg">

<div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
 <div class="q-pa-md" style="font-family: Lato;">
  
  <q-card class="q-pa-sm q-gutter-sm"> 

          <q-card-section class="bg-accent text-primary">
            <div class="row">
              <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                <div class="text-subtitle2">Registered Contributors</div>
              </div>
            </div>
          </q-card-section>

           <q-card-section>
             <q-table 
             title="Contributors' Bio-Data" 
             :data="bioDatas"
             :columns="columns" 
             row-key="name" 
             binary-state-sort
             :separator="separator"
             >


      <template v-slot:body="props">
          <q-tr 
          v-if ="!props.row.isPaid"
          :props="props">
            <q-td key="fullname" :props="props">{{ props.row.fullname }}</q-td>
            <q-td key="base64String" :props="props">{{ props.row.base64String }}</q-td>
            <q-td key="bloodGroup" :props="props">{{ props.row.bloodGroup }}</q-td>
            <q-td key="genotype" :props="props">{{ props.row.genotype }}</q-td>
            <q-td key="maritalStatus" :props="props">{{ props.row.maritalStatus }}</q-td>
            <q-td key="lGAOfOrigin" :props="props">{{ props.row.lGAOfOrigin }}</q-td>
            <q-td key="stateOfOrigin" :props="props">{{ props.row.stateOfOrigin }}</q-td>
            <q-td key="country" :props="props">{{ props.row.country }}</q-td>
            <q-td key="actions" :props="props">
             <q-btn 
              icon="update"
              class="bg-accent text-primary"
              no-shadows
              @click="update(props.row)" 
              size=sm no-caps>
              <q-tooltip>
                Update Bio-Data
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
  import MessageBox from "../../../components/dialogs/MessageBox.vue"
  import { userController } from "../../../store/modules/backendRoutes";
  import { get } from "../../../store/modules/services";
  
    export default {
        computed: {
        IdentityModel(){
            return this.$store.getters['authenticationStore/IdentityModel'];
        },
        bioDatas(){
            return this.$store.getters['clientStore/bioDatas'];
        }
      },
      components:{
        MessageBox,
      },
        data () {
    return {
            selected: null,
            loading1: false,
            columns: [
              { name: "fullname", label: "Full Name", field: "", align: "left" },
              { name: "base64String", label: "Photo", field: "", align: "left" },
              { name: "bloodGroup", label: "Blood Group", field: "", align: "left" },
              { name: "genotype", label: "Genotype", field: "", align: "left" },
              { name: "maritalStatus", label: "Marital Status", field: "", align: "left" },
              { name: "lGAOfOrigin", label: "LGA Of Origin", field: "", align: "left" },
              { name: "stateOfOrigin", label: "State Of Origin", field: "", align: "left" },
              { name: "country", label: "Country Of Origin", field: "", align: "left" },
              { name: "actions", label: "Actions", field: "", align: "left" },
            ],
            message: "",
            isFetchContributorsDialog: false,
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
            update(selectedBioData){
                this.$store.commit('clientStore/isAdminUpdate', true)
                this.$store.commit('clientStore/updateSelectedBioData', selectedBioData)
                this.$router.push('/bio-data');
            },
            showSelectedContributor(row){

            }

        },
        async created() {
          const payload = {
            url: `${userController}/getbiodata`,
            req: {}
          }
        var response = await get(payload)

        const { 
              data : {
                data: result,
                message,
                success,
              }
        } = response

        if(success){
          this.$store.commit('clientStore/GetBioData', result)
        }else{
            var context = this;
            context.isFetchContributorsDialog = true;
            context.message = message;
        }

      }
    }
</script>
