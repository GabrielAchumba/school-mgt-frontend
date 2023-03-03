import { $http } from 'boot/axios' 
import { cyclesController } from './backendRoutes';

const state = {
    Cycles:[],
    DescendantDTO: [],
    fAQs: [],
    DirectDownliner: {},
    isParentUser: false,
  }

  const getters = {
    isParentUser(state){
      return state.isParentUser;
    },
    DirectDownliner(state){
      return state.DirectDownliner;
    },
    Cycles(state){
        return state.Cycles;
    },
    DescendantDTO(state){
        return state.DescendantDTO;
    },
    fAQs(state){
      return state.fAQs;
    }
}

const mutations = {

    UpdateDirectDownliner(state, payload){
      state.DirectDownliner = payload;
    },
    UpdateIsParentUser(state, payload){
      state.isParentUser = payload;
    },
    GetCyclesWithLevelsByUserId(state, payload){
    state.Cycles = payload;
  },
  GetDesendantsPerLevel(state, payload){
    state.DescendantDTO = payload == null || payload == undefined ? [] : payload;
  },
  GetPishonLevels(state, payload){
    console.log("GetPishonLevels")
    state.Cycles = payload;
  }

}

const actions = {

GetCyclesWithLevelsByUserId(context)
  {
    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
       $http.get(`${cyclesController}/getcycleswithlevelsbyuserid`)
        .then(response => {
             
            resolve(response)
            
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  GetROIs(context)
  {
    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
       $http.get(`${cyclesController}/getrois`)
        .then(response => {
             
            resolve(response)
            
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  GetPishonLevels(context)
  {
    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
      console.log("seen")
       $http.get(`${cyclesController}/GetPishonLevels`)
        .then(response => {
            
          context.commit('GetPishonLevels', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetCyclesWithLevelsByUserId error")
          reject(error)
        })
    })
  },
  GetDesendantsPerLevel(context, url)
  {
    var token = sessionStorage.getItem("token") 
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise((resolve, reject) => {
       $http.get(url)
        .then(response => {            
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