
const form = {
    title: "Create Type of Assessment",
    qSelects: [
         { label: "Subject *", value: "", type: "text", 
         list: [], actionName: "subjectAction", visible: true },
    ],
    qInputs: [
        { label: "Type of Assessment", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Overall Score (%)", name: "", type: "text",
        Template: {
            sn: 1,
            iconName: "",
            visible: false,
        }},
    ],
    qBtns: [
        {label: "Cancel", name: "Cancel", icon: "close"},
        {label: "Create", name: "Create", icon: "add"},
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
            this.qSelects[i].list = [];
            this.qSelects[i].visible = true;
        }
    },
}

const dialogs = [
    { title: "Create Assessment", isVisible: false, message: "Do you want to create an Assessment",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Assessment created successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }