
const loginForm = {
    title: "Sign in User",
    qInputs: [
        { label: "User Name *", name: "", type: "text", 
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Password *", name: "", type: "password", 
        Template: {
            sn: 1,
            iconName: "visibility_off",
            visible: true,
        }},
        
    ],
    qBtns: [
        {label: "Forgot Password", name: "ForgotPassword"},
        {label: "Sign In", name: "SignIn"},
        {label: "Sign Up", name: "SignUp"},
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

const forgotPasswordForm = {
    title: "Forgot User Password",
    qSelects: [
            { label: "Country *", value: "", type: "text", 
            list: [
            {
                    value: 0,
                    label: "Nigeria",
                    type: "Nigeria",
                    code: "+234",
                },
            ], actionName: "countryAction", visible: true },
    ],
    qInputs: [
        { label: "User Name *", name: "", type: "text", 
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Phone Number *", name: "", type: "phoneNumber",
        Template: {
            sn: 1,
            iconName: "phone",
            visible: false,
        }},
        
    ],
    qBtns: [
        {label: "Send OTP", name: "SendOTP"},
        {label: "Cancel", name: "CancelForgotPassword"},
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

const verifyOTPForm = {
    title: "Verfiy OTP",
    qInputs: [
        { label: "otp *", name: "", type: "text", 
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        
    ],
    qBtns: [
        {label: "Verify", name: "VerifyOTP"},
        {label: "Cancel", name: "CancelVerifyOTP"},
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

const resetPasswordForm = {
    title: "Reset Password",
    qInputs: [
        { label: "Password *", name: "", type: "password",
        Template: {
            sn: 0,
            iconName: "visibility_off",
            visible: true,
        }},
        { label: "Password Confirm *", name: "", type: "password",
        Template: {
            sn: 1,
            iconName: "visibility_off",
            visible: true,
        }},
        
    ],
    qBtns: [
        {label: "Reset Password", name: "ResetPassword"},
        {label: "Cancel", name: "CancelResetPassword"},
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
    { title: "Sign In", isVisible: false, message: "Do you want to log in?",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Sign In Success", isVisible: false, message: "You have successfully signed in!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Sign In Failure", isVisible: false, message: "Wrong credentials. Please check your sign-in credentials",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    
    { title: "Forgot Password", isVisible: false, message: "Did you forget your password?",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    
    { title: "Send OTP", isVisible: false, message: "OTP will be sent to your phone number",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Send OTP Success", isVisible: false, message: "OTP successfully send to your phone number. Please check your phone",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Send OTP Failure", isVisible: false, message: "Failed to send OTP to your phone number. Please try again",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },

    { title: "Verify OTP", isVisible: false, message: "Let us verify the OTP",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Verify OTP Success", isVisible: false, message: "OTP is current!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Verify OTP Failure", isVisible: false, message: "Wrong OTP",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },

    { title: "Reset Password", isVisible: false, message: "Do you want to reset password?",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Reset Password Success", isVisible: false, message: "Password changed successfully.",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Reset Password Failure", isVisible: false, message: "Failed to reset password. Please try again",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { loginForm, forgotPasswordForm, verifyOTPForm, resetPasswordForm, dialogs }
            