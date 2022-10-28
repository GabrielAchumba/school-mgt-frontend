
const form = {
    title: "Update File",
    qSelects: [],
    qParagraphs: [
        { label: "Title", name: "", type: "text"},
        { label: "Description", name: "", type: "textarea"},
    ],
    qLinks: [
        {label: "View File", name: "ViewFile", href: "#", target: "_blank"}
    ],
    qBtns: [
        {label: "Cancel", name: "Cancel", icon: "close"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const dialogs = [
    { title: "Update File", isVisible: false, message: "Do you want to update a File",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "File updated successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }