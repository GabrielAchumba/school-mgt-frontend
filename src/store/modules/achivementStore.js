import { $http } from 'boot/axios' 

const state = {

    NewAchievement:{
        statement:"",
        base64String:""
    },
    SelectedAchievement: {},
    Achievements: [],
    AchievementDataCDialog: false,
    AchievementDataUDialog: false,
    base64String:""

  }

  const getters = {
    NewAchievement (state) {
    return state.NewAchievement;
  },
  SelectedAchievement(state){
      return state.SelectedAchievement;
  },
  Achievements (state) {
    return state.Achievements;
  },
  AchievementDataCDialog (state) {
    return state.AchievementDataCDialog;
  },
  AchievementDataUDialog(state){
    return state.AchievementDataUDialog;
  },
  base64String(state){
    return state.base64String;
  }
}

const mutations = {

  ReadAchievements(state, payload){
    state.Achievements = payload
  },
  CreateAchievement(state, payload){
    state.Achievements = payload
    state.AchievementDataCDialog = false;
  },
  UpdateAchievement(state, payload){
    state.Achievements = payload
    state.AchievementDataUDialog = false;
  },
  DeleteAchievement(){
    state.Achievements = payload
  },
  ShowAchievementDataCDialog(state){
    state.AchievementDataCDialog = true;
  },
  CancelAchievementDataCDialog(state){
    state.AchievementDataCDialog = false;
  },
  ShowAchievementDataUDialog(state){
    state.AchievementDataUDialog = true;
  },
  CancelAchievementDataUDialog(state){
    state.AchievementDataUDialog = false;
  },
}

const actions = {
    ReadAchievements(context, payload)
    {
      return new Promise((resolve, reject) => {
         $http.get('Achievements/GetAchievementsByUserId/' + payload.userId)
          .then(response => {
              
            context.commit('ReadAchievements', response.data)             
              resolve(response)
              
          })
          .catch(error => {   
            reject(error)
          })
      })
    },
  CreateAchievement(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.post('Achievements', payload)
        .then(response => {
            
          context.commit('CreateAchievement', response.data)             
            resolve(response)
            
        })
        .catch(error => {   
          reject(error)
        })
    })
  },
  UpdateAchievement(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.put('Achievements/' + payload.id, payload)
        .then(response => {
            
          context.commit('UpdateAchievement', response.data)             
            resolve(response)
            
        })
        .catch(error => {  
          reject(error)
        })
    })
  },
  DeleteAchievement(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.delete('Achievements/' + payload.id, payload)
        .then(response => {
            
          context.commit('DeleteAchievement', response.data)             
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