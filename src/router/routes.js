
const routes = [
  {
    path: '/',
    component: () => import('layouts/TorpaLayout.vue'),
    children: [
      { 
        path: '/', 
        component: () => import('pages/authentication/loginregister.vue') 
        
      },
      { 
        path: '/home', 
        component: () => import('pages/authentication/landing.vue') 
        
      },
      { 
        path: '/news', 
        component: () => import('pages/authentication/news.vue') 
        
      },
      { 
        path: '/about_us', 
        component: () => import('pages/authentication/aboutus.vue') 
        
      },
      { 
        path: '/contact', 
        component: () => import('pages/authentication/contactus.vue') 
        
      },
      { 
        path: '/login_register', 
        component: () => import('pages/authentication/loginregister.vue') 
        
      },
      { 
        path: '/register', 
        component: () => import('pages/authentication/register-user.vue') 
        
      },
      { 
        path: '/school-landing', 
        component: () => import('pages/administrators/school/landing.vue') 
        
      },
      { 
        path: '/create-school', 
        component: () => import('pages/administrators/school/create.vue') 
        
      },
    ]
  },
  {
    path: '/super-admin',
    component: () => import('layouts/SuperAdminLayout.vue'),
    children: [
      { 
        path: '/super-admin', 
        component: () => import('pages/superadministrators/landing.vue') 
      },
      { 
        path: '/update-pending-payment', 
        component: () => import('pages/superadministrators/pending_payments/update.vue') 
      },
      { 
        path: '/pending-payment-landing', 
        component: () => import('pages/superadministrators/pending_payments/landing.vue') 
      },
      { 
        path: '/super-admin-user-landing', 
        component: () => import('pages/administrators/user/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-user', 
        component: () => import('pages/administrators/user/create.vue') 
        
      },
      { 
        path: '/super-admin-update-user', 
        component: () => import('pages/administrators/user/update.vue') 
        
      },
      { 
        path: '/super-admin-import-users', 
        component: () => import('src/pages/administrators/user/import-users.vue') 
        
      },
      { 
        path: '/super-admin-unconfirmed-users', 
        component: () => import('src/pages/administrators/user/confirm-users.vue') 
        
      },
      { 
        path: '/super-admin-staff-landing', 
        component: () => import('pages/administrators/staff/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-staff', 
        component: () => import('pages/administrators/staff/create.vue') 
        
      },
      { 
        path: '/super-admin-update-staff', 
        component: () => import('pages/administrators/staff/update.vue') 
        
      },
      { 
        path: '/super-admin-import-staff', 
        component: () => import('pages/administrators/staff/import-staff.vue') 
        
      },
      { 
        path: '/super-admin-classroom-landing', 
        component: () => import('pages/administrators/classroom/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-class-room', 
        component: () => import('pages/administrators/classroom/create.vue') 
        
      },
      { 
        path: '/super-admin-update-class-room', 
        component: () => import('pages/administrators/classroom/update.vue') 
        
      },
      { 
        path: '/super-admin-import-class-rooms', 
        component: () => import('pages/administrators/classroom/import-class-rooms.vue') 
        
      },
      { 
        path: '/super-admin-student-landing', 
        component: () => import('pages/administrators/student/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-student', 
        component: () => import('pages/administrators/student/create.vue') 
        
      },
      { 
        path: '/super-admin-update-student', 
        component: () => import('pages/administrators/student/update.vue') 
        
      },
      { 
        path: '/super-admin-import-students', 
        component: () => import('pages/administrators/student/import-students.vue') 
        
      },
      { 
        path: '/super-admin-subject-landing', 
        component: () => import('pages/administrators/subject/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-subject', 
        component: () => import('pages/administrators/subject/create.vue') 
        
      },
      { 
        path: '/super-admin-update-subject', 
        component: () => import('pages/administrators/subject/update.vue') 
        
      },
      { 
        path: '/super-admin-import-subjects', 
        component: () => import('src/pages/administrators/subject/import-subjects.vue') 
        
      },
      { 
        path: '/super-admin-assessment-landing', 
        component: () => import('pages/administrators/assessment/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-assessment', 
        component: () => import('pages/administrators/assessment/create.vue') 
        
      },
      { 
        path: '/super-admin-update-assessment', 
        component: () => import('pages/administrators/assessment/update.vue') 
        
      },
      { 
        path: '/super-admin-import-assessments', 
        component: () => import('pages/administrators/assessment/import-assessments.vue') 
        
      },
      { 
        path: '/super-admin-lesson-landing', 
        component: () => import('pages/administrators/lesson/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-lesson', 
        component: () => import('pages/administrators/lesson/create.vue') 
        
      },
      { 
        path: '/super-admin-update-lesson', 
        component: () => import('pages/administrators/lesson/update.vue') 
        
      },
      { 
        path: '/super-admin-school-landing', 
        component: () => import('pages/administrators/school/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-school', 
        component: () => import('pages/administrators/school/create.vue') 
        
      },
      { 
        path: '/super-admin-update-school', 
        component: () => import('pages/administrators/school/update.vue') 
        
      },
      { 
        path: '/super-admin-result-landing', 
        component: () => import('pages/administrators/result/landing.vue') 
        
      },
      { 
        path: '/super-admin-results', 
        component: () => import('pages/administrators/result/results') 
        
      },
      { 
        path: '/super-admin-create-result', 
        component: () => import('pages/administrators/result/create.vue') 
        
      },
      { 
        path: '/super-admin-update-result', 
        component: () => import('pages/administrators/result/update.vue') 
        
      },
      { 
        path: '/super-admin-import-results', 
        component: () => import('pages/administrators/result/import-results.vue') 
        
      },
      { 
        path: '/super-admin-single-student-results-analysis', 
        component: () => import('pages/administrators/result/analysis/SummariedResults.vue') 
        
      },
      { 
        path: '/super-admin-students-positions-analysis', 
        component: () => import('pages/administrators/result/analysis/StudentsPositions.vue') 
        
      },
      { 
        path: '/super-admin-summarized-students-result', 
        component: () => import('pages/administrators/result/analysis/ComputeStudentsSummaryResults.vue') 
        
      },
      { 
        path: '/super-admin-summarized-students-result-by-date', 
        component: () => import('pages/administrators/result/analysis/ComputeStudentsResultsByDateRange.vue') 
        
      },
      { 
        path: '/super-admin-subscription-landing', 
        component: () => import('pages/administrators/subscription/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-subscription', 
        component: () => import('pages/administrators/subscription/create-subscription.vue') 
        
      },
      { 
        path: '/super-admin-update-subscription', 
        component: () => import('pages/administrators/subscription/update-subscription.vue') 
        
      },
      { 
        path: '/super-admin-select-students', 
        component: () => import('pages/administrators/subscription/select-students.vue') 
        
      },
      { 
        path: '/super-admin-total-amount', 
        component: () => import('pages/administrators/subscription/totalamount.vue') 
        
      },
      { 
        path: '/super-admin-payment-response', 
        component: () => import('pages/administrators/subscription/payment-response.vue') 
        
      },
      { 
        path: '/super-admin-generated-tokens', 
        component: () => import('pages/administrators/subscription/generated-tokens.vue') 
        
      },
      { 
        path: '/super-admin-chart', 
        component: () => import('components/Charts/Chart.vue') 
        
      },
      { 
        path: '/super-admin-filemanagement-landing', 
        component: () => import('pages/administrators/filemanagement/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-file', 
        component: () => import('pages/administrators/filemanagement/create.vue') 
        
      },
      { 
        path: '/super-admin-update-file', 
        component: () => import('pages/administrators/filemanagement/update.vue') 
        
      },
      { 
        path: '/super-admin-branding-landing',
        component: () => import('pages/administrators/branding/landing.vue') 
        
      },
      { 
        path: '/super-admin-logo-landing', 
        component: () => import('pages/administrators/branding/logo/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-logo', 
        component: () => import('pages/administrators/branding/logo/create.vue') 
        
      },
      { 
        path: '/super-admin-update-logo', 
        component: () => import('pages/administrators/branding/logo/update.vue') 
        
      },
      { 
        path: '/super-admin-mission-landing', 
        component: () => import('pages/administrators/branding/mission/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-mission', 
        component: () => import('pages/administrators/branding/mission/create.vue') 
        
      },
      { 
        path: '/super-admin-update-mission', 
        component: () => import('pages/administrators/branding/mission/update.vue') 
        
      },
      { 
        path: '/super-admin-vision-landing', 
        component: () => import('pages/administrators/branding/vision/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-vision', 
        component: () => import('pages/administrators/branding/vision/create.vue') 
        
      },
      { 
        path: '/super-admin-update-vision', 
        component: () => import('pages/administrators/branding/vision/update.vue') 
        
      },
      { 
        path: '/super-admin-news-landing', 
        component: () => import('pages/administrators/branding/news/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-news', 
        component: () => import('pages/administrators/branding/news/create.vue') 
        
      },
      { 
        path: '/super-admin-update-news', 
        component: () => import('pages/administrators/branding/news/update.vue') 
        
      },
      { 
        path: '/super-admin-home-landing', 
        component: () => import('pages/administrators/branding/home/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-home', 
        component: () => import('pages/administrators/branding/home/create.vue') 
        
      },
      { 
        path: '/super-admin-update-home', 
        component: () => import('pages/administrators/branding/home/update.vue') 
        
      },
      { 
        path: '/super-admin-core-value-landing', 
        component: () => import('pages/administrators/branding/core-value/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-core-value', 
        component: () => import('pages/administrators/branding/core-value/create.vue') 
        
      },
      { 
        path: '/super-admin-update-core-value', 
        component: () => import('pages/administrators/branding/core-value/update.vue') 
        
      },
      { 
        path: '/super-admin-about-us-landing', 
        component: () => import('pages/administrators/about-us/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-about-us', 
        component: () => import('pages/administrators/about-us/create.vue') 
        
      },
      { 
        path: '/super-admin-update-about-us', 
        component: () => import('pages/administrators/about-us/update.vue') 
        
      },
      { 
        path: '/super-admin-contact-landing', 
        component: () => import('pages/administrators/contact/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-contact', 
        component: () => import('pages/administrators/contact/create.vue') 
        
      },
      { 
        path: '/super-admin-update-contact', 
        component: () => import('pages/administrators/contact/update.vue') 
        
      },
      { 
        path: '/super-admin-grade-landing', 
        component: () => import('pages/administrators/grade/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-grade', 
        component: () => import('pages/administrators/grade/create.vue') 
        
      },
      { 
        path: '/super-admin-update-grade', 
        component: () => import('pages/administrators/grade/update.vue') 
        
      },
      { 
        path: '/super-admin-import-grades', 
        component: () => import('pages/administrators/grade/import-grades.vue') 
        
      },
      { 
        path: '/super-admin-level-landing', 
        component: () => import('pages/administrators/level/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-level', 
        component: () => import('pages/administrators/level/create.vue') 
        
      },
      { 
        path: '/super-admin-update-level', 
        component: () => import('pages/administrators/level/update.vue') 
        
      },
      { 
        path: '/super-admin-import-levels', 
        component: () => import('pages/administrators/level/import-levels.vue') 
        
      },
      { 
        path: '/super-admin-session-landing', 
        component: () => import('pages/administrators/session/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-session', 
        component: () => import('pages/administrators/session/create.vue') 
        
      },
      { 
        path: '/super-admin-update-session', 
        component: () => import('pages/administrators/session/update.vue') 
        
      },
      { 
        path: '/super-admin-import-sessions', 
        component: () => import('pages/administrators/session/import-sessions.vue') 
        
      },
      { 
        path: '/super-admin-exam-landing', 
        component: () => import('pages/administrators/exam/landing.vue') 
        
      },
      { 
        path: '/super-admin-exam-question-landing', 
        component: () => import('src/pages/administrators/exam/question-landing.vue') 
        
      },
      { 
        path: '/super-admin-create-exam-question', 
        component: () => import('pages/administrators/exam/create.vue') 
        
      },
      { 
        path: '/super-admin-update-exam-question', 
        component: () => import('pages/administrators/exam/update.vue')
        
      },
      { 
        path: '/super-admin-import-exam-questions', 
        component: () => import('pages/administrators/exam/import-exam-questions.vue') 
        
      },
      { 
        path: '/super-admin-exam-answer-landing', 
        component: () => import('pages/administrators/exam/answer-landing.vue') 
        
      },
      { 
        path:'/super-admin-import-exam-answers',  
        component: () => import('pages/administrators/exam/import-exam-answers.vue') 
        
      },
      { 
        path: '/super-admin-create-exam-question',   
        component: () => import('pages/administrators/exam/create-answer.vue') 
        
      },
      { 
        path: '/super-admin-take-exam-question',   
        component: () => import('pages/administrators/exam/exam-rules.vue') 
        
      },
      { 
        path: '/super-admin-start-exam',   
        component: () => import('pages/administrators/exam/start-exam.vue') 
        
      },
      { 
        path: '/super-admin-exam-score',   
        component: () => import('pages/administrators/exam/exam-score.vue') 
        
      },
      { 
        path: '/super-admin-lesson-note-landing', 
        component: () => import('pages/administrators/lesson-note/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-lesson-note', 
        component: () => import('pages/administrators/lesson-note/create.vue') 
        
      },
      { 
        path: '/super-admin-update-lesson-note', 
        component: () => import('pages/administrators/lesson-note/update.vue') 
        
      },
      { 
        path: '/super-admin-lesson-note-section-landing', 
        component: () => import('pages/administrators/lesson-note-section/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-lesson-note-section', 
        component: () => import('pages/administrators/lesson-note-section/create.vue') 
        
      },
      { 
        path: '/super-admin-update-lesson-note-section', 
        component: () => import('pages/administrators/lesson-note-section/update.vue') 
        
      },
      { 
        path: '/super-admin-ca-landing', 
        component: () => import('pages/administrators/ca/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-ca', 
        component: () => import('pages/administrators/ca/create.vue') 
        
      },
      { 
        path: '/super-admin-update-ca', 
        component: () => import('pages/administrators/ca/update.vue') 
        
      },
      { 
        path: '/super-admin-ca-question-landing', 
        component: () => import('pages/administrators/ca-question/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-ca-question', 
        component: () => import('pages/administrators/ca-question/create.vue') 
        
      },
      { 
        path: '/super-admin-update-ca-question', 
        component: () => import('pages/administrators/ca-question/update.vue') 
        
      },
      { 
        path: '/super-admin-ca-answer-landing', 
        component: () => import('pages/administrators/ca-answer/landing.vue') 
        
      },
      { 
        path: '/super-admin-create-ca-answer', 
        component: () => import('pages/administrators/ca-answer/create.vue') 
        
      },
      { 
        path: '/super-admin-update-ca-answer', 
        component: () => import('pages/administrators/ca-answer/update.vue') 
        
      },
      { 
        path: '/super-admin-online-learning-landing', 
        component: () => import('pages/administrators/online-learning/landing.vue') 
        
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { 
        path: '/admin', 
        component: () => import('pages/administrators/landing.vue') 
        
      },
      { 
        path: '/user-landing', 
        component: () => import('pages/administrators/user/landing.vue') 
        
      },
      { 
        path: '/create-user', 
        component: () => import('pages/administrators/user/create.vue') 
        
      },
      { 
        path: '/update-user', 
        component: () => import('pages/administrators/user/update.vue') 
        
      },
      { 
        path: '/import-users', 
        component: () => import('src/pages/administrators/user/import-users.vue') 
        
      },
      { 
        path: '/unconfirmed-users', 
        component: () => import('src/pages/administrators/user/confirm-users.vue') 
        
      },
      { 
        path: '/staff-landing', 
        component: () => import('pages/administrators/staff/landing.vue') 
        
      },
      { 
        path: '/create-staff', 
        component: () => import('pages/administrators/staff/create.vue') 
        
      },
      { 
        path: '/update-staff', 
        component: () => import('pages/administrators/staff/update.vue') 
        
      },
      { 
        path: '/import-staff', 
        component: () => import('pages/administrators/staff/import-staff.vue') 
        
      },
      { 
        path: '/classroom-landing', 
        component: () => import('pages/administrators/classroom/landing.vue') 
        
      },
      { 
        path: '/create-class-room', 
        component: () => import('pages/administrators/classroom/create.vue') 
        
      },
      { 
        path: '/update-class-room', 
        component: () => import('pages/administrators/classroom/update.vue') 
        
      },
      { 
        path: '/import-class-rooms', 
        component: () => import('pages/administrators/classroom/import-class-rooms.vue') 
        
      },
      { 
        path: '/student-landing', 
        component: () => import('pages/administrators/student/landing.vue') 
        
      },
      { 
        path: '/create-student', 
        component: () => import('pages/administrators/student/create.vue') 
        
      },
      { 
        path: '/update-student', 
        component: () => import('pages/administrators/student/update.vue') 
        
      },
      { 
        path: '/import-students', 
        component: () => import('pages/administrators/student/import-students.vue') 
        
      },
      { 
        path: '/subject-landing', 
        component: () => import('pages/administrators/subject/landing.vue') 
        
      },
      { 
        path: '/create-subject', 
        component: () => import('pages/administrators/subject/create.vue') 
        
      },
      { 
        path: '/update-subject', 
        component: () => import('pages/administrators/subject/update.vue') 
        
      },
      { 
        path: '/import-subjects', 
        component: () => import('src/pages/administrators/subject/import-subjects.vue') 
        
      },
      { 
        path: '/assessment-landing', 
        component: () => import('pages/administrators/assessment/landing.vue') 
        
      },
      { 
        path: '/create-assessment', 
        component: () => import('pages/administrators/assessment/create.vue') 
        
      },
      { 
        path: '/update-assessment', 
        component: () => import('pages/administrators/assessment/update.vue') 
        
      },
      { 
        path: '/import-assessments', 
        component: () => import('pages/administrators/assessment/import-assessments.vue') 
        
      },
      { 
        path: '/lesson-landing', 
        component: () => import('pages/administrators/lesson/landing.vue') 
        
      },
      { 
        path: '/create-lesson', 
        component: () => import('pages/administrators/lesson/create.vue') 
        
      },
      { 
        path: '/update-lesson', 
        component: () => import('pages/administrators/lesson/update.vue') 
        
      },
      { 
        path: '/update-school', 
        component: () => import('pages/administrators/school/update.vue') 
        
      },
      { 
        path: '/result-landing', 
        component: () => import('pages/administrators/result/landing.vue') 
        
      },
      { 
        path: '/results', 
        component: () => import('pages/administrators/result/results') 
        
      },
      { 
        path: '/create-result', 
        component: () => import('pages/administrators/result/create.vue') 
        
      },
      { 
        path: '/update-result', 
        component: () => import('pages/administrators/result/update.vue') 
        
      },
      { 
        path: '/import-results', 
        component: () => import('pages/administrators/result/import-results.vue') 
        
      },
      { 
        path: '/single-student-results-analysis', 
        component: () => import('pages/administrators/result/analysis/SummariedResults.vue') 
        
      },
      { 
        path: '/students-positions-analysis', 
        component: () => import('pages/administrators/result/analysis/StudentsPositions.vue') 
        
      },
      { 
        path: '/summarized-students-result', 
        component: () => import('pages/administrators/result/analysis/ComputeStudentsSummaryResults.vue') 
        
      },
      { 
        path: '/summarized-students-result-by-date', 
        component: () => import('pages/administrators/result/analysis/ComputeStudentsResultsByDateRange.vue') 
        
      },
      { 
        path: '/subscription-landing', 
        component: () => import('pages/administrators/subscription/landing.vue') 
        
      },
      { 
        path: '/create-subscription', 
        component: () => import('pages/administrators/subscription/create-subscription.vue') 
        
      },
      { 
        path: '/update-subscription', 
        component: () => import('pages/administrators/subscription/update-subscription.vue') 
        
      },
      { 
        path: '/select-students', 
        component: () => import('pages/administrators/subscription/select-students.vue') 
        
      },
      { 
        path: '/total-amount', 
        component: () => import('pages/administrators/subscription/totalamount.vue') 
        
      },
      { 
        path: '/payment-response', 
        component: () => import('pages/administrators/subscription/payment-response.vue') 
        
      },
      { 
        path: '/generated-tokens', 
        component: () => import('pages/administrators/subscription/generated-tokens.vue') 
        
      },
      { 
        path: '/chart', 
        component: () => import('components/Charts/Chart.vue') 
        
      },
      { 
        path: '/filemanagement-landing', 
        component: () => import('pages/administrators/filemanagement/landing.vue') 
        
      },
      { 
        path: '/create-file', 
        component: () => import('pages/administrators/filemanagement/create.vue') 
        
      },
      { 
        path: '/update-file', 
        component: () => import('pages/administrators/filemanagement/update.vue') 
        
      },
      { 
        path: '/branding-landing',
        component: () => import('pages/administrators/branding/landing.vue') 
        
      },
      { 
        path: '/logo-landing', 
        component: () => import('pages/administrators/branding/logo/landing.vue') 
        
      },
      { 
        path: '/create-logo', 
        component: () => import('pages/administrators/branding/logo/create.vue') 
        
      },
      { 
        path: '/update-logo', 
        component: () => import('pages/administrators/branding/logo/update.vue') 
        
      },
      { 
        path: '/mission-landing', 
        component: () => import('pages/administrators/branding/mission/landing.vue') 
        
      },
      { 
        path: '/create-mission', 
        component: () => import('pages/administrators/branding/mission/create.vue') 
        
      },
      { 
        path: '/update-mission', 
        component: () => import('pages/administrators/branding/mission/update.vue') 
        
      },
      { 
        path: '/vision-landing', 
        component: () => import('pages/administrators/branding/vision/landing.vue') 
        
      },
      { 
        path: '/create-vision', 
        component: () => import('pages/administrators/branding/vision/create.vue') 
        
      },
      { 
        path: '/update-vision', 
        component: () => import('pages/administrators/branding/vision/update.vue') 
        
      },
      { 
        path: '/news-landing', 
        component: () => import('pages/administrators/branding/news/landing.vue') 
        
      },
      { 
        path: '/create-news', 
        component: () => import('pages/administrators/branding/news/create.vue') 
        
      },
      { 
        path: '/update-news', 
        component: () => import('pages/administrators/branding/news/update.vue') 
        
      },
      { 
        path: '/home-landing', 
        component: () => import('pages/administrators/branding/home/landing.vue') 
        
      },
      { 
        path: '/create-home', 
        component: () => import('pages/administrators/branding/home/create.vue') 
        
      },
      { 
        path: '/update-home', 
        component: () => import('pages/administrators/branding/home/update.vue') 
        
      },
      { 
        path: '/core-value-landing', 
        component: () => import('pages/administrators/branding/core-value/landing.vue') 
        
      },
      { 
        path: '/create-core-value', 
        component: () => import('pages/administrators/branding/core-value/create.vue') 
        
      },
      { 
        path: '/update-core-value', 
        component: () => import('pages/administrators/branding/core-value/update.vue') 
        
      },
      { 
        path: '/about-us-landing', 
        component: () => import('pages/administrators/about-us/landing.vue') 
        
      },
      { 
        path: '/create-about-us', 
        component: () => import('pages/administrators/about-us/create.vue') 
        
      },
      { 
        path: '/update-about-us', 
        component: () => import('pages/administrators/about-us/update.vue') 
        
      },
      { 
        path: '/contact-landing', 
        component: () => import('pages/administrators/contact/landing.vue') 
        
      },
      { 
        path: '/create-contact', 
        component: () => import('pages/administrators/contact/create.vue') 
        
      },
      { 
        path: '/update-contact', 
        component: () => import('pages/administrators/contact/update.vue') 
        
      },
      { 
        path: '/grade-landing', 
        component: () => import('pages/administrators/grade/landing.vue') 
        
      },
      { 
        path: '/create-grade', 
        component: () => import('pages/administrators/grade/create.vue') 
        
      },
      { 
        path: '/update-grade', 
        component: () => import('pages/administrators/grade/update.vue') 
        
      },
      { 
        path: '/import-grades', 
        component: () => import('pages/administrators/grade/import-grades.vue') 
        
      },
      { 
        path: '/level-landing', 
        component: () => import('pages/administrators/level/landing.vue') 
        
      },
      { 
        path: '/create-level', 
        component: () => import('pages/administrators/level/create.vue') 
        
      },
      { 
        path: '/update-level', 
        component: () => import('pages/administrators/level/update.vue') 
        
      },
      { 
        path: '/import-levels', 
        component: () => import('pages/administrators/level/import-levels.vue') 
        
      },
      { 
        path: '/session-landing', 
        component: () => import('pages/administrators/session/landing.vue') 
        
      },
      { 
        path: '/create-session', 
        component: () => import('pages/administrators/session/create.vue') 
        
      },
      { 
        path: '/update-session', 
        component: () => import('pages/administrators/session/update.vue') 
        
      },
      { 
        path: '/import-sessions', 
        component: () => import('pages/administrators/session/import-sessions.vue') 
        
      },
      { 
        path: '/exam-landing', 
        component: () => import('pages/administrators/exam/landing.vue') 
        
      },
      { 
        path: '/exam-question-landing', 
        component: () => import('src/pages/administrators/exam/question-landing.vue') 
        
      },
      { 
        path: '/create-exam-question', 
        component: () => import('pages/administrators/exam/create.vue') 
        
      },
      { 
        path: '/update-exam-question', 
        component: () => import('pages/administrators/exam/update.vue')
        
      },
      { 
        path: '/import-exam-questions', 
        component: () => import('pages/administrators/exam/import-exam-questions.vue') 
        
      },
      { 
        path: '/exam-answer-landing', 
        component: () => import('pages/administrators/exam/answer-landing.vue') 
        
      },
      { 
        path:'/import-exam-answers',  
        component: () => import('pages/administrators/exam/import-exam-answers.vue') 
        
      },
      { 
        path: '/create-exam-question',   
        component: () => import('pages/administrators/exam/create-answer.vue') 
        
      },
      { 
        path: '/take-exam-question',   
        component: () => import('pages/administrators/exam/exam-rules.vue') 
        
      },
      { 
        path: '/start-exam',   
        component: () => import('pages/administrators/exam/start-exam.vue') 
        
      },
      { 
        path: '/exam-score',   
        component: () => import('pages/administrators/exam/exam-score.vue') 
        
      },
      { 
        path: '/lesson-note-landing', 
        component: () => import('pages/administrators/lesson-note/landing.vue') 
        
      },
      { 
        path: '/create-lesson-note', 
        component: () => import('pages/administrators/lesson-note/create.vue') 
        
      },
      { 
        path: '/update-lesson-note', 
        component: () => import('pages/administrators/lesson-note/update.vue') 
        
      },
      { 
        path: '/lesson-note-section-landing', 
        component: () => import('pages/administrators/lesson-note-section/landing.vue') 
        
      },
      { 
        path: '/create-lesson-note-section', 
        component: () => import('pages/administrators/lesson-note-section/create.vue') 
        
      },
      { 
        path: '/update-lesson-note-section', 
        component: () => import('pages/administrators/lesson-note-section/update.vue') 
        
      },
      { 
        path: '/ca-landing', 
        component: () => import('pages/administrators/ca/landing.vue') 
        
      },
      { 
        path: '/create-ca', 
        component: () => import('pages/administrators/ca/create.vue') 
        
      },
      { 
        path: '/update-ca', 
        component: () => import('pages/administrators/ca/update.vue') 
        
      },
      { 
        path: '/ca-question-landing', 
        component: () => import('pages/administrators/ca-question/landing.vue') 
        
      },
      { 
        path: '/create-ca-question', 
        component: () => import('pages/administrators/ca-question/create.vue') 
        
      },
      { 
        path: '/update-ca-question', 
        component: () => import('pages/administrators/ca-question/update.vue') 
        
      },
      { 
        path: '/ca-answer-landing', 
        component: () => import('pages/administrators/ca-answer/landing.vue') 
        
      },
      { 
        path: '/create-ca-answer', 
        component: () => import('pages/administrators/ca-answer/create.vue') 
        
      },
      { 
        path: '/update-ca-answer', 
        component: () => import('pages/administrators/ca-answer/update.vue') 
        
      },
      { 
        path: '/online-learning-landing', 
        component: () => import('pages/administrators/online-learning/landing.vue') 
        
      },
      { 
        path: '/socialize-landing', 
        component: () => import('pages/administrators/socialize/landing-socialize.vue') 
        
      },
      { 
        path: '/stories-landing', 
        component: () => import('pages/administrators/socialize/landing.vue') 
        
      },
      { 
        path: '/chats-landing', 
        component: () => import('pages/administrators/chat/landing.vue') 
        
      },
    ]
  },
  {
    path: '/member',
    component: () => import('layouts/InstructorLayout.vue'),
    children: [
      { 
        path: '/member', 
        component: () => import('pages/instructors/landing.vue') 
        
      },
      { 
        path: '/member-update-user', 
        component: () => import('pages/administrators/user/update.vue') 
        
      },
      { 
        path: '/member-socialize-landing', 
        component: () => import('pages/administrators/socialize/landing-socialize.vue') 
        
      },
      { 
        path: '/member-stories-landing', 
        component: () => import('pages/administrators/socialize/landing.vue') 
        
      },
      { 
        path: '/member-chats-landing', 
        component: () => import('pages/administrators/chat/landing.vue') 
        
      },
    ]
  },
  {
    path: '/student',
    component: () => import('src/layouts/StudentLayout.vue'),
    children: [
      { 
        path: '/student', 
        component: () => import('pages/students/landing.vue') 
        
      },
      { 
        path: '/student-update-user', 
        component: () => import('pages/administrators/user/update.vue') 
        
      },
      { 
        path: '/student-filemanagement-landing', 
        component: () => import('pages/administrators/filemanagement/student-landing.vue') 
        
      },
      { 
        path: '/student-view-file', 
        component: () => import('pages/administrators/filemanagement/student-view.vue') 
        
      },
      { 
        path: '/student-lesson-landing', 
        component: () => import('pages/administrators/lesson/landing.vue') 
        
      },
      { 
        path: '/student-create-lesson', 
        component: () => import('pages/administrators/lesson/create.vue') 
        
      },
      { 
        path: '/student-update-lesson', 
        component: () => import('pages/administrators/lesson/update.vue') 
        
      },
      { 
        path: '/student-result-landing', 
        component: () => import('pages/administrators/result/landing.vue') 
        
      },
      { 
        path: '/student-results', 
        component: () => import('pages/administrators/result/results') 
        
      },
      { 
        path: '/student-create-result', 
        component: () => import('pages/administrators/result/create.vue') 
        
      },
      { 
        path: '/student-update-result', 
        component: () => import('pages/administrators/result/update.vue') 
        
      },
      { 
        path: '/student-import-results', 
        component: () => import('pages/administrators/result/import-results.vue') 
        
      },
      { 
        path: '/student-single-student-results-analysis', 
        component: () => import('pages/administrators/result/analysis/SummariedResults.vue') 
        
      },
      { 
        path: '/student-students-positions-analysis', 
        component: () => import('pages/administrators/result/analysis/StudentsPositions.vue') 
        
      },
      { 
        path: '/student-summarized-students-result', 
        component: () => import('pages/administrators/result/analysis/ComputeStudentsSummaryResults.vue') 
        
      },
      { 
        path: '/student-summarized-students-result-by-date', 
        component: () => import('pages/administrators/result/analysis/ComputeStudentsResultsByDateRange.vue') 
        
      },
      { 
        path: '/student-chart', 
        component: () => import('components/Charts/Chart.vue') 
        
      },
      { 
        path: '/student-online-learning-landing', 
        component: () => import('pages/administrators/online-learning/landing.vue') 
        
      },
      { 
        path: '/student-lesson-note-landing', 
        component: () => import('pages/administrators/lesson-note/landing.vue') 
        
      },
      { 
        path: '/student-exam-landing', 
        component: () => import('pages/administrators/exam/landing.vue') 
        
      },
      { 
        path: '/student-exam-question-landing', 
        component: () => import('src/pages/administrators/exam/question-landing.vue') 
        
      },
      { 
        path: '/student-exam-answer-landing', 
        component: () => import('pages/administrators/exam/answer-landing.vue') 
        
      },
      { 
        path: '/student-take-exam-question',   
        component: () => import('pages/administrators/exam/exam-rules.vue') 
        
      },
      { 
        path: '/student-start-exam',   
        component: () => import('pages/administrators/exam/start-exam.vue') 
        
      },
      { 
        path: '/student-exam-score',   
        component: () => import('pages/administrators/exam/exam-score.vue') 
        
      },
    ]
  },
  {
    path: '/referal',
    component: () => import('src/layouts/ReferalLayout.vue'),
    children: [
      { 
        path: '/referal', 
        component: () => import('pages/referals/landing.vue') 
        
      },
      { 
        path: '/referal-schools', 
        component: () => import('pages/referals/referal-schools.vue') 
        
      },
      { 
        path: '/update-referal', 
        component: () => import('pages/referals/update-referal.vue') 
        
      },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
