
const form = {
    title: "Create ClassRoom",
    qSelects: [
        { label: "Level", value: "", type: "text", list: [], actionName: "level", visible: true },
    ],
    qInputs: [
        { label: "Type of Class Room", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }}
    ],
    qBtns: [
        {label: "Cancel", name: "Cancel", icon: "close", btnDisabled: false},
        {label: "Create", name: "Create", icon: "add", btnDisabled: false},
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
    { title: "Create ClassRoom", isVisible: false, message: "Do you want to create a ClassRoom",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "ClassRoom created successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }