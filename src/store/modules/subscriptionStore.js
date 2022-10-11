const state = {
    isPaymentSuccessful: false,
    paymentResponse: "",
    totalAmount: 0
}

const getters = {
    isPaymentSuccessful(state){
        return state.isPaymentSuccessful;
    },
    paymentResponse(state){
        return state.paymentResponse;
    },
    totalAmount(state){
        return state.totalAmount;
    }
}

const mutations = {
    SetIsPaymentSuccessful(state, payload){
        state.isPaymentSuccessful = payload;
    },
    SetPaymentResponse(state, payload){
        state.paymentResponse = payload;
    },
    SetTotalAmount(state, payload){
        state.totalAmount = payload;
    }

}

const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}