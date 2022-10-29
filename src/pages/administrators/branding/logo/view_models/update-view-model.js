const form = {
    title: "Update Logo",
    qSelects: [],
    qInputs: [],
    qFiles: [
        { label: "Logo Path", name: "", type: "file",
        selectedFile: null,
        files: [],
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }}
    ],
    qImages: [
        { label: "Logo", name: "", type: "file", imageUrl: "",
        selectedFile: null,
        files: [],
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }}
    ],
    qColors: [
        { label: "Primary Color", name: "", type: "color",
        selectedFile: null,
        files: [],
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Secondary Color", name: "", type: "color",
        selectedFile: null,
        files: [],
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Tertiary Color", name: "", type: "color",
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
    clearQColors(){
        var i = 0;
        for (i = 0; i < this.qColors.length; i++){
            this.qColors[i].name = "";
        }
    }
}

const dialogs = [
    { title: "Update Logo", isVisible: false, message: "Do you want to update a Logo",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Logo updated successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }