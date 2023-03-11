const typeOfInitializationForm = {
    qSelects: [
        {
            label: "Initialization",
            visible: true,
            value: "",
            actionName: "selectInitializationForm",
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
            label: "Variable",
            visible: true,
            value: "",
            actionName: "selectVariableAction",
            list: [
                {
                    id: 0,
                    type: "Pressure",
                    value: "Pressure",
                },
                {
                    id: 1,
                    type: "Oil Saturation",
                    value: "Oil Saturation",
                },
                {
                    id: 2,
                    type: "Water Saturation",
                    value: "Water Saturation",
                },
                {
                    id: 3,
                    type: "Gas Saturation",
                    value: "Gas Saturation",
                },
            ]
        }
    ]
}


const constantInitializationForm = {
    title: "Constant Initial Data",
    qSelects: [],
    qInputs: [
        { label: "Pressure (psia)", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Oil Saturation (fraction)", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Water Saturation (fraction)", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Gas Saturation (fraction)", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
    ],
    qBtns: [
        {label: "Apply Constant Initialization", name: "ApplyConstantInitialization", icon: "add"},
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

const arrayPressureForm = {
    title: "Pressure Distribution (psia)",
    qSelects: [
    ],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "Apply Pressure Distribution", name: "ApplyPressureDistribution", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}


const arrayOilSaturationForm = {
    title: "Oil Saturation Distribution (fraction)",
    qSelects: [
    ],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "Apply Oil Saturation Distribution", name: "ApplyOilSaturationDistribution", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const arrayWaterSaturationForm = {
    title: "Water Saturation Distribution (fraction)",
    qSelects: [
    ],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "Apply Water Saturation Distribution", name: "ApplyWaterSaturationDistribution", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const arrayGasSaturationForm = {
    title: "Gas Saturation Distribution (fraction)",
    qSelects: [
    ],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "Apply Gas Saturation Distribution", name: "ApplyGasSaturationDistribution", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}


export { typeOfInitializationForm, constantInitializationForm, arrayPressureForm,
    arrayOilSaturationForm, arrayWaterSaturationForm, arrayGasSaturationForm }