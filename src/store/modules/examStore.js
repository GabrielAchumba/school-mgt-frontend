const state = {
    exams: [],
    selectedExam: {},
    answers: [],
    selectedAnswer: {},
    questions: [],
}

const getters = {
    exams(state){
        return state.exams;
    },
    selectedExam(state){
        return state.selectedExam;
    },
    answers(state){
        return state.answers;
    },
    selectedAnswer(state){
        return state.selectedAnswer;
    },
    questions(state){
        return state.questions;
    }
} 

const mutations = {
    SetExams(state, payload){
        state.exams = payload
    },
    SetSelectedExam(state, payload){
        state.selectedExam = payload;
    },
    SetAnswers(state, payload){
        state.answers = payload
    },
    SetSelectedAnswer(state, payload){
        state.selectedAnswer = payload;
    },
    SetQuestions(state, payload){
        state.questions = payload;
    },
}

const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}