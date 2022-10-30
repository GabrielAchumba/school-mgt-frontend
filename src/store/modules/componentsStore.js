const state = {
    cardItems: [],
    tableRow: {},
}

const getters = {
    cardItems(state){
        return state.cardItems;
    },
    tableRow(state){
        return state.tableRow;
    }
}

const mutations = {
    setCardItems(state, payload){
        state.cardItems = payload;
    },
    setTableRow(state, payload){
        state.tableRow = payload;
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