const form = {
    title: "Create User",
    qSelects: [
         { label: "Mode of Payment *", value: "", type: "text", 
         list: [{
             id:"bank",
             type: "Bank",
             value: "Bank",
             label: "Bank"
         },{
            id:"card",
            type: "Card",
            value: "Card",
            label: "Card"
        }], actionName: "modeOfPaymentAction", visible: true },
        { label: "Bank *", value: "", type: "text", 
        list: [], actionName: "selectedBankAction", visible: true },
    ],
    qInputs: [
        { label: "Bank Account Name *", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Bank Account Number *", name: "", type: "text",
        Template: {
            sn: 1,
            iconName: "",
            visible: false,
        }},
    ],
    qBtns: [
        {label: "Cancel", name: "Cancel", icon: "close", btnDisabled: false},
        {label: "Pay", name: "Pay", icon: "pay", btnDisabled: false},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
    clearQInputs(){
        var i = 0;
        for (i = 0; i < this.qInputs.length; i++){
            this.qInputs[i].name = "";
        }
    },
    clearQSelects(){
        var i = 0;
        for (i = 0; i < this.qSelects.length; i++){
            this.qSelects[i].value = "";
            this.qSelects[i].visible = true;
            if(i != 0){
                this.qSelects[i].list = [];
            }
        }
    },
}

const dialogs = [
    { title: "Pay", isVisible: false, message: "Do you want make payment",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Payment made successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }