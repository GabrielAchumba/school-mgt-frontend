const state = {
    CoreValues: [],
    selectedCoreValue: {}

}

const getters = {
    CoreValues(state){
        return state.CoreValues;
    },
    selectedCoreValue(state){
        return state.selectedCoreValue;
    }
}

const mutations = {
    SetCoreValues(state, payload){
        state.CoreValues = payload;
    },
    SetSelectedCoreValue(state, payload){
        state.selectedCoreValue = payload;
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