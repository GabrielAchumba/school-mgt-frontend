const exam_vm = {
    title: "",
    examQuestionSessions: [],
    qToggle: { label: "Add Image", visible: true, name: false},
    qSelect:{ label: "Variables", value: "", type: "text", list: [], actionName: "onVariables", visible: true },
    qSelectSubject:{ label: "Subject", value: "", type: "text", list: [], actionName: "onSubject", visible: true },
    qSelectLevel:{ label: "Level", value: "", type: "text", list: [], actionName: "onLevel", visible: true },
    answerOptions: [],
    qSelectAnswerOption:{ label: "Answer Option", value: "", type: "text", list: [], actionName: "onAnswerOption", visible: true },
    qDate: {label: "Examination Date", name: "2021/02/05"}
}

const dialogs = [
    { title: "Create Examination Question", isVisible: false, message: "Do you want to create examination question",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Examination question created successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { exam_vm, dialogs }