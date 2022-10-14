
const form = {
    title: "Create Type of Assessment",
    qSelects: [],
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
        {label: "Cancel", name: "Cancel"},
        {label: "Create", name: "Create"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
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