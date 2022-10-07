
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
        
      }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '/user', 
        component: () => import('pages/users/landing.vue') 
        
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
