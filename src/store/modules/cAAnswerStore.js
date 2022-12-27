const state = {
    cAAnswers: [],
    selectedCAAnswer: {}
}

const getters = {
     cAAnswers(state){
        return state.cAAnswers;
    },
    selectedCAAnswer(state){
        return state.selectedCAAnswer;
    }
} 

const mutations = {
    SetCAAnswers(state, payload){
        state.cAAnswers = payload
    },
    SetSelectedCAAnswer(state, payload){
        state.selectedCAAnswer = payload;
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