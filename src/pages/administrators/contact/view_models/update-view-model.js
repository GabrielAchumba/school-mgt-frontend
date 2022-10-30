
const form = {
    title: "Update Contact",
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
        { label: "Official Phone Numbers", name: "", type: "textarea",
        Template: {
            sn: 2,
            iconName: "",
            visible: false,
        }},
    ],
    qBtns: [
        {label: "Cancel", name: "Cancel", icon: "close"},
        {label: "Update", name: "Update", icon: "update"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const dialogs = [
    { title: "Update Contact", isVisible: false, message: "Do you want to update contact",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Contact updated successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }