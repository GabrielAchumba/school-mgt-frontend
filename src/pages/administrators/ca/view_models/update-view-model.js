
const form = {
    title: "Update Continuous Assessment",
    qSelects: [
         { label: "Level *", value: "", type: "text", 
         list: [], actionName: "levelAction", visible: true },
         { label: "Subject *", value: "", type: "text", 
         list: [], actionName: "subjectAction", visible: true },
    ],
    qInputs: [
        { label: "Title", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Maximum Score", name: "", type: "number",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
    ],
    qBtns: [
        {label: "Cancel", name: "Cancel", icon: "close"},
        {label: "Update", name: "Update", icon: "add"},
    ],
    qDates: [],
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
}

const dialogs = [
    { title: "Update Continuous Assessment", isVisible: false, message: "Do you want to update continuous assessment",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Continuous assessment updated successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }