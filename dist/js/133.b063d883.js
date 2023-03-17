(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[133],{"275a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md"},[a("Form",{attrs:{formData:e.typeOfPVTProfileForm,isFormTitle:e.isTypeOfPVTProfileFormTitle},on:{selectTypeOfPVTProfile:function(t){return e.selectTypeOfPVTProfile(t)},selectTypeOfFluidAction:function(t){return e.selectTypeOfFluidAction(t)}}}),e.isConstant?a("Form",{attrs:{formData:e.constantPVTForm},on:{ApplyConstantPVT:function(t){return e.ApplyConstantPVT(t)}}}):e._e(),e.isArray?a("div",{staticClass:"col-12"},[e.isOilArray?a("Form",{attrs:{formData:e.arrayOilPVTProfileForm},on:{ApplyOilPVTTableForm:function(t){return e.ApplyOilPVTTableForm(t)}}}):e._e(),e.isWaterArray?a("Form",{attrs:{formData:e.arrayWaterPVTProfileForm},on:{ApplyWaterPVTTableForm:function(t){return e.ApplyWaterPVTTableForm(t)}}}):e._e(),e.isGasArray?a("Form",{attrs:{formData:e.arrayGasPVTProfileForm},on:{ApplyGasPVTTableForm:function(t){return e.ApplyGasPVTTableForm(t)}}}):e._e()],1):e._e()],1)},s=[],l=(a("456d"),a("8a81"),a("d25f"),a("9986"),a("8e6e"),a("c47a")),i=a.n(l),o=a("4db1"),n=a.n(o),p=(a("c5f6"),a("7f7f"),a("6d67"),a("06db"),a("6b54"),a("9437")),c={qSelects:[{label:"PVT Profile",visible:!0,value:"",actionName:"selectTypeOfPVTProfile",list:[{id:0,type:"Constant",value:"Constant"},{id:1,type:"Array",value:"Array"}]},{label:"Fluid Type",visible:!0,value:"",actionName:"selectTypeOfFluidAction",list:[{id:0,type:"Oil",value:"Oil"},{id:1,type:"Water",value:"Water"},{id:2,type:"Gas",value:"Gas"}]}]},m={title:"Constant PVT",qSelects:[],qInputs:[{label:"Pressure (psia)",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Oil FVF (rb/stb)",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Oil Viscosity (cp)",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Solution GOR (scf/stb)",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Water FVF (rb/stb)",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Water Viscosity (cp)",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Gas FVF (rb/scf)",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Gas Viscosity (cp)",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Apply Constant PVT",name:"ApplyConstantPVT",icon:"add"}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""}},y={title:"Oil PVT Table",qSelects:[],tables:[],qInputs:[],qBtns:[{label:"Apply Oil PVT Table",name:"ApplyOilPVTTableForm",icon:"add"}],qDates:[],GroupedCheckBoxes:[]},T={title:"Water PVT Table",qSelects:[],tables:[],qInputs:[],qBtns:[{label:"Apply Water PVT Table",name:"ApplyWaterPVTTableForm",icon:"add"}],qDates:[],GroupedCheckBoxes:[]},P={title:"Gas PVT Table",qSelects:[],tables:[],qInputs:[],qBtns:[{label:"Apply Gas PVT Table",name:"ApplyGasPVTTableForm",icon:"add"}],qDates:[],GroupedCheckBoxes:[]};function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var V={components:{Form:p["a"]},data:function(){return{isTypeOfPVTProfileFormTitle:!1,isConstant:!0,isArray:!1,isOilArray:!1,isWaterArray:!1,isGasArray:!1,selectedPVT:{},selectedFluidType:{},typeOfPVTProfileForm:c,constantPVTForm:m,arrayOilPVTProfileForm:y,arrayWaterPVTProfileForm:T,arrayGasPVTProfileForm:P,oilPVTArray:[],waterPVTArray:[],gasPVTArray:[]}},methods:{Cancel:function(){this.$router.push("/olasim")},ApplyConstantPVT:function(){var e=this,t={typeOfPVT:e.selectedPVT.type,pressure:Number(e.constantPVTForm.qInputs[0].name),oilFVF:Number(e.constantPVTForm.qInputs[1].name),oilViscosity:Number(e.constantPVTForm.qInputs[2].name),solutionGOR:Number(e.constantPVTForm.qInputs[3].name),waterFVF:Number(e.constantPVTForm.qInputs[4].name),waterViscosity:Number(e.constantPVTForm.qInputs[5].name),gasFVF:Number(e.constantPVTForm.qInputs[6].name),gasViscosity:Number(e.constantPVTForm.qInputs[7].name)};this.$store.commit("simulationStore/setConstantPVT",t)},ApplyOilPVTTableForm:function(){var e=this,t={typeOfPVT:e.selectedPVT.type,oilPVT:n()(e.arrayOilPVTProfileForm.tables[0].rows)};console.log("payload: ",t),this.$store.commit("simulationStore/setArrayOilPVT",t)},ApplyWaterPVTTableForm:function(){var e=this,t={typeOfPVT:e.selectedPVT.type,waterPVT:n()(e.arrayWaterPVTProfileForm.tables[0].rows)};console.log("payload: ",t),this.$store.commit("simulationStore/setArrayWaterPVT",t)},ApplyGasPVTTableForm:function(){var e=this,t={typeOfPVT:e.selectedPVT.type,gasPVT:n()(e.arrayGasPVTProfileForm.tables[0].rows)};console.log("payload: ",t),this.$store.commit("simulationStore/setArrayGasPVT",t)},selectTypeOfPVTProfile:function(e){var t=this;switch(t.selectedPVT=t.typeOfPVTProfileForm.qSelects[0].list[e.value],t.isConstant=!1,t.isArray=!1,e.value){case 0:t.isConstant=!0,t.typeOfPVTProfileForm.qSelects[1].visible=!1;break;case 1:t.isArray=!0,t.typeOfPVTProfileForm.qSelects[1].visible=!0;break}},selectTypeOfFluidAction:function(e){var t=this;t.selectedFluidType=t.typeOfPVTProfileForm.qSelects[1].list[e.value];var a=this.$store.getters["simulationStore/pvt"];switch(t.isOilArray=!1,t.isWaterArray=!1,t.isGasArray=!1,e.value){case 0:t.isOilArray=!0,a.oil.table.length>0&&(t.arrayOilPVTProfileForm.tables[0].rows=a.oil.table.map((function(e){return f({},e)})));break;case 1:t.isWaterArray=!0,a.gas.table.length>0&&(t.arrayWaterPVTProfileForm.tables[0].rows=a.gas.table.map((function(e){return f({},e)})));break;case 2:t.isGasArray=!0,a.water.table.length>0&&(t.arrayGasPVTProfileForm.tables[0].rows=a.water.table.map((function(e){return f({},e)})));break}}},created:function(){var e=this;e.constantPVTForm.clearQInputs();var t=this.$store.getters["simulationStore/pvt"];e.arrayOilPVTProfileForm.tables=[],e.arrayWaterPVTProfileForm.tables=[],e.arrayGasPVTProfileForm.tables=[],e.oilPVTArray=[],e.waterPVTArray=[],e.gasPVTArray=[];var a=[];a.push({name:"sn",label:"SN",field:"",align:"left",type:""}),a.push({name:"pressure",label:"Pressure (psia)",field:"",align:"left",type:"",isText:!0}),a.push({name:"solutionGOR",label:"Solution GOR",field:"",align:"left",type:"",isText:!0}),a.push({name:"oilFVF",label:"Oil FVF (rb/stb)",field:"",align:"left",type:"",isText:!0}),a.push({name:"oilViscosity",label:"Oil Viscosity (cp)",field:"",align:"left",type:"",isText:!0});var r=[];r.push({name:"sn",label:"SN",field:"",align:"left",type:""}),r.push({name:"pressure",label:"Pressure (psia)",field:"",align:"left",type:"",isText:!0}),r.push({name:"wterFVF",label:"Water FVF (rb/stb)",field:"",align:"left",type:"",isText:!0}),r.push({name:"waterViscosity",label:"Water Viscosity (cp)",field:"",align:"left",type:"",isText:!0});var s=[];s.push({name:"sn",label:"SN",field:"",align:"left",type:""}),s.push({name:"pressure",label:"Pressure (psia)",field:"",align:"left",type:"",isText:!0}),s.push({name:"gasFVF",label:"Gas FVF (rb/scf)",field:"",align:"left",type:"",isText:!0}),s.push({name:"gasViscosity",label:"Gas Viscosity (cp)",field:"",align:"left",type:"",isText:!0});for(var l=0;l<20;l++)e.oilPVTArray.push({sn:l+1,pressure:"",solutionGOR:"",oilFVF:"",oilViscosity:""}),e.waterPVTArray.push({sn:l+1,pressure:"",wterFVF:"",waterViscosity:""}),e.gasPVTArray.push({sn:l+1,pressure:"",gasFVF:"",gasViscosity:""});switch(e.arrayOilPVTProfileForm.tables.push({title:"",columns:[].concat(a),rows:n()(e.oilPVTArray),separator:"cell"}),e.arrayWaterPVTProfileForm.tables.push({title:"",columns:[].concat(r),rows:n()(e.waterPVTArray),separator:"cell"}),e.arrayGasPVTProfileForm.tables.push({title:"",columns:[].concat(s),rows:n()(e.gasPVTArray),separator:"cell"}),e.typeOfPVTProfileForm.qSelects[0].value=0,e.selectTypeOfPVTProfile({value:0}),e.typeOfPVTProfileForm.qSelects[1].value=0,e.selectTypeOfFluidAction({value:0}),t.typeOfPVT){case"Constant":e.isConstant=!0,e.typeOfPVTProfileForm.qSelects[0].value=0,e.typeOfPVTProfileForm.qSelects[1].visible=!1,e.selectTypeOfPVTProfile({value:0}),e.constantPVTForm.qInputs[0].name=t.oil.pressure.toString(),e.constantPVTForm.qInputs[1].name=t.oil.fVF.toString(),e.constantPVTForm.qInputs[2].name=t.oil.viscosity.toString(),e.constantPVTForm.qInputs[3].name=t.oil.solutionGOR.toString(),e.constantPVTForm.qInputs[4].name=t.water.fVF.toString(),e.constantPVTForm.qInputs[5].name=t.water.viscosity.toString(),e.constantPVTForm.qInputs[6].name=t.gas.fVF.toString(),e.constantPVTForm.qInputs[7].name=t.gas.viscosity.toString();break;case"Array":e.isArray=!0,e.typeOfPVTProfileForm.qSelects[0].value=1,e.typeOfPVTProfileForm.qSelects[1].visible=!0,e.selectTypeOfPVTProfile({value:1}),e.isOilArray=!0,e.typeOfPVTProfileForm.qSelects[1].value=0,e.selectTypeOfFluidAction({value:0});break}}},b=V,F=a("2877"),O=Object(F["a"])(b,r,s,!1,null,null,null);t["default"]=O.exports}}]);