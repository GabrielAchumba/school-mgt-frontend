const state = {
    isPaymentSuccessful: false,
    paymentResponse: "",
    totalAmount: 0,
    selectedSubscriptionPlan: {},
    totalAmountTitle: "",
    totalAmountDescription: "",
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
    },
    selectedSubscriptionPlan(state){
        return state.selectedSubscriptionPlan;
    },
    totalAmountTitle(state){
        return state.totalAmountTitle;
    },
    totalAmountDescription(state){
        return state.totalAmountDescription;
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
    },
    SetSelectedSubscriptionPlan(state, payload){
        state.selectedSubscriptionPlan = payload;
    },
    SetTotalAmountTitle(state, payload){
        state.totalAmountTitle = payload;
    },
    SetTotalAmountDescription(state, payload){
        state.totalAmountDescription = payload;
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