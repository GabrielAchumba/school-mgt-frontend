const form = {
    title: "Create Mission",
    qSelects: [],
    qSelects: [
        { label: "Subject *", value: "", type: "text", 
        list: [], actionName: "subjectAction", visible: true },
    ],
    qParagraphs: [
        { label: "Examination Rules and Instructions", name: ""}
    ],
    qFiles: [],
    qColors: [],
    qBtns: [
        {label: "Cancel", name: "Cancel", icon: "close"},
        {label: "Start", name: "Start", icon: "send"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
    clearqQaragraphs(){
        var i = 0;
        for (i = 0; i < this.qParagraphs.length; i++){
            this.qParagraphs[i].name = "";
        }
    },
}

const dialogs = [
    { title: "Start Examination", isVisible: false, message: "Do you want to create the examination. Once you start, there is no room for canceling the examination. Good luck!!!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }