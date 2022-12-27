const lessonNotesForm = {
    title: "Lesson Notes",
    qSelects: [],
    qInputs: [],
    qBtns: [],
    qDates: [],
    GroupedCheckBoxes: [],
    qLists:[],
}

const selectors_vm = {
    title: "",
    qSelectSubject:{ label: "Subject", value: "", type: "text", list: [], actionName: "onSubject", visible: true },
    qSelectLevel:{ label: "Level", value: "", type: "text", list: [], actionName: "onLevel", visible: true },
}

const selectedLessonNoteForm = {
    qParagraphs: []
}

export { lessonNotesForm, selectors_vm, selectedLessonNoteForm }