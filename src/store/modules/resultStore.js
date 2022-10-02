const state = {
    results: [],
    selectedResult: {}
}

const getters = {
    results(state){
        return state.results;
    },
    selectedResult(state){
        return state.selectedResult;
    }
} 

const mutations = {
    SetResults(state, payload){
        state.results = payload
    },
    SetSelectedResult(state, payload){
        state.selectedResult = payload;
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