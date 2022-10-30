const form = {
    title: "Create News",
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
            sn: 1,
            iconName: "",
            visible: false,
        }},
        { label: "Image Title", name: "", type: "text",
        selectedFile: null,
        files: [],
        Template: {
            sn: 2,
            iconName: "",
            visible: false,
        }},
        { label: "Image Description", name: "", type: "text",
        selectedFile: null,
        files: [],
        Template: {
            sn: 3,
            iconName: "",
            visible: false,
        }}
    ],
    qFiles: [
        { label: "News File", name: "", type: "file",
        selectedFile: null,
        files: [],
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }}
    ],
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
            this.qFiles[i].selectedFile = null;

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
    { title: "Create News", isVisible: false, message: "Do you want to create news",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "News created successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }