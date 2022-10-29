const state = {
    Visions: [],
    selectedVision: {}

}

const getters = {
    Visions(state){
        return state.Visions;
    },
    selectedVision(state){
        return state.selectedVision;
    }
}

const mutations = {
    SetVisions(state, payload){
        state.Visions = payload;
    },
    SetSelectedVision(state, payload){
        state.selectedVision = payload;
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