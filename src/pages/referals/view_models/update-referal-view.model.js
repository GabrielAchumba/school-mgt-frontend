const form = {
    title: "Update Referal",
    qSelects: [
         { label: "Country *", value: "", type: "text", code: "",
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
        { label: "PhoneNumber *", name: "", type: "text",
        Template: {
            sn: 3,
            iconName: "",
            visible: false,
        }},
    ],
    qBtns: [
        {label: "Cancel", name: "Cancel"},
        {label: "Update", name: "Update"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const dialogs =[
    { title: "Update Referal", isVisible: false, message: "Do you want to update your profile",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "User updated successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }