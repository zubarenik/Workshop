import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/project',
    redirect: '/project/style',
  },
  {
    path: '/project/style',
    name: 'Project',
    component: () => import('../views/Project.vue')
  },
  {
    path: '/project/style/:id',
    name: 'Style',
    component: () => import('../views/Style.vue')
  },
  {
    path: '/project/type',
    name: 'Type',
    component: () => import('../views/Type.vue')
  },
  {
    path: '/project/bedroom',
    name: 'Bedroom',
    component: () => import('../views/Bedroom.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
