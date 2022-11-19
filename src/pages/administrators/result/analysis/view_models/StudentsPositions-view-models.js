const form = { 
    title: "Configure Result Analysis",
    qSelects: [
        { label: "Level", value: "", type: "text", list: [], actionName: "level", visible: true },
        { label: "Session", value: "", type: "text", list: [], actionName: "session", visible: true },
    ],
    qInputs: [],
    qBtns: [
        {label: "Class Rooms", name: "showClassRoomDialog", icon: "escalator_warning"},
        {label: "Students", name: "showStudentsDialog", icon: "groups"},
        {label: "Subjects", name: "showSubjectsDialog", icon: "book"},
        {label: "Compute", name: "Compute", icon: "calculate"},
        {label: "Cancel", name: "CancelFormDialog", icon: "close"},
    ],
    qDates: [],
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

const classRoomsForm = { 
    title: "Class Rooms",
    qSelects: [],
    qInputs: [],
    qBtns: [
        {label: "Done", name: "closeClassRoomsDialog", icon: "done"},
    ],
    qDates: [],
    GroupedCheckBoxes: [
        { 
            isGroupedCheckBox: true, 
            isExpanded: true, 
            list:[], 
            group: [],
            label: "Class Rooms",
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
    { title: "Students", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Subjects", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Configure Chart", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Class Rooms", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, subjectsForm, studentsForm, chartForm, tableVM, dialogs, classRoomsForm }