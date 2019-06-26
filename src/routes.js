const routes = [
  {
    path: '/',
    redirect: '/home',
    hideInmenu: true
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    hideInmenu: false
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    hideInmenu: false
  }
]

export default routes
