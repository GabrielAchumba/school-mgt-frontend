const state = {
    classRooms: [],
    selectedClassRoom: {}
}

const getters = {
    classRooms(state){
        return state.classRooms;
    },
    selectedClassRoom(state){
        return state.selectedClassRoom;
    }
} 

const mutations = {
    SetClassRooms(state, payload){
        state.classRooms = payload
    },
    SetSelectedClassRoom(state, payload){
        state.selectedClassRoom = payload;
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