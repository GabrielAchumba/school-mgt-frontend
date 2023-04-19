import { get } from "../../store/modules/services"

export const checkResultsAnalysisSubscription = async (schoolId) => {

    var url = `payment/check-results-subscription/${schoolId}`;
    var response = await get({
    url
    })

    const { 
        data : {
            data: result,
            success,
            message,
        }
    } = response


    if(success){
        return { result, message: "" }
    }else{
        return { 
            result: {
                isResultsAnalysis: false,
                isFileManagement: false,
                isAdvertizement: false,
                isExamsQuiz: false,
                isOnlineLearning: false,
            }, 
            message
         }
    }
}

export const torpaFeatures = {
    home: "Home",
    lands: "Lands",
    houses: "Houses",
    subscription: "Subscription",
}

export const menuList = [
    {
        name: "showPage",
        title: torpaFeatures.home, 
        description: "Landing Page",
        image: "/statics/images/staffs.jpg",
        to: "admin",
        isFree: true,
    },
    {
        name: "showPage",
        title: torpaFeatures.lands, 
        description: "Create and Update Plots or Hectares of Lands",
        image: "/statics/images/branding.jpg",
        to: "lands-landing",
        isFree: false,
    },
    {
        name: "showPage",
        title: torpaFeatures.houses, 
        description: "Create and Update Rented Apartments",
        image: "/statics/images/branding.jpg",
        to: "houses-landing",
        isFree: false,
    },
]
