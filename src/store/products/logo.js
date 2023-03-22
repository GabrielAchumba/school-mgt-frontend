const torpa = {
    fileUrl: "/statics/images/TorpaLogo.png",
    title: "Torpa",
    description: "School Management App",
}

const launchpad = {
    fileUrl: "/statics/images/TorpaLogo.png",
    title: "Launchpad",
    description: "Human Development Initiative",
}

export const getLogo = (selectedProduct) => {
    let logo = ""
    switch(selectedProduct){
        case "Torpa":
            logo = torpa;
            break;
        case "Launchpad":
            logo = launchpad;
            break;
    }
    return logo;
}