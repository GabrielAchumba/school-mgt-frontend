const state = {
    variables: [],
    selectedVariable: {},
    seriesCollection: [],
    layout: {
        showlegend: true,
        title: "Gas Rate",
        xaxis: {
        title: "Date",
        titlefont: {
            family: "Arial, sans-serif",
            size: 14,
            color: "black"
        },
        showticklabels: true,
        tickangle: "auto",
        tickfont: {
            family: "Old Standard TT, serif",
            size: 14,
            color: "black"
        },
        showgrid: true,
        showline: true,
        mirror: "ticks",
        gridcolor: "#bdbdbd",
        gridwidth: 2,
        zerolinecolor: "#969696",
        zerolinewidth: 4,
        linecolor: "#636363",
        linewidth: 4
        },
        yaxis: {
        title: "Gas Rate (MMScf)",
        titlefont: {
            family: "Arial, sans-serif",
            size: 14,
            color: "black"
        },
        showticklabels: true,
        tickangle: 45,
        tickfont: {
            family: "Old Standard TT, serif",
            size: 14,
            color: "black"
        },
        showgrid: true,
        showline: true,
        mirror: "ticks",
        gridcolor: "#bdbdbd",
        gridwidth: 2,
        zerolinecolor: "#969696",
        zerolinewidth: 4,
        linecolor: "#636363",
        linewidth: 4
        }
    },
}

const getters = {
    variables(state){
        return state.variables;
    },
    selectedVariable(state){
        return state.selectedVariable;
    },
    seriesCollection(state){
        return state.seriesCollection;
    },
    layout(state){
        return state.layout;
    }
}

