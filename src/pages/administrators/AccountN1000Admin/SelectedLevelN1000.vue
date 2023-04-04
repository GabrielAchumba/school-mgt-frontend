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
  import SelectedLevel from "../../../components/AccountAdmin/SelectedLevel.vue";
  import { cashoutn1000Controller } from '../../../store/modules/backendRoutes';
  import { get } from "../../../store/modules/services";
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
        category: "CategoryN1000",
        isUploadFileDialog: false,
        isUploadFileSuccessDialog: false,
        isUploadFileFailureDialog: false,
        message: "",
        isOffPlatformPaymentDialog: false,
        isOffPlatformPaymentSuccessDialog: false,
        isOffPlatformPaymentFailureDialog: false,
        messageOffPlatformPayment: "",
        UploadPhotoUrl: `${cashoutn1000Controller}/uploadphoto`,
        CreateCashOutUrl: `${cashoutn1000Controller}/createcashoutdto`,
        confirmCategoryLevelPaymentUrl: "confirmCategoryN1000LevelPayment",
        amount: "1000.00",
        url: `${cashoutn1000Controller}/getcategorybankdetails`,
        categoryIndex: 2,

      }
    },
    async created() {
      var context = this;
        let payload = {
            category: context.category,
            amount: context.amount,
        }
        this.$store.commit('accountStore/onCategoryValueChanged', payload);
        this.$store.commit('cashOutStore/onCategoryValueChanged', payload);
        payload = {
          url: `${context.url}/${context.categoryIndex}`,
          req: {}
        }

        var response = await get(payload);

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