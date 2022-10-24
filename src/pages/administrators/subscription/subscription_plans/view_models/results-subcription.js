
const qSelect = { label: "", value: "", 
    type: "", list: [
        {
            value: 0,
            type: "None",
            label: "None",
            amount: 0,
        },
        {
            value: 1,
            type: "90 Days",
            label: "90 Days",
            amount: 1000,
        }, 
        {
            value: 2,
            type: "180 Days",
            label: "180 Days",
            amount: 1800,
        }, 
        {
            value: 3,
            type: "360 Days",
            label: "360 Days",
            amount: 3500,
        }], 
    actionName: "typeOfSubscription",  
    visible: true,
}

const qBtn = {label: "Students", name: "showStudentsDialog", icon: "groups"}

const dialog = { title: "Students", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" }

const studentsForm = { 
    title: "Students",
    qToggles: [{ label: "Select All", visible: true, name: false}],
    qSelects: [],
    qInputs: [],
    qBtns: [
        {label: "Done", name: "closeStudentsDialog", icon: "done"},
    ],
    qDates: [],
    GroupedCheckBoxes: [
        { 
            isGroupedCheckBox: true, 
            isExpanded: true, 
            list:[], 
            group: [],
            label: "Students",
        },
    ],
}

export { qSelect, qBtn, dialog, studentsForm }
    