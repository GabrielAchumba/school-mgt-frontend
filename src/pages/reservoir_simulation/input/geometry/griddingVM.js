const typeOfGriddingForm = {
    qSelects: [
        {
            label: "Type of Gridding",
            visible: true,
            value: "",
            actionName: "selectTypeOfGriddingAction",
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
                /* {
                    id: 2,
                    type: "Array",
                    value: "Array",
                } */
            ]
        },
        {
            label: "Dimension",
            visible: true,
            value: "",
            actionName: "selectTypeOfDimensionAction",
            list: [
                {
                    id: 0,
                    type: "Dx",
                    value: "Dx",
                },
                {
                    id: 1,
                    type: "Dy",
                    value: "Dy",
                },
                {
                    id: 2,
                    type: "Dz",
                    value: "Dz",
                }
            ]
        }
    ]
}


const constGriddingForm = {
    title: "Constant Grids",
    qSelects: [],
    qInputs: [
        { label: "Dx (ft)", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Dy (ft)", name: "", type: "text",
        Template: {
            sn: 1,
            iconName: "",
            visible: false,
        }},
        { label: "Dz (ft)", name: "", type: "text",
        Template: {
            sn: 2,
            iconName: "",
            visible: false,
        }},
    ],
    qBtns: [
        {label: "Apply Constant Gridding", name: "ApplyConstGriddingForm", icon: "add"},
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



const rangeXGriddingForm = {
    title: "X Direction Grids",
    qSelects: [
    ],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "Apply X Gridding", name: "ApplyXGriddingByArrayForm", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const rangeYGriddingForm = {
    title: "Y Direction Grids",
    qSelects: [],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "Apply Y Gridding", name: "ApplyYGriddingByArrayForm", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const rangeZGriddingForm = {
    title: "Z Direction Grids",
    qSelects: [],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "Apply Z Gridding", name: "ApplyZGriddingByArrayForm", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}


export { constGriddingForm, typeOfGriddingForm, rangeXGriddingForm,
    rangeYGriddingForm, rangeZGriddingForm }