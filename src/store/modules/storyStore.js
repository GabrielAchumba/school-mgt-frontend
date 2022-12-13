const state = {
    stories: [],
    selectedStory: {}

}

const getters = {
    stories(state){
        return state.stories;
    },
    selectedStory(state){
        return state.selectedStory;
    }
}

const mutations = {
    SetStories(state, payload){
        state.stories = payload;
    },
    SetSelectedStory(state, payload){
        state.selectedStory = payload;
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