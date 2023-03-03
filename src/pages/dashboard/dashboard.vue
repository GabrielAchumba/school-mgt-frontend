<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-select 
          color="accent" 
          outlined label-color="accent"
          v-model="category"
          :options ="categories"
          @input="onItemValueChanged"
          label="Category"
          >
      </q-select>
      <q-separator />

      <div class="row text-center flex flex-center q-pb-lg">

        <div class="col-md-3 col-lg-3 col-sx-12 col-sm-12 q-gutter-lg q-pa-md">
            <q-tree
              :nodes="Cycles"
              node-key="label"
              @update:selected="selectNode"
              :selected="selected"
              
            />
        </div>

        <div class="col-md-9 col-lg-9 col-sx-12 col-sm-12 q-gutter-lg q-pa-md flex flex-center">
       <!--  <div class="q-pa-md" style="font-family: Lato;"> -->
          
          <q-card class="q-pa-sm q-gutter-sm"
          :style="'width:' + cardWidth"> 

                  <q-card-section class="bg-accent text-primary">
                    <div class="row">
                    <div class="col-4 text-left">Level Name: {{ cashOutStatus.level }}</div>
                    <div class="col-4 text-left"></div>
                    <div class="col-4 text-left">Investment Status: {{ cashOutStatus.investmentStatus }}</div>
                    </div>
                    <div class="row">
                    <div class="col-4 text-left">Cash-Out Status: {{ cashOutStatus.paymentStatus }}</div>
                    <div class="col-4 text-left"></div>
                    <div class="col-4 text-left">Amount Paid: ₦{{ cashOutStatus.amount }}</div>
                    </div>

                  </q-card-section>

                  <q-card-section
                  :style="'width:' + cardWidth">
                    <div class="q-pa-md"> 
                    <q-table 
                    :style="'width:' + tableWidth"
                    title="Downliners" 
                    :data="DescendantDTO" 
                    :columns="columns" 
                    row-key="name" 
                    binary-state-sort
                    :separator="separator"
                    >


              <template v-slot:body="props">
                  <q-tr 
                  v-if ="!props.row.isPaid"
                  :props="props">
                    <q-td key="fullName" :props="props">{{ props.row.fullName }}</q-td>
                    <q-td key="username" :props="props">{{ props.row.username }}</q-td>
                    <q-td key="phoneNumber" :props="props">{{ props.row.phoneNumber }}</q-td>
                    <q-td key="nLevelXRoomOneChildren" :props="props">{{ props.row.nLevelXRoomOneChildren }}</q-td>
                    <q-td key="hasPaid" :props="props">
                      <q-btn 
                        v-if="props.row.hasPaid" 
                        icon="done"
                        class="bg-primary text-accent"
                        no-shadows
                        size=sm no-caps
                        flat
                        dense>
                      </q-btn>
                      <q-btn 
                        v-else
                        icon="close"
                        class="bg-primary text-red"
                        no-shadows
                        size=sm no-caps
                        flat
                        dense>
                      </q-btn>
                    </q-td>
                    <q-td key="help" :props="props">
                        <q-btn 
                          v-if="isLevelOneEqualsThree(props.row.nLevelXRoomOneChildren)" 
                          class="bg-accent text-primary"
                          flat
                          label="complete"
                          no-shadows
                          size=sm no-caps>
                        </q-btn>
                        <q-btn 
                          v-else
                          class="bg-red text-primary"
                          label="incomplete"
                          no-shadows
                          size=sm no-caps
                          @click="helpDownliner(props.row)">
                          <q-tooltip>
                            Help Downliner
                          </q-tooltip>
                        </q-btn>
                      </q-td>
                  </q-tr>
                </template>
                    </q-table>

                    </div>
            </q-card-section>

          </q-card>
              
          <!-- </div> -->


        </div>
      </div>
    </div>
  </div>
</template>

