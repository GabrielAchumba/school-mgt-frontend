const state = {
    AboutUses: [],
    selectedAboutUs: {}

}

const getters = {
    AboutUses(state){
        return state.AboutUses;
    },
    selectedAboutUs(state){
        return state.selectedAboutUs;
    }
}

const mutations = {
    SetAboutUses(state, payload){
        state.AboutUses = payload;
    },
    SetSelectedAboutUs(state, payload){
        state.selectedAboutUs = payload;
        console.log("selectedAboutUs: ", state.selectedAboutUs)
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