const state = {
    Contacts: [],
    selectedContact: {},
    officialEmail: "",
    officialPhoneNumber1: "",

}

const getters = {
    Contacts(state){
        return state.Contacts;
    },
    selectedContact(state){
        return state.selectedContact;
    },
    officialEmail(state){
        return state.officialEmail;
    },
    officialPhoneNumber1(state){
        return state.officialPhoneNumber1;
    },
}

const mutations = {
    SetContacts(state, payload){
        state.Contacts = payload;
    },
    SetSelectedContact(state, payload){
        state.selectedContact = payload;
    },
    SetOfficialEmail(state, payload){
        state.officialEmail = payload;
    },
    SetOfficialPhoneNumber1(state, payload){
        state.officialPhoneNumber1 = payload;
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