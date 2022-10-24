
const qSelect = { label: "", value: "", 
type: "", list: [
    {
        value: 0,
        type: "None",
        label: "None",
        amount: 0,
    },
    {
        value: 1,
        type: "90 Days",
        label: "90 Days (NGN30000.0)",
        amount: 30000,
    }, 
    {
        value: 2,
        type: "180 Days",
        label: "180 Days (NGN55000.0)",
        amount: 55000,
    }, 
    {
        value: 3,
        type: "360 Days",
        label: "360 Days (NGN100000.0)",
        amount: 10000,
    }], 
actionName: "typeOfSubscription",  
visible: true,
}

export { qSelect }
