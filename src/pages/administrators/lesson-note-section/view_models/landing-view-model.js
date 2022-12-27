const lessonNoteSectionsForm = {
    title: "Lesson Note Sections",
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
    qSelectLessonNotes:{ label: "Lesson Note", value: "", type: "text", list: [], actionName: "onLessonNote", visible: true },
}

const selectedLessonNoteSectionForm = {
    qParagraphs: [],
    qFiles: [
        { label: "", name: "", type: "file",
        selectedFile: null,
        showPreview: false,
		imagePreview: '',
        files: [],
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }}
    ],
}

export { lessonNoteSectionsForm, selectors_vm, selectedLessonNoteSectionForm }