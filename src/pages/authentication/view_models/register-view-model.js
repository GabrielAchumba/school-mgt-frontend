import { countryCodes } from "./country-codes";
const userTypes = ["Administrator", "Instructor", "Student", "Teacher", "Lecturer", "Proprietor", "Principal",
"Vice Principal", "Headmaster", "Headmistress", "Vice Chancellor", "Member", "Staff"]

const registrationForm = {
    title: "Create User",
    backRoute: { name: "", route: "/", isBackArrow: true},
    qSelects: [
            { label: "User Type", value: "", type: "text", 
            iconName: "", selectorIconClick:"",
            list: userTypes.map((row, i) => {
              return {
                    sn: i+1,
                    id: row,
                    value:  row,
                    label: row,
                    type: row,
                }  
            }), 
            /* list: [], */
            actionName: "userTypeAction", visible: true },
            { label: "School Name", value: "", type: "text", 
            list: [], actionName: "schoolNameAction", visible: true,
            iconName: "add", selectorIconClick:"createSchool" },
    ],
    qInputs: [
        { label: "First Name", name: "", type: "text", 
        readonly: false, dense: false, disable: false, prependIcon: "",
        appendIcon: "", preInfo: "", linkName: "", postInfo: ""},
        { label: "Last Name", name: "", type: "text", 
        readonly: false, dense: false, disable: false, prependIcon: "",
        appendIcon: "", preInfo: "", linkName: "", postInfo: ""},
        { label: "Username", name: "", type: "text", 
        readonly: false, dense: false, disable: false, prependIcon: "person",
        appendIcon: "", preInfo: "", linkName: "", postInfo: ""},
        { label: "Password", name: "", type: "password", 
        readonly: false, dense: false, disable: false, prependIcon: "lock",
        appendIcon: "password", preInfo: "", linkName:" ",
        postInfo:""},
    ],
    qBtns: [
        {label: "Cancel", name: "CancelCreateUser", icon: "close", btnDisabled: false},
        {label: "Next", name: "Next", icon: "navigate_next", btnDisabled: false},
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

const phoneNumberForm = {
    title: "Send Code SMS",
    backRoute: { name: "", route: "/", isBackArrow: false},
    qSelects: [
            { label: "Country", value: "", type: "text", 
            list: countryCodes, actionName: "countryAction", visible: true },
    ],
    qInputs: [
        { label: "Phone Number", name: "", type: "text",
        readonly: false, dense: false, disable: false, prependIcon: "",
        appendIcon: "", preInfo: "", linkName: "", postInfo: "",
        Template: {
            sn: 0,
            iconName: "send",
            visible: true,
        }},
    ],
    qBtns: [
        {label: "Verify Phone Number", name: "GenerateVerificationCode", icon: "close", btnDisabled: false},
        {label: "Cancel", name: "CancelSendCodeSMS", icon: "close", btnDisabled: false},
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
        }
    },

}

const otpForm = {
    title: "Verify Code",
    backRoute: { name: "", route: "/", isBackArrow: false},
    qInputs: [
        { label: "Enter SMS Code", name: "", type: "text", 
        readonly: false, dense: false, disable: false, prependIcon: "",
        appendIcon: "", preInfo: "", linkName: "", postInfo: "",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
    ],
    qBtns: [
        {label: "Cancel", name: "CancelSubmit", icon: "close", btnDisabled: false},
        {label: "Submit", name: "Submit", icon: "save_alt", btnDisabled: false},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
    clearQInputs(){
        var i = 0;
        for (i = 0; i < this.qInputs.length; i++){
            this.qInputs[i].name = "";
        }
    },

}

const dialogs = [
    { title: "Create User", isVisible: false, message: "Do you want to create a user",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Create User Success", isVisible: false, message: "User created successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Create User Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },

    { title: "Send Code", isVisible: false, message: "A verification code will be sent to this phone number",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Send Code Success", isVisible: false, message: "Verification code sent successfully. Please click OK and enter the code",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Send Code Failure", isVisible: false, message: "Invalid phone number",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },

    { title: "Verify Code", isVisible: false, message: "Verify code and complete registration",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Verify Code Success", isVisible: false, message: "User registered successfully",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Verify Code Failure", isVisible: false, message: "Registration failed. Verify your credentials",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { registrationForm, phoneNumberForm, otpForm, dialogs }