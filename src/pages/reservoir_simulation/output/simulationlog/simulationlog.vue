<template>
    <div>
        <Form
        :formData="simulationLogForm"
        @run="run($event)"
        @close="close($event)"/>
    </div>
</template>

<script>
import Form from "../../../../components/Forms/Form.vue";
import { simulationLogForm } from "./simulationlogVM"
import { post } from "../../../../store/modules/services"

export default {
    components:{
        Form
    },
    data(){
        return {
            simulationLogForm: simulationLogForm,
            ARRAY: "Array",
        }
    },
    methods:{
        createBackendGeometryPayload(geometry){
            var context = this;
            const dxVector = []
            const dyVector = []
            const dzVector = []
            for (let i = 0; i < geometry.dimensions.nx; i++){
                if(geometry.gridding.typeOfGridding == context.ARRAY){
                    if(context.isNumeric(geometry.gridding.dxVector[i].dx)){
                        dxVector.push(Number(geometry.gridding.dxVector[i].dx))
                    }else{
                        dxVector.push(0)
                    }
                }else{
                    dxVector.push(Number(geometry.gridding.dx))
                }
            }
            for (let i = 0; i < geometry.dimensions.ny; i++){
                if(geometry.gridding.typeOfGridding == context.ARRAY){
                    if(context.isNumeric(geometry.gridding.dyVector[i].dy)){
                        dyVector.push(Number(geometry.gridding.dyVector[i].dy))
                    }else{
                        dyVector.push(0)
                    }
                }else{
                    dyVector.push(Number(geometry.gridding.dy))
                }
            }
            for (let i = 0; i < geometry.dimensions.nz; i++){
                if(geometry.gridding.typeOfGridding == context.ARRAY){
                    if(context.isNumeric(geometry.gridding.dzVector[i].dz)){
                        dzVector.push(Number(geometry.gridding.dzVector[i].dz))
                    }else{
                        dzVector.push(0)
                    }
                }else{
                    dzVector.push(Number(geometry.gridding.dz))
                }
            }

            const _geometry = {
                dimensions:{ ...geometry.dimensions },
                gridding: {
                    typeOfGridding: geometry.gridding.typeOfGridding,
                    dxVector,
                    dyVector,
                    dzVector,
                    
                }
            } 
            return _geometry;
        },
        createBackendRockPayload(rock, geometry){
            var context = this;
            const compressibilityArray = []
            const porosityArray = []
            const permeabilityXArray = []
            const permeabilityYArray = []
            const permeabilityZArray = []

            console.log('rock.permeability.permeabilityXArray: ', rock.permeability.permeabilityXArray)
            let counter = 0;
            for (let k = 0; k < geometry.dimensions.nz; k++){
                for (let j = 0; j < geometry.dimensions.ny; j++){
                    for (let i = 0; i < geometry.dimensions.nx; i++){
                        counter++;
                        if(rock.compressibility.typeOfCompressibility === context.ARRAY){
                            const row = rock.compressibility.compressibilityArray[j];
                            if(context.isNumeric(row[i])){
                                compressibilityArray.push(Number(row[i]))
                            }else{
                                compressibilityArray.push(0)
                            }
                        }else{
                            compressibilityArray.push(rock.compressibility.compressibility)
                        }
                        if(rock.porosity.typeOfPorositing === context.ARRAY){
                            const row = rock.porosity.porosityArray[j];
                            if(context.isNumeric(row[i+1])){
                                porosityArray.push(Number(row[i+1]))
                            }else{
                                porosityArray.push(0)
                            }
                        }else{
                            porosityArray.push(rock.porosity.porosity)
                        }
                        if(rock.permeability.typeOfPermeability === context.ARRAY){
                            const rowPermX = rock.permeability.permeabilityXArray[j];

                            if(context.isNumeric(rowPermX[i+1])){
                                permeabilityXArray.push(Number(rowPermX[i+1]))
                            }else{
                                permeabilityXArray.push(0)
                            }
                            const rowPermY = rock.permeability.permeabilityYArray[j];
                            if(context.isNumeric(rowPermY[i+1])){
                                permeabilityYArray.push(Number(rowPermY[i+1]))
                            }else{
                                permeabilityYArray.push(0)
                            }
                            const rowPermZ = rock.permeability.permeabilityZArray[j];
                            if(context.isNumeric(rowPermZ[i+1])){
                                permeabilityZArray.push(Number(rowPermZ[i+1]))
                            }else{
                                permeabilityZArray.push(0)
                            }
                        }else{
                            permeabilityXArray.push(rock.permeability.permeabilityX)
                            permeabilityYArray.push(rock.permeability.permeabilityY)
                            permeabilityZArray.push(rock.permeability.permeabilityZ)
                        }
                    }
                }
            }


            const _rock = {
                compressibility: {
                    typeOfCompressibility: rock.compressibility.typeOfCompressibility,
                    compressibilityArray,
                },
                porosity: {
                    typeOfPorositing: rock.porosity.typeOfPorositing,
                    porosityArray,
                },
                permeability: {
                    typeOfCompressibility: rock.permeability.typeOfPermeability,
                    permeabilityXArray,
                    permeabilityYArray,
                    permeabilityZArray,
                },
            } 
            return _rock;
        },
        createBackendPVTPayload(pvt){
            var context = this;
            let pressureOil = []
            let viscosityOil = []
            let fVFOil = []
            let solutionGOR = []
            let densityOil = []
            let compressibilityOil = []

            let pressureGas = []
            let viscosityGas = []
            let fVFGas = []
            let densityGas = []
            let compressibilityGas = []

            let pressureWater = []
            let viscosityWater = []
            let fVFWater = []
            let densityWater = []
            let compressibilityWater = []

            if(pvt.typeOfPVT === context.ARRAY){
                for (const row of pvt.oil.table){
                    if(context.isNumeric(row.pressure))pressureOil.push(row.pressure)
                    if(context.isNumeric(row.viscosity))viscosityOil.push(row.viscosity)
                    if(context.isNumeric(row.fVF))fVFOil.push(row.fVF)
                    if(context.isNumeric(row.solutionGOR))solutionGOR.push(row.solutionGOR)
                    if(context.isNumeric(row.density))densityOil.push(row.density)
                    if(context.isNumeric(row.compressibility))compressibilityOil.push(row.compressibility)
                }
                for (const row of pvt.gas.table){
                    if(context.isNumeric(row.pressure))pressureGas.push(row.pressure)
                    if(context.isNumeric(row.viscosity))viscosityGas.push(row.viscosity)
                    if(context.isNumeric(row.fVF))fVFGas.push(row.fVF)
                    if(context.isNumeric(row.density))densityGas.push(row.density)
                    if(context.isNumeric(row.compressibility))compressibilityGas.push(row.compressibility)
                }
                for (const row of pvt.water.table){
                    if(context.isNumeric(row.pressure))pressureWater.push(row.pressure)
                    if(context.isNumeric(row.viscosity))viscosityWater.push(row.viscosity)
                    if(context.isNumeric(row.fVF))fVFWater.push(row.fVF)
                    if(context.isNumeric(row.density))densityWater.push(row.density)
                    if(context.isNumeric(row.compressibility))compressibilityWater.push(row.compressibility)
                }

            }else{
                pressureOil = [pvt.oil.pressure]
                viscosityOil = [pvt.oil.viscosity]
                fVFOil = [pvt.oil.fVF]
                solutionGOR = [pvt.oil.solutionGOR]
                densityOil = [pvt.oil.density]
                compressibilityOil = [pvt.oil.compressibility]

                pressureGas = [pvt.gas.pressure]
                viscosityGas = [pvt.gas.viscosity]
                fVFGas = [pvt.gas.fVF]
                densityGas = [pvt.gas.density]
                compressibilityGas = [pvt.gas.compressibility]

                pressureWater = [pvt.water.pressure]
                viscosityWater = [pvt.water.viscosity]
                fVFWater = [pvt.water.fVF]
                densityWater = [pvt.water.density]
                compressibilityWater = [pvt.water.compressibility]
            }

            
            const _pvt = {
                typeOfPVT: pvt.typeOfPVT,
                oil: {
                    pressure: pressureOil,
                    viscosity: viscosityOil,
                    fVF: fVFOil,
                    solutionGOR: solutionGOR,
                    density: densityOil,
                    compressibility: compressibilityOil,
                },
                gas:{
                    pressure: pressureGas,
                    viscosity: viscosityGas,
                    fVF: fVFGas,
                    density: densityGas,
                    compressibility: compressibilityGas,

                },
                water:{
                    pressure: pressureWater,
                    viscosity: viscosityWater,
                    fVF: fVFWater,
                    density: densityWater,
                    compressibility: compressibilityWater,

                },
            }

            return _pvt;
        },
        createBackendInitializationPayload(initialization, geometry){
            var context = this;
            let pressure = []
            let oilSaturation = []
            let waterSaturation = []
            let gasSaturation = []
            let counter = -1;
            for (let k = 0; k < geometry.dimensions.nz; k++){
                for (let j = 0; j < geometry.dimensions.ny; j++){
                    for (let i = 0; i < geometry.dimensions.nx; i++){
                        counter++;
                        if(initialization.typeOfInitialization == context.ARRAY){
                            const rowPr = initialization.pressureArray[j]
                            const rowSo = initialization.oilSaturationArray[j]
                            const rowSw = initialization.waterSaturationArray[j]
                            const rowSg = initialization.gasSaturationArray[j]
                            if(context.isNumeric(rowPr[i]))pressure.push(Number(rowPr[i]))
                            else pressure.push(0)
                            if(context.isNumeric(rowSo[i]))oilSaturation.push(Number(rowSo[i]))
                            else oilSaturation.push(0)
                            if(context.isNumeric(rowSw[i]))waterSaturation.push(Number(rowSw[i]))
                            else waterSaturation.push(0)
                            if(context.isNumeric(rowSg[i]))gasSaturation.push(Number(rowSg[i]))
                            else gasSaturation.push(0)
                        }else{
                            pressure.push(initialization.pressure)
                            oilSaturation.push(initialization.oilSaturation)
                            waterSaturation.push(initialization.waterSaturation)
                            gasSaturation.push(initialization.gasSaturation)
                        }
                    }
                }
            }

            const _initialization = {
                typeOfInitialization: initialization.typeOfInitialization,
                pressure,
                oilSaturation,
                waterSaturation,
                gasSaturation,
            }

            return _initialization;
        },
        isNumeric(n){
            return !isNaN(parseFloat(n)) && isFinite(n);
        },
        incrementing(step, duration) {
            let mat = []

            if (duration === step) {
                mat = [0, step]
            }else{
                let i = 0
                while (i < duration) {
                    mat.push(i)
                    i = i + step;
                }
            }
            return mat
        },
        createBackendSchedulePayload(schedule){
            var context = this;
            let cumulativeTime = []
            console.log("schedule.table: ", schedule.table)
            if(schedule.typeOfSchedule === context.ARRAY){
                for(let i = 0; i < schedule.table.length; i++){
                    if(context.isNumeric(schedule.table[i].time)){
                       cumulativeTime.push(Number(schedule.table[i].time)) 
                    }
                }
            }else{
                cumulativeTime = context.incrementing(schedule.timeStep, schedule.duration)
            }

            const _schedule = {
                typeOfSchedule: schedule.typeOfSchedule,
                cumulativeTime,

            }

            return _schedule;
        },
        createBackendBoundariesPayload(boundaries, geometry){
            var context = this;
            let i = 0;
            let j = 0;
            let k = 0;
            let west = []
            let east = []
            for(k = 0; k < geometry.dimensions.nz; k++){
                for(j = 0; j < geometry.dimensions.ny; j++){
                    if(boundaries.typeOfBoundaries === context.ARRAY){
                        west.push({
                            boundaryCondition: boundaries.westArray[j].boundaryCondition, 
                            flowRate: context.isNumeric(boundaries.westArray[j].value) ? Number(boundaries.westArray[j].value): 0,
                            pressureGradient: context.isNumeric(boundaries.westArray[j].value) ? Number(boundaries.westArray[j].value): 0,
                            constantPressure: context.isNumeric(boundaries.westArray[j].value) ? Number(boundaries.westArray[j].value): 0,
                            i: 0,
                            j: j,
                            k: k,
                        })
                        east.push({
                            boundaryCondition: boundaries.eastArray[j].boundaryCondition, 
                            flowRate: context.isNumeric(boundaries.eastArray[j].value) ? Number(boundaries.eastArray[j].value): 0,
                            pressureGradient: context.isNumeric(boundaries.eastArray[j].value) ? Number(boundaries.eastArray[j].value): 0,
                            constantPressure: context.isNumeric(boundaries.eastArray[j].value) ? Number(boundaries.eastArray[j].value): 0,
                            i: geometry.dimensions.nx-1,
                            j: j,
                            k: k,
                        })
                    }else{
                        west.push({
                            boundaryCondition: boundaries.west.boundaryCondition, 
                            flowRate: context.isNumeric(boundaries.west.value) ? Number(boundaries.west.value): 0,
                            pressureGradient: context.isNumeric(boundaries.west.value) ? Number(boundaries.west.value): 0,
                            constantPressure: context.isNumeric(boundaries.west.value) ? Number(boundaries.west.value): 0,
                            i: 0,
                            j: j,
                            k: k,
                        })
                        east.push({
                            boundaryCondition: boundaries.west.boundaryCondition, 
                            flowRate: context.isNumeric(boundaries.east.value) ? Number(boundaries.east.value): 0,
                            pressureGradient: context.isNumeric(boundaries.east.value) ? Number(boundaries.east.value): 0,
                            constantPressure: context.isNumeric(boundaries.east.value) ? Number(boundaries.east.value): 0,
                            i: geometry.dimensions.nx-1,
                            j: j,
                            k: k,
                        })

                    }
                }
            }

            let south = []
            let north = []
            for(k = 0; k < geometry.dimensions.nz; k++){
                for(i = 0; i < geometry.dimensions.nx; i++){
                    if(boundaries.typeOfBoundaries === context.ARRAY){
                        south.push({
                            boundaryCondition: boundaries.southArray[j].boundaryCondition, 
                            flowRate: context.isNumeric(boundaries.southArray[j].value) ? Number(boundaries.southArray[j].value): 0,
                            pressureGradient: context.isNumeric(boundaries.southArray[j].value) ? Number(boundaries.southArray[j].value): 0,
                            constantPressure: context.isNumeric(boundaries.southArray[j].value) ? Number(boundaries.southArray[j].value): 0,
                            i: i,
                            j: 0,
                            k: k,
                        })
                        north.push({
                            boundaryCondition: boundaries.northArray[j].boundaryCondition, 
                            flowRate: context.isNumeric(boundaries.northArray[j].value) ? Number(boundaries.northArray[j].value): 0,
                            pressureGradient: context.isNumeric(boundaries.northArray[j].value) ? Number(boundaries.northArray[j].value): 0,
                            constantPressure: context.isNumeric(boundaries.northArray[j].value) ? Number(boundaries.northArray[j].value): 0,
                            i: i,
                            j: geometry.dimensions.ny-1,
                            k: k,
                        })
                    }else{
                        south.push({
                            boundaryCondition: boundaries.south.boundaryCondition, 
                            flowRate: context.isNumeric(boundaries.south.value) ? Number(boundaries.south.value): 0,
                            pressureGradient: context.isNumeric(boundaries.south.value) ? Number(boundaries.south.value): 0,
                            constantPressure: context.isNumeric(boundaries.south.value) ? Number(boundaries.south.value): 0,
                            i: i,
                            j: 0,
                            k: k,
                        })
                        north.push({
                            boundaryCondition: boundaries.north.boundaryCondition, 
                            flowRate: context.isNumeric(boundaries.north.value) ? Number(boundaries.north.value): 0,
                            pressureGradient: context.isNumeric(boundaries.north.value) ? Number(boundaries.north.value): 0,
                            constantPressure: context.isNumeric(boundaries.north.value) ? Number(boundaries.north.value): 0,
                            i: i,
                            j: geometry.dimensions.ny-1,
                            k: k,
                        })

                    }
                }
            }

            let top = []
            let bottom = []
            for(j = 0; j < geometry.dimensions.ny; j++){
                for(i = 0; i < geometry.dimensions.nx; i++){
                    if(boundaries.typeOfBoundaries === context.ARRAY){
                        top.push({
                            boundaryCondition: boundaries.topArray[j].boundaryCondition, 
                            flowRate: context.isNumeric(boundaries.topArray[j].value) ? Number(boundaries.topArray[j].value): 0,
                            pressureGradient: context.isNumeric(boundaries.topArray[j].value) ? Number(boundaries.topArray[j].value): 0,
                            constantPressure: context.isNumeric(boundaries.topArray[j].value) ? Number(boundaries.topArray[j].value): 0,
                            i: i,
                            j: j,
                            k: 0,
                        })
                        bottom.push({
                            boundaryCondition: boundaries.bottomArray[j].boundaryCondition, 
                            flowRate: context.isNumeric(boundaries.bottomArray[j].value) ? Number(boundaries.bottomArray[j].value): 0,
                            pressureGradient: context.isNumeric(boundaries.bottomArray[j].value) ? Number(boundaries.bottomArray[j].value): 0,
                            constantPressure: context.isNumeric(boundaries.bottomArray[j].value) ? Number(boundaries.bottomArray[j].value): 0,
                            i: i,
                            j: j,
                            k: geometry.dimensions.nz-1,
                        })
                    }else{
                        top.push({
                            boundaryCondition: boundaries.top.boundaryCondition, 
                            flowRate: context.isNumeric(boundaries.top.value) ? Number(boundaries.top.value): 0,
                            pressureGradient: context.isNumeric(boundaries.top.value) ? Number(boundaries.top.value): 0,
                            constantPressure: context.isNumeric(boundaries.top.value) ? Number(boundaries.top.value): 0,
                            i: i,
                            j: j,
                            k: 0,
                        })
                        bottom.push({
                            boundaryCondition: boundaries.bottom.boundaryCondition, 
                            flowRate: context.isNumeric(boundaries.bottom.value) ? Number(boundaries.bottom.value): 0,
                            pressureGradient: context.isNumeric(boundaries.bottom.value) ? Number(boundaries.bottom.value): 0,
                            constantPressure: context.isNumeric(boundaries.bottom.value) ? Number(boundaries.bottom.value): 0,
                            i: i,
                            j: j,
                            k:geometry.dimensions.nz-1,
                        })

                    }
                }
            }

            const _boundaries = {
                typeOfBoundaries: boundaries.typeOfBoundaries,
                west,
                east,
                south,
                north,
                top,
                bottom,
            }

            return _boundaries;

        },
        async run(){
            var context = this;
            const geometry = this.$store.getters["simulationStore/geometry"]
            const rock = this.$store.getters["simulationStore/rock"]
            const pvt = this.$store.getters["simulationStore/pvt"]
            const initialization = this.$store.getters["simulationStore/initialization"]
            const schedule = this.$store.getters["simulationStore/schedule"]
            const boundaries = this.$store.getters["simulationStore/boundaries"]
            const wells = this.$store.getters["simulationStore/wells"].map((row) => {
                const _row = {...row}
                _row.i = row.i - 1
                _row.j = row.j - 1
                _row.k = row.j - 1,
                _row.oilRate =  row.rate
                _row.gasRate =  row.rate
                _row.waterRate =  row.rate
                return _row
            })

            const payload = {
                url: "simulation/run",
                req: { 
                    geometry: context.createBackendGeometryPayload(geometry),
                    rock: context.createBackendRockPayload(rock, geometry), 
                    pvt: context.createBackendPVTPayload(pvt), 
                    initialization: context.createBackendInitializationPayload(initialization, geometry), 
                    schedule: context.createBackendSchedulePayload(schedule), 
                    boundaries: context.createBackendBoundariesPayload(boundaries, geometry), 
                    wells 
                }
            }

            console.log("payload: ", payload)

            const response = await post(payload)
            //setSpaceDistributions
            const { 
                data : {
                    data: result,
                    success,
                    message,
                }
            } = response
            console.log("result: ", result)
            this.$store.commit("simulationStore/setSpaceDistributions", result)

        },
        close(){
            this.$router.push("/olasim")
        }
    }
}
</script>
