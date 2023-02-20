const state = {
    stories: [
        {
            friendImage: "/statics/images/levels.jpg",
            friendFullName: "John Williams",
            fromId: "",
            toId: "",
            groupName: "Story",
            message: "Who do you think will emerge the president of Nigeria in the forthcoming 2023 election",
            meetingId: "",
            files:[
                {
                    fileUrl: "/statics/images/users.jpg",
                    fileName: "",
                    originalFileName: "",
                    groupName: "Story",
                }
            ],
            likes: [],
            shares: [],
            createdBy: "",
            schoolId: "",
            createdAt: Date.now()
        },
        {
            friendImage: "/statics/images/sessions.jpg",
            friendFullName: "Austin Ore",
            fromId: "",
            toId: "",
            groupName: "Story",
            message: "In my own statistics, Peter Obi will emerge as the president of Nigeria",
            meetingId: "",
            files:[
                {
                    fileUrl: "/statics/images/parallax.jpg",
                    fileName: "",
                    originalFileName: "",
                    groupName: "Story",
                },
                {
                    fileUrl: "/statics/images/news.jpg",
                    fileName: "",
                    originalFileName: "",
                    groupName: "Story",
                }
            ],
            likes: [],
            shares: [],
            createdBy: "",
            schoolId: "",
            createdAt: Date.now()
        }
    ],
    selectedStory: {},

}

const getters = {
    stories(state){
        return state.stories;
    },
    selectedStory(state){
        return state.selectedStory;
    }
}

const mutations = {
    SetStories(state, payload){
        state.stories = payload;
    },
    SetSelectedStory(state, payload){
        state.selectedStory = payload;
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