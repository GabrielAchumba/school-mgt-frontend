import { countryCodes } from "./country-codes";
const userTypes = ["Vendor", "Client"]

const registrationForm = {
    title: "Create User",
    qSelects: [
            { label: "User Type", value: "", type: "text", 
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
    ],
    qInputs: [
        { label: "First Name", name: "", type: "text", 
        visible: true,
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Last Name", name: "", type: "text",
        visible: true,
        Template: {
            sn: 1,
            iconName: "",
            visible: false,
        }},
        { label: "User Name", name: "", type: "text",
        visible: true,
        Template: {
            sn: 2,
            iconName: "",
            visible: false,
        }},
        { label: "Password", name: "", type: "password",
        visible: true,
        Template: {
            sn: 3,
            iconName: "visibility_off",
            visible: true,
        }},
        { label: "Real Estate Company Name", name: "", type: "text", 
        visible: true,
        Template: {
            sn: 4,
            iconName: "",
            visible: false,
        }},
    ],
    qBtns: [
        {label: "Next", name: "Next", icon: "navigate_next", btnDisabled: false},
        {label: "Cancel", name: "CancelCreateUser", icon: "close", btnDisabled: false},
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
    qSelects: [
            { label: "Country", value: "", type: "text", 
            list: countryCodes, actionName: "countryAction", visible: true },
    ],
    qInputs: [
        { label: "Phone Number", name: "", type: "text",
        visible: true,
        Template: {
            sn: 0,
            iconName: "send",
            visible: true,
        }},
    ],
    qBtns: [
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
    qInputs: [
        { label: "Enter SMS Code", name: "", type: "text", 
        visible: true,
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
    ],
    qBtns: [
        {label: "Submit", name: "Submit", icon: "save_alt", btnDisabled: false},
        {label: "Cancel", name: "CancelSubmit", icon: "close", btnDisabled: false},
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