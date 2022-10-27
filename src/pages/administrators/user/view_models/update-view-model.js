const form = {
    title: "Update User",
    qSelects: [
        { label: "User Type *", value: "", type: "text", 
         list: [
             {
                 value: 1,
                 label: "Member",
                 type: "Member",
             },
             {
                 value: 2,
                 label: "Admin",
                 type: "Admin",
             }], actionName: "userTypeAction", visible: true },
         { label: "School Name *", value: "", type: "text", 
         list: [], actionName: "schoolNameAction", visible: false },
         { label: "Designation *", value: "", type: "text", 
         list: [], actionName: "designationAction", visible: true },
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
        /* { label: "Country Code *", name: "", type: "text",
        Template: {
            sn: 3,
            iconName: "",
            visible: false,
        }},
        { label: "PhoneNumber *", name: "", type: "text",
        Template: {
            sn: 4,
            iconName: "",
            visible: false,
        }},
        { label: "Email", name: "", type: "text",
        Template: {
            sn: 5,
            iconName: "",
            visible: false,
        }}, */
    ],
    qBtns: [
        {label: "Cancel", name: "Cancel", icon: "close"},
        {label: "Update", name: "Update", icon: "update"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const dialogs = [
    { title: "Update User", isVisible: false, message: "Do you want to update a user",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "User updated successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }