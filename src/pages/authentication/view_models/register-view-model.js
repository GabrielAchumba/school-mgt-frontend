
const form = {
    title: "Create User",
    qSelects: [
            { label: "User Type *", value: "", type: "text", 
            list: [
                {
                    value: 1,
                    label: "Referal",
                    type: "Referal",
                },
                {
                    value: 2,
                    label: "School Administrator",
                    type: "Admin",
                }], actionName: "userTypeAction", visible: true },
            { label: "School Name *", value: "", type: "text", 
            list: [], actionName: "schoolNameAction", visible: true },
            { label: "Country *", value: "", type: "text", 
            list: [
            {
                    value: 1,
                    label: "Nigeria",
                    type: "Nigeria",
                    code: "+234",
                },
            ], actionName: "countryAction", visible: true },
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
        { label: "PhoneNumber *", name: "", type: "text",
        Template: {
            sn: 4,
            iconName: "",
            visible: true,
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
    { title: "Create User", isVisible: false, message: "Do you want to create a user",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "User created successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }