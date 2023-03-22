const torpa = [
    {
        label: "Mobile App",
        btnDisabled: false,
        name: "installApp",
    },
    {
        label: "Login/Register",
        btnDisabled: false,
        name: "login",
    }
]

const launchpad = [
    {
        label: "Mobile App",
        btnDisabled: false,
        name: "installApp",
    },
    {
        label: "",
        btnDisabled: false,
        name: "login",
    }
]


export const getInstall = (selectedProduct) => {
    let btns = []
    switch(selectedProduct){
        case "Torpa":
            btns = torpa;
            break;
        case "Launchpad":
            btns = launchpad;
            break;
    }
    return btns;
}