const mutations = {
    setVariables(state, payload){
        state.variables = {
            ...state.variables,
            ...payload,
        }
    },
    selectedVariable(state, payload){
        state.selectedVariable = payload;
    },
    setSeriesCollection(state, payload){
        state.seriesCollection = {
            ...state.seriesCollection,
            ...payload,
        };
    },
    addSeries(state, payload){
        state.seriesCollection.push(payload);
        console.log("state.seriesCollection: ", state.seriesCollection)
    },
    clearSeries(state){
      state.seriesCollection = []
    },
    setLayout(state, payload){
        state.layout.title = payload.chartTitle;
        state.layout.xaxis.title = payload.xAxisTitle;
        state.layout.yaxis.title = payload.yAxisTitle;
        console.log("state.layout: ", state.layout);
    },
    getSelectedVariable(state, payload) {
        state.selectedVariable = payload.selectedItem;
        var isStackedArea = payload.isStackedArea;
        var kk = payload.facilityIndex;
        var scenarioIndex = payload.scenarioIndex;
        state.seriesCollection = [];
        var i = 0;
        var nCount = state.variables.length;
        for (i = 0; i < nCount; i++) {
          if (state.variables[i].variableName == state.selectedVariable.variableName) {
            var FaclitiesObject = state.resultWells;
            var scenarioNames = Object.keys(FaclitiesObject);
            //console.log("scenarioNames: ", scenarioNames);
            var scenarioOne = FaclitiesObject[scenarioNames[scenarioIndex]];
            var facilityNames = Object.keys(scenarioOne);
            console.log("facilityNames: ", facilityNames);
            //.log("facilityNames: ", facilityNames);
            //var kk = 0;
            //for(kk = 0; kk < facilityNames.length; kk++){
    
            var FacilityOne = scenarioOne[facilityNames[kk]];
            //console.log("FacilityOne: ", FacilityOne);
            var wellNames = Object.keys(FacilityOne);
            //console.log("wellNames: ", wellNames);
            var k = 0;
    
            for (k = 0; k < wellNames.length; k++) {
              var WellOne = FacilityOne[wellNames[k]];
              //console.log("WellOne: ", WellOne);
              var seriesName = `${wellNames[k]} (${facilityNames[kk]})`;
              var j = 0;
              var length = WellOne.resultWells.length;
              var series = {};
              if (isStackedArea == false) {
                series = {
                  x: [],
                  y: [],
                  cutBackRatios: [],
                  line: {
                    shape: "spline"
                  },
                  mode: "lines",
                  type: "scatter",
                  name: seriesName
                };
              } else {
                series = {
                  x: [],
                  y: [],
                  cutBackRatios: [],
                  stackgroup: "one",
                  line: {
                    shape: "spline"
                  },
                  name: seriesName
                };
              }
    
              //console.log("WellOne.resultWells.length: ", length);
              for (j = 0; j < length; j++) {
                if (WellOne.resultWells[j].year > 0) {
                  var year = WellOne.resultWells[j].year;
                  var month = "" + WellOne.resultWells[j].month;
                  var day = "" + WellOne.resultWells[j].day;
    
                  if (month.length < 2) month = "0" + month;
                  if (day.length < 2) day = "0" + day;
    
                  var d = [year, month, day].join("-");
                  d = d + " 22:23:00";
                  series.x.push(d);
                  series.cutBackRatios.push(WellOne.resultWells[j].cutBackRatio);
    
                  //console.log(state.selectedVariable.variableName);
    
                  switch (state.selectedVariable.variableName) {
                    case "gasRate":
                      series.y.push(WellOne.resultWells[j].gasRate);
                      state.layout.title = "Gas Rate";
                      state.layout.yaxis.title = "Gas Rate (MMscf)";
                      break;
    
                    case "oilRate":
                      series.y.push(WellOne.resultWells[j].oilRate);
                      state.layout.title = "Oil Rate";
                      state.layout.yaxis.title = "Oil Rate (stb)";
                      break;
    
                    case "waterRate":
                      series.y.push(WellOne.resultWells[j].waterRate);
                      state.layout.title = "Water Rate";
                      state.layout.yaxis.title = "Water Rate (stb)";
                      break;
                    case "liquidRate":
                      series.y.push(WellOne.resultWells[j].liquidRate);
                      state.layout.title = "Liquid Rate";
                      state.layout.yaxis.title = "Liquid Rate (stb)";
                      break;
    
                    case "gOR":
                      series.y.push(WellOne.resultWells[j].gOR);
                      state.layout.title = "GOR";
                      state.layout.yaxis.title = "GOR (scf/stb)";
                      break;
    
                    case "cGR":
                      series.y.push(WellOne.resultWells[j].cGR);
                      state.layout.title = "CGR";
                      state.layout.yaxis.title = "CGR (stb/MMscf)";
                      break;
    
                    case "bSW":
                      series.y.push(WellOne.resultWells[j].bSW);
                      state.layout.title = "BSW";
                      state.layout.yaxis.title = "BSW (percent)";
                      break;
    
                    case "wGR":
                      series.y.push(WellOne.resultWells[j].wGR);
                      state.layout.title = "WGR";
                      state.layout.yaxis.title = "WGR (stb/MMscf)";
                      break;
    
                    case "cumOilProd":
                      series.y.push(WellOne.resultWells[j].cumOilProd);
                      state.layout.title = "Cum. Oil Production";
                      state.layout.yaxis.title = "Cum. Oil Production (MMstb)";
                      break;
    
                    case "cumGasProd":
                      series.y.push(WellOne.resultWells[j].cumGasProd);
                      state.layout.title = "Cum. Gas Production";
                      state.layout.yaxis.title = "Cum. Gas Production (MMscf)";
                      break;
                    case "cumWaterProd":
                      series.y.push(WellOne.resultWells[j].cumWaterProd);
                      state.layout.title = "Cum Water Production";
                      state.layout.yaxis.title = "Cum Water Production (MMstb)";
                      break;
                    case "uRo":
                      series.y.push(WellOne.resultWells[j].uRo);
                      state.layout.title = "Oil Ultimate Recovery";
                      state.layout.yaxis.title = "Oil Ultimate Recovery (MMstb)";
                      break;
                    case "uRg":
                      series.y.push(WellOne.resultWells[j].uRg);
                      state.layout.title = "Gas Ultimate Recovery";
                      state.layout.yaxis.title = "Gas Ultimate Recovery (MMscf)";
                      break;
                    case "gasOwnUse":
                      series.y.push(WellOne.resultWells[j].gasOwnUse);
                      state.layout.title = "Gas Own Use";
                      state.layout.yaxis.title = "gasOwnUse (MMscf/day)";
                      break;
                    case "gasDemand":
                      series.y.push(WellOne.resultWells[j].gasDemand);
                      state.layout.title = "Sales Gas";
                      state.layout.yaxis.title = "Sales Gas (MMscf/day)";
                      break;
                    case "gasFlared":
                      series.y.push(WellOne.resultWells[j].gasFlared);
                      state.layout.title =  "Gas Flared";
                      state.layout.yaxis.title = "Flared Gas (MMscf/day)";
                      break;
                    case "crudeOilLossess":
                      series.y.push(WellOne.resultWells[j].crudeOilLossess);
                      state.layout.title = "Crude Oil Lossess";
                      state.layout.yaxis.title = "Crude Oil Lossess (MMstb/day)";
                      break;
                    case "cutBackRatio":
                      series.y.push(WellOne.resultWells[j].cutBackRatio);
                      state.layout.title = "Cut Back Ratio";
                      state.layout.yaxis.title = "Cut Back Ratio (fraction)";
                      break;
                    case "declineRate":
                      series.y.push(WellOne.resultWells[j].declineRate);
                      state.layout.title = "Decline Rate";
                      state.layout.yaxis.title = "Decline Rate (1/day)";
                      break;
                  }
                }
              }
    
              state.seriesCollection.push(copy(series));
            }
            //}
    
            state.variables[i].isSelected = true;
          } else {
            state.variables[i].isSelected = false;
          }
        }
    
        console.log("seriesCollection: ", state.seriesCollection);
      },
}

const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}