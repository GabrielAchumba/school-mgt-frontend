const form = { 
    title: "Configure Result Report",
    qSelects: [
        { label: "Type of Instructor", value: "", 
        type: "text", list: [], actionName: "typeOfInstructor", visible: true },
        { label: "Class Room", value: "", 
        type: "text", list: [], actionName: "classRoom", visible: true },
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
            isExpanded: false, 
            list:[], 
            group: [],
            label: "Subjects",
        },
        { 
            isGroupedCheckBox: true, 
            isExpanded: false, 
            list:[], 
            group: [],
            label: "Students",
        },
        { 
            isGroupedCheckBox: true, 
            isExpanded: false, 
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
        {label: "Plot", name: "Plot"},
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

export { form, chartForm, tableVM }