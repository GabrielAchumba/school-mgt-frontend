(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[131],{"18c7":function(r,e,i){"use strict";i.r(e);var t=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("div",{staticClass:"q-pa-md"},[i("Form",{attrs:{formData:r.typeOfGriddingForm,isFormTitle:r.isTypeOfGriddingFormTitle},on:{selectTypeOfGriddingAction:function(e){return r.selectTypeOfGriddingAction(e)},selectTypeOfDimensionAction:function(e){return r.selectTypeOfDimensionAction(e)}}}),r.isConstant?i("Form",{attrs:{formData:r.constGriddingForm},on:{ApplyConstGriddingForm:function(e){return r.ApplyConstGriddingForm(e)}}}):r._e(),r.isArray?i("div",{staticClass:"col-12"},[r.isXArray?i("Form",{attrs:{formData:r.rangeXGriddingForm},on:{ApplyXGriddingByArrayForm:function(e){return r.ApplyXGriddingByArrayForm(e)}}}):r._e(),r.isYArray?i("Form",{attrs:{formData:r.rangeYGriddingForm},on:{ApplyYGriddingByArrayForm:function(e){return r.ApplyYGriddingByArrayForm(e)}}}):r._e(),r.isZArray?i("Form",{attrs:{formData:r.rangeZGriddingForm},on:{ApplyZGriddingByArrayForm:function(e){return r.ApplyZGriddingByArrayForm(e)}}}):r._e()],1):r._e()],1)},n=[],d=i("4db1"),a=i.n(d),s=(i("c5f6"),i("7f7f"),i("6d67"),i("06db"),i("6b54"),i("9437")),o={qSelects:[{label:"Type of Gridding",visible:!0,value:"",actionName:"selectTypeOfGriddingAction",list:[{id:0,type:"Constant",value:"Constant"},{id:1,type:"Array",value:"Array"}]},{label:"Dimension",visible:!0,value:"",actionName:"selectTypeOfDimensionAction",list:[{id:0,type:"Dx",value:"Dx"},{id:1,type:"Dy",value:"Dy"},{id:2,type:"Dz",value:"Dz"}]}]},l={title:"Constant Grids",qSelects:[],qInputs:[{label:"Dx (ft)",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Dy (ft)",name:"",type:"text",Template:{sn:1,iconName:"",visible:!1}},{label:"Dz (ft)",name:"",type:"text",Template:{sn:2,iconName:"",visible:!1}}],qBtns:[{label:"Apply Constant Gridding",name:"ApplyConstGriddingForm",icon:"add"}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var r=0;for(r=0;r<this.qInputs.length;r++)this.qInputs[r].name=""}},g={title:"X Direction Grids",qSelects:[],tables:[],qInputs:[],qBtns:[{label:"Apply X Gridding",name:"ApplyXGriddingByArrayForm",icon:"add"}],qDates:[],GroupedCheckBoxes:[]},y={title:"Y Direction Grids",qSelects:[],tables:[],qInputs:[],qBtns:[{label:"Apply Y Gridding",name:"ApplyYGriddingByArrayForm",icon:"add"}],qDates:[],GroupedCheckBoxes:[]},c={title:"Z Direction Grids",qSelects:[],tables:[],qInputs:[],qBtns:[{label:"Apply Z Gridding",name:"ApplyZGriddingByArrayForm",icon:"add"}],qDates:[],GroupedCheckBoxes:[]},m={components:{Form:s["a"]},data:function(){return{isConstant:!0,isArray:!1,isXArray:!1,isYArray:!1,isZArray:!1,isTypeOfGriddingFormTitle:!1,selectedGridding:{},selectedDimenioning:{},constGriddingForm:l,typeOfGriddingForm:o,rangeXGriddingForm:g,rangeYGriddingForm:y,rangeZGriddingForm:c,dxArray:[],dyArray:[],dzArray:[]}},methods:{Cancel:function(){this.$router.push("/olasim")},ApplyConstGriddingForm:function(){var r=this,e={typeOfGridding:r.selectedGridding.type,dx:Number(r.constGriddingForm.qInputs[0].name),dy:Number(r.constGriddingForm.qInputs[1].name),dz:Number(r.constGriddingForm.qInputs[2].name)};console.log("payload: ",e),this.$store.commit("simulationStore/setConstantGridding",e)},ApplyXGriddingByArrayForm:function(){var r=this,e={typeOfGridding:r.selectedGridding.type,dxVector:r.rangeXGriddingForm.tables[0].rows.map((function(r){return Number(r.dx)}))};console.log("payload: ",e),this.$store.commit("simulationStore/setXGridding",e)},ApplyYGriddingByArrayForm:function(){var r=this,e={typeOfGridding:r.selectedGridding.type,dyVector:r.rangeYGriddingForm.tables[0].rows.map((function(r){return Number(r.dy)}))};console.log("payload: ",e),this.$store.commit("simulationStore/setYGridding",e)},ApplyZGriddingByArrayForm:function(){var r=this,e={typeOfGridding:r.selectedGridding.type,dzVector:r.rangeZGriddingForm.tables[0].rows.map((function(r){return Number(r.dz)}))};console.log("payload: ",e),this.$store.commit("simulationStore/setZGridding",e)},selectTypeOfGriddingAction:function(r){var e=this;switch(e.selectedGridding=e.typeOfGriddingForm.qSelects[0].list[r.value],e.isConstant=!1,e.isArray=!1,e.typeOfGriddingForm.qSelects[1].visible=!1,r.value){case 0:e.isConstant=!0;break;case 1:e.isArray=!0,e.typeOfGriddingForm.qSelects[1].visible=e.isArray;break}},selectTypeOfDimensionAction:function(r){var e=this;switch(e.selectedDimenioning=e.typeOfGriddingForm.qSelects[1].list[r.value],e.isXArray=!1,e.isYArray=!1,e.isZArray=!1,r.value){case 0:e.isXArray=!0;break;case 1:e.isYArray=!0;break;case 2:e.isZArray=!0;break}}},created:function(){var r=this;r.constGriddingForm.clearQInputs(),r.typeOfGriddingForm.qSelects[0].value=0,r.typeOfGriddingForm.qSelects[1].value=0,r.selectTypeOfGriddingAction({value:0});var e=this.$store.getters["simulationStore/geometry"];console.log("geometry: ",e);var i=e.dimensions.nx,t=e.dimensions.ny,n=e.dimensions.nz;r.rangeXGriddingForm.tables=[];for(var d=0;d<i;d++)r.dxArray.push({sn:d+1,dx:""});r.rangeYGriddingForm.tables=[];for(var s=0;s<t;s++)r.dyArray.push({sn:s+1,dy:""});r.rangeZGriddingForm.tables=[];for(var o=0;o<n;o++)r.dzArray.push({sn:o+1,dz:""});switch(r.rangeXGriddingForm.tables.push({title:"",columns:[{name:"sn",label:"SN",field:"",align:"left",type:""},{name:"dx",label:"Dx (ft)",field:"",align:"left",type:"text",isText:!0}],rows:a()(r.dxArray),separator:"cell"}),r.rangeYGriddingForm.tables.push({title:"",columns:[{name:"sn",label:"SN",field:"",align:"left",type:""},{name:"dy",label:"Dy (ft)",field:"",align:"left",type:"text",isText:!0}],rows:a()(r.dyArray),separator:"cell"}),r.rangeZGriddingForm.tables.push({title:"",columns:[{name:"sn",label:"SN",field:"",align:"left",type:""},{name:"dz",label:"Dz (ft)",field:"",align:"left",type:"text",isText:!0}],rows:a()(r.dzArray),separator:"cell"}),e.gridding.typeOfGridding){case"Constant":r.isConstant=!0,r.typeOfGriddingForm.qSelects[0].value=0,r.selectTypeOfGriddingAction({value:0}),r.constGriddingForm.qInputs[0].name=e.gridding.dx.toString(),r.constGriddingForm.qInputs[1].name=e.gridding.dy.toString(),r.constGriddingForm.qInputs[2].name=e.gridding.dz.toString();break;case"Array":r.isArray=!0,r.typeOfGriddingForm.qSelects[0].value=1,r.typeOfGriddingForm.qSelects[1].value=0,r.selectTypeOfGriddingAction({value:1}),r.isXArray=!0;for(var l=0;l<e.gridding.dxVector.length;l++)r.rangeXGriddingForm.tables[0].rows[l].dx=e.gridding.dxVector[l].toString();for(var g=0;g<e.gridding.dyVector.length;g++)r.rangeYGriddingForm.tables[0].rows[g].dy=e.gridding.dyVector[g].toString();for(var y=0;y<e.gridding.dzVector.length;y++)r.rangeZGriddingForm.tables[0].rows[y].dz=e.gridding.dzVector[y].toString();break}}},p=m,u=i("2877"),G=Object(u["a"])(p,t,n,!1,null,null,null);e["default"]=G.exports}}]);