const form = { 
    title: "Configure Result Analysis",
    qSelects: [
        { label: "Session", value: "", type: "text", list: [], actionName: "onSessionSelected", visible: true },
        { label: "Level", value: "", type: "text", list: [], actionName: "onLevelSelected" ,visible: true },
        { label: "Class Room", value: "", type: "text", list: [], actionName: "onClassRoomSelected", visible: true },
        { label: "Student", value: "", type: "text", list: [], actionName: "onStudentSelected", visible: true },
    ],
    qInputs: [],
    qBtns: [
        {label: "Subjects", name: "showSubjectsDialog", icon: "groups"},
        {label: "Compute", name: "Compute", icon: "calculate"},
        {label: "Cancel", name: "CancelFormDialog", icon: "close"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const subjectsForm = { 
    title: "Subjects",
    qInputs: [],
    qBtns: [
        {label: "Done", name: "closeSubjectsDialog", icon: "done"},
    ],
    GroupedCheckBoxes: [
        { 
            isGroupedCheckBox: true, 
            isExpanded: true, 
            list:[], 
            group: [],
            label: "Subjects",
        },
    ],
}

const chartForm = { 
    title: "Configure Chart",
    qSelects: [
        { label: "Horizontal Parameter", value: "", 
        type: "text", list: [], actionName: "", visible: true },
        { label: "Vertical Parameter", value: "",
         type: "text", list: [], actionName: "", visible: true },
    ],
    qInputs: [],
    qBtns: [
        {label: "Plot", name: "Plot", icon: "done"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const tableVM = {
    selectedResult: {},
    title: "Report Card",
    columns: [],
    rows: [],
    separator: "cell",
}

const dialogs = [
    { title: "Configure Result Analysis", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Subjects", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Configure Chart", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, subjectsForm, chartForm, tableVM, dialogs }