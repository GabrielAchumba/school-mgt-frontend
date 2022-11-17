const state = {
    levels: [],
    selectedLevel: {}
}

const getters = {
    levels(state){
        return state.levels;
    },
    selectedLevel(state){
        return state.selectedLevel;
    }
} 

const mutations = {
    SetLevels(state, payload){
        state.levels = payload
    },
    SetSelectedLevel(state, payload){
        state.selectedLevel = payload;
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