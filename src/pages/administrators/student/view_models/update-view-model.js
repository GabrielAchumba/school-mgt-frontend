const form = {
    title: "Update Student",
    qSelects: [
        { label: "Type of SubscriptionType *", value: "", type: "text", 
         list: [{
             value: 1,
             type: "90 Days",
             label: "90 Days",
         }, 
         {
             value: 2,
             type: "180 Days",
             label: "180 Days",
         }, 
         {
             value: 3,
             type: "360 Days",
             label: "360 Days"
         }], actionName: "subscriptionType",
         visible: true },
    ],
    qInputs: [
        { label: "First Name", name: "", type: "text"},
        { label: "Last Name", name: "", type: "text"},
    ],
    qBtns: [
        {label: "Cancel", name: "Cancel"},
        {label: "Update", name: "Update"},
    ],
    qDates: [
        {label: "Date of Birth", name: "2019/02/01"},
    ],
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