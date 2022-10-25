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
        return { result, message: "", success }
    }else{
        return { result: false, message, success }
    }
}

export const menuList = [
    {
        name: "showPage",
        title: "Home", 
        description: "Landing Page",
        image: "/statics/images/staffs.jpg",
        to: "/admin"
    },
    {
        name: "showPage",
        title: "Staff", 
        description: "The types of employees of the schools",
        image: "/statics/images/staffs.jpg",
        to: "/staff-landing"
    },
    {
        name: "showPage",
        title: "Users", 
        description: "The employees of the schools",
        image: "/statics/images/staffs.jpg",
        to: "/user-landing"
    },
    {
        name: "showPage",
        title: "Class Rooms", 
        description: "The school's class rooms",
        image: "/statics/images/classroom.jpg",
        to: "/classroom-landing"
    },
    {
        name: "showPage",
        title: "Subjects", 
        description: "Subjects that students learn in the school",
        image: "/statics/images/subjects.jpg",
        to: "/subject-landing"
    },
    {
        name: "showPage",
        title: "Student", 
        description: "Students in the school",
        image: "/statics/images/students.jpg",
        to: "/student-landing"
    },
    {
        name: "showPage",
        title: "Assessment", 
        description: "Student's assessment in the school",
        image: "/statics/images/assessment.jpg",
        to: "/assessment-landing"
    },
    {
        name: "showPage",
        title: "Student Results", 
        description: "Student's results in the school",
        image: "/statics/images/results.jpg",
        to: "/result-landing"
    },
    {
        name: "showPage",
        title: "Subscription", 
        description: "The shool management subscription plans",
        image: "/statics/images/lesson.jpg",
        to: "/subscription-landing"
    },
    {
        name: "showPage",
        title: "File Management", 
        description: "Managing teachers lesson notes, past questions and answers, and other office files",
        image: "/statics/images/lesson.jpg",
        to: "/admin"
    },
    {
        name: "showPage",
        title: "Schools Payments", 
        description: "All Payments made by schools you refered to Newway",
        image: "/statics/images/staffs.jpg",
        to: "/school-all-payment-landing"
    },
]