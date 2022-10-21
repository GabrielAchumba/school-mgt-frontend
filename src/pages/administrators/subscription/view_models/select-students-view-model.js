const selectStudentsForm = { 
    title: "Instructors",
    qSelects: [],
    qInputs: [],
    qBtns: [
        {label: "Done", name: "closeTeachersDialog"},
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
    qToggles: [
        {label: "All Students", name: false, visible: false},
    ],
}

export { selectStudentsForm }