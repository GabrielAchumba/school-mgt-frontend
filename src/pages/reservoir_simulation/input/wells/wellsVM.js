export const wellsForm = {
    title: "Well Configuration",
    qLists: [
        {
            label: "Well Names",
            isAddVisible: true,
            items: [
                /* {
                    letter: "",
                    name: "",
                    address: "",
                    i: 0,
                    j: 0,
                    k: 0,
                    wellType: "",
                    rate: 0,
                    bottomHolePressureDatumDepth: 0,
                    wellBoreRadius: 0,
                    perforationIntervals: [
                        { segmentLength: 40 }
                    ],
                    WellCondition: "",
                } */
            ],
            isMenuListVisible: true,
            qBtns: [
                { name: "editWell", label: "EditWell" },
                { name: "deleteWell", label: "DeleteWell" }
            ]
        }
    ],
    qBtns: [
        { name: "applyWells", label: "Apply Wells" },
    ]
}