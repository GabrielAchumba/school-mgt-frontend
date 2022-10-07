const state = {
    cardItems: [],
}

const getters = {
    cardItems(state){
        return state.cardItems;
    }
}

const mutations = {
    setCardItems(state, payload){
        state.cardItems = payload;
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}