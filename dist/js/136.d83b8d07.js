(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[136],{b109:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md"},[a("Form",{attrs:{formData:e.typeOfScheduleForm,isFormTitle:e.isTypeOfScheduleForm},on:{selectTypeOfSchedule:function(t){return e.selectTypeOfSchedule(t)}}}),e.isConstant?a("Form",{attrs:{formData:e.constantTimeStepForm},on:{ApplyConstantTimeStep:function(t){return e.ApplyConstantTimeStep(t)}}}):e._e(),e.isArray?a("Form",{attrs:{formData:e.arrayTimeStepForm},on:{ApplyDurationArray:function(t){return e.ApplyDurationArray(t)}}}):e._e()],1)},r=[],s=a("4db1"),l=a.n(s),i=(a("c5f6"),a("7f7f"),a("06db"),a("6b54"),a("9437")),o={qSelects:[{label:"Schedule",visible:!0,value:"",actionName:"selectTypeOfSchedule",list:[{id:0,type:"Constant",value:"Constant"},{id:1,type:"Array",value:"Array"}]}]},p={title:"Constant Time Step",qSelects:[],qInputs:[{label:"Time Step (days)",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}},{label:"Simulation Duration (days)",name:"",type:"text",Template:{sn:0,iconName:"",visible:!1}}],qBtns:[{label:"Apply Constant Time Step",name:"ApplyConstantTimeStep",icon:"add"}],qDates:[],GroupedCheckBoxes:[],clearQInputs:function(){var e=0;for(e=0;e<this.qInputs.length;e++)this.qInputs[e].name=""}},c={title:"Simulation Duration Array (days)",qSelects:[],tables:[],qInputs:[],qBtns:[{label:"ApplyDurationArray",name:"ApplyDurationArray",icon:"add"}],qDates:[],GroupedCheckBoxes:[]},u={components:{Form:i["a"]},data:function(){return{isTypeOfScheduleForm:!1,isConstant:!0,isArray:!1,selectedSchedule:{},typeOfScheduleForm:o,constantTimeStepForm:p,arrayTimeStepForm:c,timeStepArray:[]}},methods:{Cancel:function(){this.$router.push("/olasim")},ApplyConstantTimeStep:function(){var e=this,t={typeOfSchedule:e.selectedSchedule.type,timeStep:Number(e.constantTimeStepForm.qInputs[0].name),duration:Number(e.constantTimeStepForm.qInputs[1].name)};this.$store.commit("simulationStore/setConstantSchedule",t)},ApplyDurationArray:function(){var e=this,t={typeOfSchedule:e.selectedSchedule.type,table:l()(e.arrayTimeStepForm.tables[0].rows)};console.log("payload: ",t),this.$store.commit("simulationStore/setScheduleArray",t)},selectTypeOfSchedule:function(e){var t=this;switch(t.selectedSchedule=t.typeOfScheduleForm.qSelects[0].list[e.value],t.isConstant=!1,t.isArray=!1,e.value){case 0:t.isConstant=!0;break;case 1:t.isArray=!0;break}}},created:function(){var e=this;e.constantTimeStepForm.clearQInputs();var t=this.$store.getters["simulationStore/schedule"];e.arrayTimeStepForm.tables=[],e.timeStepArray=[];var a=[];a.push({name:"sn",label:"SN",field:"",align:"left",type:""}),a.push({name:"time",label:"Time (days)",field:"",align:"left",type:"",isText:!0});for(var n=0;n<20;n++)e.timeStepArray.push({sn:n+1,time:""});switch(e.arrayTimeStepForm.tables.push({title:"",columns:[].concat(a),rows:l()(e.timeStepArray),separator:"cell"}),e.typeOfScheduleForm.qSelects[0].value=0,e.selectTypeOfSchedule({value:0}),t.typeOfPVT){case"Constant":e.isConstant=!0,e.typeOfScheduleForm.qSelects[0].value=0,e.selectTypeOfSchedule({value:0}),e.constantTimeStepForm.qInputs[0].name=t.timeStep.toString(),e.constantTimeStepForm.qInputs[1].name=t.duration.toString();break;case"Array":e.isArray=!0,e.typeOfScheduleForm.qSelects[0].value=1,e.selectTypeOfSchedule({value:1});break}}},m=u,y=a("2877"),S=Object(y["a"])(m,n,r,!1,null,null,null);t["default"]=S.exports}}]);