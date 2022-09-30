import { $http } from 'boot/axios' 

const state = {
    PersonalDataDTO:{
      title:"",
      firstName:"",
      middleName:"",
      lastName:"",
      gender:"",
      date: '2019/03/01',
      userName:"",
      password:""
    },
    BioDataDTO:{
      bloodGroup:"",
      genotype:"",
      maritalStatus:"",
      lGAOfOrigin:"",
      stateOfOrigin:"",
      country:"",
      base64String:""
    },
    ContactDTO:{
      phoneNumber:"",
      email:"",
      address:"",
      residentialCity:"",
      residentialState:""
    },
    NextOfKinDTO:{
      nOKNames:"",
      nOKAddress:"",
      nOKPhoneNumber:"",
      nOKRelationship:""
    },
    PersonalDataDialog: false,
    BioDataDialog: false,
    ContactDataDialog: false,
    NextOfKinDataDialog: false,
    genders: ["Male", "Female"],
    base64String:""

  }

  const getters = {
    PersonalDataDTO (state) {
    return state.PersonalDataDTO;
  },
  BioDataDTO (state) {
    return state.BioDataDTO;
  },
  ContactDTO (state) {
    return state.ContactDTO;
  },
  NextOfKinDTO (state) {
    return state.NextOfKinDTO;
  },
  PersonalDataDialog (state) {
    return state.PersonalDataDialog;
  },
  BioDataDialog (state) {
    return state.BioDataDialog;
  },
  ContactDataDialog (state) {
    return state.ContactDataDialog;
  },
  NextOfKinDataDialog (state) {
    return state.NextOfKinDataDialog;
  },
  genders (state) {
    return state.genders;
  },
  base64String(state){
    return state.base64String;
  }
}

const mutations = {

  CreatePersonalDataDTO(state, payload){
        state.PersonalDataDTO = payload
        state.PersonalDataDialog = false;
        state.ContactDataDialog = true;
  },
  UpdateContactDTO(state, payload){
    state.ContactDTO = payload
    state.ContactDataDialog = false;
    state.BioDataDialog = true;
  },
  UpdateBioData(state, payload){
    state.BioDataDTO = payload
    state.BioDataDialog = false;
    state.NextOfKinDataDialog =  true;
  },
  UpdateNextOfKinDTO(state, payload){
    state.NextOfKinDTO = payload
    state.NextOfKinDataDialog = false;
  },
  ShowPersonalDataDialog(state){
    state.PersonalDataDialog = true;
  },
  CancelPersonalDataDialog(state){
    state.PersonalDataDialog = false;
  },
  ShowContactDataDialog(state){
    state.ContactDataDialog = true;
  },
  CancelContactDataDialog(state){
    state.ContactDataDialog = false;
  },
  ShowBioDataDialog(state){
    state.BioDataDialog = true;
  },
  CancelBioDataDialog(state){
    state.BioDataDialog = false;
  },
  ShowNextOfKinDataDialog(state){
    state.NextOfKinDataDialog = true;
  },
  CancelNextOfKinDataDialog(state){
    state.NextOfKinDataDialog = false;
  }
}

const actions = {
  CreatePersonalDataDTO(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.post('Clients/CreatePersonalDataDTO', payload)
        .then(response => {
            
          context.commit('CreatePersonalDataDTO', response.data)             
            resolve(response)
            
        })
        .catch(error => {   
          reject(error)
        })
    })
  },
  UpdateContactDTO(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.put('Clients/UpdateContactDTO/' + payload.id, payload)
        .then(response => {
            
          context.commit('UpdateContactDTO', response.data)             
            resolve(response)
            
        })
        .catch(error => {  
          reject(error)
        })
    })
  },
  UpdateBioData(context, payload)
  {
    return new Promise((resolve, reject) => {
      console.log(payload)
       $http.put('Clients/UpdateBioData/' + payload.id, payload)
        .then(response => {
            
          context.commit('UpdateBioData', response.data)             
            resolve(response)
            
        })
        .catch(error => {  
          reject(error)
        })
    })
  },
  UpdateNextOfKinDTO(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.put('Clients/UpdateNextOfKinDTO/' + payload.id, payload)
        .then(response => {
            
          context.commit('UpdateNextOfKinDTO', response.data)             
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