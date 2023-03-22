const torpa = [
    {
        sn: 0,
        fileUrl: "/statics/images/mobile/torpa/auth.jpeg",
    },
    {
        sn: 1,
        fileUrl: "/statics/images/mobile/torpa/Ads landing.jpeg",
    },
    {
        sn: 2,
        fileUrl: "/statics/images/mobile/torpa/CBT.jpeg",
    },
    {
        sn: 3,
        fileUrl: "/statics/images/mobile/torpa/torpa admin landing 1.jpeg",
    },
    {
        sn: 4,
        fileUrl: "/statics/images/mobile/torpa/torpa admin landing 2.jpeg",
    },
    {
        sn: 5,
        fileUrl: "/statics/images/mobile/torpa/student report card.jpeg",
    },
    {
        sn: 6,
        fileUrl: "/statics/images/mobile/torpa/student report plot.jpeg",
    },
    {
        sn: 7,
        fileUrl: "/statics/images/mobile/torpa/students positions.jpeg",
    },
    {
        sn: 8,
        fileUrl: "/statics/images/mobile/torpa/subjects.jpeg",
    },
    {
        sn: 9,
        fileUrl: "/statics/images/mobile/torpa/lesson note 2.jpeg",
    }
]

const launchpad = [
    {
        sn: 0,
        fileUrl: "/statics/images/mobile/launchpad/authentication.jpeg",
    },
    {
        sn: 1,
        fileUrl: "/statics/images/mobile/launchpad/landing.jpeg",
    },
    {
        sn: 2,
        fileUrl: "/statics/images/mobile/launchpad/category.jpeg",
    },
    {
        sn: 3,
        fileUrl: "/statics/images/mobile/launchpad/invest.jpeg",
    },
    {
        sn: 4,
        fileUrl: "/statics/images/mobile/launchpad/dashboard.jpeg",
    },
    {
        sn: 5,
        fileUrl: "/statics/images/mobile/launchpad/chatting.jpeg",
    },
]


export const getGallery = (selectedProduct) => {
    let gallery = []
    switch(selectedProduct){
        case "Torpa":
            gallery = torpa;
            break;
        case "Launchpad":
            gallery = launchpad;
            break;
    }
    return gallery;
}