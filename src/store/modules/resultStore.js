const state = {
    results: [],
    selectedResult: {},
    selectedClassRoomName: "",
    selectedLevelName: "",
    selectedSessionName: "",
    studentPosition: 0,
    overallScore: 0,
    overallScoreMax: 0,
    resultYear: "",
    studentFullName: "",
}

const getters = {
    results(state){
        return state.results;
    },
    selectedResult(state){
        return state.selectedResult;
    },
    selectedClassRoomName(state){
        return state.selectedClassRoomName;
    },
    selectedLevelName(state){
        return state.selectedLevelName;
    },
    selectedSessionName(state){
        return state.selectedSessionName;
    },
    studentPosition(state){
        return state.studentPosition;
    },
    overallScore(state){
        return state.overallScore;
    },
    overallScoreMax(state){
        return state.overallScoreMax;
    },
    resultYear(state){
        return state.resultYear;
    },
    studentFullName(state){
        return state.studentFullName;
    },
} 

const mutations = {
    SetResults(state, payload){
        state.results = payload
    },
    SetSelectedResult(state, payload){
        state.selectedResult = payload;
    },
    SetSelectedClassRoomName(state, payload){
        state.selectedClassRoomName = payload;
    },
    SetSelectedLevelName(state, payload){
        state.selectedLevelName = payload;
    },
    SetSelectedSessionName(state, payload){
        state.selectedSessionName = payload;
    },
    SetStudentPosition(state, payload){
        state.studentPosition = payload;
    },
    SetOverallScore(state, payload){
        state.overallScore = payload;
    },
    SetOverallScoreMax(state, payload){
        state.overallScoreMax = payload;
    },
    SetResultYear(state, payload){
        state.resultYear = payload;
    },
    SetStudentFullName(state, payload){
        state.studentFullName = payload;
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