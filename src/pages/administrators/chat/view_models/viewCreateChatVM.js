const form = {
    title: "",
    qSelects: [
         { label: "", value: "", type: "text", 
         list: [], actionName: "onDesignationSelected", visible: true },
    ],
    qInputs: [],
    qBtns: [],
    qDates: [],
    GroupedCheckBoxes: [],
    clearQInputs(){
        var i = 0;
        for (i = 0; i < this.qInputs.length; i++){
            this.qInputs[i].name = "";
        }
    },
    clearQSelects(){
        var i = 0;
        for (i = 0; i < this.qSelects.length; i++){
            this.qSelects[i].value = "";
            this.qSelects[i].list = [];
            this.qSelects[i].visible = true;
        }
    },
}

export { form }