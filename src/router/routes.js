
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
