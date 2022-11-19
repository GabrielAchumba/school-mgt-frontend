const form = {
    title: "Update Student",
    qSelects: [
        { label: "Designation *", value: "", type: "text", 
        list: [], actionName: "designationAction", visible: true },
        { label: "Level *", value: "", type: "text", 
        list: [], actionName: "levelAction", visible: true },
        { label: "Class Room *", value: "", type: "text", 
        list: [], actionName: "classRoomAction", visible: true },
        { label: "Session *", value: "", type: "text", 
        list: [], actionName: "sessionAction", visible: true },
    ],
    qInputs: [
        { label: "First Name *", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Last Name *", name: "", type: "text",
        Template: {
            sn: 1,
            iconName: "",
            visible: false,
        }},
        { label: "User Name *", name: "", type: "text",
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
    { title: "Update Student", isVisible: false, message: "Do you want to update a Student",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Student updated successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }