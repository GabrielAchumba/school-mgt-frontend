
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '/', 
        component: () => import('pages/home/index.vue') 
        
      },
      { 
        path: '/contact', 
        component: () => import('pages/home/contactus.vue') 
      },
      { 
        path: '/about', 
        component: () => import('pages/home/aboutus.vue') 
      },
      { 
        path: '/profiles', 
        component: () => import('pages/personalprofile/index.vue') 
      },
      { 
        path: '/achievements', 
        component: () => import('pages/achievements/index.vue') 
      },
      { 
        path: '/educations', 
        component: () => import('pages/educations/index.vue') 
      },
      {
      path: '/employments', 
      component: () => import('pages/employment/index.vue') 
      },
      {
      path: '/qualifications', 
      component: () => import('pages/qualifications/index.vue') 
      },
      {
      path: '/skills', 
      component: () => import('pages/skills/index.vue') 
      },
      {
      path: '/hobbies', 
      component: () => import('pages/Hobbies/index.vue') 
      },
      {
      path: '/references', 
      component: () => import('pages/references/index.vue') 
      },
      {
        path: '/statementofresults', 
        component: () => import('pages/statementOfResults/index.vue') 
        }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { 
        path: '/admin', 
        component: () => import('pages/administrators/index.vue') 
        
      },
      { 
        path: '/options', 
        component: () => import('pages/administrators/options.vue') 
        
      }
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
