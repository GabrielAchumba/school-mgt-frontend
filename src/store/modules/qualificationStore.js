import { $http } from 'boot/axios' 

const state = {

    NewQualification:{
        statement:"",
        base64String:""
    },
    SelectedQualification: {},
    Qualifications: [],
    QualificationDataCDialog: false,
    QualificationDataUDialog: false,
    base64String:""

  }

  const getters = {
    NewQualification (state) {
    return state.NewQualification;
  },
  SelectedQualification(state){
      return state.SelectedQualification;
  },
  Qualifications (state) {
    return state.Qualifications;
  },
  QualificationDataCDialog (state) {
    return state.QualificationDataCDialog;
  },
  QualificationDataUDialog(state){
    return state.QualificationDataUDialog;
  },
  base64String(state){
    return state.base64String;
  }
}

const mutations = {

  ReadQualifications(state, payload){
    state.Qualifications = payload
  },
  CreateQualification(state, payload){
    state.Qualifications = payload
    state.QualificationDataCDialog = false;
  },
  UpdateQualification(state, payload){
    state.Qualifications = payload
    state.QualificationDataUDialog = false;
  },
  DeleteQualification(){
    state.Qualifications = payload
  },
  ShowQualificationDataCDialog(state){
    state.QualificationDataCDialog = true;
  },
  CancelQualificationDataCDialog(state){
    state.QualificationDataCDialog = false;
  },
  ShowQualificationDataUDialog(state){
    state.QualificationDataUDialog = true;
  },
  CancelQualificationDataUDialog(state){
    state.QualificationDataUDialog = false;
  },
}

const actions = {
    ReadQualifications(context, payload)
    {
      return new Promise((resolve, reject) => {
         $http.get('Qualifications/GetQualificationsByUserId/' + payload.userId)
          .then(response => {
              
            context.commit('ReadQualifications', response.data)             
              resolve(response)
              
          })
          .catch(error => {   
            reject(error)
          })
      })
    },
  CreateQualification(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.post('Qualifications', payload)
        .then(response => {
            
          context.commit('CreateQualification', response.data)             
            resolve(response)
            
        })
        .catch(error => {   
          reject(error)
        })
    })
  },
  UpdateQualification(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.put('Qualifications/' + payload.id, payload)
        .then(response => {
            
          context.commit('UpdateQualification', response.data)             
            resolve(response)
            
        })
        .catch(error => {  
          reject(error)
        })
    })
  },
  DeleteQualification(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.delete('Qualifications/' + payload.id, payload)
        .then(response => {
            
          context.commit('DeleteQualification', response.data)             
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