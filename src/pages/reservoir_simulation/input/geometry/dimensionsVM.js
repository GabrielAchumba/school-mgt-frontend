
const form = {
    title: "Dimensions",
    qSelects: [],
    qInputs: [
        { label: "Nx", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Ny", name: "", type: "text",
        Template: {
            sn: 1,
            iconName: "",
            visible: false,
        }},
        /* { label: "Nz", name: "", type: "text",
        Template: {
            sn: 2,
            iconName: "",
            visible: false,
        }}, */
    ],
    qBtns: [
        {label: "Apply", name: "Apply", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
    clearQInputs(){
        var i = 0;
        for (i = 0; i < this.qInputs.length; i++){
            this.qInputs[i].name = "";
        }
    }
}

export { form }