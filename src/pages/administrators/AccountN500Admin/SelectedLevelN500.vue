<template>
  <div>
    <SelectedLevel
    :selectedQualifiedLevel="selectedQualifiedLevel"
    :selectedCategoryBankDetails="selectedCategoryBankDetails"
    :IdentityModel="IdentityModel"
    :CashOut="CashOut"
    :levelIndex="levelIndex"
    :category="category"
    :UploadPhotoUrl="UploadPhotoUrl"
    :CreateCashOutUrl="CreateCashOutUrl"
    :confirmCategoryLevelPaymentUrl="confirmCategoryLevelPaymentUrl"/>
  </div>
</template>

<script>
  import SelectedLevel from "../../../components/AccountAdmin/SelectedLevel.vue"
  import { cashoutn500Controller } from '../../../store/modules/backendRoutes'
  export default {
      computed: {
        selectedQualifiedLevel(){
          return this.$store.getters['cashOutStore/selectedQualifiedLevel'];
        },
        selectedCategoryBankDetails(){
          var result = this.$store.getters['cashOutStore/selectedCategoryBankDetails'];
            return result;
        },
        IdentityModel(){
          return this.$store.getters['authenticationStore/IdentityModel'];
        },
        CashOut(){
          return this.$store.getters['cashOutStore/CashOut'];
        },
        levelIndex(){
          return this.$store.getters['cashOutStore/levelIndex'];
        },
      },
    components:{
      SelectedLevel
    },
    data() {
      return {
        SelectedFile: null,
        files: null,
        category: "CategoryN500",
        isUploadFileDialog: false,
        isUploadFileSuccessDialog: false,
        isUploadFileFailureDialog: false,
        message: "",
        isOffPlatformPaymentDialog: false,
        isOffPlatformPaymentSuccessDialog: false,
        isOffPlatformPaymentFailureDialog: false,
        messageOffPlatformPayment: "",
        UploadPhotoUrl: `${cashoutn500Controller}/uploadphoto`,
        CreateCashOutUrl: `${cashoutn500Controller}/createcashoutdto`,
        confirmCategoryLevelPaymentUrl: "confirmCategoryN500LevelPayment",
        amount: "500.00",
        url: `${cashoutn500Controller}/getcategorybankdetails`,

      }
    },
    async created() {
      var context = this;
        var payload = {
            category: context.category,
            amount: context.amount,
        }
        this.$store.commit('accountStore/onCategoryValueChanged', payload);
        this.$store.commit('cashOutStore/onCategoryValueChanged', payload);
        var response = await this.$store.dispatch('cashOutStore/GetCategoryBankDetails', {
          url: context.url,
        });

        const { 
          data : {
                  data: result,
                  message,
                  success,
                }
        } = response

        if(success){
          this.$store.commit('cashOutStore/GetCategoryBankDetails', result);
        }else{

        }
    }
  }
</script>