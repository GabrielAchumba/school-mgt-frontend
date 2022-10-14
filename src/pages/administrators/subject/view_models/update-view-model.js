const form = {
    title: "Update Subject",
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
        {label: "Update", name: "Update"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const dialogs = [
    { title: "Update Subject", isVisible: false, message: "Do you want to update a Subject",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Subject updated successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }