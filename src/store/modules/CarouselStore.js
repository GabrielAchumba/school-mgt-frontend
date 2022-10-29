const state = {
    Carousels: [
        {
            title: "WELCOME TO TORPA", 
            description: "... that puts the feature of your child in your hands", 
            fileurl: "/statics/images/staffs.jpg"
        },
        {
            title: "TORPA FOR EXCELLENCE", 
            description: "We must remain transparent, sincere and trustwothy, one to another for the growth of the child", 
            fileurl: "/statics/images/subjects.jpg"
        },
        {
            title: "PATH TO EXCELLENCE WITH TORPA", 
            description: "follow the leaders and it's idea structure unto having a fulfilled Life of excellence.", 
            fileurl: "/statics/images/students.jpg"
        },
        {
            title: "SKILLS AND SOCIAL RESPONSIBILITY BY TORPA", 
            description: "a community of individual collaborators for societal impact",
            fileurl: "/statics/images/assessment.jpg"
        },
        {
            title: "WE LOVE YOU FROM ALL OF US IN TORPA", 
            description: "",
            fileurl: "/statics/images/results.jpg"
        }
    ],
    selectedCarousel: {}

}

const getters = {
    Carousels(state){
        return state.Carousels;
    },
    selectedCarousel(state){
        return state.selectedCarousel;
    }
}

const mutations = {
    SetCarousels(state, payload){
        state.Carousels = payload;
    },
    SetSelectedCarousel(state, payload){
        state.selectedCarousel = payload;
    }
}

const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}