const state = {
    students: [],
    selectedStudent: {}
}

const getters = {
    students(state){
        return state.students;
    },
    selectedStudent(state){
        return state.selectedStudent;
    }
} 

const mutations = {
    SetStudents(state, payload){
        state.students = payload
    },
    SetSelectedStudent(state, payload){
        state.selectedStudent = payload;
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