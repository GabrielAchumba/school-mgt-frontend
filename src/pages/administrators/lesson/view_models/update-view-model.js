
const form = {
    title: "Update Lesson",
    qSelects: [],
    qInputs: [
        { label: "Type of Lesson", name: "", type: "text",
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
    { title: "Update Lesson", isVisible: false, message: "Do you want to update a Lesson",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Lesson updated successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }