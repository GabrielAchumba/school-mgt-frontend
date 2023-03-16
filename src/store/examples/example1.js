const wellID = Date.now().toString()
const wellName = "Well 1"

export const example1 = {
    id: "Example 1",
    type: "Example 1",
    name: "Example 1",
    value: "Example 1",
    geometry: {
        dimensions: {
            nx: 5,
            ny: 1,
            nz: 1,
        },
        gridding:{
            typeOfGridding: "Constant",
            dx: 1000,
            dy: 1000,
            dz: 75,
            dxVecor:[],
            dyVector:[],
            dzVector:[],
            dx3D:[],
            dy3D:[],
            dz3D:[]
        },
    },
    rock:{
        compressibility:{
            typeOfCompressibility: "Constant",
            compressibility: 2.5 * Math.pow(10, -6),
            compressibilityArray:[],
        },
        porosity:{
            typeOfPorositing: "Constant",
            porosity: 0.18,
            porosityArray:[],
        },
        permeability:{
            typeOfPermeability: "Constant",
            permeabilityX: 15,
            permeabilityY: 0,
            permeabilityZ: 0,
            permeabilityXArray:[],
            permeabilityYArray:[],
            permeabilityZArray:[],
        },
    },
    pvt:{
        typeOfPVT: "Constant", 
        oil:{
            pressure: 6000,
            viscosity: 10,
            fVF: 1,
            solutionGOR: 0,
            density: 0,
            compressibility: 1 * Math.pow(10, -6),
            table:[],
        },
        gas:{
            pressure: 0,
            viscosity: 0,
            fVF: 0,
            density: 0,
            compressibility: 0,
            table:[],
        },
        water:{
            pressure: 0,
            viscosity: 0,
            fVF: 0,
            density: 0,
            compressibility: 0,
            table:[],
        }
    },
    initialization:{
        typeOfInitialization: "Constant",
        pressure: 6000,
        oilSaturation: 1,
        waterSaturation: 0,
        gasSaturation: 0,
        pressureArray: [],
        oilSaturationArray:[],
        waterSaturationArray:[],
        gasSaturationArray:[],
    },
    schedule:{
        typeOfSchedule: "Constant", //Constant, Array,
        timeStep: 10,
        duration: 10,
        table: []
    },
    boundaries:{
        typeOfBoundaries: "Constant", //Constant, Range, Array,
        west: {boundaryCondition: "Closed", value: 0},
        east: {boundaryCondition: "Closed", value: 0},
        south: {boundaryCondition: "Closed", value: 0},
        north: {boundaryCondition: "Closed", value: 0},
        top: {boundaryCondition: "Closed", value: 0},
        bottom: {boundaryCondition: "Closed", value: 0},
        westArray:[],
        eastArray:[],
        southArray:[],
        northArray: [],
        topArray: [],
        bottomArray: [],
    },
    wells: [
        {
            wellID: wellID,
            letter: wellName.charAt(0),
            name: wellName,
            address: "",
            i: 4,
            j: 1,
            k: 1,
            wellType: "Oil Producer",
            wellCondition: "Constant Rate",
            rate: 150,
            bottomHolePressureDatumDepth: 0,
            wellBoreRadius: 0,
            perforationIntervals: [
                { segmentLength: 0 }
            ],
        }
    ],
}