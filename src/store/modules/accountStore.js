import { $http } from 'boot/axios' 

const state = {
    Account:{
        base64String: "",
        fileName: "",
        createdYear: 1,
        createdMonth: 1,
        createdDay: 2020,
    },
    UploadProgress: "0%",
    base64String:"",
    responseMessage: "",
    accountDTO: [],
    SelectedAccount: {},
    levelDTO: {},
    IsPaymentSuccessful: false,
    paymentResponse: {},
    HasNotPaid: true,
    contributorsHavNotCoontriuted: [],
    unContributedUser: {},
    isAdmin: false,
    cashOuts: [],
    category: "CategoryN500",
    amount: "500.00",
  }

  const getters = {
    amount(state){
        return state.amount;
    },
    category(state){
        return state.category;
    },
    cashOuts(state){
      return state.cashOuts;
    },
    isAdmin(state){
      return state.isAdmin;
    },
    unContributedUser(state){
      return state.unContributedUser;
    },
    contributorsHavNotCoontriuted(state){
      return state.contributorsHavNotCoontriuted;
    },
    HasNotPaid(state){
      return state.HasNotPaid;
    },
    paymentResponse(state){
      return state.paymentResponse;
    },
    IsPaymentSuccessful(state){
      return state.IsPaymentSuccessful;
    },
    SelectedAccount(state){
      return state.SelectedAccount;
    },
    Account(state){
        return state.Account;
    },
    UploadProgress(state){
      return state.UploadProgress;
    },
    base64String(state){
        return state.base64String;
    },
    responseMessage(state){
        return state.responseMessage;
    },
    accountDTO(state){
      return state.accountDTO;
    },
    levelDTO(state){
      return state.levelDTO;
    }
}

const mutations = {
  onCategoryValueChanged(state, payload){
      state.category = payload.category;
      state.amount = payload.amount;
  },
  isAdminUpdate(state, payload){
    state.isAdmin = payload;
  },
  GetPaymentResponse(state, payload) { 
    state.paymentResponse = payload;
  },
    UpdateIsPaymentSuccessful(state, payload){
      state.IsPaymentSuccessful = payload;
    },
    HidepaymentresponseDialog(){
      state.IsPaymentSuccessful =  false;
      this.$router.push('/contribution');
    },
    SetSelectedAccount(state, payload){
      state.SelectedAccount = payload.SelectedAccount;
      this.$router.push(`/${payload.comfirmPaymentUrl}`);
    },
    Payment(state, payload){
    state.Account = payload;
    if(state.base64String === ""){
        state.responseMessage = "No payment made"
    } 
    else{
        state.responseMessage = "Payment made. Please wait for less than 24 hours for payment to be comfirmed. Thanks"
    }
    state.HasNotPaid = false;
    this.$router.push('/user-home');
  },
  OffPlatformPayment(state, payload){
    if(state.isAdmin == true){
      state.HasNotPaid = true;
      this.$router.push(`/${payload.makeContributionsUrl}`);
    }else{
      state.HasNotPaid = false;
      this.$router.push('/user-home');
    }
  },
  GetUnComfirmedAccounts(state, payload){
    state.accountDTO = payload == null || payload == undefined ? [] : payload;
  },
  ComfirmPayment(state, payload){
    this.$router.push(`/${payload.confirmEntryPaymentUrl}`);
  },
  GetUploadProgress(state, payload){
    state.UploadProgress = payload;
  },
  UploadFile(state, payload){
    state.Account.base64String = payload.base64String;
    state.Account.fileName = payload.fileName;
  },
  GetLevelsByIndex(state, payload){
    state.levelDTO = payload;
  },
  SetIsPaid(state, payload){
    
  },
  RegisteredHaveNotContributed(state, payload){
    state.contributorsHavNotCoontriuted = payload;
  },
  setUnContributedUser(state, payload){
    state.unContributedUser = payload;
  },
  updateHasNotPaid(state, payload){
    state.HasNotPaid = payload;
  },

}

const actions = {
  UploadPhoto(context, payload)
  {

    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
      $http.post(payload.url, payload.request,{
        headers: {'Content-Type': 'multipart/form-data'},
        onUploadProgress: uploadEvent => {
          context.commit('GetUploadProgress', Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%');
        }
      })
        .then(response => {           
            resolve(response)
            
        })
        .catch(error => {
          reject(error)
        })
    })
  },
 Payment(context, payload)
  {
    var paydata = {
      message: context.state.paymentResponse.message,
      reference: context.state.paymentResponse.reference,
      status: context.state.paymentResponse.status,
      trans: context.state.paymentResponse.trans,
      transactions: context.state.paymentResponse.transaction,
      trxref: context.state.paymentResponse.trxref,
      contributor_Id: payload.request.id
    }

    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
       $http.post(payload.url, paydata)
        .then(response => {
            
         /*  context.commit('Payment', response.data) 
          context.commit('HidepaymentresponseDialog')    */          
            resolve(response)
            
        })
        .catch(error => {
          //context.commit('HidepaymentresponseDialog') 
          reject(error)
        })
    })
  },
  OffPlatformPayment(context, payload)
  {

    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
       $http.post(payload.url, payload.request)
        .then(response => {           
            resolve(response)
            
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  GetUnComfirmedAccounts(context, payload)
  {
    
    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
       $http.get(payload.url)
        .then(response => {
             
            resolve(response)
            
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  RegisteredHaveNotContributed(context, payload)
  {

    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
       $http.get(payload.url)
        .then(response => {
                        
            resolve(response)
            
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  ComfirmPayment(context, payload)
  {
    
    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
       $http.put(payload.url + '/' + context.state.SelectedAccount.accountId, context.state.SelectedAccount)
        .then(response => {
                       
            resolve(response)
            
        })
        .catch(error => {
          reject(error)
        })
    })
  },
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}