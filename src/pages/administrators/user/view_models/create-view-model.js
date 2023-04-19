const form = {
    title: "Create User",
    qSelects: [
         { label: "Designation *", value: "", type: "text", 
         list: [], actionName: "designationAction", visible: true },
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
        /* { label: "Country Code *", name: "", type: "text",
        Template: {
            sn: 4,
            iconName: "",
            visible: false,
        }},
        { label: "PhoneNumber *", name: "", type: "text",
        Template: {
            sn: 5,
            iconName: "",
            visible: false,
        }}, */
        /* { label: "Email", name: "", type: "text"}, */
    ],
    qFiles: [
        { label: "User Picture", name: "", type: "file",
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
    qBtns: [
        {label: "Cancel", name: "Cancel", icon: "close", btnDisabled: false},
        {label: "Create", name: "Create", icon: "add", btnDisabled: false},
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
            if(i != 0){
                this.qSelects[i].list = [];
            }
        }
    },
}

const dialogs = [
    { title: "Create User", isVisible: false, message: "Do you want to create a user",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "User created successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }