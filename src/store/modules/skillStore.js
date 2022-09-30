import { $http } from 'boot/axios' 

const state = {

    NewSkill:{
        statement:"",
        base64String:""
    },
    SelectedSkill: {},
    Skills: [],
    SkillDataCDialog: false,
    SkillDataUDialog: false,
    base64String:""

  }

  const getters = {
    NewSkill (state) {
    return state.NewSkill;
  },
  SelectedSkill(state){
      return state.SelectedSkill;
  },
  Skills (state) {
    return state.Skills;
  },
  SkillDataCDialog (state) {
    return state.SkillDataCDialog;
  },
  SkillDataUDialog(state){
    return state.SkillDataUDialog;
  },
  base64String(state){
    return state.base64String;
  }
}

const mutations = {

  ReadSkills(state, payload){
    state.Skills = payload
  },
  CreateSkill(state, payload){
    state.Skills = payload
    state.SkillDataCDialog = false;
  },
  UpdateSkill(state, payload){
    state.Skills = payload
    state.SkillDataUDialog = false;
  },
  DeleteSkill(){
    state.Skills = payload
  },
  ShowSkillDataCDialog(state){
    state.SkillDataCDialog = true;
  },
  CancelSkillDataCDialog(state){
    state.SkillDataCDialog = false;
  },
  ShowSkillDataUDialog(state){
    state.SkillDataUDialog = true;
  },
  CancelSkillDataUDialog(state){
    state.SkillDataUDialog = false;
  },
}

const actions = {
    ReadSkills(context, payload)
    {
      return new Promise((resolve, reject) => {
         $http.get('Skills/GetSkillsByUserId/' + payload.userId)
          .then(response => {
              
            context.commit('ReadSkills', response.data)             
              resolve(response)
              
          })
          .catch(error => {   
            reject(error)
          })
      })
    },
  CreateSkill(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.post('Skills', payload)
        .then(response => {
            
          context.commit('CreateSkill', response.data)             
            resolve(response)
            
        })
        .catch(error => {   
          reject(error)
        })
    })
  },
  UpdateSkill(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.put('Skills/' + payload.id, payload)
        .then(response => {
            
          context.commit('UpdateSkill', response.data)             
            resolve(response)
            
        })
        .catch(error => {  
          reject(error)
        })
    })
  },
  DeleteSkill(context, payload)
  {
    return new Promise((resolve, reject) => {
       $http.delete('Skills/' + payload.id, payload)
        .then(response => {
            
          context.commit('DeleteSkill', response.data)             
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