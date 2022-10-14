const form = {
    title: "Create Staff",
    qSelects: [],
    qInputs: [
        { label: "Type of Staff", name: "", type: "text",
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

const dialogs = [
    { title: "Create Staff", isVisible: false, message: "Do you want to create a staff",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Staff created successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }