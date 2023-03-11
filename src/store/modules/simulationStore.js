const state = {
    geometry:{
        dimensions: {
            nx: 0,
            ny: 0,
            nz: 0,
        },
        gridding:{
            typeOfGridding: "Constant", //Constant, Range, Array,
            dx: 0,
            dy: 0,
            dz: 0,
            dxVector:[],
            dyVector:[],
            dzVector:[],
            dx3D:[],
            dy3D:[],
            dz3D:[]
        },
    },
    rock:{
        porosity:{
            typeOfPorositing: "Constant", //Constant, Range, Array,
            porosity: 0,
            porosity2D:[],
        },
        permeability:{
            typeOfPermeability: "Constant", //Constant, Range, Array,
            permeabilityX: 0,
            permeabilityY: 0,
            permeabilityZ: 0,
            permeabilityX2D:[],
            permeabilityY2D:[],
            permeabilityZ2D:[],
        },
    },
    pvt:{
        typeOfPVT: "Constant", //Constant, Array,
        oil:{
            pressure: 0,
            viscosity: 0,
            fVF: 0,
            solutionGOR: 0,
            table:[],
        },
        gas:{
            pressure: 0,
            viscosity: 0,
            fVF: 0,
            table:[],
        },
        water:{
            pressure: 0,
            viscosity: 0,
            fVF: 0,
            table:[],
        }
    },
    initialization:{
        typeOfInitialization: "Constant", //Constant, Array,
        pressure: 0,
        oilSaturation: 0,
        waterSaturation: 0,
        gasSaturation: 0,
        pressureArray: [],
        oilSaturationArray:[],
        waterSaturationArray:[],
        gasSaturationArray:[],
    },
    schedule:{
        typeOfSchedule: "Constant", //Constant, Array,
        timeStep: 0,
        duration: 0,
        table: []
    }
}

const getters = {
    geometry(state){
        return state.geometry;
    },
    rock(state){
        return state.rock;
    },
    pvt(state){
        return state.pvt;
    },
    initialization(state){
        return state.initialization;
    },
    schedule(state){
        return state.schedule;
    }
}

const mutations = {
    setDimensions(state, payload){
        state.geometry.dimensions = {...payload}
        console.log('dimensions: ', state.geometry.dimensions)
    },
    setXGridding(state, payload){
        state.geometry.gridding.typeOfGridding = payload.typeOfGridding
        state.geometry.gridding.dxVector = [...payload.dxVector]
        console.log('gridding: ', state.geometry.gridding)
    },
    setConstantGridding(state, payload){
        state.geometry.gridding.typeOfGridding = payload.typeOfGridding
        state.geometry.gridding.dx = payload.dx
        state.geometry.gridding.dy = payload.dy
        state.geometry.gridding.dz = payload.dz
        console.log('gridding: ', state.geometry.gridding)
    },
    setYGridding(state, payload){
        state.geometry.gridding.typeOfGridding = payload.typeOfGridding
        state.geometry.gridding.dyVector = [...payload.dyVector]
        console.log('gridding: ', state.geometry.gridding)
    },
    setZGridding(state, payload){
        state.geometry.gridding.typeOfGridding = payload.typeOfGridding
        state.geometry.gridding.dzVector = [...payload.dzVector]
        console.log('gridding: ', state.geometry.gridding)
    },
    setConstantPorositing(state, payload){
        state.rock.porosity.typeOfPorositing = payload.typeOfPorositing
        state.rock.porosity.porosity = payload.porosity
        console.log('porosity: ', state.rock.porosity)
    },
    setArrayPorositing(state, payload){
        state.rock.porosity.typeOfPorositing = payload.typeOfPorositing
        state.rock.porosity.porosity2D = [...payload.porosity2D]
        console.log('porosity: ', state.rock.porosity)
    },
    setConstantPermeability(state, payload){
        state.rock.permeability.typeOfPermeability = payload.typeOfPermeability
        state.rock.permeability.permeabilityX = payload.permeabilityX
        state.rock.permeability.permeabilityY = payload.permeabilityY
        state.rock.permeability.permeabilityZ = payload.permeabilityZ
        console.log('permeability: ', state.rock.permeability)
    },
    setXArrayPermeability(state, payload){
        state.rock.permeability.typeOfPermeability = payload.typeOfPermeability
        state.rock.permeability.permeabilityX2D = [...payload.permeabilityX2D]
        console.log('permeability: ', state.rock.permeability)
    },
    setYArrayPermeability(state, payload){
        state.rock.permeability.typeOfPermeability = payload.typeOfPermeability
        state.rock.permeability.permeabilityY2D = [...payload.permeabilityY2D]
        console.log('permeability: ', state.rock.permeability)
    },
    setZArrayPermeability(state, payload){
        state.rock.permeability.typeOfPermeability = payload.typeOfPermeability
        state.rock.permeability.permeabilityZ2D = [...payload.permeabilityZ2D]
        console.log('permeability: ', state.rock.permeability)
    },
    setConstantPVT(state, payload){
        state.pvt.typeOfPVT = payload.typeOfPVT
        state.pvt.oil.pressure = payload.pressure
        state.pvt.oil.viscosity = payload.oilViscosity
        state.pvt.oil.fVF = payload.oilFVF
        state.pvt.oil.solutionGOR = payload.solutionGOR
        state.pvt.gas.pressure = payload.pressure
        state.pvt.gas.viscosity = payload.gasViscosity
        state.pvt.gas.fVF = payload.gasFVF
        state.pvt.water.pressure = payload.pressure
        state.pvt.water.viscosity = payload.waterViscosity
        state.pvt.water.fVF = payload.waterFVF
        console.log('pvt: ', state.pvt)
    },
    setArrayOilPVT(state, payload){
        state.pvt.typeOfPVT = payload.typeOfPVT
        state.pvt.oil.table = [...payload.oilPVT]
        console.log('pvt: ', state.pvt)
    },
    setArrayGasPVT(state, payload){
        state.pvt.typeOfPVT = payload.typeOfPVT
        state.pvt.gas.table = [...payload.gasPVT]
        console.log('pvt: ', state.pvt)
    },
    setArrayWaterPVT(state, payload){
        state.pvt.typeOfPVT = payload.typeOfPVT
        state.pvt.water.table = [...payload.waterPVT]
        console.log('pvt: ', state.pvt)
    },
    setConstantInitialization(state, payload){
        state.initialization.typeOfInitialization = payload.typeOfInitialization
        state.initialization.pressure = payload.pressure
        state.initialization.oilSaturation = payload.oilSaturation
        state.initialization.waterSaturation = payload.waterSaturation
        state.initialization.gasSaturation = payload.gasSaturation
        console.log('initialization: ', state.initialization)
    },
    setPressureInitialization(state, payload){
        state.initialization.typeOfInitialization = payload.typeOfInitialization
        state.initialization.pressureArray = [...payload.pressureArray]
        console.log('initialization: ', state.initialization)
    },
    setOilSaturationInitialization(state, payload){
        state.initialization.typeOfInitialization = payload.typeOfInitialization
        state.initialization.oilSaturationArray = [...payload.oilSaturationArray]
        console.log('initialization: ', state.initialization)
    },
    setWaterSaturationInitialization(state, payload){
        state.initialization.typeOfInitialization = payload.typeOfInitialization
        state.initialization.waterSaturationArray = [...payload.waterSaturationArray]
        console.log('initialization: ', state.initialization)
    },
    setGasSaturationInitialization(state, payload){
        state.initialization.typeOfInitialization = payload.typeOfInitialization
        state.initialization.gasSaturationArray = [...payload.gasSaturationArray]
        console.log('initialization: ', state.initialization)
    },
    setConstantSchedule(state, payload){
        state.schedule.typeOfSchedule = payload.typeOfSchedule
        state.schedule.timeStep = payload.timeStep
        state.schedule.duration = payload.duration
        console.log('schedule: ', state.schedule)
    },
    setScheduleArray(state, payload){
        state.schedule.typeOfSchedule = payload.typeOfSchedule
        state.schedule.table = [...payload.table]
        console.log('schedule: ', state.schedule)
    },
}

const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}