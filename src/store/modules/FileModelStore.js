const state = {
    fileModels: [],
    selectedFileModel: {}

}

const getters = {
    fileModels(state){
        return state.fileModels;
    },
    selectedFileModel(state){
        return state.selectedFileModel;
    }
}

const mutations = {
    SetFileModels(state, payload){
        state.fileModels = payload;
    },
    SetSelectedFileModel(state, payload){
        state.selectedFileModel = payload;
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