<template>
  <div>
    <div class="bg-primary">

      <div class="row text-center flex flex-center q-pb-lg">
         <div class="text-h6 text-weight-bolder q-pa-sm col-12"> {{SelectedAccount.fullName}}</div>
      </div>

    <div class="row bg-primary">
      <div class="col-12">
        <div class="q-pa-sm">
         <q-img 
            :src=SelectedAccount.base64String
            spinner-color="accent"
            class="rounded-borders"/>

        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12" :class="$q.platform.is.desktop ? '' : 'q-px-md'">

            <div>
              <div class="text-caption text-green-8 text-weight-bolder q-mt-sm">Contribution</div>
              <span class="text-h6">₦{{Contribution}}.00</span>
            </div>

            <div class="q-mt-md">
              <q-btn class="q-mt-md bg-accent text-primary" @click="comfirmpayment" icon="shopping_cart" label="Comfirm"/>
              <q-btn class="q-mt-md q-ml-md bg-secondary text-primary"  @click="cancel" icon="cancel_presentation" label="Cancel"/>
            </div>
          </div>
        </div>

        <div class="row text-left q-pa-sm">

                
              <div class="col-12 q-ma-none">

                  <span class="text-h6">Account Name: {{ SelectedAccount.accountNamePaidFrom }}</span>
                  <br>
                  <span class="text-h6">Bank Name: {{ SelectedAccount. bankNamePaidFrom }}</span>
                  <br>
                  <span class="text-h6">Account Number: {{ SelectedAccount. accountNumberPaidFrom }}</span>
                  <br>
                  <br>
                  
              </div>

        </div>
      
      </div>
    </div>
    </div>

  <q-dialog v-model="isCheckPaySlipDialog">
  <MessageBox
  title="Check Pay Slip"
  :message="`Please check pay slip very well. 
  Once Ok is clicked, you cannot undo the changes`"
  okayEvent="okayCheckPaySlip"
  cancelEvent="cancelCheckPaySlip"
  @okayCheckPaySlip="okayCheckPaySlip($event)"
  @cancelCheckPaySlip="cancelCheckPaySlip($event)"
  >
  </MessageBox>
</q-dialog>

<q-dialog v-model="isCheckPaySlipSuccessDialog">
  <MessageBox
  title="Success"
  :message="`Pay Slip comfirmed successfully`"
  okayEvent="okayCheckPaySlipSucess"
  cancelEvent="cancelCheckPaySlipSucess"
  @okayCheckPaySlipSucess="okayCheckPaySlipSucess($event)"
  @cancelCheckPaySlipSucess="cancelCheckPaySlipSucess($event)"
  >
  </MessageBox>
</q-dialog>

<q-dialog v-model="isCheckPaySlipFailureDialog">
  <MessageBox
  title="Failure"
  :message="`${message}.`"
  okayEvent="okayCheckPaySlipFailure"
  cancelEvent="cancelCheckPaySlipFailure"
  @okayCheckPaySlipFailure="okayCheckPaySlipFailure($event)"
  @cancelCheckPaySlipFailure="cancelCheckPaySlipFailure($event)"
  >
  </MessageBox>
</q-dialog>
  </div>
</template>

<script>
  import MessageBox from "../dialogs/MessageBox.vue"
  export default {
      components:{
        MessageBox
      },
    props:{
        SelectedAccount: {
            type: Object,
            default: {},
        },
        Contribution: {
            type: String,
            default: "",
        },
        confirmEntryPaymentUrl: {
            type: String,
            default: "",
        },
        url:{
            type: String,
            default: "",
        }
    },
    data() {
      return {
        slide: 1,
        tab: 'Specifications',
        dense: true,
        cost: 0,
        readonly: true,
        readonlyUnits: true,
        base64String: "",
        deliverBy: "",
        isCheckPaySlipDialog: false,
        message: "",
        isCheckPaySlipSuccessDialog: false,
        isCheckPaySlipFailureDialog: false,
      }
    },
    methods: {
      async okayCheckPaySlip(){
        var context = this;
        context.isCheckPaySlipDialog = false

        var response = await this.$store.dispatch('accountStore/ComfirmPayment', {
            url: context.url
        });

        const { 
              data : {
                data: result,
                message,
                success,
                    }
              } = response
          if(success){
            context.isCheckPaySlipSuccessDialog = true;
          }else{
            context.isCheckPaySlipFailureDialog = true;
            context.message = message;
          }
      },
      cancelCheckPaySlip(){
        var context = this;
        context.isCheckPaySlipDialog = false
      },
      comfirmpayment(){
        var context = this;
        context.isCheckPaySlipDialog = true
      },
      okayCheckPaySlipSucess(){
        var context =  this;
        context.isCheckPaySlipSuccessDialog = false;
        this.$router.push(`/${context.confirmEntryPaymentUrl}`);
      },
      okayCheckPaySlipFailure(){
        var context =  this;
        context.isCheckPaySlipFailureDialog = true;
      },
      cancelCheckPaySlipFailure(){
        var context =  this;
        context.isCheckPaySlipFailureDialog = true;
      },
      cancel(){
          var context = this;
        this.$router.push(`/${context.confirmEntryPaymentUrl}`);
      }
    },
  }
</script>

<style scoped>

</style>
