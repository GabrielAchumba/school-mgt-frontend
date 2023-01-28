const state = {
    users: [],
    selectedUser: {},
    teachers: [],
    unComfirmedUsers: [],
}

const getters = {
    users(state){
        return state.Users;
    },
    selectedUser(state){
        return state.selectedUser;
    },
    teachers(state){
        return state.teachers;
    },
    unComfirmedUsers(state){
        return state.unComfirmedUsers;
    },
} 

const mutations = {
    setUnComfirmedUsers(state, payload){
        state.unComfirmedUsers = payload
    },
    SetUsers(state, payload){
        state.users = payload
    },
    SetSelectedUser(state, payload){
        state.selectedUser = payload;
    },
    SetTeachers(state, payload){
        state.teachers = payload;
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