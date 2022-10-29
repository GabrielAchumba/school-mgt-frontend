const form = {
    title: "Create Logo",
    qSelects: [],
    qInputs: [
        { label: "Title", name: "", type: "text",
        selectedFile: null,
        files: [],
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Description", name: "", type: "text",
        selectedFile: null,
        files: [],
        Template: {
            sn: 1,
            iconName: "",
            visible: false,
        }}
    ],
    qFiles: [
        { label: "Picture", name: "", type: "file",
        selectedFile: null,
        files: [],
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }}
    ],
    qColors: [],
    qBtns: [
        {label: "Cancel", name: "Cancel", icon: "close"},
        {label: "Create", name: "Create", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
    clearQFiles(){
        var i = 0;
        for (i = 0; i < this.qFiles.length; i++){
            this.qFiles[i].name = "";
        }
    },
    clearQInputs(){
        var i = 0;
        for (i = 0; i < this.qInputs.length; i++){
            this.qInputs[i].name = "";
        }
    }
}

const dialogs = [
    { title: "Create Home Page", isVisible: false, message: "Do you want to create home page",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Home page created successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }