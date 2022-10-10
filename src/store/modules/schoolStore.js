const state = {
    schools: [],
    selectedSchool: {}
}

const getters = {
    schools(state){
        return state.schools;
    },
    selectedSchool(state){
        return state.selectedSchool;
    }
} 

const mutations = {
    SetSchools(state, payload){
        state.schools = payload
    },
    SetSelectedSchool(state, payload){
        state.selectedSchool = payload;
    }
}

const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}