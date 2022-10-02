const state = {
    staffs: [],
    selectedStaff: {}
}

const getters = {
    staffs(state){
        return state.staffs;
    },
    selectedStaff(state){
        return state.selectedStaff;
    }
} 

const mutations = {
    SetStaffs(state, payload){
        state.staffs = payload
    },
    SetSelectedStaff(state, payload){
        state.selectedStaff = payload;
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