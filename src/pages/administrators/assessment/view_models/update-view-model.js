
const form = {
    title: "Update Type of Assessment",
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
        }}
    ],
    qBtns: [
        {label: "Cancel", name: "Cancel", icon: "close"},
        {label: "Update", name: "Update", icon: "update"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const dialogs = [
    { title: "Update Assessment", isVisible: false, message: "Do you want to update an Assessment",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Assessment updated successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }