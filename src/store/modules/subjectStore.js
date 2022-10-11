const state = {
    subjects: [],
    selectedSubject: {},
}

const getters = {
    subjects(state){
        return state.subjects;
    },
    selectedSubject(state){
        return state.selectedSubject;
    }
} 

const mutations = {
    SetSubjects(state, payload){
        state.subjects = payload
    },
    SetSelectedSubject(state, payload){
        state.selectedSubject = payload;
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