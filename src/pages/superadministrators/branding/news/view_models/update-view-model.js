const form = {
    title: "Update News",
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
            sn: 0,
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
        { label: "News File (Max Size: 7MB)", name: "", type: "file",
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
    qColors: [],
    qBtns: [
        {label: "Cancel", name: "Cancel", icon: "close"},
        {label: "Update", name: "Update", icon: "update"},
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
    { title: "Update News", isVisible: false, message: "Do you want to update news",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "News updated successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }