const state = {
    cAs: [],
    selectedCA: {}
}

const getters = {
     cAs(state){
        return state.cAs;
    },
    selectedCA(state){
        return state.selectedCA;
    }
} 

const mutations = {
    SetCAs(state, payload){
        state.cAs = payload
    },
    SetSelectedCA(state, payload){
        state.selectedCA = payload;
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