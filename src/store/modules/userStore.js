const state = {
    users: [],
    selectedUser: {},
    teachers: [],
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
    }
} 

const mutations = {
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