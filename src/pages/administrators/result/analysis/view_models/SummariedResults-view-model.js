const form = { 
    title: "Configure Result Report",
    qSelects: [
        { label: "Class Room", value: "", type: "text", list: [], actionName: "classRoom", visible: true },
        { label: "Student", value: "", type: "text", list: [], actionName: "student", visible: true },
        { label: "Type of Instructor", value: "", type: "text", list: [], actionName: "typeOfInstructor", visible: true },
        { label: "Instructor Full Name", value: "", type: "text", list: [], actionName: "instructor", visible: true },
    ],
    qInputs: [],
    qBtns: [
        {label: "Compute", name: "Compute"},
    ],
    qDates: [
         {label: "Start Date", name: "2019/02/01"},
         {label: "End Date", name: "2019/02/01"},
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
        {label: "Plot", name: "Plot"},
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

export { form, chartForm, tableVM }