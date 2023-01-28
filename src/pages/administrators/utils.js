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
    designations: "Designations",
    users: "Users",
    levels: "Levels",
    subscription: "Subscription",
    classRooms: "Class Rooms",
    subjects: "Subjects",
    grades: "Grades",
    assessments: "Assessments",
    sessions: "Sessions",
    students: "Students",
    cAResults: "Cont. Ass. Results",
    cGPAComputation: "CGPA Computation",
    libraryMgt: "Library Mgt",
    onlineLearning: "Lesson Notes",
    continuousAssessments: "Cont. Assessment",
    cBTPractice: "CBT Practice",
    quizGame: "Quiz Game",
    socialize: "Socialize",
    directories: "Directories",
    ads: "Ads",
    payments: "Payments"
}

export const menuList = [
    {
        name: "showPage",
        title: torpaFeatures.home, 
        description: "Landing Page",
        image: "/statics/images/staffs.jpg",
        to: "admin"
    },
    {
        name: "showPage",
        title: torpaFeatures.designations, 
        description: "Designation can be instructor, student etc",
        image: "/statics/images/staffs.jpg",
        to: "staff-landing"
    },
    {
        name: "showPage",
        title: torpaFeatures.users, 
        description: "The details of users in the school",
        image: "/statics/images/users.jpg",
        to: "user-landing"
    },
    {
        name: "showPage",
        title: torpaFeatures.levels, 
        description: "The school levels like primary 1, primary 2, etc",
        image: "/statics/images/levels.jpg",
        to: "level-landing"
    },
    {
        name: "showPage",
        title: torpaFeatures.subscription, 
        description: "The shool management subscription plans",
        image: "/statics/images/lesson.jpg",
        to: "subscription-landing"
    },
    {
        name: "showPage",
        title: torpaFeatures.classRooms, 
        description: "The school class rooms like Class A, Class B, etc",
        image: "/statics/images/classroom.jpg",
        to: "classroom-landing"
    },
    {
        name: "showPage",
        title: torpaFeatures.subjects, 
        description: "Subjects that students learn in the school",
        image: "/statics/images/subjects.jpg",
        to: "subject-landing"
    },
    {
        name: "showPage",
        title: torpaFeatures.grades, 
        description: "Grade based on range of score for subjects",
        image: "/statics/images/grades.jpg",
        to: "grade-landing"
    },
    {
        name: "showPage",
        title: torpaFeatures.assessments, 
        description: "Student's assessment in the school",
        image: "/statics/images/assessment.jpg",
        to: "assessment-landing"
    },
    {
        name: "showPage",
        title: torpaFeatures.sessions, 
        description: "Session can be first term, first semester, etc",
        image: "/statics/images/sessions.jpg",
        to: "session-landing"
    },
    {
        name: "showPage",
        title: torpaFeatures.students, 
        description: "Students in the school",
        image: "/statics/images/students.jpg",
        to: "student-landing"
    },
    {
        name: "showPage",
        title: torpaFeatures.cAResults, 
        description: "Store students' CA results",
        image: "/statics/images/view results.jpg",
        to: "results"
    },
    {
        name: "showPage",
        title: torpaFeatures.cGPAComputation, 
        description: "Compute and analyze results of students",
        image: "/statics/images/results.jpg",
        to: "result-landing"
    },
    {
        name: "showPage",
        title: torpaFeatures.libraryMgt, 
        description: "Manage school book-store",
        image: "/statics/images/library.jpg",
        to: "result-landing"
    },
    {
        name: "showPage",
        title: torpaFeatures.onlineLearning, 
        description: "Setup online course programs",
        image: "/statics/images/online_learning.jpg",
        to: "online-learning-landing"
    },
    {
        name: "showPage",
        title: torpaFeatures.continuousAssessments, 
        description: "Set home work, test, exams, etc",
        image: "/statics/images/online_learning.jpg",
        to: "online-learning-landing"
    },
    {
        name: "showPage",
        title: torpaFeatures.cBTPractice, 
        description: "Take exams to determine your readiness",
        image: "/statics/images/examination.jpg",
        to: "exam-landing"
    },
    {
        name: "showPage",
        title: torpaFeatures.quizGame, 
        description: "Make cash while learning in funny way",
        image: "/statics/images/examination.jpg",
        to: "exam-landing"
    },
    {
        name: "showPage",
        title: torpaFeatures.socialize, 
        description: "Chat and interact with friends from same or differnet school",
        image: "/statics/images/socialize.jpg",
        to: "filemanagement-landing"
    },
    {
        name: "showPage",
        title: torpaFeatures.directories, 
        description: "Manage organization directories",
        image: "/statics/images/file_management.jpg",
        to: "filemanagement-landing"
    },
    {
        name: "showPage",
        title: torpaFeatures.ads, 
        description: "Brand & advertise your organisation on the app",
        image: "/statics/images/branding.jpg",
        to: "branding-landing"
    },
    {
        name: "showPage",
        title: torpaFeatures.payments, 
        description: "All Payments made by schools you refered to Newway",
        image: "/statics/images/payments.jpg",
        to: "school-all-payment-landing"
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