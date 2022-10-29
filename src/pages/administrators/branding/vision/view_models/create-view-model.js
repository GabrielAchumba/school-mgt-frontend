const form = {
    title: "Create Vision",
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
        { label: "Description", name: "", type: "textarea",
        selectedFile: null,
        files: [],
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }}
    ],
    qFiles: [
        { label: "Background Image", name: "", type: "file",
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
    clearQInputs(){
        var i = 0;
        for (i = 0; i < this.qInputs.length; i++){
            this.qInputs[i].name = "";
        }
    },
    clearQFiles(){
        var i = 0;
        for (i = 0; i < this.qFiles.length; i++){
            this.qFiles[i].name = "";
        }
    },
    clearQColors(){
        var i = 0;
        for (i = 0; i < this.qColors.length; i++){
            this.qColors[i].name = "";
        }
    }
}

const dialogs = [
    { title: "Create Vision", isVisible: false, message: "Do you want to create a Vision",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Vision created successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }