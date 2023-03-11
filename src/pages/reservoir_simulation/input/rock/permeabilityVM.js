const typeOfPermeabilityDistributionForm = {
    qSelects: [
        {
            label: "Permeability Distribution",
            visible: true,
            value: "",
            actionName: "selectTypeOfPermeabilityDistribution",
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
            label: "Direction",
            visible: true,
            value: "",
            actionName: "selectTypeOfDirectionAction",
            list: [
                {
                    id: 0,
                    type: "Kx",
                    value: "Kx",
                },
                {
                    id: 1,
                    type: "Ky",
                    value: "Ky",
                },
                {
                    id: 2,
                    type: "Kz",
                    value: "Kz",
                },
            ]
        }
    ]
}


const constantPermeabilityForm = {
    title: "Constant Permeability",
    qSelects: [],
    qInputs: [
        { label: "X Permeability (mD)", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Y Permeability (mD)", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Z Permeability (mD)", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
    ],
    qBtns: [
        {label: "Apply Constant Permeability", name: "ApplyConstantPermeability", icon: "add"},
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



const arrayXPermeabilityDistributionForm = {
    title: "X Permeability Distribution",
    qSelects: [
    ],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "Apply X Permeability Distribution", name: "ApplyXPermeabilityDistributionForm", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const arrayYPermeabilityDistributionForm = {
    title: "Y Permeability Distribution",
    qSelects: [
    ],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "Apply Y Permeability Distribution", name: "ApplyYPermeabilityDistributionForm", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const arrayZPermeabilityDistributionForm = {
    title: "Z Permeability Distribution",
    qSelects: [
    ],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "Apply Z Permeability Distribution", name: "ApplyZPermeabilityDistributionForm", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}


export { typeOfPermeabilityDistributionForm, constantPermeabilityForm, arrayXPermeabilityDistributionForm,
    arrayYPermeabilityDistributionForm, arrayZPermeabilityDistributionForm }