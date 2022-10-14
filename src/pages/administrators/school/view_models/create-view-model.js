const form = {
    title: "Create School",
    qSelects: [
         { label: "Refered By *", value: "", type: "text", 
         list: [], actionName: "referedByAction", visible: true },
    ],
    qInputs: [
        { label: "School Name", name: "", type: "text", 
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "School Address", name: "", type: "text",
        Template: {
            sn: 0,
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
    { title: "Create School", isVisible: false, message: "Do you want to create a School",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "School created successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }