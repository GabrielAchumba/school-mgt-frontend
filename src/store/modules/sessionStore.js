const state = {
    sessions: [],
    selectedSession: {}
}

const getters = {
    sessions(state){
        return state.sessions;
    },
    selectedSession(state){
        return state.selectedSession;
    }
} 

const mutations = {
    SetSessions(state, payload){
        state.sessions = payload
    },
    SetSelectedSession(state, payload){
        state.selectedSession = payload;
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