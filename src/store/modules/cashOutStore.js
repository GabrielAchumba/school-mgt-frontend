import { $http } from 'boot/axios' 

const state = {
    cashOuts: [],
    UploadProgress: "0%",
    CashOut:{
        base64String: "",
        fileName: "",
        createdYear: 1,
        createdMonth: 1,
        createdDay: 2020,
    },
    selectedCategoryBankDetails: {
        categoryBankName:      "",
		categoryAccountName:   "",
		categoryAccountNumber: "",
    },
    category: "CategoryN500",
    categoryLevelXQualifiedNotComfirmed: [],
    selectedQualifiedLevel: {},
    levelIndex: 1,
    selectedCashOut: {},
    componentKey: 0,
}

const getters = {
    componentKey(state){
        return state.componentKey;
    },
    selectedCashOut(state){
        return state.selectedCashOut;
    },
    levelIndex(state){
        return state.levelIndex;
    },
    categoryLevelXQualifiedNotComfirmed(state){
        return state.categoryLevelXQualifiedNotComfirmed;
    },
    category(state){
        return state.category;
    },
    selectedCategoryBankDetails(state){
        return state.selectedCategoryBankDetails;
    },
    cashOuts(state){
        return state.cashOuts;
    },
    UploadProgress(state){
        return state.UploadProgress;
    },
    CashOut(state){
        return state.CashOut;
    },
    selectedQualifiedLevel(state){
        return state.selectedQualifiedLevel;
    },
}

const mutations = {
    initializeStore(state, payload){

        state = {
            ...state,
            ...payload,
        }
        console.log("state: ", state)
    },
    SetSelectedCashOut(state, payload){
        state.selectedCashOut = payload.selectedCashOut;
        this.$router.push(`/${payload.viewCashOutUrl}`)
    },
    onCategoryValueChanged(state, payload){
        state.category = payload.category;
    },
    GetUploadProgress(state, payload){
        state.UploadProgress = payload;
    },
    UploadFile(state, payload){
    state.CashOut.base64String = payload.base64String;
    state.CashOut.fileName = payload.fileName;

    },
    GetCashOuts(state, payload){
        state.cashOuts = payload;
    },
    GetCashOut(state, payload){
        state.cashOuts = payload;
    },
    GetCategoryBankDetails(state, payload){
        state.selectedCategoryBankDetails = payload;
    },
    GetCompletedLevelXCategory(state, payload){
        state.categoryLevelXQualifiedNotComfirmed = [];
        switch(payload.levelIndex){
          case 1:
            state.categoryLevelXQualifiedNotComfirmed =  payload.table;
          break;
          case 2:
            state.categoryLevelXQualifiedNotComfirmed =  payload.table;
          break;
          case 3:
            state.categoryLevelXQualifiedNotComfirmed =  payload.table;
          break;
          case 4:
            state.categoryLevelXQualifiedNotComfirmed =  payload.table;
          break;
          case 5:
            state.categoryLevelXQualifiedNotComfirmed =  payload.table;
          break;
          case 6:
            state.categoryLevelXQualifiedNotComfirmed =  payload.table;
          break;
          case 7:
            state.categoryLevelXQualifiedNotComfirmed =  payload.table;
          break;
        }
    },
    GetSelectedStreamLevel(state, payload){
        state.selectedQualifiedLevel = payload.selectedQualifiedLevel;
        this.$router.push(`/${payload.SelectedLevelUrl}`)
    },
    GetLevelIndex(state, payload){
        state.levelIndex = payload;
    },
}

const actions = {

  GetCompletedLevelXCategory(context, payload)
  {

    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
      
        $http.get(`${payload.url}/${payload.levelIndex}`)
            .then(response => {
                        
                resolve(response)
                
            })
            .catch(error => {
            reject(error)
            })
        })
    },
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
    CreateCashOutDTO(context, payload)
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
    GetCashOuts(context, payload)
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
    GetCashOut(context, payload)
    {

        var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

        return new Promise((resolve, reject) => {
        $http.get(`${payload.url}/${payload.cashOutId}`)
            .then(response => {
                             
                resolve(response)
                
            })
            .catch(error => {
            reject(error)
            })
        })
    },
    GetCategoryBankDetails(context, payload)
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
    GetCashOutByCategoryId(context, payload)
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
}

export default {
    namespaced: true,
    getters,
    mutations,
    actions,
    state
  }