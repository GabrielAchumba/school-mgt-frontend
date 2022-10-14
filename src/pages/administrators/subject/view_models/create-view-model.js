const form = {
    title: "Create Subject",
    qSelects: [],
    qInputs: [
        { label: "Type of Subject", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }}
    ],
    qBtns: [
        {label: "Cancel", name: "Cancel"},
        {label: "Create", name: "Create"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const  dialogs = [
    { title: "Create Subject", isVisible: false, message: "Do you want to create a Subject",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Subject created successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }