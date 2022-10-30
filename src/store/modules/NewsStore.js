const state = {
    newses: [],
    selectedNews: {}

}

const getters = {
    newses(state){
        return state.newses;
    },
    selectedNews(state){
        return state.selectedNews;
    }
}

const mutations = {
    SetNewses(state, payload){
        state.newses = payload;
    },
    SetSelectedNews(state, payload){
        state.selectedNews = payload;
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