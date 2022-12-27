const form = {
    title: "Update Lesson Note Section",
    qSelects: [],
    qInputs: [
        { label: "Section Title", name: "", type: "text",
        selectedFile: null,
        files: [],
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Content", name: "", type: "textarea",
        selectedFile: null,
        files: [],
        Template: {
            sn: 1,
            iconName: "",
            visible: false,
        }}
    ],
    qFiles: [
        { label: "File Path", name: "", type: "file",
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
    { title: "Update Lesson Note Section", isVisible: false, message: "Do you want to update lesson note",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Lesson note updated successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }