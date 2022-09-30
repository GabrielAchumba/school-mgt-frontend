import { $http } from 'boot/axios' 

const state = {

    NewHobby:{
        statement:"",
        base64String:""
    },
    SelectedHobby: {},
    Hobbies: [],
    HobbyDataCDialog: false,
    HobbyDataUDialog: false,
    base64String:""

  }

  const getters = {
    NewHobby (state) {
    return state.NewHobby;
  },
  SelectedHobby(state){
      return state.SelectedHobby;
  },
  Hobbies (state) {
    return state.Hobbies;
  },
  HobbyDataCDialog (state) {
    return state.HobbyDataCDialog;
  },
  HobbyDataUDialog(state){
    return state.HobbyDataUDialog;
  },
  base64String(state){
    return state.base64String;
  }
}

const mutations = {

  ReadHobbies(state, payload){
    state.Hobbies = payload
  },
  CreateHobby(state, payload){
    state.Hobbies = payload
    state.HobbyDataCDialog = false;
  },
  UpdateHobby(state, payload){
    state.Hobbies = payload
    state.HobbyDataUDialog = false;
  },
  DeleteHobby(){
    state.Hobbies = payload
  },
  ShowHobbyDataCDialog(state){
    state.HobbyDataCDialog = true;
  },
  CancelHobbyDataCDialog(state){
    state.HobbyDataCDialog = false;
  },
  ShowHobbyDataUDialog(state){
    state.HobbyDataUDialog = true;
  },
  CancelHobbyDataUDialog(state){
    state.HobbyDataUDialog = false;
  },
}

const actions = {
    ReadHobbies(context, payload)
    {
      return new Promise((resolve, reject) => {
         $http.get('Hobbies/GetHobbiesByUserId/' + payload.userId)
          .then(response => {
              
            context.commit('ReadHobbies', response.data)             
              resolve(response)
              
          })
          .catch(error => {   
            reject(error)
          })
      })
    },
  CreateHobby(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.post('Hobbies', payload)
        .then(response => {
            
          context.commit('CreateHobby', response.data)             
            resolve(response)
            
        })
        .catch(error => {   
          reject(error)
        })
    })
  },
  UpdateHobby(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.put('Hobbies/' + payload.id, payload)
        .then(response => {
            
          context.commit('UpdateHobby', response.data)             
            resolve(response)
            
        })
        .catch(error => {  
          reject(error)
        })
    })
  },
  DeleteHobby(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.delete('Hobbies/' + payload.id, payload)
        .then(response => {
            
          context.commit('DeleteHobby', response.data)             
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