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

const ConfigRouter = () => {
  RoutesConfig.forEach((item) => {
    router.addRoute("mainbox", item);
  });
};

ConfigRouter();

router.beforeEach((to, from, next) => {
   if(to.path === '/login') {
     next()
   } else {
      const token = localStorage.getItem('token')
      if(token) {
        next()
      } else {
        next('/login')
      }
   }
})

export default router
