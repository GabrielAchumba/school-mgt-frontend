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
        title: "Types of Users", 
        description: "The type user can be principal, teacher, student, etc",
        image: "/statics/images/staffs.jpg",
        to: "/staff-landing"
    },
    {
        name: "showPage",
        title: "Users", 
        description: "The details of users in the school",
        image: "/statics/images/staffs.jpg",
        to: "/user-landing"
    },
    {
        name: "showPage",
        title: "Level", 
        description: "The school levels like primary 1, primary 2, etc",
        image: "/statics/images/classroom.jpg",
        to: "/level-landing"
    },
    {
        name: "showPage",
        title: "Class Rooms", 
        description: "The school class rooms like Class A, Class B, etc",
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
        title: "Grade", 
        description: "Grade based on range of score for subjects",
        image: "/statics/images/subjects.jpg",
        to: "/grade-landing"
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
        title: "Session", 
        description: "Session can be first term, first semester, etc",
        image: "/statics/images/assessment.jpg",
        to: "/session-landing"
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
        title: "Result Management", 
        description: "Create, update and delete results. Also view result report",
        image: "/statics/images/view results.jpg",
        to: "/results"
      },
    {
        name: "showPage",
        title: "Results Analysis", 
        description: "Compute and analyse results of studenst",
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
        to: "/filemanagement-landing"
    },
    {
        name: "showPage",
        title: "Socialize", 
        description: "This feature enables you to chat and interact with friends from same or differnet school",
        image: "/statics/images/lesson.jpg",
        to: "/filemanagement-landing"
    },
    {
        name: "showPage",
        title: "Branding & Advertisement", 
        description: "Subscribe to app customization and advertisement",
        image: "/statics/images/lesson.jpg",
        to: "/branding-landing"
    },
    {
        name: "showPage",
        title: "Examination & Quiz", 
        description: "Set online examinations",
        image: "/statics/images/lesson.jpg",
        to: "/exam-landing"
    },
    {
        name: "showPage",
        title: "Schools Payments", 
        description: "All Payments made by schools you refered to Newway",
        image: "/statics/images/staffs.jpg",
        to: "/school-all-payment-landing"
    },
]

export const menuListForStudents = [
    {
        name: "showPage",
        title: "Home", 
        description: "Landing Page",
        image: "/statics/images/staffs.jpg",
        to: "/student"
    },
    {
        name: "showPage",
        title: "Student Results", 
        description: "Student's results in the school",
        image: "/statics/images/results.jpg",
        to: "/student-result-landing"
    },
    {
        name: "showPage",
        title: "File Management", 
        description: "Managing teachers lesson notes, past questions and answers, and other office files",
        image: "/statics/images/lesson.jpg",
        to: "/student-filemanagement-landing"
    },
    {
        name: "showPage",
        title: "Socialize", 
        description: "This feature enables you to chat and interact with friends from same or differnet school",
        image: "/statics/images/lesson.jpg",
        to: "/student-filemanagement-landing"
    },
]