const typeOfScheduleForm = {
    qSelects: [
        {
            label: "Schedule",
            visible: true,
            value: "",
            actionName: "selectTypeOfSchedule",
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


const constantTimeStepForm = {
    title: "Constant Time Step",
    qSelects: [],
    qInputs: [
        { label: "Time Step (days)", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Simulation Duration (days)", name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
    ],
    qBtns: [
        {label: "Apply Constant Time Step", name: "ApplyConstantTimeStep", icon: "add"},
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



const arrayTimeStepForm = {
    title: "Simulation Duration Array (days)",
    qSelects: [
    ],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "ApplyDurationArray", name: "ApplyDurationArray", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

export { typeOfScheduleForm, constantTimeStepForm, arrayTimeStepForm }