<script>

    import { accountn500Controller } from '../../store/modules/backendRoutes'
    import { accountn1000Controller } from '../../store/modules/backendRoutes'
    import { accountn2000Controller } from '../../store/modules/backendRoutes'
    import { accountn5000Controller } from '../../store/modules/backendRoutes'
    import { accountn10000Controller } from '../../store/modules/backendRoutes'

    import { cashoutn500Controller } from '../../store/modules/backendRoutes'
    import { cashoutn1000Controller } from '../../store/modules/backendRoutes'
    import { cashoutn2000Controller } from '../../store/modules/backendRoutes'
    import { cashoutn5000Controller } from '../../store/modules/backendRoutes'
    import { cashoutn10000Controller } from '../../store/modules/backendRoutes'
    export default {
        computed: {
          IdentityModel(){
            return this.$store.getters['authenticationStore/IdentityModel'];
        },
        Cycles(){
            return this.$store.getters['dashboardStore/Cycles'];
        },
        DescendantDTO(){
            return this.$store.getters['dashboardStore/DescendantDTO'];
        }
      },
      data () {
    return {
            tableWidth: window.innerWidth < 700 ? `${window.innerWidth * 0.6}px`: "auto",
            cardWidth: window.innerWidth < 700 ? `${window.innerWidth * 0.8}px`: "auto",
            selected: null,
            loading1: false,
            columns: [
              { name: "fullName", label: "Full Name", field: "", align: "left" },
              { name: "username", label: "Username", field: "username", align: "left" },
              { name: "phoneNumber", label: "Phone Number", field: "phoneNumber", align: "left" },
              { name: "nLevelXRoomOneChildren", label: "Level One Count", field: "", align: "left" },
              { name: "hasPaid", label: "Investment Status", field: "hasPaid", align: "left" },
              { name: "help", label: "Help Downliner", field: "help", align: "left" },
              //{ name: "paymentReceived", label: "Amount Paid (₦)", field: "", align: "left" }
            ],
            categories: [
                "CategoryN500",
                "CategoryN1000",
                "CategoryN2000",
                "CategoryN5000",
                "CategoryN10000"
              ],
              category: "CategoryN500",
              cashOutStatus:{
                paymentStatus: "Not Paid",
                amount: "0.00",
                level: 0,
                isQualified: false,
                hasContributed: false,
                investmentStatus: "Yes",
              },
            }
        },
        props: {
            separator: {
            type: String,
            default: "cell",
          },
        },
        methods: {
          async selectNode (levelName) {
            var context = this;

            if(levelName !== null){
               var strs = levelName.split("-")
              var levelIndex = 1;
              if(strs.length == 2) levelIndex = Number(strs[1])
              context.cashOutStatus.level = levelIndex;
              context.selected = levelName;
              var url = "";

            switch(context.category){
            case "CategoryN500":
              url = `${accountn500Controller}/getdescendantsbylevel/${levelIndex}/${context.IdentityModel.id}`;
            break;
            case "CategoryN1000":
              url = `${accountn1000Controller}/getdescendantsbylevel/${levelIndex}/${context.IdentityModel.id}`;
            break;
            case "CategoryN2000":
              url = `${accountn2000Controller}/getdescendantsbylevel/${levelIndex}/${context.IdentityModel.id}`;
            break;
            case "CategoryN5000":
              url = `${accountn5000Controller}/getdescendantsbylevel/${levelIndex}/${context.IdentityModel.id}`;
            break;
            case "CategoryN10000":
              url = `${accountn10000Controller}/getdescendantsbylevel/${levelIndex}/${context.IdentityModel.id}`;
            break;
          }
              var response = await this.$store.dispatch('dashboardStore/GetDesendantsPerLevel', url)

            const categoriesDTO = []
             const { 
                    data : {
                      data: {
                        hasPaid,
                        categoryId
                      },
                      success,
                    }
            } = response;

              context.cashOutStatus.investmentStatus = "No";
              context.cashOutStatus.paymentStatus = "Not Paid";
              context.cashOutStatus.amount = "0.00";
              if(hasPaid) context.cashOutStatus.investmentStatus = "Yes";

              if(success){
                switch(context.category){
                  case "CategoryN500":
                    const { 
                            data : {
                              data: {
                                categoryN500sDTO,
                              },
                            }
                    } = response;
                    this.$store.commit('dashboardStore/GetDesendantsPerLevel', categoryN500sDTO);
                  break;
                  case "CategoryN1000":
                    const { 
                            data : {
                              data: {
                                categoryN1000sDTO,
                              },
                            }
                    } = response;
                    this.$store.commit('dashboardStore/GetDesendantsPerLevel', categoryN1000sDTO);
                  break;
                  case "CategoryN2000":
                    const { 
                            data : {
                              data: {
                                categoryN2000sDTO,
                              },
                            }
                    } = response;
                    this.$store.commit('dashboardStore/GetDesendantsPerLevel', categoryN2000sDTO);
                  break;
                  case "CategoryN5000":
                    const { 
                            data : {
                              data: {
                                categoryN5000sDTO,
                              },
                            }
                    } = response;
                    this.$store.commit('dashboardStore/GetDesendantsPerLevel', categoryN5000sDTO);
                  break;
                  case "CategoryN10000":
                    const { 
                            data : {
                              data: {
                                categoryN10000sDTO,
                              },
                            }
                    } = response;
                    this.$store.commit('dashboardStore/GetDesendantsPerLevel', categoryN10000sDTO);
                  break;
                }
                
                await context.getCashOut(levelIndex, categoryId)

              }else{
                this.$store.commit('dashboardStore/GetDesendantsPerLevel', [])
              }
            }
          },
          onItemValueChanged() {
            //var context = this;
            /* context.amount = context.amounts[context.category];
            var payload = {
              category: context.category,
            } */
      
          },
          isLevelOneEqualsThree(selectedRow){
            console.log()
            if(selectedRow >= 3) return true;
            else return false;
          },
          helpDownliner(selectedRow){
            this.$store.commit('dashboardStore/UpdateDirectDownliner', selectedRow)
            this.$store.commit('dashboardStore/UpdateIsParentUser', true)
          },
          async getCashOut (levelIndex, categoryId) {
            var context = this;
            var url = "";
            console.log("categoryId: ", categoryId)

            var response = {}
            switch(context.category){
            case "CategoryN500":
              url = `${cashoutn500Controller}/getcashoutbycategoryid/${levelIndex}/${categoryId}`;
            break;
            case "CategoryN1000":
              url = `${cashoutn1000Controller}/getcashoutbycategoryid/${levelIndex}/${categoryId}`;
            break;
            case "CategoryN2000":
              url = `${cashoutn2000Controller}/getcashoutbycategoryid/${levelIndex}/${categoryId}`;
            break;
            case "CategoryN5000":
              url = `${cashoutn5000Controller}/getcashoutbycategoryid/${levelIndex}/${categoryId}`;
            break;
            case "CategoryN10000":
              url = `${cashoutn10000Controller}/getcashoutbycategoryid/${levelIndex}/${categoryId}`;
            break;
          }

          response = await this.$store.dispatch('cashOutStore/GetCashOutByCategoryId', {
                url
          })

               const { 
                    data : {
                      data: result,
                      success,
                    }
              } = response;

              if(success){ 
                if(Object.keys(result).length > 0){
                  context.cashOutStatus.paymentStatus = "Paid";
                  context.cashOutStatus.amount = result.returnOnInvestment;
                }else{
                  context.cashOutStatus.paymentStatus = "Not Paid";
                  context.cashOutStatus.amount = "0.00";
                }

                this.$store.commit('cashOutStore/GetCashOut', result) 
              }else{
                
              }
          },
          onResize(e) {
            const width = window.innerWidth;
            var content = this;
            if(width < 700) {
              content.tableWidth = `${width * 0.6}px`;
              content.cardWidth = `${width * 0.8}px`;
            }else{
              content.tableWidth = "auto"
              content.cardWidth = "auto"
            }
          },
        },
        async created() {
        var response = await this.$store.dispatch('dashboardStore/GetCyclesWithLevelsByUserId')

        const { 
              data : {
                data: result,
                success,
              }
        } = response

        if(success){
          this.$store.commit('dashboardStore/GetCyclesWithLevelsByUserId', result)
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
