const state = {
    exams: [],
    selectedExam: {},
    answers: [],
    selectedAnswer: {},
    questions: [],
    score: 0, 
    totalNumber:0,
    subjectName: "",
    levelName: "",
    year: 0,
    percentage: 0,
}

const getters = {
    percentage(state){
        return state.percentage;
    },
    subjectName(state){
        return state.subjectName;
    },
    levelName(state){
        return state.levelName;
    },
    year(state){
        return state.year;
    },
    score(state){
        return state.score;
    },
    totalNumber(state){
        return state.totalNumber;
    },
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
    setPercentage(state, payload){
        state.percentage = payload;
    },
    setScore(state, payload){
        state.score = payload
    },
    setTotalNumber(state, payload){
        state.totalNumber = payload
    },
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
    setSubjectName(state, payload){
        state.subjectName = payload;
    },
    setLevelName(state, payload){
        state.levelName = payload
    },
    setYear(state, payload){
        state.year = payload
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