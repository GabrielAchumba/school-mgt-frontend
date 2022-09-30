import { $http } from 'boot/axios' 

const state = {

    NewEducation:{
        startDay: 0,
        startMonth: 0,
        startYear: 0,
        endDay: 0,
        endMonth: 0,
        endYear: 0,
        schoolName: "",
        department: "",
        faculty: "",
        finalOverallGrade: "",
        base64String:""
    },
    SelectedEducation: {},
    Educations: [],
    EducationDataCDialog: false,
    EducationDataUDialog: false,
    base64String:""

  }

  const getters = {
    NewEducation (state) {
    return state.NewEducation;
  },
  SelectedEducation(state){
      return state.SelectedEducation;
  },
  Educations (state) {
    return state.Educations;
  },
  EducationDataCDialog (state) {
    return state.EducationDataCDialog;
  },
  EducationDataUDialog(state){
    return state.EducationDataUDialog;
  },
  base64String(state){
    return state.base64String;
  }
}

const mutations = {

  ReadEducations(state, payload){
    state.Educations = payload
  },
  CreateEducation(state, payload){
    state.Educations = payload
    state.EducationDataCDialog = false;
  },
  UpdateEducation(state, payload){
    state.Educations = payload
    state.EducationDataUDialog = false;
  },
  DeleteEducation(){
    state.Educations = payload
  },
  ShowEducationDataCDialog(state){
    state.EducationDataCDialog = true;
  },
  CancelEducationDataCDialog(state){
    state.EducationDataCDialog = false;
  },
  ShowEducationDataUDialog(state, payload){
    state.SelectedEducation=payload;
    state.EducationDataUDialog = true;
  },
  ShowEducationDataUDialog2(state, payload){
    state.SelectedEducation=payload;
  },
  CancelEducationDataUDialog(state){
    state.EducationDataUDialog = false;
  },
}

const actions = {
    ReadEducations(context, payload)
    {
      return new Promise((resolve, reject) => {
         $http.get('Educations/GetEducationsByUserId/' + payload.userId)
          .then(response => {
              
            context.commit('ReadEducations', response.data)             
              resolve(response)
              
          })
          .catch(error => {   
            reject(error)
          })
      })
    },
  CreateEducation(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.post('Educations', payload)
        .then(response => {
            
          context.commit('CreateEducation', response.data)             
            resolve(response)
            
        })
        .catch(error => {   
          reject(error)
        })
    })
  },
  UpdateEducation(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.put('Educations/' + payload.id, payload)
        .then(response => {
            
          context.commit('UpdateEducation', response.data)             
            resolve(response)
            
        })
        .catch(error => {  
          reject(error)
        })
    })
  },
  DeleteEducation(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.delete('Educations/' + payload.id, payload)
        .then(response => {
            
          context.commit('DeleteEducation', response.data)             
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