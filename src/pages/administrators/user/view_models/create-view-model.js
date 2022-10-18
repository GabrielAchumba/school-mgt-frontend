const form = {
    title: "Create User",
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
         list: [], actionName: "schoolNameAction", visible: true },
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
        { label: "Password *", name: "", type: "text",
        Template: {
            sn: 3,
            iconName: "",
            visible: false,
        }},
        /* { label: "Country Code *", name: "", type: "text",
        Template: {
            sn: 4,
            iconName: "",
            visible: false,
        }},
        { label: "PhoneNumber *", name: "", type: "text",
        Template: {
            sn: 5,
            iconName: "",
            visible: false,
        }}, */
        /* { label: "Email", name: "", type: "text"}, */
    ],
    qBtns: [
        {label: "Cancel", name: "Cancel"},
        {label: "Create", name: "Create"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const dialogs = [
    { title: "Create User", isVisible: false, message: "Do you want to create a user",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "User created successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }