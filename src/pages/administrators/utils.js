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
    payments: "Payments",
    schools: "Schools",
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
    /* {
        name: "showPage",
        title: torpaFeatures.home, 
        description: "Organization",
        image: "/statics/images/staffs.jpg",
        to: "admin",
        isFree: true,
        isAdmin: true,
    }, */
    {
        name: "showPage",
        title: torpaFeatures.designations, 
        description: "Designation can be instructor, student etc",
        image: "/statics/images/staffs.jpg",
        to: "staff-landing",
        isFree: true,
    },
    {
        name: "showPage",
        title: torpaFeatures.users, 
        description: "The details of users in the school",
        image: "/statics/images/users.jpg",
        to: "user-landing",
        isFree: true,
    },
    {
        name: "showPage",
        title: torpaFeatures.levels, 
        description: "The school levels like primary 1, primary 2, etc",
        image: "/statics/images/levels.jpg",
        to: "level-landing",
        isFree: true,
    },
    {
        name: "showPage",
        title: torpaFeatures.subscription, 
        description: "The shool management subscription plans",
        image: "/statics/images/lesson.jpg",
        to: "subscription-landing",
        isFree: true,
    },
    {
        name: "showPage",
        title: torpaFeatures.classRooms, 
        description: "The school class rooms like Class A, Class B, etc",
        image: "/statics/images/classroom.jpg",
        to: "classroom-landing",
        isFree: true,
    },
    {
        name: "showPage",
        title: torpaFeatures.subjects, 
        description: "Subjects that students learn in the school",
        image: "/statics/images/subjects.jpg",
        to: "subject-landing",
        isFree: true,
    },
    {
        name: "showPage",
        title: torpaFeatures.grades, 
        description: "Grade based on range of score for subjects",
        image: "/statics/images/grades.jpg",
        to: "grade-landing",
        isFree: true,
    },
    {
        name: "showPage",
        title: torpaFeatures.assessments, 
        description: "Student's assessment in the school",
        image: "/statics/images/assessment.jpg",
        to: "assessment-landing",
        isFree: true,
    },
    {
        name: "showPage",
        title: torpaFeatures.sessions, 
        description: "Session can be first term, first semester, etc",
        image: "/statics/images/sessions.jpg",
        to: "session-landing",
        isFree: true,
    },
    {
        name: "showPage",
        title: torpaFeatures.students, 
        description: "Students in the school",
        image: "/statics/images/students.jpg",
        to: "student-landing",
        isFree: true,
    },
    {
        name: "showPage",
        title: torpaFeatures.cAResults, 
        description: "Store students' CA results",
        image: "/statics/images/view results.jpg",
        to: "results",
        isFree: true,
    },
    {
        name: "showPage",
        title: torpaFeatures.cGPAComputation, 
        description: "Compute and analyze results of students",
        image: "/statics/images/results.jpg",
        to: "result-landing",
        isFree: true,
    },
    /* {
        name: "showPage",
        title: torpaFeatures.libraryMgt, 
        description: "Manage school book-store",
        image: "/statics/images/library.jpg",
        to: "result-landing",
        isFree: false,
    }, */
    {
        name: "showPage",
        title: torpaFeatures.onlineLearning, 
        description: "Setup online course programs",
        image: "/statics/images/online_learning.jpg",
        to: "online-learning-landing",
        isFree: false,
    },
    {
        name: "showPage",
        title: torpaFeatures.continuousAssessments, 
        description: "Set home work, test, exams, etc",
        image: "/statics/images/online_learning.jpg",
        to: "online-learning-landing",
        isFree: false,
    },
    {
        name: "showPage",
        title: torpaFeatures.cBTPractice, 
        description: "Take exams to determine your readiness",
        image: "/statics/images/examination.jpg",
        to: "exam-landing",
        isFree: true,
    },
    /* {
        name: "showPage",
        title: torpaFeatures.quizGame, 
        description: "Make cash while learning in funny way",
        image: "/statics/images/examination.jpg",
        to: "exam-landing",
        isFree: true,
    }, */
    {
        name: "showPage",
        title: torpaFeatures.socialize, 
        description: "Chat and interact with friends from same or differnet school",
        image: "/statics/images/socialize.jpg",
        to: "socialize-landing",
        isFree: true,
    },
    {
        name: "showPage",
        title: torpaFeatures.directories, 
        description: "Manage organization directories",
        image: "/statics/images/file_management.jpg",
        to: "filemanagement-landing",
        isFree: false,
    },
    {
        name: "showPage",
        title: torpaFeatures.ads, 
        description: "Brand & advertise your organisation on the app",
        image: "/statics/images/branding.jpg",
        to: "branding-landing",
        isFree: false,
    },
    /* {
        name: "showPage",
        title: torpaFeatures.payments, 
        description: "All Payments made by schools you refered to Newway",
        image: "/statics/images/payments.jpg",
        to: "school-all-payment-landing"
    }, */
]

export const menuListForStudents = [
    {
        name: "showPage",
        title: torpaFeatures.home, 
        description: "Landing Page",
        image: "/statics/images/staffs.jpg",
        to: "student",
        isFree: true,
    },
    {
        name: "showPage",
        title: torpaFeatures.cAResults, 
        description: "Store students' CA results",
        image: "/statics/images/view results.jpg",
        to: "student-results",
        isFree: true,
    },
    {
        name: "showPage",
        title: torpaFeatures.cGPAComputation, 
        description: "Compute and analyze results of students",
        image: "/statics/images/results.jpg",
        to: "student-result-landing",
        isFree: true,
    },
    /* {
        name: "showPage",
        title: torpaFeatures.libraryMgt, 
        description: "Manage school book-store",
        image: "/statics/images/library.jpg",
        to: "student-result-landing",
        isFree: false,
    }, */
    {
        name: "showPage",
        title: torpaFeatures.onlineLearning, 
        description: "Setup online course programs",
        image: "/statics/images/online_learning.jpg",
        to: "student-online-learning-landing",
        isFree: true,
    },
    {
        name: "showPage",
        title: torpaFeatures.continuousAssessments, 
        description: "Set home work, test, exams, etc",
        image: "/statics/images/online_learning.jpg",
        to: "student-online-learning-landing",
        isFree: false,
    },
    {
        name: "showPage",
        title: torpaFeatures.cBTPractice, 
        description: "Take exams to determine your readiness",
        image: "/statics/images/examination.jpg",
        to: "student-exam-landing",
        isFree: true,
    },
    /* {
        name: "showPage",
        title: torpaFeatures.quizGame, 
        description: "Make cash while learning in funny way",
        image: "/statics/images/examination.jpg",
        to: "student-exam-landing",
        isFree: true,
    }, */
    {
        name: "showPage",
        title: torpaFeatures.socialize, 
        description: "Chat and interact with friends from same or differnet school",
        image: "/statics/images/socialize.jpg",
        to: "student-filemanagement-landing",
        isFree: true,
    },
]


export const instructorMenuList = [
    {
        name: "showPage",
        title: torpaFeatures.home, 
        description: "Landing Page",
        image: "/statics/images/staffs.jpg",
        to: "instructor"
    },
    {
        name: "showPage",
        title: torpaFeatures.socialize, 
        description: "Chat and interact with friends from same or differnet school",
        image: "/statics/images/socialize.jpg",
        to: "filemanagement-landing"
    },
    /* {
        name: "showPage",
        title: torpaFeatures.subscription, 
        description: "The shool management subscription plans",
        image: "/statics/images/lesson.jpg",
        to: "subscription-landing"
    }, */
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
]