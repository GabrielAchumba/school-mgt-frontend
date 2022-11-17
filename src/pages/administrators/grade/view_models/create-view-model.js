
const form = {
    title: "Create Grade",
    qSelects: [],
    qInputs: [
        { label: "Type of Grade", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Score From *", name: "", type: "number",
        Template: {
            sn: 1,
            iconName: "",
            visible: false,
        }},
        { label: "Score To *", name: "", type: "number",
        Template: {
            sn: 2,
            iconName: "",
            visible: false,
        }},
        { label: "Point *", name: "", type: "number",
        Template: {
            sn: 3,
            iconName: "",
            visible: false,
        }}
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
    }
}

const dialogs = [
    { title: "Create Grade", isVisible: false, message: "Do you want to create a grade",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Grade created successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }