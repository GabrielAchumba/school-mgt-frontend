
const routes = [
  {
    path: '/',
    component: () => import('layouts/NewRealLayout.vue'),
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
    path: '/vendor',
    component: () => import('layouts/VendorLayout.vue'),
    children: [
      { 
        path: '/vendor', 
        component: () => import('pages/administrators/landing.vue') 
        
      },
      { 
        path: '/vendor-landing', 
        component: () => import('pages/administrators/landing.vue') 
        
      },
      { 
        path: '/lands-landing', 
        component: () => import('pages/administrators/land/landing.vue') 
        
      },
      { 
        path: '/create-land', 
        component: () => import('pages/administrators/land/create.vue') 
        
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
    ]
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
