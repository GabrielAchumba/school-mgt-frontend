const state = {
    grades: [],
    selectedGrade: {}
}

const getters = {
    grades(state){
        return state.grades;
    },
    selectedGrade(state){
        return state.selectedGrade;
    }
} 

const mutations = {
    SetGrades(state, payload){
        state.grades = payload
    },
    SetSelectedGrade(state, payload){
        state.selectedGrade = payload;
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