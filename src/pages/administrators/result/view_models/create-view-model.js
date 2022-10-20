
const form = {
    title: "Create Result",
    qSelects: [
        { label: "Class Room", value: "", type: "text", list: [], actionName: "classRoom", visible: true },
        { label: "Subject", value: "", type: "text", list: [], actionName: "subject", visible: true },
        { label: "Student", value: "", type: "text", list: [], actionName: "student", visible: true },
        { label: "Type of Instructor", value: "", type: "text", list: [], actionName: "typeOfInstructor", visible: true },
        { label: "Instructor Full Name", value: "", type: "text", list: [], actionName: "instructor", visible: true },
        { label: "Type of Assessment", value: "", type: "text", list: [], actionName: "instructor", visible: true },
    ],
    qInputs: [
        { label: "Score", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Maximum Score", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }}
    ],
    qBtns: [
        {label: "Cancel", name: "Cancel"},
        {label: "Create", name: "Create"},
    ],
    qDates: [
            {label: "Created At", name: "2019/02/01"},
    ],
    GroupedCheckBoxes: [],
    clearQInputs(){
        var i = 0;
        for (i = 0; i < this.qInputs.length; i++){
            this.qInputs[i].name = "";
        }
    },
    clearQSelects(){
        var i = 0;
        for (i = 0; i < this.qSelects.length; i++){
            this.qSelects[i].value = "";
            this.qSelects[i].list = [];
            this.qSelects[i].visible = true;
        }
    },
    clearQDates(){
        var i = 0;
        for (i = 0; i < this.qDates.length; i++){
            this.qDates[i].name = "2019/02/01";
        }
    }
}

const dialogs = [
    { title: "Create Result", isVisible: false, message: "Do you want to create a Result",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Result created successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }