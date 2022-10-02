const state = {
    assessments: [],
    selectedAssessment: {}
}

const getters = {
    assessments(state){
        return state.assessments;
    },
    selectedAssessment(state){
        return state.selectedAssessment;
    }
} 

const mutations = {
    SetAssessments(state, payload){
        state.assessments = payload
    },
    SetSelectedAssessment(state, payload){
        state.selectedAssessment = payload;
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