const wellID = Date.now().toString()
const wellName = "Well 1"

export const example2 = {
    id: "Example 2",
    type: "Example 2",
    name: "Example 2",
    value: "Example 1",
    geometry: {
        dimensions: {
            nx: 3,
            ny: 2,
            nz: 1,
        },
        gridding:{
            typeOfGridding: "Constant",
            dx: 600,
            dy: 600,
            dz: 40,
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
            compressibility: 3 * Math.pow(10, -6),
            compressibilityArray:[],
        },
        porosity:{
            typeOfPorositing: "Array",
            porosity: 0.11,
            porosityArray:[
                {"ji": 1, "1": 0.11, "2": 0.11, "3": 0.11}, 
                {"ji": 2, "1": 0.11, "2": 0.11, "3": 0}
            ],
        },
        permeability:{
            typeOfPermeability: "Array",
            permeabilityX: 42,
            permeabilityY: 42,
            permeabilityZ: 0,
            permeabilityXArray:[
                {"ji": 1, "1": 42, "2": 42, "3": 42}, 
                {"ji": 2, "1": 42, "2": 42, "3": 0}
            ],
            permeabilityYArray:[
                {"ji": 1, "1": 42, "2": 42, "3": 42}, 
                {"ji": 2, "1": 42, "2": 42, "3": 0}
            ],
            permeabilityZArray:[0, 0, 0, 0, 0, 0],
        },
    },
    pvt:{
        typeOfPVT: "Constant", 
        oil:{
            pressure: 3600,
            viscosity: 3.4,
            fVF: 0.941,
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
        pressure: 3600,
        oilSaturation: 1,
        waterSaturation: 0,
        gasSaturation: 0,
        pressureArray: [],
        oilSaturationArray:[],
        waterSaturationArray:[],
        gasSaturationArray:[],
    },
    schedule:{
        typeOfSchedule: "Array", //Constant, Array,
        timeStep: 10,
        duration: 10,
        table: [{sn: 1, time: 0}, {sn: 2, time: 30}, {sn: 3, time: 60}]
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
            i: 2,
            j: 1,
            k: 1,
            wellType: "Oil Producer",
            wellCondition: "Constant BHP",
            rate: 0,
            bottomHolePressureDatumDepth: 1400,
            wellBoreRadius: 0.24,
            perforationIntervals: [
                { segmentLength: 0 }
            ],
        }
    ],
}