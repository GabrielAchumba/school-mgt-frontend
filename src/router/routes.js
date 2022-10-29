
const routes = [
  {
    path: '/',
    component: () => import('layouts/AuthenticationLayout.vue'),
    children: [
      { 
        path: '/', 
        component: () => import('pages/authentication/landing.vue') 
        
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
        path: '/classroom-landing', 
        component: () => import('pages/administrators/classroom/landing.vue') 
        
      },
      { 
        path: '/create-classroom', 
        component: () => import('pages/administrators/classroom/create.vue') 
        
      },
      { 
        path: '/update-classroom', 
        component: () => import('pages/administrators/classroom/update.vue') 
        
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
        component: () => import('pages/administrators/branding/logo/landing.vue') 
        
      },
      { 
        path: '/create-home', 
        component: () => import('pages/administrators/branding/home/create.vue') 
        
      },
      { 
        path: '/update-home', 
        component: () => import('pages/administrators/branding/home/update.vue') 
        
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
