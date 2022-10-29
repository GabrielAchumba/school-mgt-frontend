const state = {
    Newses: [],
    selectedNews: {}

}

const getters = {
    Newses(state){
        return state.Newses;
    },
    selectedNews(state){
        return state.selectedNews;
    }
}

const mutations = {
    SetNewss(state, payload){
        state.Newses = payload;
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