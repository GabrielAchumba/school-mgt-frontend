
const routes = [
  {
    path: '/',
    component: () => import('layouts/AuthenticationLayout.vue'),
    children: [
      { 
        path: '/', 
        component: () => import('pages/authentication/landing.vue') 
        
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
    ]
  },
  {
    path: '/users',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '/users', 
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
