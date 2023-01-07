const form = {
    title: "Examinations Guides and Rules",
    qSelects: [],
    qSelects: [],
    qParagraphs: [
        {label: "Instructions",
        name: "You will be given 50 questions. The questions will be presented 1 each in series starting with English Language. Once you have answered a question, you will be required to click on Next to move to the next question and click Submit when you are done with all questions. If at anytime, you can no longer continue, you can click on Submit to see your performance analysis. You will be given 35 mins to answer all 50 questions and submit. If at any point, you're unable to finish on time, you will be automatically shown the summary of your performance."},
        { label: "No 1", 
        name: "1. It is best to set an alarm to notify you when you have limited time (e.g., 10 minutes) remaining in your testing period."},
        { label: "No 2", 
        name: "2. Do not switch browser tab or copy of the browser in the active browser or in another browser while writing the examination."},
        { label: "No 3", 
        name: "3. Ensure that every answer is complete and appears as you intended. Review the accuracy of your answers."},
        { label: "No 4", 
        name: "4. You should only need to click submit once, but if you have a problem, try once more. If you still have a problem submitting the test, let us know immediately (within the next 5 minutes)."}
    ],
    qFiles: [],
    qColors: [],
    qBtns: [
        {label: "Cancel", name: "Cancel", icon: "close"},
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

const questionsForms = {
    title: "Past Questions",
    qSelects: [],
    qInputs: [],
    qBtns: [],
    qDates: [],
    GroupedCheckBoxes: [],
    qLists:[],
}

const selectedQuestionsForms = {
    title: "Questions",
    qSelects: [],
    qInputs: [],
    qBtns: [],
    qDates: [],
    GroupedCheckBoxes: [],
    qLists:[],
    qBtns: [
        {label: "Done", name: "isQuestionsAction", icon: "close", btnDisabled: false},
    ],
}


const dialogs = [
    { title: "Start Examination", isVisible: false, message: "Do you want to start an examination. Once you start, there is no room for canceling the examination. Good luck!!!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs, questionsForms, selectedQuestionsForms }