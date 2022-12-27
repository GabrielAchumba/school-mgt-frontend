const state = {
    lessonNotes: [],
    selectedLessonNote: {}
}

const getters = {
    lessonNotes(state){
        return state.lessonNotes;
    },
    selectedLessonNote(state){
        return state.selectedLessonNote;
    }
} 

const mutations = {
    SetLessonNotes(state, payload){
        state.lessonNotes = payload
    },
    SetSelectedLessonNote(state, payload){
        state.selectedLessonNote = payload;
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