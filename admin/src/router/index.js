import { createRouter, createWebHashHistory } from 'vue-router'
import RoutesConfig from './config'


const routes = [
 {
  path: '/login',
  name: 'login',
  component: () => import('../views/Login.vue')
 },
 {
  path: '/mainbox',
  name: 'mainbox',
  component: () => import('../views/MainBox.vue')
 }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

RoutesConfig.forEach(item => {
  router.addRoute('mainbox', item)
})

export default router
