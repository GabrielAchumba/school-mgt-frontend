const state = {
    isPaymentSuccessful: false,
    paymentResponse: "",
    totalAmount: 0,
    selectedSubscriptionPlan: {},
    totalAmountTitle: "",
    totalAmountDescription: "",
    resultSubscription: {variable: "", value: "", amount: 0},
    examsAndQuizSubscription: {variable: "", value: "", amount: 0},
    fileManagementSubscription: {variable: "", value: "", amount: 0},
    appCustomizationSubscription: {variable: "", value: "", amount: 0},
    allSubscriptions: {variable: "", value: "", amount: 0},
    paymentStatus: {variable: "Payment Status", value: "NOT PAID"},
    paymentMessage: {variable: "Message", value: "Payment In Progress"},
    receiptNo: {variable: "Receipt Number", value: ""},
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
    },
    resultSubscription(state){
        return state.resultSubscription;
    },
    examsAndQuizSubscription(state){
        return state.examsAndQuizSubscription;
    },
    fileManagementSubscription(state){
        return state.fileManagementSubscription;
    },
    appCustomizationSubscription(state){
        return state.appCustomizationSubscription;
    },
    allSubscriptions(state){
        return state.allSubscriptions;
    },
    paymentStatus(state){
        return state.paymentStatus;
    },
    paymentMessage(state){
        return state.paymentMessage;
    },
    receiptNo(state){
        return state.receiptNo;
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
    },
    SetResultSubscription(state, payload){
        state.resultSubscription = payload;
    },
    SetExamsAndQuizSubscription(state, payload){
        state.examsAndQuizSubscription = payload;
    },
    SetFileManagementSubscription(state, payload){
        state.fileManagementSubscription = payload;
    },
    SetAppCustomizationSubscription(state, payload){
        state.appCustomizationSubscription = payload;
    },
    SetAllSubscriptions(state, payload){
        state.allSubscriptions = payload;
    },
    SetPaymentStatus(state, payload){
        state.paymentStatus = payload;
    },
    SetPaymentMessage(state, payload){
        state.paymentMessage = payload;
    },
    SetReceiptNo(state, payload){
        state.receiptNo = payload;
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