const state = {
    Missions: [],
    selectedMission: {}

}

const getters = {
    Missions(state){
        return state.Missions;
    },
    selectedMission(state){
        return state.selectedMission;
    }
}

const mutations = {
    SetMissions(state, payload){
        state.Missions = payload;
    },
    SetSelectedMission(state, payload){
        state.selectedMission = payload;
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