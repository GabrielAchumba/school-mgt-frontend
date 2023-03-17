const typeOfPorosityDistributionForm = {
    qSelects: [
        {
            label: "Porosity Distribution",
            visible: true,
            value: "",
            actionName: "selectTypeOfPorosityDistribution",
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
    ]
}


const constantPorosityForm = {
    title: "Constant Porosity",
    qSelects: [],
    qInputs: [
        { label: "Porosity (fraction)", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
    ],
    qBtns: [
        {label: "Apply Constant Porosity", name: "ApplyConstantPorosity", icon: "add"},
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



const arrayPorosityDistributionForm = {
    title: "Porosity Distribution",
    qSelects: [
    ],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "Apply Porosity Distribution", name: "ApplyPorosityDistributionForm", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}


export { typeOfPorosityDistributionForm, constantPorosityForm, arrayPorosityDistributionForm }