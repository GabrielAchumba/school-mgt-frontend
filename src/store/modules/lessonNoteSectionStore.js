const state = {
    lessonNoteSections: [],
    selectedLessonNoteSection: {}
}

const getters = {
    lessonNoteSections(state){
        return state.lessonNoteSections;
    },
    selectedLessonNoteSection(state){
        return state.selectedLessonNoteSection;
    }
} 

const mutations = {
    SetLessonNoteSections(state, payload){
        state.lessonNoteSections = payload
    },
    SetSelectedLessonNoteSection(state, payload){
        state.selectedLessonNoteSection = payload;
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