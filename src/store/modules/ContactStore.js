const state = {
    Contacts: [],
    selectedContact: {}

}

const getters = {
    Contacts(state){
        return state.Contacts;
    },
    selectedContact(state){
        return state.selectedContact;
    }
}

const mutations = {
    SetContacts(state, payload){
        state.Contacts = payload;
    },
    SetSelectedContact(state, payload){
        state.selectedContact = payload;
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