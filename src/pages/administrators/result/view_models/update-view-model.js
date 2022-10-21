
const form = {
    title: "Update Result",
    qSelects: [
        { label: "Class Room", value: "", type: "text", list: [], actionName: "classRoom", visible: true },
        { label: "Subject", value: "", type: "text", list: [], actionName: "subject", visible: true },
        { label: "Student", value: "", type: "text", list: [], actionName: "student", visible: true },
        { label: "Type of Instructor", value: "", type: "text", list: [], actionName: "typeOfInstructor", visible: true },
        { label: "Instructor Full Name", value: "", type: "text", list: [], actionName: "instructor", visible: true },
        { label: "Type of Assessment", value: "", type: "text", list: [], actionName: "instructor", visible: true },
    ],
    qInputs: [
        { label: "Score", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Maximum Score", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }}
    ],
    qBtns: [
        {label: "Cancel", name: "Cancel", icon: "close"},
        {label: "Delete", name: "deleteResult", icon: "remove"},
        {label: "Update", name: "Update", icon: "update"},
    ],
    qDates: [
        {label: "Updated At", name: "2019/02/01"},
    ],
    GroupedCheckBoxes: [],
}

const dialogs = [
    { title: "Update Result", isVisible: false, message: "Do you want to update a Result",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Update Success", isVisible: false, message: "Result updated successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Update Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Delete Result", isVisible: false, message: "Do you want to delete a Result",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Delete Success", isVisible: false, message: "Result deleted successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Delete Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }