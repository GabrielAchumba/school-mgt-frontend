import { $http } from 'boot/axios' 

const state = {
    Categories: [],
    isAdmin: false,
    selectedPersonalData: {},
    CategoryN500s: [],
    personalDataList: [],


  }

  const getters = {
    personalDataList(state){
      return state.personalDataList;
    },
    Categories(state){
        return state.Categories;
    },
    isAdmin(state){
      return state.isAdmin;
    },
    selectedPersonalData(state){
        return state.selectedPersonalData;
    },
}

const mutations = {
  isAdminUpdate(state, payload){
    state.isAdmin = payload;
  },
  GetCategories(state, payload){
    state.Categories = payload;
  },
  SetSelectedPersonalData(state, payload){
    state.selectedPersonalData = payload;
  },
  SetPersonalData(state, payload){
    state.selectedPersonalData.parentUserName = payload.parentUserName
  },
  isAdminUpdate(state, payload){
      state.isAdmin = payload;
  },
  GetPersonalDataList(state, payload){
    state.personalDataList = payload
  },
}

const actions = {
  CreateCategoryDTO(context, payload)
  {

    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    let payload2 = {}
    if(payload.isAdmin == true){
        context.commit('SetPersonalData', payload) 
        payload2 = context.state.selectedPersonalData;
    }else{
        payload2 = {...payload.contributor };
        payload2.contributorId = payload.contributor.id;
        payload2.parentUserName = payload.parentUserName
    }

    return new Promise((resolve, reject) => {
       $http.post(payload.url, payload2)
        .then(response => {
          
                     
            resolve(response)
            
        })
        .catch(error => {   
          reject(error)
        })
    })
  },
  GetCategories(context, payload)
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
  GetPersonalDataList(context, payload)
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