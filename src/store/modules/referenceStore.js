import { $http } from 'boot/axios' 

const state = {

    NewReference:{
        fullName: "",
        jobPosition: "",
        organization: "",
        address: "",
        telephoneNumber: "",
        email: "",
        base64String:""
    },
    SelectedReference: {},
    References: [],
    ReferenceDataCDialog: false,
    ReferenceDataUDialog: false,
    base64String:""

  }

  const getters = {
    NewReference (state) {
    return state.NewReference;
  },
  SelectedReference(state){
      return state.SelectedReference;
  },
  References (state) {
    return state.References;
  },
  ReferenceDataCDialog (state) {
    return state.ReferenceDataCDialog;
  },
  ReferenceDataUDialog(state){
    return state.ReferenceDataUDialog;
  },
  base64String(state){
    return state.base64String;
  }
}

const mutations = {

  ReadReferences(state, payload){
    state.References = payload
  },
  CreateReference(state, payload){
    state.References = payload
    state.ReferenceDataCDialog = false;
  },
  UpdateReference(state, payload){
    state.References = payload
    state.ReferenceDataUDialog = false;
  },
  DeleteReference(){
    state.References = payload
  },
  ShowReferenceDataCDialog(state){
    state.ReferenceDataCDialog = true;
  },
  CancelReferenceDataCDialog(state){
    state.ReferenceDataCDialog = false;
  },
  ShowReferenceDataUDialog(state){
    state.ReferenceDataUDialog = true;
  },
  CancelReferenceDataUDialog(state){
    state.ReferenceDataUDialog = false;
  },
}

const actions = {
    ReadReferences(context, payload)
    {
      return new Promise((resolve, reject) => {
         $http.get('References/GetReferencesByUserId/' + payload.userId)
          .then(response => {
              
            context.commit('ReadReferences', response.data)             
              resolve(response)
              
          })
          .catch(error => {   
            reject(error)
          })
      })
    },
  CreateReference(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.post('References', payload)
        .then(response => {
            
          context.commit('CreateReference', response.data)             
            resolve(response)
            
        })
        .catch(error => {   
          reject(error)
        })
    })
  },
  UpdateReference(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.put('References/' + payload.id, payload)
        .then(response => {
            
          context.commit('UpdateReference', response.data)             
            resolve(response)
            
        })
        .catch(error => {  
          reject(error)
        })
    })
  },
  DeleteReference(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.delete('References/' + payload.id, payload)
        .then(response => {
            
          context.commit('DeleteReference', response.data)             
            resolve(response)
            
        })
        .catch(error => {  
          reject(error)
        })
    })
  }

}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}