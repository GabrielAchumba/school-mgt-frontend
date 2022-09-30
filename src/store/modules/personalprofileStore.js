import { $http } from 'boot/axios' 

const state = {

    NewPersonalProfile:{
        statement:"",
        base64String:""
    },
    SelectedPersonalProfile: {},
    PersonalProfiles: [],
    PersonalProfileDataCDialog: false,
    PersonalProfileDataUDialog: false,
    base64String:""

  }

  const getters = {
    NewPersonalProfile (state) {
    return state.NewPersonalProfile;
  },
  SelectedPersonalProfile(state){
      return state.SelectedPersonalProfile;
  },
  PersonalProfiles (state) {
    return state.PersonalProfiles;
  },
  PersonalProfileDataCDialog (state) {
    return state.PersonalProfileDataCDialog;
  },
  PersonalProfileDataUDialog(state){
    return state.PersonalProfileDataUDialog;
  },
  base64String(state){
    return state.base64String;
  }
}

const mutations = {

  ReadPersonalProfiles(state, payload){
    state.PersonalProfiles = payload
  },
  CreatePersonalProfile(state, payload){
    state.PersonalProfiles = payload
    state.PersonalProfileDataCDialog = false;
  },
  UpdatePersonalProfile(state, payload){
    state.PersonalProfiles = payload
    state.PersonalProfileDataUDialog = false;
  },
  DeletePersonalProfile(){
    state.PersonalProfiles = payload
  },
  ShowPersonalProfileDataCDialog(state){
    state.PersonalProfileDataCDialog = true;
  },
  CancelPersonalProfileDataCDialog(state){
    state.PersonalProfileDataCDialog = false;
  },
  ShowPersonalProfileDataUDialog(state){
    state.PersonalProfileDataUDialog = true;
  },
  CancelPersonalProfileDataUDialog(state){
    state.PersonalProfileDataUDialog = false;
  },
}

const actions = {
    ReadPersonalProfiles(context, payload)
    {
      return new Promise((resolve, reject) => {
         $http.get('PersonalProfiles/GetPersonalProfilesByUserId/' + payload.userId)
          .then(response => {
              
            context.commit('ReadPersonalProfiles', response.data)             
              resolve(response)
              
          })
          .catch(error => {   
            reject(error)
          })
      })
    },
  CreatePersonalProfile(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.post('PersonalProfiles', payload)
        .then(response => {
            
          context.commit('CreatePersonalProfile', response.data)             
            resolve(response)
            
        })
        .catch(error => {   
          reject(error)
        })
    })
  },
  UpdatePersonalProfile(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.put('PersonalProfiles/' + payload.id, payload)
        .then(response => {
            
          context.commit('UpdatePersonalProfile', response.data)             
            resolve(response)
            
        })
        .catch(error => {  
          reject(error)
        })
    })
  },
  DeletePersonalProfile(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.delete('PersonalProfiles/' + payload.id, payload)
        .then(response => {
            
          context.commit('DeletePersonalProfile', response.data)             
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