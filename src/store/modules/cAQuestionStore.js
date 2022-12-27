const state = {
    cAQuestions: [],
    selectedCAQuestion: {}
}

const getters = {
     cAQuestions(state){
        return state.cAQuestions;
    },
    selectedCAQuestion(state){
        return state.selectedCAQuestion;
    }
} 

const mutations = {
    SetCAQuestions(state, payload){
        state.cAQuestions = payload
    },
    SetSelectedCAQuestion(state, payload){
        state.selectedCAQuestion = payload;
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