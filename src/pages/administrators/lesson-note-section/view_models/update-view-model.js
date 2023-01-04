const form = {
    title: "Update Lesson Note Section",
    qSelects: [],
    qEditors: [
        { label: "Section Title", name: '<pre>Check out the two different types of dropdowns' +
        ' in each of the "Align" buttons.</pre> ', type: "text",
        selectedFile: null,
        files: [],
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Content", name: '<pre>Check out the two different types of dropdowns' +
        ' in each of the "Align" buttons.</pre> ', type: "textarea",
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
        {label: "Delete", name: "Delete", icon: "remove"},
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
    { title: "Update Lesson Note Section", isVisible: false, message: "Do you want to update lesson note",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Lesson note updated successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }