const state = {
    exams: [],
    selectedExam: {}
}

const getters = {
    exams(state){
        return state.exams;
    },
    selectedExam(state){
        return state.selectedExam;
    }
} 

const mutations = {
    SetExams(state, payload){
        state.exams = payload
    },
    SetSelectedExam(state, payload){
        state.selectedExam = payload;
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