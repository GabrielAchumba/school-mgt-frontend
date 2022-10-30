const state = {
    schools: [],
    selectedSchool: { schoolName: ""},
    userSchool: {},
}

const getters = {
    schools(state){
        return state.schools;
    },
    selectedSchool(state){
        return state.selectedSchool;
    },
    userSchool(state){
        return state.userSchool;
    }
} 

const mutations = {
    SetSchools(state, payload){
        state.schools = payload
    },
    SetSelectedSchool(state, payload){
        state.selectedSchool = payload;
    },
    SetUserSchool(state, payload){
        state.userSchool = payload;
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