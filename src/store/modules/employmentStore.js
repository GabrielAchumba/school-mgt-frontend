import { $http } from 'boot/axios' 

const state = {

    NewEmployment:{
        startDay: 0,
        startMonth: 0,
        startYear: 0,
        endDay: 0,
        endMonth: 0,
        endYear: 0,
        organizationName: "",
        jobDescription: "",
        jobTitle: "",
        base64String:""
    },
    SelectedEmployment: {},
    Employments: [],
    EmploymentDataCDialog: false,
    EmploymentDataUDialog: false,
    base64String:""

  }

  const getters = {
    NewEmployment (state) {
    return state.NewEmployment;
  },
  SelectedEmployment(state){
      return state.SelectedEmployment;
  },
  Employments (state) {
    return state.Employments;
  },
  EmploymentDataCDialog (state) {
    return state.EmploymentDataCDialog;
  },
  EmploymentDataUDialog(state){
    return state.EmploymentDataUDialog;
  },
  base64String(state){
    return state.base64String;
  }
}

const mutations = {

  ReadEmployments(state, payload){
    state.Employments = payload
  },
  CreateEmployment(state, payload){
    state.Employments = payload
    state.EmploymentDataCDialog = false;
  },
  UpdateEmployment(state, payload){
    state.Employments = payload
    state.EmploymentDataUDialog = false;
  },
  DeleteEmployment(){
    state.Employments = payload
  },
  ShowEmploymentDataCDialog(state){
    state.EmploymentDataCDialog = true;
  },
  CancelEmploymentDataCDialog(state){
    state.EmploymentDataCDialog = false;
  },
  ShowEmploymentDataUDialog(state){
    state.EmploymentDataUDialog = true;
  },
  CancelEmploymentDataUDialog(state){
    state.EmploymentDataUDialog = false;
  },
}

const actions = {
    ReadEmployments(context, payload)
    {
      return new Promise((resolve, reject) => {
         $http.get('Employments/GetEmploymentsByUserId/' + payload.userId)
          .then(response => {
              
            context.commit('ReadEmployments', response.data)             
              resolve(response)
              
          })
          .catch(error => {   
            reject(error)
          })
      })
    },
  CreateEmployment(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.post('Employments', payload)
        .then(response => {
            
          context.commit('CreateEmployment', response.data)             
            resolve(response)
            
        })
        .catch(error => {   
          reject(error)
        })
    })
  },
  UpdateEmployment(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.put('Employments/' + payload.id, payload)
        .then(response => {
            
          context.commit('UpdateEmployment', response.data)             
            resolve(response)
            
        })
        .catch(error => {  
          reject(error)
        })
    })
  },
  DeleteEmployment(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.delete('Employments/' + payload.id, payload)
        .then(response => {
            
          context.commit('DeleteEmployment', response.data)             
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