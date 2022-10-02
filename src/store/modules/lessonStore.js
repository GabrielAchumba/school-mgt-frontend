const state = {
    lessons: [],
    selectedLesson: {}
}

const getters = {
    lessons(state){
        return state.lessons;
    },
    selectedLesson(state){
        return state.selectedLesson;
    }
} 

const mutations = {
    SetLessons(state, payload){
        state.lessons = payload
    },
    SetSelectedLesson(state, payload){
        state.selectedLesson = payload;
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