const state = {
    Logos: [],
    selectedLogo: {}

}

const getters = {
    Logos(state){
        return state.Logos;
    },
    selectedLogo(state){
        return state.selectedLogo;
    }
}

const mutations = {
    SetLogos(state, payload){
        state.Logos = payload;
    },
    SetSelectedLogo(state, payload){
        state.selectedLogo = payload;
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