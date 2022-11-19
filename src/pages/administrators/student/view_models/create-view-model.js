const form = {
    title: "Create Student",
    qSelects: [
        { label: "Designation *", value: "", type: "text", 
        list: [], actionName: "designationAction", visible: true },
        { label: "Level *", value: "", type: "text", 
        list: [], actionName: "levelAction", visible: true },
        { label: "Class Room *", value: "", type: "text", 
        list: [], actionName: "classRoomAction", visible: true },
        { label: "Session *", value: "", type: "text", 
        list: [], actionName: "sessionAction", visible: true },
    ],
    qInputs: [
        { label: "First Name *", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Last Name *", name: "", type: "text",
        Template: {
            sn: 1,
            iconName: "",
            visible: false,
        }},
        { label: "User Name *", name: "", type: "text",
        Template: {
            sn: 2,
            iconName: "",
            visible: false,
        }},
        { label: "Password *", name: "", type: "text",
        Template: {
            sn: 3,
            iconName: "",
            visible: false,
        }},
    ],
    qBtns: [
        {label: "Cancel", name: "Cancel", icon: "close"},
        {label: "Create", name: "Create", icon: "add"},
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
    { title: "Create Student", isVisible: false, message: "Do you want to create a Student",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Student created successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }