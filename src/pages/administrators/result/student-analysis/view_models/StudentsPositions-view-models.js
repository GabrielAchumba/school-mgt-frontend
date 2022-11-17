const form = { 
    title: "Configure Result Analysis",
    qSelects: [
        { label: "Type of Instructor", value: "", 
        type: "text", list: [], actionName: "typeOfInstructor", visible: true },
        { label: "Class Room", value: "", 
        type: "text", list: [], actionName: "classRoom", visible: true },
    ],
    qInputs: [],
    qBtns: [
        {label: "Instructors", name: "showTeachersDialog", icon: "escalator_warning"},
        {label: "Students", name: "showStudentsDialog", icon: "groups"},
        {label: "Subjects", name: "showSubjectsDialog", icon: "book"},
        {label: "Compute", name: "Compute", icon: "calculate"},
        {label: "Cancel", name: "CancelFormDialog", icon: "close"},
    ],
    qDates: [
         {label: "Start Date", name: "2019/02/01"},
         {label: "End Date", name: "2019/02/01"},
    ],
    GroupedCheckBoxes: [],
}

const subjectsForm = { 
    title: "Subjects",
    qSelects: [],
    qInputs: [],
    qBtns: [
        {label: "Done", name: "closeSubjectsDialog", icon: "done"},
    ],
    qDates: [],
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

const studentsForm = { 
    title: "Students",
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

const teachersForm = { 
    title: "Instructors",
    qSelects: [],
    qInputs: [],
    qBtns: [
        {label: "Done", name: "closeTeachersDialog", icon: "done"},
    ],
    qDates: [],
    GroupedCheckBoxes: [
        { 
            isGroupedCheckBox: true, 
            isExpanded: true, 
            list:[], 
            group: [],
            label: "Teachers",
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
    GroupedCheckBox: [],
}

const tableVM = {
    selectedResult: {},
    title: "Students' Results Position",
    columns: [],
    rows: [],
    separator: "cell",
}

const dialogs = [
    { title: "Configure Result Analysis", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Instructors", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Students", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Subjects", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Configure Chart", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, subjectsForm, studentsForm, teachersForm, chartForm, tableVM, dialogs }