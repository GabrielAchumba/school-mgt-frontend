
const form = {
    title: "Create Contact",
    qSelects: [],
    qInputs: [
        { label: "Title", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Description", name: "", type: "textarea",
        Template: {
            sn: 1,
            iconName: "",
            visible: false,
        }},
        { label: "Official Email Address", name: "", type: "text",
        Template: {
            sn: 2,
            iconName: "",
            visible: false,
        }},
        { label: "Official First Phone Number", name: "", type: "text",
        Template: {
            sn: 3,
            iconName: "",
            visible: false,
        }},

        { label: "Official Second Phone Number", name: "", type: "text",
        Template: {
            sn: 4,
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
    }
}

const dialogs = [
    { title: "Create Contact", isVisible: false, message: "Do you want to create contact",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Contact created successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }