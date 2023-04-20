const wholePlots = ["None", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
const fractionPlots = ["One Quarter", "Half", "Three Quarter"];
const form = {
    title: "Create Land For Sale",
    qInputs: [
        { label: "Title", name: "", type: "text",
        visible: true,
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
        { label: "Partial Address (Do not give full address)", name: "", type: "text",
        visible: true,
        Template: {
            sn: 0,
            iconName: "",
            visible: false,
        }},
    ],
    qSelects:[
        { label: "Whole Number Plot(s)", value: "", type: "text",  visible: true,
            list: wholePlots.map((row, i) => {
                console.log(row)
            return {
                    sn: i+1,
                    id: row,
                    value:  row,
                    label: row,
                    type: row,
                }  
            }), 
        },
        { label: "Fraction Plot(s)", value: "", type: "text",  visible: true,
            list: fractionPlots.map((row, i) => {
            return {
                    sn: i+1,
                    id: row,
                    value:  row,
                    label: row,
                    type: row,
                }  
            }), 
        }
    ],
    qBtns: [
        {label: "Cancel", name: "Cancel", icon: "close"},
        {label: "Create", name: "Create", icon: "add"},
    ],
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

const dialogs = [
    { title: "Create Land For Sale", isVisible: false, message: "Do you want to create land",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Success", isVisible: false, message: "Land for sale created successfully!",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
    { title: "Failure", isVisible: false, message: "",
    okayEvent: "okDialog", cancelEvent: "cancelDialog" },
]

export { form, dialogs }