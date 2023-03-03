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
  import { cashoutn2000Controller } from '../../../store/modules/backendRoutes'
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
        category: "CategoryN2000",
        isUploadFileDialog: false,
        isUploadFileSuccessDialog: false,
        isUploadFileFailureDialog: false,
        message: "",
        isOffPlatformPaymentDialog: false,
        isOffPlatformPaymentSuccessDialog: false,
        isOffPlatformPaymentFailureDialog: false,
        messageOffPlatformPayment: "",
        UploadPhotoUrl: `${cashoutn2000Controller}/uploadphoto`,
        CreateCashOutUrl: `${cashoutn2000Controller}/createcashoutdto`,
        confirmCategoryLevelPaymentUrl: "confirmCategoryN2000LevelPayment",
        amount: "2000.00",
        url: `${cashoutn2000Controller}/getcategorybankdetails`,

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