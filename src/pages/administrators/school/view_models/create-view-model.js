const form = {
    title: "Create School",
    backRoute: { name: "", route: "/register", isBackArrow: true},
    qSelects: [
         /* { label: "Refered By *", value: "", type: "text", 
         list: [], actionName: "referedByAction", visible: true }, */
    ],
    qInputs: [
        { label: "School Name", name: "", type: "text", 
        readonly: false, dense: false, disable: false, prependIcon: "",
        appendIcon: "", preInfo: "", linkName: "", postInfo: "",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "School Address", name: "", type: "textarea",
        readonly: false, dense: false, disable: false, prependIcon: "",
        appendIcon: "", preInfo: "", linkName: "", postInfo: "",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
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
            this.qSelects[i].list = [];
            this.qSelects[i].visible = true;
        }
    },
}

const dialogs = [
    { title: "Create School", isVisible: false, message: "Do you want to create a school",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "School created successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }