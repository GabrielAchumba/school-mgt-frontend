const form = {
    title: "Create Lesson Note Section",
    qSelects: [
         { label: "Level *", value: "", type: "text", 
         list: [], actionName: "onLevel", visible: true },
         { label: "Subject *", value: "", type: "text", 
         list: [], actionName: "onSubject", visible: true },
         { label: "Lesson Note *", value: "", type: "text", 
         list: [], actionName: "lessonNoteAction", visible: true },
    ],
    qEditors: [
        { label: "Section Title", name: "", title: "", type: "text",
        selectedFile: null,
        dense: false,
        files: [],
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Content", name: "", type: "textarea",
        selectedFile: null,
        dense: false,
        files: [],
        Template: {
            sn: 1,
            iconName: "",
            visible: false,
        }}
    ],
    qFiles: [
        { label: "File Path (10MB Maximum)", name: "", type: "file",
        selectedFile: null,
        showPreview: false,
		imagePreview: '',
        showVideoPreview: false,
        fileType: "image",
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
    clearQInputs(){
        var i = 0;
        for (i = 0; i < this.qEditors.length; i++){
            this.qEditors[i].name = "";
        }
    },
    clearQFiles(){
        var i = 0;
        for (i = 0; i < this.qFiles.length; i++){
            this.qFiles[i].name = "";
            this.qFiles[i].selectedFile = null;
            this.qFiles[i].showPreview = false;
            this.qFiles[i].showVideoPreview = false;
            this.qFiles[i].imagePreview = '';
        }
    },
}

const dialogs = [
    { title: "Create Lesson Note Section", isVisible: false, message: "Do you want to create lesson note section",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Lesson note section created successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }