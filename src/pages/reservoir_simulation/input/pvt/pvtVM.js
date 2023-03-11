const typeOfPVTProfileForm = {
    qSelects: [
        {
            label: "PVT Profile",
            visible: true,
            value: "",
            actionName: "selectTypeOfPVTProfile",
            list: [
                {
                    id: 0,
                    type: "Constant",
                    value: "Constant",
                },
                {
                    id: 1,
                    type: "Array",
                    value: "Array",
                },
            ]
        },
        {
            label: "Fluid Type",
            visible: true,
            value: "",
            actionName: "selectTypeOfFluidAction",
            list: [
                {
                    id: 0,
                    type: "Oil",
                    value: "Oil",
                },
                {
                    id: 1,
                    type: "Water",
                    value: "Water",
                },
                {
                    id: 2,
                    type: "Gas",
                    value: "Gas",
                },
            ]
        }
    ]
}


const constantPVTForm = {
    title: "Constant PVT",
    qSelects: [],
    qInputs: [
        { label: "Pressure (psia)", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Oil FVF (rb/stb)", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Oil Viscosity (cp)", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Solution GOR (scf/stb)", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Water FVF (rb/stb)", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Water Viscosity (cp)", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Gas FVF (rb/scf)", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Gas Viscosity (cp)", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
    ],
    qBtns: [
        {label: "Apply Constant PVT", name: "ApplyConstantPVT", icon: "add"},
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



const arrayOilPVTProfileForm = {
    title: "Oil PVT Table",
    qSelects: [
    ],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "Apply Oil PVT Table", name: "ApplyOilPVTTableForm", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const arrayWaterPVTProfileForm = {
    title: "Water PVT Table",
    qSelects: [
    ],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "Apply Water PVT Table", name: "ApplyWaterPVTTableForm", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const arrayGasPVTProfileForm = {
    title: "Gas PVT Table",
    qSelects: [
    ],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "Apply Gas PVT Table", name: "ApplyGasPVTTableForm", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}


export { typeOfPVTProfileForm, constantPVTForm, arrayOilPVTProfileForm,
    arrayWaterPVTProfileForm, arrayGasPVTProfileForm }