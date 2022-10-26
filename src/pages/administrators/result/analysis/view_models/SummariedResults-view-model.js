const form = { 
    title: "Configure Result Analysis",
    qSelects: [
        { label: "Class Room", value: "", type: "text", list: [], actionName: "classRoom", visible: true },
        { label: "Student", value: "", type: "text", list: [], actionName: "onStudentSelected", visible: true },
        { label: "Type of Instructor", value: "", type: "text", list: [], actionName: "typeOfInstructor", visible: true },
        { label: "Instructor Full Name", value: "", type: "text", list: [], actionName: "instructor", visible: true },
    ],
    qInputs: [],
    qBtns: [
        {label: "Subjects", name: "showSubjectsDialog", icon: "groups"},
        {label: "Compute", name: "Compute", icon: "calculate"},
    ],
    qDates: [
         {label: "Start Date", name: "2019/02/01"},
         {label: "End Date", name: "2019/02/01"},
    ],
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
    title: "Summary Report",
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