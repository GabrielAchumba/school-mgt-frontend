const West = "West (i = 1; j = 1,...,ny; k = 1,...,nz)"
const East = "East (i = nx; j = 1,...,ny; k = 1,...,nz)"
const South = "South (i = 1,...,nx; j = 1; k = 1,...,nz)"
const North = "North (i = 1,...,nx; j = ny; k = 1,...,nz)"
const Top = "Top (i = 1,...,nx; j = 1,...,ny; k = 1)"
const Bottom = "Bottom (i = 1,...,nx; j = 1,...,ny; k = nz)"

const typeOfBoundariesDistributionForm = {
    qSelects: [
        {
            label: "Boundaries Distribution Type",
            visible: true,
            value: "",
            actionName: "selectTypeOfBoundariesDistribution",
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
                    type: "West",
                    value: "West",
                },
                {
                    id: 1,
                    type: "East",
                    value: "East",
                },
                {
                    id: 2,
                    type: "South",
                    value: "South",
                },
                {
                    id: 3,
                    type: "North",
                    value: "North",
                },
                {
                    id: 4,
                    type: "Top",
                    value: "Top",
                },
                {
                    id: 5,
                    type: "Bottom",
                    value: "Bottom",
                },
            ]
        }
    ]
}


const constantBoundariesForm = {
    title: "Constant Boundary Values",
    qSelects: [],
    qInputs: [
        { label: West, name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: East, name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: South, name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: North, name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: Top, name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: Bottom, name: "", type: "text",
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
    ],
    qBtns: [
        {label: "Apply Constant Boundaries", name: "ApplyConstantBoundaries", icon: "add"},
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

const arrayWestBoundaryDistributionForm = {
    title: West,
    qSelects: [
    ],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "Apply West Boundaries", name: "ApplyWestBoundaries", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const arrayEastBoundaryDistributionForm = {
    title: East,
    qSelects: [
    ],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "Apply East Boundaries", name: "ApplyEastBoundaries", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const arraySouthBoundaryDistributionForm = {
    title: South,
    qSelects: [
    ],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "Apply South Boundaries", name: "ApplySouthBoundaries", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const arrayNorthBoundaryDistributionForm = {
    title: North,
    qSelects: [
    ],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "Apply North Boundaries", name: "ApplyNorthBoundaries", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const arrayTopBoundaryDistributionForm = {
    title: Top,
    qSelects: [
    ],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "Apply Top Boundaries", name: "ApplyTopBoundaries", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}

const arrayBottomBoundaryDistributionForm = {
    title: Bottom,
    qSelects: [
    ],
    tables: [],
    qInputs: [],
    qBtns: [
        {label: "Apply Bottom Boundaries", name: "ApplyBottomBoundaries", icon: "add"},
    ],
    qDates: [],
    GroupedCheckBoxes: [],
}


export { constantBoundariesForm, arrayWestBoundaryDistributionForm, arrayEastBoundaryDistributionForm,
    arraySouthBoundaryDistributionForm, arrayNorthBoundaryDistributionForm,
    arrayTopBoundaryDistributionForm, arrayBottomBoundaryDistributionForm,
    typeOfBoundariesDistributionForm }